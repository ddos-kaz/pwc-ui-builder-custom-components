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
            if (operation == "updateValue") {
                if (idValue.type == "now-typeahead-multi") {
                    const selectedItems = idValue.value.map((item) => item.label);                    
                    questionAnswerSet.push({
                        "id": idValue.id,
                        "value": selectedItems.join(','),
                        "type": idValue.type
                    });
                } else {
                    questionAnswerSet.push({
                        "id": idValue.id,
                        "value": idValue.value,
                        "type": idValue.type
                    });
                }
            }            
        } else {
            if (questionAnswerSet[index].id == idValue.id) {
                if (operation == "updateValue") {
                    if (idValue.type == "now-typeahead-multi") {
                        
                        const selectedItems = idValue.value.map((item) => item.label);
                        questionAnswerSet[index].value = selectedItems.join(',');
                    } else {
                        questionAnswerSet[index].value = idValue.value;
                    }
                    //questionAnswerSet[index].value = idValue.value;
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
    const ignoreTypes = ["now-heading", "now-rich-text", "now-input-url", "pwc-attachment", "container-base-divider"];
    
    return questions.reduce((set, question) => {
        if ((question.has_dependency && question.value == "") || ignoreTypes.includes(question.type)) {
            return set;
        }

        if (question.type == "pwc-checklist") {
            const checklistOptions = [];

            for (let index = 0; index < question.properties.checklist.length; index++) {
                const checkboxObj = {
                    type: "now-checkbox",
                    ...question.properties.checklist[index]
                };

                checklistOptions.push(checkboxObj);
            }

            return [...checklistOptions, ...set];
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