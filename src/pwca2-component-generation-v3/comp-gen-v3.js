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
		fullQuestionAnswerSet: [],
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
				"table": "x_pwca2_0011077_task",
				"sys_id": "d6b2c65edb3ab15002fc5117f3961968",
				"name": "TA_ITA_T_Initial_technology_assessment",
				"question_sets": [
					{
						"name": "Phase 1 - TA - ITA - Update Initial Info",
						"questions": [
							{
								"label": "Guidance Initial Technology Assessment",
								"name": "TA_ITA_Guidance Technology Assessment",
								"order": "10",
								"id": "78af532d1bd1f1501fb51f8f8b4bcbca",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">A team from your platform has started a new <strong>Technology Risk Assessment</strong>. </span><br /><br /><span style=\"font-size: 10pt;\">Please review the initial information and contact the team to clarify their needs and open questions. You now have the <strong>option to update given information</strong> or <strong>fill out missing answers</strong> before the Technology Alignment. </span></p>\n<p><span style=\"font-size: 10pt;\">After getting an overview of the technology team&#39;s demand and maybe editing initial information, please <strong>decide whether the process should continue</strong> and <strong>if a Technology Alignment is necessary</strong>.</span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Update Initial Information",
								"name": "IA_Update_Initial_Information_label",
								"order": "20",
								"id": "1b7ccc88dbe53550e75a64ebd39619ec",
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
								"label": "Do you want to update the information provided by the Technology Manager at the beginning of the process?",
								"name": "IA_Update_Information_Question_label",
								"order": "30",
								"id": "83cc0cc8dbe53550e75a64ebd3961926",
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
								"label": "Guidance Update Initial Information",
								"name": "TA_ITA_Guidance Update Initial Information",
								"order": "35",
								"id": "abcec48cdbe53550e75a64ebd39619ee",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">If you click on &#34;Yes&#34; here, you will be shown all the questions that have been asked of the Technology Manager so far. <strong>You can view and edit them if necessary</strong>.</span></p>\n<p><span style=\"font-size: 10pt;\">Please note that there are mandatory questions for you further down in this task.</span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Update Initial Information Decision",
								"name": "IA_update_initial_information_decision",
								"order": "40",
								"id": "624dc8c8dbe53550e75a64ebd396193d",
								"hideLabel": true,
								"type": "now-radio-buttons",
								"value": "",
								"readOnly": false,
								"required": false,
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
							}
						],
						"order": "50",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": ""
					},
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
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
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
								"value": "December 1 Testing",
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
						"order": "101",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
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
								"value": "business_services_finance",
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
						"order": "200",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
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
								"value": "global",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "global",
										"label": "Global",
										"checked": true
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
						"order": "300",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
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
								"value": "bd4756f5db6a259002fc5117f3961908",
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
									"placeholder": "Peter Balko (Ext)",
									"field": "name",
									"subfield": "email"
								},
								"has_dependency": false,
								"dependency": {}
							}
						],
						"order": "350",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
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
						"order": "400",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": true,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
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
								"value": "Task",
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
						"order": "500",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
					},
					{
						"name": "Phase 1 - TA  -II - Technology Scope",
						"questions": [
							{
								"label": "Technology Scope Description",
								"name": "DR_Technology_scope_label",
								"order": "50",
								"id": "a12d54911ba32d103ab10edacd4bcb9d",
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
								"label": "Scope Description Guidance",
								"name": "DR_scope_description_guidance",
								"order": "60",
								"id": "1eaff3b7db953550e75a64ebd3961944",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">Please take sufficient time to answer the following questions. A comprehensive and high-quality description avoids queries and thus saves you a lot of time in the process.</span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "How would you describe your technology in detail?",
								"name": "DR_Technology_description_label",
								"order": "100",
								"id": "43269c17db31615002fc5117f396190f",
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
								"label": "Technology Description",
								"name": "DR_Technology_description",
								"order": "150",
								"id": "aa075057db31615002fc5117f39619e7",
								"hideLabel": true,
								"type": "now-textarea",
								"value": "To get started on your technical description, it's important to understand the different technical topics. Here are the general categories of the different technical descriptions you can write:\n\nProduct descriptions: In this description, provide your audience with a detailed overview of the physical components and functions of a mechanical device, such as a tool or machine. You often write this document for sales or manufacturing individuals with design specifications or infographics.\nProcess descriptions: A process description details a specific series of ordered events to achieve a certain outcome. You can categorize these as instructional, which are explicit step-by-step instructions to be followed, and non-instructional processes, such as photosynthesis.\nConcept work definitions: A definition description is for clearly defining a meaning essential to understanding how to use a product or complete a certain process. To help you clarify your ideas, use detailed description words with simple words and illustrations for the audience.\n",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"show_counter": true,
									"maxlength": "10000",
									"resize": "vertical"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "What issues do you want to solve with this technology?",
								"name": "DR_Issue_description_label",
								"order": "200",
								"id": "7d37dc57db31615002fc5117f39619f0",
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
								"label": "Addressed issues",
								"name": "DR_Issue_description",
								"order": "250",
								"id": "db57dc57db31615002fc5117f39619f3",
								"hideLabel": true,
								"type": "now-textarea",
								"value": "To get started on your technical description, it's important to understand the different technical topics. Here are the general categories of the different technical descriptions you can write:\n\nProduct descriptions: In this description, provide your audience with a detailed overview of the physical components and functions of a mechanical device, such as a tool or machine. You often write this document for sales or manufacturing individuals with design specifications or infographics.\nProcess descriptions: A process description details a specific series of ordered events to achieve a certain outcome. You can categorize these as instructional, which are explicit step-by-step instructions to be followed, and non-instructional processes, such as photosynthesis.\nConcept work definitions: A definition description is for clearly defining a meaning essential to understanding how to use a product or complete a certain process. To help you clarify your ideas, use detailed description words with simple words and illustrations for the audience.\n",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"show_counter": true,
									"maxlength": "10000",
									"resize": "vertical"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "What are the main functionalities of your technology?",
								"name": "DR_Issue_solving_label",
								"order": "300",
								"id": "9f779857db31615002fc5117f3961923",
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
								"name": "DR_Issue_solving_guidance",
								"order": "340",
								"id": "1ce8f170dba17950e75a64ebd39619e8",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">Please list the most important functions of your technology including a short description for each one. Write this list in the same way as you would write a <strong>product specification for a third party</strong>.</span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Main functionalities",
								"name": "DR_Issue_solving",
								"order": "350",
								"id": "23979097db31615002fc5117f396191a",
								"hideLabel": true,
								"type": "now-textarea",
								"value": "To get started on your technical description, it's important to understand the different technical topics. Here are the general categories of the different technical descriptions you can write:\n\nProduct descriptions: In this description, provide your audience with a detailed overview of the physical components and functions of a mechanical device, such as a tool or machine. You often write this document for sales or manufacturing individuals with design specifications or infographics.\nProcess descriptions: A process description details a specific series of ordered events to achieve a certain outcome. You can categorize these as instructional, which are explicit step-by-step instructions to be followed, and non-instructional processes, such as photosynthesis.\nConcept work definitions: A definition description is for clearly defining a meaning essential to understanding how to use a product or complete a certain process. To help you clarify your ideas, use detailed description words with simple words and illustrations for the audience.\n",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"show_counter": true,
									"maxlength": "10000",
									"resize": "vertical"
								},
								"has_dependency": false,
								"dependency": {}
							}
						],
						"order": "520",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
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
						"order": "530",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": true,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
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
								"value": "no",
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
										"checked": true
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
									"recordID": "111e1916db76b15002fc5117f396190e",
									"tableName": "x_pwca2_0011077_values",
									"maxFileSize": "15",
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
						"order": "550",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
					},
					{
						"name": "Phase 1 - TA  - II - Header",
						"questions": [
							{
								"label": "Initial Information",
								"name": "TA_initial_information_label ",
								"order": "5",
								"id": "6d885fed1b7fe9103ab10edacd4bcbb0",
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
						"order": "600",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
					},
					{
						"name": "Phase 1 - TA  -II - WBS Number",
						"questions": [
							{
								"label": "Please provide a WBS which participants in the process can use for their efforts.",
								"name": "TA_Project_WBS_label",
								"order": "13",
								"id": "a3c679b01b3b29103ab10edacd4bcbd3",
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
								"label": "WBS Guidance",
								"name": "TA_WBS_guidance",
								"order": "14",
								"id": "c3fd7b77db953550e75a64ebd396194d",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">For individual parts of the process, a booking code is required for time recording or cost charging. These include, for example, the global ARR process and possibly the performance of a pentest.</span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "WBS",
								"name": "TA_Project_WBS",
								"order": "15",
								"id": "0de6bdb01b3b29103ab10edacd4bcb4c",
								"hideLabel": true,
								"type": "now-input",
								"value": "536365353",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"type": "text",
									"placeholder": "e.g. DEC0000xxxx.1.1",
									"tooltip": ""
								},
								"has_dependency": false,
								"dependency": {}
							}
						],
						"order": "700",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
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
						"order": "850",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": true,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
					},
					{
						"name": "Phase 1 - TA  -II - Structured Requirements",
						"questions": [
							{
								"label": "Have you already documented the requirements for your  technology?",
								"name": "DR_Structured_requirements_label",
								"order": "400",
								"id": "64df9887dbff2510e75a64ebd39619ba",
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
								"label": "Structured requirements description",
								"name": "DR_Structured_requirements_description",
								"order": "425",
								"id": "1d69c44adb6c3510e75a64ebd39619fe",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">This documentation may contain a business big picture outlining the specific <strong>business needs and goals, main pain points and functionalities </strong>of your technology. If you use a requirements management tool or have documented your requirements in another way, you can also provide us with a link.</span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Structured requirements",
								"name": "DR_Structured_requirements",
								"order": "450",
								"id": "fa189897db31615002fc5117f39619ac",
								"hideLabel": true,
								"type": "now-radio-buttons",
								"value": "no",
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
										"checked": true
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
								"label": "Please upload any relevant documentation. Alternatively, you can provide us with a URL link in the text box below.",
								"name": "DR_Requirements_documentation_label",
								"order": "500",
								"id": "ef5854d7db31615002fc5117f3961960",
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
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "fa189897db31615002fc5117f39619ac",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Requirements documentation URL",
								"name": "DR_Requirements_documentation",
								"order": "570",
								"id": "359854d7db31615002fc5117f39619ec",
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
									"id": "fa189897db31615002fc5117f39619ac",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Requirements documentation upload",
								"name": "DR_Requirements_documentation_upload",
								"order": "575",
								"id": "c3c89897db31615002fc5117f396198d",
								"hideLabel": true,
								"type": "pwc-attachment",
								"value": {
									"recordID": "27042d5edb76b15002fc5117f39619c4",
									"tableName": "x_pwca2_0011077_values",
									"maxFileSize": "15",
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
									"id": "fa189897db31615002fc5117f39619ac",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							}
						],
						"order": "900",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
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
						"order": "950",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": true,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
					},
					{
						"name": "Phase 0 - DR - Technology Usage ",
						"questions": [
							{
								"label": "Technology Usage",
								"name": "DR_technology_usage_label",
								"order": "50",
								"id": "37a670551be32d103ab10edacd4bcb0e",
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
								"label": "In which territories do you intend to roll-out your technology?",
								"name": "DR_Territory_label",
								"order": "100",
								"id": "17aea874db8ae55002fc5117f3961965",
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
								"label": "Territory",
								"name": "DR_Territory",
								"order": "150",
								"id": "8bdeac74db8ae55002fc5117f3961909",
								"hideLabel": true,
								"type": "now-radio-buttons",
								"value": "germany_and_at_least_one_other_territory",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "germany",
										"label": "Germany",
										"checked": false
									},
									{
										"id": "germany_and_at_least_one_other_territory",
										"label": "Germany and at least one other territory",
										"checked": true
									},
									{
										"id": "licensing_pwc_global",
										"label": "Licensing to PwC Global",
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
								"label": "In which territories will the technology be used?",
								"name": "DR_Country_label",
								"order": "200",
								"id": "283f24b4db8ae55002fc5117f3961913",
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
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "8bdeac74db8ae55002fc5117f3961909",
									"value": "germany_and_at_least_one_other_territory",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Country",
								"name": "DR_Country",
								"order": "250",
								"id": "aa5fa474db8ae55002fc5117f3961923",
								"hideLabel": true,
								"type": "now-typeahead-multi",
								"value": [
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcba4",
										"label": "PwC ITSCo Germany"
									},
									{
										"id": "16ed4bc91b91a510a221ddb7ab4bcbc6",
										"label": "PwC Nigeria"
									}
								],
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "c2d4884d1b278490a221ddb7ab4bcb7d",
										"label": "(none)"
									},
									{
										"id": "e9258c49dbab8c501d5873e3f3961980",
										"label": "(Standard disk drives)"
									},
									{
										"id": "cc702013db71615002fc5117f3961987",
										"label": "49043892-005"
									},
									{
										"id": "9e90a013db71615002fc5117f3961970",
										"label": "49043892-006"
									},
									{
										"id": "0c70e4971bb96150a221ddb7ab4bcb54",
										"label": "49097124-001"
									},
									{
										"id": "1e9068971bb96150a221ddb7ab4bcbb5",
										"label": "49097124-002"
									},
									{
										"id": "0070e4971bb96150a221ddb7ab4bcb59",
										"label": "49097124-003"
									},
									{
										"id": "0c702013db71615002fc5117f3961983",
										"label": "49097124-007"
									},
									{
										"id": "929068971bb96150a221ddb7ab4bcbb4",
										"label": "49097124-100"
									},
									{
										"id": "969068971bb96150a221ddb7ab4bcbb7",
										"label": "49113163-013"
									},
									{
										"id": "48702013db71615002fc5117f3961989",
										"label": "49113163-014"
									},
									{
										"id": "5290a013db71615002fc5117f39619e4",
										"label": "49113163-017"
									},
									{
										"id": "ec37091ddbcb00101d5873e3f396198d",
										"label": "A+K"
									},
									{
										"id": "fdd88d9ddbcb00101d5873e3f3961981",
										"label": "A1Touch Solution"
									},
									{
										"id": "631fc917db04dd10bf6b95e8f496191b",
										"label": "Abdoul Fabre"
									},
									{
										"id": "517bb5561ba44510a221ddb7ab4bcb14",
										"label": "ABHISHEK MUNDALE"
									},
									{
										"id": "042f35c1dbc05c101d5873e3f39619c8",
										"label": "Adobe"
									},
									{
										"id": "298f40741b7f5510a221ddb7ab4bcbce",
										"label": "Adobe Systems"
									},
									{
										"id": "709490c11b809c10a221ddb7ab4bcbc9",
										"label": "AdoptOpenJDK"
									},
									{
										"id": "ac677f191bfe1150a221ddb7ab4bcb9b",
										"label": "Adrian Willig"
									},
									{
										"id": "5fe50642dbdbcd901d5873e3f3961978",
										"label": "Adriana Siki"
									},
									{
										"id": "0a64c7a6dbaff4101d5873e3f3961939",
										"label": "Advisory"
									},
									{
										"id": "b51e4c63db06d51002fc5117f3961974",
										"label": "Alaa Abdolrahim"
									},
									{
										"id": "d8f40b331b4f5d10a221ddb7ab4bcbb5",
										"label": "Aleksandra Kominek"
									},
									{
										"id": "7a4227bbdb8c5150bf6b95e8f496194f",
										"label": "Alexander Treß"
									},
									{
										"id": "716056091b35e510a221ddb7ab4bcb29",
										"label": "Alina Bär"
									},
									{
										"id": "05b89eab1bc49d10a221ddb7ab4bcb4c",
										"label": "Alina Tetik"
									},
									{
										"id": "078d553a1b41a510a221ddb7ab4bcbb6",
										"label": "Alina Wagner"
									},
									{
										"id": "3dd88d9ddbcb00101d5873e3f3961983",
										"label": "Allied Telesyn"
									},
									{
										"id": "32b84d4cdb2a2d5002fc5117f3961985",
										"label": "Alper Colak"
									},
									{
										"id": "fe860e54db71251002fc5117f3961956",
										"label": "Amana"
									},
									{
										"id": "188e8dbbdb8bf8101d5873e3f3961990",
										"label": "Amazon.com, Inc."
									},
									{
										"id": "7f9401efdbd145101d5873e3f39619e9",
										"label": "Amelie Köhrer"
									},
									{
										"id": "05d64d78db31a51002fc5117f39619a7",
										"label": "Amira Abbes"
									},
									{
										"id": "575121241bde3510a221ddb7ab4bcbe9",
										"label": "Amra Harbas"
									},
									{
										"id": "64f360a4dbf1311002fc5117f39619ee",
										"label": "Ana Petkova-Schmidt"
									},
									{
										"id": "a901570c1b7ed910a221ddb7ab4bcba3",
										"label": "André Feise"
									},
									{
										"id": "2acb48a7db981190bf6b95e8f49619b6",
										"label": "André Schulz"
									},
									{
										"id": "5b48b18c1b600910a221ddb7ab4bcbc7",
										"label": "Andrea Pedevilla"
									},
									{
										"id": "5d5dd0591b2ded10a221ddb7ab4bcb3e",
										"label": "Anita Kowalik"
									},
									{
										"id": "7eed7b7b1b6eb510a221ddb7ab4bcbdb",
										"label": "Anna Halbig"
									},
									{
										"id": "d0175034db91651002fc5117f3961995",
										"label": "Anna Lochmann"
									},
									{
										"id": "f4fdb2ff1bfd8510a221ddb7ab4bcb40",
										"label": "Anna Schaten"
									},
									{
										"id": "aaea9ab8dbacb11002fc5117f3961969",
										"label": "Annina Binder"
									},
									{
										"id": "a9b5452c1b3f4510a221ddb7ab4bcb2f",
										"label": "Antje Heissel"
									},
									{
										"id": "c17ac25bdbdd311402fc5117f396191a",
										"label": "Anton Matthijs Benjamins"
									},
									{
										"id": "ec37491ddbcb00101d5873e3f396192d",
										"label": "AOC"
									},
									{
										"id": "7dd8cd9ddbcb00101d5873e3f3961927",
										"label": "AOC2"
									},
									{
										"id": "31d8cd9ddbcb00101d5873e3f396192b",
										"label": "Apple Computer, Inc."
									},
									{
										"id": "759121ce1b094910a221ddb7ab4bcb9f",
										"label": "Ariana Bartsch"
									},
									{
										"id": "a61ab30edbad255002fc5117f3961989",
										"label": "Ariel Kevin Foli Locoh"
									},
									{
										"id": "0937491ddbcb00101d5873e3f39619af",
										"label": "ARP"
									},
									{
										"id": "dd372d9cdb6d751402fc5117f3961902",
										"label": "Artur Galeja"
									},
									{
										"id": "7f74ab89db64351002fc5117f39619e7",
										"label": "Aurelie Jamard"
									},
									{
										"id": "78b012bfdb61795402fc5117f3961901",
										"label": "AUSeventythreeRfc ÖstDDThethÄ"
									},
									{
										"id": "0d37491ddbcb00101d5873e3f39619b2",
										"label": "AVAYA"
									},
									{
										"id": "deea79b21b821510a221ddb7ab4bcb33",
										"label": "Axel Malbrain"
									},
									{
										"id": "e58f40741b7f5510a221ddb7ab4bcbcc",
										"label": "Azalea"
									},
									{
										"id": "14803a311ba5a150a221ddb7ab4bcb9b",
										"label": "Azel van Zyl"
									},
									{
										"id": "4537491ddbcb00101d5873e3f39619bc",
										"label": "Barco"
									},
									{
										"id": "9b8aa6c81b997190a221ddb7ab4bcb2c",
										"label": "Barret Cook"
									},
									{
										"id": "cd37491ddbcb00101d5873e3f39619ce",
										"label": "Behringer"
									},
									{
										"id": "5d2ace681ba16d10a221ddb7ab4bcb8d",
										"label": "Ben-Lukas Koch"
									},
									{
										"id": "c1daf6691b794510a221ddb7ab4bcb08",
										"label": "Benjamin Quiring"
									},
									{
										"id": "88c700901ba43110a221ddb7ab4bcb5c",
										"label": "Berk Yurtseven"
									},
									{
										"id": "02a18a80dba3919002fc5117f39619ab",
										"label": "Bevan Therien"
									},
									{
										"id": "4137491ddbcb00101d5873e3f39619d2",
										"label": "Beyerdynamic"
									},
									{
										"id": "0d37491ddbcb00101d5873e3f39619d6",
										"label": "Biamp"
									},
									{
										"id": "c537491ddbcb00101d5873e3f39619de",
										"label": "Bittner"
									},
									{
										"id": "8137491ddbcb00101d5873e3f39619ef",
										"label": "BlackBerry"
									},
									{
										"id": "cd37491ddbcb00101d5873e3f39619f7",
										"label": "Bosch"
									},
									{
										"id": "c137491ddbcb00101d5873e3f39619fb",
										"label": "Bose"
									},
									{
										"id": "1c5f71811b849c10a221ddb7ab4bcb19",
										"label": "bowbridge Software GmbH"
									},
									{
										"id": "381eaca9db2c751002fc5117f396199f",
										"label": "Bram van Keulen"
									},
									{
										"id": "1137891ddbcb00101d5873e3f3961919",
										"label": "cab Produkttechnik GmbH & Co KG"
									},
									{
										"id": "8fd006c5dbc05c101d5873e3f396195c",
										"label": "callas software gmbh"
									},
									{
										"id": "8fc3add71b1de510a221ddb7ab4bcbf4",
										"label": "Camila Fernandes"
									},
									{
										"id": "e79421e91bb35910a221ddb7ab4bcb95",
										"label": "CAN101 FutureTest"
									},
									{
										"id": "f3e766911b6fd110a221ddb7ab4bcb02",
										"label": "Carolin Paukstadt"
									},
									{
										"id": "922e5efd1b421110a221ddb7ab4bcb9c",
										"label": "Carolin Rost"
									},
									{
										"id": "e7e80aeddb4ee95002fc5117f3961949",
										"label": "Cemil Philip Parali"
									},
									{
										"id": "4eeefd81dbc05c101d5873e3f3961970",
										"label": "Ceyoniq Technology GmbH"
									},
									{
										"id": "89074ad2db59251002fc5117f3961959",
										"label": "Chana Kauert"
									},
									{
										"id": "fda14249dbc05c101d5873e3f3961953",
										"label": "Changemaker Studios"
									},
									{
										"id": "f3cbb2f7dbe26d9002fc5117f3961919",
										"label": "Charlotte Breunig"
									},
									{
										"id": "28116f041be0ad10a221ddb7ab4bcb5d",
										"label": "Chian Chyn Wong"
									},
									{
										"id": "57a36ff2dbcab11002fc5117f39619cd",
										"label": "Chiara Collenberg"
									},
									{
										"id": "ee5e13571b255110a221ddb7ab4bcb7f",
										"label": "Chris Anderson"
									},
									{
										"id": "92e4c9d61b515d10a221ddb7ab4bcbe8",
										"label": "Christian Derosa"
									},
									{
										"id": "a954b4cedb30fd1002fc5117f3961927",
										"label": "Christian Koch"
									},
									{
										"id": "a1c4ff66dbc905101d5873e3f39619e4",
										"label": "Christian Mesisca"
									},
									{
										"id": "4c8ec26e1b959d10a221ddb7ab4bcb49",
										"label": "Christian Miess"
									},
									{
										"id": "6134cf94db92c5101d5873e3f396196c",
										"label": "Christiane Markeng"
									},
									{
										"id": "9644a6e7dbb4f55002fc5117f3961928",
										"label": "Christina Dong"
									},
									{
										"id": "667e7df51b1b5550a221ddb7ab4bcbd9",
										"label": "Christina Iltschenko"
									},
									{
										"id": "b659e3e6dbfa41501d5873e3f39619ce",
										"label": "Christoph Tatje"
									},
									{
										"id": "0c37f4251b456110a221ddb7ab4bcb9e",
										"label": "Christopher Daws"
									},
									{
										"id": "9ee6cc061bc23950a221ddb7ab4bcb19",
										"label": "CHSixteenHA SwPPhii"
									},
									{
										"id": "ac9a0a021bf6d150a221ddb7ab4bcbe7",
										"label": "Ciaran Houton"
									},
									{
										"id": "e0089e801b57f810a221ddb7ab4bcb91",
										"label": "Cigdem Cubukcu"
									},
									{
										"id": "82041fa71b1931d0a221ddb7ab4bcb97",
										"label": "Cigdem Özdemir"
									},
									{
										"id": "b2860e54db71251002fc5117f396195b",
										"label": "Cisco"
									},
									{
										"id": "6d8f40741b7f5510a221ddb7ab4bcbcd",
										"label": "Cisco WebEx LLC"
									},
									{
										"id": "ba860e54db71251002fc5117f396195c",
										"label": "Citrix"
									},
									{
										"id": "e58f40741b7f5510a221ddb7ab4bcbc8",
										"label": "Citrix Systems"
									},
									{
										"id": "c27aa7fadb34691002fc5117f3961956",
										"label": "Claudia Feick"
									},
									{
										"id": "2f1eb27f1b5cb990a221ddb7ab4bcbd0",
										"label": "Clemens Brämer"
									},
									{
										"id": "d6a53eca1b7fc910a221ddb7ab4bcbe6",
										"label": "Clemens Martin Schmid"
									},
									{
										"id": "9d37891ddbcb00101d5873e3f3961928",
										"label": "CommTech"
									},
									{
										"id": "48680f1adb5344501d5873e3f39619d7",
										"label": "Commvault"
									},
									{
										"id": "9194c2091b849c10a221ddb7ab4bcba6",
										"label": "CommVault Systems"
									},
									{
										"id": "b1d8cd9ddbcb00101d5873e3f3961938",
										"label": "Compaq"
									},
									{
										"id": "07090a901ba30510db8e40cfbb4bcb31",
										"label": "Conrad Poschmann"
									},
									{
										"id": "a35f71811b849c10a221ddb7ab4bcbb1",
										"label": "Conspect Consulting & ICT"
									},
									{
										"id": "4eed2ce51b0e0d10a221ddb7ab4bcb1b",
										"label": "Constança Thomaz Moura Reis Vaz"
									},
									{
										"id": "52fe3beb1bbfb010a221ddb7ab4bcbfd",
										"label": "CONTINGENT WORKER SUPPLIER DE"
									},
									{
										"id": "f8410f421b687910a221ddb7ab4bcbf5",
										"label": "ContWorDeuBB TestGerCWTwo"
									},
									{
										"id": "1137891ddbcb00101d5873e3f396192c",
										"label": "Crestron"
									},
									{
										"id": "a137891ddbcb00101d5873e3f396196c",
										"label": "Cretivo"
									},
									{
										"id": "8c68cb1adb5344501d5873e3f3961906",
										"label": "CyberArk"
									},
									{
										"id": "ba054849dbab8c501d5873e3f396190a",
										"label": "Cylance"
									},
									{
										"id": "75d8cd9ddbcb00101d5873e3f396193b",
										"label": "DAFÜR"
									},
									{
										"id": "c90f22621b45f950a221ddb7ab4bcb44",
										"label": "DAK"
									},
									{
										"id": "bdd8cd9ddbcb00101d5873e3f396193c",
										"label": "Datalogic"
									},
									{
										"id": "e3a1a8931b115150a221ddb7ab4bcbc7",
										"label": "Dave Düpre"
									},
									{
										"id": "7324289f1b2ef010a221ddb7ab4bcbb0",
										"label": "DE COUPA TEST API EUR SUPP02"
									},
									{
										"id": "ed37891ddbcb00101d5873e3f3961970",
										"label": "Dell"
									},
									{
										"id": "c37790921b221510a221ddb7ab4bcb92",
										"label": "Deniz Dilchert"
									},
									{
										"id": "6137891ddbcb00101d5873e3f3961974",
										"label": "Denon"
									},
									{
										"id": "aa119007dbb0355002fc5117f39619b2",
										"label": "DeSixtyeightSRfc DschDDUltraÜ"
									},
									{
										"id": "272446b21b053d50a221ddb7ab4bcbf6",
										"label": "DeSleeptwowsdcSDF FtrXSrlÜ"
									},
									{
										"id": "ac4b51b21b1b5950a221ddb7ab4bcb4f",
										"label": "DeuHire DeusurnameA"
									},
									{
										"id": "b81e2e031b52f110a221ddb7ab4bcb47",
										"label": "DeuTwentysixHa DEBBPhii"
									},
									{
										"id": "ab5f71811b849c10a221ddb7ab4bcbb2",
										"label": "Devart software development"
									},
									{
										"id": "7c77675fdb82c1101d5873e3f396194a",
										"label": "Dhritiman Pal"
									},
									{
										"id": "e1552045dbc0c5101d5873e3f39619d5",
										"label": "Diane Maurer"
									},
									{
										"id": "e137891ddbcb00101d5873e3f3961977",
										"label": "Digital Engine"
									},
									{
										"id": "0f36ab10dbf609101d5873e3f39619a8",
										"label": "Dimitrina Dinkova"
									},
									{
										"id": "a537891ddbcb00101d5873e3f396197a",
										"label": "Disign Radio Labs"
									},
									{
										"id": "36860e54db71251002fc5117f396195f",
										"label": "DisplayLink"
									},
									{
										"id": "97fda76adbd6555002fc5117f3961982",
										"label": "Dominik Keil"
									},
									{
										"id": "00529298dba2ad5002fc5117f39619fb",
										"label": "Duygu Altinbasak"
									},
									{
										"id": "807453541ba67910a221ddb7ab4bcba4",
										"label": "Dwarika Nath Sahu"
									},
									{
										"id": "3b8d7080db8098101d5873e3f39619e3",
										"label": "Dynatrace LLC"
									},
									{
										"id": "60a073231b5ab010a221ddb7ab4bcb2c",
										"label": "EDP"
									},
									{
										"id": "2937891ddbcb00101d5873e3f396197d",
										"label": "Eizo"
									},
									{
										"id": "c3bc72b01b6ac910a221ddb7ab4bcbbc",
										"label": "Ekaterina Kozlova"
									},
									{
										"id": "6537891ddbcb00101d5873e3f3961982",
										"label": "Electro Voice"
									},
									{
										"id": "046449cadb22715002fc5117f39619b9",
										"label": "Elisa-Kerstin Schilling"
									},
									{
										"id": "e537891ddbcb00101d5873e3f3961985",
										"label": "Elium"
									},
									{
										"id": "5d64ae521b9a5d10a221ddb7ab4bcb5a",
										"label": "Elizabeth Louise Cossens"
									},
									{
										"id": "7bb13c9bdb835d1002fc5117f3961915",
										"label": "Ellen Marie Enders"
									},
									{
										"id": "6937891ddbcb00101d5873e3f3961988",
										"label": "Epson"
									},
									{
										"id": "78f065bfdb0d7d9002fc5117f396198d",
										"label": "Erik Drexler"
									},
									{
										"id": "5fedbd9edb3c315002fc5117f39619a2",
										"label": "Erik Kersten"
									},
									{
										"id": "55798cefdb2a05101d5873e3f396194e",
										"label": "Erik Sewerin"
									},
									{
										"id": "2537891ddbcb00101d5873e3f396199c",
										"label": "Extron"
									},
									{
										"id": "b8891ef5db6681101d5873e3f39619c0",
										"label": "Fabian Schmitz"
									},
									{
										"id": "98254c49dbab8c501d5873e3f396196f",
										"label": "FALCON  "
									},
									{
										"id": "39c58d84db8098101d5873e3f3961911",
										"label": "FalconStor"
									},
									{
										"id": "fcc0ca311b49a110a221ddb7ab4bcb8b",
										"label": "Falk Schlattmeier"
									},
									{
										"id": "218f40741b7f5510a221ddb7ab4bcbca",
										"label": "Famatech"
									},
									{
										"id": "f1d8cd9ddbcb00101d5873e3f3961952",
										"label": "FaxHersteller"
									},
									{
										"id": "7de504cd1b278490a221ddb7ab4bcb79",
										"label": "Fedora Project"
									},
									{
										"id": "a9be2cbb1b5c8510a221ddb7ab4bcb56",
										"label": "Felix Banse"
									},
									{
										"id": "8aa51f0c1b1ae910a221ddb7ab4bcbfb",
										"label": "Felix Seibert"
									},
									{
										"id": "4f6a59e4db45651002fc5117f396198e",
										"label": "Felix Seifarth"
									},
									{
										"id": "864e1c1e1b510110a221ddb7ab4bcb39",
										"label": "Fenja Ankele"
									},
									{
										"id": "08680f1adb5344501d5873e3f39619da",
										"label": "Flexera Software LLC"
									},
									{
										"id": "d82b18ccdb5d49101d5873e3f396197f",
										"label": "Florian Balz"
									},
									{
										"id": "4454cc1fdb18e91002fc5117f39619cd",
										"label": "Florian David Lischeid"
									},
									{
										"id": "cb1b76d01b315510a221ddb7ab4bcbae",
										"label": "Florian Schmidt"
									},
									{
										"id": "1bcdc0fc1b9ec110a221ddb7ab4bcb5f",
										"label": "Florian Schuch"
									},
									{
										"id": "b937891ddbcb00101d5873e3f39619b0",
										"label": "Fohhn Audio"
									},
									{
										"id": "d00768ba1b79b910a221ddb7ab4bcb08",
										"label": "Francisco Gonzalvo"
									},
									{
										"id": "4cda1fa71b406190a221ddb7ab4bcb74",
										"label": "Franziska Höhn"
									},
									{
										"id": "62fe8da81bb2ed90a221ddb7ab4bcb4b",
										"label": "Franziska Ottrembka"
									},
									{
										"id": "7c47f366dbd57dd002fc5117f3961924",
										"label": "Fruzsina Tomity"
									},
									{
										"id": "7d37891ddbcb00101d5873e3f39619bc",
										"label": "Fujitsu-Siemens"
									},
									{
										"id": "e1ee2a621b45f950a221ddb7ab4bcb04",
										"label": "G&C Hub"
									},
									{
										"id": "1fab6ba6dba41d10bf6b95e8f49619e2",
										"label": "Genia Rudneva"
									},
									{
										"id": "e1346f5edba8695002fc5117f3961915",
										"label": "Georgia Firsching"
									},
									{
										"id": "1cfddd54db6a1d5002fc5117f39619b2",
										"label": "Gereon Walter"
									},
									{
										"id": "5e32b9e7db6ee99002fc5117f396190b",
										"label": "Gerrit Mahnke"
									},
									{
										"id": "ddc7d262db5cf59002fc5117f396191f",
										"label": "GerWorkFutuAA TestDeuOne"
									},
									{
										"id": "5b8fc0741b7f5510a221ddb7ab4bcbf4",
										"label": "Ghisler"
									},
									{
										"id": "81c79c9cdb9e391002fc5117f39619e8",
										"label": "Gizem Güngör"
									},
									{
										"id": "2d8f40741b7f5510a221ddb7ab4bcbcb",
										"label": "GN Audio A/S"
									},
									{
										"id": "c7860e54db71251002fc5117f396196f",
										"label": "GNNetcomAS"
									},
									{
										"id": "618f40741b7f5510a221ddb7ab4bcbd3",
										"label": "Google"
									},
									{
										"id": "258f40741b7f5510a221ddb7ab4bcbd6",
										"label": "Google LLC"
									},
									{
										"id": "9b0e976c1bfd4110a221ddb7ab4bcb03",
										"label": "Grant Waterfall"
									},
									{
										"id": "0d0fa42edb581d50bf6b95e8f496191a",
										"label": "Gusmita Rizkiningrum"
									},
									{
										"id": "4e46b17e1be24110a221ddb7ab4bcbc1",
										"label": "Hannah Kühl"
									},
									{
										"id": "b86483dc1b347110a221ddb7ab4bcbe2",
										"label": "Hannah Theresa Lenhard"
									},
									{
										"id": "91412a80db92991002fc5117f39619d3",
										"label": "Hannes Glückert"
									},
									{
										"id": "7bd6df8bdbe5695002fc5117f39619a1",
										"label": "Hannes Kessel"
									},
									{
										"id": "252e10271b7f1150a221ddb7ab4bcbe1",
										"label": "Hannes Schuller"
									},
									{
										"id": "f1d8cd9ddbcb00101d5873e3f3961956",
										"label": "Hantz + Partner"
									},
									{
										"id": "c5e4886fdb0bb8101d5873e3f3961909",
										"label": "Hays (Schweiz) AG"
									},
									{
										"id": "6e22670ddbbea1d002fc5117f3961936",
										"label": "Hedwig Böhrer"
									},
									{
										"id": "0b623289db92ed1002fc5117f3961928",
										"label": "Helena Sophia Reischel"
									},
									{
										"id": "7dda06841baef510a221ddb7ab4bcb23",
										"label": "Henning Bohle"
									},
									{
										"id": "3dd8cd9ddbcb00101d5873e3f3961957",
										"label": "Hersteller-Router"
									},
									{
										"id": "7137891ddbcb00101d5873e3f39619c3",
										"label": "Hewlett Packard"
									},
									{
										"id": "3a458089dbab8c501d5873e3f39619f3",
										"label": "Hewlett Packard Enterprise"
									},
									{
										"id": "fe458089dbab8c501d5873e3f39619f4",
										"label": "Hewlett Packard Enterprise Development LP"
									},
									{
										"id": "227dbc40db8098101d5873e3f39619ce",
										"label": "Hewlett-Packard Company"
									},
									{
										"id": "72458089dbab8c501d5873e3f39619f2",
										"label": "Hewlett-Packard Development Company, L.P"
									},
									{
										"id": "74a41e181bd8b950a221ddb7ab4bcb31",
										"label": "Hidenori Tohara"
									},
									{
										"id": "71e0db1ddb19b5d002fc5117f39619a6",
										"label": "Himansh Narang"
									},
									{
										"id": "12284330db3cc9101d5873e3f3961976",
										"label": "Hire_8_10_R845 Surname_R845"
									},
									{
										"id": "d637c91ddbcb00101d5873e3f3961973",
										"label": "Hitachi"
									},
									{
										"id": "9237c91ddbcb00101d5873e3f3961978",
										"label": "Honeywell"
									},
									{
										"id": "d8250c49dbab8c501d5873e3f396197d",
										"label": "HP"
									},
									{
										"id": "93d580c9dbab8c501d5873e3f3961920",
										"label": "HPE"
									},
									{
										"id": "d1e5c0c9dbab8c501d5873e3f39619ef",
										"label": "http://www.microsoft.com"
									},
									{
										"id": "5637c91ddbcb00101d5873e3f396197b",
										"label": "HUAWEI"
									},
									{
										"id": "a58f40741b7f5510a221ddb7ab4bcbd0",
										"label": "IBM"
									},
									{
										"id": "b9c58d84db8098101d5873e3f396190f",
										"label": "IDM Computer Solutions"
									},
									{
										"id": "d637c91ddbcb00101d5873e3f3961989",
										"label": "iiyama"
									},
									{
										"id": "6b3fdce41bda2d10a221ddb7ab4bcb58",
										"label": "Ilhan Atac"
									},
									{
										"id": "dab118ee1b931950a221ddb7ab4bcb0c",
										"label": "Ilona Strzedulla"
									},
									{
										"id": "5e37c91ddbcb00101d5873e3f396198c",
										"label": "Imerge"
									},
									{
										"id": "31ed4bc91b91a510a221ddb7ab4bcb25",
										"label": "India PwC Service Delivery Centres (SDC) [Grouping]"
									},
									{
										"id": "d637c91ddbcb00101d5873e3f3961990",
										"label": "InFocus"
									},
									{
										"id": "fbf0f70adb81759002fc5117f3961920",
										"label": "Ingo Jobs"
									},
									{
										"id": "082f0078db77951002fc5117f396194a",
										"label": "Intel"
									},
									{
										"id": "c123c60ddbc05c101d5873e3f396198c",
										"label": "INTENSIO GmbH"
									},
									{
										"id": "d4416305dbbfa8501d5873e3f3961986",
										"label": "Internal Firm Services"
									},
									{
										"id": "eba8f6a11bee6190a221ddb7ab4bcbc1",
										"label": "Irina Blumenfeld"
									},
									{
										"id": "864596eedb8405101d5873e3f396192d",
										"label": "Iris Kaifel"
									},
									{
										"id": "0c2ff1c1dbc05c101d5873e3f396191f",
										"label": "Ivanti"
									},
									{
										"id": "50aa9e46dbe0295002fc5117f39619c1",
										"label": "Iwona Grandjean"
									},
									{
										"id": "ca7de9741bb97110a221ddb7ab4bcb8b",
										"label": "Jacob Nicolussi"
									},
									{
										"id": "94ce9d62dbb8dd1002fc5117f3961999",
										"label": "Jade Pestell"
									},
									{
										"id": "90247bd0db1571d002fc5117f396199f",
										"label": "Jan Biller"
									},
									{
										"id": "1b0aa1f3db65611002fc5117f39619fd",
										"label": "Jan Gröne"
									},
									{
										"id": "065a21ae1b6d7dd0a221ddb7ab4bcbe5",
										"label": "Jan Kärcher"
									},
									{
										"id": "df41138edb5eb11002fc5117f396199b",
										"label": "Jan Serode"
									},
									{
										"id": "e59ab0a61b4db950a221ddb7ab4bcbc2",
										"label": "Jan-Henrik Paul"
									},
									{
										"id": "d03ea2791bb79910a221ddb7ab4bcb7e",
										"label": "Jane Gao"
									},
									{
										"id": "52fb690bdb52295002fc5117f39619cb",
										"label": "Janina Baal"
									},
									{
										"id": "675492251b102510a221ddb7ab4bcb63",
										"label": "Janis Kesten-Kühne"
									},
									{
										"id": "707176b6dbd981101d5873e3f396195a",
										"label": "Jannik Kienz"
									},
									{
										"id": "2ff0a6551b968510a221ddb7ab4bcb63",
										"label": "Jannik Wiegert"
									},
									{
										"id": "0ef63f7b1b95a910a221ddb7ab4bcba0",
										"label": "Janyn Stippel"
									},
									{
										"id": "b5ed4bc91b91a510a221ddb7ab4bcb65",
										"label": "Japan IF"
									},
									{
										"id": "7ded4bc91b91a510a221ddb7ab4bcb65",
										"label": "Japan KYO"
									},
									{
										"id": "35ed4bc91b91a510a221ddb7ab4bcb66",
										"label": "Japan TLS"
									},
									{
										"id": "6f086e8cdb4d81101d5873e3f396193a",
										"label": "Jarmo Kruse"
									},
									{
										"id": "7aa41b79db5981101d5873e3f3961969",
										"label": "Jasmin Kittelberger"
									},
									{
										"id": "9a37c91ddbcb00101d5873e3f3961999",
										"label": "JBL"
									},
									{
										"id": "3ec817d61b9a2550a221ddb7ab4bcb24",
										"label": "Jeff Thielmann"
									},
									{
										"id": "7d31e807dbeab11002fc5117f39619b2",
										"label": "Jennifer Frömter"
									},
									{
										"id": "bbbafc551b261110a221ddb7ab4bcbb9",
										"label": "Jenny Nußbaum"
									},
									{
										"id": "65ae7e931bb61950a221ddb7ab4bcb71",
										"label": "Jens Opretzka"
									},
									{
										"id": "eafdcc78dbb4391002fc5117f3961904",
										"label": "Jocelyn Gaitskell"
									},
									{
										"id": "3c91c06a1b695d50a221ddb7ab4bcbc8",
										"label": "Johanna Richter"
									},
									{
										"id": "33df76431be68110a221ddb7ab4bcb10",
										"label": "Johannes Baumann"
									},
									{
										"id": "04bd8c861bfc2d10a221ddb7ab4bcbff",
										"label": "Johannes Wicke"
									},
									{
										"id": "28219d20db4a85101d5873e3f3961944",
										"label": "Jonas Baginski"
									},
									{
										"id": "5a2efca9db52311002fc5117f396193c",
										"label": "Jonas Bernd Bochnia"
									},
									{
										"id": "8b2e45d21b94f190a221ddb7ab4bcb93",
										"label": "Jonas Lang"
									},
									{
										"id": "e25458401b221550a221ddb7ab4bcbb9",
										"label": "Jonathan Boße"
									},
									{
										"id": "bf6c51e6db0341901d5873e3f39619c5",
										"label": "Josef Stepina"
									},
									{
										"id": "e0157d4bdb3edd1002fc5117f39619f6",
										"label": "Josefin-Luise von Massow"
									},
									{
										"id": "5e817baddbe3599002fc5117f3961920",
										"label": "Jule Irps"
									},
									{
										"id": "38874b62db38b15002fc5117f396198e",
										"label": "Julia Goldhofer"
									},
									{
										"id": "c63cb48bdb71215002fc5117f3961918",
										"label": "Julia Heiden"
									},
									{
										"id": "bd880c221b36e5d0a221ddb7ab4bcb10",
										"label": "Julia Sophie Frühling"
									},
									{
										"id": "edf74a57db05c5101d5873e3f39619e3",
										"label": "Julia Trieu"
									},
									{
										"id": "dbaa6028db20615002fc5117f3961912",
										"label": "Julia Wenning Ma"
									},
									{
										"id": "079da7451b812110a221ddb7ab4bcba6",
										"label": "Julian Balz"
									},
									{
										"id": "6b88eb5cdb2c9110bf6b95e8f4961901",
										"label": "Julian Ludwig"
									},
									{
										"id": "995bbd271b4b1d10a221ddb7ab4bcb8c",
										"label": "Julius Lustfeld"
									},
									{
										"id": "fe4774181be24910a221ddb7ab4bcb51",
										"label": "Julius Rucha"
									},
									{
										"id": "b9d8cd9ddbcb00101d5873e3f3961960",
										"label": "Juniper"
									},
									{
										"id": "4613e38e1b2a0150a221ddb7ab4bcbc1",
										"label": "Karina Temoche Gonzalez"
									},
									{
										"id": "d361d5d71bb51150a221ddb7ab4bcb30",
										"label": "Karla Kolumna"
									},
									{
										"id": "8af41992db8f191002fc5117f39619fe",
										"label": "Katharina Lohmann"
									},
									{
										"id": "3e870c9cdb8245101d5873e3f3961979",
										"label": "Katharina Pütz"
									},
									{
										"id": "3f875d4d1bfcf110a221ddb7ab4bcb89",
										"label": "Kathrin Hartz"
									},
									{
										"id": "528161dbdbe3111002fc5117f396196b",
										"label": "Kay Lubitzsch"
									},
									{
										"id": "9fc50a9b1b31a150a221ddb7ab4bcbc9",
										"label": "Kerstin Alexandra Militello"
									},
									{
										"id": "11ed4f7d1bea9110a221ddb7ab4bcbed",
										"label": "Kiera Jasmin Todd"
									},
									{
										"id": "216f8327db7da15002fc5117f3961988",
										"label": "Kim Rilana Kliemann"
									},
									{
										"id": "d8bb4152dbc0c1101d5873e3f3961984",
										"label": "Kinan Salti"
									},
									{
										"id": "1e37c91ddbcb00101d5873e3f396199c",
										"label": "Klein & Hummel"
									},
									{
										"id": "d637c91ddbcb00101d5873e3f39619a1",
										"label": "KOBIL/TeleSec"
									},
									{
										"id": "5d3ffd411b849c10a221ddb7ab4bcb45",
										"label": "Kofax"
									},
									{
										"id": "9a37c91ddbcb00101d5873e3f39619a4",
										"label": "Konftel"
									},
									{
										"id": "214b2963dbd5d15002fc5117f39619a5",
										"label": "Konrad Schmidt"
									},
									{
										"id": "cd1147ca1b02cd10a221ddb7ab4bcb59",
										"label": "Koray Kilic"
									},
									{
										"id": "2237c91ddbcb00101d5873e3f39619ab",
										"label": "Kramer"
									},
									{
										"id": "35d8cd9ddbcb00101d5873e3f3961966",
										"label": "Kyocera"
									},
									{
										"id": "294244c6db22659002fc5117f39619f5",
										"label": "Lâle Ören"
									},
									{
										"id": "7dd8cd9ddbcb00101d5873e3f3961967",
										"label": "Lancom"
									},
									{
										"id": "d70bc9c81b547950a221ddb7ab4bcb11",
										"label": "Larissa Öhlenschläger"
									},
									{
										"id": "5857c2c9dbd935d002fc5117f3961904",
										"label": "Lars Jütersonke"
									},
									{
										"id": "e4e8334bdb4e651002fc5117f396190d",
										"label": "Laura Braun"
									},
									{
										"id": "fb51c738db02d51002fc5117f39619ed",
										"label": "Laura Schnell"
									},
									{
										"id": "73b02c9adbe1315402fc5117f396198e",
										"label": "Laura Schönhorst"
									},
									{
										"id": "a5d7c8c7db3d515002fc5117f3961931",
										"label": "Lauren Garcia Berner"
									},
									{
										"id": "3adb05961be66590a221ddb7ab4bcb32",
										"label": "Laurenz Titus Laurs"
									},
									{
										"id": "e194c2efdbca751002fc5117f3961914",
										"label": "Lea Maria Weller"
									},
									{
										"id": "31bdf0fc1b153590a221ddb7ab4bcbc7",
										"label": "LegalDeEightythreeSRfc LegalDschTTBetÄ"
									},
									{
										"id": "bc0bbae11bd83190a221ddb7ab4bcb20",
										"label": "LegalFirstName LegalGN00014"
									},
									{
										"id": "d797a39b1b60fd10a221ddb7ab4bcb86",
										"label": "LegalFirstName LegalGN00024"
									},
									{
										"id": "52d7e1221b154110a221ddb7ab4bcb2f",
										"label": "Lena Keller"
									},
									{
										"id": "564120b51b0c6950a221ddb7ab4bcb8b",
										"label": "Lennart Langer"
									},
									{
										"id": "47860e54db71251002fc5117f3961975",
										"label": "Lenovo"
									},
									{
										"id": "a78e9eaa1b8f1910a221ddb7ab4bcb70",
										"label": "Leo Diallo"
									},
									{
										"id": "dcb381e21be56550a221ddb7ab4bcbc9",
										"label": "Leon Blümel"
									},
									{
										"id": "f6370d1ddbcb00101d5873e3f3961910",
										"label": "LG"
									},
									{
										"id": "c167f5c31b286110a221ddb7ab4bcb18",
										"label": "Lina Hendricks"
									},
									{
										"id": "e18f40741b7f5510a221ddb7ab4bcbcb",
										"label": "Linotype"
									},
									{
										"id": "27bb1b201b808510a221ddb7ab4bcb5a",
										"label": "Lisa Gabriele Senger"
									},
									{
										"id": "14faeaf8db9ef91002fc5117f39619b9",
										"label": "Lisa Okon"
									},
									{
										"id": "e78e50891b5dd510a221ddb7ab4bcbf9",
										"label": "Lisa Pfenning"
									},
									{
										"id": "98ac568c1b728510a221ddb7ab4bcbc8",
										"label": "Liuba Busuioc"
									},
									{
										"id": "d1caa05b1b790510a221ddb7ab4bcbdf",
										"label": "Lize Minnaar"
									},
									{
										"id": "970fb1c1dbc05c101d5873e3f396198d",
										"label": "LOGbinder, a division of Monterey Technology Group"
									},
									{
										"id": "4ad8cd9ddbcb00101d5873e3f396196b",
										"label": "LSK"
									},
									{
										"id": "4a578f621bd6c110a221ddb7ab4bcb3e",
										"label": "Luca Kindermann"
									},
									{
										"id": "370c02ffdb06691002fc5117f3961912",
										"label": "Lucas Stadelmeyer"
									},
									{
										"id": "8ba0258d1bd96510a221ddb7ab4bcbcd",
										"label": "Luis Schmidt"
									},
									{
										"id": "674151e01b2c7110a221ddb7ab4bcb3a",
										"label": "Luis Wolter"
									},
									{
										"id": "be0ef54ddb969d1002fc5117f396190d",
										"label": "Luisa Mentenich"
									},
									{
										"id": "f5bbb10d1b285510a221ddb7ab4bcbe7",
										"label": "Lukas Held"
									},
									{
										"id": "82d8cd9ddbcb00101d5873e3f396196d",
										"label": "Macom"
									},
									{
										"id": "28ca83a71bda9150a221ddb7ab4bcbe8",
										"label": "Madeleine Lakatos"
									},
									{
										"id": "d5f35cee1b8d2510a221ddb7ab4bcb2d",
										"label": "Madeleine Riebau"
									},
									{
										"id": "e91a1ee2db46711002fc5117f39619ed",
										"label": "Magnus Panthen"
									},
									{
										"id": "8e94c4ca1b50b190a221ddb7ab4bcb39",
										"label": "Mahmoud Elsabry"
									},
									{
										"id": "54445d721b864150a221ddb7ab4bcb55",
										"label": "Malte Oberhoff"
									},
									{
										"id": "f2b12a381b9b5150a221ddb7ab4bcb96",
										"label": "Malte Wollboldt"
									},
									{
										"id": "3b0b1cd9db3b191002fc5117f39619a2",
										"label": "Malte-Jannes Krüger"
									},
									{
										"id": "cad8cd9ddbcb00101d5873e3f396196e",
										"label": "Manufacturer Beam"
									},
									{
										"id": "3f5d4508dbc6715002fc5117f3961985",
										"label": "Marc Benesch"
									},
									{
										"id": "a9e7108bdbaf9d9002fc5117f39619e7",
										"label": "Marc Krupp"
									},
									{
										"id": "56e89f8d1bb30910a221ddb7ab4bcbd3",
										"label": "Marco Luong"
									},
									{
										"id": "8ed333251b556110a221ddb7ab4bcb2c",
										"label": "Marco Tosetto"
									},
									{
										"id": "8951b8e21b4e9110a221ddb7ab4bcb0b",
										"label": "Maresa Lena Kunau"
									},
									{
										"id": "4b3787731b7c2550a221ddb7ab4bcb51",
										"label": "Margareta Sophie Theobald"
									},
									{
										"id": "f35a834adb0d251002fc5117f3961946",
										"label": "Margarita Chicherina"
									},
									{
										"id": "ea72cdaf1b462910a221ddb7ab4bcb02",
										"label": "Maria Covbasa"
									},
									{
										"id": "d86abff01be9b5d0a221ddb7ab4bcb89",
										"label": "Mario Künstler"
									},
									{
										"id": "e8fe764a1b7e65d0a221ddb7ab4bcbc4",
										"label": "Mario Petoshati"
									},
									{
										"id": "debafafa1b106910a221ddb7ab4bcb48",
										"label": "Mark Erhan"
									},
									{
										"id": "ec9a447fdb2ce11002fc5117f39619d7",
										"label": "Mark Papke"
									},
									{
										"id": "791f2d95db66a19002fc5117f3961926",
										"label": "Mark Willeke"
									},
									{
										"id": "3c6719c91b924510a221ddb7ab4bcb6c",
										"label": "Markus Mai"
									},
									{
										"id": "c2ba5a301b0a8910a221ddb7ab4bcb21",
										"label": "Martina Tursch"
									},
									{
										"id": "116b84061b879510a221ddb7ab4bcbfe",
										"label": "Marvin Zineker"
									},
									{
										"id": "f245c089dbab8c501d5873e3f3961974",
										"label": "Matrox Graphics"
									},
									{
										"id": "1b9a5ce8dbf2151002fc5117f396192b",
										"label": "Matthias Gloßner"
									},
									{
										"id": "b598b536dbdc5d50bf6b95e8f49619d6",
										"label": "Matthias Kafitz"
									},
									{
										"id": "c384b749db967d1002fc5117f39619b3",
										"label": "Matthias Lautenschläger"
									},
									{
										"id": "f2e665291b216150a221ddb7ab4bcb16",
										"label": "Maximilian Strohmajer"
									},
									{
										"id": "19c7a9f3dbfbd15002fc5117f396194b",
										"label": "Maximilian Wolf"
									},
									{
										"id": "27358089dbab8c501d5873e3f3961905",
										"label": "McAfee"
									},
									{
										"id": "a98f40741b7f5510a221ddb7ab4bcbd1",
										"label": "McAfee LLC"
									},
									{
										"id": "3ca11e38dba1595002fc5117f3961925",
										"label": "Megan Hartnett"
									},
									{
										"id": "08df6cb41b3a0910a221ddb7ab4bcb77",
										"label": "Melena Schälling"
									},
									{
										"id": "478063a01b8eb150a221ddb7ab4bcb38",
										"label": "Melisa Mäntylä"
									},
									{
										"id": "505f86b81bff8510a221ddb7ab4bcb52",
										"label": "Michael Hanselmann"
									},
									{
										"id": "f2cafba9db6afd1002fc5117f39619d7",
										"label": "Michael Müller"
									},
									{
										"id": "5b146ea3db1a89101d5873e3f39619a1",
										"label": "Michael Proppe"
									},
									{
										"id": "871745af1b2d7114a221ddb7ab4bcbc8",
										"label": "Michal Boron"
									},
									{
										"id": "23b7e70adb4a511002fc5117f396196b",
										"label": "Michelle Neth"
									},
									{
										"id": "a845f8cf1b245d10a221ddb7ab4bcb6c",
										"label": "Michelle Vedra"
									},
									{
										"id": "71de40341b7f5510a221ddb7ab4bcb10",
										"label": "Microsoft"
									},
									{
										"id": "9be3fef6db29f15402fc5117f3961997",
										"label": "Minh Phung"
									},
									{
										"id": "76fa0c55db86191002fc5117f39619dc",
										"label": "Miriam Quintino Bastos"
									},
									{
										"id": "f65e5105dba7959002fc5117f39619a4",
										"label": "Miruna Kandipan"
									},
									{
										"id": "3987eea0db229d5002fc5117f39619cc",
										"label": "Mohammed Mishal"
									},
									{
										"id": "2f321214dbb1251002fc5117f39619ce",
										"label": "Monotype"
									},
									{
										"id": "145f71811b849c10a221ddb7ab4bcb18",
										"label": "Mortice Kern Systems"
									},
									{
										"id": "1de5c0c9dbab8c501d5873e3f39619ed",
										"label": "MSFT"
									},
									{
										"id": "9eeb9f60dbeaed5002fc5117f39619d8",
										"label": "My Tran"
									},
									{
										"id": "e5fa205fdb9cb99002fc5117f396197b",
										"label": "Natalia Sidorov"
									},
									{
										"id": "7a370d1ddbcb00101d5873e3f3961929",
										"label": "NEC"
									},
									{
										"id": "8b70d11a1b0e7950a221ddb7ab4bcbfe",
										"label": "Necip Saygi"
									},
									{
										"id": "20d4484d1b278490a221ddb7ab4bcb39",
										"label": "NECVMWar"
									},
									{
										"id": "16eedb721b804110a221ddb7ab4bcb6f",
										"label": "NewHireDE_15_11 TEST"
									},
									{
										"id": "a02ff72f1b52a950a221ddb7ab4bcb9e",
										"label": "Niccolo Codecasa"
									},
									{
										"id": "7c252353db1c01101d5873e3f3961979",
										"label": "Nick Werner"
									},
									{
										"id": "8d1ca5311bbb8910a221ddb7ab4bcb9f",
										"label": "Niclas Feige"
									},
									{
										"id": "fa74e57adb9a711002fc5117f39619c3",
										"label": "Niclas Grosa"
									},
									{
										"id": "7da0c0eddb7d351002fc5117f39619ae",
										"label": "NiemCurrWorkFive DEtoCorrTypeEE"
									},
									{
										"id": "576d179edb39791002fc5117f39619b7",
										"label": "NiemWorkFutTwoo ToCorrLocationBB"
									},
									{
										"id": "acba9d17db3c755002fc5117f3961962",
										"label": "Niklas Fuhrmann"
									},
									{
										"id": "f27d83981b55e110a221ddb7ab4bcbe2",
										"label": "Nina Gramcko"
									},
									{
										"id": "dc9e71601bb84d10a221ddb7ab4bcb7e",
										"label": "Nina Schmidt"
									},
									{
										"id": "fa90d7a61b156510a221ddb7ab4bcb4a",
										"label": "Nini Asatiani Areshidze"
									},
									{
										"id": "cefdce9e1b62b150a221ddb7ab4bcbf6",
										"label": "NLFiftysevenHA NidRPhii"
									},
									{
										"id": "6163024ddbc05c101d5873e3f39619da",
										"label": "Nmap Project"
									},
									{
										"id": "8ed8cd9ddbcb00101d5873e3f3961971",
										"label": "Nokia"
									},
									{
										"id": "46d4884d1b278490a221ddb7ab4bcb7a",
										"label": "None"
									},
									{
										"id": "41777c541bcd3150a221ddb7ab4bcb3d",
										"label": "Nora Reimerink"
									},
									{
										"id": "c6d8cd9ddbcb00101d5873e3f3961973",
										"label": "Nortel"
									},
									{
										"id": "6f5f71811b849c10a221ddb7ab4bcbb4",
										"label": "Notepad++ Team"
									},
									{
										"id": "6b321214dbb1251002fc5117f39619d0",
										"label": "NVIDIA"
									},
									{
										"id": "02d8cd9ddbcb00101d5873e3f3961975",
										"label": "OKI"
									},
									{
										"id": "a6056d471b411110a221ddb7ab4bcb9e",
										"label": "Oksana Rathey"
									},
									{
										"id": "9ff7fa8edbe99d5002fc5117f3961900",
										"label": "Olga Heckmann"
									},
									{
										"id": "9303993bdb6e45101d5873e3f396190d",
										"label": "Oliver Wang"
									},
									{
										"id": "4ad8cd9ddbcb00101d5873e3f3961976",
										"label": "Olympus"
									},
									{
										"id": "23321214dbb1251002fc5117f39619d2",
										"label": "Omnisys"
									},
									{
										"id": "698f40741b7f5510a221ddb7ab4bcbca",
										"label": "OmniSys IT GmbH & Co. KG"
									},
									{
										"id": "5f0fb1c1dbc05c101d5873e3f396198e",
										"label": "One Identity LLC"
									},
									{
										"id": "fae0c6051b849c10a221ddb7ab4bcbc9",
										"label": "OpenSSL Win64 Installer Team"
									},
									{
										"id": "76370d1ddbcb00101d5873e3f396192e",
										"label": "Optoma"
									},
									{
										"id": "fecd2ac1db72d51002fc5117f3961911",
										"label": "Pablo de Miguel Palacio"
									},
									{
										"id": "32370d1ddbcb00101d5873e3f3961936",
										"label": "Panasonic"
									},
									{
										"id": "3b789542dbe85910bf6b95e8f4961922",
										"label": "Pascal Görlinger"
									},
									{
										"id": "bc0b9a271bf95150a221ddb7ab4bcb00",
										"label": "Pascal Lortz"
									},
									{
										"id": "3b25c2491b849c10a221ddb7ab4bcb63",
										"label": "Passmark Software"
									},
									{
										"id": "ee84b5eb1bd07990a221ddb7ab4bcba6",
										"label": "Patrick Müller"
									},
									{
										"id": "e2adae5edb19f9d002fc5117f3961945",
										"label": "Paul Heckmann"
									},
									{
										"id": "0ed8cd9ddbcb00101d5873e3f3961979",
										"label": "Peacock"
									},
									{
										"id": "845442651b2a5110a221ddb7ab4bcbf4",
										"label": "Peter Reubelt"
									},
									{
										"id": "63644446dbfd01101d5873e3f396190b",
										"label": "Peter von Bodelschwingh"
									},
									{
										"id": "495684dd1b2e0d10a221ddb7ab4bcb23",
										"label": "Peter Zhu"
									},
									{
										"id": "1e9079c71b7df910a221ddb7ab4bcbd2",
										"label": "Philip Gärtner"
									},
									{
										"id": "c29549b9dbd2a15002fc5117f396196a",
										"label": "Philipp Käsche"
									},
									{
										"id": "696ea5f51b21d950a221ddb7ab4bcbc0",
										"label": "Philipp Rücker"
									},
									{
										"id": "768213391b822110a221ddb7ab4bcb87",
										"label": "Philipp Sander"
									},
									{
										"id": "5fdd277bdbf0795002fc5117f396197b",
										"label": "Philipp Sandke"
									},
									{
										"id": "fe370d1ddbcb00101d5873e3f3961949",
										"label": "Philips"
									},
									{
										"id": "b2370d1ddbcb00101d5873e3f396194d",
										"label": "Phillips"
									},
									{
										"id": "76370d1ddbcb00101d5873e3f3961950",
										"label": "Pioneer"
									},
									{
										"id": "901e73ae1b846d50a221ddb7ab4bcbd4",
										"label": "Piotr Maczkowski"
									},
									{
										"id": "0ed8cd9ddbcb00101d5873e3f396197d",
										"label": "Plustek"
									},
									{
										"id": "72370d1ddbcb00101d5873e3f3961955",
										"label": "Polyspan"
									},
									{
										"id": "6b321214dbb1251002fc5117f39619d8",
										"label": "Porsche"
									},
									{
										"id": "35e504cd1b278490a221ddb7ab4bcb7b",
										"label": "PostgreSQL Global Development Group"
									},
									{
										"id": "82d8cd9ddbcb00101d5873e3f3961980",
										"label": "Powis"
									},
									{
										"id": "af6d3c461b99a110a221ddb7ab4bcbb6",
										"label": "Pranay Bhatia"
									},
									{
										"id": "8f51eb761b50b590a221ddb7ab4bcba9",
										"label": "PreferredFirstName Preferred00001"
									},
									{
										"id": "1531fe111ba2bd10a221ddb7ab4bcbba",
										"label": "PreferredFirstName Preferred00002"
									},
									{
										"id": "1c7411721b643d10a221ddb7ab4bcbb9",
										"label": "PreferredFirstName Preferred00040"
									},
									{
										"id": "7a3e9ba4db1cbd5002fc5117f39619d7",
										"label": "PreferredFirstName PreferredGN00017"
									},
									{
										"id": "fc14e98e1b197990a221ddb7ab4bcb23",
										"label": "PreferredFirstName PreferredLast10010"
									},
									{
										"id": "344d2c1bdbc2351002fc5117f396195c",
										"label": "PreferredFirstName00075 PreferredLastNam"
									},
									{
										"id": "298f40741b7f5510a221ddb7ab4bcbd4",
										"label": "PricewaterhouseCoopers"
									},
									{
										"id": "d90ed8bc1b22f910a221ddb7ab4bcbfa",
										"label": "PricewaterhouseCoopers (South African Fi"
									},
									{
										"id": "f6cb2dcbdbf3fc101d5873e3f39619e1",
										"label": "PricewaterhouseCoopers Consultants (Shen"
									},
									{
										"id": "2147fa321b0e4150a221ddb7ab4bcbe4",
										"label": "PricewaterhouseCoopers GmbH Wirtschaftsprüfungsgesellschaft"
									},
									{
										"id": "681fd0a41b773410a221ddb7ab4bcbd1",
										"label": "PricewaterhouseCoopers Statsautoris Revi"
									},
									{
										"id": "1a4a1700dbb5f95402fc5117f3961952",
										"label": "Priyatham Salimadugu"
									},
									{
										"id": "ff323e05db3bf4101d5873e3f3961954",
										"label": "Process Analytics Factory GmbH"
									},
									{
										"id": "cad8cd9ddbcb00101d5873e3f3961981",
										"label": "PSC"
									},
									{
										"id": "e18f40741b7f5510a221ddb7ab4bcbd2",
										"label": "Pulse Secure, LLC"
									},
									{
										"id": "23321214dbb1251002fc5117f39619da",
										"label": "PulseSecure"
									},
									{
										"id": "8ed4884d1b278490a221ddb7ab4bcb78",
										"label": "Puppet Labs"
									},
									{
										"id": "a58f40741b7f5510a221ddb7ab4bcbc9",
										"label": "PwC"
									},
									{
										"id": "f9ed4bc91b91a510a221ddb7ab4bcb66",
										"label": "PwC Afghanistan [Do Not Use]"
									},
									{
										"id": "b1ed4bc91b91a510a221ddb7ab4bcb67",
										"label": "PwC Albania"
									},
									{
										"id": "79ed4bc91b91a510a221ddb7ab4bcb67",
										"label": "PwC Algeria"
									},
									{
										"id": "31ed4bc91b91a510a221ddb7ab4bcb68",
										"label": "PwC Angola"
									},
									{
										"id": "f5ed4bc91b91a510a221ddb7ab4bcb68",
										"label": "PwC Argentina"
									},
									{
										"id": "bded4bc91b91a510a221ddb7ab4bcb68",
										"label": "PwC Argentina and Uruguay"
									},
									{
										"id": "75ed4bc91b91a510a221ddb7ab4bcb69",
										"label": "PwC Armenia"
									},
									{
										"id": "3ded4bc91b91a510a221ddb7ab4bcb69",
										"label": "PwC Aruba"
									},
									{
										"id": "c2ed4bc91b91a510a221ddb7ab4bcb6a",
										"label": "PwC Australia"
									},
									{
										"id": "8aed4bc91b91a510a221ddb7ab4bcb6a",
										"label": "PwC Australia [Grouping]"
									},
									{
										"id": "42ed4bc91b91a510a221ddb7ab4bcb6b",
										"label": "PwC Austria"
									},
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcb6b",
										"label": "PwC Azerbaijan"
									},
									{
										"id": "ceed4bc91b91a510a221ddb7ab4bcb6b",
										"label": "PwC Bahamas"
									},
									{
										"id": "86ed4bc91b91a510a221ddb7ab4bcb6c",
										"label": "PwC Bahrain"
									},
									{
										"id": "4eed4bc91b91a510a221ddb7ab4bcb6c",
										"label": "PwC Bangladesh"
									},
									{
										"id": "06ed4bc91b91a510a221ddb7ab4bcb6d",
										"label": "PwC Belgium"
									},
									{
										"id": "caed4bc91b91a510a221ddb7ab4bcb6d",
										"label": "PwC Bermuda"
									},
									{
										"id": "82ed4bc91b91a510a221ddb7ab4bcb6e",
										"label": "PwC Bhutan"
									},
									{
										"id": "4aed4bc91b91a510a221ddb7ab4bcb6e",
										"label": "PwC Bolivia"
									},
									{
										"id": "02ed4bc91b91a510a221ddb7ab4bcb6f",
										"label": "PwC Bonaire"
									},
									{
										"id": "c6ed4bc91b91a510a221ddb7ab4bcb6f",
										"label": "PwC Bosnia and Herzegovina"
									},
									{
										"id": "8eed4bc91b91a510a221ddb7ab4bcb6f",
										"label": "PwC Botswana"
									},
									{
										"id": "c2ed4bc91b91a510a221ddb7ab4bcb89",
										"label": "PwC Brazil"
									},
									{
										"id": "8aed4bc91b91a510a221ddb7ab4bcb89",
										"label": "PwC British Virgin Islands (BVI)"
									},
									{
										"id": "42ed4bc91b91a510a221ddb7ab4bcb8a",
										"label": "PwC Bulgaria"
									},
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcb8a",
										"label": "PwC Cambodia"
									},
									{
										"id": "ceed4bc91b91a510a221ddb7ab4bcb8a",
										"label": "PwC Cameroon"
									},
									{
										"id": "86ed4bc91b91a510a221ddb7ab4bcb8b",
										"label": "PwC Canada"
									},
									{
										"id": "4eed4bc91b91a510a221ddb7ab4bcb8b",
										"label": "PwC Cape Verde"
									},
									{
										"id": "06ed4bc91b91a510a221ddb7ab4bcb8c",
										"label": "PwC Cayman Islands"
									},
									{
										"id": "bffc8d99db4f00101d5873e3f3961905",
										"label": "PwC Certific. Serv. GmbH"
									},
									{
										"id": "caed4bc91b91a510a221ddb7ab4bcb8c",
										"label": "PwC Chad"
									},
									{
										"id": "82ed4bc91b91a510a221ddb7ab4bcb8d",
										"label": "PwC Channel Islands"
									},
									{
										"id": "4aed4bc91b91a510a221ddb7ab4bcb8d",
										"label": "PwC Chile"
									},
									{
										"id": "02ed4bc91b91a510a221ddb7ab4bcb8e",
										"label": "PwC China"
									},
									{
										"id": "c6ed4bc91b91a510a221ddb7ab4bcb8e",
										"label": "PwC Colombia"
									},
									{
										"id": "8eed4bc91b91a510a221ddb7ab4bcb8e",
										"label": "PwC Costa Rica"
									},
									{
										"id": "46ed4bc91b91a510a221ddb7ab4bcb8f",
										"label": "PwC Cote d'Ivoire"
									},
									{
										"id": "0eed4bc91b91a510a221ddb7ab4bcb8f",
										"label": "PwC Croatia"
									},
									{
										"id": "c2ed4bc91b91a510a221ddb7ab4bcb90",
										"label": "PwC Curacao"
									},
									{
										"id": "8aed4bc91b91a510a221ddb7ab4bcb90",
										"label": "PwC Cyprus"
									},
									{
										"id": "42ed4bc91b91a510a221ddb7ab4bcb91",
										"label": "PwC Czech Republic"
									},
									{
										"id": "ae983936dbdc5d50bf6b95e8f4961941",
										"label": "PwC DE Testing CLIENT 1"
									},
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcb91",
										"label": "PwC Democratic Republic of Congo"
									},
									{
										"id": "ceed4bc91b91a510a221ddb7ab4bcb91",
										"label": "PwC Denmark"
									},
									{
										"id": "86ed4bc91b91a510a221ddb7ab4bcb92",
										"label": "PwC Denmark [Grouping]"
									},
									{
										"id": "4eed4bc91b91a510a221ddb7ab4bcb92",
										"label": "PwC Dominican Republic"
									},
									{
										"id": "06ed4bc91b91a510a221ddb7ab4bcb93",
										"label": "PwC Dutch Caribbean [Grouping]"
									},
									{
										"id": "caed4bc91b91a510a221ddb7ab4bcb93",
										"label": "PwC East Caribbean (Barbados)"
									},
									{
										"id": "82ed4bc91b91a510a221ddb7ab4bcb94",
										"label": "PwC Ecuador"
									},
									{
										"id": "4aed4bc91b91a510a221ddb7ab4bcb94",
										"label": "PwC Egypt"
									},
									{
										"id": "02ed4bc91b91a510a221ddb7ab4bcb95",
										"label": "PwC El Salvador"
									},
									{
										"id": "c6ed4bc91b91a510a221ddb7ab4bcb95",
										"label": "PwC Equatorial Guinea"
									},
									{
										"id": "8eed4bc91b91a510a221ddb7ab4bcb95",
										"label": "PwC Estonia"
									},
									{
										"id": "46ed4bc91b91a510a221ddb7ab4bcb96",
										"label": "PwC Faroe Islands"
									},
									{
										"id": "0eed4bc91b91a510a221ddb7ab4bcb96",
										"label": "PwC Fiji"
									},
									{
										"id": "c2ed4bc91b91a510a221ddb7ab4bcb97",
										"label": "PwC Finland"
									},
									{
										"id": "8aed4bc91b91a510a221ddb7ab4bcb97",
										"label": "PwC France"
									},
									{
										"id": "42ed4bc91b91a510a221ddb7ab4bcb98",
										"label": "PwC France and Francophone Maghreb [Grouping]"
									},
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcb98",
										"label": "PwC France [Grouping]"
									},
									{
										"id": "ceed4bc91b91a510a221ddb7ab4bcb98",
										"label": "PwC French Guiana"
									},
									{
										"id": "86ed4bc91b91a510a221ddb7ab4bcb99",
										"label": "PwC Gabon"
									},
									{
										"id": "4eed4bc91b91a510a221ddb7ab4bcb99",
										"label": "PwC Georgia"
									},
									{
										"id": "cb1ae7881b19a110a221ddb7ab4bcba0",
										"label": "PwC Germany"
									},
									{
										"id": "c6ed4bc91b91a510a221ddb7ab4bcb9a",
										"label": "PwC Ghana"
									},
									{
										"id": "8eed4bc91b91a510a221ddb7ab4bcb9a",
										"label": "PwC Gibraltar"
									},
									{
										"id": "ba6909dddbcb00101d5873e3f396198a",
										"label": "PwC GmbH WPG"
									},
									{
										"id": "46ed4bc91b91a510a221ddb7ab4bcb9b",
										"label": "PwC Greece"
									},
									{
										"id": "0eed4bc91b91a510a221ddb7ab4bcb9b",
										"label": "PwC Greenland"
									},
									{
										"id": "c2ed4bc91b91a510a221ddb7ab4bcb9c",
										"label": "PwC Guadeloupe"
									},
									{
										"id": "8aed4bc91b91a510a221ddb7ab4bcb9c",
										"label": "PwC Guam"
									},
									{
										"id": "42ed4bc91b91a510a221ddb7ab4bcb9d",
										"label": "PwC Guatemala"
									},
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcb9d",
										"label": "PwC Guyana"
									},
									{
										"id": "ceed4bc91b91a510a221ddb7ab4bcb9d",
										"label": "PwC Honduras"
									},
									{
										"id": "86ed4bc91b91a510a221ddb7ab4bcb9e",
										"label": "PwC Hungary"
									},
									{
										"id": "4eed4bc91b91a510a221ddb7ab4bcb9e",
										"label": "PwC Iceland"
									},
									{
										"id": "06ed4bc91b91a510a221ddb7ab4bcb9f",
										"label": "PwC India"
									},
									{
										"id": "caed4bc91b91a510a221ddb7ab4bcb9f",
										"label": "PwC India [Grouping]"
									},
									{
										"id": "82ed4bc91b91a510a221ddb7ab4bcba0",
										"label": "PwC Indonesia"
									},
									{
										"id": "4aed4bc91b91a510a221ddb7ab4bcba0",
										"label": "PwC Indonesia [Grouping]"
									},
									{
										"id": "02ed4bc91b91a510a221ddb7ab4bcba1",
										"label": "PwC Iraq"
									},
									{
										"id": "c6ed4bc91b91a510a221ddb7ab4bcba1",
										"label": "PwC Ireland (Republic of)"
									},
									{
										"id": "8eed4bc91b91a510a221ddb7ab4bcba1",
										"label": "PwC Isle of Man"
									},
									{
										"id": "46ed4bc91b91a510a221ddb7ab4bcba2",
										"label": "PwC Israel"
									},
									{
										"id": "366909dddbcb00101d5873e3f3961996",
										"label": "PwC IT Services Europe GmbH"
									},
									{
										"id": "0eed4bc91b91a510a221ddb7ab4bcba2",
										"label": "PwC Italy"
									},
									{
										"id": "c2ed4bc91b91a510a221ddb7ab4bcba3",
										"label": "PwC ITSCo Canada"
									},
									{
										"id": "8aed4bc91b91a510a221ddb7ab4bcba3",
										"label": "PwC ITSCo CEE"
									},
									{
										"id": "42ed4bc91b91a510a221ddb7ab4bcba4",
										"label": "PwC ITSCo Czech Republic"
									},
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcba4",
										"label": "PwC ITSCo Germany"
									},
									{
										"id": "ceed4bc91b91a510a221ddb7ab4bcba4",
										"label": "PwC ITSCo Netherlands"
									},
									{
										"id": "86ed4bc91b91a510a221ddb7ab4bcba5",
										"label": "PwC ITSCo Romania"
									},
									{
										"id": "4eed4bc91b91a510a221ddb7ab4bcba5",
										"label": "PwC ITSCo Singapore"
									},
									{
										"id": "06ed4bc91b91a510a221ddb7ab4bcba6",
										"label": "PwC ITSCo UK"
									},
									{
										"id": "caed4bc91b91a510a221ddb7ab4bcba6",
										"label": "PwC ITSCo USA"
									},
									{
										"id": "82ed4bc91b91a510a221ddb7ab4bcba7",
										"label": "PwC Jamaica"
									},
									{
										"id": "4aed4bc91b91a510a221ddb7ab4bcba7",
										"label": "PwC Japan"
									},
									{
										"id": "02ed4bc91b91a510a221ddb7ab4bcba8",
										"label": "PwC Japan IAC"
									},
									{
										"id": "c6ed4bc91b91a510a221ddb7ab4bcba8",
										"label": "PwC Jordan"
									},
									{
										"id": "42ed4bc91b91a510a221ddb7ab4bcba9",
										"label": "PwC Kazakhstan"
									},
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcbaa",
										"label": "PwC Kenya"
									},
									{
										"id": "ceed4bc91b91a510a221ddb7ab4bcbaa",
										"label": "PwC Kosovo"
									},
									{
										"id": "86ed4bc91b91a510a221ddb7ab4bcbab",
										"label": "PwC Kuwait"
									},
									{
										"id": "4eed4bc91b91a510a221ddb7ab4bcbab",
										"label": "PwC Kyrgyzstan"
									},
									{
										"id": "06ed4bc91b91a510a221ddb7ab4bcbac",
										"label": "PwC Laos"
									},
									{
										"id": "caed4bc91b91a510a221ddb7ab4bcbac",
										"label": "PwC Latvia"
									},
									{
										"id": "82ed4bc91b91a510a221ddb7ab4bcbad",
										"label": "PwC Lebanon"
									},
									{
										"id": "4aed4bc91b91a510a221ddb7ab4bcbad",
										"label": "PwC Lesotho"
									},
									{
										"id": "02ed4bc91b91a510a221ddb7ab4bcbae",
										"label": "PwC Liberia"
									},
									{
										"id": "8eed4bc91b91a510a221ddb7ab4bcbba",
										"label": "PwC Libya"
									},
									{
										"id": "46ed4bc91b91a510a221ddb7ab4bcbbb",
										"label": "PwC Liechtenstein"
									},
									{
										"id": "0eed4bc91b91a510a221ddb7ab4bcbbb",
										"label": "PwC Lithuania"
									},
									{
										"id": "c2ed4bc91b91a510a221ddb7ab4bcbbc",
										"label": "PwC Luxembourg"
									},
									{
										"id": "8aed4bc91b91a510a221ddb7ab4bcbbc",
										"label": "PwC Macedonia"
									},
									{
										"id": "42ed4bc91b91a510a221ddb7ab4bcbbd",
										"label": "PwC Madagascar"
									},
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcbbd",
										"label": "PwC Malawi"
									},
									{
										"id": "ceed4bc91b91a510a221ddb7ab4bcbbd",
										"label": "PwC Malaysia"
									},
									{
										"id": "86ed4bc91b91a510a221ddb7ab4bcbbe",
										"label": "PwC Maldives"
									},
									{
										"id": "4eed4bc91b91a510a221ddb7ab4bcbbe",
										"label": "PwC Malta"
									},
									{
										"id": "06ed4bc91b91a510a221ddb7ab4bcbbf",
										"label": "PwC Martinique"
									},
									{
										"id": "caed4bc91b91a510a221ddb7ab4bcbbf",
										"label": "PwC Mauritius"
									},
									{
										"id": "82ed4bc91b91a510a221ddb7ab4bcbc0",
										"label": "PwC Mexico"
									},
									{
										"id": "4aed4bc91b91a510a221ddb7ab4bcbc0",
										"label": "PwC Moldova"
									},
									{
										"id": "02ed4bc91b91a510a221ddb7ab4bcbc1",
										"label": "PwC Monaco"
									},
									{
										"id": "c6ed4bc91b91a510a221ddb7ab4bcbc1",
										"label": "PwC Mongolia"
									},
									{
										"id": "8eed4bc91b91a510a221ddb7ab4bcbc1",
										"label": "PwC Montenegro"
									},
									{
										"id": "46ed4bc91b91a510a221ddb7ab4bcbc2",
										"label": "PwC Morocco"
									},
									{
										"id": "1eed4bc91b91a510a221ddb7ab4bcbc2",
										"label": "PwC Mozambique"
									},
									{
										"id": "d2ed4bc91b91a510a221ddb7ab4bcbc3",
										"label": "PwC Myanmar"
									},
									{
										"id": "9aed4bc91b91a510a221ddb7ab4bcbc3",
										"label": "PwC Namibia"
									},
									{
										"id": "52ed4bc91b91a510a221ddb7ab4bcbc4",
										"label": "PwC Netherlands"
									},
									{
										"id": "1aed4bc91b91a510a221ddb7ab4bcbc4",
										"label": "PwC Netherlands Antillies"
									},
									{
										"id": "deed4bc91b91a510a221ddb7ab4bcbc4",
										"label": "PwC New Caledonia"
									},
									{
										"id": "96ed4bc91b91a510a221ddb7ab4bcbc5",
										"label": "PwC New Zealand"
									},
									{
										"id": "5eed4bc91b91a510a221ddb7ab4bcbc5",
										"label": "PwC Nicaragua"
									},
									{
										"id": "16ed4bc91b91a510a221ddb7ab4bcbc6",
										"label": "PwC Nigeria"
									},
									{
										"id": "daed4bc91b91a510a221ddb7ab4bcbc6",
										"label": "PwC Northern Ireland"
									},
									{
										"id": "92ed4bc91b91a510a221ddb7ab4bcbc7",
										"label": "PwC Norway"
									},
									{
										"id": "5aed4bc91b91a510a221ddb7ab4bcbc7",
										"label": "PwC Oceania"
									},
									{
										"id": "12ed4bc91b91a510a221ddb7ab4bcbc8",
										"label": "PwC Oman"
									},
									{
										"id": "d6ed4bc91b91a510a221ddb7ab4bcbc8",
										"label": "PwC Pakistan"
									},
									{
										"id": "9eed4bc91b91a510a221ddb7ab4bcbc8",
										"label": "PwC Panama"
									},
									{
										"id": "56ed4bc91b91a510a221ddb7ab4bcbc9",
										"label": "PwC Papua New Guinea"
									},
									{
										"id": "1eed4bc91b91a510a221ddb7ab4bcbc9",
										"label": "PwC Paraguay"
									},
									{
										"id": "d2ed4bc91b91a510a221ddb7ab4bcbca",
										"label": "PwC Peru"
									},
									{
										"id": "9aed4bc91b91a510a221ddb7ab4bcbca",
										"label": "PwC Philippines"
									},
									{
										"id": "52ed4bc91b91a510a221ddb7ab4bcbcb",
										"label": "PwC Poland"
									},
									{
										"id": "1aed4bc91b91a510a221ddb7ab4bcbcb",
										"label": "PwC Portugal"
									},
									{
										"id": "deed4bc91b91a510a221ddb7ab4bcbcb",
										"label": "PwC Puerto Rico"
									},
									{
										"id": "96ed4bc91b91a510a221ddb7ab4bcbcc",
										"label": "PwC Qatar"
									},
									{
										"id": "5eed4bc91b91a510a221ddb7ab4bcbcc",
										"label": "PwC Republic of Congo"
									},
									{
										"id": "16ed4bc91b91a510a221ddb7ab4bcbcd",
										"label": "PwC Republic of Guinea"
									},
									{
										"id": "daed4bc91b91a510a221ddb7ab4bcbcd",
										"label": "PwC Reunion"
									},
									{
										"id": "92ed4bc91b91a510a221ddb7ab4bcbce",
										"label": "PwC Romania"
									},
									{
										"id": "5aed4bc91b91a510a221ddb7ab4bcbce",
										"label": "PwC Rwanda"
									},
									{
										"id": "12ed4bc91b91a510a221ddb7ab4bcbcf",
										"label": "PwC Saba"
									},
									{
										"id": "d6ed4bc91b91a510a221ddb7ab4bcbcf",
										"label": "PwC Saipan"
									},
									{
										"id": "9eed4bc91b91a510a221ddb7ab4bcbcf",
										"label": "PwC Saudi Arabia"
									},
									{
										"id": "56ed4bc91b91a510a221ddb7ab4bcbd0",
										"label": "PwC Senegal"
									},
									{
										"id": "1eed4bc91b91a510a221ddb7ab4bcbd0",
										"label": "PwC Serbia"
									},
									{
										"id": "d2ed4bc91b91a510a221ddb7ab4bcbd1",
										"label": "PwC Service Delivery Network (SDN) [Grouping]"
									},
									{
										"id": "9aed4bc91b91a510a221ddb7ab4bcbd1",
										"label": "PwC Seychelles"
									},
									{
										"id": "52ed4bc91b91a510a221ddb7ab4bcbd2",
										"label": "PwC Sierra Leone"
									},
									{
										"id": "1aed4bc91b91a510a221ddb7ab4bcbd2",
										"label": "PwC Singapore"
									},
									{
										"id": "deed4bc91b91a510a221ddb7ab4bcbd2",
										"label": "PwC Slovak Republic"
									},
									{
										"id": "96ed4bc91b91a510a221ddb7ab4bcbd3",
										"label": "PwC Slovenia"
									},
									{
										"id": "5eed4bc91b91a510a221ddb7ab4bcbd3",
										"label": "PwC South Africa"
									},
									{
										"id": "16ed4bc91b91a510a221ddb7ab4bcbd4",
										"label": "PwC South Korea"
									},
									{
										"id": "daed4bc91b91a510a221ddb7ab4bcbd4",
										"label": "PwC Southern Africa [Grouping]"
									},
									{
										"id": "92ed4bc91b91a510a221ddb7ab4bcbd5",
										"label": "PwC Spain"
									},
									{
										"id": "5aed4bc91b91a510a221ddb7ab4bcbd5",
										"label": "PwC Sri Lanka"
									},
									{
										"id": "12ed4bc91b91a510a221ddb7ab4bcbd6",
										"label": "PwC Sri Lanka [Grouping]"
									},
									{
										"id": "d6ed4bc91b91a510a221ddb7ab4bcbd6",
										"label": "PwC St Eustatius"
									},
									{
										"id": "9eed4bc91b91a510a221ddb7ab4bcbd6",
										"label": "PwC St Maarten"
									},
									{
										"id": "56ed4bc91b91a510a221ddb7ab4bcbd7",
										"label": "PwC St Pierre and Miquelon"
									},
									{
										"id": "1d9d12c91b466950a221ddb7ab4bcb8d",
										"label": "PwC Strategy& (Austria) GmbH"
									},
									{
										"id": "1eed4bc91b91a510a221ddb7ab4bcbd7",
										"label": "PwC Swaziland"
									},
									{
										"id": "d2ed4bc91b91a510a221ddb7ab4bcbd8",
										"label": "PwC Sweden"
									},
									{
										"id": "9aed4bc91b91a510a221ddb7ab4bcbd8",
										"label": "PwC Switzerland"
									},
									{
										"id": "52ed4bc91b91a510a221ddb7ab4bcbd9",
										"label": "PwC Switzerland [Grouping]"
									},
									{
										"id": "1aed4bc91b91a510a221ddb7ab4bcbd9",
										"label": "PwC Tahiti (French Polynesia) [Do Not Use]"
									},
									{
										"id": "deed4bc91b91a510a221ddb7ab4bcbd9",
										"label": "PwC Taiwan"
									},
									{
										"id": "96ed4bc91b91a510a221ddb7ab4bcbda",
										"label": "PwC Tanzania"
									},
									{
										"id": "5eed4bc91b91a510a221ddb7ab4bcbda",
										"label": "PwC Thailand"
									},
									{
										"id": "16ed4bc91b91a510a221ddb7ab4bcbdb",
										"label": "PwC Timor Leste (East Timor)"
									},
									{
										"id": "daed4bc91b91a510a221ddb7ab4bcbdb",
										"label": "PwC Trinidad and Tobago"
									},
									{
										"id": "92ed4bc91b91a510a221ddb7ab4bcbdc",
										"label": "PwC Tunisia"
									},
									{
										"id": "5aed4bc91b91a510a221ddb7ab4bcbdc",
										"label": "PwC Turkey"
									},
									{
										"id": "12ed4bc91b91a510a221ddb7ab4bcbdd",
										"label": "PwC Turkmenistan"
									},
									{
										"id": "d6ed4bc91b91a510a221ddb7ab4bcbdd",
										"label": "PwC Turks and Caicos"
									},
									{
										"id": "9eed4bc91b91a510a221ddb7ab4bcbdd",
										"label": "PwC Uganda"
									},
									{
										"id": "56ed4bc91b91a510a221ddb7ab4bcbde",
										"label": "PwC Ukraine"
									},
									{
										"id": "1eed4bc91b91a510a221ddb7ab4bcbde",
										"label": "PwC United Arab Emirates (UAE)"
									},
									{
										"id": "d2ed4bc91b91a510a221ddb7ab4bcbdf",
										"label": "PwC United Kingdom"
									},
									{
										"id": "9aed4bc91b91a510a221ddb7ab4bcbdf",
										"label": "PwC United Kingdom and United Kingdom Offshore [Grouping]"
									},
									{
										"id": "52ed4bc91b91a510a221ddb7ab4bcbe0",
										"label": "PwC United Kingdom Offshore [Grouping]"
									},
									{
										"id": "1aed4bc91b91a510a221ddb7ab4bcbe0",
										"label": "PwC United Kingdom [Grouping]"
									},
									{
										"id": "deed4bc91b91a510a221ddb7ab4bcbe0",
										"label": "PwC United States of America"
									},
									{
										"id": "96ed4bc91b91a510a221ddb7ab4bcbe1",
										"label": "PwC Uruguay"
									},
									{
										"id": "5eed4bc91b91a510a221ddb7ab4bcbe1",
										"label": "PwC US Virgin Islands"
									},
									{
										"id": "d6ed4bc91b91a510a221ddb7ab4bcbe2",
										"label": "PwC Uzbekistan"
									},
									{
										"id": "56ed4bc91b91a510a221ddb7ab4bcbe3",
										"label": "PwC Venezuela"
									},
									{
										"id": "1eed4bc91b91a510a221ddb7ab4bcbe3",
										"label": "PwC Vietnam"
									},
									{
										"id": "d2ed4bc91b91a510a221ddb7ab4bcbe4",
										"label": "PwC West Bank and Gaza"
									},
									{
										"id": "9aed4bc91b91a510a221ddb7ab4bcbe4",
										"label": "PwC Yemen [Do Not Use]"
									},
									{
										"id": "aea829781bb77410a221ddb7ab4bcb2e",
										"label": "PwC Yeminli Mali Musavirlik A.S."
									},
									{
										"id": "52ed4bc91b91a510a221ddb7ab4bcbe5",
										"label": "PwC Zambia"
									},
									{
										"id": "1aed4bc91b91a510a221ddb7ab4bcbe5",
										"label": "PwC Zimbabwe"
									},
									{
										"id": "1690a013db71615002fc5117f396196f",
										"label": "PWC112233445566"
									},
									{
										"id": "d690a013db71615002fc5117f39619e2",
										"label": "PWC201116135001"
									},
									{
										"id": "129068971bb96150a221ddb7ab4bcbb9",
										"label": "PWC201202071849"
									},
									{
										"id": "c0702013db71615002fc5117f396198b",
										"label": "PWC201210060212"
									},
									{
										"id": "3e45c089dbab8c501d5873e3f3961972",
										"label": "QLogic"
									},
									{
										"id": "be370d1ddbcb00101d5873e3f3961959",
										"label": "QNAP"
									},
									{
										"id": "00680f1adb5344501d5873e3f39619d9",
										"label": "Qualys"
									},
									{
										"id": "31c58d84db8098101d5873e3f3961913",
										"label": "Quest Software"
									},
									{
										"id": "aafa0efa1bf39d10a221ddb7ab4bcb80",
										"label": "Rainer Hidalgo"
									},
									{
										"id": "c6ad71231b78e150a221ddb7ab4bcbf2",
										"label": "Ramona Teresa Henn"
									},
									{
										"id": "9c6bc2d81bd15510a221ddb7ab4bcb07",
										"label": "Rania Aoulad"
									},
									{
										"id": "c76591f31b541110a221ddb7ab4bcb08",
										"label": "Raphael Köpfli"
									},
									{
										"id": "524180b71be50d10a221ddb7ab4bcbc5",
										"label": "Raya AL-Halaseh"
									},
									{
										"id": "b94042c11b849c10a221ddb7ab4bcb81",
										"label": "Red Gate Software"
									},
									{
										"id": "0ed4884d1b278490a221ddb7ab4bcb7b",
										"label": "Red Hat"
									},
									{
										"id": "afcad9cedb1a915002fc5117f3961913",
										"label": "Reka Aschenbrenner"
									},
									{
										"id": "1e21ee111b347510a221ddb7ab4bcb92",
										"label": "Ricardo Meschke"
									},
									{
										"id": "42d8cd9ddbcb00101d5873e3f3961984",
										"label": "Rimage"
									},
									{
										"id": "1c73424ddbc05c101d5873e3f3961966",
										"label": "Ringtail"
									},
									{
										"id": "843a72571b717d10a221ddb7ab4bcbde",
										"label": "Rivka Hanis"
									},
									{
										"id": "4cad5804dba5351402fc5117f39619c6",
										"label": "Robert Wegner"
									},
									{
										"id": "72370d1ddbcb00101d5873e3f396195d",
										"label": "Roland"
									},
									{
										"id": "066588dcdb7aad9002fc5117f3961906",
										"label": "Romy Griziaux"
									},
									{
										"id": "32aa84221bc20150a221ddb7ab4bcb9e",
										"label": "Ronja Julia Dertinger"
									},
									{
										"id": "7e370d1ddbcb00101d5873e3f3961961",
										"label": "RSA"
									},
									{
										"id": "bb388ec21b415990a221ddb7ab4bcb7e",
										"label": "Sabrina Kempter"
									},
									{
										"id": "153ffd411b849c10a221ddb7ab4bcb47",
										"label": "SafeNet"
									},
									{
										"id": "d66e83d5db0109101d5873e3f3961930",
										"label": "Said El Masry"
									},
									{
										"id": "f89490c11b809c10a221ddb7ab4bcbc5",
										"label": "SAP AG"
									},
									{
										"id": "65104245dbc05c101d5873e3f396191c",
										"label": "SAP BusinessObjects"
									},
									{
										"id": "bc08187d1b450910a221ddb7ab4bcbf6",
										"label": "Sarah Konnerth"
									},
									{
										"id": "6c27ee431b05e510a221ddb7ab4bcb5b",
										"label": "Sarah Michelle Weber"
									},
									{
										"id": "2c755aaadb2ee59002fc5117f396199e",
										"label": "Sascha Wulf"
									},
									{
										"id": "1d94c2091b849c10a221ddb7ab4bcba7",
										"label": "Schomäcker GmbH"
									},
									{
										"id": "86eebd81dbc05c101d5873e3f396191e",
										"label": "SEAL Systems"
									},
									{
										"id": "79140f691bf8e910a221ddb7ab4bcbc3",
										"label": "Sebastiaan Peetermans"
									},
									{
										"id": "af056b681bc75110a221ddb7ab4bcbc9",
										"label": "Sebastian Zirngibl"
									},
									{
										"id": "e6a77f1b1b9a3510a221ddb7ab4bcb01",
										"label": "Selina Aichinger"
									},
									{
										"id": "036b18b61bc9d990a221ddb7ab4bcb3e",
										"label": "Semira Olgac"
									},
									{
										"id": "a0780b67dbec911002fc5117f3961972",
										"label": "Senad Zeric"
									},
									{
										"id": "0b370d1ddbcb00101d5873e3f3961994",
										"label": "Sennheiser"
									},
									{
										"id": "01d49dd71b878910a221ddb7ab4bcba4",
										"label": "Sennheiser electronic GmbH & Co. KG"
									},
									{
										"id": "cdcef6cedb1c89101d5873e3f3961968",
										"label": "Seon-Ho Kim"
									},
									{
										"id": "69543aafdb2a751002fc5117f39619a7",
										"label": "Seycan Rafailovic"
									},
									{
										"id": "854f31811b849c10a221ddb7ab4bcb0b",
										"label": "Sharegate"
									},
									{
										"id": "972fbd411b849c10a221ddb7ab4bcb66",
										"label": "SharePoint PnP"
									},
									{
										"id": "8b370d1ddbcb00101d5873e3f3961997",
										"label": "Sharp"
									},
									{
										"id": "cfcab508dbfc351002fc5117f3961933",
										"label": "Shelley Beeson"
									},
									{
										"id": "f4eaa90e1bcca950a221ddb7ab4bcbf3",
										"label": "Shipra Pant"
									},
									{
										"id": "c7370d1ddbcb00101d5873e3f39619aa",
										"label": "Shure"
									},
									{
										"id": "fed089c71bd57d90a221ddb7ab4bcb96",
										"label": "Sibe Van Hullebus"
									},
									{
										"id": "d55a78b3db8d211002fc5117f3961918",
										"label": "Simon Weiland"
									},
									{
										"id": "578fc0741b7f5510a221ddb7ab4bcbf5",
										"label": "SimonTatham"
									},
									{
										"id": "630e6a221b45f950a221ddb7ab4bcb3e",
										"label": "smartvokat GmbH"
									},
									{
										"id": "36f30d151b2539d0a221ddb7ab4bcb54",
										"label": "Sofia Jakobsen"
									},
									{
										"id": "c923c60ddbc05c101d5873e3f396198a",
										"label": "Softland"
									},
									{
										"id": "b3325214dbb1251002fc5117f396195e",
										"label": "Software"
									},
									{
										"id": "8b370d1ddbcb00101d5873e3f39619b9",
										"label": "Sonus"
									},
									{
										"id": "5522de10dbc805101d5873e3f3961985",
										"label": "Sophia Feldl"
									},
									{
										"id": "5a0294481b705150a221ddb7ab4bcbed",
										"label": "Sophie Doll"
									},
									{
										"id": "356935891bfa4910a221ddb7ab4bcbc7",
										"label": "Sophie Paul"
									},
									{
										"id": "80680f1adb5344501d5873e3f39619d6",
										"label": "Splunk"
									},
									{
										"id": "3d4d82f2db61295002fc5117f3961987",
										"label": "SpringWorker MarSixthF"
									},
									{
										"id": "fd4042c11b849c10a221ddb7ab4bcb7f",
										"label": "SQL Sentry, LLC"
									},
									{
										"id": "c123c60ddbc05c101d5873e3f3961989",
										"label": "Standardfirmenname"
									},
									{
										"id": "0f370d1ddbcb00101d5873e3f39619bc",
										"label": "Star Micronics"
									},
									{
										"id": "618df74b1b293114a221ddb7ab4bcb6d",
										"label": "Stella Marie Goerz"
									},
									{
										"id": "0522b8701b241510a221ddb7ab4bcb96",
										"label": "Stephan Hollweg"
									},
									{
										"id": "7944bdbc1b6c2150a221ddb7ab4bcba8",
										"label": "Sultan Tuncel"
									},
									{
										"id": "0d0cbb951b1a2150a221ddb7ab4bcb04",
										"label": "Syed Hasan Abid"
									},
									{
										"id": "d1b40cb4dbb9d51002fc5117f3961940",
										"label": "Tabea Marschall"
									},
									{
										"id": "cf370d1ddbcb00101d5873e3f39619bf",
										"label": "Tandberg"
									},
									{
										"id": "8ee47c291bd31550a221ddb7ab4bcb7c",
										"label": "Tanner Engmann"
									},
									{
										"id": "1f370d1ddbcb00101d5873e3f39619c4",
										"label": "Tascam"
									},
									{
										"id": "83811b6bdb4909101d5873e3f3961981",
										"label": "Tatiana Filceva"
									},
									{
										"id": "9f370d1ddbcb00101d5873e3f39619c7",
										"label": "TechniSat"
									},
									{
										"id": "13370d1ddbcb00101d5873e3f39619cb",
										"label": "Telekom"
									},
									{
										"id": "fe74297adb9a711002fc5117f39619a8",
										"label": "TELEPASS SPA"
									},
									{
										"id": "f0653e571b7f7010a221ddb7ab4bcbce",
										"label": "Test Strategy"
									},
									{
										"id": "5726510e1b764d10a221ddb7ab4bcbda",
										"label": "Test Supplier 01"
									},
									{
										"id": "19cfde1a1b7a8d10a221ddb7ab4bcb84",
										"label": "Test Wiedereintritt"
									},
									{
										"id": "8470e4971bb96150a221ddb7ab4bcb8c",
										"label": "TESTDEVICE01"
									},
									{
										"id": "24e1eb561bfa1550a221ddb7ab4bcb9a",
										"label": "Thao Thu Tran"
									},
									{
										"id": "d8208e811b849c10a221ddb7ab4bcbaa",
										"label": "The GnuPG Project"
									},
									{
										"id": "d0208e811b849c10a221ddb7ab4bcba9",
										"label": "The Gpg4win Project"
									},
									{
										"id": "6a31dc79db92515002fc5117f39619fe",
										"label": "Thea Wittemann"
									},
									{
										"id": "f1fdd379db9c651002fc5117f3961999",
										"label": "Thomas Grau"
									},
									{
										"id": "f49bc3711b381950a221ddb7ab4bcb6c",
										"label": "Thomas Kopilow"
									},
									{
										"id": "4372aca51b378910db8e40cfbb4bcbe2",
										"label": "Thorsten Leisinger"
									},
									{
										"id": "023d33181b752510a221ddb7ab4bcbf4",
										"label": "Tiago Mendes"
									},
									{
										"id": "ab7a5c311b553990a221ddb7ab4bcb3e",
										"label": "Tim Majczyna"
									},
									{
										"id": "43d742a4db3f551002fc5117f3961930",
										"label": "Tim Oehrle"
									},
									{
										"id": "b5b7c23d1b9a7110a221ddb7ab4bcb8a",
										"label": "Tim Rozendaal"
									},
									{
										"id": "94945969db4e591002fc5117f3961911",
										"label": "Tim Tolle"
									},
									{
										"id": "3092251c1b4e6550a221ddb7ab4bcb50",
										"label": "Tobias Zichner"
									},
									{
										"id": "fa25d012db349d1002fc5117f396196e",
										"label": "Tom-Li Kämper"
									},
									{
										"id": "9b2ec3b7db06f51002fc5117f3961910",
										"label": "Tommy Haberstroh"
									},
									{
										"id": "3a7ba0badb769d1002fc5117f39619bf",
										"label": "Toshiyuki Ando"
									},
									{
										"id": "22ea90e21b123110a221ddb7ab4bcb59",
										"label": "Toufik Al Khawli"
									},
									{
										"id": "0eed85231b58e910a221ddb7ab4bcbd0",
										"label": "Tugba Dogan"
									},
									{
										"id": "8e856de61b2bb050a221ddb7ab4bcb0f",
										"label": "UBS Switzerland AG"
									},
									{
										"id": "deed4bc91b91a510a221ddb7ab4bcbe5",
										"label": "US PwC Service Delivery Centres (SDC) [Grouping]"
									},
									{
										"id": "bffd055adb7581101d5873e3f3961902",
										"label": "Varun Vijay Kumar"
									},
									{
										"id": "365f3851db46a95002fc5117f39619fa",
										"label": "Veit Friedrich Lux"
									},
									{
										"id": "7b325214dbb1251002fc5117f396195f",
										"label": "Verdasys"
									},
									{
										"id": "093bcbd4db2bd19002fc5117f39619fe",
										"label": "Veronika Mucke"
									},
									{
										"id": "ac7e33801be91550a221ddb7ab4bcbeb",
										"label": "Victoria Egupova"
									},
									{
										"id": "d5ddd9eddb0d719002fc5117f3961928",
										"label": "Victoria Lippert"
									},
									{
										"id": "7b1be2eb1b675110a221ddb7ab4bcb08",
										"label": "Victoria Lynn Roos"
									},
									{
										"id": "d7370d1ddbcb00101d5873e3f39619d4",
										"label": "ViewSonic"
									},
									{
										"id": "cbf4d0a31b700110a221ddb7ab4bcb84",
										"label": "Vita Shtypa"
									},
									{
										"id": "4755f5f51bb625d0a221ddb7ab4bcb3c",
										"label": "Vladyslav Popal"
									},
									{
										"id": "d958cbd61b9b4c50a221ddb7ab4bcb75",
										"label": "VMware"
									},
									{
										"id": "6e4a24c9db8c1c101d5873e3f3961969",
										"label": "VMware Virtual RAM"
									},
									{
										"id": "5d58cbd61b9b4c50a221ddb7ab4bcb24",
										"label": "VMware, Inc."
									},
									{
										"id": "698f40741b7f5510a221ddb7ab4bcbcf",
										"label": "WalkMe"
									},
									{
										"id": "3e8f80741b7f5510a221ddb7ab4bcbc6",
										"label": "WinZip"
									},
									{
										"id": "768f80741b7f5510a221ddb7ab4bcbc7",
										"label": "WinZip Computing, S.L"
									},
									{
										"id": "d094764d1ba98110a221ddb7ab4bcb56",
										"label": "WorkerJan SurnameFA"
									},
									{
										"id": "cad8cd9ddbcb00101d5873e3f396199d",
										"label": "Xerox"
									},
									{
										"id": "5b370d1ddbcb00101d5873e3f39619d7",
										"label": "Yamaha"
									},
									{
										"id": "33f3ee3cdb89a51002fc5117f396195b",
										"label": "Yanne Rönnau"
									},
									{
										"id": "21b44ad6db631d9002fc5117f396191b",
										"label": "Yannick Wessel"
									},
									{
										"id": "05a78547db88619002fc5117f3961908",
										"label": "Yi Wei"
									},
									{
										"id": "502e02c5db80695002fc5117f396198f",
										"label": "Yolanda Beirão"
									},
									{
										"id": "cdd1db561b859990a221ddb7ab4bcb90",
										"label": "Yu Shao"
									},
									{
										"id": "ab5f71811b849c10a221ddb7ab4bcbaf",
										"label": "ZappySys LLC"
									},
									{
										"id": "9817ba091bbdb110a221ddb7ab4bcba4",
										"label": "定方 黄"
									}
								],
								"properties": {
									"tooltip": "",
									"type": "preloaded",
									"table": "core_company",
									"placeholder": "PwC ITSCo Germany,PwC Nigeria"
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "8bdeac74db8ae55002fc5117f3961909",
									"value": "germany_and_at_least_one_other_territory",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Which platforms will use the technology in Germany?",
								"name": "DR_Platform_label",
								"order": "255",
								"id": "c7441493db31615002fc5117f396194c",
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
								"name": "DR_Using_Platform_info",
								"order": "260",
								"id": "426941e4db343150e75a64ebd3961905",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">Please select all that apply. If the technology is used throughout the company, please select &#34;XPlatforms&#34;. </span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Using Platforms",
								"name": "DR_Using_Platform",
								"order": "265",
								"id": "15649c93db31615002fc5117f3961997",
								"hideLabel": true,
								"type": "now-typeahead-multi-choice",
								"value": [
									{
										"id": "assurance_solutions",
										"label": "Assurance Solutions"
									}
								],
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "xplatforms",
										"label": "XPlatforms"
									},
									{
										"id": "assurance_solutions",
										"label": "Assurance Solutions"
									},
									{
										"id": "business_services_finance",
										"label": "Business Services – Finance, Controlling & Engagement Mgmt."
									},
									{
										"id": "business_services_infrastructure",
										"label": "Business Services – Infrastructure"
									},
									{
										"id": "business_services_marketing",
										"label": "Business Services - Marketing & Communication"
									},
									{
										"id": "business_services_ogc_rm",
										"label": "Business Services - OGC/RM"
									},
									{
										"id": "business_services_p_t",
										"label": "Business Services - P&T"
									},
									{
										"id": "business_services_people",
										"label": "Business Services - People"
									},
									{
										"id": "business_services_procurement",
										"label": "Business Services - Procurement"
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
										"label": "Strategy&"
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
										"label": "Transformation"
									}
								],
								"properties": {
									"tooltip": "",
									"placeholder": "Assurance Solutions"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Will the technology be used within specified services setting? ",
								"name": "TA_DI_Specified Services Question",
								"order": "270",
								"id": "c87c2d191b75f1101fb51f8f8b4bcbb8",
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
								"label": "Specified Services Guidance",
								"name": "TA_DI_Specified Services Guidance",
								"order": "271",
								"id": "4b3dad591b75f1101fb51f8f8b4bcb0f",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><strong><span style=\"font-size: 10pt;\">If you are unsure, the extract below from the document <a href=\"https://pwceur.sharepoint.com/:w:/r/sites/GBL-xLoS-NRMPSimplificationandImplementation/_layouts/15/doc2.aspx?sourcedoc&#61;%7BBFD5478D-1560-4AE6-A015-079417DAF103%7D&amp;file&#61;NRMP%2036%20-%20Non-Audit%20Assurance%20Engagements-%2031_July%202022.docx&amp;action&#61;default&amp;mobileredirect&#61;true&amp;DefaultItemOpen&#61;1\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">&#34;NRMP 36 - Obligation to identify TLS and Advisory services subject to ISQM1</a>&#34; might help:</span></strong></p>\n<p><span style=\"font-size: 10pt;\">QUICK GUIDE AT A GLANCE - IS THE ENGAGEMENT A SPECIFIED SERVICE? <span style=\"color: #e03e2d;\">- RED FLAGS </span></span></p>\n<p><span style=\"font-size: 10pt;\">Are we expressing a conclusion or opinion, for example, “A (the subject matter) is in compliance/ in accordance with B (the criteria)”, “controls are designed/operating effectively”, the client’s statement is “fairly stated” or “has been made after due and careful enquiry”, “in our opinion A is in compliance with B”, “nothing came to our attention to indicate that A is not in compliance with B”. </span></p>\n<p><span style=\"font-size: 10pt;\">Does our deliverable include a &#39;statement that could reasonably be taken for a conclusion designed to enhance the degree of confidence of intended users about the subject matter information (that is, the outcome of the measurement or evaluation of an underlying subject matter against criteria)&#39;? Will the user be relying on a judgement made by a PwC firm? </span></p>\n<p><span style=\"font-size: 10pt;\">Is the client looking for an independent report that they can publish on a website or otherwise share with users other than the party responsible for the subject matter? </span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Specified Services Decision",
								"name": "TA_DI_Specified Services Decision",
								"order": "272",
								"id": "3ffe61d91b75f1101fb51f8f8b4bcbdc",
								"hideLabel": true,
								"type": "now-radio-buttons",
								"value": "no",
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
										"checked": true
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
								"label": "Specified Services Warning",
								"name": "TA_DI_Specified Services Warning",
								"order": "273",
								"id": "ae7fe91d1b75f1101fb51f8f8b4bcbd4",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"color: #e03e2d; font-size: 12pt;\"><strong>IMPORTANT INFORMATION</strong><br /><span style=\"font-size: 10pt;\">You have selected, that your technology will be used within a <strong>specified services setting</strong>. </span></span><br /><span style=\"color: #e03e2d; font-size: 10pt;\">In this case, you should <strong>contact the <a style=\"color: #e03e2d;\" href=\"https://yoda.pwc.de/pages/assurance-risk-quality-2/apps/content/risk-quality\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Assurance R&amp;Q</a> department </strong>to discuss the correct next steps. </span><br /><span style=\"color: #e03e2d; font-size: 10pt;\">All Assurance related technologies are currently assessed within the old MRA process. </span></p>"
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "3ffe61d91b75f1101fb51f8f8b4bcbdc",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Who will be the users of your technology?",
								"name": "DR_Technology_user_label",
								"order": "280",
								"id": "d000fcb4db8ae55002fc5117f396190d",
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
								"label": "Technology User",
								"name": "DR_Technology_user",
								"order": "281",
								"id": "882034f4db8ae55002fc5117f39619e2",
								"hideLabel": true,
								"type": "pwc-checklist",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "md",
									"checklist": [
										{
											"label": "Users from PwC Germany",
											"id": "1f3078f4db8ae55002fc5117f396199d",
											"explanation": "",
											"value": true
										},
										{
											"label": "Users from other PwC territories",
											"id": "1d40fcb4db8ae55002fc5117f39619e7",
											"explanation": "",
											"value": "false"
										},
										{
											"label": "Users from PwC clients",
											"id": "ec50b8f4db8ae55002fc5117f3961945",
											"explanation": "",
											"value": "false"
										},
										{
											"label": "Public users",
											"id": "3a50bcb4db8ae55002fc5117f39619c8",
											"explanation": "",
											"value": "false"
										}
									],
									"tooltip": "",
									"minNumberSelect": "0",
									"placeholder": "Users from PwC Germany"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "What is the use case of the technology?",
								"name": "DR_use_case_label",
								"order": "300",
								"id": "b7022ce91b3875503ab10edacd4bcb6e",
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
								"label": "Use Case Info",
								"name": "DR_use_case_info",
								"order": "301",
								"id": "da42202d1b3875503ab10edacd4bcbc1",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\"><strong>Internal</strong>: <br />used for internal operational purposes or is part of the IT infrastructure </span></p>\n<p><span style=\"font-size: 10pt;\"><strong>Accelerator:</strong> <br />used for service delivery to clients usually within an engagement</span></p>\n<p><span style=\"font-size: 10pt;\"><strong>Technology Offering/Products:</strong> <br />marketed/licensed to clients, either for a fee or for free (in the later case without additional services provided via an engagement)</span></p>\n<p><span style=\"font-size: 10pt;\"><strong>Blueprints/Model Systems</strong>: <br />used as a “starting point” for client specific customizations/implementations in the clients IT infrastructure </span></p>\n<p><span style=\"font-size: 10pt;\"><strong>Reselling</strong>: <br />third party technology which is provided to clients via an agreement with PwC for a licensing fee </span></p>\n<p><span style=\"font-size: 10pt;\"><strong>Referral</strong>: <br />third party technology which is provided to clients via a direct agreement with the vendor. PwC gets a brokerage commission based on a referral agreement with the vendor </span></p>\n<p><span style=\"font-size: 10pt;\"><strong>Technology Component for Golden Stack:</strong> <br />no stand alone technology, but rather a component meant to be used multiple times as a building block of other technologies. <a href=\"https://yoda.pwc.de/workspaces/architecture-decision-committee/apps/content/golden-stack\" rel=\"nofollow\">PwC Golden Stack</a> is a collection of standardized technologies recommended for use by the Architecture Decision Committee (ADC) </span></p>\n<p> </p>\n<p><span style=\"font-size: 10pt;\">Please select all that apply.</span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Technology Use Case",
								"name": "DR_use_case",
								"order": "302",
								"id": "158228e91b3875503ab10edacd4bcb22",
								"hideLabel": true,
								"type": "pwc-checklist",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "md",
									"checklist": [
										{
											"label": "Internal",
											"id": "6ab228e91b3875503ab10edacd4bcb6c",
											"explanation": "",
											"value": "false"
										},
										{
											"label": "Accelerator ",
											"id": "a7c2e42d1b3875503ab10edacd4bcb2d",
											"explanation": "",
											"value": "false"
										},
										{
											"label": "Technology Offering",
											"id": "1bd26c2d1b3875503ab10edacd4bcb04",
											"explanation": "",
											"value": "false"
										},
										{
											"label": "Client Customization/Implementation based on Blueprints/Model Systems",
											"id": "8ee22c2d1b3875503ab10edacd4bcbdb",
											"explanation": "",
											"value": "false"
										},
										{
											"label": "Reselling",
											"id": "df036c2d1b3875503ab10edacd4bcb42",
											"explanation": "",
											"value": "false"
										},
										{
											"label": "Referral",
											"id": "d113206d1b3875503ab10edacd4bcbda",
											"explanation": "",
											"value": true
										},
										{
											"label": "Technology Component for a Golden Stack",
											"id": "0c23206d1b3875503ab10edacd4bcba5",
											"explanation": "",
											"value": "false"
										}
									],
									"tooltip": "",
									"minNumberSelect": "0",
									"placeholder": "Referral"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "How scalable is the technology?",
								"name": "DR_Scalability_label",
								"order": "310",
								"id": "715aa18bdb21695002fc5117f396199e",
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
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "158228e91b3875503ab10edacd4bcb22-technology_offering",
									"value": "true",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Scalability",
								"name": "DR_Scalability",
								"order": "315",
								"id": "897a658bdb21695002fc5117f3961950",
								"hideLabel": true,
								"type": "now-select",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "one_specific_client",
										"label": "One specific client (customization)"
									},
									{
										"id": "2_10_clients",
										"label": "2 - 10 clients"
									},
									{
										"id": "11_100_clients",
										"label": "11 - 100 clients"
									},
									{
										"id": "more_than_100_clients",
										"label": "More than 100 clients"
									}
								],
								"properties": {
									"tooltip": ""
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "158228e91b3875503ab10edacd4bcb22-technology_offering",
									"value": "true",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "What is the distribution model of your technology?",
								"name": "DR_Technology_distribution_label",
								"order": "400",
								"id": "47b0f038db8ae55002fc5117f39619a1",
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
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "158228e91b3875503ab10edacd4bcb22-technology_offering",
									"value": "true",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Technology Distribution",
								"name": "DR_Technology_distribution",
								"order": "450",
								"id": "93d07cf4db8ae55002fc5117f3961936",
								"hideLabel": true,
								"type": "now-radio-buttons",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "software_as_a_service",
										"label": "Software as a Service",
										"checked": false
									},
									{
										"id": "licensing",
										"label": "Licensing",
										"checked": false
									},
									{
										"id": "webbrowser",
										"label": "Generally accessible with a Webbrowser via the Internet ",
										"checked": false
									}
								],
								"properties": {
									"layout": "vertical",
									"tooltip": "",
									"size": "md"
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "158228e91b3875503ab10edacd4bcb22-technology_offering",
									"value": "true",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Will the technology be used in connection with a specific industry?",
								"name": "DR_Technology_industry_label",
								"order": "500",
								"id": "8e317c38db8ae55002fc5117f39619e2",
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
								"label": "Technology industry description",
								"name": "DR_Technology_industry_description",
								"order": "525",
								"id": "5ed46a211b676d103ab10edacd4bcbfe",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">If you are already aware that your asset will process industry sector specific information please mark the applicable cases. PwC either already holds a certification for this sector and needs to maintain it, or is aiming to achieve a certification in the sector. The identifier helps us to recognize the applicable scope for audits and for the implementation or elimination of security controls.</span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Technology Industry",
								"name": "DR_Technology_industry",
								"order": "550",
								"id": "ef617c38db8ae55002fc5117f39619a1",
								"hideLabel": true,
								"type": "now-radio-buttons",
								"value": "none_of_the_above",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "automotive_tisax",
										"label": "Automotive (TISAX)",
										"checked": false
									},
									{
										"id": "public_sector_bsi_it_grundschutz",
										"label": "Public Sector (BSI IT Grundschutz)",
										"checked": false
									},
									{
										"id": "other",
										"label": "Other",
										"checked": false
									},
									{
										"id": "none_of_the_above",
										"label": "None of the above",
										"checked": true
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
								"label": "Please specify the industry and the specific requirements.",
								"name": "DR_Technology_industry_other_label",
								"order": "575",
								"id": "ca3de0e51b7875503ab10edacd4bcbd0",
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
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "ef617c38db8ae55002fc5117f39619a1",
									"value": "other",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Other industry specification",
								"name": "DR_Technology_industry_other",
								"order": "580",
								"id": "416dece51b7875503ab10edacd4bcb40",
								"hideLabel": true,
								"type": "now-textarea",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"show_counter": true,
									"maxlength": "2500",
									"resize": "vertical"
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "ef617c38db8ae55002fc5117f39619a1",
									"value": "other",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							}
						],
						"order": "1000",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
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
						"order": "1050",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": true,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
					},
					{
						"name": "Section Technology Setup",
						"questions": [
							{
								"label": "Technology Setup",
								"name": "Section Label",
								"order": "100",
								"id": "05114bc1db61f950e75a64ebd39619f5",
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
						"order": "1100",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
					},
					{
						"name": "Phase 0 - DR - Build Buy ",
						"questions": [
							{
								"label": "Do you plan to build a new or buy/rent an existing technology?",
								"name": "DR_Technology_BuildBuyRent_label",
								"order": "100",
								"id": "4ade5515dbf5291002fc5117f3961955",
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
								"label": "Build buy guidance",
								"name": "TA_DI_build buy guidance",
								"order": "110",
								"id": "857718bb1be9fd101fb51f8f8b4bcbd4",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\"><strong>Buy (COTS): <br /></strong>Acquiring Commercial Off-The-Shelf (COTS) software solutions that are readily available in the market. </span><br /><span style=\"font-size: 10pt;\">These software products are pre-built and designed to meet common industry needs.</span><br /><br /><span style=\"font-size: 10pt;\"><strong>Buy (COTS With PwC Customization):</strong> </span><br /><span style=\"font-size: 10pt;\">Purchase of COTS software tailored and customized to PwC&#39;s business needs.</span><br /><br /><span style=\"font-size: 10pt;\"><strong>Build (Custom Development by PwC):</strong> </span><br /><span style=\"font-size: 10pt;\">Custom development of software by PwC, e.g. when no existing software can meet PwC requirements.</span><br /><br /><span style=\"font-size: 10pt;\"><strong>Build (Custom Development by Third Party):</strong> </span><br /><span style=\"font-size: 10pt;\">Involves custom software development led by PwC, but a third-party development firm is engaged to create the software.</span><br /><br /><span style=\"font-size: 10pt;\"><strong>Rent (SaaS):</strong> </span><br /><span style=\"font-size: 10pt;\">Renting Software as a Service (SaaS) e.g. using cloud-based software applications provided by a vendor on a subscription basis.</span><br /><br /><span style=\"font-size: 10pt;\"><strong>Rent (SaaS With PwC Customization):</strong> </span><br /><span style=\"font-size: 10pt;\">SaaS solutions customized to better align with PwC requirements, ensuring a more tailored SaaS experience.</span></p>\n<p> </p>\n<p><span style=\"font-size: 10pt;\">Please select the best fit for the technology:</span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Please provide the name of the vendor",
								"name": "TA_Vendor_label",
								"order": "1000",
								"id": "6689254bdb21695002fc5117f3961904",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								},
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": {
										"type": "simple",
										"id": "920f9dd1dbf5291002fc5117f396193e",
										"value": "Rent",
										"cond_type": "==",
										"left": "",
										"right": ""
									},
									"right": {
										"type": "complex",
										"id": "",
										"value": "",
										"cond_type": "OR",
										"left": {
											"type": "simple",
											"id": "920f9dd1dbf5291002fc5117f396193e",
											"value": "RentCustomization",
											"cond_type": "==",
											"left": "",
											"right": ""
										},
										"right": {
											"type": "complex",
											"id": "",
											"value": "",
											"cond_type": "OR",
											"left": {
												"type": "simple",
												"id": "920f9dd1dbf5291002fc5117f396193e",
												"value": "BuyCustomization",
												"cond_type": "==",
												"left": "",
												"right": ""
											},
											"right": {
												"type": "simple",
												"id": "920f9dd1dbf5291002fc5117f396193e",
												"value": "Buy",
												"cond_type": "==",
												"left": "",
												"right": ""
											}
										}
									}
								}
							},
							{
								"label": "Product vendor",
								"name": "DR_Vendor_info",
								"order": "1025",
								"id": "9deb14cbdbe17590e75a64ebd396191a",
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
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": {
										"type": "simple",
										"id": "920f9dd1dbf5291002fc5117f396193e",
										"value": "Rent",
										"cond_type": "==",
										"left": "",
										"right": ""
									},
									"right": {
										"type": "complex",
										"id": "",
										"value": "",
										"cond_type": "OR",
										"left": {
											"type": "simple",
											"id": "920f9dd1dbf5291002fc5117f396193e",
											"value": "RentCustomization",
											"cond_type": "==",
											"left": "",
											"right": ""
										},
										"right": {
											"type": "complex",
											"id": "",
											"value": "",
											"cond_type": "OR",
											"left": {
												"type": "simple",
												"id": "920f9dd1dbf5291002fc5117f396193e",
												"value": "BuyCustomization",
												"cond_type": "==",
												"left": "",
												"right": ""
											},
											"right": {
												"type": "simple",
												"id": "920f9dd1dbf5291002fc5117f396193e",
												"value": "Buy",
												"cond_type": "==",
												"left": "",
												"right": ""
											}
										}
									}
								}
							},
							{
								"label": "Product vendor",
								"name": "TA_Vendor",
								"order": "1050",
								"id": "58a9254bdb21695002fc5117f396190c",
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
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": {
										"type": "simple",
										"id": "920f9dd1dbf5291002fc5117f396193e",
										"value": "Rent",
										"cond_type": "==",
										"left": "",
										"right": ""
									},
									"right": {
										"type": "complex",
										"id": "",
										"value": "",
										"cond_type": "OR",
										"left": {
											"type": "simple",
											"id": "920f9dd1dbf5291002fc5117f396193e",
											"value": "RentCustomization",
											"cond_type": "==",
											"left": "",
											"right": ""
										},
										"right": {
											"type": "complex",
											"id": "",
											"value": "",
											"cond_type": "OR",
											"left": {
												"type": "simple",
												"id": "920f9dd1dbf5291002fc5117f396193e",
												"value": "BuyCustomization",
												"cond_type": "==",
												"left": "",
												"right": ""
											},
											"right": {
												"type": "simple",
												"id": "920f9dd1dbf5291002fc5117f396193e",
												"value": "Buy",
												"cond_type": "==",
												"left": "",
												"right": ""
											}
										}
									}
								}
							},
							{
								"label": "Please provide the name of the product",
								"name": "TA_Product_name_label",
								"order": "1100",
								"id": "91c9e54bdb21695002fc5117f396199e",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								},
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": {
										"type": "simple",
										"id": "920f9dd1dbf5291002fc5117f396193e",
										"value": "Rent",
										"cond_type": "==",
										"left": "",
										"right": ""
									},
									"right": {
										"type": "complex",
										"id": "",
										"value": "",
										"cond_type": "OR",
										"left": {
											"type": "simple",
											"id": "920f9dd1dbf5291002fc5117f396193e",
											"value": "RentCustomization",
											"cond_type": "==",
											"left": "",
											"right": ""
										},
										"right": {
											"type": "complex",
											"id": "",
											"value": "",
											"cond_type": "OR",
											"left": {
												"type": "simple",
												"id": "920f9dd1dbf5291002fc5117f396193e",
												"value": "BuyCustomization",
												"cond_type": "==",
												"left": "",
												"right": ""
											},
											"right": {
												"type": "simple",
												"id": "920f9dd1dbf5291002fc5117f396193e",
												"value": "Buy",
												"cond_type": "==",
												"left": "",
												"right": ""
											}
										}
									}
								}
							},
							{
								"label": "Product name",
								"name": "TA_Product_name_info",
								"order": "1125",
								"id": "745c5c0fdbe17590e75a64ebd3961918",
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
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": {
										"type": "simple",
										"id": "920f9dd1dbf5291002fc5117f396193e",
										"value": "Rent",
										"cond_type": "==",
										"left": "",
										"right": ""
									},
									"right": {
										"type": "complex",
										"id": "",
										"value": "",
										"cond_type": "OR",
										"left": {
											"type": "simple",
											"id": "920f9dd1dbf5291002fc5117f396193e",
											"value": "RentCustomization",
											"cond_type": "==",
											"left": "",
											"right": ""
										},
										"right": {
											"type": "complex",
											"id": "",
											"value": "",
											"cond_type": "OR",
											"left": {
												"type": "simple",
												"id": "920f9dd1dbf5291002fc5117f396193e",
												"value": "BuyCustomization",
												"cond_type": "==",
												"left": "",
												"right": ""
											},
											"right": {
												"type": "simple",
												"id": "920f9dd1dbf5291002fc5117f396193e",
												"value": "Buy",
												"cond_type": "==",
												"left": "",
												"right": ""
											}
										}
									}
								}
							},
							{
								"label": "Product name",
								"name": "TA_Product_name",
								"order": "1150",
								"id": "4be9e94bdb21695002fc5117f39619e3",
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
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": {
										"type": "simple",
										"id": "920f9dd1dbf5291002fc5117f396193e",
										"value": "Rent",
										"cond_type": "==",
										"left": "",
										"right": ""
									},
									"right": {
										"type": "complex",
										"id": "",
										"value": "",
										"cond_type": "OR",
										"left": {
											"type": "simple",
											"id": "920f9dd1dbf5291002fc5117f396193e",
											"value": "RentCustomization",
											"cond_type": "==",
											"left": "",
											"right": ""
										},
										"right": {
											"type": "complex",
											"id": "",
											"value": "",
											"cond_type": "OR",
											"left": {
												"type": "simple",
												"id": "920f9dd1dbf5291002fc5117f396193e",
												"value": "BuyCustomization",
												"cond_type": "==",
												"left": "",
												"right": ""
											},
											"right": {
												"type": "simple",
												"id": "920f9dd1dbf5291002fc5117f396193e",
												"value": "Buy",
												"cond_type": "==",
												"left": "",
												"right": ""
											}
										}
									}
								}
							},
							{
								"label": "Does the initial adaptation/implementation effort (resources and costs) exceed the annual licence fees?",
								"name": "DR_custom_effort_label",
								"order": "2000",
								"id": "026d58a51b3875503ab10edacd4bcbac",
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
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": {
										"type": "simple",
										"id": "920f9dd1dbf5291002fc5117f396193e",
										"value": "BuyCustomization",
										"cond_type": "==",
										"left": "",
										"right": ""
									},
									"right": {
										"type": "simple",
										"id": "920f9dd1dbf5291002fc5117f396193e",
										"value": "RentCustomization",
										"cond_type": "==",
										"left": "",
										"right": ""
									}
								}
							},
							{
								"label": "Customization / implementation effort > license fees",
								"name": "DR_custom_effort",
								"order": "2100",
								"id": "8a6d58a51b3875503ab10edacd4bcbac",
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
									},
									{
										"id": "not_sure_yet",
										"label": "Not sure yet",
										"checked": false
									}
								],
								"properties": {
									"layout": "horizontal",
									"tooltip": "",
									"size": "md"
								},
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": {
										"type": "simple",
										"id": "920f9dd1dbf5291002fc5117f396193e",
										"value": "BuyCustomization",
										"cond_type": "==",
										"left": "",
										"right": ""
									},
									"right": {
										"type": "simple",
										"id": "920f9dd1dbf5291002fc5117f396193e",
										"value": "RentCustomization",
										"cond_type": "==",
										"left": "",
										"right": ""
									}
								}
							}
						],
						"order": "1200",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
					},
					{
						"name": "Phase 1 - TA - HLD",
						"questions": [
							{
								"label": "Please upload the high-level plan of  the technical setup",
								"name": "DR_HLD_label",
								"order": "225",
								"id": "22fa509bdb31615002fc5117f39619a0",
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
								"label": "High-Level Technical Setup Uploads",
								"name": "DR_HLD_upload",
								"order": "275",
								"id": "0febd09bdb31615002fc5117f39619f4",
								"hideLabel": true,
								"type": "pwc-attachment",
								"value": {
									"recordID": "2b042d5edb76b15002fc5117f39619c5",
									"tableName": "x_pwca2_0011077_values",
									"maxFileSize": "15",
									"allowedFileTypes": "all",
									"attachedFiles": []
								},
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {},
								"has_dependency": false,
								"dependency": {}
							}
						],
						"order": "1350",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
					},
					{
						"name": "Phase 0 - DR - Technology Usage  - GoLive Date",
						"questions": [
							{
								"label": "Timeline",
								"name": "DR_planned_golive_label",
								"order": "595",
								"id": "c9a17777db553550e75a64ebd396199c",
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
								"label": "When do you plan to go live?",
								"name": "DR_Target_go_live_label",
								"order": "600",
								"id": "69b1f878db8ae55002fc5117f39619d9",
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
								"label": "Target Go-Live",
								"name": "DR_Target_go_live",
								"order": "650",
								"id": "7ed13878db8ae55002fc5117f3961915",
								"hideLabel": true,
								"type": "now-radio-buttons",
								"value": "go_live_date_has_not_yet_been_set",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "within_the_next_three_months",
										"label": "Within the next three months",
										"checked": false
									},
									{
										"id": "within_the_next_three_to_six_months",
										"label": "Within the next three to six months",
										"checked": false
									},
									{
										"id": "more_than_six_months",
										"label": "More than six months",
										"checked": false
									},
									{
										"id": "go_live_date_has_not_yet_been_set",
										"label": "Go-live date has not yet been set",
										"checked": true
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
								"label": "Please briefly explain why your technology must go live within this timeframe.",
								"name": "DR_Target_go_live_description_label",
								"order": "700",
								"id": "15423c78db8ae55002fc5117f3961938",
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
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "7ed13878db8ae55002fc5117f3961915",
									"value": "within_the_next_three_months",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Target Go-Live Description",
								"name": "DR_Target_go_live_description",
								"order": "750",
								"id": "e062f0b8db8ae55002fc5117f39619f9",
								"hideLabel": true,
								"type": "now-textarea",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"show_counter": true,
									"maxlength": "2500",
									"resize": "vertical"
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "7ed13878db8ae55002fc5117f3961915",
									"value": "within_the_next_three_months",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "When is the application (planned) to be productive and in use?",
								"name": "DR_Go_live_date_label",
								"order": "800",
								"id": "2ce70acf1b50b5903ab10edacd4bcb6b",
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
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "7ed13878db8ae55002fc5117f3961915",
									"value": "go_live_date_has_not_yet_been_set",
									"cond_type": "!=",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Go-Live Date",
								"name": "DR_Go_live_date",
								"order": "850",
								"id": "cf388e431b90b5903ab10edacd4bcb53",
								"hideLabel": true,
								"type": "now-input",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"type": "date",
									"placeholder": "",
									"tooltip": ""
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "7ed13878db8ae55002fc5117f3961915",
									"value": "go_live_date_has_not_yet_been_set",
									"cond_type": "!=",
									"left": "",
									"right": ""
								}
							}
						],
						"order": "1400",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
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
						"order": "4999",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": true,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "624dc8c8dbe53550e75a64ebd396193d",
							"value": "yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
					},
					{
						"name": "Phase 1 - TA - ITA - Form",
						"questions": [
							{
								"label": "Initial Technology Assessment",
								"name": "IA_Initial_Technology_Assessment_label",
								"order": "4000",
								"id": "664b4848dbe53550e75a64ebd396192b",
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
								"label": "Can the request be covered with a technology already in use at PwC?",
								"name": "IA_Technology_similar_technology_setup_label",
								"order": "5000",
								"id": "335f187cdb2dad1002fc5117f3961936",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": true,
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
								"label": "Existing technology setup",
								"name": "IA_Technology_similar_technology_setup",
								"order": "7500",
								"id": "10af50bcdb2dad1002fc5117f39619b8",
								"hideLabel": true,
								"type": "now-radio-buttons",
								"value": "No",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "Yes",
										"label": "Yes",
										"checked": false
									},
									{
										"id": "No",
										"label": "No",
										"checked": true
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
								"label": "Please describe the technology setup, that can be used for this",
								"name": "IA_Technology_setup_label",
								"order": "8000",
								"id": "16ff18bcdb2dad1002fc5117f3961959",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-tertiary",
									"tooltip": ""
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "10af50bcdb2dad1002fc5117f39619b8",
									"value": "Yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Existing technology setup",
								"name": "IA_Technology_setup",
								"order": "8500",
								"id": "f72028bcdb2dad1002fc5117f396194b",
								"hideLabel": true,
								"type": "now-textarea",
								"value": "test",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"show_counter": true,
									"maxlength": "2500",
									"resize": "vertical"
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "10af50bcdb2dad1002fc5117f39619b8",
									"value": "Yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Should the process continue after your initial assessment?",
								"name": "IA_Technology_acceptance_label",
								"order": "10000",
								"id": "4b2fd47cdb2dad1002fc5117f3961990",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": true,
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
								"label": "Technology Acceptance",
								"name": "IA_Technology_acceptance",
								"order": "15000",
								"id": "bdbb5878db2dad1002fc5117f39619d2",
								"hideLabel": true,
								"type": "now-radio-buttons",
								"value": "Yes",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "Yes",
										"label": "Yes",
										"checked": true
									},
									{
										"id": "No",
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
								"label": "Project cancel notification",
								"name": "IA_Project cancel notification",
								"order": "16000",
								"id": "003707ab1b25fd101fb51f8f8b4bcb82",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\"><span style=\"font-size: 12pt;\"><span style=\"color: #e03e2d;\"><strong>Warning:</strong></span> </span>If you select &#34;No&#34; the TRA process for this technology will be cancelled.</span></p>"
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "bdbb5878db2dad1002fc5117f39619d2",
									"value": "No",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Please describe why the TRA process should be cancelled for this technology.",
								"name": "IA_Technology_acceptance_justification_label",
								"order": "17000",
								"id": "a2c91a72dbd9bd10e75a64ebd39619f9",
								"hideLabel": false,
								"type": "now-heading",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-tertiary",
									"tooltip": ""
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "bdbb5878db2dad1002fc5117f39619d2",
									"value": "No",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Technology Acceptance Justification",
								"name": "IA_Technology_acceptance_justification",
								"order": "17500",
								"id": "2549da32dbd9bd10e75a64ebd396196e",
								"hideLabel": true,
								"type": "now-textarea",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": true,
								"message": {
									"status": "critical",
									"icon": "diamond-exclamation-outline",
									"content": "Warning: If you select \"No\" the TRA process for this technology will be cancelled."
								},
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"show_counter": true,
									"maxlength": "2500",
									"resize": "vertical"
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "bdbb5878db2dad1002fc5117f39619d2",
									"value": "No",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							}
						],
						"order": "5000",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": ""
					},
					{
						"name": "Phase 1 - TA - ITA - TechExpert Assesment - Appearance needed?",
						"questions": [
							{
								"label": "Should the project be presented in the Technology Alignment call?",
								"name": "TA_ITA_TechExpert_assessment_appearance_label",
								"order": "100",
								"id": "3a1e1ddadb0db990e75a64ebd3961936",
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
								"label": "Tech Alignment Call Guidance",
								"name": "TA_ITA_ITA_Tech Alignment Call Guidance",
								"order": "110",
								"id": "81725004db293550e75a64ebd396194d",
								"hideLabel": true,
								"type": "now-rich-text",
								"value": "",
								"readOnly": false,
								"required": false,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">A project should always be presented in the Technology Alignment call if the technology selection has not yet been completed or aligned.</span></p>"
								},
								"has_dependency": false,
								"dependency": {}
							},
							{
								"label": "Appearance in Technology Alignment call ",
								"name": "TA_ITA_TechExpert_assessment_appearance",
								"order": "150",
								"id": "f21e1ddadb0db990e75a64ebd3961938",
								"hideLabel": true,
								"type": "now-radio-buttons",
								"value": "yes",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "yes",
										"label": "Yes",
										"checked": true
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
								"label": "Please explain why the Technology Alignment call can be skipped.",
								"name": "TA_ITA_TechExpert_assessment_skipping_reason_label",
								"order": "200",
								"id": "7dfa92f2dbd9bd10e75a64ebd3961952",
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
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "f21e1ddadb0db990e75a64ebd3961938",
									"value": "no",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Technology Assessment Skipping Reason",
								"name": "TA_ITA_TechExpert_assessment_skipping_reason",
								"order": "300",
								"id": "38af1112db4db990e75a64ebd39619aa",
								"hideLabel": true,
								"type": "now-textarea",
								"value": "",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"show_counter": true,
									"maxlength": "2500",
									"resize": "vertical"
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "f21e1ddadb0db990e75a64ebd3961938",
									"value": "no",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							}
						],
						"order": "5100",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": true,
						"dependency": {
							"type": "simple",
							"id": "bdbb5878db2dad1002fc5117f39619d2",
							"value": "Yes",
							"cond_type": "==",
							"left": "",
							"right": ""
						}
					},
					{
						"name": "Phase 1 - TA - ITA - TechExpert Assesment - Earliest Date",
						"questions": [
							{
								"label": "Earliest date the technology team can present in the Technology Alignment call?",
								"name": "TA_ITA_TechExpert_assessment_date_label",
								"order": "100",
								"id": "c30b1d1adb0db990e75a64ebd396192f",
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
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "f21e1ddadb0db990e75a64ebd3961938",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							},
							{
								"label": "Earliest date for Technology Alignment call",
								"name": "TA_ITA_TechExpert_assessment_date",
								"order": "125",
								"id": "0f0b1d1adb0db990e75a64ebd396192f",
								"hideLabel": true,
								"type": "now-input",
								"value": "2023-12-16",
								"readOnly": false,
								"required": true,
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"type": "date",
									"placeholder": "",
									"tooltip": ""
								},
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "f21e1ddadb0db990e75a64ebd3961938",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								}
							}
						],
						"order": "5200",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": ""
					}
				],
				"external_questions_values": {},
				"user_id": "00265235db6a259002fc5117f3961946",
				"project_id": "b60d1112db76b15002fc5117f39619f0",
				"active": "1",
				"has_values": true,
				"task_id": "d6b2c65edb3ab15002fc5117f3961968"
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