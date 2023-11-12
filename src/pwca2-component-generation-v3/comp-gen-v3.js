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
		toSaveForm: false,
		externalQuestionsValues: {}
	}, 
	properties: {
		compdata: {
			default: {
				"status": 200,
				"error": "",
				"table": "x_pwca2_0011077_project",
				"sys_id": "4bc2bd101bee3910a221ddb7ab4bcba0",
				"name": "Demand Registration",
				"question_sets": [
					{
						"name": "Phase 0 - DR -GI - Header",
						"questions": [
							{
								"label": "General Information",
								"name": "DR_General_information_label",
								"order": "50",
								"id": "08bc58511ba32d103ab10edacd4bcb17",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "header-secondary",
									"tooltip": ""
								},
								"has_dependency": false,
								"dependency": {}
							}
						],
						"order": "100",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": {}
					},
					{
						"name": "Phase 0 - DR - GI - Technology Name",
						"questions": [
							{
								"label": "What is the name of your technology?",
								"name": "DR_Technology_name_label",
								"order": "100",
								"id": "08f31493db31615002fc5117f3961948",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
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
								"label": "Technology Name Guidance",
								"name": "DR_Tech Name Guidance",
								"order": "110",
								"id": "cc9ae3651b15f1501fb51f8f8b4bcbe6",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">If there is no official name for the technology yet, use a project name.<br /></span><span style=\"font-size: 10pt; background-color: rgb(var(--sn-tinymce_content-background,var(--now-form-field--background-color,var(--now-color_background--primary,var(--now-color--neutral-0,255,255,255))))); color: rgb(var(--sn-tinymce_content-text,var(--now-form-field--color,var(--now-color_text--primary,var(--now-color--neutral-18,22,27,28)))));\">There is also a </span><a style=\"font-size: 10pt; background-color: rgb(var(--sn-tinymce_content-background,var(--now-form-field--background-color,var(--now-color_background--primary,var(--now-color--neutral-0,255,255,255)))));\" href=\"https://brand.pwc.com/key-brand-guidelines/naming.html\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">naming guide with a Name Quick Checker</a><span style=\"font-size: 10pt; background-color: rgb(var(--sn-tinymce_content-background,var(--now-form-field--background-color,var(--now-color_background--primary,var(--now-color--neutral-0,255,255,255))))); color: rgb(var(--sn-tinymce_content-text,var(--now-form-field--color,var(--now-color_text--primary,var(--now-color--neutral-18,22,27,28)))));\"> to help you quickly find a name that meets our brand guidelines.</span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Technology Name",
								"name": "DR_Technology_name",
								"order": "150",
								"id": "49145093db31615002fc5117f3961977",
								"hideLabel": true,
								"type": "now-input",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"type": "text",
									"placeholder": "",
									"tooltip": ""
								},
								"has_dependency": false,
								"dependency": {}
							}
						],
						"order": "200",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": {}
					},
					{
						"name": "Phase 0 - DR - GI - Platform Responsible",
						"questions": [
							{
								"label": "Which platform is responsible for your technology?",
								"name": "DR_Platform_responsible_label",
								"order": "175",
								"id": "d296b67bdb247d10e75a64ebd396198a",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
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
								"label": "Responsible platform",
								"name": "DR_Platform_responsible",
								"order": "185",
								"id": "8307767bdb247d10e75a64ebd396197b",
								"hideLabel": true,
								"type": "now-select",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "assurance_solutions",
										"label": "Assurance Solutions (contact TRM before use)"
									},
									{
										"id": "business_services_finance",
										"label": "Business Services - Finance, Controlling & Engagement Mgmt. "
									},
									{
										"id": "business_services_infrastructure",
										"label": "Business Services - Infrastructure"
									},
									{
										"id": "business_services_marketing",
										"label": "Business Services - Marketing & Communication  "
									},
									{
										"id": "business_services_ogc_rm",
										"label": "Business Services - OGC/RM "
									},
									{
										"id": "business_services_p_t",
										"label": "Business Services - P&T "
									},
									{
										"id": "business_services_people",
										"label": "Business Services - People "
									},
									{
										"id": "business_services_procurement",
										"label": "Business Services - Procurement  "
									},
									{
										"id": "cloud_and_digital",
										"label": "Cloud & Digital"
									},
									{
										"id": "deals",
										"label": "Deals"
									},
									{
										"id": "markets",
										"label": "Markets"
									},
									{
										"id": "risk_regulatory",
										"label": "Risk & Regulatory"
									},
									{
										"id": "strategy_and",
										"label": "Strategy &"
									},
									{
										"id": "sustainability",
										"label": "Sustainability"
									},
									{
										"id": "tax_legal_solutions",
										"label": "Tax & Legal Solutions"
									},
									{
										"id": "transformation",
										"label": "Transformation  "
									}
								],
								"properties": {
									"tooltip": ""
								},
								"has_dependency": false,
								"dependency": {}
							}
						],
						"order": "300",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": {}
					},
					{
						"name": "Phase 0 - DR - GI -Technology Team",
						"questions": [
							{
								"label": "Technology Team",
								"name": "DR_Technology_team_label",
								"order": "280",
								"id": "0cd42337db153550e75a64ebd396191f",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "header-secondary",
									"tooltip": ""
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Who is the ultimately responsible person for the technology?",
								"name": "DR_Technology_owner_label",
								"order": "300",
								"id": "d8d450d3db31615002fc5117f396199f",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
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
								"label": "Technology Owner description",
								"name": "DR_Technology_owner_description",
								"order": "325",
								"id": "102ce9101ba769103ab10edacd4bcb21",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p style=\"text-align: left;\"><span style=\"font-size: 10pt;\">According to global risk management regulations, the <strong>Technology Owner</strong> (usually Partner or Director) is <strong>ultimately responsible for the use</strong> of this technology.<br />The Technology Owner <strong>owns the application business wise</strong> and can describe and explain use cases and the business case. <br />This role is also known as Business Owner or Application Owner. </span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Technology Owner",
								"name": "DR_technology_owner_title",
								"order": "330",
								"id": "0bf1a1c6db253190e75a64ebd3961918",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-tertiary",
									"tooltip": ""
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Technology Owner",
								"name": "DR_Technology_owner",
								"order": "350",
								"id": "e0f49c93db31615002fc5117f39619f4",
								"hideLabel": true,
								"type": "now-typeahead",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": true,
								"message": {
									"status": "info",
									"icon": "",
									"content": "Please start typing a name to select a user."
								},
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"type": "search",
									"table": "sys_user",
									"field": "name",
									"subfield": "email"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Who is the operational contact and manager for the technology?",
								"name": "DR_Technology_manager_label",
								"order": "400",
								"id": "9115d8d3db31615002fc5117f39619b1",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
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
								"label": "Technology Manager description",
								"name": "DR_Technology_manager_description",
								"order": "425",
								"id": "2c5fe9501ba769103ab10edacd4bcb58",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">The Technology Manager will be responsible for <strong>providing information</strong> during the Technology Risk Assessment. </span><br /><span style=\"font-size: 10pt;\">The Technology Manager <strong>owns the application technology wise</strong> and can describe and explain business and technical backgrounds in detail. </span><br /><span style=\"font-size: 10pt;\">This role is also known as IT Application Owner, Product Manager or Service Manager. </span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Technology Manager",
								"name": "DR_technology_manager_title",
								"order": "430",
								"id": "06c2610adb253190e75a64ebd396195a",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-tertiary",
									"tooltip": ""
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Technology Manager",
								"name": "DR_Technology_manager",
								"order": "450",
								"id": "3c4598d3db31615002fc5117f3961933",
								"hideLabel": true,
								"type": "now-typeahead",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": true,
								"message": {
									"status": "info",
									"icon": "",
									"content": "Please start typing a name to select a user."
								},
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"type": "search",
									"table": "sys_user",
									"field": "name",
									"subfield": "email"
								},
								"has_dependency": false,
								"dependency": {}
							}
						],
						"order": "400",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": {}
					},
					{
						"name": "Phase 0 - DR - GI - Technology Funding",
						"questions": [
							{
								"label": "Where is the funding for your technology coming from?",
								"name": "DR_project_funding_label",
								"order": "475",
								"id": "cec295a0db743150e75a64ebd3961999",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
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
								"label": "Project funding",
								"name": "DR_project_funding",
								"order": "480",
								"id": "1903dda0db743150e75a64ebd3961994",
								"hideLabel": true,
								"type": "now-radio-buttons",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "global",
										"label": "Global",
										"checked": false
									},
									{
										"id": "network_emea_europe_etc",
										"label": "Network (EMEA, Europe etc.) ",
										"checked": false
									},
									{
										"id": "pwc_germany",
										"label": "PwC Germany",
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
							}
						],
						"order": "500",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": {}
					},
					{
						"name": "Phase 0 - DR - GI -Technology Sponsor",
						"questions": [
							{
								"label": "Who  is the sponsor of your technology? ",
								"name": "DR_Technology_sponsor_label",
								"order": "500",
								"id": "9645b1701b3b29103ab10edacd4bcba4",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
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
								"label": "Sponsor description",
								"name": "DR_Technology_sponsor_description",
								"order": "525",
								"id": "2e6531301b3b29103ab10edacd4bcb57",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">The sponsor is responsible for <strong>funding and approving the business case</strong>, as well as being a key decision-maker at executive level. </span><br /><span style=\"font-size: 10pt;\">The sponsor provides financial or other resources to support the development, implementation and maintenance of the technology. </span><br /><span style=\"font-size: 10pt;\">This role is also known as business sponsor. </span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Technology sponsor global info",
								"name": "DR_Technology_sponsor_global_info",
								"order": "527",
								"id": "b525d124db743150e75a64ebd39619ab",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt; color: #e03e2d;\">Please select a German sponsor representative as users from other territories currently do not have access to this application.</span></p>"
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "1903dda0db743150e75a64ebd3961994",
									"value": "pwc_germany",
									"cond_type": "!=",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Technology Sponsor",
								"name": "DR_Technology_sponsor_title",
								"order": "530",
								"id": "a413290adb253190e75a64ebd39619c1",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-tertiary",
									"tooltip": ""
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Technology Sponsor",
								"name": "DR_Technology_sponsor",
								"order": "550",
								"id": "44e579b01b3b29103ab10edacd4bcbd8",
								"hideLabel": true,
								"type": "now-typeahead",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": true,
								"message": {
									"status": "info",
									"icon": "",
									"content": "Please start typing a name to select a user."
								},
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"type": "search",
									"table": "sys_user",
									"field": "name",
									"subfield": "email"
								},
								"has_dependency": false,
								"dependency": {}
							}
						],
						"order": "600",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": {}
					},
					{
						"name": "COPY Phase 0 - DR - GI -Technology Sponsor",
						"questions": [
							{
								"label": "Who  is the sponsor of your technology? ",
								"name": "DR_Technology_sponsor_label",
								"order": "500",
								"id": "9645b1701b3b29103ab10edacd4bcba4",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
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
								"label": "Sponsor description",
								"name": "DR_Technology_sponsor_description",
								"order": "525",
								"id": "2e6531301b3b29103ab10edacd4bcb57",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">The sponsor is responsible for <strong>funding and approving the business case</strong>, as well as being a key decision-maker at executive level. </span><br /><span style=\"font-size: 10pt;\">The sponsor provides financial or other resources to support the development, implementation and maintenance of the technology. </span><br /><span style=\"font-size: 10pt;\">This role is also known as business sponsor. </span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Technology sponsor global info",
								"name": "DR_Technology_sponsor_global_info",
								"order": "527",
								"id": "b525d124db743150e75a64ebd39619ab",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt; color: #e03e2d;\">Please select a German sponsor representative as users from other territories currently do not have access to this application.</span></p>"
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "1903dda0db743150e75a64ebd3961994",
									"value": "pwc_germany",
									"cond_type": "!=",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Technology Sponsor",
								"name": "DR_Technology_sponsor_title",
								"order": "530",
								"id": "a413290adb253190e75a64ebd39619c1",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-tertiary",
									"tooltip": ""
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Technology Sponsor",
								"name": "DR_Technology_sponsor",
								"order": "550",
								"id": "44e579b01b3b29103ab10edacd4bcbd8",
								"hideLabel": true,
								"type": "now-typeahead",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": true,
								"message": {
									"status": "info",
									"icon": "",
									"content": "Please start typing a name to select a user."
								},
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"type": "search",
									"table": "sys_user",
									"field": "name",
									"subfield": "email"
								},
								"has_dependency": false,
								"dependency": {}
							}
						],
						"order": "600",
						"visible": false,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": {}
					},
					{
						"name": "Section Divider",
						"questions": [
							{
								"label": "Section Divider",
								"name": "Section Divider",
								"order": "100",
								"id": "82acaf7b1b68fd103ab10edacd4bcb5c",
								"hideLabel": true,
								"type": "container-base-divider",
								"value": "",
								"readOnly": true,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"width": true,
									"padding": "md"
								},
								"has_dependency": false,
								"dependency": {}
							}
						],
						"order": "1500",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": true,
						"has_dependency": false,
						"dependency": {}
					},
					{
						"name": "Phase 0 - DR - Technology Scope Description",
						"questions": [
							{
								"label": "Technology Short Description",
								"name": "DR_technology_short_description_label",
								"order": "50",
								"id": "de97d7ed1b7fe9103ab10edacd4bcb74",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "header-secondary",
									"tooltip": ""
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Please describe your technology in not more than three sentences?",
								"name": "DR_short_description_label",
								"order": "100",
								"id": "5a8431301b3b29103ab10edacd4bcb3a",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
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
								"label": "Short description",
								"name": "DR_short_description_guidance",
								"order": "150",
								"id": "4ba43dfc1bf729103ab10edacd4bcb89",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">Briefly describe the scope of your technology for someone who has never heard of it. Only a<strong> brief description</strong> is requested at this point, which we will display on the project details page. </span><span style=\"font-size: 10pt; background-color: rgb(var(--sn-tinymce_content-background,var(--now-form-field--background-color,var(--now-color_background--primary,var(--now-color--neutral-0,255,255,255))))); color: rgb(var(--sn-tinymce_content-text,var(--now-form-field--color,var(--now-color_text--primary,var(--now-color--neutral-18,22,27,28)))));\">After the technology risk assessment process has been started, a detailed description of your technology use case will be requested in a separate task.</span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Short Description",
								"name": "DR_short_description ",
								"order": "200",
								"id": "b7b4f1701b3b29103ab10edacd4bcb81",
								"hideLabel": true,
								"type": "now-textarea",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": true,
								"message": {
									"status": "info",
									"icon": "",
									"content": "Try not to use more than 3 sentences"
								},
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"show_counter": true,
									"maxlength": "500",
									"resize": "vertical"
								},
								"has_dependency": false,
								"dependency": {}
							}
						],
						"order": "2000",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": {}
					},
					{
						"name": "Section Divider",
						"questions": [
							{
								"label": "Section Divider",
								"name": "Section Divider",
								"order": "100",
								"id": "82acaf7b1b68fd103ab10edacd4bcb5c",
								"hideLabel": true,
								"type": "container-base-divider",
								"value": "",
								"readOnly": true,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"width": true,
									"padding": "md"
								},
								"has_dependency": false,
								"dependency": {}
							}
						],
						"order": "2250",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": true,
						"has_dependency": false,
						"dependency": {}
					},
					{
						"name": "Phase 0 - DR - Additional Informations",
						"questions": [
							{
								"label": "Additional Information",
								"name": "DR_usecase_label",
								"order": "50",
								"id": "8b06d2291b276d103ab10edacd4bcb0d",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "header-secondary",
									"tooltip": ""
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Do you want to share any additional documentation?",
								"name": "DR_additional_information_label",
								"order": "500",
								"id": "50e2f1f8dbcee55002fc5117f39619d5",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
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
								"label": "Guidance",
								"name": "DR_additional_information_description_guidance",
								"order": "525",
								"id": "56362e651b676d103ab10edacd4bcb03",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">This could include things like pitch presentation, product information, concept paper, UI/UX designs, prototype/clickdummy etc.</span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Additional Information",
								"name": "DR_additional_information",
								"order": "550",
								"id": "65533df8dbcee55002fc5117f396199f",
								"hideLabel": true,
								"type": "now-radio-buttons",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "yes",
										"label": "Yes",
										"checked": false
									},
									{
										"id": "no",
										"label": "No",
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
								"label": "Additional Information documentation",
								"name": "DR_additional_information_documentation_label",
								"order": "600",
								"id": "c093fdf8dbcee55002fc5117f39619a1",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">Please upload any relevant documentation. Alternatively, you can provide us with a URL link in the text box below. </span></p>"
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "65533df8dbcee55002fc5117f396199f",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Additional Information - URL",
								"name": "DR_additional_information_documentation",
								"order": "650",
								"id": "caa3313cdbcee55002fc5117f396199d",
								"hideLabel": false,
								"type": "now-input-url",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"url": "https://"
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "65533df8dbcee55002fc5117f396199f",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Additional Information Documentation Upload",
								"name": "DR_additional_information_upload",
								"order": "675",
								"id": "8bb3fdf8dbcee55002fc5117f39619da",
								"hideLabel": true,
								"type": "pwc-attachment",
								"value": {
									"recordID": "67c23d101bee3910a221ddb7ab4bcb4f",
									"tableName": "x_pwca2_0011077_values",
									"maxFileSize": 15,
									"allowedFileTypes": "all",
									"attachedFiles": []
								},
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "65533df8dbcee55002fc5117f396199f",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							}
						],
						"order": "6000",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": {}
					},
					{
						"name": "Lutz Test DP-779",
						"questions": [
							{
								"label": "Text should only be visible when",
								"name": "heading_name",
								"order": "100",
								"id": "15d6b3c8dbc6b15002fc5117f3961987",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": false,
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
								"id": "9dd6b3c8dbc6b15002fc5117f3961987",
								"hideLabel": false,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 14pt; color: #e03e2d;\">This Text should be visible only if the related condition hits.</span></p>\r\n<p> </p>\r\n<table style=\"border-collapse: collapse; width: 100%; float: left;\" border=\"0\"><tbody><tr><td style=\"width: 66.6821%;\" colspan=\"2\">Here the text can be shown. Its 2/3  to 1/3</td><td style=\"width: 33.3025%;\">\r\n<p>Links you should Know about</p>\r\n<ul style=\"list-style-position: inside;\"><li><a href=\"https://googlede\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google Search</a></li></ul>\r\n</td></tr></tbody></table>"
								},
								"has_dependency": false,
								"dependency": {}
							}
						],
						"order": "100000",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": {}
					}
				],
				"external_questions_values": {},
				"user_id": "00265235db6a259002fc5117f3961946",
				"project_id": "4bc2bd101bee3910a221ddb7ab4bcba0",
				"active": true,
				"has_values": true
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