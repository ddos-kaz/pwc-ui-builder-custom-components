import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from './view';
import actionHandlers from './actionHandlers';

createCustomElement('pwca2-attachment-loader', {
	renderer: {type: snabbdom},
	view,
	initialState: {
		isLoading: false,
		fetchStatus: "",
        recordID: "",
        tableName: "",       
		attachedFiles: [],
		toUpdate: false,
		dragActive: false,
		toAddFiles: [],
		toRemoveFiles: []
	},
	properties: {
		recordID: {
			default: "31ffd2581bb6ad90a221ddb7ab4bcbb0"
		},
        tableName: {
            default: "x_pwca2_0011077_task"
        },     
        toUpdate: {
            default: false
        },
		attachedFiles: {
			default: [
				{
				   "name":"2022-03-11_08-11-12.png",
				   "id":"ce4d6f75974fe110fef4b6a6f053af1b",
				   "icon":"document-outline",
				   "state": "fetched"
				},
				{
				   "name":"2022-03-12_09-09-09.png",
				   "id":"d24de375974fe110fef4b6a6f053afcc",
				   "icon":"document-outline",
				   "state": "removed"
				},
				{
				   "name":"2022-03-13_10-36-55.png",
				   "id":"c24de375974fe110fef4b6a6f053afc9",
				   "icon":"document-outline",
				   "state": "fetched"
				},
				{
				   "name":"2022-03-14_08-42-11.png",
				   "id":"ce4d6f75974fe110fef4b6a6f053af1e",
				   "icon":"document-outline",
				   "state": "fetched"
				},
				{
				   "name":"DJN SLA_plus_template_20220112.xlsx",
				   "id":"b7c62fbd970fe110fef4b6a6f053af42",
				   "icon":"document-outline",
				   "state": "fetched"
				},
				{
				   "name":"djn software model import.xlsx",
				   "id":"afc91661978ba110fef4b6a6f053af5d",
				   "icon":"document-outline",
				   "state": "fetched"
				},
				{
				   "name":"DSC_3726.JPG",
				   "id":"a95de375974fe110fef4b6a6f053afaa",
				   "icon":"document-outline",
				   "state": "fetched"
				},
				{
				   "name":"mandatory.jpg",
				   "id":"cd0baff1974fe110fef4b6a6f053af5a",
				   "icon":"document-outline",
				   "state": "fetched"
				},
				{
				   "name":"Notifications_01.PNG",
				   "id":"c10b2bf1974fe110fef4b6a6f053af3c",
				   "icon":"document-outline",
				   "state": "loaded"
				}
			]
		}
	},
	styles,
	actionHandlers
});