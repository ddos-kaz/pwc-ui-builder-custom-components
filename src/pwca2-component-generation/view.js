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
//import '@servicenow/now-select';

const buildQuestionCard = (question_set) => {
    const {name, questions} = question_set;
    const qs_name = name.toString();
    
    return (
        <now-card size="md" interaction="none">
            <now-card-header tagline={{"label": qs_name,"icon":"tree-view-short-outline"}}></now-card-header>
            <now-card-divider full-width block-spacing='md'></now-card-divider>
            <ul>
                {questions.map(question => {
                    if (question.type == "now-heading") {
                        return (
                            <li>
                                <now-heading component-id={question.id} id={question.id} label={question.label} level="1" variant={question.properties.size} has-no-margin={true}></now-heading>
                            </li>
                        );
                    }

                    if (question.type == "now-dropdown") {
                        return ( 
                            <li>                       
                                <now-dropdown component-id={question.id}  id={question.id} items={question.options} selected-items={question.value} select="single" placeholder={question.properties.placeholder} icon="" variant={question.properties.variant} size={question.properties.size} tooltip-content={question.properties.tooltip} panel-fit-props={{}}></now-dropdown>
                            </li>
                        );
                    }

                    /* if (question.type == "now-select") {
                        return ( question.has_message ? (
                                <li>                    
                                    <now-select component-id={question.id}  id={question.id} search="none" helper-content={question.properties.tooltip} items={question.options} label={question.label} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} selected-item="" required={question.properties.required}></now-select>                                   
                                </li>
                            ) : (
                                <li>
                                    <now-select component-id={question.id}  id={question.id} search="none" helper-content={question.properties.tooltip} items={question.options} label={question.label} messages={[]} selected-item="" required={question.properties.required}></now-select>                                   
                                </li>
                            )                            
                        );
                    } */

                    if (question.type == "now-input") {
                        return ( question.has_message ? (
                                    <li>                       
                                        <now-input component-id={question.id}  id={question.id} size={question.properties.size} helper-content={question.properties.tooltip} label={question.label} placeholder={question.properties.placeholder} step="any" type={question.properties.type} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} value={question.value} required={question.properties.required}></now-input> 
                                    </li>
                                ) : (
                                    <li>
                                        <now-input component-id={question.id}  id={question.id} size={question.properties.size} helper-content={question.properties.tooltip} label={question.label} placeholder={question.properties.placeholder} step="any" type={question.properties.type} value={question.value} required={question.properties.required}></now-input> 
                                    </li>                                    
                                )                            
                        );
                    }
                    
                    if (question.type == "now-dropdown:multi") {
                        return (  
                            <li>
                                <now-dropdown component-id={question.id} id={question.id} items={question.options} selected-items={question.value} select="multi" placeholder={question.properties.placeholder} icon="" variant={question.properties.variant} size={question.properties.size} tooltip-content={question.properties.tooltip} panel-fit-props={{}}></now-dropdown>
                            </li>                     
                        );
                    }

                    if (question.type == "now-textarea") {                    
                        return (
                            question.has_message ? (
                                <li>
                                    <now-textarea className="fullWidth" component-id={question.id} id={question.id} size="md" color="initial" label={question.label} value={question.value} maxlength={question.properties.maxlength} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} resize={question.properties.resize} show-counter={question.properties.show_counter} required={question.properties.required}></now-textarea>
                                </li>
                            ) : (
                                <li>
                                    <now-textarea className="fullWidth" component-id={question.id} id={question.id} size="md" color="initial" label={question.label} value={question.value} maxlength={question.properties.maxlength} resize={question.properties.resize} show-counter={question.properties.show_counter} required={question.properties.required}></now-textarea>
                                </li>
                            )
                        );
                    }

                    if (question.type == "now-radio-buttons") {
                        return (
                            <li>
                                <now-radio-buttons component-id={question.id} id={question.id} helper-content={question.properties.tooltip} label={question.label} layout={question.properties.layout} options={question.options} size={question.properties.size} required={question.properties.required}></now-radio-buttons>
                            </li>
                        );
                    }     
                    
                    if (question.type == "now-input-url") {
                        return (
                            <li>
                                <now-input-url component-id={question.id} id={question.id} label={question.label} value={question.properties.url}></now-input-url>                                
                            </li>
                        );
                    } 

                    if (question.type == "now-checkbox") {
                        return (
                            question.has_message ? (
                                <li>
                                    <now-checkbox component-id={question.id} id={question.id} checked={question.value} size={question.properties.size} messages={[{"status":question.message.status,"icon":question.message.icon,"content":question.message.content}]} required={question.properties.required} label={question.label} value={question.value}></now-checkbox>
                                </li>
                            ) : (
                                <li>
                                    <now-checkbox component-id={question.id} id={question.id} checked={question.value} size={question.properties.size} required={question.properties.required} label={question.label} value={question.value}></now-checkbox>
                                </li>
                            )                            
                        );
                    }

                    if (question.type == "now-checklist") {
                        return (
                            question.properties.checklist.map((checkbox) => {
                                //checked={question.value} value={question.value}
                                return (
                                    <li>
                                        <now-checkbox component-id={checkbox.id} id={checkbox.id} size={question.properties.size} label={checkbox.label}></now-checkbox>
                                    </li>     
                                );
                            })                                                   
                        );
                    }

                    if (question.type == "now-toggle") {
                        return (
                            <li>
                                <now-toggle component-id={question.id} id={question.id} label={question.label} label-position="start" checked={question.value} size={question.properties.size}></now-toggle>
                            </li>
                        );
                    }

                    if (question.type == "now-rich-text") {
                        return (
                            <li>
                                <now-rich-text component-id={question.id} id={question.id} html={question.properties.html}></now-rich-text>
                            </li>
                        );
                    }


                    return (<p>There is no OOB component for {question.type}</p>);
                })}
            </ul>
        </now-card>
    );
};

const generateComponents = (
    filteredComponentData,
    fetchStatus,
    errorMessage,
    taskActive,
    isTaskTable,
    isQuestionnaireSubmitted,
    errorDuringSubmission
) => {


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
            {(!isQuestionnaireSubmitted && taskActive)? (
                <div>
                    {question_sets.map(question_set => {            
                        return (
                            <div class="card-containers">
                                {buildQuestionCard(question_set)}
                            </div>                    
                        );
                    })}
                    
                    <div>
                        {isTaskTable ? (
                            <div>                        
                                <now-button label="Submit questionnaire" variant="primary" size="md" icon="documents-outline" config-aria={{"button":{"aria-label":"Submit questionnarie"}}} tooltip-content="Submit questionnarie"></now-button>                                  
                            </div>                    
                        ) : (
                            <div></div>
                        )}
                    </div>   
                </div>
            ) : (
                <div>
                    {!errorDuringSubmission ? (
                        <div className="pwc-state-info-section">
                            <now-illustration size="lg" alt="" illustration="completed-tasks"></now-illustration>
                            <div className="pwc-state-info-text">
                                <now-heading label="Question form has submitted" level="1" variant="title-primary"></now-heading>
                            </div>                            
                        </div>                        
                    ) : (
                        <div className="pwc-state-info-section">
                            <now-illustration size="lg" alt="Error during submission" illustration="error"></now-illustration>
                            <div className="pwc-state-info-text">
                                <now-heading label="Error during submission" level="1" variant="title-primary"></now-heading>
                            </div>
                        </div>
                    )}
                </div>                            
            )}                     
        </div>
    );
};

export default (state, {dispatch}) => {
	const { filteredComponentData, fetchStatus, errorMessage, isLoading, taskActive, isTaskTable, isQuestionnaireSubmitted, errorDuringSubmission } = state;

	return (
		<section className="comp-gen">
			{isLoading ? (
				<now-loader label="Loading..." size="lg"></now-loader>
			) : (
				generateComponents(filteredComponentData, fetchStatus, errorMessage,  taskActive, isTaskTable, isQuestionnaireSubmitted, errorDuringSubmission)
			)}
		</section>
	);
};