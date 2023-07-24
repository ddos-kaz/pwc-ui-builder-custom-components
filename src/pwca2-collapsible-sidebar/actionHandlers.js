import {actionTypes} from '@servicenow/ui-core';

export default {
    [actionTypes.COMPONENT_BOOTSTRAPPED]: ({
		updateState,
		properties
	}) => {
        const { page, sidebarData } = properties;
				
		console.log("Sidebar initialized with following options: " + JSON.stringify(sidebarData, null, '\t'));
		
		updateState({page, sidebarData});
	}
};