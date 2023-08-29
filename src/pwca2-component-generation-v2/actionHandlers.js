import {actionTypes} from '@servicenow/ui-core';
import populateQuestionAnswerSet from './populateQuestionAnswerSet';
import filterComponentData from './filterComponentData';
import { createHttpEffect } from '@servicenow/ui-effect-http';

import {
    BASE_URL,
    SAVE_ACTION,
    SUBMIT_ACTION,
    STATE_UPDATE_ACTION,
    NOW_RADIO_BUTTONS_VALUE_SET,
    NOW_DROPDOWN_SELECTED_ITEMS_SET,
    NOW_CHECKBOX_CHECKED_SET,
    NOW_TOGGLE_CHECKED_SET,
    NOW_TEXTAREA_VALUE_SET,
    NOW_SELECT_SELECTED_ITEM_SET,
    NOW_TYPEAHEAD_VALUE_SET,
    NOW_TYPEAHEAD_MULTI_VALUE_SET,
    PWC_TASK_TABLE,
    PWC_PROJECT_TABLE,
    NO_DATA,
    NOW_BUTTON_CLICKED,
    NOW_INPUT_VALUE_SET,
    ALERT_ACTION,
    ATTACHMENT_TEMPLATE_ACTION,
    UPLOAD_ATTACHMENT_ENDPOINT,
    DELETE_ATTACHMENT_ENDPOINT,
    ATTACHMENT_POST_STARTED,
    ATTACHMENT_POST_REQUESTED,
    ATTACHMENT_POST_SUCCEEDED,
    ATTACHMENT_POST_FAILED,
    ATTACHMENT_DELETE_STARTED,
    ATTACHMENT_DELETE_REQUESTED,
    ATTACHMENT_DELETE_SUCCEEDED,
    ATTACHMENT_DELETE_FAILED,
    ATTACHMENT_URL,
    DELETE_FILES_ACTION,
    ADD_FILES_ACTION,
    NOW_TYPEAHEAD_MULTI_SELECTED_ITEMS_SET,
    NOW_TYPEAHEAD_SELECTED_ITEM_SET,
    NOW_TYPEAHEAD_ENTER_KEYDOWN,
    GET_TABLE_API_PATH,
    TYPEAHEAD_SEARCH_REQUESTED,
    TYPEAHEAD_SEARCH_SUCCEEDED,
    TYPEAHEAD_SEARCH_FAILED,
    NOW_TYPEAHEAD_INVALID_SET,
    NOW_TYPEAHEAD_MULTI_INVALID_SET,
    NOW_TYPEAHEAD_LIST_HIDDEN,
    NOW_PILL_SELECTED_SET,
    NOW_INPUT_INVALID_SET,
    DELETE_FILE_ACTION,
    NOW_INPUT_URL_VALUE_SET,
    NOW_INPUT_URL_INVALID_SET
} from './constants';

const findIndexOfObject = (list, key, keyValue) => {
    for (let index = 0; index < list.length; index++) {
        const listObj = list[index];
        if (listObj[key] == keyValue) {
            return index;
        }
    }

    return -1;
};

const collectAttachedFiles = questionSets => questionSets.reduce((acc, questionSet) => {
    return questionSet.questions.reduce((acc2, question) => {
        if(question.type == "pwc-attachment" && question.value != "") {
            var key = question.value.recordID;
            var keyValue = question.value.attachedFiles;
            
            const attachedFiles = {};
            attachedFiles[key] = keyValue;

            return {...acc2, ...attachedFiles};
        }

        return acc2;
    }, acc);
}, []);


const collectSearchTables = questionSets => questionSets.reduce((acc, questionSet) => {
    return questionSet.questions.reduce((acc2, question) => {
        if((question.type == "now-typeahead" || question.type == "now-typeahead-multi") && question.properties.table != "") {
            const questionObj = {};
            questionObj[question.id] = {};
            questionObj[question.id]["type"] = question.properties.type;
            questionObj[question.id]["table"] = question.properties.table;
            questionObj[question.id]["field"] = question.properties.field || "";
            questionObj[question.id]["options"] = [];

            return {...acc2, ...questionObj};
        }

        return acc2;
    }, acc);
}, []);

const filterRequiredQuestions = (questionAnswerSet, allAttachedFiles, toAddFiles, requiredQuestions) => requiredQuestions.filter((id) => {
    const qaIndex = findIndexOfObject(questionAnswerSet, "id", id);    

    if (qaIndex != -1) {
        const questionAnswerValue = questionAnswerSet[qaIndex]["value"];
        return  questionAnswerValue == "";    
    }

    var keys = Object.keys(allAttachedFiles);

    if (keys.includes(id) && allAttachedFiles[id].length != 0) {        
        return false;
    }

    const fileIndex = findIndexOfObject(toAddFiles, "recordID", id);

    if (fileIndex != -1) {
        return false;
    }

    return true;
});

const collectRequiredQuestions = questionSets => questionSets.reduce((acc, questionSet) => {
    return questionSet.questions.reduce((acc2, question) => {
        if(question.type != "now-heading" && question.type != "now-dropdown" && question.type != "now-input-url" && question.type != "pwc-checklist" && question.type != "now-rich-text" && question.type != "pwc-attachment" && ( question.required == true || question.required == "true")) {            
            return [...acc2, question.id];
        }

        if (question.type == "pwc-attachment" && ( question.required == true || question.required == "true") && (question.value.hasOwnProperty("attachedFiles") && question.value.attachedFiles.length == 0)) {
            return [...acc2, question.value.recordID];
        }

        return acc2;
    }, acc);
}, []);

const getRequiredQuestionsDetail = (questionSets, requiredQuestions) => questionSets.reduce((acc, questionSet) => {
    return questionSet.questions.reduce((acc2, question) => {
        if(question.type != "now-heading" && question.type != "now-dropdown" && question.type != "now-input-url" && question.type != "pwc-checklist" && question.value != "now-rich-text" && question.value != "pwc-attachment" && ( question.required == true || question.required == "true") && requiredQuestions.includes(question.id)) {
            return [...acc2, question];
        }

        if (question.value == "pwc-attachment" && ( question.required == true || question.required == "true")  && requiredQuestions.includes(question.value.recordID)) {
            return [...acc2, question];
        }

        return acc2;
    }, acc);
}, []);

const updateData = (action, state, updateState, dispatch, compType) => {
        const {
            meta: {id}
        } = action;        

        const { type } = action;
        let value = "";

        if (type == "NOW_INPUT#INVALID_SET" || type == "NOW_INPUT_URL#INVALID_SET") {
            value = action.payload.fieldValue;
        } else {
            value = action.payload.value;            
        }

        if (compType == "now-input") {
            const valueList = value.split('-');

            if (valueList.length != 0 && valueList[0].length != 4) {
                value = "";
            }
        }
      

        const {questionAnswerSet, componentData, allAttachedFiles, toAddFiles} = state;
        const copyComponentData = JSON.parse(JSON.stringify(componentData));                    
        
        const copyQuestionAnswerSet = populateQuestionAnswerSet(componentData, questionAnswerSet, {id, value, compType}, "updateValue");
        const filteredComponentData = filterComponentData(copyComponentData, copyQuestionAnswerSet);
        
        const requiredQuestions = collectRequiredQuestions(filteredComponentData.question_sets);        
        const filteredRequiredQuestions = filterRequiredQuestions(copyQuestionAnswerSet, allAttachedFiles, toAddFiles, requiredQuestions);                                    
        const hasRequiredQuestions = filteredRequiredQuestions.length != 0;

        updateState({
            referenceLabel: "",
            referenceOptions: [],
            questionAnswerSet: copyQuestionAnswerSet,
            filteredComponentData,
            filteredRequiredQuestions,
            hasRequiredQuestions
        });
        
        dispatch(STATE_UPDATE_ACTION, {
            state: "updated",
            hasRequiredQuestions
        });
};

const searchData = (action, state, updateState, dispatch) => {
    const payloadValue = action.payload.value;
    const id = action.meta.id;
    const { questionSearchTables, referenceValue } = state;
    
    if (questionSearchTables[id].type == "search" && referenceValue != payloadValue) {
        updateState({
            referenceLabel: questionSearchTables[id].field,
            referenceValue: payloadValue,
            searchQuestionID: id
        });

        dispatch(TYPEAHEAD_SEARCH_REQUESTED, {
            table: questionSearchTables[id]["table"],
            sysparm_query: `${questionSearchTables[id].field}LIKE${payloadValue}`,
            sysparm_fields: `${questionSearchTables[id].field},sys_id`
        });
    }        
};

const renderView = (updateState, dispatch, properties) => {
    const { compdata, disabled } = properties;
    console.log("Question form is generated from the following component input: ");
    console.log(JSON.stringify(compdata, null, '\t'));
    
    if (compdata && compdata.status == 200 && compdata.question_sets.length != 0) {
        const allAttachedFiles = collectAttachedFiles(compdata.question_sets);
        const questionSearchTables = collectSearchTables(compdata.question_sets);
        
        const dragActiveStates = {};
        const keys = Object.keys(allAttachedFiles);
        
        keys.forEach((key) => {
            dragActiveStates[key] = false;
        });

        const questionAnswerSet = populateQuestionAnswerSet(compdata);

        const copyCompData = JSON.parse(JSON.stringify(compdata));
        let isTaskTable = false;
        let isProjectTable = false;
        let isActiveRecord = true;
        let hasValues = false;

        if (compdata.table == PWC_TASK_TABLE) {
            isTaskTable = true;
            isActiveRecord = compdata.active == "1";
            hasValues = compdata.has_values;
        } else if (compdata.table == PWC_PROJECT_TABLE) {
            isProjectTable = true;
            isActiveRecord = compdata.active == "1";
            hasValues = compdata.has_values;
        }

        
        const filteredComponentData = filterComponentData(copyCompData, questionAnswerSet);
        
        let disabledForm = !isActiveRecord;
        let hasRequiredQuestions = false;
        let filteredRequiredQuestions = [];

        if (disabled) {
            disabledForm = disabled;
        } else {                
            const requiredQuestions = collectRequiredQuestions(filteredComponentData.question_sets);
            filteredRequiredQuestions = filterRequiredQuestions(questionAnswerSet, allAttachedFiles, [], requiredQuestions);
            hasRequiredQuestions = filteredRequiredQuestions.length != 0;
        }
        
        updateState({
            componentData: compdata,                
            isLoading: false,
            fetchStatus: "success",                
            hasValues: hasValues,
            recordActive: isActiveRecord,
            closeAlerts: false,
            allAttachedFiles,
            filteredComponentData,
            disabledForm,
            questionAnswerSet,
            isTaskTable,
            isProjectTable,
            hasValues,
            dragActiveStates,
            filteredRequiredQuestions,
            hasRequiredQuestions,
            questionSearchTables
        });

        dispatch(STATE_UPDATE_ACTION, {
            state: "loaded",
            hasRequiredQuestions
        });
    } else {
        updateState({
            isLoading: false,
            fetchStatus: "error",
            errorMessage: NO_DATA,
            closeAlerts: false
        });

        dispatch(STATE_UPDATE_ACTION, {
            state: "error"
        });
    }
}
//STATE_UPDATE_ACTION
export default {
    [actionTypes.COMPONENT_BOOTSTRAPPED]: ({ updateState, properties, dispatch }) => renderView(updateState, dispatch, properties),
    //[RENDER_ACTION]:  ({ updateState, properties }) => renderView(updateState, properties),
    [actionTypes.COMPONENT_PROPERTY_CHANGED]: ({
		action,
        state,
        dispatch
	}) => {
        const payload= action.payload;
        
        const { componentData, hasRequiredQuestions, filteredRequiredQuestions, recordActive, questionAnswerSet, disabledForm } = state;
        var alertData = {};
                   
        const postData = {
            "project_id": componentData.project_id,
            "task_id": "",
            "user_id": componentData.user_id,
            "question_answer_set": questionAnswerSet
        };    
                
        if (payload.name == "state" && (payload.value == "save" || payload.value == "submit")) {
            if (hasRequiredQuestions && payload.value == "submit") {
                const requiredQuestions = getRequiredQuestionsDetail(componentData.question_sets, filteredRequiredQuestions);                
                alertData.category = "required_fields_missing";
                alertData.type = "complex";
                alertData.requiredQuestions = requiredQuestions;
                alertData.message = "";

                dispatch(ALERT_ACTION, alertData);
            } else if (!recordActive) {
                alertData.category = "inactive";
                alertData.type = "simple";
                alertData.message = "Specified record is not active";
                
                dispatch(ALERT_ACTION, alertData);
            } else if (disabledForm) {
                alertData.category = "disabled";
                alertData.type = "simple";
                alertData.message = "Question form is disabled";
                
                dispatch(ALERT_ACTION, alertData);
            } else if (componentData.question_sets.length == 0) {
                alertData.category = "no_data";
                alertData.type = "simple";
                alertData.message = "No Question Sets are passed";
                
                dispatch(ALERT_ACTION, alertData);
            } else if (questionAnswerSet.length == 0 && toRemoveFiles.length == 0 && toAddFiles.length == 0) {
                alertData.category = "no_update";
                alertData.type = "simple";
                alertData.message = "No Data is populated";
                
                dispatch(ALERT_ACTION, alertData);
            } if (payload.value == "save") {                
                dispatch(SAVE_ACTION, postData);
                dispatch(DELETE_FILES_ACTION);
                dispatch(ADD_FILES_ACTION);
            } else if (payload.value == "submit") {
                dispatch(SUBMIT_ACTION, postData);
                dispatch(DELETE_FILES_ACTION);
                dispatch(ADD_FILES_ACTION);
            }
        }
    },
    [NOW_BUTTON_CLICKED]: ({ dispatch, updateState, state, action }) => {
        const { questionAnswerSet, componentData } = state;
        const {
            meta: {id}
        } = action;
        
        const postData = {
            "project_id": componentData.project_id,
            "task_id": componentData.sys_id,
            "user_id": componentData.user_id,
            "question_answer_set": questionAnswerSet
        };

        if (id == "submit") {
            updateState({
                recordActive: false,
                closeAlerts: false
            });

            dispatch(SUBMIT_ACTION, postData);
            dispatch(DELETE_FILES_ACTION);
            dispatch(ADD_FILES_ACTION);
        } else {
            dispatch(SAVE_ACTION, postData);
            dispatch(DELETE_FILES_ACTION);
            dispatch(ADD_FILES_ACTION);
        }        
    },
    [DELETE_FILES_ACTION]: ({ state, dispatch, updateState }) => {
        const { toRemoveFiles } = state;
        console.log(`Files removal for ${toRemoveFiles.length} has been started.`)

        for (let index = 0; index < toRemoveFiles.length; index++) {
            dispatch(ATTACHMENT_DELETE_REQUESTED, {
                "sys_id": toRemoveFiles[index]
            });
        }

        updateState({
            toRemoveFiles: []
        });
    },
    [DELETE_FILE_ACTION]: ({ state, dispatch, updateState }) => {
        const { toRemoveFile } = state;
        console.log(`Files removal for ${toRemoveFile.name} has been started.`)
        
        if (Object.keys(toRemoveFile).length != 0) {
            dispatch(ATTACHMENT_DELETE_REQUESTED, {
                "sys_id": toRemoveFile.id
            });
        }
        
        updateState({
            toRemoveFile: {}
        });
    },
    [ADD_FILES_ACTION]: ({ state, dispatch, updateState }) => {
        const { toAddFiles } = state;
        
        console.log(`${toAddFiles.length} files are added.`);

        for (let index = 0; index < toAddFiles.length; index++) {
            const toAddFile = toAddFiles[index];

            const formData = new FormData();
            formData.append("table_name", toAddFile.tableName);
            formData.append("table_sys_id", toAddFile.recordID);
            formData.append("uploadFile", toAddFile.file, toAddFile.name);

            dispatch(ATTACHMENT_POST_REQUESTED, {
                formData
            });
        }   

        updateState({
            toAddFiles: []
        });
    },
    [ATTACHMENT_TEMPLATE_ACTION]: ({ state, action, updateState }) => {
        const actionID = action.payload.action.id;
        const fileID = action.meta.id;
        const { filteredComponentData, attachments, removeFiles } = state;

        if (actionID == "download") {
            window.open(`${ATTACHMENT_URL}${fileID}`, '_blank');
        } else if (actionID == "remove") {
            const copyFilteredComponentData = JSON.parse(JSON.stringify(filteredComponentData));
            let fileIdentified = false;

            for (let qsIndex = 0; qsIndex < copyFilteredComponentData.question_sets.length; qsIndex++) {
                let questions = copyFilteredComponentData.question_sets[qsIndex]["questions"];
                for (let qIndex = 0; qIndex < questions.length; qIndex++) {
                    let question = questions[qIndex];
                    if (question.type == "pwc-attachment") {
                        let attachmentProperties = question.value.attachmentsProperty;
                        for (let aIndex = 0; aIndex < attachmentProperties.length; aIndex++) {
                            if (attachmentProperties[aIndex]["attachmentID"] == fileID) {
                                attachmentProperties[aIndex]["icon"] = "close-outline";
                                attachmentProperties[aIndex]["attachmentSize"] = "is going to be removed";
                                
                                fileIdentified = true;
                                break;
                            }
                        }                        
                    }

                    if (fileIdentified) {
                        break;
                    }
                }

                if (fileIdentified) {
                    break;
                }
            }        

            const copyRemoveFiles = [...removeFiles];

            copyRemoveFiles.push(fileID);
            
            updateState({
                filteredComponentData: copyFilteredComponentData,
                removeFiles: copyRemoveFiles
            });
            
        } else if (actionID == "undo") {
            const fileIndex = findIndexOfObject(attachments, "attachmentID", fileID);
            const copyFilteredComponentData = JSON.parse(JSON.stringify(filteredComponentData));
            let fileIdentified = false;
            
            for (let qsIndex = 0; qsIndex < copyFilteredComponentData.question_sets.length; qsIndex++) {
                let questions = copyFilteredComponentData.question_sets[qsIndex]["questions"];
                for (let qIndex = 0; qIndex < questions.length; qIndex++) {
                    let question = questions[qIndex];
                    if (question.type == "pwc-attachment") {
                        let attachmentProperties = question.value.attachmentsProperty;
                        for (let aIndex = 0; aIndex < attachmentProperties.length; aIndex++) {
                            if (attachmentProperties[aIndex]["attachmentID"] == fileID) {
                                attachmentProperties[aIndex]["icon"] = attachments[fileIndex]["icon"];
                                attachmentProperties[aIndex]["attachmentSize"] = attachments[fileIndex]["attachmentSize"];
                                
                                fileIdentified = true;
                                break;
                            }
                        }                        
                    }

                    if (fileIdentified) {
                        break;
                    }
                }

                if (fileIdentified) {
                    break;
                }
            }  

            const copyRemoveFiles = [...removeFiles];
            
            for (let index = 0; index < removeFiles.length; index++) {
                if (copyRemoveFiles[index] == fileID) {
                    copyRemoveFiles.splice(index, 1);
                    break;
                }
            }

            updateState({
                filteredComponentData: copyFilteredComponentData,
                removeFiles: copyRemoveFiles
            });
        }
    },
    [ATTACHMENT_POST_REQUESTED]: createHttpEffect(UPLOAD_ATTACHMENT_ENDPOINT, {    
        method: 'POST',    
        headers: {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json"
        },        
        dataParam: 'formData',
        startActionType: ATTACHMENT_POST_STARTED,
        successActionType: ATTACHMENT_POST_SUCCEEDED,
        errorActionType: ATTACHMENT_POST_FAILED
    }),
    /* [ATTACHMENT_POST_STARTED]: ({ state, updateState }) => {
        const { isLoading } = state;

        if (!isLoading) {
            updateState({
                isLoading: true,
                fetchStatus: ""
            });
        }        
    }, */
    [ATTACHMENT_POST_SUCCEEDED]: ({ action, state, updateState }) => {
        console.log("File is attached");
        console.log(JSON.stringify(action, null, '\t'));       
    },
    [ATTACHMENT_POST_FAILED]: ({ action, state, updateState }) => {
        console.log("FAILURE: ERROR");
        console.log(JSON.stringify(action, null, '\t'));        
    },
    /* [ATTACHMENT_DELETE_STARTED]: ({ state, updateState }) => {
        const { isLoading } = state;

        if (!isLoading) {
            updateState({
                isLoading: true,
                fetchStatus: ""
            });
        }        
    }, */
    [ATTACHMENT_DELETE_REQUESTED]: createHttpEffect(DELETE_ATTACHMENT_ENDPOINT, {    
        method: 'DELETE',    
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        pathParams: ["sys_id"],
        startActionType: ATTACHMENT_DELETE_STARTED,
        successActionType: ATTACHMENT_DELETE_SUCCEEDED,
        errorActionType: ATTACHMENT_DELETE_FAILED
    }),
    [ATTACHMENT_DELETE_SUCCEEDED]: ({ action, state, updateState }) => {
        console.log("File is deleted");
        console.log(JSON.stringify(action, null, '\t'));        
    },
    [ATTACHMENT_DELETE_FAILED]: ({ action }) => {
        console.log("FAILURE: ERROR");
        console.log(JSON.stringify(action, null, '\t'));        
    },
    [NOW_DROPDOWN_SELECTED_ITEMS_SET]: ({action, state, updateState, dispatch}) => updateData(action, state, updateState, dispatch, "now-dropdown"),
    [NOW_SELECT_SELECTED_ITEM_SET]: ({action, state, updateState, dispatch}) => updateData(action, state, updateState, dispatch, "now-select"),    
    [NOW_TEXTAREA_VALUE_SET]: ({action, state, updateState, dispatch}) => updateData(action, state, updateState, dispatch, "now-textarea"),
    [NOW_RADIO_BUTTONS_VALUE_SET]: ({action, state, updateState, dispatch}) => updateData(action, state, updateState, dispatch, "now-radio-buttons"),
    [NOW_CHECKBOX_CHECKED_SET]: ({action, state, updateState, dispatch}) => updateData(action, state, updateState, dispatch, "now-checkbox"),
    [NOW_TOGGLE_CHECKED_SET]: ({action, state, updateState, dispatch}) => updateData(action, state, updateState, dispatch, "now-toggle"),
    [NOW_INPUT_VALUE_SET]: ({action, state, updateState, dispatch}) => updateData(action, state, updateState, dispatch, "now-input"),    
    [NOW_INPUT_INVALID_SET]: ({action, state, updateState, dispatch}) => updateData(action, state, updateState, dispatch, "now-input"),
    [NOW_INPUT_VALUE_SET]: ({action, state, updateState, dispatch}) => updateData(action, state, updateState, dispatch, "now-input-url"),    
    [NOW_INPUT_INVALID_SET]: ({action, state, updateState, dispatch}) => updateData(action, state, updateState, dispatch, "now-input-url"),
    [NOW_TYPEAHEAD_VALUE_SET]: ({action, state, updateState, dispatch}) => searchData(action, state, updateState, dispatch),
    [NOW_TYPEAHEAD_MULTI_VALUE_SET]:  ({action, state, updateState, dispatch}) => searchData(action, state, updateState, dispatch),
    [TYPEAHEAD_SEARCH_REQUESTED]: createHttpEffect(`${GET_TABLE_API_PATH}`, {
        pathParams: ["table"],   
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        queryParams: ["sysparm_query", "sysparm_fields"],
        successActionType: TYPEAHEAD_SEARCH_SUCCEEDED,
        errorActionType: TYPEAHEAD_SEARCH_FAILED,
    }),
    [TYPEAHEAD_SEARCH_SUCCEEDED]: ({ action, state, updateState }) => {        
        const { referenceLabel, questionSearchTables, searchQuestionID } = state;          
        const result = action.payload.result;

        const options = result.map((option) => {
            return {
                "id": option.sys_id,
                "label": option[referenceLabel]
            };
        });

        const copyQuestionSearchTables = {...questionSearchTables};
        
        copyQuestionSearchTables[searchQuestionID].options = options;

        console.log(`Search Succeeded with following options: ${JSON.stringify(options, null, '\t')}`);

        updateState({
            referenceOptions: options,            
            questionSearchTables: copyQuestionSearchTables
        });
    },
    [TYPEAHEAD_SEARCH_FAILED]: ({ action }) => {
        console.log(`Search Failed: ${JSON.stringify(action, null, '\t')}`);
        updateState({
            referenceLabel: "",
            referenceValue: "",
            referenceOptions: []
        });
    },
    [NOW_TYPEAHEAD_SELECTED_ITEM_SET]: ({action, state, updateState, dispatch}) => updateData(action, state, updateState, dispatch, "now-typeahead"),    
    //[NOW_TYPEAHEAD_MULTI_VALUE_SET]: ({action, state, updateState, dispatch}) => updateData(action, state, updateState, dispatch, "now-typeahead-multi"),
    [NOW_TYPEAHEAD_MULTI_SELECTED_ITEMS_SET]: ({action, state, updateState, dispatch}) => updateData(action, state, updateState, dispatch, "now-typeahead-multi"),
    [NOW_TYPEAHEAD_INVALID_SET]: ({ updateState }) => {
        updateState({
            referenceLabel: "",
            referenceValue: "",
            referenceOptions: []
        });
    },
    [NOW_TYPEAHEAD_MULTI_INVALID_SET]: ({ updateState }) => {
        updateState({
            referenceLabel: "",
            referenceValue: "",
            referenceOptions: []
        });
    }
};