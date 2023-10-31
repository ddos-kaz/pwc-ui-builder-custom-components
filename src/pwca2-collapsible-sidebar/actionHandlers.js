import {actionTypes} from '@servicenow/ui-core';
 
export default {
    [actionTypes.COMPONENT_BOOTSTRAPPED]: ({
		updateState,
		properties
	}) => {
        const { page, sidebarData, iconOnly } = properties;
				
		console.log("Sidebar initialized with following menu options: " + JSON.stringify(sidebarData, null, '\t'));
		
		updateState({
			page, 
			sidebarData, 
			iconOnly,
			collapsed: iconOnly
		});
	}, 
	[actionTypes.COMPONENT_PROPERTY_CHANGED]: ({
		action,
        updateState
	}) => {
		const payload= action.payload;

		if (payload.name == "iconOnly") {
			updateState({
				iconOnly: payload.value,
				collapsed: payload.value
			});
		}
	}
};