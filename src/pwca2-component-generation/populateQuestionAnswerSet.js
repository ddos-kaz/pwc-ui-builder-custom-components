export default function populateData(
	componentData,
    questionAnswerSet = [],
    idValue = {},
    operation = "none"
) {   
    if (questionAnswerSet.length == 0 || operation == "insertValues") {
        const {question_sets} = componentData;

        return question_sets.reduce((set, {questions}) => set.concat(transformData(questions)), []);
    }    
    
	if (idValue.hasOwnProperty("id")) {
        const index = getIndex(questionAnswerSet, idValue.id);

        if (index == -1) {
            questionAnswerSet.push({
                "id": idValue.id,
                "value": idValue.value,
                "type": idValue.type
            });
        } else {
            if (questionAnswerSet[index].id == idValue.id) {
                if (operation == "updateValue") {
                    questionAnswerSet[index].value = idValue.value;                  
                } else if (operation == "clearValue") {
                    questionAnswerSet[index].value = "";
                } else if (operation == "removeID") {
                    questionAnswerSet.splice(index, 1); 
                }
            }
        }
    }
	
    return questionAnswerSet;
}

const transformData = (questions) => {
    return questions.reduce((set, question) => {
        if (question.has_dependency) {
            return set;
        }

        return [
            {
                "id": question.id,
                "label": question.label,
                "value": question.value,
                "type": question.type
            },
        ...set];
    }, []);
};

const getIndex = (questionAnswerSet, id) => {
    for (let index = 0; index < questionAnswerSet.length; index++) {
        if (questionAnswerSet[index].id == id) {
            return index;
        }
    }

    return -1;
};