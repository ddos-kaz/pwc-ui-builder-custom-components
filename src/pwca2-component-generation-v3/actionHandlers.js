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
            const attachedFiles = question.value.attachedFiles.map((file) => {
                return {
                    ...file,
                    "recordID": question.value.recordID,
                    "questionID": question.id
                }
            });
            
            return [...acc2, ...attachedFiles];
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
            questionObj[question.id]["subfield"] = question.properties.subfield || "";
            questionObj[question.id]["options"] = [];

            return {...acc2, ...questionObj};
        }

        return acc2;
    }, acc);
}, {});

const filterRequiredQuestions = (questionAnswerSet, allAttachedFiles, toAddFiles, requiredQuestions) => requiredQuestions.filter((id) => {
    const qaIndex = findIndexOfObject(questionAnswerSet, "id", id);    

    if (qaIndex != -1) {
        const questionAnswerValue = questionAnswerSet[qaIndex]["value"];
        if (questionAnswerSet[qaIndex]["type"] == "now-input-url") {
            return questionAnswerValue == "https://" || questionAnswerValue == "" || questionAnswerValue == null;
        }

        return  questionAnswerValue == "" || questionAnswerValue == null;    
    }

    const qIndex = findIndexOfObject(allAttachedFiles, "questionID", id);

    if (qIndex != -1) {
        return false;
    }

    const fileIndex = findIndexOfObject(toAddFiles, "questionID", id);

    if (fileIndex != -1) {
        return false;
    }

    return true;
});

const collectRequiredQuestions = questionSets => questionSets.reduce((acc, questionSet) => {
    if (questionSet.readOnly == true || !questionSet.pass_dependency || questionSet.readOnly == "true" || questionSet.visible == false || questionSet.visible == "false") {
        return acc;
    }


    return questionSet.questions.reduce((acc2, question) => {
        if(question.type != "now-heading" && question.type != "now-dropdown" && question.type != "pwc-checklist" && question.type != "now-rich-text" && question.type != "pwc-attachment" && ( question.required == true || question.required == "true")) {            
            return [...acc2, question.id];
        }

        if (question.type == "pwc-attachment" && ( question.required == true || question.required == "true") && (question.value.hasOwnProperty("attachedFiles") && question.value.attachedFiles.length == 0)) {
            return [...acc2, question.id];
        }

        return acc2;
    }, acc);
}, []);

const collectInvalidQuestions = questionSets => questionSets.reduce((acc, questionSet) => {
    if (questionSet.readOnly == true || !questionSet.pass_dependency || questionSet.readOnly == "true" || questionSet.visible == false || questionSet.visible == "false") {
        return acc;
    }


    return questionSet.questions.reduce((acc2, question) => {
        if(question.hasOwnProperty("pass_validation") && !question.pass_validation) {            
            return [...acc2, question.id];
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

const validateURL = (url) => {
    const regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;
    
    return regex.test(url);
};

const updateData = (action, state, updateState, dispatch, compType) => {
        const {
            meta: {id}
        } = action;        

        const { type } = action;
        
        let value = "";
        
        if (type == "NOW_INPUT#INVALID_SET") {
            value = action.payload.fieldValue;
        } else if (type == "NOW_INPUT_URL#INVALID_SET") {  
            if (action.payload.fieldValue == "" || action.payload.fieldValue == null || action.payload.fieldValue == undefined) {
                value = null;
            } else if (action.payload.fieldValue == "https://") {
                value = action.payload.fieldValue;
            } else {
                value = `INVALID-${action.payload.fieldValue}`;
            }            
        } else if (type == "NOW_DROPDOWN#SELECTED_ITEMS_SET") {
            let list = action.payload.value.toString();
            list = list.split(",");

            for (let index = 0; index < list.length; index++) {
                if (list[index] != "") {
                    if (index + 1 == list.length) {
                        value += list[index];
                    } else {
                        value += list[index] + ",";
                    }
                    
                }                
            }
        } else {
            value = action.payload.value;            
        }        
    
        /* if (compType == "now-input") {
            const valueList = value.split('-');

            if (valueList.length != 0 && valueList[0].length != 4) {
                value = "";
            }
        } */        
        
        /* if (value != null && compType == "now-input-url") {
            if (validateURL(value)) {
                if (value.indexOf("http") == -1 && value.indexOf("https") == -1) {
                    value = "https://" + value;
                }
            }
        } */
        
        if (value != null || compType == "now-input-url") {
            const { partialQuestionAnswerSet, questionAnswerSet, componentData, allAttachedFiles, toAddFiles, externalQuestionsValues } = state;
            const copyComponentData = JSON.parse(JSON.stringify(componentData));   
            const operationType = "updateValue"; //value == null ? "clearValue" : "updateValue";
            const copyQuestionAnswerSet = populateQuestionAnswerSet(componentData, operationType, questionAnswerSet, {id, value, type: compType});            
            const copyPartialQuestionAnswerSet = populateQuestionAnswerSet(componentData, operationType, partialQuestionAnswerSet, {id, value, type: compType});
            
            const filteredComponentData = filterComponentData(copyComponentData, copyQuestionAnswerSet, externalQuestionsValues);

            const requiredQuestions = collectRequiredQuestions(filteredComponentData.question_sets);  
            const invalidQuestions = collectInvalidQuestions(filteredComponentData.question_sets);   
            const hasInvalidQuestions = invalidQuestions.length != 0;
                      
            const filteredRequiredQuestions = filterRequiredQuestions(copyQuestionAnswerSet, allAttachedFiles, toAddFiles, requiredQuestions);                                    
            const hasRequiredQuestions = filteredRequiredQuestions.length != 0;
            
            updateState({
                referenceLabel: "",
                referenceSubLabel: "",
                referenceOptions: [],
                questionAnswerSet: copyQuestionAnswerSet,
                partialQuestionAnswerSet: copyPartialQuestionAnswerSet,
                filteredComponentData,
                filteredRequiredQuestions,
                hasRequiredQuestions,
                hasInvalidQuestions
            });
            
            dispatch(STATE_UPDATE_ACTION, {
                state: "updated",
                hasRequiredQuestions,
                hasInvalidQuestions
            });
        }        
};

const searchData = (action, state, updateState, dispatch) => {
    const payloadValue = action.payload.value;
    const id = action.meta.id;
    const { questionSearchTables, referenceValue } = state;
    
    if (questionSearchTables.hasOwnProperty(id) && questionSearchTables[id].hasOwnProperty("type") && questionSearchTables[id].type == "search" && referenceValue != payloadValue && payloadValue.length > 2) {
        let newUpdateState = {
            referenceLabel: questionSearchTables[id].field,        
            referenceValue: payloadValue,
            searchQuestionID: id
        };

        let searchQuery =  `${questionSearchTables[id].field}LIKE${payloadValue}`;
        let searchFields = `${questionSearchTables[id].field},sys_id`;

        if (questionSearchTables[id].subfield != "") {
            newUpdateState.referenceSubLabel = questionSearchTables[id].subfield;
            searchQuery = `${questionSearchTables[id].field}LIKE${payloadValue}^OR${questionSearchTables[id].subfield}LIKE${payloadValue}`;
            searchFields = `${questionSearchTables[id].field},${questionSearchTables[id].subfield},sys_id`;
        }

        updateState(newUpdateState);

        dispatch(TYPEAHEAD_SEARCH_REQUESTED, {
            table: questionSearchTables[id]["table"],
            sysparm_query: searchQuery,
            sysparm_fields: searchFields
        });
    }        
};


const getDataSheetCompData = (compData) => {
    const questions = compData.question_sets.reduce(((acc, question_set) => {
        return [...acc, ...question_set.questions];
    }), []);

    return {
        status: compData.status,
        error: compData.error,
        table: compData.table,
        sys_id: compData.sys_id,
        name: compData.name,
        user_id: compData.user_id,
        project_id: compData.project_id,
        question_sets: [{
            name: "Datasheet Question Set",
            order: 0,
            visible: true,
            pass_dependency: true,
            readOnly: false,
            hideLabel: false,
            has_dependency: false,
            dependency: {},
            questions
        }]
    };
};
 
const renderView = (updateState, dispatch, properties) => {
    const { compdata, disabled, timestamp, datasheet } = properties;
    console.log("Question form is generated from the following Component Input: ");
    console.log(JSON.stringify(compdata, null, '\t'));
    
    if (compdata && compdata.status == 200 && compdata.question_sets.length != 0) {
        if (!datasheet) {
            const allAttachedFiles = collectAttachedFiles(compdata.question_sets);
            const questionSearchTables = collectSearchTables(compdata.question_sets);
            const externalQuestionsValues = compdata.external_questions_values;

            const dragActiveStates = allAttachedFiles.reduce((acc, attachedFile) => {
                const dragActiveState = {};
                dragActiveState[attachedFile.recordID] = false;

                return {...acc, ...dragActiveState}
            }, {});

            const questionAnswerSet = populateQuestionAnswerSet(compdata, "insertValues");
            
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

            
            const filteredComponentData = filterComponentData(copyCompData, questionAnswerSet, externalQuestionsValues);
           
            let disabledForm = !isActiveRecord;
            let hasRequiredQuestions = false;
            let hasInvalidQuestions = false;
            let filteredRequiredQuestions = [];
            
            if (disabled) {
                disabledForm = disabled;
            } else {                
                const requiredQuestions = collectRequiredQuestions(filteredComponentData.question_sets);
                filteredRequiredQuestions = filterRequiredQuestions(questionAnswerSet, allAttachedFiles, [], requiredQuestions);
               
                const invalidQuestions = collectInvalidQuestions(filteredComponentData.question_sets);
                hasInvalidQuestions = invalidQuestions.length != 0;
                hasRequiredQuestions = filteredRequiredQuestions.length != 0;
            }
            
            
            updateState({
                componentData: compdata,                
                isLoading: false,
                fetchStatus: "success",
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
                hasInvalidQuestions,
                questionSearchTables,
                timestamp,
                externalQuestionsValues
            });

            dispatch(STATE_UPDATE_ACTION, {
                state: "loaded",
                hasRequiredQuestions,
                hasInvalidQuestions: false
            });
        } else {
            const questionAnswerSet = populateQuestionAnswerSet(compdata, "insertValues");
            const externalQuestionsValues = compdata.external_questions_values;
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
            
            const filteredComponentData = filterComponentData(copyCompData, questionAnswerSet, externalQuestionsValues);            
           
            updateState({
                componentData: compdata,     
                externalQuestionsValues,           
                filteredComponentData: getDataSheetCompData(filteredComponentData),
                isLoading: false,
                fetchStatus: "success",                
                recordActive: isActiveRecord,
                closeAlerts: false,
                isTaskTable,
                isProjectTable,
                hasValues
            });

            dispatch(STATE_UPDATE_ACTION, {
                state: "loaded",
                hasRequiredQuestions: false,
                hasInvalidQuestions: false
            });
        }        
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
        dispatch,
        updateState
	}) => {
        const payload= action.payload;
        
        const { componentData, hasRequiredQuestions, hasInvalidQuestions, filteredRequiredQuestions, recordActive, questionAnswerSet, partialQuestionAnswerSet, disabledForm, toAddFiles, toRemoveFiles, isTaskTable } = state;
        var alertData = {};
                   
        let postData = {
            "project_id": componentData.project_id,
            "task_id": "",
            "user_id": componentData.user_id
            //"question_answer_set": questionAnswerSet
        };    

        if (isTaskTable) {
            postData.task_id = componentData.task_id || "";
        }
        
      
        if (payload.name == "state" && (payload.value == "save" || payload.value == "submit" || payload.value == "saved")) {
            if (hasRequiredQuestions && payload.value == "submit") {
                const requiredQuestions = getRequiredQuestionsDetail(componentData.question_sets, filteredRequiredQuestions);                
                alertData.category = "required_fields_missing";
                alertData.type = "complex";
                alertData.requiredQuestions = requiredQuestions;
                alertData.message = "";

                dispatch(ALERT_ACTION, alertData);
            } else if (hasInvalidQuestions && payload.value == "submit") {                
                alertData.category = "invalid_fields";
                alertData.type = "complex";
                alertData.hasInvalidQuestions = hasInvalidQuestions;
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
            } /* else if (componentData.question_sets.length == 0) {
                alertData.category = "no_data";
                alertData.type = "simple";
                alertData.message = "No Question Sets are passed";
                
                dispatch(ALERT_ACTION, alertData);
            } else if (questionAnswerSet.length == 0 && toRemoveFiles.length == 0 && toAddFiles.length == 0) {
                alertData.category = "no_update";
                alertData.type = "simple";
                alertData.message = "No Data is populated";
                
                dispatch(ALERT_ACTION, alertData);
            } */ else if (payload.value == "save") {     
                postData.question_answer_set = partialQuestionAnswerSet;

                dispatch(SAVE_ACTION, postData);
                dispatch(DELETE_FILES_ACTION);
                dispatch(ADD_FILES_ACTION);   
                
                updateState({
                    toSaveForm: true
                });                
            } else if (payload.value == "submit") {
                postData.question_answer_set = questionAnswerSet;

                dispatch(SUBMIT_ACTION, postData);
                dispatch(DELETE_FILES_ACTION);
                dispatch(ADD_FILES_ACTION);
            }  else if (payload.value == "saved") {
                updateState({
                    toSaveForm: false,
                    partialQuestionAnswerSet: []
                });
                
                dispatch(STATE_UPDATE_ACTION, {
                    state: "auto-save"
                });                
            } 
        } else if (payload.name == "timestamp") {
            updateState({
                timestamp: payload.value
            });
        }
    },
    /* [NOW_BUTTON_CLICKED]: ({ dispatch, updateState, state, action }) => {
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
            //dispatch(SAVE_ACTION, postData);
            dispatch(DELETE_FILES_ACTION);
            dispatch(ADD_FILES_ACTION);

            updateState({
                toSaveForm: true
            }); 
        }       
    }, */
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

        /* updateState({
            toAddFiles: []
        }); */
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
    }, 
    ["NOW_TEXTAREA#INVALID_SET"]: ({ action, state, updateState }) => {
        console.log(JSON.stringify(action, null, '\t'));
    }, */
    [ATTACHMENT_POST_SUCCEEDED]: ({ action, state, updateState }) => {
        console.log("File is attached");
        console.log(JSON.stringify(action, null, '\t'));     
        const {
            payload: {
                result
            }
        } = action;

        const { toAddFiles, allAttachedFiles } = state;
        const index = findIndexOfObject(toAddFiles, "name", result.file_name);
        
        const toAddFile = toAddFiles[index];
        toAddFile.id = result.sys_id;
        toAddFile.icon = "paperclip-outline";
        toAddFile.state = "fetched";

        const copyToAddFiles = [...toAddFiles];
        copyToAddFiles.splice(index, 1);
        
        const copyAllAttachedFiles = [...allAttachedFiles];
        copyAllAttachedFiles.push(toAddFile);
        
        updateState({
            toAddFiles: copyToAddFiles,
            allAttachedFiles: copyAllAttachedFiles
        });
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
    [NOW_INPUT_URL_VALUE_SET]: ({action, state, updateState, dispatch}) => updateData(action, state, updateState, dispatch, "now-input-url"),    
    [NOW_INPUT_URL_INVALID_SET]: ({action, state, updateState, dispatch}) => updateData(action, state, updateState, dispatch, "now-input-url"),
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
        const { referenceLabel, referenceSubLabel, questionSearchTables, searchQuestionID } = state;          
        const result = action.payload.result;

        const options = result.map((option) => {
            let newOption = {
                "id": option.sys_id,
                "label": option[referenceLabel]
            };

            if (option.hasOwnProperty(referenceSubLabel)) {
                newOption.sublabel = option[referenceSubLabel];
            }

            return newOption;
        });

        const copyQuestionSearchTables = {...questionSearchTables};
        
        copyQuestionSearchTables[searchQuestionID].options = options;

        updateState({
            referenceOptions: options,            
            questionSearchTables: copyQuestionSearchTables
        });
    },
    [TYPEAHEAD_SEARCH_FAILED]: ({ action }) => {              
        updateState({
            referenceLabel: "",
            referenceSubLabel: "",
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
            referenceSubLabel: "",
            referenceValue: "",
            referenceOptions: []
        });
    },
    [NOW_TYPEAHEAD_MULTI_INVALID_SET]: ({ updateState }) => {
        updateState({
            referenceLabel: "",
            referenceSubLabel: "",
            referenceValue: "",
            referenceOptions: []
        });
    }
};