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
		referenceLabel: ""
	},
	properties: {
		compdata: {
			default:  {
				"status": 200,
				"error": "",
				"table": "x_pwca2_0011077_project",
				"sys_id": "561a55fa1b003550a221ddb7ab4bcbed",
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
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
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
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
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
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "true",
								"type": "now-input",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"type": "text",
									"placeholder": "",
									"tooltip": null
								}
							},
							{
								"label": "For which platform will you procure/develop the technology?",
								"name": "DR_Platform_label",
								"order": "200",
								"id": "c7441493db31615002fc5117f396194c",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Platform",
								"name": "DR_Platform",
								"order": "250",
								"id": "15649c93db31615002fc5117f3961997",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "true",
								"type": "now-radio-buttons",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "assurance_solutions",
										"label": "Assurance Solutions",
										"checked": false
									},
									{
										"id": "consulting_solutions",
										"label": "Consulting Solutions (Transformation, Risk & Regulatory, ESG Cloud & Digital, Deal ...)",
										"checked": false
									},
									{
										"id": "business_services",
										"label": "Business Services",
										"checked": false
									},
									{
										"id": "product_technology",
										"label": "Product & Technology ",
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
								"label": "Who is the ultimately responsible person for the technology?",
								"name": "DR_Technology_owner_label",
								"order": "300",
								"id": "d8d450d3db31615002fc5117f396199f",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "According to global risk management regulations, the Technology Owner is ultimately responsible for the use of this technology.",
								"name": "DR_Technology_owner_description",
								"order": "325",
								"id": "102ce9101ba769103ab10edacd4bcb21",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "title-tertiary",
									"tooltip": ""
								}
							},
							{
								"label": "Technology Owner",
								"name": "DR_Technology_owner",
								"order": "350",
								"id": "e0f49c93db31615002fc5117f39619f4",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "true",
								"type": "now-typeahead",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"options": [],
								"properties": {
									"tooltip": "The Technology Owner is also known as \"A",
									"placeholder": "Start typing...",
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
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "The Technology Manger will be responsible for providing information during the Technology Risk Assessment.",
								"name": "DR_Technology_manager_description",
								"order": "425",
								"id": "2c5fe9501ba769103ab10edacd4bcb58",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "title-tertiary",
									"tooltip": ""
								}
							},
							{
								"label": "Technology Manager",
								"name": "DR_Technology_manager",
								"order": "450",
								"id": "3c4598d3db31615002fc5117f3961933",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "true",
								"type": "now-typeahead",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "00924a10db8a151002fc5117f3961970",
										"label": "Sahel Luthra"
									},
									{
										"id": "02109e241b44b910a221ddb7ab4bcbb4",
										"label": "Karin Bieniek"
									},
									{
										"id": "0612045e1bbde910a221ddb7ab4bcbfc",
										"label": "Alexander Potdevin"
									},
									{
										"id": "0764675b1bcf2910a221ddb7ab4bcb58",
										"label": "Peter Cramer"
									},
									{
										"id": "0a7eb307db1545101ee10a9bd39619c7",
										"label": "Rana Hashim Khan"
									},
									{
										"id": "0d03d2f31bfc6010a221ddb7ab4bcb58",
										"label": "Carsten Meyer-Rühen"
									},
									{
										"id": "10f93d33dbf2d15002fc5117f396199d",
										"label": "Anton Antoni"
									},
									{
										"id": "1475e45a1bb52d10a221ddb7ab4bcb5a",
										"label": "Corinna Vierling"
									},
									{
										"id": "1916f4b31b759150a221ddb7ab4bcb9d",
										"label": "Bernd Parl"
									},
									{
										"id": "1b9596b31b05d110a221ddb7ab4bcb23",
										"label": "Lea Hurtz"
									},
									{
										"id": "1bdaed1e1bce5110a221ddb7ab4bcb1a",
										"label": "Test HC  Email address (Tch)"
									},
									{
										"id": "1c4d8792dbeea59002fc5117f39619f1",
										"label": "Susanne Vent"
									},
									{
										"id": "1e57d0eb1b192910a221ddb7ab4bcb29",
										"label": "Sebastian Köppe"
									},
									{
										"id": "1fbd22abdb6a111002fc5117f39619d2",
										"label": "Georg Illian"
									},
									{
										"id": "1fe3e37b1b5b6150a221ddb7ab4bcb3d",
										"label": "Fabienne Hermanns"
									},
									{
										"id": "20ba7cf61b342150a221ddb7ab4bcba8",
										"label": "Sacha Garbotz"
									},
									{
										"id": "230016e8dbc4f91002fc5117f39619d0",
										"label": "Anja Merkert"
									},
									{
										"id": "247714861b536910a221ddb7ab4bcb89",
										"label": "Erik Naumburger"
									},
									{
										"id": "284a63afdb6e111002fc5117f39619f3",
										"label": "Evgenii Korliakov"
									},
									{
										"id": "29334973db4ba91002fc5117f3961967",
										"label": "Trutz Snethlage"
									},
									{
										"id": "2af1a7e5dbe9a15002fc5117f3961974",
										"label": "André Altmann"
									},
									{
										"id": "2d8bb5e41b3a5d10a221ddb7ab4bcbb3",
										"label": "Daniel Held"
									},
									{
										"id": "311e86341baead50a221ddb7ab4bcbe5",
										"label": "Timo Sieber"
									},
									{
										"id": "312572cb1bb16150a221ddb7ab4bcbee",
										"label": "Aysegül Sen"
									},
									{
										"id": "3213982e1b231910a221ddb7ab4bcb08",
										"label": "Tharsan Rameswaran"
									},
									{
										"id": "323ea7fc1b0cf910a221ddb7ab4bcb46",
										"label": "Thomas Stöckl"
									},
									{
										"id": "33ab102f1bfa1950a221ddb7ab4bcbe6",
										"label": "Anne-Kathrin Ebeling"
									},
									{
										"id": "33c55972db47a51002fc5117f396199b",
										"label": "Dennis Naubereit"
									},
									{
										"id": "344bc4f8db7e21d002fc5117f39619b7",
										"label": "Sebastian Koch"
									},
									{
										"id": "3614e777db9be11002fc5117f396191f",
										"label": "Jo-Ann Franke"
									},
									{
										"id": "37669074db3f695002fc5117f3961994",
										"label": "Steffen Del Popolo"
									},
									{
										"id": "378aa3a41b0cb910a221ddb7ab4bcbee",
										"label": "Stefanie Klammer"
									},
									{
										"id": "395f2eeedb6d119002fc5117f3961934",
										"label": "Christian Beckmann"
									},
									{
										"id": "39940ce4dbf3551002fc5117f396193d",
										"label": "Ondrej Havlista (Ext)"
									},
									{
										"id": "3a4d73d91b2e4d10a221ddb7ab4bcb58",
										"label": "Test User"
									},
									{
										"id": "3c9031f5dbefe91002fc5117f3961957",
										"label": "Philip Parali"
									},
									{
										"id": "4045a7bb1b5b6150a221ddb7ab4bcb21",
										"label": "Semra Ametovska"
									},
									{
										"id": "40a2e399db39d15040a65309f496199d",
										"label": "Aleksandar Adamovic (Ext)"
									},
									{
										"id": "40e5c6f11b7a0d10a221ddb7ab4bcb1e",
										"label": "Thomas Krüger"
									},
									{
										"id": "43d620681b4ea550a221ddb7ab4bcbb5",
										"label": "Vanessa Budde"
									},
									{
										"id": "49397f841befa150a221ddb7ab4bcb25",
										"label": "Lana Giesen"
									},
									{
										"id": "56a525b11bff2110a221ddb7ab4bcb78",
										"label": "Zlata Behric"
									},
									{
										"id": "56f6217edba39d9002fc5117f39619b8",
										"label": "Hans Fitzner"
									},
									{
										"id": "578c6f63dbae111002fc5117f39619ef",
										"label": "Zoran Mikov"
									},
									{
										"id": "5c0096a8dbc4f91002fc5117f396196b",
										"label": "Mareike Hattendorf"
									},
									{
										"id": "5f36bb03dbbd215002fc5117f39619d2",
										"label": "Yung Kyu Tomas Lee"
									},
									{
										"id": "60a0614d1b661950a221ddb7ab4bcb5b",
										"label": "Martin Müllenberg"
									},
									{
										"id": "65cdab2b1bd02d10a221ddb7ab4bcb7d",
										"label": "Andreas Röhrig"
									},
									{
										"id": "65e6f8721beae590a221ddb7ab4bcb65",
										"label": "Mahmoud Alali Al-Khalaf"
									},
									{
										"id": "67942b7b1b5b6150a221ddb7ab4bcb39",
										"label": "Julia Meuser"
									},
									{
										"id": "68e50c8c1bd21510a221ddb7ab4bcb4c",
										"label": "Kristian Landegren"
									},
									{
										"id": "6f5daf63db586d1002fc5117f396199c",
										"label": "Werner Noack"
									},
									{
										"id": "710c3176db5cfc101d5873e3f39619a3",
										"label": "Nadine Esser"
									},
									{
										"id": "71e5cc04dbd6591002fc5117f396198c",
										"label": "Adrian Bauch"
									},
									{
										"id": "74b4e74a1babe950a221ddb7ab4bcbdc",
										"label": "Cedric Schmitt"
									},
									{
										"id": "764828c41b5ea910a221ddb7ab4bcbb6",
										"label": "Johannes Schneider"
									},
									{
										"id": "788c98251bcb2110a221ddb7ab4bcb44",
										"label": "Samuel Bunjatov 6"
									},
									{
										"id": "79e1434d1b51a510a221ddb7ab4bcb3d",
										"label": "Felix Frankemöller (Ext)"
									},
									{
										"id": "7ab96155db98d550bf6b95e8f496194a",
										"label": "Sebastian Beckers"
									},
									{
										"id": "7ab9bc3f1ba7e190a221ddb7ab4bcb9f",
										"label": "Leonie Pitzen"
									},
									{
										"id": "7cd91ff41bc8f910a221ddb7ab4bcbeb",
										"label": "Finn Schmidt"
									},
									{
										"id": "7e9e66931b4fd910a221ddb7ab4bcb0c",
										"label": "Jan Lünenschloß"
									},
									{
										"id": "81a7fc891b083d10a221ddb7ab4bcbff",
										"label": "Constanze Miesauer"
									},
									{
										"id": "83c7a7231bee5910a221ddb7ab4bcb4a",
										"label": "Martin Schmittbetz"
									},
									{
										"id": "8470451edbeec1101d5873e3f39619b9",
										"label": "Olaf Graßmann"
									},
									{
										"id": "877cdce11bcb2110a221ddb7ab4bcbee",
										"label": "Samuel Bunjatov 5"
									},
									{
										"id": "8959a84adb8830101d5873e3f3961956",
										"label": "Oliver Grasmück"
									},
									{
										"id": "8cf6e36ddbe9a15002fc5117f3961963",
										"label": "Thomas Frieß"
									},
									{
										"id": "8e488228dbf4b850763d660cd396195c",
										"label": "Corinna Westermann"
									},
									{
										"id": "919dcc9d1ba3e550a221ddb7ab4bcbf2",
										"label": "Luisa Hilling"
									},
									{
										"id": "9c01122cdbc4f91002fc5117f396198a",
										"label": "Fabian Böhm"
									},
									{
										"id": "9d3de8c71b2ddd50a221ddb7ab4bcb8c",
										"label": "Simon Esser"
									},
									{
										"id": "9d6793ebdb2e111002fc5117f396193a",
										"label": "Peter Holldorf"
									},
									{
										"id": "9dd620dddb27691002fc5117f39619f9",
										"label": "Catherine Wachendorf"
									},
									{
										"id": "9e8c10e11bcb2110a221ddb7ab4bcb4b",
										"label": "Samuel Bunjatov 7"
									},
									{
										"id": "9fb3a9a91beb2950a221ddb7ab4bcb0f",
										"label": "Rohan Mahajan"
									},
									{
										"id": "a03358bd1b3b2110a221ddb7ab4bcbcf",
										"label": "Alexander Rankl"
									},
									{
										"id": "a1925c3e1b702150a221ddb7ab4bcb0a",
										"label": "Marvin Eifert"
									},
									{
										"id": "a2c37aa6dbad119002fc5117f396193f",
										"label": "Annina Fittkau"
									},
									{
										"id": "a5f3e37b1b5b6150a221ddb7ab4bcb7d",
										"label": "Jule Höhnle"
									},
									{
										"id": "ac2f7727db986d1002fc5117f39619e7",
										"label": "Oliver Raab"
									},
									{
										"id": "ae7c2cfedba6299002fc5117f396193a",
										"label": "René Krüger"
									},
									{
										"id": "af26efca1babe950a221ddb7ab4bcba0",
										"label": "Mimouna Hesni"
									},
									{
										"id": "b113f60cdbe03c10763d660cd39619fb",
										"label": "Philip Lazic"
									},
									{
										"id": "b2bf226a1b259d50a221ddb7ab4bcb54",
										"label": "Robert Grüner"
									},
									{
										"id": "b2f3f7f51bbe25d0a221ddb7ab4bcb9c",
										"label": "Pia Bräutigam"
									},
									{
										"id": "b2f6758fdb731c101d5873e3f39619f1",
										"label": "Test 456 (TST)"
									},
									{
										"id": "b30d4f70db12ad1002fc5117f39619ca",
										"label": "Lutz Bigalke"
									},
									{
										"id": "b3e291d61b8d5990a221ddb7ab4bcbf8",
										"label": "Vanessa Gaska"
									},
									{
										"id": "b4a1d1fe1b75ed10a221ddb7ab4bcb7f",
										"label": "Carsten Sattelmaier"
									},
									{
										"id": "b52db0501b67e150a221ddb7ab4bcba1",
										"label": "Hazal Sadiklar"
									},
									{
										"id": "b69a77391bbe9150a221ddb7ab4bcbad",
										"label": "Christian Eßer"
									},
									{
										"id": "ba32376f1bd02d10a221ddb7ab4bcbdd",
										"label": "Andreas Illgner"
									},
									{
										"id": "ba7b231bdb4d30d0763d660cd3961966",
										"label": "Jan Zierlein"
									},
									{
										"id": "bc79f323dbee111002fc5117f39619bb",
										"label": "Pablo Ramirez Cano"
									},
									{
										"id": "bfb2b079dbf7611002fc5117f3961972",
										"label": "Holger Petersen"
									},
									{
										"id": "c391049cdb6f251002fc5117f3961959",
										"label": "Alexander Hahnen"
									},
									{
										"id": "c69991bbdbffe0901d5873e3f3961908",
										"label": "Ansgar Illigen"
									},
									{
										"id": "c7a4466bdbe3255002fc5117f3961983",
										"label": "Ge Jin"
									},
									{
										"id": "c8c3d2c0db3fa55002fc5117f3961960",
										"label": "Karina Henneberger"
									},
									{
										"id": "cc26b4badbe6299002fc5117f39619cc",
										"label": "Dirk Bodenmüller"
									},
									{
										"id": "ccf974a5db6ba91002fc5117f396199b",
										"label": "Priyanka Kumar"
									},
									{
										"id": "d5f05da31b2ba190a221ddb7ab4bcbff",
										"label": "Felix Schmedes"
									},
									{
										"id": "d66d63551b94e110a221ddb7ab4bcb33",
										"label": "Yannick Schittenhelm"
									},
									{
										"id": "d7173860db4445101d5873e3f396195d",
										"label": "Silvia Otto"
									},
									{
										"id": "d75911f8db73a95002fc5117f39619d5",
										"label": "Petra Fuchs"
									},
									{
										"id": "d786c280dbfba55002fc5117f3961984",
										"label": "Alexia Beer"
									},
									{
										"id": "d83056641b44b910a221ddb7ab4bcba6",
										"label": "Melanie Sauer"
									},
									{
										"id": "d996787ddbf7611002fc5117f396197c",
										"label": "Berrin Yalcin"
									},
									{
										"id": "db790dff1be7e190a221ddb7ab4bcbe7",
										"label": "Marscha Sarina Gumm"
									},
									{
										"id": "de0965d81b72ad90a221ddb7ab4bcb0b",
										"label": "Simone Dusch"
									},
									{
										"id": "de2d3d7adb45919002fc5117f39619a3",
										"label": "OpH Manager (TST)"
									},
									{
										"id": "e03531d1db4d211002fc5117f396197d",
										"label": "Thomas Blume"
									},
									{
										"id": "e256af831b7ad550a221ddb7ab4bcb83",
										"label": "testuser supportpwc (TST)"
									},
									{
										"id": "e4b63d3fdbb2d15002fc5117f3961997",
										"label": "Diana Gmeiner"
									},
									{
										"id": "e4c1afa61bce0150a221ddb7ab4bcb95",
										"label": "Thilo Schneider"
									},
									{
										"id": "e58f1ebbdbff0110bf6b95e8f4961990",
										"label": "testuser pwcplus (TST)"
									},
									{
										"id": "e62863231bee5910a221ddb7ab4bcb80",
										"label": "Heinz Lippling"
									},
									{
										"id": "e62b0b511bb76510a221ddb7ab4bcb6f",
										"label": "Tatjana Groh-Wachholz"
									},
									{
										"id": "ea74e103db731c101d5873e3f39619b9",
										"label": "Test 123 (TST)"
									},
									{
										"id": "ec929d5edb2205101d5873e3f396193d",
										"label": "Mario Retterath"
									},
									{
										"id": "ecac30f71b59dc10a221ddb7ab4bcbfd",
										"label": "Samuel Bunjatov"
									},
									{
										"id": "f314c428db633c101ee10a9bd3961960",
										"label": "Stefan Bauch"
									},
									{
										"id": "f376da211b7a5150a221ddb7ab4bcb6b",
										"label": "Ralf Oppermann"
									},
									{
										"id": "f3ca743fdb71911002fc5117f39619e5",
										"label": "Helge-Christopher Spahrbier"
									},
									{
										"id": "f5460ac01b5b9d10a221ddb7ab4bcbb9",
										"label": "Melanie Ruttkowski"
									},
									{
										"id": "f5af66b01baf5110a221ddb7ab4bcb6d",
										"label": "Sebastian Rolauffs"
									},
									{
										"id": "f64b34ab1b7e1950a221ddb7ab4bcbad",
										"label": "Witold Schimpf"
									},
									{
										"id": "f852d2f31bfc6010a221ddb7ab4bcbba",
										"label": "Peter Seethaler"
									},
									{
										"id": "f95c1199db0e49101d5873e3f3961921",
										"label": "Ursula Katharina Westermann"
									},
									{
										"id": "fa1096e8dbc4f91002fc5117f3961913",
										"label": "Karen Beier"
									},
									{
										"id": "fbd9b897dbba115002fc5117f39619f6",
										"label": "Frank Schellenberger"
									},
									{
										"id": "fd5dd1b8db31191002fc5117f396198c",
										"label": "Claudio Chirco"
									},
									{
										"id": "fd885404dbafe11002fc5117f396195d",
										"label": "Denise Senger"
									}
								],
								"properties": {
									"tooltip": "",
									"placeholder": "",
									"type": "preloaded",
									"table": "sys_user"
								}
							},
							{
								"label": "Who  is the sponsor of your technology? ",
								"name": "DR_Technology_sponsor_label",
								"order": "500",
								"id": "9645b1701b3b29103ab10edacd4bcba4",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "The sponsor provides financial or other resources to support the development, implementation, and maintenance of your technology project. ",
								"name": "DR_Technology_sponsor_description",
								"order": "525",
								"id": "2e6531301b3b29103ab10edacd4bcb57",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "title-tertiary",
									"tooltip": ""
								}
							},
							{
								"label": "Technology Sponsor",
								"name": "DR_Technology_sponsor",
								"order": "550",
								"id": "44e579b01b3b29103ab10edacd4bcbd8",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-typeahead",
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
							}
						],
						"order": "100",
						"visible": "true",
						"hideLabel": false
					},
					{
						"name": "Phase 0 - DR - Technology Scope Description",
						"questions": [
							{
								"label": "Technology Description",
								"name": "DR_technology_scope_label",
								"order": "50",
								"id": "de97d7ed1b7fe9103ab10edacd4bcb74",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
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
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Briefly describe the scope of your technology for someone who has never heard of it. A high level description/management summary is sufficient here. After you have confirmed the technology, you have the possibility to add a more detailed description.",
								"name": "DR_short_description_descripion",
								"order": "150",
								"id": "4ba43dfc1bf729103ab10edacd4bcb89",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "title-tertiary",
									"tooltip": ""
								}
							},
							{
								"label": "Short Description",
								"name": "DR_short_description ",
								"order": "200",
								"id": "b7b4f1701b3b29103ab10edacd4bcb81",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "true",
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
							}
						],
						"order": "200",
						"visible": "true",
						"hideLabel": false
					},
					{
						"name": "Phase 0 - DR - Technology SetUp Header",
						"questions": [
							{
								"label": "Technology Setup",
								"name": "DR_technology_setup_titel",
								"order": "100",
								"id": "b2a5fded1ba36d103ab10edacd4bcb15",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "header-secondary",
									"tooltip": ""
								}
							}
						],
						"order": "300",
						"visible": "true",
						"hideLabel": false
					},
					{
						"name": "Phase 0 - DR - Build Buy ",
						"questions": [
							{
								"label": "Do you plan to build a new or buy an existing technology?",
								"name": "DR_Technology_BuildBuy_label",
								"order": "100",
								"id": "4ade5515dbf5291002fc5117f3961955",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Please choose the most likely set up of your technology at this point in time. Select \"both\" if for example your technology is self-developed but also uses third-party chargeable modules/services.",
								"name": "DR_Technology_BuildBuy_description",
								"order": "125",
								"id": "51f568951ba32d103ab10edacd4bcb53",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "title-tertiary",
									"tooltip": ""
								}
							},
							{
								"label": "Technology Build/Buy",
								"name": "DR_Technology_BuildBuy",
								"order": "150",
								"id": "920f9dd1dbf5291002fc5117f396193e",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "true",
								"type": "now-radio-buttons",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "build",
										"label": "Build",
										"checked": false
									},
									{
										"id": "buy",
										"label": "Buy",
										"checked": false
									},
									{
										"id": "both",
										"label": "Both",
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
						"order": "400",
						"visible": "true",
						"hideLabel": false
					},
					{
						"name": "Phase 0 - DR - Technology Usage ",
						"questions": [
							{
								"label": "Technology Usage",
								"name": "DR_technology_usage_label",
								"order": "50",
								"id": "37a670551be32d103ab10edacd4bcb0e",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
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
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
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
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
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
										"checked": false
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
								"label": "Please select all territories where the technology will be deployed?",
								"name": "DR_Country_label",
								"order": "200",
								"id": "283f24b4db8ae55002fc5117f3961913",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "8bdeac74db8ae55002fc5117f3961909",
									"value": "",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
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
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-typeahead-multi",
								"has_dependency": true,
								"dependency": {
									"type": "simple",
									"id": "8bdeac74db8ae55002fc5117f3961909",
									"value": "",
									"cond_type": "==",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "00529298dba2ad5002fc5117f39619fb",
										"label": "Duygu Altinbasak"
									},
									{
										"id": "00680f1adb5344501d5873e3f39619d9",
										"label": "Qualys"
									},
									{
										"id": "0070e4971bb96150a221ddb7ab4bcb59",
										"label": "49097124-003"
									},
									{
										"id": "01d49dd71b878910a221ddb7ab4bcba4",
										"label": "Sennheiser electronic GmbH & Co. KG"
									},
									{
										"id": "023d33181b752510a221ddb7ab4bcbf4",
										"label": "Tiago Mendes"
									},
									{
										"id": "02a18a80dba3919002fc5117f39619ab",
										"label": "Bevan Therien"
									},
									{
										"id": "02d8cd9ddbcb00101d5873e3f3961975",
										"label": "OKI"
									},
									{
										"id": "02ed4bc91b91a510a221ddb7ab4bcb6f",
										"label": "PwC Bonaire"
									},
									{
										"id": "02ed4bc91b91a510a221ddb7ab4bcb8e",
										"label": "PwC China"
									},
									{
										"id": "02ed4bc91b91a510a221ddb7ab4bcb95",
										"label": "PwC El Salvador"
									},
									{
										"id": "02ed4bc91b91a510a221ddb7ab4bcba1",
										"label": "PwC Iraq"
									},
									{
										"id": "02ed4bc91b91a510a221ddb7ab4bcba8",
										"label": "PwC Japan IAC"
									},
									{
										"id": "02ed4bc91b91a510a221ddb7ab4bcbae",
										"label": "PwC Liberia"
									},
									{
										"id": "02ed4bc91b91a510a221ddb7ab4bcbc1",
										"label": "PwC Monaco"
									},
									{
										"id": "036b18b61bc9d990a221ddb7ab4bcb3e",
										"label": "Semira Olgac"
									},
									{
										"id": "042f35c1dbc05c101d5873e3f39619c8",
										"label": "Adobe"
									},
									{
										"id": "04bd8c861bfc2d10a221ddb7ab4bcbff",
										"label": "Johannes Wicke"
									},
									{
										"id": "0522b8701b241510a221ddb7ab4bcb96",
										"label": "Stephan Hollweg"
									},
									{
										"id": "05a78547db88619002fc5117f3961908",
										"label": "Yi Wei"
									},
									{
										"id": "05b89eab1bc49d10a221ddb7ab4bcb4c",
										"label": "Alina Tetik"
									},
									{
										"id": "05d64d78db31a51002fc5117f39619a7",
										"label": "Amira Abbes"
									},
									{
										"id": "066588dcdb7aad9002fc5117f3961906",
										"label": "Romy Griziaux"
									},
									{
										"id": "06ed4bc91b91a510a221ddb7ab4bcb6d",
										"label": "PwC Belgium"
									},
									{
										"id": "06ed4bc91b91a510a221ddb7ab4bcb8c",
										"label": "PwC Cayman Islands"
									},
									{
										"id": "06ed4bc91b91a510a221ddb7ab4bcb93",
										"label": "PwC Dutch Caribbean [Grouping]"
									},
									{
										"id": "06ed4bc91b91a510a221ddb7ab4bcb9f",
										"label": "PwC India"
									},
									{
										"id": "06ed4bc91b91a510a221ddb7ab4bcba6",
										"label": "PwC ITSCo UK"
									},
									{
										"id": "06ed4bc91b91a510a221ddb7ab4bcbac",
										"label": "PwC Laos"
									},
									{
										"id": "06ed4bc91b91a510a221ddb7ab4bcbbf",
										"label": "PwC Martinique"
									},
									{
										"id": "07090a901ba30510db8e40cfbb4bcb31",
										"label": "Conrad Poschmann"
									},
									{
										"id": "078d553a1b41a510a221ddb7ab4bcbb6",
										"label": "Alina Wagner"
									},
									{
										"id": "079da7451b812110a221ddb7ab4bcba6",
										"label": "Julian Balz"
									},
									{
										"id": "082f0078db77951002fc5117f396194a",
										"label": "Intel"
									},
									{
										"id": "08680f1adb5344501d5873e3f39619da",
										"label": "Flexera Software LLC"
									},
									{
										"id": "08df6cb41b3a0910a221ddb7ab4bcb77",
										"label": "Melena Schälling"
									},
									{
										"id": "0937491ddbcb00101d5873e3f39619af",
										"label": "ARP"
									},
									{
										"id": "093bcbd4db2bd19002fc5117f39619fe",
										"label": "Veronika Mucke"
									},
									{
										"id": "0a64c7a6dbaff4101d5873e3f3961939",
										"label": "Advisory"
									},
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcb6b",
										"label": "PwC Azerbaijan"
									},
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcb8a",
										"label": "PwC Cambodia"
									},
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcb91",
										"label": "PwC Democratic Republic of Congo"
									},
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcb98",
										"label": "PwC France [Grouping]"
									},
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcb9d",
										"label": "PwC Guyana"
									},
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcba4",
										"label": "PwC ITSCo Germany"
									},
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcbaa",
										"label": "PwC Kenya"
									},
									{
										"id": "0aed4bc91b91a510a221ddb7ab4bcbbd",
										"label": "PwC Malawi"
									},
									{
										"id": "0b370d1ddbcb00101d5873e3f3961994",
										"label": "Sennheiser"
									},
									{
										"id": "0b623289db92ed1002fc5117f3961928",
										"label": "Helena Sophia Reischel"
									},
									{
										"id": "0c2ff1c1dbc05c101d5873e3f396191f",
										"label": "Ivanti"
									},
									{
										"id": "0c37f4251b456110a221ddb7ab4bcb9e",
										"label": "Christopher Daws"
									},
									{
										"id": "0c702013db71615002fc5117f3961983",
										"label": "49097124-007"
									},
									{
										"id": "0c70e4971bb96150a221ddb7ab4bcb54",
										"label": "49097124-001"
									},
									{
										"id": "0d0cbb951b1a2150a221ddb7ab4bcb04",
										"label": "Syed Hasan Abid"
									},
									{
										"id": "0d0fa42edb581d50bf6b95e8f496191a",
										"label": "Gusmita Rizkiningrum"
									},
									{
										"id": "0d37491ddbcb00101d5873e3f39619b2",
										"label": "AVAYA"
									},
									{
										"id": "0d37491ddbcb00101d5873e3f39619d6",
										"label": "Biamp"
									},
									{
										"id": "0ed4884d1b278490a221ddb7ab4bcb7b",
										"label": "Red Hat"
									},
									{
										"id": "0ed8cd9ddbcb00101d5873e3f3961979",
										"label": "Peacock"
									},
									{
										"id": "0ed8cd9ddbcb00101d5873e3f396197d",
										"label": "Plustek"
									},
									{
										"id": "0eed4bc91b91a510a221ddb7ab4bcb8f",
										"label": "PwC Croatia"
									},
									{
										"id": "0eed4bc91b91a510a221ddb7ab4bcb96",
										"label": "PwC Fiji"
									},
									{
										"id": "0eed4bc91b91a510a221ddb7ab4bcb9b",
										"label": "PwC Greenland"
									},
									{
										"id": "0eed4bc91b91a510a221ddb7ab4bcba2",
										"label": "PwC Italy"
									},
									{
										"id": "0eed4bc91b91a510a221ddb7ab4bcbbb",
										"label": "PwC Lithuania"
									},
									{
										"id": "0eed85231b58e910a221ddb7ab4bcbd0",
										"label": "Tugba Dogan"
									},
									{
										"id": "0ef63f7b1b95a910a221ddb7ab4bcba0",
										"label": "Janyn Stippel"
									},
									{
										"id": "0f36ab10dbf609101d5873e3f39619a8",
										"label": "Dimitrina Dinkova"
									},
									{
										"id": "0f370d1ddbcb00101d5873e3f39619bc",
										"label": "Star Micronics"
									},
									{
										"id": "1137891ddbcb00101d5873e3f3961919",
										"label": "cab Produkttechnik GmbH & Co KG"
									},
									{
										"id": "1137891ddbcb00101d5873e3f396192c",
										"label": "Crestron"
									},
									{
										"id": "116b84061b879510a221ddb7ab4bcbfe",
										"label": "Marvin Zineker"
									},
									{
										"id": "11ed4f7d1bea9110a221ddb7ab4bcbed",
										"label": "Kiera Jasmin Todd"
									},
									{
										"id": "12284330db3cc9101d5873e3f3961976",
										"label": "Hire_8_10_R845 Surname_R845"
									},
									{
										"id": "129068971bb96150a221ddb7ab4bcbb9",
										"label": "PWC201202071849"
									},
									{
										"id": "12ed4bc91b91a510a221ddb7ab4bcbc8",
										"label": "PwC Oman"
									},
									{
										"id": "12ed4bc91b91a510a221ddb7ab4bcbcf",
										"label": "PwC Saba"
									},
									{
										"id": "12ed4bc91b91a510a221ddb7ab4bcbd6",
										"label": "PwC Sri Lanka [Grouping]"
									},
									{
										"id": "12ed4bc91b91a510a221ddb7ab4bcbdd",
										"label": "PwC Turkmenistan"
									},
									{
										"id": "13370d1ddbcb00101d5873e3f39619cb",
										"label": "Telekom"
									},
									{
										"id": "145f71811b849c10a221ddb7ab4bcb18",
										"label": "Mortice Kern Systems"
									},
									{
										"id": "14803a311ba5a150a221ddb7ab4bcb9b",
										"label": "Azel van Zyl"
									},
									{
										"id": "153ffd411b849c10a221ddb7ab4bcb47",
										"label": "SafeNet"
									},
									{
										"id": "1690a013db71615002fc5117f396196f",
										"label": "PWC112233445566"
									},
									{
										"id": "16ed4bc91b91a510a221ddb7ab4bcbc6",
										"label": "PwC Nigeria"
									},
									{
										"id": "16ed4bc91b91a510a221ddb7ab4bcbcd",
										"label": "PwC Republic of Guinea"
									},
									{
										"id": "16ed4bc91b91a510a221ddb7ab4bcbd4",
										"label": "PwC South Korea"
									},
									{
										"id": "16ed4bc91b91a510a221ddb7ab4bcbdb",
										"label": "PwC Timor Leste (East Timor)"
									},
									{
										"id": "16eedb721b804110a221ddb7ab4bcb6f",
										"label": "NewHireDE_15_11 TEST"
									},
									{
										"id": "188e8dbbdb8bf8101d5873e3f3961990",
										"label": "Amazon.com, Inc."
									},
									{
										"id": "19c7a9f3dbfbd15002fc5117f396194b",
										"label": "Maximilian Wolf"
									},
									{
										"id": "19cfde1a1b7a8d10a221ddb7ab4bcb84",
										"label": "Test Wiedereintritt"
									},
									{
										"id": "1aed4bc91b91a510a221ddb7ab4bcbc4",
										"label": "PwC Netherlands Antillies"
									},
									{
										"id": "1aed4bc91b91a510a221ddb7ab4bcbcb",
										"label": "PwC Portugal"
									},
									{
										"id": "1aed4bc91b91a510a221ddb7ab4bcbd2",
										"label": "PwC Singapore"
									},
									{
										"id": "1aed4bc91b91a510a221ddb7ab4bcbd9",
										"label": "PwC Tahiti (French Polynesia) [Do Not Use]"
									},
									{
										"id": "1aed4bc91b91a510a221ddb7ab4bcbe0",
										"label": "PwC United Kingdom [Grouping]"
									},
									{
										"id": "1aed4bc91b91a510a221ddb7ab4bcbe5",
										"label": "PwC Zimbabwe"
									},
									{
										"id": "1b0aa1f3db65611002fc5117f39619fd",
										"label": "Jan Gröne"
									},
									{
										"id": "1b9a5ce8dbf2151002fc5117f396192b",
										"label": "Matthias Gloßner"
									},
									{
										"id": "1bcdc0fc1b9ec110a221ddb7ab4bcb5f",
										"label": "Florian Schuch"
									},
									{
										"id": "1c5f71811b849c10a221ddb7ab4bcb19",
										"label": "bowbridge Software GmbH"
									},
									{
										"id": "1c73424ddbc05c101d5873e3f3961966",
										"label": "Ringtail"
									},
									{
										"id": "1cfddd54db6a1d5002fc5117f39619b2",
										"label": "Gereon Walter"
									},
									{
										"id": "1d94c2091b849c10a221ddb7ab4bcba7",
										"label": "Schomäcker GmbH"
									},
									{
										"id": "1d9d12c91b466950a221ddb7ab4bcb8d",
										"label": "PwC Strategy& (Austria) GmbH"
									},
									{
										"id": "1de5c0c9dbab8c501d5873e3f39619ed",
										"label": "MSFT"
									},
									{
										"id": "1e37c91ddbcb00101d5873e3f396199c",
										"label": "Klein & Hummel"
									},
									{
										"id": "1e9068971bb96150a221ddb7ab4bcbb5",
										"label": "49097124-002"
									},
									{
										"id": "1eed4bc91b91a510a221ddb7ab4bcbc2",
										"label": "PwC Mozambique"
									},
									{
										"id": "1eed4bc91b91a510a221ddb7ab4bcbc9",
										"label": "PwC Paraguay"
									},
									{
										"id": "1eed4bc91b91a510a221ddb7ab4bcbd0",
										"label": "PwC Serbia"
									},
									{
										"id": "1eed4bc91b91a510a221ddb7ab4bcbd7",
										"label": "PwC Swaziland"
									},
									{
										"id": "1eed4bc91b91a510a221ddb7ab4bcbde",
										"label": "PwC United Arab Emirates (UAE)"
									},
									{
										"id": "1eed4bc91b91a510a221ddb7ab4bcbe3",
										"label": "PwC Vietnam"
									},
									{
										"id": "1f370d1ddbcb00101d5873e3f39619c4",
										"label": "Tascam"
									},
									{
										"id": "1fab6ba6dba41d10bf6b95e8f49619e2",
										"label": "Genia Rudneva"
									},
									{
										"id": "20d4484d1b278490a221ddb7ab4bcb39",
										"label": "NECVMWar"
									},
									{
										"id": "2147fa321b0e4150a221ddb7ab4bcbe4",
										"label": "PricewaterhouseCoopers GmbH Wirtschaftsprüfungsgesellschaft"
									},
									{
										"id": "214b2963dbd5d15002fc5117f39619a5",
										"label": "Konrad Schmidt"
									},
									{
										"id": "216f8327db7da15002fc5117f3961988",
										"label": "Kim Rilana Kliemann"
									},
									{
										"id": "218f40741b7f5510a221ddb7ab4bcbca",
										"label": "Famatech"
									},
									{
										"id": "21b44ad6db631d9002fc5117f396191b",
										"label": "Yannick Wessel"
									},
									{
										"id": "2237c91ddbcb00101d5873e3f39619ab",
										"label": "Kramer"
									},
									{
										"id": "227dbc40db8098101d5873e3f39619ce",
										"label": "Hewlett-Packard Company"
									},
									{
										"id": "23321214dbb1251002fc5117f39619d2",
										"label": "Omnisys"
									},
									{
										"id": "23321214dbb1251002fc5117f39619da",
										"label": "PulseSecure"
									},
									{
										"id": "23b7e70adb4a511002fc5117f396196b",
										"label": "Michelle Neth"
									},
									{
										"id": "24e1eb561bfa1550a221ddb7ab4bcb9a",
										"label": "Thao Thu Tran"
									},
									{
										"id": "252e10271b7f1150a221ddb7ab4bcbe1",
										"label": "Hannes Schuller"
									},
									{
										"id": "2537891ddbcb00101d5873e3f396199c",
										"label": "Extron"
									},
									{
										"id": "258f40741b7f5510a221ddb7ab4bcbd6",
										"label": "Google LLC"
									},
									{
										"id": "27358089dbab8c501d5873e3f3961905",
										"label": "McAfee"
									},
									{
										"id": "27bb1b201b808510a221ddb7ab4bcb5a",
										"label": "Lisa Gabriele Senger"
									},
									{
										"id": "28116f041be0ad10a221ddb7ab4bcb5d",
										"label": "Chian Chyn Wong"
									},
									{
										"id": "28219d20db4a85101d5873e3f3961944",
										"label": "Jonas Baginski"
									},
									{
										"id": "28ca83a71bda9150a221ddb7ab4bcbe8",
										"label": "Madeleine Lakatos"
									},
									{
										"id": "2937891ddbcb00101d5873e3f396197d",
										"label": "Eizo"
									},
									{
										"id": "294244c6db22659002fc5117f39619f5",
										"label": "Lâle Ören"
									},
									{
										"id": "298f40741b7f5510a221ddb7ab4bcbce",
										"label": "Adobe Systems"
									},
									{
										"id": "298f40741b7f5510a221ddb7ab4bcbd4",
										"label": "PricewaterhouseCoopers"
									},
									{
										"id": "2acb48a7db981190bf6b95e8f49619b6",
										"label": "André Schulz"
									},
									{
										"id": "2c755aaadb2ee59002fc5117f396199e",
										"label": "Sascha Wulf"
									},
									{
										"id": "2d8f40741b7f5510a221ddb7ab4bcbcb",
										"label": "GN Audio A/S"
									},
									{
										"id": "2f321214dbb1251002fc5117f39619ce",
										"label": "Monotype"
									},
									{
										"id": "2ff0a6551b968510a221ddb7ab4bcb63",
										"label": "Jannik Wiegert"
									},
									{
										"id": "3092251c1b4e6550a221ddb7ab4bcb50",
										"label": "Tobias Zichner"
									},
									{
										"id": "31c58d84db8098101d5873e3f3961913",
										"label": "Quest Software"
									},
									{
										"id": "31d8cd9ddbcb00101d5873e3f396192b",
										"label": "Apple Computer, Inc."
									},
									{
										"id": "31ed4bc91b91a510a221ddb7ab4bcb25",
										"label": "India PwC Service Delivery Centres (SDC) [Grouping]"
									},
									{
										"id": "31ed4bc91b91a510a221ddb7ab4bcb68",
										"label": "PwC Angola"
									},
									{
										"id": "32370d1ddbcb00101d5873e3f3961936",
										"label": "Panasonic"
									},
									{
										"id": "32aa84221bc20150a221ddb7ab4bcb9e",
										"label": "Ronja Julia Dertinger"
									},
									{
										"id": "32b84d4cdb2a2d5002fc5117f3961985",
										"label": "Alper Colak"
									},
									{
										"id": "33df76431be68110a221ddb7ab4bcb10",
										"label": "Johannes Baumann"
									},
									{
										"id": "33f3ee3cdb89a51002fc5117f396195b",
										"label": "Yanne Rönnau"
									},
									{
										"id": "356935891bfa4910a221ddb7ab4bcbc7",
										"label": "Sophie Paul"
									},
									{
										"id": "35d8cd9ddbcb00101d5873e3f3961966",
										"label": "Kyocera"
									},
									{
										"id": "35e504cd1b278490a221ddb7ab4bcb7b",
										"label": "PostgreSQL Global Development Group"
									},
									{
										"id": "35ed4bc91b91a510a221ddb7ab4bcb66",
										"label": "Japan TLS"
									},
									{
										"id": "365f3851db46a95002fc5117f39619fa",
										"label": "Veit Friedrich Lux"
									},
									{
										"id": "366909dddbcb00101d5873e3f3961996",
										"label": "PwC IT Services Europe GmbH"
									},
									{
										"id": "36860e54db71251002fc5117f396195f",
										"label": "DisplayLink"
									},
									{
										"id": "370c02ffdb06691002fc5117f3961912",
										"label": "Lucas Stadelmeyer"
									},
									{
										"id": "3987eea0db229d5002fc5117f39619cc",
										"label": "Mohammed Mishal"
									},
									{
										"id": "39c58d84db8098101d5873e3f3961911",
										"label": "FalconStor"
									},
									{
										"id": "3a458089dbab8c501d5873e3f39619f3",
										"label": "Hewlett Packard Enterprise"
									},
									{
										"id": "3a7ba0badb769d1002fc5117f39619bf",
										"label": "Toshiyuki Ando"
									},
									{
										"id": "3adb05961be66590a221ddb7ab4bcb32",
										"label": "Laurenz Titus Laurs"
									},
									{
										"id": "3b0b1cd9db3b191002fc5117f39619a2",
										"label": "Malte-Jannes Krüger"
									},
									{
										"id": "3b25c2491b849c10a221ddb7ab4bcb63",
										"label": "Passmark Software"
									},
									{
										"id": "3b789542dbe85910bf6b95e8f4961922",
										"label": "Pascal Görlinger"
									},
									{
										"id": "3b8d7080db8098101d5873e3f39619e3",
										"label": "Dynatrace LLC"
									},
									{
										"id": "3c6719c91b924510a221ddb7ab4bcb6c",
										"label": "Markus Mai"
									},
									{
										"id": "3c91c06a1b695d50a221ddb7ab4bcbc8",
										"label": "Johanna Richter"
									},
									{
										"id": "3ca11e38dba1595002fc5117f3961925",
										"label": "Megan Hartnett"
									},
									{
										"id": "3d4d82f2db61295002fc5117f3961987",
										"label": "SpringWorker MarSixthF"
									},
									{
										"id": "3dd88d9ddbcb00101d5873e3f3961983",
										"label": "Allied Telesyn"
									},
									{
										"id": "3dd8cd9ddbcb00101d5873e3f3961957",
										"label": "Hersteller-Router"
									},
									{
										"id": "3ded4bc91b91a510a221ddb7ab4bcb69",
										"label": "PwC Aruba"
									},
									{
										"id": "3e45c089dbab8c501d5873e3f3961972",
										"label": "QLogic"
									},
									{
										"id": "3e870c9cdb8245101d5873e3f3961979",
										"label": "Katharina Pütz"
									},
									{
										"id": "3e8f80741b7f5510a221ddb7ab4bcbc6",
										"label": "WinZip"
									},
									{
										"id": "3ec817d61b9a2550a221ddb7ab4bcb24",
										"label": "Jeff Thielmann"
									},
									{
										"id": "4137491ddbcb00101d5873e3f39619d2",
										"label": "Beyerdynamic"
									},
									{
										"id": "42d8cd9ddbcb00101d5873e3f3961984",
										"label": "Rimage"
									},
									{
										"id": "42ed4bc91b91a510a221ddb7ab4bcb6b",
										"label": "PwC Austria"
									},
									{
										"id": "42ed4bc91b91a510a221ddb7ab4bcb8a",
										"label": "PwC Bulgaria"
									},
									{
										"id": "42ed4bc91b91a510a221ddb7ab4bcb91",
										"label": "PwC Czech Republic"
									},
									{
										"id": "42ed4bc91b91a510a221ddb7ab4bcb98",
										"label": "PwC France and Francophone Maghreb [Grouping]"
									},
									{
										"id": "42ed4bc91b91a510a221ddb7ab4bcb9d",
										"label": "PwC Guatemala"
									},
									{
										"id": "42ed4bc91b91a510a221ddb7ab4bcba4",
										"label": "PwC ITSCo Czech Republic"
									},
									{
										"id": "42ed4bc91b91a510a221ddb7ab4bcba9",
										"label": "PwC Kazakhstan"
									},
									{
										"id": "42ed4bc91b91a510a221ddb7ab4bcbbd",
										"label": "PwC Madagascar"
									},
									{
										"id": "4372aca51b378910db8e40cfbb4bcbe2",
										"label": "Thorsten Leisinger"
									},
									{
										"id": "43d742a4db3f551002fc5117f3961930",
										"label": "Tim Oehrle"
									},
									{
										"id": "4454cc1fdb18e91002fc5117f39619cd",
										"label": "Florian David Lischeid"
									},
									{
										"id": "4537491ddbcb00101d5873e3f39619bc",
										"label": "Barco"
									},
									{
										"id": "4613e38e1b2a0150a221ddb7ab4bcbc1",
										"label": "Karina Temoche Gonzalez"
									},
									{
										"id": "46d4884d1b278490a221ddb7ab4bcb7a",
										"label": "None"
									},
									{
										"id": "46ed4bc91b91a510a221ddb7ab4bcb8f",
										"label": "PwC Cote d'Ivoire"
									},
									{
										"id": "46ed4bc91b91a510a221ddb7ab4bcb96",
										"label": "PwC Faroe Islands"
									},
									{
										"id": "46ed4bc91b91a510a221ddb7ab4bcb9b",
										"label": "PwC Greece"
									},
									{
										"id": "46ed4bc91b91a510a221ddb7ab4bcba2",
										"label": "PwC Israel"
									},
									{
										"id": "46ed4bc91b91a510a221ddb7ab4bcbbb",
										"label": "PwC Liechtenstein"
									},
									{
										"id": "46ed4bc91b91a510a221ddb7ab4bcbc2",
										"label": "PwC Morocco"
									},
									{
										"id": "4755f5f51bb625d0a221ddb7ab4bcb3c",
										"label": "Vladyslav Popal"
									},
									{
										"id": "47860e54db71251002fc5117f3961975",
										"label": "Lenovo"
									},
									{
										"id": "48680f1adb5344501d5873e3f39619d7",
										"label": "Commvault"
									},
									{
										"id": "48702013db71615002fc5117f3961989",
										"label": "49113163-014"
									},
									{
										"id": "495684dd1b2e0d10a221ddb7ab4bcb23",
										"label": "Peter Zhu"
									},
									{
										"id": "4a578f621bd6c110a221ddb7ab4bcb3e",
										"label": "Luca Kindermann"
									},
									{
										"id": "4ad8cd9ddbcb00101d5873e3f396196b",
										"label": "LSK"
									},
									{
										"id": "4ad8cd9ddbcb00101d5873e3f3961976",
										"label": "Olympus"
									},
									{
										"id": "4aed4bc91b91a510a221ddb7ab4bcb6e",
										"label": "PwC Bolivia"
									},
									{
										"id": "4aed4bc91b91a510a221ddb7ab4bcb8d",
										"label": "PwC Chile"
									},
									{
										"id": "4aed4bc91b91a510a221ddb7ab4bcb94",
										"label": "PwC Egypt"
									},
									{
										"id": "4aed4bc91b91a510a221ddb7ab4bcba0",
										"label": "PwC Indonesia [Grouping]"
									},
									{
										"id": "4aed4bc91b91a510a221ddb7ab4bcba7",
										"label": "PwC Japan"
									},
									{
										"id": "4aed4bc91b91a510a221ddb7ab4bcbad",
										"label": "PwC Lesotho"
									},
									{
										"id": "4aed4bc91b91a510a221ddb7ab4bcbc0",
										"label": "PwC Moldova"
									},
									{
										"id": "4b3787731b7c2550a221ddb7ab4bcb51",
										"label": "Margareta Sophie Theobald"
									},
									{
										"id": "4c8ec26e1b959d10a221ddb7ab4bcb49",
										"label": "Christian Miess"
									},
									{
										"id": "4cda1fa71b406190a221ddb7ab4bcb74",
										"label": "Franziska Höhn"
									},
									{
										"id": "4e46b17e1be24110a221ddb7ab4bcbc1",
										"label": "Hannah Kühl"
									},
									{
										"id": "4eed2ce51b0e0d10a221ddb7ab4bcb1b",
										"label": "Constança Thomaz Moura Reis Vaz"
									},
									{
										"id": "4eed4bc91b91a510a221ddb7ab4bcb6c",
										"label": "PwC Bangladesh"
									},
									{
										"id": "4eed4bc91b91a510a221ddb7ab4bcb8b",
										"label": "PwC Cape Verde"
									},
									{
										"id": "4eed4bc91b91a510a221ddb7ab4bcb92",
										"label": "PwC Dominican Republic"
									},
									{
										"id": "4eed4bc91b91a510a221ddb7ab4bcb99",
										"label": "PwC Georgia"
									},
									{
										"id": "4eed4bc91b91a510a221ddb7ab4bcb9e",
										"label": "PwC Iceland"
									},
									{
										"id": "4eed4bc91b91a510a221ddb7ab4bcba5",
										"label": "PwC ITSCo Singapore"
									},
									{
										"id": "4eed4bc91b91a510a221ddb7ab4bcbab",
										"label": "PwC Kyrgyzstan"
									},
									{
										"id": "4eed4bc91b91a510a221ddb7ab4bcbbe",
										"label": "PwC Malta"
									},
									{
										"id": "4eeefd81dbc05c101d5873e3f3961970",
										"label": "Ceyoniq Technology GmbH"
									},
									{
										"id": "4f6a59e4db45651002fc5117f396198e",
										"label": "Felix Seifarth"
									},
									{
										"id": "502e02c5db80695002fc5117f396198f",
										"label": "Yolanda Beirão"
									},
									{
										"id": "505f86b81bff8510a221ddb7ab4bcb52",
										"label": "Michael Hanselmann"
									},
									{
										"id": "50aa9e46dbe0295002fc5117f39619c1",
										"label": "Iwona Grandjean"
									},
									{
										"id": "517bb5561ba44510a221ddb7ab4bcb14",
										"label": "ABHISHEK MUNDALE"
									},
									{
										"id": "524180b71be50d10a221ddb7ab4bcbc5",
										"label": "Raya AL-Halaseh"
									},
									{
										"id": "528161dbdbe3111002fc5117f396196b",
										"label": "Kay Lubitzsch"
									},
									{
										"id": "5290a013db71615002fc5117f39619e4",
										"label": "49113163-017"
									},
									{
										"id": "52d7e1221b154110a221ddb7ab4bcb2f",
										"label": "Lena Keller"
									},
									{
										"id": "52ed4bc91b91a510a221ddb7ab4bcbc4",
										"label": "PwC Netherlands"
									},
									{
										"id": "52ed4bc91b91a510a221ddb7ab4bcbcb",
										"label": "PwC Poland"
									},
									{
										"id": "52ed4bc91b91a510a221ddb7ab4bcbd2",
										"label": "PwC Sierra Leone"
									},
									{
										"id": "52ed4bc91b91a510a221ddb7ab4bcbd9",
										"label": "PwC Switzerland [Grouping]"
									},
									{
										"id": "52ed4bc91b91a510a221ddb7ab4bcbe0",
										"label": "PwC United Kingdom Offshore [Grouping]"
									},
									{
										"id": "52ed4bc91b91a510a221ddb7ab4bcbe5",
										"label": "PwC Zambia"
									},
									{
										"id": "52fb690bdb52295002fc5117f39619cb",
										"label": "Janina Baal"
									},
									{
										"id": "52fe3beb1bbfb010a221ddb7ab4bcbfd",
										"label": "CONTINGENT WORKER SUPPLIER DE"
									},
									{
										"id": "54445d721b864150a221ddb7ab4bcb55",
										"label": "Malte Oberhoff"
									},
									{
										"id": "5522de10dbc805101d5873e3f3961985",
										"label": "Sophia Feldl"
									},
									{
										"id": "55798cefdb2a05101d5873e3f396194e",
										"label": "Erik Sewerin"
									},
									{
										"id": "5637c91ddbcb00101d5873e3f396197b",
										"label": "HUAWEI"
									},
									{
										"id": "564120b51b0c6950a221ddb7ab4bcb8b",
										"label": "Lennart Langer"
									},
									{
										"id": "56e89f8d1bb30910a221ddb7ab4bcbd3",
										"label": "Marco Luong"
									},
									{
										"id": "56ed4bc91b91a510a221ddb7ab4bcbc9",
										"label": "PwC Papua New Guinea"
									},
									{
										"id": "56ed4bc91b91a510a221ddb7ab4bcbd0",
										"label": "PwC Senegal"
									},
									{
										"id": "56ed4bc91b91a510a221ddb7ab4bcbd7",
										"label": "PwC St Pierre and Miquelon"
									},
									{
										"id": "56ed4bc91b91a510a221ddb7ab4bcbde",
										"label": "PwC Ukraine"
									},
									{
										"id": "56ed4bc91b91a510a221ddb7ab4bcbe3",
										"label": "PwC Venezuela"
									},
									{
										"id": "5726510e1b764d10a221ddb7ab4bcbda",
										"label": "Test Supplier 01"
									},
									{
										"id": "578fc0741b7f5510a221ddb7ab4bcbf5",
										"label": "SimonTatham"
									},
									{
										"id": "5a0294481b705150a221ddb7ab4bcbed",
										"label": "Sophie Doll"
									},
									{
										"id": "5aed4bc91b91a510a221ddb7ab4bcbc7",
										"label": "PwC Oceania"
									},
									{
										"id": "5aed4bc91b91a510a221ddb7ab4bcbce",
										"label": "PwC Rwanda"
									},
									{
										"id": "5aed4bc91b91a510a221ddb7ab4bcbd5",
										"label": "PwC Sri Lanka"
									},
									{
										"id": "5aed4bc91b91a510a221ddb7ab4bcbdc",
										"label": "PwC Turkey"
									},
									{
										"id": "5b146ea3db1a89101d5873e3f39619a1",
										"label": "Michael Proppe"
									},
									{
										"id": "5b370d1ddbcb00101d5873e3f39619d7",
										"label": "Yamaha"
									},
									{
										"id": "5b48b18c1b600910a221ddb7ab4bcbc7",
										"label": "Andrea Pedevilla"
									},
									{
										"id": "5b8fc0741b7f5510a221ddb7ab4bcbf4",
										"label": "Ghisler"
									},
									{
										"id": "5d2ace681ba16d10a221ddb7ab4bcb8d",
										"label": "Ben-Lukas Koch"
									},
									{
										"id": "5d3ffd411b849c10a221ddb7ab4bcb45",
										"label": "Kofax"
									},
									{
										"id": "5d58cbd61b9b4c50a221ddb7ab4bcb24",
										"label": "VMware, Inc."
									},
									{
										"id": "5d5dd0591b2ded10a221ddb7ab4bcb3e",
										"label": "Anita Kowalik"
									},
									{
										"id": "5d64ae521b9a5d10a221ddb7ab4bcb5a",
										"label": "Elizabeth Louise Cossens"
									},
									{
										"id": "5e32b9e7db6ee99002fc5117f396190b",
										"label": "Gerrit Mahnke"
									},
									{
										"id": "5e37c91ddbcb00101d5873e3f396198c",
										"label": "Imerge"
									},
									{
										"id": "5e817baddbe3599002fc5117f3961920",
										"label": "Jule Irps"
									},
									{
										"id": "5eed4bc91b91a510a221ddb7ab4bcbc5",
										"label": "PwC Nicaragua"
									},
									{
										"id": "5eed4bc91b91a510a221ddb7ab4bcbcc",
										"label": "PwC Republic of Congo"
									},
									{
										"id": "5eed4bc91b91a510a221ddb7ab4bcbd3",
										"label": "PwC South Africa"
									},
									{
										"id": "5eed4bc91b91a510a221ddb7ab4bcbda",
										"label": "PwC Thailand"
									},
									{
										"id": "5eed4bc91b91a510a221ddb7ab4bcbe1",
										"label": "PwC US Virgin Islands"
									},
									{
										"id": "5f0fb1c1dbc05c101d5873e3f396198e",
										"label": "One Identity LLC"
									},
									{
										"id": "5fe50642dbdbcd901d5873e3f3961978",
										"label": "Adriana Siki"
									},
									{
										"id": "60a073231b5ab010a221ddb7ab4bcb2c",
										"label": "EDP"
									},
									{
										"id": "6134cf94db92c5101d5873e3f396196c",
										"label": "Christiane Markeng"
									},
									{
										"id": "6137891ddbcb00101d5873e3f3961974",
										"label": "Denon"
									},
									{
										"id": "6163024ddbc05c101d5873e3f39619da",
										"label": "Nmap Project"
									},
									{
										"id": "618f40741b7f5510a221ddb7ab4bcbd3",
										"label": "Google"
									},
									{
										"id": "62fe8da81bb2ed90a221ddb7ab4bcb4b",
										"label": "Franziska Ottrembka"
									},
									{
										"id": "631fc917db04dd10bf6b95e8f496191b",
										"label": "Abdoul Fabre"
									},
									{
										"id": "63644446dbfd01101d5873e3f396190b",
										"label": "Peter von Bodelschwingh"
									},
									{
										"id": "65104245dbc05c101d5873e3f396191c",
										"label": "SAP BusinessObjects"
									},
									{
										"id": "6537891ddbcb00101d5873e3f3961982",
										"label": "Electro Voice"
									},
									{
										"id": "65ae7e931bb61950a221ddb7ab4bcb71",
										"label": "Jens Opretzka"
									},
									{
										"id": "667e7df51b1b5550a221ddb7ab4bcbd9",
										"label": "Christina Iltschenko"
									},
									{
										"id": "675492251b102510a221ddb7ab4bcb63",
										"label": "Janis Kesten-Kühne"
									},
									{
										"id": "681fd0a41b773410a221ddb7ab4bcbd1",
										"label": "PricewaterhouseCoopers Statsautoris Revi"
									},
									{
										"id": "6937891ddbcb00101d5873e3f3961988",
										"label": "Epson"
									},
									{
										"id": "696ea5f51b21d950a221ddb7ab4bcbc0",
										"label": "Philipp Rücker"
									},
									{
										"id": "698f40741b7f5510a221ddb7ab4bcbca",
										"label": "OmniSys IT GmbH & Co. KG"
									},
									{
										"id": "698f40741b7f5510a221ddb7ab4bcbcf",
										"label": "WalkMe"
									},
									{
										"id": "6a31dc79db92515002fc5117f39619fe",
										"label": "Thea Wittemann"
									},
									{
										"id": "6b321214dbb1251002fc5117f39619d0",
										"label": "NVIDIA"
									},
									{
										"id": "6b321214dbb1251002fc5117f39619d8",
										"label": "Porsche"
									},
									{
										"id": "6b3fdce41bda2d10a221ddb7ab4bcb58",
										"label": "Ilhan Atac"
									},
									{
										"id": "6b88eb5cdb2c9110bf6b95e8f4961901",
										"label": "Julian Ludwig"
									},
									{
										"id": "6c27ee431b05e510a221ddb7ab4bcb5b",
										"label": "Sarah Michelle Weber"
									},
									{
										"id": "6d8f40741b7f5510a221ddb7ab4bcbcd",
										"label": "Cisco WebEx LLC"
									},
									{
										"id": "6e22670ddbbea1d002fc5117f3961936",
										"label": "Hedwig Böhrer"
									},
									{
										"id": "6e4a24c9db8c1c101d5873e3f3961969",
										"label": "VMware Virtual RAM"
									},
									{
										"id": "6f086e8cdb4d81101d5873e3f396193a",
										"label": "Jarmo Kruse"
									},
									{
										"id": "6f5f71811b849c10a221ddb7ab4bcbb4",
										"label": "Notepad++ Team"
									},
									{
										"id": "707176b6dbd981101d5873e3f396195a",
										"label": "Jannik Kienz"
									},
									{
										"id": "709490c11b809c10a221ddb7ab4bcbc9",
										"label": "AdoptOpenJDK"
									},
									{
										"id": "7137891ddbcb00101d5873e3f39619c3",
										"label": "Hewlett Packard"
									},
									{
										"id": "716056091b35e510a221ddb7ab4bcb29",
										"label": "Alina Bär"
									},
									{
										"id": "71de40341b7f5510a221ddb7ab4bcb10",
										"label": "Microsoft"
									},
									{
										"id": "72370d1ddbcb00101d5873e3f3961955",
										"label": "Polyspan"
									},
									{
										"id": "72370d1ddbcb00101d5873e3f396195d",
										"label": "Roland"
									},
									{
										"id": "72458089dbab8c501d5873e3f39619f2",
										"label": "Hewlett-Packard Development Company, L.P"
									},
									{
										"id": "7324289f1b2ef010a221ddb7ab4bcbb0",
										"label": "DE COUPA TEST API EUR SUPP02"
									},
									{
										"id": "759121ce1b094910a221ddb7ab4bcb9f",
										"label": "Ariana Bartsch"
									},
									{
										"id": "75d8cd9ddbcb00101d5873e3f396193b",
										"label": "DAFÜR"
									},
									{
										"id": "75ed4bc91b91a510a221ddb7ab4bcb69",
										"label": "PwC Armenia"
									},
									{
										"id": "76370d1ddbcb00101d5873e3f396192e",
										"label": "Optoma"
									},
									{
										"id": "76370d1ddbcb00101d5873e3f3961950",
										"label": "Pioneer"
									},
									{
										"id": "768213391b822110a221ddb7ab4bcb87",
										"label": "Philipp Sander"
									},
									{
										"id": "768f80741b7f5510a221ddb7ab4bcbc7",
										"label": "WinZip Computing, S.L"
									},
									{
										"id": "76fa0c55db86191002fc5117f39619dc",
										"label": "Miriam Quintino Bastos"
									},
									{
										"id": "79140f691bf8e910a221ddb7ab4bcbc3",
										"label": "Sebastiaan Peetermans"
									},
									{
										"id": "791f2d95db66a19002fc5117f3961926",
										"label": "Mark Willeke"
									},
									{
										"id": "7944bdbc1b6c2150a221ddb7ab4bcba8",
										"label": "Sultan Tuncel"
									},
									{
										"id": "79ed4bc91b91a510a221ddb7ab4bcb67",
										"label": "PwC Algeria"
									},
									{
										"id": "7a370d1ddbcb00101d5873e3f3961929",
										"label": "NEC"
									},
									{
										"id": "7a4227bbdb8c5150bf6b95e8f496194f",
										"label": "Alexander Treß"
									},
									{
										"id": "7aa41b79db5981101d5873e3f3961969",
										"label": "Jasmin Kittelberger"
									},
									{
										"id": "7b1be2eb1b675110a221ddb7ab4bcb08",
										"label": "Victoria Lynn Roos"
									},
									{
										"id": "7b325214dbb1251002fc5117f396195f",
										"label": "Verdasys"
									},
									{
										"id": "7bb13c9bdb835d1002fc5117f3961915",
										"label": "Ellen Marie Enders"
									},
									{
										"id": "7bd6df8bdbe5695002fc5117f39619a1",
										"label": "Hannes Kessel"
									},
									{
										"id": "7c252353db1c01101d5873e3f3961979",
										"label": "Nick Werner"
									},
									{
										"id": "7c77675fdb82c1101d5873e3f396194a",
										"label": "Dhritiman Pal"
									},
									{
										"id": "7d37891ddbcb00101d5873e3f39619bc",
										"label": "Fujitsu-Siemens"
									},
									{
										"id": "7dd8cd9ddbcb00101d5873e3f3961927",
										"label": "AOC2"
									},
									{
										"id": "7dd8cd9ddbcb00101d5873e3f3961967",
										"label": "Lancom"
									},
									{
										"id": "7de504cd1b278490a221ddb7ab4bcb79",
										"label": "Fedora Project"
									},
									{
										"id": "7ded4bc91b91a510a221ddb7ab4bcb65",
										"label": "Japan KYO"
									},
									{
										"id": "7e370d1ddbcb00101d5873e3f3961961",
										"label": "RSA"
									},
									{
										"id": "7f9401efdbd145101d5873e3f39619e9",
										"label": "Amelie Köhrer"
									},
									{
										"id": "80680f1adb5344501d5873e3f39619d6",
										"label": "Splunk"
									},
									{
										"id": "8137491ddbcb00101d5873e3f39619ef",
										"label": "BlackBerry"
									},
									{
										"id": "82d8cd9ddbcb00101d5873e3f396196d",
										"label": "Macom"
									},
									{
										"id": "82d8cd9ddbcb00101d5873e3f3961980",
										"label": "Powis"
									},
									{
										"id": "82ed4bc91b91a510a221ddb7ab4bcb6e",
										"label": "PwC Bhutan"
									},
									{
										"id": "82ed4bc91b91a510a221ddb7ab4bcb8d",
										"label": "PwC Channel Islands"
									},
									{
										"id": "82ed4bc91b91a510a221ddb7ab4bcb94",
										"label": "PwC Ecuador"
									},
									{
										"id": "82ed4bc91b91a510a221ddb7ab4bcba0",
										"label": "PwC Indonesia"
									},
									{
										"id": "82ed4bc91b91a510a221ddb7ab4bcba7",
										"label": "PwC Jamaica"
									},
									{
										"id": "82ed4bc91b91a510a221ddb7ab4bcbad",
										"label": "PwC Lebanon"
									},
									{
										"id": "82ed4bc91b91a510a221ddb7ab4bcbc0",
										"label": "PwC Mexico"
									},
									{
										"id": "83811b6bdb4909101d5873e3f3961981",
										"label": "Tatiana Filceva"
									},
									{
										"id": "845442651b2a5110a221ddb7ab4bcbf4",
										"label": "Peter Reubelt"
									},
									{
										"id": "8470e4971bb96150a221ddb7ab4bcb8c",
										"label": "TESTDEVICE01"
									},
									{
										"id": "854f31811b849c10a221ddb7ab4bcb0b",
										"label": "Sharegate"
									},
									{
										"id": "864596eedb8405101d5873e3f396192d",
										"label": "Iris Kaifel"
									},
									{
										"id": "864e1c1e1b510110a221ddb7ab4bcb39",
										"label": "Fenja Ankele"
									},
									{
										"id": "86ed4bc91b91a510a221ddb7ab4bcb6c",
										"label": "PwC Bahrain"
									},
									{
										"id": "86ed4bc91b91a510a221ddb7ab4bcb8b",
										"label": "PwC Canada"
									},
									{
										"id": "86ed4bc91b91a510a221ddb7ab4bcb92",
										"label": "PwC Denmark [Grouping]"
									},
									{
										"id": "86ed4bc91b91a510a221ddb7ab4bcb99",
										"label": "PwC Gabon"
									},
									{
										"id": "86ed4bc91b91a510a221ddb7ab4bcb9e",
										"label": "PwC Hungary"
									},
									{
										"id": "86ed4bc91b91a510a221ddb7ab4bcba5",
										"label": "PwC ITSCo Romania"
									},
									{
										"id": "86ed4bc91b91a510a221ddb7ab4bcbab",
										"label": "PwC Kuwait"
									},
									{
										"id": "86ed4bc91b91a510a221ddb7ab4bcbbe",
										"label": "PwC Maldives"
									},
									{
										"id": "86eebd81dbc05c101d5873e3f396191e",
										"label": "SEAL Systems"
									},
									{
										"id": "89074ad2db59251002fc5117f3961959",
										"label": "Chana Kauert"
									},
									{
										"id": "8951b8e21b4e9110a221ddb7ab4bcb0b",
										"label": "Maresa Lena Kunau"
									},
									{
										"id": "8aa51f0c1b1ae910a221ddb7ab4bcbfb",
										"label": "Felix Seibert"
									},
									{
										"id": "8aed4bc91b91a510a221ddb7ab4bcb6a",
										"label": "PwC Australia [Grouping]"
									},
									{
										"id": "8aed4bc91b91a510a221ddb7ab4bcb89",
										"label": "PwC British Virgin Islands (BVI)"
									},
									{
										"id": "8aed4bc91b91a510a221ddb7ab4bcb90",
										"label": "PwC Cyprus"
									},
									{
										"id": "8aed4bc91b91a510a221ddb7ab4bcb97",
										"label": "PwC France"
									},
									{
										"id": "8aed4bc91b91a510a221ddb7ab4bcb9c",
										"label": "PwC Guam"
									},
									{
										"id": "8aed4bc91b91a510a221ddb7ab4bcba3",
										"label": "PwC ITSCo CEE"
									},
									{
										"id": "8aed4bc91b91a510a221ddb7ab4bcbbc",
										"label": "PwC Macedonia"
									},
									{
										"id": "8af41992db8f191002fc5117f39619fe",
										"label": "Katharina Lohmann"
									},
									{
										"id": "8b370d1ddbcb00101d5873e3f3961997",
										"label": "Sharp"
									},
									{
										"id": "8b370d1ddbcb00101d5873e3f39619b9",
										"label": "Sonus"
									},
									{
										"id": "8ba0258d1bd96510a221ddb7ab4bcbcd",
										"label": "Luis Schmidt"
									},
									{
										"id": "8c68cb1adb5344501d5873e3f3961906",
										"label": "CyberArk"
									},
									{
										"id": "8d1ca5311bbb8910a221ddb7ab4bcb9f",
										"label": "Niclas Feige"
									},
									{
										"id": "8e856de61b2bb050a221ddb7ab4bcb0f",
										"label": "UBS Switzerland AG"
									},
									{
										"id": "8ed333251b556110a221ddb7ab4bcb2c",
										"label": "Marco Tosetto"
									},
									{
										"id": "8ed4884d1b278490a221ddb7ab4bcb78",
										"label": "Puppet Labs"
									},
									{
										"id": "8ed8cd9ddbcb00101d5873e3f3961971",
										"label": "Nokia"
									},
									{
										"id": "8ee47c291bd31550a221ddb7ab4bcb7c",
										"label": "Tanner Engmann"
									},
									{
										"id": "8eed4bc91b91a510a221ddb7ab4bcb6f",
										"label": "PwC Botswana"
									},
									{
										"id": "8eed4bc91b91a510a221ddb7ab4bcb8e",
										"label": "PwC Costa Rica"
									},
									{
										"id": "8eed4bc91b91a510a221ddb7ab4bcb95",
										"label": "PwC Estonia"
									},
									{
										"id": "8eed4bc91b91a510a221ddb7ab4bcb9a",
										"label": "PwC Gibraltar"
									},
									{
										"id": "8eed4bc91b91a510a221ddb7ab4bcba1",
										"label": "PwC Isle of Man"
									},
									{
										"id": "8eed4bc91b91a510a221ddb7ab4bcbba",
										"label": "PwC Libya"
									},
									{
										"id": "8eed4bc91b91a510a221ddb7ab4bcbc1",
										"label": "PwC Montenegro"
									},
									{
										"id": "8fc3add71b1de510a221ddb7ab4bcbf4",
										"label": "Camila Fernandes"
									},
									{
										"id": "8fd006c5dbc05c101d5873e3f396195c",
										"label": "callas software gmbh"
									},
									{
										"id": "901e73ae1b846d50a221ddb7ab4bcbd4",
										"label": "Piotr Maczkowski"
									},
									{
										"id": "91412a80db92991002fc5117f39619d3",
										"label": "Hannes Glückert"
									},
									{
										"id": "9194c2091b849c10a221ddb7ab4bcba6",
										"label": "CommVault Systems"
									},
									{
										"id": "922e5efd1b421110a221ddb7ab4bcb9c",
										"label": "Carolin Rost"
									},
									{
										"id": "9237c91ddbcb00101d5873e3f3961978",
										"label": "Honeywell"
									},
									{
										"id": "929068971bb96150a221ddb7ab4bcbb4",
										"label": "49097124-100"
									},
									{
										"id": "92e4c9d61b515d10a221ddb7ab4bcbe8",
										"label": "Christian Derosa"
									},
									{
										"id": "92ed4bc91b91a510a221ddb7ab4bcbc7",
										"label": "PwC Norway"
									},
									{
										"id": "92ed4bc91b91a510a221ddb7ab4bcbce",
										"label": "PwC Romania"
									},
									{
										"id": "92ed4bc91b91a510a221ddb7ab4bcbd5",
										"label": "PwC Spain"
									},
									{
										"id": "92ed4bc91b91a510a221ddb7ab4bcbdc",
										"label": "PwC Tunisia"
									},
									{
										"id": "9303993bdb6e45101d5873e3f396190d",
										"label": "Oliver Wang"
									},
									{
										"id": "93d580c9dbab8c501d5873e3f3961920",
										"label": "HPE"
									},
									{
										"id": "94945969db4e591002fc5117f3961911",
										"label": "Tim Tolle"
									},
									{
										"id": "94ce9d62dbb8dd1002fc5117f3961999",
										"label": "Jade Pestell"
									},
									{
										"id": "969068971bb96150a221ddb7ab4bcbb7",
										"label": "49113163-013"
									},
									{
										"id": "96ed4bc91b91a510a221ddb7ab4bcbc5",
										"label": "PwC New Zealand"
									},
									{
										"id": "96ed4bc91b91a510a221ddb7ab4bcbcc",
										"label": "PwC Qatar"
									},
									{
										"id": "96ed4bc91b91a510a221ddb7ab4bcbd3",
										"label": "PwC Slovenia"
									},
									{
										"id": "96ed4bc91b91a510a221ddb7ab4bcbda",
										"label": "PwC Tanzania"
									},
									{
										"id": "96ed4bc91b91a510a221ddb7ab4bcbe1",
										"label": "PwC Uruguay"
									},
									{
										"id": "970fb1c1dbc05c101d5873e3f396198d",
										"label": "LOGbinder, a division of Monterey Technology Group"
									},
									{
										"id": "972fbd411b849c10a221ddb7ab4bcb66",
										"label": "SharePoint PnP"
									},
									{
										"id": "97fda76adbd6555002fc5117f3961982",
										"label": "Dominik Keil"
									},
									{
										"id": "98254c49dbab8c501d5873e3f396196f",
										"label": "FALCON  "
									},
									{
										"id": "98ac568c1b728510a221ddb7ab4bcbc8",
										"label": "Liuba Busuioc"
									},
									{
										"id": "995bbd271b4b1d10a221ddb7ab4bcb8c",
										"label": "Julius Lustfeld"
									},
									{
										"id": "9a37c91ddbcb00101d5873e3f3961999",
										"label": "JBL"
									},
									{
										"id": "9a37c91ddbcb00101d5873e3f39619a4",
										"label": "Konftel"
									},
									{
										"id": "9aed4bc91b91a510a221ddb7ab4bcbc3",
										"label": "PwC Namibia"
									},
									{
										"id": "9aed4bc91b91a510a221ddb7ab4bcbca",
										"label": "PwC Philippines"
									},
									{
										"id": "9aed4bc91b91a510a221ddb7ab4bcbd1",
										"label": "PwC Seychelles"
									},
									{
										"id": "9aed4bc91b91a510a221ddb7ab4bcbd8",
										"label": "PwC Switzerland"
									},
									{
										"id": "9aed4bc91b91a510a221ddb7ab4bcbdf",
										"label": "PwC United Kingdom and United Kingdom Offshore [Grouping]"
									},
									{
										"id": "9aed4bc91b91a510a221ddb7ab4bcbe4",
										"label": "PwC Yemen [Do Not Use]"
									},
									{
										"id": "9b0e976c1bfd4110a221ddb7ab4bcb03",
										"label": "Grant Waterfall"
									},
									{
										"id": "9c6bc2d81bd15510a221ddb7ab4bcb07",
										"label": "Rania Aoulad"
									},
									{
										"id": "9d37891ddbcb00101d5873e3f3961928",
										"label": "CommTech"
									},
									{
										"id": "9e90a013db71615002fc5117f3961970",
										"label": "49043892-006"
									},
									{
										"id": "9eeb9f60dbeaed5002fc5117f39619d8",
										"label": "My Tran"
									},
									{
										"id": "9eed4bc91b91a510a221ddb7ab4bcbc8",
										"label": "PwC Panama"
									},
									{
										"id": "9eed4bc91b91a510a221ddb7ab4bcbcf",
										"label": "PwC Saudi Arabia"
									},
									{
										"id": "9eed4bc91b91a510a221ddb7ab4bcbd6",
										"label": "PwC St Maarten"
									},
									{
										"id": "9eed4bc91b91a510a221ddb7ab4bcbdd",
										"label": "PwC Uganda"
									},
									{
										"id": "9f370d1ddbcb00101d5873e3f39619c7",
										"label": "TechniSat"
									},
									{
										"id": "9fc50a9b1b31a150a221ddb7ab4bcbc9",
										"label": "Kerstin Alexandra Militello"
									},
									{
										"id": "9ff7fa8edbe99d5002fc5117f3961900",
										"label": "Olga Heckmann"
									},
									{
										"id": "a02ff72f1b52a950a221ddb7ab4bcb9e",
										"label": "PERWorker PEROneRegressionJ"
									},
									{
										"id": "a0780b67dbec911002fc5117f3961972",
										"label": "Senad Zeric"
									},
									{
										"id": "a137891ddbcb00101d5873e3f396196c",
										"label": "Cretivo"
									},
									{
										"id": "a1c4ff66dbc905101d5873e3f39619e4",
										"label": "Christian Mesisca"
									},
									{
										"id": "a35f71811b849c10a221ddb7ab4bcbb1",
										"label": "Conspect Consulting & ICT"
									},
									{
										"id": "a537891ddbcb00101d5873e3f396197a",
										"label": "Disign Radio Labs"
									},
									{
										"id": "a58f40741b7f5510a221ddb7ab4bcbc9",
										"label": "PwC"
									},
									{
										"id": "a58f40741b7f5510a221ddb7ab4bcbd0",
										"label": "IBM"
									},
									{
										"id": "a5d7c8c7db3d515002fc5117f3961931",
										"label": "Lauren Garcia Berner"
									},
									{
										"id": "a6056d471b411110a221ddb7ab4bcb9e",
										"label": "Oksana Rathey"
									},
									{
										"id": "a61ab30edbad255002fc5117f3961989",
										"label": "Ariel Kevin Foli Locoh"
									},
									{
										"id": "a78e9eaa1b8f1910a221ddb7ab4bcb70",
										"label": "Leo Diallo"
									},
									{
										"id": "a845f8cf1b245d10a221ddb7ab4bcb6c",
										"label": "Michelle Vedra"
									},
									{
										"id": "a901570c1b7ed910a221ddb7ab4bcba3",
										"label": "André Feise"
									},
									{
										"id": "a98f40741b7f5510a221ddb7ab4bcbd1",
										"label": "McAfee LLC"
									},
									{
										"id": "a9b5452c1b3f4510a221ddb7ab4bcb2f",
										"label": "Antje Heissel"
									},
									{
										"id": "a9be2cbb1b5c8510a221ddb7ab4bcb56",
										"label": "Felix Banse"
									},
									{
										"id": "a9e7108bdbaf9d9002fc5117f39619e7",
										"label": "Marc Krupp"
									},
									{
										"id": "aafa0efa1bf39d10a221ddb7ab4bcb80",
										"label": "Rainer Hidalgo"
									},
									{
										"id": "ab5f71811b849c10a221ddb7ab4bcbaf",
										"label": "ZappySys LLC"
									},
									{
										"id": "ab5f71811b849c10a221ddb7ab4bcbb2",
										"label": "Devart software development"
									},
									{
										"id": "ac4b51b21b1b5950a221ddb7ab4bcb4f",
										"label": "DeuHire DeusurnameA"
									},
									{
										"id": "ac677f191bfe1150a221ddb7ab4bcb9b",
										"label": "Adrian Willig"
									},
									{
										"id": "ac7e33801be91550a221ddb7ab4bcbeb",
										"label": "Victoria Egupova"
									},
									{
										"id": "ac9a0a021bf6d150a221ddb7ab4bcbe7",
										"label": "Ciaran Houton"
									},
									{
										"id": "ae983936dbdc5d50bf6b95e8f4961941",
										"label": "PwC DE Testing CLIENT 1"
									},
									{
										"id": "aea829781bb77410a221ddb7ab4bcb2e",
										"label": "PwC Yeminli Mali Musavirlik A.S."
									},
									{
										"id": "af056b681bc75110a221ddb7ab4bcbc9",
										"label": "Sebastian Zirngibl"
									},
									{
										"id": "af6d3c461b99a110a221ddb7ab4bcbb6",
										"label": "Pranay Bhatia"
									},
									{
										"id": "afcad9cedb1a915002fc5117f3961913",
										"label": "Reka Aschenbrenner"
									},
									{
										"id": "b1d8cd9ddbcb00101d5873e3f3961938",
										"label": "Compaq"
									},
									{
										"id": "b1ed4bc91b91a510a221ddb7ab4bcb67",
										"label": "PwC Albania"
									},
									{
										"id": "b2370d1ddbcb00101d5873e3f396194d",
										"label": "Phillips"
									},
									{
										"id": "b2860e54db71251002fc5117f396195b",
										"label": "Cisco"
									},
									{
										"id": "b3325214dbb1251002fc5117f396195e",
										"label": "Software"
									},
									{
										"id": "b51e4c63db06d51002fc5117f3961974",
										"label": "Alaa Abdolrahim"
									},
									{
										"id": "b598b536dbdc5d50bf6b95e8f49619d6",
										"label": "Matthias Kafitz"
									},
									{
										"id": "b5ed4bc91b91a510a221ddb7ab4bcb65",
										"label": "Japan IF"
									},
									{
										"id": "b659e3e6dbfa41501d5873e3f39619ce",
										"label": "Christoph Tatje"
									},
									{
										"id": "b8891ef5db6681101d5873e3f39619c0",
										"label": "Fabian Schmitz"
									},
									{
										"id": "b937891ddbcb00101d5873e3f39619b0",
										"label": "Fohhn Audio"
									},
									{
										"id": "b94042c11b849c10a221ddb7ab4bcb81",
										"label": "Red Gate Software"
									},
									{
										"id": "b9c58d84db8098101d5873e3f396190f",
										"label": "IDM Computer Solutions"
									},
									{
										"id": "b9d8cd9ddbcb00101d5873e3f3961960",
										"label": "Juniper"
									},
									{
										"id": "ba054849dbab8c501d5873e3f396190a",
										"label": "Cylance"
									},
									{
										"id": "ba6909dddbcb00101d5873e3f396198a",
										"label": "PwC GmbH WPG"
									},
									{
										"id": "ba860e54db71251002fc5117f396195c",
										"label": "Citrix"
									},
									{
										"id": "bb388ec21b415990a221ddb7ab4bcb7e",
										"label": "Sabrina Kempter"
									},
									{
										"id": "bbbafc551b261110a221ddb7ab4bcbb9",
										"label": "Jenny Nußbaum"
									},
									{
										"id": "bc08187d1b450910a221ddb7ab4bcbf6",
										"label": "Sarah Konnerth"
									},
									{
										"id": "bc0b9a271bf95150a221ddb7ab4bcb00",
										"label": "Pascal Lortz"
									},
									{
										"id": "bd880c221b36e5d0a221ddb7ab4bcb10",
										"label": "Julia Sophie Frühling"
									},
									{
										"id": "bdd8cd9ddbcb00101d5873e3f396193c",
										"label": "Datalogic"
									},
									{
										"id": "bded4bc91b91a510a221ddb7ab4bcb68",
										"label": "PwC Argentina and Uruguay"
									},
									{
										"id": "be0ef54ddb969d1002fc5117f396190d",
										"label": "Luisa Mentenich"
									},
									{
										"id": "be370d1ddbcb00101d5873e3f3961959",
										"label": "QNAP"
									},
									{
										"id": "bf6c51e6db0341901d5873e3f39619c5",
										"label": "Josef Stepina"
									},
									{
										"id": "bffc8d99db4f00101d5873e3f3961905",
										"label": "PwC Certific. Serv. GmbH"
									},
									{
										"id": "bffd055adb7581101d5873e3f3961902",
										"label": "Varun Vijay Kumar"
									},
									{
										"id": "c0702013db71615002fc5117f396198b",
										"label": "PWC201210060212"
									},
									{
										"id": "c123c60ddbc05c101d5873e3f3961989",
										"label": "Standardfirmenname"
									},
									{
										"id": "c123c60ddbc05c101d5873e3f396198c",
										"label": "INTENSIO GmbH"
									},
									{
										"id": "c137491ddbcb00101d5873e3f39619fb",
										"label": "Bose"
									},
									{
										"id": "c167f5c31b286110a221ddb7ab4bcb18",
										"label": "Lina Hendricks"
									},
									{
										"id": "c1daf6691b794510a221ddb7ab4bcb08",
										"label": "Benjamin Quiring"
									},
									{
										"id": "c27aa7fadb34691002fc5117f3961956",
										"label": "Claudia Feick"
									},
									{
										"id": "c29549b9dbd2a15002fc5117f396196a",
										"label": "Philipp Käsche"
									},
									{
										"id": "c2ba5a301b0a8910a221ddb7ab4bcb21",
										"label": "Martina Tursch"
									},
									{
										"id": "c2d4884d1b278490a221ddb7ab4bcb7d",
										"label": "(none)"
									},
									{
										"id": "c2ed4bc91b91a510a221ddb7ab4bcb6a",
										"label": "PwC Australia"
									},
									{
										"id": "c2ed4bc91b91a510a221ddb7ab4bcb89",
										"label": "PwC Brazil"
									},
									{
										"id": "c2ed4bc91b91a510a221ddb7ab4bcb90",
										"label": "PwC Curacao"
									},
									{
										"id": "c2ed4bc91b91a510a221ddb7ab4bcb97",
										"label": "PwC Finland"
									},
									{
										"id": "c2ed4bc91b91a510a221ddb7ab4bcb9c",
										"label": "PwC Guadeloupe"
									},
									{
										"id": "c2ed4bc91b91a510a221ddb7ab4bcba3",
										"label": "PwC ITSCo Canada"
									},
									{
										"id": "c2ed4bc91b91a510a221ddb7ab4bcbbc",
										"label": "PwC Luxembourg"
									},
									{
										"id": "c37790921b221510a221ddb7ab4bcb92",
										"label": "Deniz Dilchert"
									},
									{
										"id": "c3bc72b01b6ac910a221ddb7ab4bcbbc",
										"label": "Ekaterina Kozlova"
									},
									{
										"id": "c537491ddbcb00101d5873e3f39619de",
										"label": "Bittner"
									},
									{
										"id": "c5e4886fdb0bb8101d5873e3f3961909",
										"label": "Hays (Schweiz) AG"
									},
									{
										"id": "c63cb48bdb71215002fc5117f3961918",
										"label": "Julia Heiden"
									},
									{
										"id": "c6ad71231b78e150a221ddb7ab4bcbf2",
										"label": "Ramona Teresa Henn"
									},
									{
										"id": "c6d8cd9ddbcb00101d5873e3f3961973",
										"label": "Nortel"
									},
									{
										"id": "c6ed4bc91b91a510a221ddb7ab4bcb6f",
										"label": "PwC Bosnia and Herzegovina"
									},
									{
										"id": "c6ed4bc91b91a510a221ddb7ab4bcb8e",
										"label": "PwC Colombia"
									},
									{
										"id": "c6ed4bc91b91a510a221ddb7ab4bcb95",
										"label": "PwC Equatorial Guinea"
									},
									{
										"id": "c6ed4bc91b91a510a221ddb7ab4bcb9a",
										"label": "PwC Ghana"
									},
									{
										"id": "c6ed4bc91b91a510a221ddb7ab4bcba1",
										"label": "PwC Ireland (Republic of)"
									},
									{
										"id": "c6ed4bc91b91a510a221ddb7ab4bcba8",
										"label": "PwC Jordan"
									},
									{
										"id": "c6ed4bc91b91a510a221ddb7ab4bcbc1",
										"label": "PwC Mongolia"
									},
									{
										"id": "c7370d1ddbcb00101d5873e3f39619aa",
										"label": "Shure"
									},
									{
										"id": "c76591f31b541110a221ddb7ab4bcb08",
										"label": "Raphael Köpfli"
									},
									{
										"id": "c7860e54db71251002fc5117f396196f",
										"label": "GNNetcomAS"
									},
									{
										"id": "c923c60ddbc05c101d5873e3f396198a",
										"label": "Softland"
									},
									{
										"id": "cad8cd9ddbcb00101d5873e3f396196e",
										"label": "Manufacturer Beam"
									},
									{
										"id": "cad8cd9ddbcb00101d5873e3f3961981",
										"label": "PSC"
									},
									{
										"id": "cad8cd9ddbcb00101d5873e3f396199d",
										"label": "Xerox"
									},
									{
										"id": "caed4bc91b91a510a221ddb7ab4bcb6d",
										"label": "PwC Bermuda"
									},
									{
										"id": "caed4bc91b91a510a221ddb7ab4bcb8c",
										"label": "PwC Chad"
									},
									{
										"id": "caed4bc91b91a510a221ddb7ab4bcb93",
										"label": "PwC East Caribbean (Barbados)"
									},
									{
										"id": "caed4bc91b91a510a221ddb7ab4bcb9f",
										"label": "PwC India [Grouping]"
									},
									{
										"id": "caed4bc91b91a510a221ddb7ab4bcba6",
										"label": "PwC ITSCo USA"
									},
									{
										"id": "caed4bc91b91a510a221ddb7ab4bcbac",
										"label": "PwC Latvia"
									},
									{
										"id": "caed4bc91b91a510a221ddb7ab4bcbbf",
										"label": "PwC Mauritius"
									},
									{
										"id": "cb1ae7881b19a110a221ddb7ab4bcba0",
										"label": "PwC Germany"
									},
									{
										"id": "cb1b76d01b315510a221ddb7ab4bcbae",
										"label": "Florian Schmidt"
									},
									{
										"id": "cbf4d0a31b700110a221ddb7ab4bcb84",
										"label": "Vita Shtypa"
									},
									{
										"id": "cc702013db71615002fc5117f3961987",
										"label": "49043892-005"
									},
									{
										"id": "cd1147ca1b02cd10a221ddb7ab4bcb59",
										"label": "Koray Kilic"
									},
									{
										"id": "cd37491ddbcb00101d5873e3f39619ce",
										"label": "Behringer"
									},
									{
										"id": "cd37491ddbcb00101d5873e3f39619f7",
										"label": "Bosch"
									},
									{
										"id": "cdcef6cedb1c89101d5873e3f3961968",
										"label": "Seon-Ho Kim"
									},
									{
										"id": "cdd1db561b859990a221ddb7ab4bcb90",
										"label": "Yu Shao"
									},
									{
										"id": "ceed4bc91b91a510a221ddb7ab4bcb6b",
										"label": "PwC Bahamas"
									},
									{
										"id": "ceed4bc91b91a510a221ddb7ab4bcb8a",
										"label": "PwC Cameroon"
									},
									{
										"id": "ceed4bc91b91a510a221ddb7ab4bcb91",
										"label": "PwC Denmark"
									},
									{
										"id": "ceed4bc91b91a510a221ddb7ab4bcb98",
										"label": "PwC French Guiana"
									},
									{
										"id": "ceed4bc91b91a510a221ddb7ab4bcb9d",
										"label": "PwC Honduras"
									},
									{
										"id": "ceed4bc91b91a510a221ddb7ab4bcba4",
										"label": "PwC ITSCo Netherlands"
									},
									{
										"id": "ceed4bc91b91a510a221ddb7ab4bcbaa",
										"label": "PwC Kosovo"
									},
									{
										"id": "ceed4bc91b91a510a221ddb7ab4bcbbd",
										"label": "PwC Malaysia"
									},
									{
										"id": "cf370d1ddbcb00101d5873e3f39619bf",
										"label": "Tandberg"
									},
									{
										"id": "d0175034db91651002fc5117f3961995",
										"label": "Anna Lochmann"
									},
									{
										"id": "d0208e811b849c10a221ddb7ab4bcba9",
										"label": "The Gpg4win Project"
									},
									{
										"id": "d03ea2791bb79910a221ddb7ab4bcb7e",
										"label": "Jane Gao"
									},
									{
										"id": "d094764d1ba98110a221ddb7ab4bcb56",
										"label": "WorkerJan SurnameFA"
									},
									{
										"id": "d1b40cb4dbb9d51002fc5117f3961940",
										"label": "Tabea Marschall"
									},
									{
										"id": "d1caa05b1b790510a221ddb7ab4bcbdf",
										"label": "Lize Minnaar"
									},
									{
										"id": "d1e5c0c9dbab8c501d5873e3f39619ef",
										"label": "http://www.microsoft.com"
									},
									{
										"id": "d2ed4bc91b91a510a221ddb7ab4bcbc3",
										"label": "PwC Myanmar"
									},
									{
										"id": "d2ed4bc91b91a510a221ddb7ab4bcbca",
										"label": "PwC Peru"
									},
									{
										"id": "d2ed4bc91b91a510a221ddb7ab4bcbd1",
										"label": "PwC Service Delivery Network (SDN) [Grouping]"
									},
									{
										"id": "d2ed4bc91b91a510a221ddb7ab4bcbd8",
										"label": "PwC Sweden"
									},
									{
										"id": "d2ed4bc91b91a510a221ddb7ab4bcbdf",
										"label": "PwC United Kingdom"
									},
									{
										"id": "d2ed4bc91b91a510a221ddb7ab4bcbe4",
										"label": "PwC West Bank and Gaza"
									},
									{
										"id": "d361d5d71bb51150a221ddb7ab4bcb30",
										"label": "Karla Kolumna"
									},
									{
										"id": "d4416305dbbfa8501d5873e3f3961986",
										"label": "Internal Firm Services"
									},
									{
										"id": "d55a78b3db8d211002fc5117f3961918",
										"label": "Simon Weiland"
									},
									{
										"id": "d5f35cee1b8d2510a221ddb7ab4bcb2d",
										"label": "Madeleine Riebau"
									},
									{
										"id": "d637c91ddbcb00101d5873e3f3961973",
										"label": "Hitachi"
									},
									{
										"id": "d637c91ddbcb00101d5873e3f3961989",
										"label": "iiyama"
									},
									{
										"id": "d637c91ddbcb00101d5873e3f3961990",
										"label": "InFocus"
									},
									{
										"id": "d637c91ddbcb00101d5873e3f39619a1",
										"label": "KOBIL/TeleSec"
									},
									{
										"id": "d66e83d5db0109101d5873e3f3961930",
										"label": "Said El Masry"
									},
									{
										"id": "d690a013db71615002fc5117f39619e2",
										"label": "PWC201116135001"
									},
									{
										"id": "d6a53eca1b7fc910a221ddb7ab4bcbe6",
										"label": "Clemens Martin Schmid"
									},
									{
										"id": "d6ed4bc91b91a510a221ddb7ab4bcbc8",
										"label": "PwC Pakistan"
									},
									{
										"id": "d6ed4bc91b91a510a221ddb7ab4bcbcf",
										"label": "PwC Saipan"
									},
									{
										"id": "d6ed4bc91b91a510a221ddb7ab4bcbd6",
										"label": "PwC St Eustatius"
									},
									{
										"id": "d6ed4bc91b91a510a221ddb7ab4bcbdd",
										"label": "PwC Turks and Caicos"
									},
									{
										"id": "d6ed4bc91b91a510a221ddb7ab4bcbe2",
										"label": "PwC Uzbekistan"
									},
									{
										"id": "d7370d1ddbcb00101d5873e3f39619d4",
										"label": "ViewSonic"
									},
									{
										"id": "d8208e811b849c10a221ddb7ab4bcbaa",
										"label": "The GnuPG Project"
									},
									{
										"id": "d8250c49dbab8c501d5873e3f396197d",
										"label": "HP"
									},
									{
										"id": "d82b18ccdb5d49101d5873e3f396197f",
										"label": "Florian Balz"
									},
									{
										"id": "d8bb4152dbc0c1101d5873e3f3961984",
										"label": "Kinan Salti"
									},
									{
										"id": "d8f40b331b4f5d10a221ddb7ab4bcbb5",
										"label": "Aleksandra Kominek"
									},
									{
										"id": "d958cbd61b9b4c50a221ddb7ab4bcb75",
										"label": "VMware"
									},
									{
										"id": "dab118ee1b931950a221ddb7ab4bcb0c",
										"label": "Ilona Strzedulla"
									},
									{
										"id": "daed4bc91b91a510a221ddb7ab4bcbc6",
										"label": "PwC Northern Ireland"
									},
									{
										"id": "daed4bc91b91a510a221ddb7ab4bcbcd",
										"label": "PwC Reunion"
									},
									{
										"id": "daed4bc91b91a510a221ddb7ab4bcbd4",
										"label": "PwC Southern Africa [Grouping]"
									},
									{
										"id": "daed4bc91b91a510a221ddb7ab4bcbdb",
										"label": "PwC Trinidad and Tobago"
									},
									{
										"id": "dbaa6028db20615002fc5117f3961912",
										"label": "Julia Wenning Ma"
									},
									{
										"id": "dc9e71601bb84d10a221ddb7ab4bcb7e",
										"label": "Nina Schmidt"
									},
									{
										"id": "dcb381e21be56550a221ddb7ab4bcbc9",
										"label": "Leon Blümel"
									},
									{
										"id": "debafafa1b106910a221ddb7ab4bcb48",
										"label": "Mark Erhan"
									},
									{
										"id": "deea79b21b821510a221ddb7ab4bcb33",
										"label": "Axel Malbrain"
									},
									{
										"id": "deed4bc91b91a510a221ddb7ab4bcbc4",
										"label": "PwC New Caledonia"
									},
									{
										"id": "deed4bc91b91a510a221ddb7ab4bcbcb",
										"label": "PwC Puerto Rico"
									},
									{
										"id": "deed4bc91b91a510a221ddb7ab4bcbd2",
										"label": "PwC Slovak Republic"
									},
									{
										"id": "deed4bc91b91a510a221ddb7ab4bcbd9",
										"label": "PwC Taiwan"
									},
									{
										"id": "deed4bc91b91a510a221ddb7ab4bcbe0",
										"label": "PwC United States of America"
									},
									{
										"id": "deed4bc91b91a510a221ddb7ab4bcbe5",
										"label": "US PwC Service Delivery Centres (SDC) [Grouping]"
									},
									{
										"id": "e0089e801b57f810a221ddb7ab4bcb91",
										"label": "Cigdem Cubukcu"
									},
									{
										"id": "e0157d4bdb3edd1002fc5117f39619f6",
										"label": "Josefin-Luise von Massow"
									},
									{
										"id": "e1346f5edba8695002fc5117f3961915",
										"label": "Georgia Firsching"
									},
									{
										"id": "e137891ddbcb00101d5873e3f3961977",
										"label": "Digital Engine"
									},
									{
										"id": "e1552045dbc0c5101d5873e3f39619d5",
										"label": "Diane Maurer"
									},
									{
										"id": "e18f40741b7f5510a221ddb7ab4bcbcb",
										"label": "Linotype"
									},
									{
										"id": "e18f40741b7f5510a221ddb7ab4bcbd2",
										"label": "Pulse Secure, LLC"
									},
									{
										"id": "e25458401b221550a221ddb7ab4bcbb9",
										"label": "Jonathan Boße"
									},
									{
										"id": "e3a1a8931b115150a221ddb7ab4bcbc7",
										"label": "Dave Düpre"
									},
									{
										"id": "e4e8334bdb4e651002fc5117f396190d",
										"label": "Laura Braun"
									},
									{
										"id": "e537891ddbcb00101d5873e3f3961985",
										"label": "Elium"
									},
									{
										"id": "e58f40741b7f5510a221ddb7ab4bcbc8",
										"label": "Citrix Systems"
									},
									{
										"id": "e58f40741b7f5510a221ddb7ab4bcbcc",
										"label": "Azalea"
									},
									{
										"id": "e78e50891b5dd510a221ddb7ab4bcbf9",
										"label": "Lisa Pfenning"
									},
									{
										"id": "e79421e91bb35910a221ddb7ab4bcb95",
										"label": "CAN101 FutureTest"
									},
									{
										"id": "e7e80aeddb4ee95002fc5117f3961949",
										"label": "Cemil Philip Parali"
									},
									{
										"id": "e8fe764a1b7e65d0a221ddb7ab4bcbc4",
										"label": "Mario Petoshati"
									},
									{
										"id": "e9258c49dbab8c501d5873e3f3961980",
										"label": "(Standard disk drives)"
									},
									{
										"id": "ea72cdaf1b462910a221ddb7ab4bcb02",
										"label": "Maria Covbasa"
									},
									{
										"id": "eba8f6a11bee6190a221ddb7ab4bcbc1",
										"label": "Irina Blumenfeld"
									},
									{
										"id": "ec37091ddbcb00101d5873e3f396198d",
										"label": "A+K"
									},
									{
										"id": "ec37491ddbcb00101d5873e3f396192d",
										"label": "AOC"
									},
									{
										"id": "ec9a447fdb2ce11002fc5117f39619d7",
										"label": "Mark Papke"
									},
									{
										"id": "ed37891ddbcb00101d5873e3f3961970",
										"label": "Dell"
									},
									{
										"id": "edf74a57db05c5101d5873e3f39619e3",
										"label": "Julia Trieu"
									},
									{
										"id": "ee5e13571b255110a221ddb7ab4bcb7f",
										"label": "Chris Anderson"
									},
									{
										"id": "f0653e571b7f7010a221ddb7ab4bcbce",
										"label": "Test Strategy"
									},
									{
										"id": "f1d8cd9ddbcb00101d5873e3f3961952",
										"label": "FaxHersteller"
									},
									{
										"id": "f1d8cd9ddbcb00101d5873e3f3961956",
										"label": "Hantz + Partner"
									},
									{
										"id": "f1fdd379db9c651002fc5117f3961999",
										"label": "Thomas Grau"
									},
									{
										"id": "f245c089dbab8c501d5873e3f3961974",
										"label": "Matrox Graphics"
									},
									{
										"id": "f27d83981b55e110a221ddb7ab4bcbe2",
										"label": "Nina Gramcko"
									},
									{
										"id": "f2b12a381b9b5150a221ddb7ab4bcb96",
										"label": "Malte Wollboldt"
									},
									{
										"id": "f2e665291b216150a221ddb7ab4bcb16",
										"label": "Maximilian Strohmajer"
									},
									{
										"id": "f35a834adb0d251002fc5117f3961946",
										"label": "Margarita Chicherina"
									},
									{
										"id": "f3cbb2f7dbe26d9002fc5117f3961919",
										"label": "Charlotte Breunig"
									},
									{
										"id": "f3e766911b6fd110a221ddb7ab4bcb02",
										"label": "Carolin Paukstadt"
									},
									{
										"id": "f49bc3711b381950a221ddb7ab4bcb6c",
										"label": "Thomas Kopilow"
									},
									{
										"id": "f4eaa90e1bcca950a221ddb7ab4bcbf3",
										"label": "Shipra Pant"
									},
									{
										"id": "f4fdb2ff1bfd8510a221ddb7ab4bcb40",
										"label": "Anna Schaten"
									},
									{
										"id": "f5bbb10d1b285510a221ddb7ab4bcbe7",
										"label": "Lukas Held"
									},
									{
										"id": "f5ed4bc91b91a510a221ddb7ab4bcb68",
										"label": "PwC Argentina"
									},
									{
										"id": "f6370d1ddbcb00101d5873e3f3961910",
										"label": "LG"
									},
									{
										"id": "f65e5105dba7959002fc5117f39619a4",
										"label": "Miruna Kandipan"
									},
									{
										"id": "f6cb2dcbdbf3fc101d5873e3f39619e1",
										"label": "PricewaterhouseCoopers Consultants (Shen"
									},
									{
										"id": "f89490c11b809c10a221ddb7ab4bcbc5",
										"label": "SAP AG"
									},
									{
										"id": "f9ed4bc91b91a510a221ddb7ab4bcb66",
										"label": "PwC Afghanistan [Do Not Use]"
									},
									{
										"id": "fa25d012db349d1002fc5117f396196e",
										"label": "Tom-Li Kämper"
									},
									{
										"id": "fa90d7a61b156510a221ddb7ab4bcb4a",
										"label": "Nini Asatiani Areshidze"
									},
									{
										"id": "fae0c6051b849c10a221ddb7ab4bcbc9",
										"label": "OpenSSL Win64 Installer Team"
									},
									{
										"id": "fb51c738db02d51002fc5117f39619ed",
										"label": "Laura Schnell"
									},
									{
										"id": "fcc0ca311b49a110a221ddb7ab4bcb8b",
										"label": "Falk Schlattmeier"
									},
									{
										"id": "fd4042c11b849c10a221ddb7ab4bcb7f",
										"label": "SQL Sentry, LLC"
									},
									{
										"id": "fda14249dbc05c101d5873e3f3961953",
										"label": "Changemaker Studios"
									},
									{
										"id": "fdd88d9ddbcb00101d5873e3f3961981",
										"label": "A1Touch Solution"
									},
									{
										"id": "fe370d1ddbcb00101d5873e3f3961949",
										"label": "Philips"
									},
									{
										"id": "fe458089dbab8c501d5873e3f39619f4",
										"label": "Hewlett Packard Enterprise Development LP"
									},
									{
										"id": "fe4774181be24910a221ddb7ab4bcb51",
										"label": "Julius Rucha"
									},
									{
										"id": "fe860e54db71251002fc5117f3961956",
										"label": "Amana"
									},
									{
										"id": "fecd2ac1db72d51002fc5117f3961911",
										"label": "Pablo de Miguel Palacio"
									},
									{
										"id": "ff323e05db3bf4101d5873e3f3961954",
										"label": "Process Analytics Factory GmbH"
									}
								],
								"properties": {
									"tooltip": "",
									"placeholder": "",
									"type": "preloaded",
									"table": "core_company"
								}
							},
							{
								"label": "Who will be the users of your technology?",
								"name": "DR_Technology_user_label",
								"order": "300",
								"id": "d000fcb4db8ae55002fc5117f396190d",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "Please select all that apply.",
								"name": "DR_Technology_user_description",
								"order": "325",
								"id": "c964eee11b676d103ab10edacd4bcb5a",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "title-tertiary",
									"tooltip": ""
								}
							},
							{
								"label": "Technology User",
								"name": "DR_Technology_user",
								"order": "350",
								"id": "882034f4db8ae55002fc5117f39619e2",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "pwc-checklist",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
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
											"value": "false"
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
								"label": "What is the distribution model of your technology?",
								"name": "DR_Technology_distribution_label",
								"order": "400",
								"id": "47b0f038db8ae55002fc5117f39619a1",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": {
										"type": "complex",
										"id": "",
										"value": "",
										"cond_type": "OR",
										"left": "",
										"right": ""
									},
									"right": ""
								},
								"has_message": false,
								"has_options": false,
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
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-radio-buttons",
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": {
										"type": "complex",
										"id": "",
										"value": "",
										"cond_type": "OR",
										"left": "",
										"right": ""
									},
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
										"id": "reselling",
										"label": "Reselling",
										"checked": false
									},
									{
										"id": "referral",
										"label": "Referral",
										"checked": false
									},
									{
										"id": "managed_service",
										"label": "Managed Service",
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
								"label": "Will the technology be used in connection with a specific industry?",
								"name": "DR_Technology_industry_label",
								"order": "500",
								"id": "8e317c38db8ae55002fc5117f39619e2",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "title-secondary",
									"tooltip": ""
								}
							},
							{
								"label": "This information will be helpful for the preparation of certification audits (e.g. ISO, TISAX).",
								"name": "DR_Technology_industry_description",
								"order": "525",
								"id": "5ed46a211b676d103ab10edacd4bcbfe",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "title-tertiary",
									"tooltip": ""
								}
							},
							{
								"label": "Technology Industry",
								"name": "DR_Technology_industry",
								"order": "550",
								"id": "ef617c38db8ae55002fc5117f39619a1",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
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
								"label": "What is your target go-live date?",
								"name": "DR_Target_go_live_label",
								"order": "600",
								"id": "69b1f878db8ae55002fc5117f39619d9",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
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
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-radio-buttons",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "within_the_next_three_months",
										"label": "within the next three months",
										"checked": false
									},
									{
										"id": "within_the_next_three_to_six_months",
										"label": "within the next three to six months",
										"checked": false
									},
									{
										"id": "more_than_six_months",
										"label": "more than six months",
										"checked": false
									},
									{
										"id": "go_live_date_has_not_yet_been_set",
										"label": "go-live date has not yet been set",
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
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
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
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
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
								"properties": {
									"tooltip": "",
									"show_counter": false,
									"maxlength": "400",
									"resize": "none"
								}
							}
						],
						"order": "500",
						"visible": "true",
						"hideLabel": false
					},
					{
						"name": "Phase 0 - DR - Use Case Analysis",
						"questions": [
							{
								"label": "Use Case Analysis",
								"name": "DR_usecase_label",
								"order": "50",
								"id": "8b06d2291b276d103ab10edacd4bcb0d",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
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
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "header-tertiary",
									"tooltip": ""
								}
							},
							{
								"label": "Market analysis description",
								"name": "DR_Market_analysis_description",
								"order": "125",
								"id": "5915ea251b676d103ab10edacd4bcb7f",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-rich-text",
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">A market analysis is the <strong>qualitative and quantitative assessment</strong> of a specific market for the purposes of business planning. The analysis typically examines the market&#39;s customer segment, value, volume, buying patterns, economic environment, competition, and barriers to entry such as regulation. Creating a market analysis helps you to understand your target audience and the conditions of the market, which will inform your ability to create a successful service or product. </span></p>"
								}
							},
							{
								"label": "Performed Market Analysis",
								"name": "DR_Market_analysis",
								"order": "150",
								"id": "b5743c3cdb8ae55002fc5117f3961916",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "true",
								"type": "now-radio-buttons",
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": "",
									"right": ""
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
								"label": "Please provide us with any relevant documentation.",
								"name": "DR_Market_analysis_documentation_label",
								"order": "200",
								"id": "2194f07cdb8ae55002fc5117f3961990",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
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
								"properties": {
									"size": "header-tertiary",
									"tooltip": ""
								}
							},
							{
								"label": "Market Analysis Documentation ",
								"name": "DR_Market_analysis_documentation",
								"order": "250",
								"id": "e0b4747cdb8ae55002fc5117f3961947",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-input",
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
								"properties": {
									"type": "text",
									"placeholder": "",
									"tooltip": null
								}
							},
							{
								"label": "Market Analysis Documentation Upload",
								"name": "DR_Market_analysis_upload",
								"order": "275",
								"id": "8e1de1f0dbcee55002fc5117f3961916",
								"hideLabel": "false",
								"value": {
									"recordID": "1e1a917e1b003550a221ddb7ab4bcb19",
									"tableName": "x_pwca2_0011077_values",
									"maxFileSize": "15",
									"allowedFileTypes": "all",
									"attachedFiles": []
								},
								"readOnly": "false",
								"required": "false",
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
								"properties": {}
							},
							{
								"label": "Have you created a preliminary business case?",
								"name": "DR_Business_case_label",
								"order": "300",
								"id": "956da9f0dbcee55002fc5117f39619a0",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "header-tertiary",
									"tooltip": ""
								}
							},
							{
								"label": "Business case description",
								"name": "DR_Business_case_description",
								"order": "325",
								"id": "fbc5a6251b676d103ab10edacd4bcb9e",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-rich-text",
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": false,
								"properties": {
									"html": "<p><span style=\"font-size: 10pt;\">A business case provides <strong>justification for undertaking a project</strong>. It evaluates the benefit, cost and risk of alternative options and provides a rationale for the preferred solution. </span></p>"
								}
							},
							{
								"label": "Created Business Case",
								"name": "DR_Business_case",
								"order": "350",
								"id": "ab017538dbcee55002fc5117f3961989",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "true",
								"type": "now-radio-buttons",
								"has_dependency": true,
								"dependency": {
									"type": "complex",
									"id": "",
									"value": "",
									"cond_type": "OR",
									"left": "",
									"right": ""
								},
								"has_message": false,
								"has_options": true,
								"options": [
									{
										"id": "no",
										"label": "No",
										"checked": false
									},
									{
										"id": "yes",
										"label": "Yes",
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
								"label": "Please provide us with any relevant documentation.",
								"name": "DR_Business_case_documentation_label",
								"order": "400",
								"id": "19d1b578dbcee55002fc5117f39619a2",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
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
								"properties": {
									"size": "header-tertiary",
									"tooltip": ""
								}
							},
							{
								"label": "Business Case Documentation ",
								"name": "DR_Business_case_documentation",
								"order": "450",
								"id": "14a2f9b8dbcee55002fc5117f39619c0",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-input",
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
								"properties": {
									"type": null,
									"placeholder": "",
									"tooltip": null
								}
							},
							{
								"label": "Business Case Documentation Upload",
								"name": "DR_Business_case_upload",
								"order": "475",
								"id": "2db2bdb8dbcee55002fc5117f39619f0",
								"hideLabel": "false",
								"value": {
									"recordID": "9e1a917e1b003550a221ddb7ab4bcb18",
									"tableName": "x_pwca2_0011077_values",
									"maxFileSize": "15",
									"allowedFileTypes": "all",
									"attachedFiles": []
								},
								"readOnly": "false",
								"required": "false",
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
								"properties": {}
							},
							{
								"label": "Do you want to share any additional documentation?",
								"name": "DR_additional_information_label",
								"order": "500",
								"id": "50e2f1f8dbcee55002fc5117f39619d5",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"size": "header-tertiary",
									"tooltip": ""
								}
							},
							{
								"label": "This could include things like pitch presentation, product information, concept paper, UI/UX designs, prototype/clickdummy etc.",
								"name": "DR_additional_information_description",
								"order": "525",
								"id": "56362e651b676d103ab10edacd4bcb03",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
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
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "true",
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
								"label": "Please provide us with any relevant documentation.",
								"name": "DR_additional_information_documentation_label",
								"order": "600",
								"id": "c093fdf8dbcee55002fc5117f39619a1",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-heading",
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
								"properties": {
									"size": "header-tertiary",
									"tooltip": ""
								}
							},
							{
								"label": "Additional Information Documentation ",
								"name": "DR_additional_information_documentation",
								"order": "650",
								"id": "caa3313cdbcee55002fc5117f396199d",
								"hideLabel": "false",
								"value": "",
								"readOnly": "false",
								"required": "false",
								"type": "now-input",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {
									"type": null,
									"placeholder": "",
									"tooltip": null
								}
							},
							{
								"label": "Additional Information Documentation Upload",
								"name": "DR_additional_information_upload",
								"order": "675",
								"id": "8bb3fdf8dbcee55002fc5117f39619da",
								"hideLabel": "false",
								"value": {
									"recordID": "5a1a917e1b003550a221ddb7ab4bcb19",
									"tableName": "x_pwca2_0011077_values",
									"maxFileSize": "15",
									"allowedFileTypes": "all",
									"attachedFiles": []
								},
								"readOnly": "false",
								"required": "false",
								"type": "pwc-attachment",
								"has_dependency": false,
								"dependency": {},
								"has_message": false,
								"has_options": false,
								"properties": {}
							}
						],
						"order": "600",
						"visible": "true",
						"hideLabel": false
					}
				],
				"user_id": "00265235db6a259002fc5117f3961946",
				"active": true,
				"project_id": "561a55fa1b003550a221ddb7ab4bcbed",
				"has_values": true
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