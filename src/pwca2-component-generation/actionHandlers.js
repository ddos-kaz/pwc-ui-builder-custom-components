import {actionTypes} from '@servicenow/ui-core';
import {createHttpEffect} from '@servicenow/ui-effect-http';
import populateQuestionAnswerSet from './populateQuestionAnswerSet';
import filterComponentData from './filterComponentData';

import { 
    DATA_FETCH_REQUESTED,
    DATA_FETCH_SUCCEEDED,
    DATA_FETCH_FAILED,
    DATA_POST_REQUESTED,
    DATA_POST_SUCCEEDED,
    DATA_POST_FAILED,
    DATA_TYPE,
    NOW_RADIO_BUTTONS_VALUE_SET,
    NOW_DROPDOWN_SELECTED_ITEMS_SET,
    NOW_CHECKBOX_CHECKED_SET,
    NOW_TOGGLE_CHECKED_SET,
    NOW_TEXTAREA_VALUE_SET,
    GET_API_PATH,
    POST_API_PATH,
    NO_DATA,
    PWC_TASK_TABLE,
    NOW_BUTTON_CLICKED
} from './constants';


const updateData = (action, state, updateState, compType) => {
        const {
            meta: {id}
        } = action;
        const {
            payload: {value}
        } = action;        
        const type = compType;

        
        const {questionAnswerSet, componentData} = state;
        const copyComponentData = JSON.parse(JSON.stringify(componentData));

        populateQuestionAnswerSet(componentData, questionAnswerSet, {id, value, type}, "updateValue");

        const filteredComponentData = filterComponentData(copyComponentData, questionAnswerSet);
        
        updateState({
            filteredComponentData: filteredComponentData,
            shouldRender: true
        })
};

export default {
    [actionTypes.COMPONENT_BOOTSTRAPPED]: ({
		dispatch,
		updateState,
		properties
	}) => {
		const {compid} = properties;
        console.log("Component generation started id = " + compid);
		if (compid) {
			updateState({isLoading: true});
			dispatch(DATA_FETCH_REQUESTED, {"id": compid});
            //dispatch(SEARCH_RESULTS_REQUESTED, {table: "incident", sysparm_query: "sys_id=57af7aec73d423002728660c4cf6a71c"});
		}
	},
    [DATA_FETCH_REQUESTED]: createHttpEffect(GET_API_PATH, {    
        method: 'GET',    
        queryParams: ["id"],
        successActionType: DATA_FETCH_SUCCEEDED,
		errorActionType: DATA_FETCH_FAILED
    }),
    [DATA_FETCH_SUCCEEDED]: ({action, updateState}) => {
		const {
			payload: {result}
		} = action;
        
        
        if (result && result.status == 200 && result.question_sets.length != 0) {
            const questionAnswerSet = populateQuestionAnswerSet(result);

            const copyResult = JSON.parse(JSON.stringify(result));
            let isTaskTable = false;
            let isActiveTask = true;
            
            if (result.table == PWC_TASK_TABLE) {
                isTaskTable = true;
                isActiveTask = result.active == "1";
            }

			updateState({
				componentData: result,
                filteredComponentData: filterComponentData(copyResult, questionAnswerSet),
				isLoading: false,
                fetchStatus: "success",
                questionAnswerSet: questionAnswerSet,
                isTaskTable: isTaskTable,
                taskActive: isActiveTask
			});
		} else {
			updateState({
                isLoading: false,
                fetchStatus: "error",
                errorMessage: NO_DATA
            });
		}
	},
    [DATA_FETCH_FAILED]: ({action, updateState}) => {
		const {
			payload: {result}
		} = action;

        updateState({
            isLoading: false,
            componentData: [],
            filteredComponentData: {},
            errorMessage: "error", //result.error,
            fetchStatus: "error"
        });
	},
    [DATA_POST_REQUESTED]: createHttpEffect(POST_API_PATH, {    
        method: 'POST',    
        dataParam: 'postData',
        successActionType: DATA_POST_SUCCEEDED,
        errorActionType: DATA_POST_FAILED
    }),
    [DATA_POST_SUCCEEDED]: ({action, updateState}) => {

        const { payload } = action;
        
        if (payload.status == 200) {
            updateState({
                isLoading: false,
                isQuestionnaireSubmitted: true,
                errorDuringSubmission: false
            });
        } else {
            updateState({
                isLoading: false,
                isQuestionnaireSubmitted: true,
                errorDuringSubmission: true
            });
        }
    },
    [DATA_POST_FAILED]: ({action, updateState}) => {
        console.log("FAIL: " + JSON.stringify(action, null, '\t'))
        updateState({
            isLoading: false,
            isQuestionnaireSubmitted: true,
            errorDuringSubmission: true
        });
    },
    [NOW_BUTTON_CLICKED]: ({dispatch, state, updateState}) => {        
        updateState({isLoading: true});
        const { questionAnswerSet, componentData } = state;
        
        const postData = {
            "project_id": componentData.project_id,
            "task_id": componentData.sys_id,
            "user_id": componentData.user_id,
            "question_answer_set": questionAnswerSet
        };
        dispatch(DATA_POST_REQUESTED, {
            postData
        });
    },
    [NOW_DROPDOWN_SELECTED_ITEMS_SET]: ({action, state, updateState}) => updateData(action, state, updateState, "now-dropdown"),
    [NOW_TEXTAREA_VALUE_SET]: ({action, state, updateState}) => updateData(action, state, updateState, "now-textarea"),
    [NOW_RADIO_BUTTONS_VALUE_SET]: ({action, state, updateState}) => updateData(action, state, updateState, "now-radio-buttons"),
    [NOW_CHECKBOX_CHECKED_SET]: ({action, state, updateState}) => updateData(action, state, updateState, "now-checkbox"),
    [NOW_TOGGLE_CHECKED_SET]: ({action, state, updateState}) => updateData(action, state, updateState, "now-toggle"),
};