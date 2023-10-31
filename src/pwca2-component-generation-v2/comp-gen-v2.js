import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from './view';
import actionHandlers from './actionHandlers';

createCustomElement('pwca2-component-generation-v2', {
	renderer: {type: snabbdom},
	view,
	initialState: {
		componentData: {},
		filteredComponentData: {},
		fetchStatus: "none",
		errorMessage: "",
		isLoading: true,
		questionAnswerSet: [],
		partialQuestionAnswerSet: [],
		recordActive: true,
		isTaskTable: false,
		isProjectTable: false,
		//isQuestionnaireSubmitted: false,
		//errorDuringSubmission: false,
		hasValues: false,
		disabledForm: false,
		dragActiveStates: {},
		toAddFiles: [],
		toRemoveFiles: [],
		allAttachedFiles: [],
		filteredRequiredQuestions: [],
		questionSearchTables: {},
		hasRequiredQuestions: false,
		hasInvalidQuestions: false,
		referenceOptions: [],
		referenceLabel: "",
		referenceSubLabel: "",
		referenceValue: "",
		searchQuestionID: "",
		timestamp: "",
		displayRemoveFileModal: false,
		toRemoveFile: {},
		toSaveForm: false
	}, 
	properties: {
		compdata: {
			default: {
				"status": 200,
				"error": "",
				"table": "x_pwca2_0011077_question",
				"sys_id": "0aabc447db45799002fc5117f3961973",
				"name": "",
				"question_sets": [
					{
						"name": "Testing of 683 - 1",
						"questions": [
							{
								"label": "Multiple Select (list)",
								"name": "Multiple select testing",
								"order": "500",
								"id": "0aabc447db45799002fc5117f3961973",
								"hideLabel": false,
								"value": [],
								"readOnly": false,
								"required": true,
								"type": "now-typeahead-multi-choice",
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "ariande_marks",
										"label": "Ariande Big"
									},
									{
										"id": "tola_banks",
										"label": "Happy"
									},
									{
										"id": "nathalie_bright",
										"label": "Nathalie Small"
									},
									{
										"id": "sandra_bills",
										"label": "Sandra Up"
									},
									{
										"id": "theo_same",
										"label": "Theo Tall"
									}
								],
								"properties": {
									"tooltip": "testing testing testing ",
									"placeholder": ""
								},
								"has_dependency": false,
								"dependency": {}
							}
						],
						"order": 0,
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": true,
						"has_dependency": false,
						"dependency": {}
					}
				],
				"user_id": "00265235db6a259002fc5117f3961946",
				"project_id": null
			}	
		},
		disabled: {
			default: false
		},
		state: {
			default: "loaded"
		},
		timestamp: {
			default: ""
		},
		position: {
			default: "top"
		},
		datasheet: {
			default: false
		}
	},
	styles,
	actionHandlers
});