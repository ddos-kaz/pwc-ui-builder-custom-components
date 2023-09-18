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
		allAttachedFiles: [],
		filteredRequiredQuestions: [],
		questionSearchTables: {},
		hasRequiredQuestions: false,
		referenceOptions: [],
		referenceLabel: "",
		referenceValue: "",
		searchQuestionID: "",
		timestamp: "",
		displayRemoveFileModal: false,
		toRemoveFile: {}
	},
	properties: {
		compdata: {
			default:  {
				"status": 200,
				"error": "",
				"table": "x_pwca2_0011077_project",
				"sys_id": "cb595cee1b91f990a221ddb7ab4bcb65",
				"name": "Demand Registration",
				"question_sets": [
					{
						"name": "Phase 0 - DR - General Information",
						"questions": [
							{
								"label": "General information",
								"name": "DR_General_information_label",
								"order": "50",
								"id": "08bc58511ba32d103ab10edacd4bcb17",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "header-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "What is the name of your technology?",
								"name": "DR_Technology_name_label",
								"order": "100",
								"id": "08f31493db31615002fc5117f3961948",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Technology Name",
								"name": "DR_Technology_name",
								"order": "150",
								"id": "49145093db31615002fc5117f3961977",
								"hideLabel": true,
								"value": "Test",
								"readOnly": false,
								"required": true,
								"type": "now-input",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"type": "text",
									"placeholder": "",
									"tooltip": ""
								}
							},
							{
								"label": "Which platform is responsible for your technology?",
								"name": "DR_Platform_responsible_label",
								"order": "175",
								"id": "d296b67bdb247d10e75a64ebd396198a",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Responsible platform",
								"name": "DR_Platform_responsible",
								"order": "185",
								"id": "8307767bdb247d10e75a64ebd396197b",
								"hideLabel": true,
								"value": "consulting_solutions",
								"readOnly": false,
								"required": false,
								"type": "now-select",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "tax_legal_solutions",
										"label": "Tax & Legal Solutions"
									},
									{
										"id": "consulting_solutions",
										"label": "Consulting Solutions"
									},
									{
										"id": "business_services",
										"label": "Business Services"
									},
									{
										"id": "assurance_solutions",
										"label": "Assurance Solutions"
									}
								],
								"properties": {
									"tooltip": ""
								}
							},
							{
								"label": "Please specify the Consulting Platform.",
								"name": "DR_Platform_responsible_consulting_label",
								"order": "190",
								"id": "899d09e8db343150e75a64ebd39619c5",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "8307767bdb247d10e75a64ebd396197b",
									"value": "consulting_solutions",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Responsible consulting platform",
								"name": "DR_Platform_responsible_consulting",
								"order": "192",
								"id": "cffd412cdb343150e75a64ebd3961929",
								"hideLabel": true,
								"value": "\"deals\"",
								"readOnly": false,
								"required": false,
								"type": "now-select",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "8307767bdb247d10e75a64ebd396197b",
									"value": "consulting_solutions",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "risk_regulatory",
										"label": "Risk & Regulatory"
									},
									{
										"id": "strategy",
										"label": "Strategy&"
									},
									{
										"id": "sustainability_bas",
										"label": "Sustainability - BAS"
									},
									{
										"id": "risk_regulatory_bas",
										"label": "Risk & Regulatory - BAS"
									},
									{
										"id": "transformation_bas",
										"label": "Transformation - BAS"
									},
									{
										"id": "transformation",
										"label": "Transformation"
									},
									{
										"id": "sustainability",
										"label": "Sustainability"
									},
									{
										"id": "deals",
										"label": "Deals"
									},
									{
										"id": "cloud_digital",
										"label": "Cloud & Digital"
									}
								],
								"properties": {
									"tooltip": ""
								}
							},
							{
								"label": "Please specify the Business Services division.",
								"name": "DR_Platform_responsible_businessservices_label",
								"order": "195",
								"id": "efde096cdb343150e75a64ebd3961909",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "8307767bdb247d10e75a64ebd396197b",
									"value": "business_services",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Responsible business services platform",
								"name": "DR_Platform_responsible_businessservices",
								"order": "197",
								"id": "aa3f4d6cdb343150e75a64ebd39619ba",
								"hideLabel": true,
								"value": [
									"people"
								],
								"readOnly": false,
								"required": false,
								"type": "now-select",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "8307767bdb247d10e75a64ebd396197b",
									"value": "business_services",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "people",
										"label": "People    "
									},
									{
										"id": "operations",
										"label": "Operations"
									},
									{
										"id": "products_technology",
										"label": "Products & Technology"
									}
								],
								"properties": {
									"tooltip": ""
								}
							},
							{
								"label": "Which platforms will use your technology?",
								"name": "DR_Platform_label",
								"order": "200",
								"id": "c7441493db31615002fc5117f396194c",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Please select all that apply.",
								"name": "DR_Business_Platform_info",
								"order": "225",
								"id": "426941e4db343150e75a64ebd3961905",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-tertiary",
									"tooltip": ""
								}
							},
							{
								"label": "Business Platform",
								"name": "DR_Business_Platform",
								"order": "250",
								"id": "15649c93db31615002fc5117f3961997",
								"hideLabel": true,
								"value": [
									{
										"id": "BS_people",
										"label": "Business Services - People"
									},
									{
										"id": "BS_marketing_n_communications",
										"label": "Business Services - Marketing & Communications"
									}
								],
								"readOnly": false,
								"required": true,
								"type": "now-typeahead-multi-choice",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "assurance_solutions",
										"label": "Assurance Solutions"
									},
									{
										"id": "BS_chief_data_office",
										"label": "Business Services - Chief Data Office"
									},
									{
										"id": "BS_clients_n_market",
										"label": "Business Services - Clients & Market"
									},
									{
										"id": "BS_engagement_management",
										"label": "Business Services - Engagement Management"
									},
									{
										"id": "BS_facility_n_property",
										"label": "Business Services - Facility & Property Management"
									},
									{
										"id": "BS_finance_n_procurement",
										"label": "Business Services - Finance & Procurement"
									},
									{
										"id": "BS_marketing_n_communications",
										"label": "Business Services - Marketing & Communications"
									},
									{
										"id": "BS_ogc_rm",
										"label": "Business Services - OGC/RM"
									},
									{
										"id": "BS_people",
										"label": "Business Services - People"
									},
									{
										"id": "BS_products",
										"label": "Business Services - Products"
									},
									{
										"id": "BS_technology",
										"label": "Business Services - Technology"
									},
									{
										"id": "cloud_n_digital",
										"label": "Cloud & Digital"
									},
									{
										"id": "deals",
										"label": "Deals"
									},
									{
										"id": "risk_n_regulatory",
										"label": "Risk & Regulatory"
									},
									{
										"id": "strategy&",
										"label": "Strategy&"
									},
									{
										"id": "sustainability",
										"label": "Sustainability"
									},
									{
										"id": "tax_n_legal_solutions",
										"label": "Tax & Legal Solutions"
									},
									{
										"id": "transformation",
										"label": "Transformation"
									}
								],
								"properties": {
									"tooltip": "",
									"placeholder": "Business Services - People,Business Services - Marketing & Communications"
								}
							},
							{
								"label": "Divider",
								"name": "Divider",
								"order": "275",
								"id": "6b7e37bddb2c3510e75a64ebd39619eb",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "container-base-divider",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"width": false,
									"padding": "md"
								}
							},
							{
								"label": "Who is the ultimately responsible person for the technology?",
								"name": "DR_Technology_owner_label",
								"order": "300",
								"id": "d8d450d3db31615002fc5117f396199f",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Technology Owner description",
								"name": "DR_Technology_owner_description",
								"order": "325",
								"id": "102ce9101ba769103ab10edacd4bcb21",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-rich-text",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p style=\"text-align: left;\"><span style=\"font-size: 10pt;\">According to global risk management regulations, the <strong>Technology Owner</strong> (usually Partner or Director) is <strong>ultimately responsible for the use</strong> of this technology .<br />The Technology Owner <strong>owns the application business wise</strong> and can describe and explain use cases and the business case. <br />This role is also known as Business Owner or Application Owner. </span></p>"
								}
							},
							{
								"label": "Technology Owner",
								"name": "DR_Technology_owner",
								"order": "350",
								"id": "e0f49c93db31615002fc5117f39619f4",
								"hideLabel": false,
								"value": "00265235db6a259002fc5117f3961946",
								"readOnly": false,
								"required": true,
								"type": "now-typeahead",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"placeholder": "Damir Doszhan (Ext)",
									"type": "search",
									"table": "sys_user",
									"field": "name"
								}
							},
							{
								"label": "Who is the operational contact and manager for the technology?",
								"name": "DR_Technology_manager_label",
								"order": "400",
								"id": "9115d8d3db31615002fc5117f39619b1",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Technology Manager description",
								"name": "DR_Technology_manager_description",
								"order": "425",
								"id": "2c5fe9501ba769103ab10edacd4bcb58",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-rich-text",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">The Technology Manager will be responsible for <strong>providing information</strong> during the Technology Risk Assessment. </span><br /><span style=\"font-size: 10pt;\">The Technology Manager <strong>owns the application technology wise</strong> and can describe and explain business and technical backgrounds in detail. </span><br /><span style=\"font-size: 10pt;\">This role is also known as IT Application Owner, Product Manager or Service Manager. </span></p>"
								}
							},
							{
								"label": "Technology Manager",
								"name": "DR_Technology_manager",
								"order": "450",
								"id": "3c4598d3db31615002fc5117f3961933",
								"hideLabel": false,
								"value": "bd4756f5db6a259002fc5117f3961908",
								"readOnly": false,
								"required": true,
								"type": "now-typeahead",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"placeholder": "Peter Balko (Ext)",
									"type": "search",
									"table": "sys_user",
									"field": "name"
								}
							},
							{
								"label": "How is your project funded?",
								"name": "DR_project_funding_label",
								"order": "475",
								"id": "cec295a0db743150e75a64ebd3961999",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Project funding",
								"name": "DR_project_funding",
								"order": "480",
								"id": "1903dda0db743150e75a64ebd3961994",
								"hideLabel": true,
								"value": "pwc_germany",
								"readOnly": false,
								"required": false,
								"type": "now-radio-buttons",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "network_emea_europe_etc",
										"label": "Network (EMEA, Europe etc.) ",
										"checked": false
									},
									{
										"id": "pwc_germany",
										"label": "PwC Germany",
										"checked": true
									},
									{
										"id": "global",
										"label": "Global",
										"checked": false
									}
								],
								"properties": {
									"layout": "vertical",
									"tooltip": "",
									"size": "md"
								}
							},
							{
								"label": "Who  is the sponsor of your technology? ",
								"name": "DR_Technology_sponsor_label",
								"order": "500",
								"id": "9645b1701b3b29103ab10edacd4bcba4",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Sponsor description",
								"name": "DR_Technology_sponsor_description",
								"order": "525",
								"id": "2e6531301b3b29103ab10edacd4bcb57",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-rich-text",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">The sponsor is responsible for <strong>funding and approving the business case</strong>, as well as being a key decision-maker at executive level. </span><br /><span style=\"font-size: 10pt;\">The sponsor provides financial or other resources to support the development, implementation and maintenance of the technology. </span><br /><span style=\"font-size: 10pt;\">This role is also known as business sponsor. </span></p>"
								}
							},
							{
								"label": "Technology sponsor global info",
								"name": "DR_Technology_sponsor_global_info",
								"order": "527",
								"id": "b525d124db743150e75a64ebd39619ab",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-rich-text",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "1903dda0db743150e75a64ebd3961994",
									"value": "pwc_germany",
									"cond_type": "!=",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt; color: #e03e2d;\">Please select a German sponsor representative if the sponsor does not have access to this application.</span></p>"
								}
							},
							{
								"label": "Technology Sponsor",
								"name": "DR_Technology_sponsor",
								"order": "550",
								"id": "44e579b01b3b29103ab10edacd4bcbd8",
								"hideLabel": false,
								"value": "a8aa6c45db6d595002fc5117f39619f8",
								"readOnly": false,
								"required": true,
								"type": "now-typeahead",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"placeholder": "Julien Weiler (Ext)",
									"type": "search",
									"table": "sys_user",
									"field": "name"
								}
							},
							{
								"label": "Do you already have support by a P&T division or an Incubator?",
								"name": "DR_incubator_support_label",
								"order": "600",
								"id": "6eb6dde4db743150e75a64ebd3961994",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Incubator support",
								"name": "DR_incubator_support",
								"order": "650",
								"id": "d3079de4db743150e75a64ebd39619b9",
								"hideLabel": true,
								"value": "consulting_incubator",
								"readOnly": false,
								"required": false,
								"type": "now-select",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "no",
										"label": "No"
									},
									{
										"id": "assurance_incubator",
										"label": "Assurance Incubator"
									},
									{
										"id": "consulting_incubator",
										"label": "Consulting Incubator"
									},
									{
										"id": "t_l_incubator",
										"label": "T&L Incubator"
									},
									{
										"id": "p_t_technology",
										"label": "P&T - Technology"
									},
									{
										"id": "p_t_products",
										"label": "P&T - Products"
									}
								],
								"properties": {
									"tooltip": ""
								}
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
						"name": "Section Divider",
						"questions": [
							{
								"label": "Section Divider",
								"name": "Section Divider",
								"order": "100",
								"id": "82acaf7b1b68fd103ab10edacd4bcb5c",
								"hideLabel": true,
								"value": "",
								"readOnly": true,
								"required": false,
								"type": "container-base-divider",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"width": false,
									"padding": "lg"
								}
							}
						],
						"order": "150",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": {}
					},
					{
						"name": "Phase 0 - DR - Technology Scope Description",
						"questions": [
							{
								"label": "Technology Description",
								"name": "DR_technology_scope_label",
								"order": "50",
								"id": "de97d7ed1b7fe9103ab10edacd4bcb74",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "header-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "How would you describe your technology in a few sentences?",
								"name": "DR_short_description_label",
								"order": "100",
								"id": "5a8431301b3b29103ab10edacd4bcb3a",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Short description description",
								"name": "DR_short_description_descripion",
								"order": "150",
								"id": "4ba43dfc1bf729103ab10edacd4bcb89",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-rich-text",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">Briefly describe the scope of your technology for someone who has never heard of it. </span><span style=\"font-size: 10pt;\">A <strong>high level description/management summary</strong> is sufficient here. <br />After the process has been started in the Technology Risk Assessment Tool for your technology, a detailed description will be requested in a separate task. </span></p>"
								}
							},
							{
								"label": "Short Description",
								"name": "DR_short_description ",
								"order": "200",
								"id": "b7b4f1701b3b29103ab10edacd4bcb81",
								"hideLabel": false,
								"value": "Test",
								"readOnly": false,
								"required": true,
								"type": "now-textarea",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"show_counter": false,
									"maxlength": "1000",
									"resize": "vertical"
								}
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
						"name": "Section Divider",
						"questions": [
							{
								"label": "Section Divider",
								"name": "Section Divider",
								"order": "100",
								"id": "82acaf7b1b68fd103ab10edacd4bcb5c",
								"hideLabel": true,
								"value": "",
								"readOnly": true,
								"required": false,
								"type": "container-base-divider",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"width": false,
									"padding": "lg"
								}
							}
						],
						"order": "225",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": {}
					},
					{
						"name": "Phase 0 - DR - Technology SetUp Header",
						"questions": [
							{
								"label": "Technology Setup",
								"name": "DR_technology_setup_titel",
								"order": "100",
								"id": "b2a5fded1ba36d103ab10edacd4bcb15",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "header-secondary",
									"tooltip": ""
								}
							}
						],
						"order": "250",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": {}
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
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Technology Build Buy Description",
								"name": "DR_Technology_BuildBuyRent_description",
								"order": "125",
								"id": "51f568951ba32d103ab10edacd4bcb53",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-rich-text",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p>Please choose the most likely set up of your technology at this point in time.</p>"
								}
							},
							{
								"label": "Technology Build/Buy/Rent",
								"name": "DR_Technology_BuildBuyRent",
								"order": "150",
								"id": "920f9dd1dbf5291002fc5117f396193e",
								"hideLabel": true,
								"value": "Buy",
								"readOnly": false,
								"required": true,
								"type": "now-radio-buttons",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "Buy",
										"label": "Buy (COTS)",
										"checked": true
									},
									{
										"id": "BuyCustomization",
										"label": "Buy (COTS with PwC Customization)",
										"checked": false
									},
									{
										"id": "BuildPwC",
										"label": "Build (Custom Development by PwC)",
										"checked": false
									},
									{
										"id": "BuildThirdParty",
										"label": "Build (Custom Development by Third Party)",
										"checked": false
									},
									{
										"id": "Rent",
										"label": "Rent (SaaS)",
										"checked": false
									},
									{
										"id": "RentCustomization",
										"label": "Rent (SaaS with PwC Customization)",
										"checked": false
									}
								],
								"properties": {
									"layout": "vertical",
									"tooltip": "",
									"size": "md"
								}
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
						"name": "Phase 0 - DR - Build Buy Rent - customization/implementation efforts ",
						"questions": [
							{
								"label": "Does the customization/implementation efforts (ressources or costs) exceed the licensing fees?",
								"name": "DR_custom_effort_label",
								"order": "100",
								"id": "026d58a51b3875503ab10edacd4bcbac",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
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
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Customization / implementation effort > license fees",
								"name": "DR_custom_effort",
								"order": "150",
								"id": "8a6d58a51b3875503ab10edacd4bcbac",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": true,
								"type": "now-radio-buttons",
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
								},
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
								}
							}
						],
						"order": "350",
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
								"value": "",
								"readOnly": true,
								"required": false,
								"type": "container-base-divider",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"width": false,
									"padding": "lg"
								}
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
						"name": "Phase 0 - DR - Technology Usage ",
						"questions": [
							{
								"label": "Technology Usage",
								"name": "DR_technology_usage_label",
								"order": "50",
								"id": "37a670551be32d103ab10edacd4bcb0e",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "header-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "In which territories do you intend to roll-out your technology?",
								"name": "DR_Territory_label",
								"order": "100",
								"id": "17aea874db8ae55002fc5117f3961965",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Territory",
								"name": "DR_Territory",
								"order": "150",
								"id": "8bdeac74db8ae55002fc5117f3961909",
								"hideLabel": true,
								"value": "germany_and_at_least_one_other_territory",
								"readOnly": false,
								"required": true,
								"type": "now-radio-buttons",
								"has_dependency": false,
								"dependency": {},
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
										"id": "global_roll_out",
										"label": "Global roll-out",
										"checked": false
									}
								],
								"properties": {
									"layout": "vertical",
									"tooltip": "",
									"size": "md"
								}
							},
							{
								"label": "In which territories will the technology be used?",
								"name": "DR_Country_label",
								"order": "200",
								"id": "283f24b4db8ae55002fc5117f3961913",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "8bdeac74db8ae55002fc5117f3961909",
									"value": "germany_and_at_least_one_other_territory",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Country",
								"name": "DR_Country",
								"order": "250",
								"id": "aa5fa474db8ae55002fc5117f3961923",
								"hideLabel": false,
								"value": [
									{
										"id": "02ed4bc91b91a510a221ddb7ab4bcb6f",
										"label": "PwC Bonaire"
									}
								],
								"readOnly": false,
								"required": true,
								"type": "now-typeahead-multi",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "8bdeac74db8ae55002fc5117f3961909",
									"value": "germany_and_at_least_one_other_territory",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"placeholder": "PwC Bonaire",
									"type": "search",
									"table": "core_company",
									"field": "name"
								}
							},
							{
								"label": "Which territory owns the technology?",
								"name": "DR_Owning_territory_label",
								"order": "260",
								"id": "5e5864211bdcfd503ab10edacd4bcbb0",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Owning territory",
								"name": "DR_Owning_territory",
								"order": "265",
								"id": "eba8ec211bdcfd503ab10edacd4bcb99",
								"hideLabel": true,
								"value": "PwC South Africa ",
								"readOnly": false,
								"required": true,
								"type": "now-select",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "PwC DE",
										"label": "PwC DE"
									},
									{
										"id": "PwC Australia",
										"label": "PwC Australia"
									},
									{
										"id": "PwC CH",
										"label": "PwC CH"
									},
									{
										"id": "PwC Czech Republic",
										"label": "PwC Czech Republic"
									},
									{
										"id": "PwC Luxembourg",
										"label": "PwC Luxembourg"
									},
									{
										"id": "PwC Network",
										"label": "PwC Network"
									},
									{
										"id": "PwC NL",
										"label": "PwC NL"
									},
									{
										"id": "PwC South Africa ",
										"label": "PwC South Africa "
									},
									{
										"id": "PwC Spain",
										"label": "PwC Spain"
									},
									{
										"id": "PwC UK",
										"label": "PwC UK"
									},
									{
										"id": "PwC US",
										"label": "PwC US"
									}
								],
								"properties": {
									"tooltip": ""
								}
							},
							{
								"label": "Divider",
								"name": "Divider",
								"order": "279",
								"id": "33b510771b70bd503ab10edacd4bcbe1",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "container-base-divider",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"width": false,
									"padding": "md"
								}
							},
							{
								"label": "What is the use case of the technology?",
								"name": "DR_use_case_label",
								"order": "280",
								"id": "b7022ce91b3875503ab10edacd4bcb6e",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Use Case Info",
								"name": "DR_use_case_info",
								"order": "281",
								"id": "da42202d1b3875503ab10edacd4bcbc1",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-rich-text",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">Please select all that apply.</span></p>\n<ul style=\"list-style-position: inside;\"><li style=\"font-size: 10pt;\"><span style=\"font-size: 10pt;\">Internal: used for internal operational purposes or is part of the IT infrastructure </span></li><li style=\"font-size: 10pt;\"><span style=\"font-size: 10pt;\">Accelerator: used for service delivery to clients usually within an engagement</span></li><li style=\"font-size: 10pt;\"><span style=\"font-size: 10pt;\">Technology Offering/Products: marketed/licensed to clients, either for a fee or for free (in the later case without additional services provided via an engagement)</span></li><li style=\"font-size: 10pt;\"><span style=\"font-size: 10pt;\">Blueprints/Model Systems: used as a “starting point” for client specific customizations/implementations in the clients IT infrastructure </span></li><li style=\"font-size: 10pt;\"><span style=\"font-size: 10pt;\">Reselling: third party technology which is provided to clients via an agreement with PwC for a licensing fee </span></li><li style=\"font-size: 10pt;\"><span style=\"font-size: 10pt;\">Referral: third party technology which is provided to clients via a direct agreement with the vendor. PwC gets a brokerage commission based on a referral agreement with the vendor </span></li><li style=\"font-size: 10pt;\"><span style=\"font-size: 10pt;\">Technology Component for Golden Stack: no stand alone technology, but rather a component meant to be used multiple times as a building block of other technologies. <a href=\"https://yoda.pwc.de/workspaces/architecture-decision-committee/apps/content/golden-stack\" rel=\"nofollow\">PwC Golden Stack</a> is a collection of standardized technologies recommended for use by the Architecture Decision Committee (ADC) </span></li></ul>"
								}
							},
							{
								"label": "Technology Use Case",
								"name": "DR_use_case",
								"order": "285",
								"id": "158228e91b3875503ab10edacd4bcb22",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "pwc-checklist",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "md",
									"checklist": [
										{
											"label": "Internal",
											"id": "6ab228e91b3875503ab10edacd4bcb6c",
											"value": "false"
										},
										{
											"label": "Accelerator ",
											"id": "a7c2e42d1b3875503ab10edacd4bcb2d",
											"value": "false"
										},
										{
											"label": "Technology Offering",
											"id": "1bd26c2d1b3875503ab10edacd4bcb04",
											"value": "true"
										},
										{
											"label": "Client Customization/Implementation based on Blueprints/Model Systems",
											"id": "8ee22c2d1b3875503ab10edacd4bcbdb",
											"value": "true"
										},
										{
											"label": "Reselling",
											"id": "df036c2d1b3875503ab10edacd4bcb42",
											"value": "false"
										},
										{
											"label": "Referral",
											"id": "d113206d1b3875503ab10edacd4bcbda",
											"value": "false"
										},
										{
											"label": "Technology Component for a Golden Stack",
											"id": "0c23206d1b3875503ab10edacd4bcba5",
											"value": "false"
										}
									]
								}
							},
							{
								"label": "What is the distribution model of your technology?",
								"name": "DR_Technology_distribution_label",
								"order": "400",
								"id": "47b0f038db8ae55002fc5117f39619a1",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "1bd26c2d1b3875503ab10edacd4bcb04",
									"value": "true",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Technology Distribution",
								"name": "DR_Technology_distribution",
								"order": "450",
								"id": "93d07cf4db8ae55002fc5117f3961936",
								"hideLabel": true,
								"value": "\"licensing\"",
								"readOnly": false,
								"required": true,
								"type": "now-radio-buttons",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "1bd26c2d1b3875503ab10edacd4bcb04",
									"value": "true",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
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
								}
							},
							{
								"label": "Who will be the users of your technology?",
								"name": "DR_Technology_user_label",
								"order": "475",
								"id": "d000fcb4db8ae55002fc5117f396190d",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Technology User",
								"name": "DR_Technology_user",
								"order": "480",
								"id": "882034f4db8ae55002fc5117f39619e2",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": true,
								"type": "pwc-checklist",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "md",
									"checklist": [
										{
											"label": "Users from PwC Germany",
											"id": "1f3078f4db8ae55002fc5117f396199d",
											"value": "false"
										},
										{
											"label": "Users from other PwC territories",
											"id": "1d40fcb4db8ae55002fc5117f39619e7",
											"value": "true"
										},
										{
											"label": "Users from PwC clients",
											"id": "ec50b8f4db8ae55002fc5117f3961945",
											"value": "false"
										},
										{
											"label": "Public users",
											"id": "3a50bcb4db8ae55002fc5117f39619c8",
											"value": "false"
										}
									]
								}
							},
							{
								"label": "Will the technology be used in connection with a specific industry?",
								"name": "DR_Technology_industry_label",
								"order": "500",
								"id": "8e317c38db8ae55002fc5117f39619e2",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Technology industry description",
								"name": "DR_Technology_industry_description",
								"order": "525",
								"id": "5ed46a211b676d103ab10edacd4bcbfe",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-rich-text",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p>If you are already aware that your asset will process industry sector specific information please mark the applicable cases. PwC either already holds a certification for this sector and needs to maintain it, or is aiming to achieve a certification in the sector. The identifier helps us to recognize the applicable scope for audits and for the implementation or elimination of security controls.</p>"
								}
							},
							{
								"label": "Technology Industry",
								"name": "DR_Technology_industry",
								"order": "550",
								"id": "ef617c38db8ae55002fc5117f39619a1",
								"hideLabel": true,
								"value": "public_sector_bsi_it_grundschutz",
								"readOnly": false,
								"required": true,
								"type": "now-radio-buttons",
								"has_dependency": false,
								"dependency": {},
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
										"checked": true
									},
									{
										"id": "other",
										"label": "Other",
										"checked": false
									},
									{
										"id": "none_of_the_above",
										"label": "None of the above",
										"checked": false
									}
								],
								"properties": {
									"layout": "vertical",
									"tooltip": "",
									"size": "md"
								}
							},
							{
								"label": "Please specify the industry and the specific requirements?",
								"name": "DR_Technology_industry_other_label",
								"order": "575",
								"id": "ca3de0e51b7875503ab10edacd4bcbd0",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "ef617c38db8ae55002fc5117f39619a1",
									"value": "other",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Other industry specification",
								"name": "DR_Technology_industry_other",
								"order": "580",
								"id": "416dece51b7875503ab10edacd4bcb40",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-textarea",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "ef617c38db8ae55002fc5117f39619a1",
									"value": "other",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"show_counter": false,
									"maxlength": "600",
									"resize": "none"
								}
							},
							{
								"label": "When do you plan to go live?",
								"name": "DR_Target_go_live_label",
								"order": "600",
								"id": "69b1f878db8ae55002fc5117f39619d9",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Target Go-Live",
								"name": "DR_Target_go_live",
								"order": "650",
								"id": "7ed13878db8ae55002fc5117f3961915",
								"hideLabel": true,
								"value": "more_than_six_months",
								"readOnly": false,
								"required": true,
								"type": "now-radio-buttons",
								"has_dependency": false,
								"dependency": {},
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
										"checked": true
									},
									{
										"id": "go_live_date_has_not_yet_been_set",
										"label": "Go-live date has not yet been set",
										"checked": false
									}
								],
								"properties": {
									"layout": "vertical",
									"tooltip": "",
									"size": "md"
								}
							},
							{
								"label": "Please briefly explain why your technology must go live within this timeframe.",
								"name": "DR_Target_go_live_description_label",
								"order": "700",
								"id": "15423c78db8ae55002fc5117f3961938",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "7ed13878db8ae55002fc5117f3961915",
									"value": "within_the_next_three_months",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Target Go-Live Description",
								"name": "DR_Target_go_live_description",
								"order": "750",
								"id": "e062f0b8db8ae55002fc5117f39619f9",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": true,
								"type": "now-textarea",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "7ed13878db8ae55002fc5117f3961915",
									"value": "within_the_next_three_months",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "",
									"show_counter": false,
									"maxlength": "400",
									"resize": "none"
								}
							},
							{
								"label": "When the application is (planned to be) productive and in use?",
								"name": "DR_Go_live_date_label",
								"order": "800",
								"id": "2ce70acf1b50b5903ab10edacd4bcb6b",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "7ed13878db8ae55002fc5117f3961915",
									"value": "go_live_date_has_not_yet_been_set",
									"cond_type": "!=",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Go-Live Date",
								"name": "DR_Go_live_date",
								"order": "850",
								"id": "cf388e431b90b5903ab10edacd4bcb53",
								"hideLabel": true,
								"value": "\"2023-09-20\"",
								"readOnly": false,
								"required": true,
								"type": "now-input",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "7ed13878db8ae55002fc5117f3961915",
									"value": "go_live_date_has_not_yet_been_set",
									"cond_type": "!=",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"type": "date",
									"placeholder": "",
									"tooltip": ""
								}
							},
							{
								"label": "Since approximately when has the application been in the phase of being developed or acquired?",
								"name": "DR_Phase_in_date_label",
								"order": "900",
								"id": "8a49ce831b90b5903ab10edacd4bcbba",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Phase In Date",
								"name": "DR_Phase_in_date",
								"order": "950",
								"id": "0599c6c31b90b5903ab10edacd4bcb70",
								"hideLabel": true,
								"value": "2023-09-21",
								"readOnly": false,
								"required": true,
								"type": "now-input",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"type": "date",
									"placeholder": "",
									"tooltip": ""
								}
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
						"name": "Section Divider",
						"questions": [
							{
								"label": "Section Divider",
								"name": "Section Divider",
								"order": "100",
								"id": "82acaf7b1b68fd103ab10edacd4bcb5c",
								"hideLabel": true,
								"value": "",
								"readOnly": true,
								"required": false,
								"type": "container-base-divider",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"width": false,
									"padding": "lg"
								}
							}
						],
						"order": "550",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": {}
					},
					{
						"name": "Phase 0 - DR - Use Case Analysis",
						"questions": [
							{
								"label": "Use Case Analysis",
								"name": "DR_usecase_label",
								"order": "50",
								"id": "8b06d2291b276d103ab10edacd4bcb0d",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "header-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Have you already performed a market analysis?",
								"name": "DR_Market_analysis_label",
								"order": "100",
								"id": "f564383cdb8ae55002fc5117f396191d",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": {
										"type": "simple",
										"id": "ec50b8f4db8ae55002fc5117f3961945",
										"value": "true",
										"cond_type": "==",
										"left": "",
										"right": ""
									},
									"right": {
										"type": "simple",
										"id": "3a50bcb4db8ae55002fc5117f39619c8",
										"value": "true",
										"cond_type": "==",
										"left": "",
										"right": ""
									}
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Market analysis description",
								"name": "DR_Market_analysis_description",
								"order": "125",
								"id": "5915ea251b676d103ab10edacd4bcb7f",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-rich-text",
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": {
										"type": "simple",
										"id": "ec50b8f4db8ae55002fc5117f3961945",
										"value": "true",
										"cond_type": "==",
										"left": "",
										"right": ""
									},
									"right": {
										"type": "simple",
										"id": "3a50bcb4db8ae55002fc5117f39619c8",
										"value": "true",
										"cond_type": "==",
										"left": "",
										"right": ""
									}
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">A market analysis is the <strong>qualitative and quantitative assessment</strong> of a specific market for the purposes of business planning. The analysis typically examines the market&#39;s customer segment, value, volume, buying patterns, economic environment, competition, and barriers to entry such as regulation. Creating a market analysis helps you to understand your target audience and the conditions of the market, which will inform your ability to create a successful service or product. </span></p>"
								}
							},
							{
								"label": "Performed Market Analysis",
								"name": "DR_Market_analysis",
								"order": "150",
								"id": "b5743c3cdb8ae55002fc5117f3961916",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": true,
								"type": "now-radio-buttons",
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": {
										"type": "simple",
										"id": "ec50b8f4db8ae55002fc5117f3961945",
										"value": "true",
										"cond_type": "==",
										"left": "",
										"right": ""
									},
									"right": {
										"type": "simple",
										"id": "3a50bcb4db8ae55002fc5117f39619c8",
										"value": "true",
										"cond_type": "==",
										"left": "",
										"right": ""
									}
								},
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
									"layout": "vertical",
									"tooltip": "",
									"size": "md"
								}
							},
							{
								"label": "Market analysis documentation",
								"name": "DR_Market_analysis_documentation_label",
								"order": "200",
								"id": "2194f07cdb8ae55002fc5117f3961990",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-rich-text",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "b5743c3cdb8ae55002fc5117f3961916",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">Please upload any relevant documentation. Alternatively, you can provide us with a URL link in the text box below. </span></p>"
								}
							},
							{
								"label": "Link to your Market analysis documentation",
								"name": "DR_Market_analysis_documentation",
								"order": "250",
								"id": "e0b4747cdb8ae55002fc5117f3961947",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-input-url",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "b5743c3cdb8ae55002fc5117f3961916",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"url": null
								}
							},
							{
								"label": "Market Analysis Documentation Upload",
								"name": "DR_Market_analysis_upload",
								"order": "275",
								"id": "8e1de1f0dbcee55002fc5117f3961916",
								"hideLabel": true,
								"value": {
									"recordID": "975998621bd1f990a221ddb7ab4bcb50",
									"tableName": "x_pwca2_0011077_values",
									"maxFileSize": "15",
									"allowedFileTypes": "all",
									"attachedFiles": []
								},
								"readOnly": false,
								"required": false,
								"type": "pwc-attachment",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "b5743c3cdb8ae55002fc5117f3961916",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {}
							},
							{
								"label": "Have you created a preliminary business case?",
								"name": "DR_Business_case_label",
								"order": "300",
								"id": "956da9f0dbcee55002fc5117f39619a0",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": {
										"type": "simple",
										"id": "ec50b8f4db8ae55002fc5117f3961945",
										"value": "true",
										"cond_type": "==",
										"left": "",
										"right": ""
									},
									"right": {
										"type": "simple",
										"id": "3a50bcb4db8ae55002fc5117f39619c8",
										"value": "true",
										"cond_type": "==",
										"left": "",
										"right": ""
									}
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Business case description",
								"name": "DR_Business_case_description",
								"order": "325",
								"id": "fbc5a6251b676d103ab10edacd4bcb9e",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-rich-text",
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": {
										"type": "simple",
										"id": "ec50b8f4db8ae55002fc5117f3961945",
										"value": "true",
										"cond_type": "==",
										"left": "",
										"right": ""
									},
									"right": {
										"type": "simple",
										"id": "3a50bcb4db8ae55002fc5117f39619c8",
										"value": "true",
										"cond_type": "==",
										"left": "",
										"right": ""
									}
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">A business case provides <strong>justification for undertaking a project</strong>. It evaluates the benefit, cost and risk of alternative options and provides a rationale for the preferred solution. </span></p>"
								}
							},
							{
								"label": "Created Business Case",
								"name": "DR_Business_case",
								"order": "350",
								"id": "ab017538dbcee55002fc5117f3961989",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": true,
								"type": "now-radio-buttons",
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": {
										"type": "simple",
										"id": "ec50b8f4db8ae55002fc5117f3961945",
										"value": "true",
										"cond_type": "==",
										"left": "",
										"right": ""
									},
									"right": {
										"type": "simple",
										"id": "3a50bcb4db8ae55002fc5117f39619c8",
										"value": "true",
										"cond_type": "==",
										"left": "",
										"right": ""
									}
								},
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
									"layout": "vertical",
									"tooltip": "",
									"size": "md"
								}
							},
							{
								"label": "Business case documentation label",
								"name": "DR_Business_case_documentation_label",
								"order": "400",
								"id": "19d1b578dbcee55002fc5117f39619a2",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-rich-text",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "ab017538dbcee55002fc5117f3961989",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">Please upload any relevant documentation. Alternatively, you can provide us with a URL link in the text box below. </span></p>"
								}
							},
							{
								"label": "Link to your Business case documentation",
								"name": "DR_Business_case_documentation",
								"order": "450",
								"id": "14a2f9b8dbcee55002fc5117f39619c0",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-input-url",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "ab017538dbcee55002fc5117f3961989",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"url": null
								}
							},
							{
								"label": "Business Case Documentation Upload",
								"name": "DR_Business_case_upload",
								"order": "475",
								"id": "2db2bdb8dbcee55002fc5117f39619f0",
								"hideLabel": true,
								"value": {
									"recordID": "df5998621bd1f990a221ddb7ab4bcb4e",
									"tableName": "x_pwca2_0011077_values",
									"maxFileSize": "15",
									"allowedFileTypes": "all",
									"attachedFiles": []
								},
								"readOnly": false,
								"required": false,
								"type": "pwc-attachment",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "ab017538dbcee55002fc5117f3961989",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {}
							},
							{
								"label": "Do you want to share any additional documentation?",
								"name": "DR_additional_information_label",
								"order": "500",
								"id": "50e2f1f8dbcee55002fc5117f39619d5",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "This could include things like pitch presentation, product information, concept paper, UI/UX designs, prototype/clickdummy etc.",
								"name": "DR_additional_information_description",
								"order": "525",
								"id": "56362e651b676d103ab10edacd4bcb03",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"size": "title-tertiary",
									"tooltip": ""
								}
							},
							{
								"label": "Additional Information",
								"name": "DR_additional_information",
								"order": "550",
								"id": "65533df8dbcee55002fc5117f396199f",
								"hideLabel": true,
								"value": "no",
								"readOnly": false,
								"required": true,
								"type": "now-radio-buttons",
								"has_dependency": false,
								"dependency": {},
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
									"layout": "vertical",
									"tooltip": "",
									"size": "md"
								}
							},
							{
								"label": "Additional information documentation",
								"name": "DR_additional_information_documentation_label",
								"order": "600",
								"id": "c093fdf8dbcee55002fc5117f39619a1",
								"hideLabel": true,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-rich-text",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "65533df8dbcee55002fc5117f396199f",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">Please upload any relevant documentation. Alternatively, you can provide us with a URL link in the text box below. </span></p>"
								}
							},
							{
								"label": "Link to your documentation",
								"name": "DR_additional_information_documentation",
								"order": "650",
								"id": "caa3313cdbcee55002fc5117f396199d",
								"hideLabel": false,
								"value": "",
								"readOnly": false,
								"required": false,
								"type": "now-input-url",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "65533df8dbcee55002fc5117f396199f",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"url": null
								}
							},
							{
								"label": "Additional Information Documentation Upload",
								"name": "DR_additional_information_upload",
								"order": "675",
								"id": "8bb3fdf8dbcee55002fc5117f39619da",
								"hideLabel": true,
								"value": {
									"recordID": "df5998621bd1f990a221ddb7ab4bcb4f",
									"tableName": "x_pwca2_0011077_values",
									"maxFileSize": "15",
									"allowedFileTypes": "all",
									"attachedFiles": []
								},
								"readOnly": false,
								"required": false,
								"type": "pwc-attachment",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "65533df8dbcee55002fc5117f396199f",
									"value": "yes",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {}
							}
						],
						"order": "600",
						"visible": true,
						"pass_dependency": true,
						"readOnly": false,
						"hideLabel": false,
						"has_dependency": false,
						"dependency": {}
					}
				],
				"user_id": "00265235db6a259002fc5117f3961946",
				"active": true,
				"project_id": "cb595cee1b91f990a221ddb7ab4bcb65",
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
			default: "bottom"
		},
		datasheet: {
			default: false
		}
	},
	styles,
	actionHandlers
});