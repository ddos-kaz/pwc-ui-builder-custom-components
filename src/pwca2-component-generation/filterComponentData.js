export default function filterComponentData ( componentData, questionAnswerSet ) {
    const { question_sets } = componentData;

    question_sets.forEach((question_set) => {
        const { questions } = question_set;

        const filteredQuestions = questions.filter((question) => {                        
            const questionAnswerIndex = getIndex(questionAnswerSet, question.id);

            if (questionAnswerIndex != -1) {
                if (question.type == "now-radio-buttons") {
                    for (let index = 0; index < question.options.length; index++) {
                        let option = question.options[index];
                        option.checked = questionAnswerSet[questionAnswerIndex].value == option.id;
                    }
                } else {
                    question.value = questionAnswerSet[questionAnswerIndex].value;
                }                
            }

            if (!question.has_dependency) {
                return true;
            }

            const depedentQuestionAnswerIndex = getIndex(questionAnswerSet, question.dependency.dependent_id);
            
            if (depedentQuestionAnswerIndex != -1 && questionAnswerSet[depedentQuestionAnswerIndex].value != undefined && question.dependency.dependent_value != undefined) {
                let questionAnswerSetValue = questionAnswerSet[depedentQuestionAnswerIndex].value;
                questionAnswerSetValue = questionAnswerSetValue.toString();
                let dependentValue = question.dependency.dependent_value;
                dependentValue = dependentValue.toString();

                if (questionAnswerSetValue == dependentValue) {
                    return true;
                }                
            }

            return false;
        });        

        question_set.questions = filteredQuestions;
    });

    return componentData;
}

const getIndex = (questionAnswerSet, id) => {
    for (let index = 0; index < questionAnswerSet.length; index++) {
        if (questionAnswerSet[index].id == id) {
            return index;
        }
    }

    return -1;
};