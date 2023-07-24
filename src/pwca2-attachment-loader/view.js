import '@servicenow/now-template-card';
import '@servicenow/now-icon';
import '@servicenow/now-loader';
import '@servicenow/now-illustration';

import { FILE_MAX_SIZE_BYTES, ATTACHMENT_URL } from "./constants";

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

const fileElementLine = (file, isNew, state, updateState) => {
    const fileName = file.name;
    const fileID = file.id;
    let fileIcon = "paperclip-outline";
    const fileState = file.state;
    const { toAddFiles, toRemoveFiles, attachedFiles } = state;

    const disgardFileRemoval = () => {
        let index = toRemoveFiles.indexOf(fileID);
        const copyToRemoveFiles = [...toRemoveFiles];
        copyToRemoveFiles.splice(index, 1);

        index = getIndexByID(attachedFiles, fileID);
        const copyAttachedFiles = [...attachedFiles];
        copyAttachedFiles[index].state = "fetched";
        
        updateState({
            toRemoveFiles: copyToRemoveFiles,
            attachedFiles: copyAttachedFiles
        });
    };

    const downloadFile = () => window.open(`${ATTACHMENT_URL}${fileID}`, '_blank');

    const removeFile = () => {
        const list = isNew ? toAddFiles : attachedFiles;
        const index = getIndexByID(list, fileID);

        if (index != -1) {
            if (isNew) {
                const copyToAddFiles = [...toAddFiles];
                copyToAddFiles.splice(index, 1);

                updateState({
                    toAddFiles: copyToAddFiles
                });
            } else {
                const copyAttachedFiles = [...attachedFiles];
                copyAttachedFiles[index].state = "removed";

                const copyToRemoveFiles = [...toRemoveFiles];
                copyToRemoveFiles.push(fileID);

                updateState({
                    toRemoveFiles: copyToRemoveFiles,
                    attachedFiles: copyAttachedFiles
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
                    <now-icon icon="close-outline" className="file-action-icon" size="md" on-click={removeFile}></now-icon>
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

                {(fileState == "fetched") ? (                                        
                    <now-icon icon="close-outline" className="file-action-icon" size="md" on-click={removeFile}></now-icon>
                ) : (
                    <div></div>
                )}                
            </div>
        </li>
    );
};

const fileElementsList = (files, isNew, state, updateState) => {
    return (
        <ul className="files-list">
            {files.map(file => fileElementLine(file, isNew, state, updateState))}
        </ul>
    );
};

const dragDropFileForm = (updateState, state) => {
    const { recordID, tableName, toAddFiles, dragActive, attachedFiles } = state;

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (e.type == "dragenter" || e.type == "dragover") {
            updateState({
                dragActive: true
            });
        } else {
            updateState({
                dragActive: false
            });
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();    

        updateState({
            dragActive: false
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
        console.log(`Number of files: ${loadedFiles.length}`);
        
        const filteredFiles = [];

        for (let index = 0; index < loadedFiles.length; index++) {
            const file = loadedFiles[index];
            if (file.size < FILE_MAX_SIZE_BYTES) { 
                filteredFiles.push({
                    name: file.name,                    
                    state: "loaded",                    
                    id: generateUUID('xxxxxx-xxxxxx'),
                    tableName,
                    recordID,
                    file
                });
            }
        }

        console.log(`Number of filtered files: ${filteredFiles.length}`)

        updateState({toAddFiles: [...toAddFiles, ...filteredFiles]});
    };

    return (
        <form className="file-upload-form" ondragenter={handleDrag} onsubmit={(e) => e.preventDefault()}>
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

            {(toAddFiles != undefined && toAddFiles != null && toAddFiles.length != 0) ? (
                <div>
                    <span className="file-type-title">Loaded files:</span>                     
                    {fileElementsList(toAddFiles, true, state, updateState)}
                </div>                
            ) : (
                <div></div>
            )}

            {(attachedFiles != undefined && attachedFiles != null && attachedFiles.length != 0) ? (
                <div>                 
                    <div className="file-type-title">Attached files:</div>
                    {fileElementsList(attachedFiles, false, state, updateState)}
                </div>                
            ) : (
                <div></div>
            )}          
        </form>
    );
};

const displayIllustation = (fetchStatus) => {
    console.log("fetchStatus: " + fetchStatus);

    const illustrationType = fetchStatus == "success" ? "completed-tasks" : "error";
    let infoText = "File(s) upload/removal ";

    if (fetchStatus == "success") {
        infoText += "is succeeded";
    } else {
        infoText += "is failed";   
    }

    return (
        <div>
            <now-illustration size="lg" alt={infoText} illustration={illustrationType}></now-illustration>
            <p className="illustation-text">{infoText}</p>
        </div>         
    );
};

export default (state, { updateState }) => {
	const { isLoading, fetchStatus } = state;    
    //className="attachment-loader-section"
	return (        
        <section>
            {isLoading ? 
                (
                    <div className="loader-container">
                        <now-loader label="Loading..." size="lg"></now-loader>
                    </div>
                ) : 
                (
                    <div>
                        {(fetchStatus != "") ? 
                            (
                                displayIllustation(fetchStatus)
                            ) : (
                                <div className="file-upload-section">
                                    <span><b>Upload your files</b></span>
                                    <p>You can upload JPG, PNG or PDF files. The max file size is 10MB</p>
                                    {dragDropFileForm(updateState, state)}
                                </div>
                            )
                        }
                    </div>
                )                
            }
        </section>	
	);
};