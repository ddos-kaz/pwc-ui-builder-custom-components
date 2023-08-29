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
		recordActive: true,
		isTaskTable: false,
		isProjectTable: false,
		isQuestionnaireSubmitted: false,
		errorDuringSubmission: false,
		hasValues: false,
		disabledForm: false,
		dragActiveStates: {},
		toAddFiles: [],
		toRemoveFiles: [],
		allAttachedFiles: {},
		filterRequiredQuestions: [],
		questionSearchTables: {},
		hasRequiredQuestions: false,
		referenceOptions: [],
		referenceLabel: "",
		referenceValue: "",
		searchQuestionID: "",
		displayRemoveFileModal: false,
		toRemoveFile: {}
	},
	properties: {
		compdata: {
			default:  {
				"status": 200,
				"error": "",
				"table": "x_pwca2_0011077_question_set",
				"sys_id": "e7480df5db7b611002fc5117f39619c9",
				"name": "",
				"question_sets": [
					{
						"name": "Testing July",
						"questions": [
							{
								"label": "Can i have multiple answers",
								"name": "q1",
								"order": "100",
								"id": "8b19cd39db7b611002fc5117f396192b",
								"hideLabel": "false",
								"value": "",
								"readOnly": false,
								"required": "false",
								"type": "now-typeahead-multi",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"placeholder": "",
									"type": "search",
									"table": "sys_user",
									"field": "name"
								}
							},
							{
								"label": "new attachment",
								"name": "Q7",
								"order": "500",
								"id": "91282214db8cf910e75a64ebd39619c8",
								"hideLabel": "false",
								"value": {
									"recordID": "9e5010d7dbb4755002fc5117f39619e4",
									"tableName": "x_pwca2_0011077_values",
									"maxFileSize": "15",
									"allowedFileTypes": "all",
									"attachedFiles": [
										{
											"name": "WhatsApp Image 2023-08-03 at 11.57.22.jpeg",
											"id": "07d5949fdbb4755002fc5117f39619ad",
											"icon": "paperclip-outline",
											"state": "fetched"
										}
									]
								},
								"readOnly": false,
								"required": "false",
								"type": "pwc-attachment",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {}
							},
							{
								"label": "Do not fill",
								"name": "Q2",
								"order": "200",
								"id": "d1d011b1dbbb611002fc5117f39619e3",
								"hideLabel": "false",
								"value": "",
								"readOnly": true,
								"required": "false",
								"type": "now-textarea",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"tooltip": "",
									"show_counter": false,
									"maxlength": "400",
									"resize": "none"
								}
							},
							{
								"label": "Select Start Date",
								"name": "select_start_date",
								"order": "300",
								"id": "e220be1a1b7f2110a221ddb7ab4bcb69",
								"hideLabel": "false",
								"value": "",
								"readOnly": false,
								"required": "false",
								"type": "now-input",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"type": "date",
									"placeholder": "",
									"tooltip": "221"
								}
							}
						],
						"order": 0,
						"visible": true,
						"pass_dependency": true,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": {}
					}
				],
				"user_id": "00265235db6a259002fc5117f3961946"
			}
		},
		disabled: {
			default: false
		},
		state: {
			default: "loaded"
		}
	},
	styles,
	actionHandlers
});