//import {Fragment} from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-heading';
import '@servicenow/now-dropdown';
import '@servicenow/now-textarea';
import '@servicenow/now-input';
import '@servicenow/now-radio-buttons';
import '@servicenow/now-checkbox';
import '@servicenow/now-toggle';
import '@servicenow/now-template-message';
import '@servicenow/now-rich-text';
import '@servicenow/now-loader';
import '@servicenow/now-card';
import '@servicenow/now-illustration';
import '@servicenow/now-button';
import '@servicenow/now-alert';
import '@servicenow/now-typeahead';
import '@servicenow/now-icon';
import '@servicenow/now-select';
import '@servicenow/now-label-value';
import '@servicenow/now-tooltip';
import '@servicenow/now-pill';
//import '@servicenow/now-modal';

import { ATTACHMENT_URL } from "./constants";

const generateUUID = (format) => format.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});

const getIndexByKey = (list, key, keyValue) => {
    for (let index = 0; index < list.length; index++) {
        if (list[index][key] == keyValue) {
            return index;
        }
    }

    return -1;
}


const fileElementLine = (file, isNew, recordID, id, state, updateState, disabled, dispatch) => {
    const fileName = file.name;
    const fileID = file.id;
    let fileIcon = "paperclip-outline";
    const fileState = file.state;
    const { toAddFiles, toRemoveFiles, allAttachedFiles, filteredRequiredQuestions } = state;

    /*
    const disgardFileRemoval = () => {
        let index = toRemoveFiles.indexOf(fileID);
        const copyToRemoveFiles = [...toRemoveFiles];
        copyToRemoveFiles.splice(index, 1);

        const copyAllAttachedFiles = [...allAttachedFiles];

        const fileIndex = getIndexByID(copyAllAttachedFiles[recordID], "id", fileID);

        if (fileIndex != -1) {
            
            copyAllAttachedFiles[fileIndex]["recordID"]["state"] = "fetched";
        }        
        
        updateState({
            toRemoveFiles: copyToRemoveFiles,
            allAttachedFiles: copyAllAttachedFiles
        });
    };
    */

    const downloadFile = () => window.open(`${ATTACHMENT_URL}${fileID}`, '_blank');

    const removeFile = () => {
        const list = isNew ? toAddFiles : allAttachedFiles; 
        
        const index = getIndexByKey(list, "id", fileID);
        

        if (index != -1) {
            if (isNew) {
                const copyToAddFiles = [...toAddFiles];
                copyToAddFiles.splice(index, 1);


                if (getIndexByKey(copyToAddFiles, "questionID", id) == -1) {
                    const copyFilteredRequiredQuestions = [...filteredRequiredQuestions];
                    copyFilteredRequiredQuestions.push(id);

                    updateState({
                        toAddFiles: copyToAddFiles,
                        hasRequiredQuestions: true,
                        filteredRequiredQuestions: copyFilteredRequiredQuestions
                    });
                } else {
                    updateState({
                        toAddFiles: copyToAddFiles
                    });
                }                
            } else {
                /* const copyAllAttachedFiles = JSON.parse(JSON.stringify(allAttachedFiles));
                copyAllAttachedFiles[recordID][index]["state"] = "removed";

                const copyToRemoveFiles = [...toRemoveFiles];
                copyToRemoveFiles.push(fileID);

                updateState({
                    toRemoveFiles: copyToRemoveFiles,
                    allAttachedFiles: copyAllAttachedFiles
                }); */
                
                if (confirm(`Do you want to delete ${list[index].name}?`)) {
                    const copyAllAttachedFiles = [...allAttachedFiles];
                    copyAllAttachedFiles.splice(index, 1);

                    updateState({
                        toRemoveFile: list[index],
                        allAttachedFiles: copyAllAttachedFiles
                    });

                    dispatch("DELETE_FILE_ACTION");
                }
            }
        } else {
            alert("The file can't be removed...");
        }
    };

    if (isNew || fileState == "loaded") {
        return (
            <li className="fileLine toAddFileLine" id={fileID}>
                <div className="fileInfo">
                    <now-icon icon={fileIcon} size="md"></now-icon>
                    <span>
                        {fileName}
                    </span>
                </div>
                <div className="fileActions">
                    {disabled ? (
                        <div></div>
                    ) : (
                        <now-icon icon="close-outline" className="file-action-icon" size="md" on-click={removeFile}></now-icon>
                    )}
                    
                </div>
            </li>
        );
    }
    
    fileIcon = file.icon;

    let fileLineClass = "fileLine";
    
    if (fileState == "removed") {
        fileLineClass = `${fileLineClass} toRemoveFileLine`;
    } else {
        fileLineClass = `${fileLineClass} fetchedFileLine`;        
    }
    
    return (
        <li className={fileLineClass} id={fileID}>
            <div className="fileInfo">
                <now-icon icon={fileIcon} size="md"></now-icon>
                <span>
                    {fileName}
                </span>
            </div>
            <div className="fileActions">
                {(fileState == "fetched") ? (                                        
                    <now-icon className="file-action-icon" icon="download-outline" size="md" onclick={downloadFile}></now-icon>
                ) : (
                    <now-icon icon="reply-outline" className="file-action-icon" size="md" on-click={disgardFileRemoval}></now-icon>
                )}

                {(fileState == "fetched" && !disabled) ? (                                        
                    <now-icon icon="close-outline" className="file-action-icon" size="md" on-click={removeFile}></now-icon>
                ) : (
                    <div></div>
                )}                
            </div>
        </li>
    );
};

const fileElementsList = (files, isNew, recordID, id, state, updateState, disabled, dispatch) => {
    return (
        <ul className="files-list">
            {files.map(file => fileElementLine(file, isNew, recordID, id, state, updateState, disabled, dispatch))}
        </ul>
    );
};


const dragDropFileForm = (updateState, state, attachmentConfig, id, disabled, readOnly, dispatch) => {
    const { recordID, tableName, maxFileSize, allowedFileTypes } = attachmentConfig;
    const allowedFileTypesArr = allowedFileTypes.split(',');

    const { dragActiveStates, toAddFiles, allAttachedFiles, filteredRequiredQuestions } = state;
    
    const attachedFiles = allAttachedFiles.filter(file => file.questionID == id);

    const dragActive = dragActiveStates[recordID];
    
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const copyDragActiveStates = JSON.parse(JSON.stringify(dragActiveStates));

        if (e.type == "dragenter" || e.type == "dragover") {
            copyDragActiveStates[recordID] = true;

            updateState({
                dragActiveStates: copyDragActiveStates
            });
        } else {
            copyDragActiveStates[recordID] = false;

            updateState({
                dragActiveStates: copyDragActiveStates
            });
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();  
        
        const copyDragActiveStates = JSON.parse(JSON.stringify(dragActiveStates));
        copyDragActiveStates[recordID] = false;

        updateState({
            dragActiveStates: copyDragActiveStates
        });

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();

        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files);
        }
    };

    const handleFile = (loadedFiles) => {
        const filteredFiles = [];

        for (let index = 0; index < loadedFiles.length; index++) {
            const file = loadedFiles[index];
            const fileType = file.type.toString().split('/')[1];            
            
            if ((file.size < (parseInt(maxFileSize) * 1024 * 1024)) && (allowedFileTypes == "all" || allowedFileTypesArr.includes(fileType))) { 
                filteredFiles.push({
                    name: file.name,                    
                    state: "loaded",                    
                    id: generateUUID('xxxxxx-xxxxxx'),
                    questionID: id,
                    tableName,
                    recordID,
                    file
                });
            } else {
                alert("Either file size is bigger than allowed or file type is not matching allowed ones");
            }
        }
        const copyFilteredRequiredQuestions = [...filteredRequiredQuestions];
        
        if (filteredFiles.length != 0 && copyFilteredRequiredQuestions.includes(id)) {
            const fileIndex = copyFilteredRequiredQuestions.indexOf(id);
            copyFilteredRequiredQuestions.splice(fileIndex, 1);
        }

        updateState({
            toAddFiles: [...toAddFiles, ...filteredFiles],
            filteredRequiredQuestions: copyFilteredRequiredQuestions,
            hasRequiredQuestions: copyFilteredRequiredQuestions.length != 0
        });

        dispatch({
            state: "updated",
            hasRequiredQuestions: copyFilteredRequiredQuestions.length != 0
        });
    };

    const filteredToAddFiles = toAddFiles.filter(file => file.recordID == recordID);
    
    return (
        <form className="file-upload-form" ondragenter={handleDrag} onsubmit={(e) => e.preventDefault()}>
            {(!disabled && !readOnly) ? (
                <div>
                    <input type="file" id={recordID} className="input-file-upload" multiple="true" on-change={handleChange}/>
                    <label for={recordID}  className={dragActive ? "file-upload-label drag-active" : "file-upload-label"}>
                        <div>
                            <p>Drag and drop or &nbsp;
                                <span className="input-file-upload-text">
                                    choose files
                                </span>
                            </p>
                        </div>
                    </label>
                </div>
            ) : (
                <div>                    
                </div>
            )}            
            
            {
                dragActive ? 
                (
                    <div className="drag-file-element" ondragenter={handleDrag} ondragleave={handleDrag} ondragover={handleDrag} ondrop={handleDrop}>
                    </div>
                ) : (
                    <div>                        
                    </div>
                )
            }

            {(filteredToAddFiles.length != 0) ? (
                <div>
                    <span className="file-type-title">Loaded files:</span>
                    {fileElementsList(filteredToAddFiles, true, recordID, id, state, updateState, disabled, dispatch)}
                </div>                
            ) : (
                <div></div>
            )}

            {(attachedFiles.length != 0) ? (
                <div>                 
                    <div className="file-type-title">Attached files:</div>
                    {fileElementsList(attachedFiles, false, recordID, id, state, updateState, disabled, dispatch)}
                </div>
            ) : (
                <div></div>
            )}          
        </form>
    );
};

const buildRequiredQuestionPill = (question) => {
    const focusTextInput = () => {    
        question.ref.current.focus();
    };
    //<input type="button" value={question.label} />
    return (
      <span className="pwc-pill">
        <button on-click={focusTextInput} id={`pill-${question.id}`} type="button" className="pwc-pill-button" aria-pressed="false">            
            <span className="pwc-pill-button-label" title={question.label} aria-hidden="true">
                {question.label}
            </span>
        </button>
      </span>  
    );
};

const buildRequiredQuestionsCard = ( state ) => {
    const { filteredComponentData, filteredRequiredQuestions, isTaskTable, isProjectTable } = state;
    let requiredQuestions = [];
    const { question_sets } = filteredComponentData;

    question_sets.forEach((question_set) => {
        const { questions } = question_set;

        for (let index = 0; index < questions.length; index++) {
            const question = questions[index];

            if (filteredRequiredQuestions.includes(question.id)) {
                requiredQuestions.push({
                    "id": question.id,
                    "label": question.label,
                    "ref": question.ref
                })
            }            
        }
    });    

    let title = "";
    if (isTaskTable) {
        title = "Click on this guidance to see what information are mandatory and needs to be filled out, before the 'Complete Task' button gets activated.";
    } else if (isProjectTable) {
        title = "Click on this guidance to see what information are mandatory and needs to be filled out.";
    }

    //<now-pill size="md" label={requiredQuestion.label} icon="" component-id={`pill-${requiredQuestion.id}`} id={`pill-${requiredQuestion.id}`} show-identifier={true} avatar-props={{}}></now-pill>
    return (
        <div className="required-questions-card-container">
            {requiredQuestions.length != 0 ? (
                <div className="required-questions-card-title">                
                    <now-alert status="critical" icon="info-circle-outline" header="Almost there!" content={title} text-link-props={{}} action={{}}></now-alert>
                </div>
            ) : (
                <div></div>
            )}            
            <div className="required-questions-container">
                {requiredQuestions.map((requiredQuestion) => {
                    return (
                        <div>
                            {buildRequiredQuestionPill(requiredQuestion)}
                        </div>
                    );
                })}
            </div>
        </div>
    );           
};

const getOptionLabel = (options, id) => {
    for (let index = 0; index < options.length; index++) {
        const option = options[index];

        if (option.id == id) {
            return option.label;
        }
    }

    return "";
};

const buildQuestionCard = ( updateState, state, question_set, disabled, dispatch ) => {
    const { questions, readOnly, name } = question_set;
    
    const { 
        questionSearchTables, 
        toAddFiles,
        properties: {
            datasheet
        }
    } = state;

    /* let qs_name = name.toString();

    if (question_set.hideLabel) {
        qs_name = "";
    }*/
    
    /*
        <now-card-header heading={{"label": qs_name, "size": "md", "lines": 1}} className="pwc-card-header-title"></now-card-header>
        <now-card-divider full-width={true} padding='none'></now-card-divider>
    */

    const questionsLength = questions.length;
    let questionIndex = 0;

    return (
        <now-card size="md" interaction="none" hide-shadow={true} className="pwc-now-card">                        
            <ul>
                {questions.map((question) => {
                    questionIndex++;

                    if (readOnly || datasheet) {
                        let questionValue = "";

                        if ((question.type == "now-typeahead-multi" || question.type == "now-typeahead") && question.value != "") {
                            questionValue = question.properties.placeholder;
                        } else if (question.type == "now-dropdown" || question.type == "now-typeahead-multi-choice" || question.type == "now-dropdown:multi" || question.type == "now-dropdown:multi" || question.type == "now-radio-buttons" || question.type == "now-select") {
                            let questionValueList = [];
                            if ((question.value != "" || question.value != null)) {
                                if ((typeof question.value) == "string") {
                                    questionValueList = question.value.split(",");
                                } else {
                                    questionValueList = question.value;
                                }
                            }

                            const questionLabelList = [];

                            for (let index = 0; index < questionValueList.length; index++) {
                                questionLabelList.push(getOptionLabel(question.options, questionValueList[index]));
                            }

                            questionValue = questionLabelList.join(',');
                        } else if (question.type == "now-input-url") {
                            questionValue = question.properties.url || question.value;

                            return (
                                <li className="li-read-only-qs-container">
                                    <div className="read-only-qs-container">
                                        <div>
                                            {question.label}
                                        </div>
                                        <div>
                                            <a href={questionValue} target="_blank">
                                                {questionValue}
                                            </a>
                                        </div>                                        
                                    </div>
                                    { (questionIndex == questionsLength) ? (
                                        <div className="line-container-end"></div>
                                    ) :(
                                        <div className="line-container">
                                            <now-card-divider full-width={true} padding="lg"></now-card-divider>
                                        </div>
                                    )}                                                                           
                                </li>
                            );
                        } else if (question.type == "now-checkbox" && question.value != "") {
                            questionValue = (question.value == "true" || question.value == true) ? "true" : "false";
                        }  else if (question.type == "now-toggle" && question.value != "") {
                            questionValue = (question.value == "true" || question.value == true) ? "true" : "false";
                        } else if (question.type == "pwc-attachment") {

                            return (
                                <li className="li-read-only-qs-container">
                                    <div className="read-only-qs-container">
                                        <div>
                                            {question.label}
                                        </div>
                                        <div className="attachment-flex-container">
                                            {question.value.attachedFiles.map((file) => {
                                                return (
                                                    <a href={`/sys_attachment.do?sys_id=${file.id}`} target="_blank">{file.name}</a>
                                                );                                                
                                            })}
                                        </div>
                                    </div>
                                </li>
                            );
                        } else {
                            questionValue = question.value;
                        }

                        if (question.type == "now-heading" || question.type == "container-base-divider" || question.type == "now-rich-text" || question.type == "pwc-attachment") {
                            return (
                                <div></div>
                            );
                        } else {
                            return (
                                <li className="li-read-only-qs-container">
                                    <div className="read-only-qs-container">
                                        <div>
                                            {question.label}
                                        </div>
                                        <div>
                                            {questionValue}
                                        </div>
                                    </div>
                                    { (questionIndex == questionsLength) ? (
                                        <div className="line-container-end"></div>
                                    ) :(
                                        <div className="line-container">
                                            <now-card-divider full-width={true} padding="lg"></now-card-divider>
                                        </div>
                                    )}                                                                           
                                </li>
                            );
                        }
                    }

                    let required = false;
                    const questionLabel = (question.hideLabel == true || question.hideLabel == "true") ? "" : question.label;
                    
                    if (question.required.toString() == 'true') {
                        if (question.type== "pwc-attachment") {
                            if (question.value.hasOwnProperty("attachedFiles") && question.value.attachedFiles.length == 0 && getIndexByKey(toAddFiles, "questionID", question.id) == -1) {
                                required = true;
                            }                           
                        } else {
                            required = true;
                        }               
                    }

                    if (disabled || question.readOnly.toString() == 'true') {
                        required = false;
                    }

                    /* if (question.readOnly.toString() == 'true') {
                        disabled = true;
                    } */
                    
                    if (question.type == "pwc-attachment") {
                        const { maxFileSize } = question.value;
                        let { allowedFileTypes } = question.value;
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false;
                        const tooltip = question.properties.hasOwnProperty("tooltip") ? (question.properties.tooltip + "") : "";
                        allowedFileTypes = allowedFileTypes.toUpperCase().split(',');

                        return (
                            <li ref={question.ref}>
                                <div className="file-upload-section">
                                    <div className="flex-row-container">
                                        <span className="pwc-label-size"><b>{questionLabel}</b></span>

                                        {!hasToolTip ? (
                                            <div>                                                        
                                            </div>
                                        ) : (
                                            <div>
                                                <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                            </div>
                                        )} 
                                    </div>
                                    {required && !disabled ? (
                                        <span className="redTextColor">File attachment is required</span>
                                    ) : (
                                        <span></span>
                                    )}

                                    {!disabled ? (
                                        <span>You can upload {allowedFileTypes.join(', ')} files. The max file size is {maxFileSize}MB</span>
                                    ) : (
                                        <span></span>
                                    )}
                                                                        
                                    {dragDropFileForm(updateState, state, question.value, question.id, disabled, question.readOnly, dispatch)}                                                                   
                                </div>
                            </li>
                        );
                    } 


                    if (question.type == "now-heading") {
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false;
                        const tooltip = question.properties.hasOwnProperty("tooltip") ? (question.properties.tooltip + "") : "";

                        if (question.properties.size == "title-tertiary") {
                            return (                                
                                <li>
                                    <div className="now-heading-container">
                                        <div id={question.id}>{questionLabel}</div>

                                        {!hasToolTip ? (
                                            <div>                                                        
                                            </div>
                                        ) : (
                                            <div>
                                                <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                            </div>
                                        )}      
                                    </div>                                    
                                </li>
                            );
                        }

                        return (
                            <li>
                                <div className="now-heading-container">
                                    <now-heading component-id={question.id} id={question.id} label={questionLabel} level="1" variant={question.properties.size} has-no-margin={true}></now-heading>
                                        
                                    {!hasToolTip ? (
                                        <div>                                                        
                                        </div>
                                    ) : (
                                        <div>
                                            <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={question.properties.tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                            <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={question.properties.tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                        </div>
                                    )} 
                                </div>                                                                    
                            </li>
                        );
                    }

                    if (question.type == "container-base-divider") {                        
                        return (
                            <div className="pwc-card-divider">
                                <now-card-divider full-width={question.properties.width} padding={question.properties.padding}></now-card-divider>
                            </div>                            
                        );
                    }
                    //<now-label-value-inline label={question.label} value=" *"></now-label-value-inline>                                
                    if (question.type == "now-dropdown") {
                        const hideLabel = (question.hideLabel == "true" || question.hideLabel == true) ? true : false;
                        const labelClassName = required ? "pwc-label-size required-icon" : "pwc-label-size"
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false;
                        const tooltip = question.properties.hasOwnProperty("tooltip") ? (question.properties.tooltip + "") : "";
                        let selectedItems = "";                        

                        if (Array.isArray(question.value)) {
                            selectedItems = question.value.join(",");
                        } else if (question.value != "" && question.value != null) {
                            selectedItems = question.value;
                        }                                                                      

                        return ( 
                            <li>
                                <div className="flex-column-container">
                                    {
                                        hideLabel ? (
                                            <div>
                                            </div>
                                        ) : (
                                            <div className="flex-row-container">                                        
                                                <span className={labelClassName}>{questionLabel}</span>
                                                {!hasToolTip ? (
                                                    <div>                                                        
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                        <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                    </div>
                                                )}                                                
                                            </div>                                                                        
                                        )
                                    }
                                    
                                    <now-dropdown ref={question.ref} className="halfWidth" component-id={question.id}  id={question.id} disabled={disabled || question.readOnly} items={question.options} selected-items={selectedItems.split(",")} select="single" placeholder={question.properties.placeholder} icon="" variant={question.properties.variant} size={question.properties.size} panel-fit-props={{}}></now-dropdown>
                                </div>                                
                            </li>
                        );
                    }

                    if (question.type == "now-select") {
                        const hideLabel = (question.hideLabel == "true" || question.hideLabel == true) ? true : false;
                        const labelClassName = required ? "pwc-label-size required-icon" : "pwc-label-size"
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false;
                        const tooltip = question.properties.hasOwnProperty("tooltip") ? (question.properties.tooltip + "") : "";

                        return ( question.has_message ? (                            
                                <li>
                                    <div className="flex-column-container">
                                        {
                                            hideLabel ? (
                                                <div>
                                                </div>
                                            ) : (
                                                <div className="flex-row-container">                                        
                                                    <span className={labelClassName}>{questionLabel}</span>
                                                    {!hasToolTip ? (
                                                        <div>                                                        
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                            <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                        </div>
                                                    )}                                                
                                                </div>                                                                        
                                            )
                                        }
                                        
                                        <now-select ref={question.ref} disabled={disabled || question.readOnly} className="halfWidth" component-id={question.id}  id={question.id} search="none" items={question.options} label={""} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} selected-item={question.value.toString()}></now-select>
                                    </div>                                    
                                </li>
                            ) : (
                                <li>
                                    <div className="flex-column-container">
                                        {
                                            hideLabel ? (
                                                <div>
                                                </div>
                                            ) : (
                                                <div className="flex-row-container">                                        
                                                    <span className={labelClassName}>{questionLabel}</span>
                                                    {!hasToolTip ? (
                                                        <div>                                                        
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                            <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                        </div>
                                                    )}                                                
                                                </div>                                                                        
                                            )
                                        }
                                        
                                        <now-select ref={question.ref} className="halfWidth" disabled={disabled || question.readOnly} component-id={question.id}  id={question.id} search="none" items={question.options} label={""} messages={[]} selected-item={question.value}></now-select>
                                    </div>                                    
                                </li>
                            )                            
                        );
                    }

                    if (question.type == "now-typeahead") {
                        const tooltip = question.properties.hasOwnProperty("tooltip") ? (question.properties.tooltip + "") : "";

                        if (disabled) {
                            const inputValue = question.value != "" ? question.properties.placeholder : "";
                            return ( question.has_message ? (
                                    <li>
                                        <now-input className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} helper-content={tooltip} label={questionLabel} placeholder={question.properties.placeholder} step="any" type={question.properties.type} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} value={inputValue}></now-input> 
                                    </li>
                                ) : (
                                    <li>
                                        <now-input className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} helper-content={tooltip} label={questionLabel} type="text" value={inputValue}></now-input> 
                                    </li>                                    
                                )                            
                            );
                        }

                        let typeaheadQuestionValue = question.value;
                        const hideLabel = (question.hideLabel == "true" || question.hideLabel == true) ? true : false;
                        const labelClassName = required ? "pwc-label-size required-icon" : "pwc-label-size"
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false;
                        

                        const type = question.properties.type;
                        const options = type == "search" ? questionSearchTables[question.id].options : question.options; //referenceOptions
                        
                        return (                            
                            question.has_message ? (
                                <li>
                                    <div className="flex-column-container">
                                        {
                                            hideLabel ? (
                                                <div>
                                                </div>
                                            ) : (
                                                <div className="flex-row-container">                                        
                                                    <span className={labelClassName}>{questionLabel}</span>
                                                    {!hasToolTip ? (
                                                        <div>                                                        
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                            <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                        </div>
                                                    )}                                                
                                                </div>                                                                        
                                            )
                                        }
                                        
                                        <now-typeahead ref={question.ref} className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} size="md" items={options} selected-item={typeaheadQuestionValue} search="managed" helper-content={question.tooltip} label={""} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]}  placeholder={question.properties.placeholder} config-aria={{}}></now-typeahead>
                                    </div>                                    
                                </li>
                            ) : (
                                <li>
                                    <div className="flex-column-container">
                                        {
                                            hideLabel ? (
                                                <div>
                                                </div>
                                            ) : (
                                                <div className="flex-row-container">                                        
                                                    <span className={labelClassName}>{questionLabel}</span>
                                                    {!hasToolTip ? (
                                                        <div>                                                        
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                            <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                        </div>
                                                    )}                                                
                                                </div>                                                                        
                                            )
                                        }
                                        
                                        <now-typeahead ref={question.ref} className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} size="md" items={options} selected-item={typeaheadQuestionValue} search="managed" helper-content={question.tooltip} label={""} placeholder={question.properties.placeholder} config-aria={{}}></now-typeahead>
                                    </div>                                    
                                </li>
                            )
                        );
                    }

                    if (question.type == "now-typeahead-multi") {
                        
                        if (disabled) {
                            const inputValue = question.value != "" ? question.properties.placeholder : "";

                            return ( question.has_message ? (
                                    <li>
                                        <now-input className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} helper-content={question.properties.tooltip} label={questionLabel} placeholder={question.properties.placeholder} step="any" type={question.properties.type} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} value={inputValue}></now-input> 
                                    </li>
                                ) : (
                                    <li>
                                        <now-input className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} helper-content={question.properties.tooltip} label={questionLabel} type="text" value={inputValue}></now-input> 
                                    </li>                                    
                                )                            
                            );
                        }                        

                        const type = question.properties.type;
                        const options = type == "search" ? questionSearchTables[question.id].options : question.options; //referenceOptions
                        const hideLabel = (question.hideLabel == "true" || question.hideLabel == true) ? true : false;
                        const labelClassName = required ? "pwc-label-size required-icon" : "pwc-label-size"
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false;
                        const tooltip = question.properties.hasOwnProperty("tooltip") ? (question.properties.tooltip + "") : "";
                        return (                            
                            question.has_message ? (
                                <li>
                                    <div className="flex-column-container">
                                        {
                                            hideLabel ? (
                                                <div>
                                                </div>
                                            ) : (
                                                <div className="flex-row-container">                                        
                                                    <span className={labelClassName}>{questionLabel}</span>
                                                    {!hasToolTip ? (
                                                        <div>                                                        
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                            <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                        </div>
                                                    )}                                                
                                                </div>                                                                        
                                            )
                                        }
                                        
                                        <now-typeahead-multi ref={question.ref} className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} size="md" items={options} selected-item={[question.value]} search="managed" helper-content={question.tooltip} label={""} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]}  placeholder={question.properties.placeholder} config-aria={{}}></now-typeahead-multi> 
                                    </div>                                
                                </li>
                            ) : (
                                <li>
                                    <div className="flex-column-container">
                                        {
                                            hideLabel ? (
                                                <div>
                                                </div>
                                            ) : (
                                                <div className="flex-row-container">                                        
                                                    <span className={labelClassName}>{questionLabel}</span>
                                                    {!hasToolTip ? (
                                                        <div>                                                        
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                            <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                        </div>
                                                    )}                                                
                                                </div>                                                                        
                                            )
                                        }
                                        
                                        <now-typeahead-multi ref={question.ref} className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} size="md" items={options} selected-item={[question.value]} search="managed" helper-content={question.tooltip} label={""} placeholder={question.properties.placeholder} config-aria={{}}></now-typeahead-multi>
                                    </div>                                     
                                </li>
                            )
                        );
                    }

                    if (question.type == "now-typeahead-multi-choice") {

                        if (disabled) {
                            const inputValue = question.value != "" ? question.properties.placeholder : "";

                            return ( question.has_message ? (
                                    <li>
                                        <now-input className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} helper-content={question.properties.tooltip} label={questionLabel} placeholder={question.properties.placeholder} step="any" type="text" messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} value={inputValue}></now-input> 
                                    </li>
                                ) : (
                                    <li>
                                        <now-input className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} helper-content={question.properties.tooltip} label={questionLabel} type="text" value={inputValue}></now-input> 
                                    </li>                                    
                                )                            
                            );
                        }                        

                        const hideLabel = (question.hideLabel == "true" || question.hideLabel == true) ? true : false;
                        const labelClassName = required ? "pwc-label-size required-icon" : "pwc-label-size"
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false;
                        const tooltip = question.properties.hasOwnProperty("tooltip") ? (question.properties.tooltip + "") : "";
                        return (                            
                            question.has_message ? (
                                <li>
                                    <div className="flex-column-container">
                                        {
                                            hideLabel ? (
                                                <div>
                                                </div>
                                            ) : (
                                                <div className="flex-row-container">                                        
                                                    <span className={labelClassName}>{questionLabel}</span>
                                                    {!hasToolTip ? (
                                                        <div>                                                        
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                            <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                        </div>
                                                    )}                                                
                                                </div>                                                                        
                                            )
                                        }
                                        
                                        <now-typeahead-multi ref={question.ref} className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} size="md" items={question.options} selected-item={[question.value]} search="managed" helper-content={question.tooltip} label={""} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]}  placeholder={question.properties.placeholder} config-aria={{}}></now-typeahead-multi> 
                                    </div>                                
                                </li>
                            ) : (
                                <li>
                                    <div className="flex-column-container">
                                        {
                                            hideLabel ? (
                                                <div>
                                                </div>
                                            ) : (
                                                <div className="flex-row-container">                                        
                                                    <span className={labelClassName}>{questionLabel}</span>
                                                    {!hasToolTip ? (
                                                        <div>                                                        
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                            <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                        </div>
                                                    )}                                                
                                                </div>                                                                        
                                            )
                                        }
                                        
                                        <now-typeahead-multi ref={question.ref} className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} size="md" items={question.options} selected-item={[question.value]} search="managed" helper-content={question.tooltip} label={""} placeholder={question.properties.placeholder} config-aria={{}}></now-typeahead-multi>
                                    </div>                                     
                                </li>
                            )
                        );
                    }

                    if (question.type == "now-input") {       
                        const hideLabel = (question.hideLabel == "true" || question.hideLabel == true) ? true : false;
                        const labelClassName = required ? "pwc-label-size required-icon" : "pwc-label-size"
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false;
                        const tooltip = question.properties.hasOwnProperty("tooltip") ? (question.properties.tooltip + "") : "";

                        return ( question.has_message ? (
                                    <li>
                                        <div className="flex-column-container">
                                            {
                                                hideLabel ? (
                                                    <div>
                                                    </div>
                                                ) : (
                                                    <div className="flex-row-container">                                        
                                                        <span className={labelClassName}>{questionLabel}</span>
                                                        {!hasToolTip ? (
                                                            <div>                                                        
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                                <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                            </div>
                                                        )}                                                
                                                    </div>                                                                        
                                                )
                                            }

                                            <div>
                                                {question.properties.type == "date" ? (
                                                    <now-input ref={question.ref} className="halfWidth" max="2030-02-20" component-id={question.id} id={question.id} readonly={disabled || question.readOnly} size={question.properties.size} placeholder={question.properties.placeholder} step="any" type={question.properties.type} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} value={question.value}></now-input> 
                                                ) : (
                                                    <now-input ref={question.ref} className="halfWidth" max="2030-02-20" component-id={question.id} id={question.id} readonly={disabled || question.readOnly} size={question.properties.size} placeholder={question.properties.placeholder} step="any" type={question.properties.type} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} value={question.value}></now-input> 
                                                )}   
                                            </div>                                                                                     
                                        </div>
                                    </li>
                                ) : (
                                    <li>
                                        <div className="flex-column-container">
                                            {
                                                hideLabel ? (
                                                    <div>
                                                    </div>
                                                ) : (
                                                    <div className="flex-row-container">                                        
                                                        <span className={labelClassName}>{questionLabel}</span>
                                                        {!hasToolTip ? (
                                                            <div>                                                        
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                                <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                            </div>
                                                        )}                                                
                                                    </div>                                                                        
                                                )
                                            }
                                                                                        
                                            <now-input ref={question.ref} className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} size={question.properties.size} placeholder={question.properties.placeholder} step="any" type={question.properties.type} value={question.value}></now-input>
                                        </div>                                        
                                    </li>                                    
                                )                            
                        );
                    }
                    
                    if (question.type == "now-dropdown:multi") {
                        if (disabled) {
                            return ( question.has_message ? (
                                    <li>
                                        <now-input className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} helper-content={question.properties.tooltip} label={questionLabel} placeholder={question.properties.placeholder} step="any" type={question.properties.type} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} value={question.value}></now-input> 
                                    </li>
                                ) : (
                                    <li>
                                        <now-input className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} helper-content={question.properties.tooltip} label={questionLabel} type="text" value={question.value}></now-input> 
                                    </li>                                    
                                )                            
                            );
                        }

                        const hideLabel = (question.hideLabel == "true" || question.hideLabel == true) ? true : false;
                        const labelClassName = required ? "pwc-label-size required-icon" : "pwc-label-size"
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false; 
                        const tooltip = question.properties.hasOwnProperty("tooltip") ? (question.properties.tooltip + "") : "";                       
                        let selectedItems = "";                        

                        if (Array.isArray(question.value)) {                            
                            selectedItems = question.value.join(",");
                        } else if (question.value != "" && question.value != null){
                            selectedItems = question.value;
                        }

                        return ( 
                            <li>
                                <div className="flex-column-container" id={question.id}>
                                    {
                                        hideLabel ? (
                                            <div>
                                            </div>
                                        ) : (
                                            <div className="flex-row-container">                                        
                                                <span className={labelClassName}>{questionLabel}</span>
                                                {!hasToolTip ? (
                                                    <div>                                                        
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                        <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                    </div>
                                                )}                                                
                                            </div>                                                                        
                                        )
                                    }
                                    
                                    <now-dropdown ref={question.ref} className="halfWidth" component-id={question.id}  disabled={disabled || question.readOnly} items={question.options} selected-items={selectedItems.split(",")} select="multi" placeholder={question.properties.placeholder} icon="" variant={question.properties.variant} size={question.properties.size} tooltip-content={question.properties.tooltip} panel-fit-props={{}}></now-dropdown>
                                </div>                                
                            </li>
                        );
                    }

                    if (question.type == "now-textarea") {                             
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false; 
                        const tooltip = question.properties.hasOwnProperty("tooltip") ? (question.properties.tooltip + "") : "";
                        const hideLabel = (question.hideLabel == "true" || question.hideLabel == true) ? true : false;
                        const labelClassName = required ? "pwc-label-size required-icon" : "pwc-label-size";
                        
                        return (
                            question.has_message ? (
                                <li>
                                    <div className="flex-column-container">
                                        {
                                            hideLabel ? (
                                                <div>
                                                </div>
                                            ) : (
                                                <div className="flex-row-container">                                        
                                                    <span className={labelClassName}>{questionLabel}</span>
                                                    {!hasToolTip ? (
                                                        <div>                                                        
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                            <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                        </div>
                                                    )}                                                
                                                </div>                                                                        
                                            )
                                        }

                                        <now-textarea ref={question.ref} className="fullWidth" component-id={question.id} id={question.id} readonly={disabled || question.readOnly} size="md" color="initial" label={""} value={question.value} maxlength={question.properties.maxlength} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} resize={question.properties.resize} show-counter={question.properties.show_counter}></now-textarea>
                                    </div>                                    
                                </li>
                            ) : (
                                <li>
                                    <div className="flex-column-container">
                                        {
                                            hideLabel ? (
                                                <div>
                                                </div>
                                            ) : (
                                                <div className="flex-row-container">                                        
                                                    <span className={labelClassName}>{questionLabel}</span>
                                                    {!hasToolTip ? (
                                                        <div>                                                        
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                            <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                        </div>
                                                    )}                                                
                                                </div>                                                                        
                                            )
                                        }

                                        <now-textarea ref={question.ref} className="fullWidth" component-id={question.id} id={question.id} readonly={disabled  || question.readOnly} size="md" color="initial" label={""} value={question.value} maxlength={question.properties.maxlength} resize={question.properties.resize} show-counter={question.properties.show_counter}></now-textarea>
                                    </div>                                    
                                </li>
                            )
                        );
                    }

                    if (question.type == "now-radio-buttons") {
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false;
                        const tooltip = question.properties.hasOwnProperty("tooltip") ? (question.properties.tooltip + "") : "";
                        const hideLabel = (question.hideLabel == "true" || question.hideLabel == true) ? true : false;
                        const labelClassName = required ? "pwc-label-size required-icon" : "pwc-label-size";

                        return (
                            <li>
                                <div className="flex-column-container">
                                    {
                                        hideLabel ? (
                                            <div>
                                            </div>
                                        ) : (
                                            <div className="flex-row-container">                                        
                                                <span className={labelClassName}>{questionLabel}</span>
                                                {!hasToolTip ? (
                                                    <div>                                                        
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                        <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                    </div>
                                                )}                                                
                                            </div>                                                                        
                                        )
                                    }
                                                                                
                                    <now-radio-buttons ref={question.ref} component-id={question.id} id={question.id} readonly={disabled  || question.readOnly} layout={question.properties.layout} options={question.options} size={question.properties.size}></now-radio-buttons>
                                </div>                                    
                            </li>
                        );
                    }     
                    
                    if (question.type == "now-input-url") {
                        const url = question.value != "" ? question.value : question.properties.url;

                        return (
                            <li>
                                <now-input-url ref={question.ref} component-id={question.id} id={question.id} readonly={disabled  || question.readOnly} label={questionLabel} value={url} required={question.required}></now-input-url>                                
                            </li>
                        );
                    } 

                    if (question.type == "now-checkbox") {                        
                        const checkboxValue = (question.value == "true" || question.value == true) ? true : false;

                        return (
                            question.has_message ? (
                                <li key={question.id}>
                                    <now-checkbox ref={question.ref} component-id={question.id} id={question.id} readonly={disabled  || question.readOnly} checked={checkboxValue} size={question.properties.size} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} required={required} label={questionLabel} value={checkboxValue}></now-checkbox>
                                </li>
                            ) : (
                                <li key={question.id}>
                                    <now-checkbox ref={question.ref} component-id={question.id} id={question.id} readonly={disabled  || question.readOnly} checked={checkboxValue} size={question.properties.size} required={required} label={questionLabel} value={checkboxValue}></now-checkbox>
                                </li>
                            )                            
                        );
                    }

                    if (question.type == "pwc-checklist") {  
                        const hideLabel = (question.hideLabel == "true" || question.hideLabel == true) ? true : false;
                        const labelClassName = required ? "pwc-label-size required-icon" : "pwc-label-size"
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false;                        
                        const tooltip = question.properties.hasOwnProperty("tooltip") ? (question.properties.tooltip + "") : "";

                        return (
                            <div className="checklist-container">
                                {
                                    hideLabel ? (
                                        <div>
                                        </div>
                                    ) : (
                                        <div className="flex-row-container">                                        
                                            <span className={labelClassName}>{questionLabel}</span>
                                            {!hasToolTip ? (
                                                <div>                                                        
                                                </div>
                                            ) : (
                                                <div>
                                                    <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                    <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                </div>
                                            )}                                                
                                        </div>                                                                        
                                    )
                                }
                                
                                {question.properties.checklist.map((checkbox) => {                                
                                    const checkboxValue = (checkbox.value == "true" || checkbox.value == true) ? true : false;

                                    return (
                                        <li key={checkbox.id}>
                                            <now-checkbox component-id={checkbox.id} id={checkbox.id} readonly={disabled || question.readOnly}  size="md" label={checkbox.label} checked={checkboxValue} value={checkbox.value}></now-checkbox>
                                        </li>     
                                    );
                                })}
                            </div>                            
                        );
                    }

                    if (question.type == "now-toggle") {                        
                        const toggleValue = (question.value == "true" || question.value == true) ? true : false;
                        
                        return (
                            <li key={question.id}>
                                <now-toggle ref={question.ref} component-id={question.id} disabled={disabled || question.readOnly} label={questionLabel} label-position={question.properties.labelPosition}  size={question.properties.size} checked={toggleValue}></now-toggle>
                            </li>
                        );
                    }

                    if (question.type == "now-rich-text") {
                        const hideLabel = (question.hideLabel == "true" || question.hideLabel == true) ? true : false;
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false;
                        const tooltip = question.properties.hasOwnProperty("tooltip") ? (question.properties.tooltip + "") : "";

                        return (
                            <li>
                                <div className="flex-column-container">
                                    {
                                        hideLabel ? (
                                            <div>
                                            </div>
                                        ) : (
                                            <div className="flex-row-container">                                        
                                                <span className="pwc-label-size">{questionLabel}</span>

                                                {!hasToolTip ? (
                                                    <div>                                                        
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                        <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" content={tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                    </div>
                                                )}                                                
                                            </div>                                                                        
                                        )
                                    }
                                    <now-rich-text component-id={question.id} id={question.id} html={question.properties.html}></now-rich-text>
                                </div>                                
                            </li>
                        );
                    }

                    return (
                        <li>
                            There is no OOB component for {question.type}
                        </li>
                    );
                })}
            </ul>
        </now-card>
    );
};

const buildQuestionsCard = (
    updateState,
    state,
    dispatch
) => {

    const {
        filteredComponentData,
        disabledForm        
    } = state;

    const { question_sets } = filteredComponentData;

    return (
        <div>
            {question_sets.map(question_set => {
                let visible = true;
                let passDependency = true;

                if (question_set.hasOwnProperty("visible") && question_set.visible.toString() != "true") {
                    visible = false;
                }                

                if (question_set.hasOwnProperty("pass_dependency") && question_set.pass_dependency.toString() != "true") {
                    passDependency = false;
                }                
                
                if (question_set.questions.length == 0 || !visible || !passDependency) {
                    return (
                        <div>
                        </div>
                    );
                }

                return (
                    <div >
                        {buildQuestionCard(updateState, state, question_set, disabledForm, dispatch)}                      
                    </div>        
                );
            })}
        </div>
    );
};

const generateComponents = (
    updateState,
    state,
    dispatch
) => {

    const {
        filteredComponentData,
        fetchStatus,
        errorMessage,
        properties: {
            position
        }
    } = state;

    if (fetchStatus == "error") {
        return (
            <now-illustration size="auto" alt={errorMessage} illustration="error"></now-illustration>
        );
    }
    
    const { question_sets } = filteredComponentData;    

    if (!question_sets.length) {
        return (
            <now-illustration size="lg" alt="Check whether specified id has relevant questions" illustration="error"></now-illustration>
        );
    }        


    return (
        <div>
            {position == "top" ? (
                <div className="general-flex-container">            
                    <div>
                        {buildRequiredQuestionsCard(state)}
                    </div> 
                    <div>
                        {buildQuestionsCard(updateState, state, dispatch)}
                    </div>
                </div>                                   
            ): (
                <div className="general-flex-container">                 
                    <div>
                        {buildQuestionsCard(updateState, state, dispatch)}
                    </div>
                    <div>
                        {buildRequiredQuestionsCard(state)}
                    </div>
                </div>
            )}                    
        </div>
    ); 
};

export default (state, {updateState, dispatch}) => {
	const { isLoading } = state;
    
	return (
		<section className="comp-gen">
			{isLoading ? (
				<now-loader label="Loading..." size="lg"></now-loader>
			) : (
				generateComponents(updateState, state, dispatch)
			)}
		</section>
	);
};