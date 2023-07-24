import populateQuestionAnswerSet from './populateQuestionAnswerSet';

let qaSet = [];

export default function filterComponentData ( componentData, questionAnswerSet ) {
    qaSet = questionAnswerSet;
    const { question_sets } = componentData;

    question_sets.forEach((question_set) => {
        const { questions } = question_set;

        const filteredQuestions = questions.filter((question) => {                        
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
                qaSet = populateQuestionAnswerSet(componentData, questionAnswerSet, {"id": question.id}, "removeID");
            }

            return passFiltering;
        });        

        question_set.questions = filteredQuestions;
    });

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

        if (index == -1) {
            return false;
        } else {
            const qaSetValue = qaSet[index].value;
            
            const dependencyValue = dependencyObj.value;

            if (dependencyObj.cond_type == "==") {
                
                if (qaSetValue.toString().toLowerCase() == dependencyValue.toLowerCase()) {
                    return true;
                } else {
                    return false;
                }
            } else if (dependencyObj.cond_type == "!=") {
                if (qaSetValue.toString().toLowerCase() != dependencyValue && qaSetValue.toString() != "") {
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