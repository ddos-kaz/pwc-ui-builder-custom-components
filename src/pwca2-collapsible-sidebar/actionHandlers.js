import {actionTypes} from '@servicenow/ui-core';
 
export default {
    [actionTypes.COMPONENT_BOOTSTRAPPED]: ({
		updateState,
		properties
	}) => {
        const { page, sidebarData, iconOnly } = properties;
				
		console.log("Sidebar initialized with following options: " + JSON.stringify(sidebarData, null, '\t'));
		
		updateState({page, sidebarData, iconOnly});
	}, 
	[actionTypes.COMPONENT_PROPERTY_CHANGED]: ({
		action,
        updateState
	}) => {
		const payload= action.payload;

		if (payload.name == "iconOnly") {
			updateState({
				iconOnly: payload.value
			});
		}
	}
};