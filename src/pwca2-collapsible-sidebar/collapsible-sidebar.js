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
		sidebarData: [],
		iconOnly: false
	},
	properties: {
		sidebarData: {
			default: [{"id":"dashboard","label":"Dashboard","url":"dashboard","icon_name":"home-outline"},{"id":"projects","label":"All projects","url":"projects","icon_name":"documents-outline"},{"id":"my-projects","label":"My projects","url":"projects/params/filter/my","icon_name":"document-outline"},{"id":"tasks","label":"My tasks","url":"tasks","icon_name":"checklist-fill"},{"id":"unassigned-roles","label":"Unassigned roles","url":"unassigned-roles","icon_name":"user-tag-outline"},{"id":"support","label":"Support","url":"support","icon_name":"circle-question-outline"}]
		},
		page: {
			default: "dashboard"
		},
		iconOnly: {
			default: false
		}
	},
	styles,
	actionHandlers
});