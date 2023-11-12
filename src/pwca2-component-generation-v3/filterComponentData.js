import populateQuestionAnswerSet from './populateQuestionAnswerSet';
import { createRef } from '@servicenow/ui-renderer-snabbdom';

let qaSet = [];
let extQuestionValues = {};

export default function filterComponentData ( componentData, questionAnswerSet, externalQuestionsValues ) {
    qaSet = questionAnswerSet;
    extQuestionValues = externalQuestionsValues;
    
    let { question_sets } = componentData;
    question_sets = question_sets.filter((question_set) => question_set.visible);

    question_sets.forEach((question_set) => {
        const { questions, has_dependency, dependency, visible } = question_set;
        let qsPassFiltering = true;
            
        if (has_dependency && !passDependency(dependency)) {
            qsPassFiltering = false;
        }

        if (visible == true || visible == "true") {            
            if (qsPassFiltering) {                
                let filteredQuestions = questions.filter((question) => {                        
                    let passFiltering = false;
        
                    if (!question.hasOwnProperty("has_dependency") || !question.has_dependency) {
                        passFiltering = true;
                    } else {
                        passFiltering = passDependency(question.dependency);
                    }
        
                    const questionID = question.id;
        
                    const qaIndex = getIndex(questionID);
        
                    if (qaIndex != -1) {
                        if (question.type == "now-radio-buttons") {
                            for (let index = 0; index < question.options.length; index++) {
                                let option = question.options[index];
                                option.checked = qaSet[qaIndex].value == option.id;
                            }
                        } else if (question.type == "now-textarea") {
                            question.value = qaSet[qaIndex].value;      
                          
                            if (parseInt(question.properties.maxlength) < qaSet[qaIndex].value.length) {
                                question.pass_validation = false;                                
                                question.validation_msg = `The entered text exceeds the maximum number of characters allowed: ${question.properties.maxlength}`;
                            } else {
                                question.pass_validation = true;
                            }
                        } else if (question.type == "now-input-url") {
                            question.value = qaSet[qaIndex].value;      
                            
                            if (qaSet[qaIndex].value != null && qaSet[qaIndex].value.toString().indexOf("INVALID-") != -1) {
                                const questionValue = question.value.toString().replace("INVALID-", "");
                                question.pass_validation = false;
                                question.value = null;
                                question.validation_msg = `URL (${questionValue}) is not in the right format. Example: https://pwc.de`;
                            } else {
                                question.pass_validation = true;
                            }
                        } else {
                            question.value = qaSet[qaIndex].value;      
                        }
                    } else if(question.type == "pwc-checklist") {
                        const checklist = question.properties.checklist;
                        
                        for (let clIndex = 0; clIndex < checklist.length; clIndex++) {
                            const checklistItem = checklist[clIndex];
                            const qcIndex = getIndex(checklistItem.id);
        
                            if (qcIndex != -1) {
                                question.properties.checklist[clIndex].value = qaSet[qcIndex].value;
                            }
                        }
                    }                    
                    
                    if (!passFiltering) {
                        qaSet = populateQuestionAnswerSet(componentData, "removeID", questionAnswerSet, {"id": question.id});
                    }
        
                    return passFiltering;
                });
                
                filteredQuestions = filteredQuestions.reduce((acc, question) => {
                    const newQuestion = {...{"ref": createRef()}, ...question};

                    return [ ...acc, newQuestion ];
                }, []);
                        
                question_set.questions = filteredQuestions;
                question_set.pass_dependency = true;
            } else {
                question_set.pass_dependency = false;
            }
            
        }                
    });

    componentData.question_sets = question_sets;

    return componentData;
}

const getIndex = (id) => {
    for (let index = 0; index < qaSet.length; index++) {
        const qaSetID = qaSet[index].id;

        if (qaSetID == id) {
            return index;
        }
    }

    return -1;
};

const passDependency = (dependencyObj) => {  
    if (dependencyObj == "" || !dependencyObj.hasOwnProperty("id") || !dependencyObj.hasOwnProperty("type") || !dependencyObj.hasOwnProperty("value") || !dependencyObj.hasOwnProperty("cond_type")) {
        return true;
    }    

    if (dependencyObj.type == "simple") {
        var index = getIndex(dependencyObj.id);        

        if (index == -1 && !extQuestionValues.hasOwnProperty(dependencyObj.id)) {
            return false;
        } else {
            let qaSetValue = "";//qaSet[index].value;
            if (index != -1) {
                qaSetValue = qaSet[index].value;
            } else if (extQuestionValues.hasOwnProperty(dependencyObj.id)) {
                qaSetValue = extQuestionValues[dependencyObj.id];
            }
            
            const dependencyValue = dependencyObj.value;

            if (dependencyObj.cond_type == "==") {                
                if (Array.isArray(qaSetValue)) {
                    return (
                        qaSetValue.filter((val) => val.id == dependencyValue).length > 0
                    );
		        } else if (qaSetValue.toString().toLowerCase() == dependencyValue.toLowerCase()) {
                    return true;
                } else {
                    return false;
                }
            } else if (dependencyObj.cond_type == "!=") {
                if (Array.isArray(qaSetValue)) {
                    return (
                        qaSetValue.filter((val) => val.id == dependencyValue).length == 0
                    );
		        } else if (qaSetValue.toString().toLowerCase() != dependencyValue && qaSetValue.toString() != "") {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }             
        }
    }

    if (dependencyObj.cond_type == "OR") {
        return passDependency(dependencyObj.left) || passDependency(dependencyObj.right);
    } else if (dependencyObj.cond_type == "AND") {
        return passDependency(dependencyObj.left) && passDependency(dependencyObj.right);
    } else if (dependencyObj.cond_type == "NOT") {
        return !(passDependency(dependencyObj.left) && passDependency(dependencyObj.right));
    }

    return false;
}