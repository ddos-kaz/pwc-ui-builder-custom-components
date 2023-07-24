import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from './view';
import actionHandlers from './actionHandlers';

createCustomElement('pwca2-component-generation', {
	renderer: {type: snabbdom},
	view,
	initialState: {
		componentData: {},
		filteredComponentData: {},
		fetchStatus: "none",
		errorMessage: "",
		isLoading: true,
		questionAnswerSet: [],
		taskActive: true,
		isTaskTable: false,
		isQuestionnaireSubmitted: false,
		errorDuringSubmission: false,
		closeAlerts: false,
		disabledForm: false
	},
	properties: {
		disabled: {
			default: false
		}, 
        compid: {
			default: '9d08c35d1ba52150a221ddb7ab4bcb03'
		}
	},
	styles,
	actionHandlers
});