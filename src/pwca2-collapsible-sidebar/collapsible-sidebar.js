import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from './view';
import actionHandlers from './actionHandlers';

createCustomElement('pwca2-collapsible-sidebar', {
	renderer: {type: snabbdom},
	view,
	initialState: {
        isLoading: false,
		collapsed: false,
		sidebarData: []
	},
	properties: {
		sidebarData: {
			default: [
				{
					"label": "Dashboard",
					"id": "dashboard",
					"url": "dashboard",
					"icon_name": "home-outline",
					"new_items": false,
					"record_count": 0
				}, {
					"label": "Projects",
					"id": "projects",
					"url": "projects",
					"icon_name": "document-outline",
					"new_items": true,
					"record_count": 25
				}, {
					"label": "Reports",
					"id": "reports",
					"url": "reports",
					"icon_name": "circle-chevron-down-outline",
					"new_items": false,
					"record_count": 0
				}, {
					"label": "Support",
					"id": "support",
					"url": "support",
					"icon_name": "circle-question-outline",
					"new_items": false,
					"record_count": 0
				}
			]
		},
		page: {
			default: "dashboard"
		},
		baseUrl: {
			default: ""
		}
	},
	styles,
	actionHandlers
});