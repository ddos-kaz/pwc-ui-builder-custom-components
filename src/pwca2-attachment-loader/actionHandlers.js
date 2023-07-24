import { actionTypes } from '@servicenow/ui-core';
import { UPLOAD_ATTACHMENT_ENDPOINT, DELETE_ATTACHMENT_ENDPOINT, ATTACHMENT_POST_STARTED, ATTACHMENT_POST_REQUESTED, ATTACHMENT_POST_SUCCEEDED, ATTACHMENT_POST_FAILED, ATTACHMENT_DELETE_STARTED, ATTACHMENT_DELETE_REQUESTED, ATTACHMENT_DELETE_SUCCEEDED, ATTACHMENT_DELETE_FAILED } from "./constants";
import { createHttpEffect } from '@servicenow/ui-effect-http';

export default {
    [actionTypes.COMPONENT_BOOTSTRAPPED]: ({
		updateState,
		properties
	}) => {
        const { recordID, tableName, toUpdate, attachedFiles } = properties;

        console.log("There are following attached files: \n" + JSON.stringify(attachedFiles, null, '\t'));

        updateState({
            recordID,
            toUpdate,
            tableName,
            attachedFiles,
            isLoading: false            
        });
	},
    [actionTypes.COMPONENT_PROPERTY_CHANGED]: ({
		action,
        state,
        dispatch
	}) => {
        const payload= action.payload;
        const { toAddFiles, toRemoveFiles } = state;

        if (payload.name == "toUpdate" && !payload.previousValue && payload.value) {            
            if (toRemoveFiles != undefined && toRemoveFiles != null && toRemoveFiles.length != 0) {
                for (let index = 0; index < toRemoveFiles.length; index++) {
                    dispatch(ATTACHMENT_DELETE_REQUESTED, {
                        "sys_id": toRemoveFiles[index]
                    });
                }
            }

            if (toAddFiles != undefined && toAddFiles != null && toAddFiles.length != 0) {
                for (let index = 0; index < toAddFiles.length; index++) {
                    const file = toAddFiles[index].file;
                    const fileName = toAddFiles[index].name;
                    const tableName = toAddFiles[index].tableName;
                    const recordID =  toAddFiles[index].recordID;

                    const formData = new FormData();
                    formData.append("table_name", tableName);
                    formData.append("table_sys_id", recordID);
                    formData.append("uploadFile", file, fileName); 

                    dispatch(ATTACHMENT_POST_REQUESTED, {
                        formData
                    });
                }
            }
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
    [ATTACHMENT_POST_STARTED]: ({ state, updateState }) => {
        const { isLoading } = state;

        if (!isLoading) {
            updateState({
                isLoading: true,
                fetchStatus: ""
            });
        }        
    },
    [ATTACHMENT_POST_SUCCEEDED]: ({ action, state, updateState }) => {
        console.log("File is attached");
        console.log(JSON.stringify(action, null, '\t'));
        const { isLoading } = state;

        if (isLoading) {
            updateState({
                isLoading: false,
                fetchStatus: "success"
            });
        }   
    },
    [ATTACHMENT_POST_FAILED]: ({ action, state, updateState }) => {
        console.log("FAILURE: ERROR");
        console.log(JSON.stringify(action, null, '\t'));
        const { isLoading } = state;

        if (isLoading) {
            updateState({
                isLoading: false,
                fetchStatus: "error"
            });
        }   
    },
    [ATTACHMENT_DELETE_STARTED]: ({ state, updateState }) => {
        const { isLoading } = state;

        if (!isLoading) {
            updateState({
                isLoading: true,
                fetchStatus: ""
            });
        }        
    },
    [ATTACHMENT_DELETE_REQUESTED]:  createHttpEffect(DELETE_ATTACHMENT_ENDPOINT, {    
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
        const { isLoading } = state;

        if (isLoading) {
            updateState({
                isLoading: false,
                fetchStatus: "success"
            });
        }   
    },
    [ATTACHMENT_DELETE_FAILED]: ({ action }) => {
        console.log("FAILURE: ERROR");
        console.log(JSON.stringify(action, null, '\t'));
        const { isLoading } = state;

        if (isLoading) {
            updateState({
                isLoading: false,
                fetchStatus: "error"
            });
        }
    }
};