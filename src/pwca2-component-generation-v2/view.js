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
import '@servicenow/now-alert';
import '@servicenow/now-card';
import '@servicenow/now-illustration';
import '@servicenow/now-button';
import '@servicenow/now-alert';
import '@servicenow/now-typeahead';
import '@servicenow/now-icon';
import '@servicenow/now-select';
import '@servicenow/now-label-value';
import '@servicenow/now-tooltip';


import { ATTACHMENT_URL } from "./constants";

const generateUUID = (format) => format.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});

const getIndexByID = (list, id) => {
    for (let index = 0; index < list.length; index++) {
        if (list[index].id == id) {
            return index;
        }
    }

    return -1;
}

const fileElementLine = (file, isNew, recordID, state, updateState, disabled) => {
    const fileName = file.name;
    const fileID = file.id;
    let fileIcon = "paperclip-outline";
    const fileState = file.state;
    const { toAddFiles, toRemoveFiles, allAttachedFiles } = state;

    const disgardFileRemoval = () => {
        let index = toRemoveFiles.indexOf(fileID);
        const copyToRemoveFiles = [...toRemoveFiles];
        copyToRemoveFiles.splice(index, 1);

        const copyAllAttachedFiles = JSON.parse(JSON.stringify(allAttachedFiles));

        if (copyAllAttachedFiles.hasOwnProperty(recordID)) {
            index = getIndexByID(copyAllAttachedFiles[recordID], fileID);
            copyAllAttachedFiles[recordID][index]["state"] = "fetched";
        }        
        
        updateState({
            toRemoveFiles: copyToRemoveFiles,
            allAttachedFiles: copyAllAttachedFiles
        });
    };

    const downloadFile = () => window.open(`${ATTACHMENT_URL}${fileID}`, '_blank');

    const removeFile = () => {
        const list = isNew ? toAddFiles : allAttachedFiles[recordID];
        const index = getIndexByID(list, fileID);

        if (index != -1) {
            if (isNew) {
                const copyToAddFiles = [...toAddFiles];
                copyToAddFiles.splice(index, 1);

                updateState({
                    toAddFiles: copyToAddFiles
                });
            } else {
                const copyAllAttachedFiles = JSON.parse(JSON.stringify(allAttachedFiles));
                copyAllAttachedFiles[recordID][index]["state"] = "removed";

                const copyToRemoveFiles = [...toRemoveFiles];
                copyToRemoveFiles.push(fileID);

                updateState({
                    toRemoveFiles: copyToRemoveFiles,
                    allAttachedFiles: copyAllAttachedFiles
                });
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

const fileElementsList = (files, isNew, recordID, state, updateState, disabled) => {
    return (
        <ul className="files-list">
            {files.map(file => fileElementLine(file, isNew, recordID, state, updateState, disabled))}
        </ul>
    );
};

const dragDropFileForm = (updateState, state, attachmentConfig, disabled) => {
    const { recordID, tableName, maxFileSize, allowedFileTypes } = attachmentConfig;
    const allowedFileTypesArr = allowedFileTypes.split(',');

    const { dragActiveStates, toAddFiles, allAttachedFiles, filteredRequiredQuestions } = state;
    const attachedFiles = allAttachedFiles[recordID] || [];
    
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
                    tableName,
                    recordID,
                    file
                });
            } else {
                alert("Either file size is bigger than allowed or file type is not matching allowed ones");
            }
        }
        const copyFilteredRequiredQuestions = [...filteredRequiredQuestions];

        if (filteredFiles.length != 0 && copyFilteredRequiredQuestions.includes(recordID)) {
            const fileIndex = copyFilteredRequiredQuestions[recordID];

            copyFilteredRequiredQuestions.splice(fileIndex, 1);
        }

        updateState({
            toAddFiles: [...toAddFiles, ...filteredFiles],
            filteredRequiredQuestions: copyFilteredRequiredQuestions,
            hasRequiredQuestions: copyFilteredRequiredQuestions.length != 0
        });
    };

    const filteredToAddFiles = toAddFiles.filter(file => file.recordID == recordID);
    
    return (
        <form className="file-upload-form" ondragenter={handleDrag} onsubmit={(e) => e.preventDefault()}>
            {!disabled ? (
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
                    {fileElementsList(filteredToAddFiles, true, recordID, state, updateState, disabled)}
                </div>                
            ) : (
                <div></div>
            )}

            {(attachedFiles.length != 0) ? (
                <div>                 
                    <div className="file-type-title">Attached files:</div>
                    {fileElementsList(attachedFiles, false, recordID, state, updateState, disabled)}
                </div>
            ) : (
                <div></div>
            )}          
        </form>
    );
};

const buildQuestionCard = ( updateState, state, question_set, disabled ) => {
    const { questions } = question_set;
    const { referenceOptions } = state;
    /* let qs_name = name.toString();

    if (question_set.hideLabel) {
        qs_name = "";
    }*/
    
    /*
        <now-card-header heading={{"label": qs_name, "size": "md", "lines": 1}} className="pwc-card-header-title"></now-card-header>
        <now-card-divider full-width={true} padding='none'></now-card-divider>
    */
   
    return (
        <now-card size="md" interaction="none" className="pwc-now-card">                        
            <ul>
                {questions.map((question) => {
                    
                    let required = false;

                    if (question.required.toString() == 'true') {
                        required = true;
                    }
                    
                    if (disabled || question.readOnly.toString() == 'true') {
                        required = false;
                    }
                    
                    if (question.type == "pwc-attachment") {
                        const { maxFileSize } = question.value;
                        let { allowedFileTypes } = question.value;
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false;
                        allowedFileTypes = allowedFileTypes.toUpperCase().split(',');

                        return (
                            <li>
                                <div className="file-upload-section">
                                    <div className="flex-row-container">
                                        <span className="pwc-label-size"><b>{question.label}</b></span>

                                        {!hasToolTip ? (
                                            <div>                                                        
                                            </div>
                                        ) : (
                                            <div>
                                                <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={question.properties.tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" target-ref={{}} content={question.properties.tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                            </div>
                                        )} 
                                    </div>
                                    {question.required && !disabled ? (
                                        <span className="redTextColor">File attachment is required</span>
                                    ) : (
                                        <span></span>
                                    )}

                                    {!disabled ? (
                                        <span>You can upload {allowedFileTypes.join(', ')} files. The max file size is {maxFileSize}MB</span>
                                    ) : (
                                        <span></span>
                                    )}
                                    
                                    {dragDropFileForm(updateState, state, question.value, disabled)}
                                </div>
                            </li>
                        );
                    }

                    if (question.type == "now-heading") {
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false;

                        if (question.properties.size == "title-tertiary") {
                            return (                                
                                <li>
                                    <div className="flex-row-container">
                                        <p id={question.id}>{question.label}</p>

                                        {!hasToolTip ? (
                                            <div>                                                        
                                            </div>
                                        ) : (
                                            <div>
                                                <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={question.properties.tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" target-ref={{}} content={question.properties.tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                            </div>
                                        )}      
                                    </div>                                    
                                </li>
                            );
                        }

                        return (
                            <li>
                                <div className="flex-row-container">
                                    <now-heading component-id={question.id} id={question.id} label={question.label} level="1" variant={question.properties.size} has-no-margin={true}></now-heading>
                                        
                                    {!hasToolTip ? (
                                        <div>                                                        
                                        </div>
                                    ) : (
                                        <div>
                                            <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={question.properties.tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                            <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" target-ref={{}} content={question.properties.tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
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

                        return ( 
                            <li>
                                <div className="flex-column-container">
                                    {
                                        hideLabel ? (
                                            <div>
                                            </div>
                                        ) : (
                                            <div className="flex-row-container">                                        
                                                <span className={labelClassName}>{question.label}</span>
                                                {!hasToolTip ? (
                                                    <div>                                                        
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={question.properties.tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                        <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" target-ref={{}} content={question.properties.tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                    </div>
                                                )}                                                
                                            </div>                                                                        
                                        )
                                    }
                                    
                                    <now-dropdown className="halfWidth" component-id={question.id}  id={question.id} disabled={disabled || question.readOnly} items={question.options} selected-items={question.value} select="single" placeholder={question.properties.placeholder} icon="" variant={question.properties.variant} size={question.properties.size} tooltip-content={question.properties.tooltip} panel-fit-props={{}}></now-dropdown>
                                </div>                                
                            </li>
                        );
                    }

                    if (question.type == "now-select") {
                        return ( question.has_message ? (                            
                                <li>
                                    <now-select className="halfWidth" component-id={question.id}  id={question.id} search="none" helper-content={question.properties.tooltip} items={question.options} label={question.label} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} selected-item={question.value} required={required}></now-select>
                                </li>
                            ) : (
                                <li>
                                    <now-select className="halfWidth" component-id={question.id}  id={question.id} search="none" helper-content={question.properties.tooltip} items={question.options} label={question.label} messages={[]} selected-item={question.value} required={required}></now-select>
                                </li>
                            )                            
                        );
                    }

                    if (question.type == "now-typeahead") {
                        if (disabled) {
                            const inputValue = question.value != "" ? question.properties.placeholder : "";
                            return ( question.has_message ? (
                                    <li>
                                        <now-input className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} helper-content={question.properties.tooltip} label={question.label} placeholder={question.properties.placeholder} step="any" type={question.properties.type} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} value={inputValue}></now-input> 
                                    </li>
                                ) : (
                                    <li>
                                        <now-input className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} helper-content={question.properties.tooltip} label={question.label} type="text" value={inputValue}></now-input> 
                                    </li>                                    
                                )                            
                            );
                        }

                        let typeaheadQuestionValue = question.value;

                        const type = question.properties.type;
                        const options = type == "search" ? referenceOptions : question.options;

                        return (                            
                            question.has_message ? (
                                <li>
                                    <now-typeahead className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} size="md" items={options} selected-item={typeaheadQuestionValue} search="managed" helper-content={question.tooltip} required={required} label={question.label} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]}  placeholder={question.properties.placeholder} config-aria={{}}></now-typeahead>
                                </li>
                            ) : (
                                <li>
                                    <now-typeahead className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} size="md" items={options} selected-item={typeaheadQuestionValue} search="managed" helper-content={question.tooltip} required={required} label={question.label} placeholder={question.properties.placeholder} config-aria={{}}></now-typeahead>
                                </li>
                            )
                        );
                    }

                    if (question.type == "now-typeahead-multi") {
                        if (disabled) {
                            return ( question.has_message ? (
                                    <li>
                                        <now-input className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} helper-content={question.properties.tooltip} label={question.label} placeholder={question.properties.placeholder} step="any" type={question.properties.type} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} value={question.value}></now-input> 
                                    </li>
                                ) : (
                                    <li>
                                        <now-input className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} helper-content={question.properties.tooltip} label={question.label} type="text" value={question.value}></now-input> 
                                    </li>                                    
                                )                            
                            );
                        }                        

                        const type = question.properties.type;
                        const options = type == "search" ? referenceOptions : question.options;


                        return (                            
                            question.has_message ? (
                                <li>
                                    <now-typeahead-multi className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} size="md" required={required} items={options} selected-item={[question.value]} search="managed" helper-content={question.tooltip} label={question.label} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]}  placeholder={question.properties.placeholder} config-aria={{}}></now-typeahead-multi>
                                </li>
                            ) : (
                                <li>
                                    <now-typeahead-multi className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} size="md" required={required} items={options} selected-item={[question.value]} search="managed" helper-content={question.tooltip} label={question.label} placeholder={question.properties.placeholder} config-aria={{}}></now-typeahead-multi>
                                </li>
                            )
                        );
                    }

                    if (question.type == "now-input") {
                        return ( question.has_message ? (
                                    <li>
                                        <now-input className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} size={question.properties.size} helper-content={question.properties.tooltip} label={question.label} placeholder={question.properties.placeholder} step="any" type={question.properties.type} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} value={question.value} required={required}></now-input> 
                                    </li>
                                ) : (
                                    <li>
                                        <now-input className="halfWidth" component-id={question.id}  id={question.id} readonly={disabled || question.readOnly} size={question.properties.size} helper-content={question.properties.tooltip} label={question.label} placeholder={question.properties.placeholder} step="any" type={question.properties.type} value={question.value} required={required}></now-input> 
                                    </li>                                    
                                )                            
                        );
                    }
                    
                    if (question.type == "now-dropdown:multi") {
                        const hideLabel = (question.hideLabel == "true" || question.hideLabel == true) ? true : false;
                        const labelClassName = required ? "pwc-label-size required-icon" : "pwc-label-size"
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false;

                        return ( 
                            <li>
                                <div className="flex-column-container">
                                    {
                                        hideLabel ? (
                                            <div>
                                            </div>
                                        ) : (
                                            <div className="flex-row-container">                                        
                                                <span className={labelClassName}>{question.label}</span>
                                                {!hasToolTip ? (
                                                    <div>                                                        
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={question.properties.tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                        <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" target-ref={{}} content={question.properties.tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
                                                    </div>
                                                )}                                                
                                            </div>                                                                        
                                        )
                                    }
                                    
                                    <now-dropdown className="halfWidth" component-id={question.id}  id={question.id} disabled={disabled || question.readOnly} items={question.options} selected-items={question.value} select="multi" placeholder={question.properties.placeholder} icon="" variant={question.properties.variant} size={question.properties.size} tooltip-content={question.properties.tooltip} panel-fit-props={{}}></now-dropdown>
                                </div>                                
                            </li>
                        );
                    }

                    if (question.type == "now-textarea") {                    
                        return (
                            question.has_message ? (
                                <li>
                                    <now-textarea className="fullWidth" component-id={question.id} id={question.id} readonly={disabled || question.readOnly} size="md" color="initial" label={question.label} value={question.value} maxlength={question.properties.maxlength} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} resize={question.properties.resize} show-counter={question.properties.show_counter} required={required}></now-textarea>
                                </li>
                            ) : (
                                <li>
                                    <now-textarea className="fullWidth" component-id={question.id} id={question.id} readonly={disabled  || question.readOnly} size="md" color="initial" label={question.label} value={question.value} maxlength={question.properties.maxlength} resize={question.properties.resize} show-counter={question.properties.show_counter} required={required}></now-textarea>
                                </li>
                            )
                        );
                    }

                    if (question.type == "now-radio-buttons") {
                        return (
                            <li>
                                <now-radio-buttons component-id={question.id} id={question.id} readonly={disabled  || question.readOnly} helper-content={question.properties.tooltip} label={question.label} layout={question.properties.layout} options={question.options} size={question.properties.size} required={required}></now-radio-buttons>
                            </li>
                        );
                    }     
                    
                    if (question.type == "now-input-url") {
                        const url = question.value != "" ? question.value : question.properties.url;

                        return (
                            <li>
                                <now-input-url component-id={question.id} id={question.id} readonly={disabled  || question.readOnly} label={question.label} value={url} required={question.required}></now-input-url>                                
                            </li>
                        );
                    } 

                    if (question.type == "now-checkbox") {                        
                        const checkboxValue = (question.value == "true" || question.value == true) ? true : false;

                        return (
                            question.has_message ? (
                                <li key={question.id}>
                                    <now-checkbox component-id={question.id} id={question.id} readonly={disabled  || question.readOnly} checked={checkboxValue} size={question.properties.size} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} required={required} label={question.label} value={checkboxValue}></now-checkbox>
                                </li>
                            ) : (
                                <li key={question.id}>
                                    <now-checkbox component-id={question.id} id={question.id} readonly={disabled  || question.readOnly} checked={checkboxValue} size={question.properties.size} required={required} label={question.label} value={checkboxValue}></now-checkbox>
                                </li>
                            )                            
                        );
                    }

                    if (question.type == "pwc-checklist") {  
                        const hideLabel = (question.hideLabel == "true" || question.hideLabel == true) ? true : false;
                        const labelClassName = required ? "pwc-label-size required-icon" : "pwc-label-size"
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false;                        
                        
                        return (
                            <div className="flex-column-container">
                                {
                                    hideLabel ? (
                                        <div>
                                        </div>
                                    ) : (
                                        <div className="flex-row-container">                                        
                                            <span className={labelClassName}>{question.label}</span>
                                            {!hasToolTip ? (
                                                <div>                                                        
                                                </div>
                                            ) : (
                                                <div>
                                                    <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={question.properties.tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                    <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" target-ref={{}} content={question.properties.tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
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
                                <now-toggle component-id={question.id} disabled={disabled || question.readOnly} label={question.label} label-position="start"  size={question.properties.size} checked={toggleValue}></now-toggle>
                            </li>
                        );
                    }

                    if (question.type == "now-rich-text") {
                        const hideLabel = (question.hideLabel == "true" || question.hideLabel == true) ? true : false;
                        const hasToolTip = question.properties.hasOwnProperty("tooltip") ? question.properties.tooltip != "" : false;

                        return (
                            <li>
                                <div className="flex-column-container">
                                    {
                                        hideLabel ? (
                                            <div>
                                            </div>
                                        ) : (
                                            <div className="flex-row-container">                                        
                                                <span className="pwc-label-size">{question.label}</span>

                                                {!hasToolTip ? (
                                                    <div>                                                        
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <now-button-iconic icon="circle-info-outline" variant="tertiary" bare={true} size="sm" config-aria={{"button":{"aria-label":""}}} tooltip-content={question.properties.tooltip} aria-describedby={`${question.id}-tooltip`}></now-button-iconic>
                                                        <now-tooltip id={`${question.id}-tooltip`} aria-label={question.properties.tooltip} aria-hidden="true" role="tooltip" target-ref={{}} content={question.properties.tooltip} delay={300} container={{}} position={["top-center bottom-center","bottom-center top-center","center-end center-start","center-start center-end","top-end top-start","bottom-end bottom-start","top-start top-end","bottom-start bottom-end"]} offset={8}></now-tooltip>
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

const generateComponents = (
    updateState,
    state
) => {

    const {
        filteredComponentData,
        fetchStatus,
        errorMessage,
        recordActive,
        isTaskTable,
        disabledForm,
        hasRequiredQuestions
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

    /* <div>
        {(isTaskTable && recordActive && !disabledForm) ? (
            <div className="pwc-btn-container">                        
                <now-button component-id="submit" label="Complete Task" variant="primary" size="md" icon="" config-aria={{"button":{"aria-label":"Save answers"}}} tooltip-content="Save answers and Complete Task" disabled={hasRequiredQuestions}></now-button>
                <now-button component-id="save" label="Save" variant="primary" size="md" icon="" config-aria={{"button":{"aria-label":"Save answers"}}} tooltip-content="Save answers"></now-button>
            </div>                    
        ) : (
            <div></div>
        )}
    </div> */

    return (
        <div>            
            {question_sets.map(question_set => {
                let visible = true;

                if (question_set.hasOwnProperty("visible")) {
                    if (question_set.visible.toString() != "true") {
                        visible = false;
                    }
                }
                
                if (question_set.questions.length == 0 || !visible) {
                    return (
                        <div>
                        </div>
                    );
                }

                return (
                    <div>
                        {buildQuestionCard(updateState, state, question_set, disabledForm)}
                    </div>                    
                );
            })}                     
        </div>
    ); 
};

export default (state, {updateState}) => {
	const { isLoading } = state;
    
	return (
		<section className="comp-gen">
			{isLoading ? (
				<now-loader label="Loading..." size="lg"></now-loader>
			) : (
				generateComponents(updateState, state)
			)}
		</section>
	);
};