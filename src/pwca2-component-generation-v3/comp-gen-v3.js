import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from './view';
import actionHandlers from './actionHandlers';

createCustomElement('pwca2-component-generation-v3', {
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
				"table": "x_pwca2_0011077_question_set",
				"sys_id": "4aba7b3adbc1799002fc5117f39619c7",
				"name": "",
				"question_sets": [
				  {
					"name": "Testing of 683",
					"questions": [
					  {
						"label": "Heading label",
						"name": "heading_name",
						"order": "100",
						"id": "d2da7bf6dbc1799002fc5117f3961997",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": false,
						"type": "now-heading",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "size": "title-secondary",
						  "tooltip": ""
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Rich Text Label",
						"name": "rich_text_name",
						"order": "125",
						"id": "5eda7bf6dbc1799002fc5117f3961997",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": false,
						"type": "now-rich-text",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "html": null
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Input Text Label",
						"name": "input_text_name",
						"order": "150",
						"id": "92da7bf6dbc1799002fc5117f3961998",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": true,
						"type": "now-input",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "type": "text",
						  "placeholder": "testing testing",
						  "tooltip": ""
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Dropdown Test 001",
						"name": "Dropdown ",
						"order": "400",
						"id": "556bbf3adbc1799002fc5117f39619e2",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": false,
						"type": "now-select",
						"has_message": false,
						"has_options": true,
						"options": [
						  {
							"id": "arianda_marks",
							"label": "Arianda Marks"
						  },
						  {
							"id": "nathalie_bright",
							"label": "Nathalie Bright"
						  },
						  {
							"id": "peter_balko",
							"label": "Peter Balko"
						  },
						  {
							"id": "sandra_bills",
							"label": "Sandra Bills"
						  },
						  {
							"id": "theophilus_same",
							"label": "Theophilus Same"
						  }
						],
						"properties": {
						  "tooltip": "dropdown dropdown dropdow"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Multiple Select (list)",
						"name": "Multiple select testing",
						"order": "500",
						"id": "0aabc447db45799002fc5117f3961973",
						"hideLabel": false,
						"value": "",
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
					  },
					  {
						"label": "Textarea Multine text test",
						"name": "Textarea Multiline",
						"order": "600",
						"id": "a7d6b80fdb49799002fc5117f39619b8",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": false,
						"type": "now-textarea",
						"has_message": true,
						"message": {
						  "status": "warning",
						  "icon": "Yes",
						  "content": "Choose your choice"
						},
						"has_options": false,
						"options": [],
						"properties": {
						  "tooltip": "Testing testing testing",
						  "show_counter": false,
						  "maxlength": "400",
						  "resize": "horizontal"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Input Text Single line ",
						"name": "Input text for text",
						"order": "700",
						"id": "bc57b08fdb49799002fc5117f39619d8",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": false,
						"type": "now-input",
						"has_message": true,
						"message": {
						  "status": "critical",
						  "icon": "",
						  "content": "Only text"
						},
						"has_options": false,
						"options": [],
						"properties": {
						  "type": "text",
						  "placeholder": "",
						  "tooltip": "Only text please"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Input sinlge line",
						"name": "Input single only number",
						"order": "800",
						"id": "7fc734cfdb49799002fc5117f396195d",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": false,
						"type": "now-input",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "type": "number",
						  "placeholder": "33333",
						  "tooltip": "Only number please"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Input single line",
						"name": "Input for only email",
						"order": "900",
						"id": "dd487003db89799002fc5117f3961918",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": false,
						"type": "now-input",
						"has_message": true,
						"message": {
						  "status": "info",
						  "icon": "",
						  "content": "only email"
						},
						"has_options": false,
						"options": [],
						"properties": {
						  "type": "email",
						  "placeholder": "sssss@gmail.com",
						  "tooltip": "Only email please"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Input sinle line",
						"name": "Input only date",
						"order": "1000",
						"id": "fd98b403db89799002fc5117f3961915",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": false,
						"type": "now-input",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "type": "date",
						  "placeholder": "11-12-1997",
						  "tooltip": "eneter only recent date please"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Radio test(Horizontal)",
						"name": "Radio test ",
						"order": "1100",
						"id": "1ad8f003db89799002fc5117f3961927",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": false,
						"type": "now-radio-buttons",
						"has_message": false,
						"has_options": true,
						"options": [
						  {
							"id": "today",
							"label": "Today",
							"checked": false
						  },
						  {
							"id": "tomorrow",
							"label": "Tomorrow",
							"checked": false
						  },
						  {
							"id": "yesterday",
							"label": "Yesterday",
							"checked": false
						  },
						  {
							"id": "forever",
							"label": "Forever",
							"checked": false
						  },
						  {
							"id": "sometimes",
							"label": "Sometimes",
							"checked": false
						  }
						],
						"properties": {
						  "layout": "horizontal",
						  "tooltip": "",
						  "size": "md"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Radio test 2(Vertical)",
						"name": "Radio test 2",
						"order": "1200",
						"id": "a509b803db89799002fc5117f3961936",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": false,
						"type": "now-radio-buttons",
						"has_message": false,
						"has_options": true,
						"options": [
						  {
							"id": "never",
							"label": "Never",
							"checked": false
						  },
						  {
							"id": "sometimes",
							"label": "Sometimes",
							"checked": false
						  },
						  {
							"id": "always",
							"label": "Always",
							"checked": false
						  },
						  {
							"id": "day_before_yesterday",
							"label": "Day before yesterday",
							"checked": false
						  },
						  {
							"id": "forevermore",
							"label": "Forevermore",
							"checked": false
						  }
						],
						"properties": {
						  "layout": "vertical",
						  "tooltip": "",
						  "size": "md"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Checkbox test (checked)",
						"name": "Checkbox test",
						"order": "1300",
						"id": "5539f043db89799002fc5117f396196c",
						"hideLabel": false,
						"value": true,
						"readOnly": false,
						"required": true,
						"type": "now-checkbox",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "size": "md"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Checkbox test",
						"name": "Checkbox (Not checked)",
						"order": "1400",
						"id": "f469f843db89799002fc5117f3961963",
						"hideLabel": false,
						"value": false,
						"readOnly": false,
						"required": true,
						"type": "now-checkbox",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "size": "md"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Togggle test (start and checked)",
						"name": "Toggle test",
						"order": "1500",
						"id": "c0a97883db89799002fc5117f39619ee",
						"hideLabel": false,
						"value": true,
						"readOnly": false,
						"required": false,
						"type": "now-toggle",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "size": "sm",
						  "labelPosition": "start"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Toggle button (end)",
						"name": "Toggle ",
						"order": "1600",
						"id": "8dd97483db89799002fc5117f396190d",
						"hideLabel": false,
						"value": false,
						"readOnly": false,
						"required": true,
						"type": "now-toggle",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "size": "md",
						  "labelPosition": "end"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Toggle test (top)",
						"name": "Toggle test",
						"order": "1700",
						"id": "c50af4c3db89799002fc5117f396196a",
						"hideLabel": false,
						"value": false,
						"readOnly": false,
						"required": false,
						"type": "now-toggle",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "size": "md",
						  "labelPosition": "top"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Toggle test (bottom and checked)",
						"name": "Toggle test",
						"order": "1800",
						"id": "4b3a7007db89799002fc5117f39619c4",
						"hideLabel": false,
						"value": true,
						"readOnly": false,
						"required": false,
						"type": "now-toggle",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "size": "md",
						  "labelPosition": "bottom"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Rich text HTML",
						"name": "Rich text HTML",
						"order": "1900",
						"id": "007afc83db89799002fc5117f3961961",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": false,
						"type": "now-rich-text",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "html": "<p>hhhhhhhhhhh</p>"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Checklist",
						"name": "Checklist test",
						"order": "2000",
						"id": "0dea3047db89799002fc5117f3961996",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": true,
						"type": "pwc-checklist",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "size": "md",
						  "checklist": [
							{
							  "label": "Technology 1",
							  "id": "450789c7dbc9799002fc5117f3961912",
							  "value": "false"
							},
							{
							  "label": "Technology 2",
							  "id": "0d17c9c7dbc9799002fc5117f39619c4",
							  "value": "false"
							},
							{
							  "label": "Technology 3",
							  "id": "502789c7dbc9799002fc5117f39619d9",
							  "value": "false"
							},
							{
							  "label": "technology 4",
							  "id": "eb2789c7dbc9799002fc5117f3961925",
							  "value": "false"
							},
							{
							  "label": "technology 5",
							  "id": "fe3789c7dbc9799002fc5117f39619de",
							  "value": "false"
							}
						  ],
						  "tooltip": "",
						  "placeholder": ""
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "URL Text (included)",
						"name": "URL Text test",
						"order": "2100",
						"id": "ce0b7447db89799002fc5117f39619c5",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": false,
						"type": "now-input-url",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "url": "https://pwcgermanydev.service-now.com/now/nav/ui/classic/params/target/x_pwca2_0011077_question.do%3Fsys_id%3D-1%26sys_is_list%3Dtrue%26sys_is_related_list%3Dtrue%26sys_target%3Dx_pwca2_0011077_question%26sysparm_checked_items%3D%26sysparm_collection%3Dx_pwca2_0011077_question_set%26sysparm_collectionID%3D4aba7b3adbc1799002fc5117f39619c7%26sysparm_collection_key%3Dquestion_set%26sysparm_collection_label%3DQuestions%26sysparm_collection_related_field%3D%26sysparm_collection_related_file%3D%26sysparm_collection_related_relationship%3Dx_pwca2_0011077_question.question_set%26sysparm_collection_relationship%3D%26sysparm_fixed_query%3D%26sysparm_group_sort%3D%26sysparm_list_css%3D%26sysparm_query%3D%26sysparm_referring_url%3Dx_pwca2_0011077_question_set.do%253fsys_id%253d4aba7b3adbc1799002fc5117f39619c7%254099%2540sysparm_record_rows%253d166%254099%2540sysparm_record_target%253dx_pwca2_0011077_question_set%254099%2540sysparm_record_list%253dORDERBYname%254099%2540sysparm_record_row%253d159%26sysparm_target%3D%26sysparm_view%3D"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "URL text (not included)",
						"name": "URL Text",
						"order": "2200",
						"id": "546bf047db89799002fc5117f3961985",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": true,
						"type": "now-input-url",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "url": "https://"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Reference test",
						"name": "Reference test",
						"order": "2300",
						"id": "d77b7c47db89799002fc5117f39619c5",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": false,
						"type": "now-typeahead",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "tooltip": "test test test",
						  "placeholder": "",
						  "type": "search",
						  "table": "sys_user",
						  "field": "name",
						  "subfield": "email"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Reference multiple test",
						"name": "reference multiple test",
						"order": "2400",
						"id": "68cb3887db89799002fc5117f3961966",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": false,
						"type": "now-typeahead-multi",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "tooltip": "test test",
						  "placeholder": "",
						  "type": "search",
						  "table": "sys_user",
						  "field": "name",
						  "subfield": "email"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Attachment test",
						"name": "Attachment test",
						"order": "2500",
						"id": "9eeb30c7db89799002fc5117f39619bb",
						"hideLabel": false,
						"value": {
						  "recordID": "9eeb30c7db89799002fc5117f39619bb",
						  "tableName": "x_pwca2_0011077_question",
						  "maxFileSize": "15",
						  "allowedFileTypes": "all",
						  "attachedFiles": []
						},
						"readOnly": false,
						"required": false,
						"type": "pwc-attachment",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Contain base divider test",
						"name": "Contain base divider test",
						"order": "2600",
						"id": "0c2cf4c7db89799002fc5117f39619de",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": false,
						"type": "container-base-divider",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "width": true,
						  "padding": "sm"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Contain base divider test (Padding . medium and no full width)",
						"name": "Contain base divider test",
						"order": "2700",
						"id": "c78cf40bdb89799002fc5117f3961989",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": false,
						"type": "container-base-divider",
						"has_message": false,
						"has_options": false,
						"options": [],
						"properties": {
						  "width": false,
						  "padding": "md"
						},
						"has_dependency": false,
						"dependency": {}
					  },
					  {
						"label": "Select choice test",
						"name": "Select choice test",
						"order": "2800",
						"id": "b04c7cc7db89799002fc5117f39619da",
						"hideLabel": false,
						"value": "",
						"readOnly": false,
						"required": true,
						"type": "now-select",
						"has_message": false,
						"has_options": true,
						"options": [
						  {
							"id": "ist_choice",
							"label": "Ist choice"
						  },
						  {
							"id": "nd_choice",
							"label": "2nd choice"
						  },
						  {
							"id": "rd_choice",
							"label": "3rd choice"
						  },
						  {
							"id": "4th_choice",
							"label": "4th choice"
						  },
						  {
							"id": "5th_choice",
							"label": "5th choice"
						  }
						],
						"properties": {
						  "tooltip": "choos your choice"
						},
						"has_dependency": false,
						"dependency": {}
					  }
					],
					"order": 0,
					"visible": true,
					"pass_dependency": true,
					"readOnly": false,
					"hideLabel": false,
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