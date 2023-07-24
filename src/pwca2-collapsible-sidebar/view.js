import '@servicenow/now-loader';
import '@servicenow/now-image';
import '@servicenow/now-icon';
import { BASE_URL } from './constants';
import { COLLAPSE_ACTION, PWC_LOGO_PATH } from './constants';

const getOpenedSidebar = (dispatch, updateState, sidebarData, page, baseUrl) => {
    /*
        <div className="pwc-sidebar-bottom">
            <div className="pwc-collapse-section" on-click={() => toggleCollapsedSection(dispatch, updateState, true)}>                
                <now-icon icon="move-item-left-fill" size="md" className="pwc-collapse-icon"></now-icon>
                <span className="pwc-collapse-text">
                    Collapse
                </span>                    
            </div>
        </div>
    */
    //<now-image src={PWC_LOGO_PATH} sources={[]} alt="PwC Technology Risk Assessment" fit="contain" position="" width={243}></now-image>
    
    return ( 
        <div className="pwc-sidebar">        
            <div className="pwc-sidebar-top">  
                <div className="pwc-menu">
                    {generateSidebarMenuOptions(false, sidebarData, page, baseUrl)}
                </div>
            </div>                                        
        </div> 
    );
}

const getClosedSidebar = (dispatch, updateState, sidebarData, page, baseUrl) => {
    /*
        <div className="pwc-sidebar-bottom">
            <div className="pwc-collapse-section" on-click={() => toggleCollapsedSection(dispatch, updateState, false)}>                
                <now-icon icon="move-item-right-fill" size="md" className="pwc-collapse-icon"></now-icon>                    
            </div>
        </div>                    
        <div className="pwc-logo">                    
            </div>      
    */

    return ( 
        <div className="pwc-sidebar">        
            <div className="pwc-sidebar-top">  
                <div className="pwc-menu">
                    {generateSidebarMenuOptions(true, sidebarData, page, baseUrl)}
                </div>
            </div>                            
        </div> 
    );
};

const toggleCollapsedSection = (dispatch, updateState, collapsed) => {
    updateState({collapsed});

    let collapsedWidth = 20;
    if (collapsed) {
        collapsedWidth = 5;
    }

    dispatch(COLLAPSE_ACTION, {collapsedWidth});
};

const generateSidebarMenuOptions = (isMobile, sidebarData, page, baseUrl) => {   

    return (
        <div>
            {
                sidebarData.map(menuOption => {
                    return (
                        <div>
                            {generateSidebarMenuOption(isMobile, menuOption, page, baseUrl)}
                        </div>
                    );
                })
            }
        </div>
    );    
};

const generateSidebarMenuOption = (isMobile, menuOption, page, baseUrl) => {
    let menuOptionClass = "";// isMobile ? "pwc-menu-item-mbl" : "pwc-menu-item";
    const url = baseUrl + "" + menuOption.url;
    
    if (isMobile) {
        if (page == menuOption.url) {
            menuOptionClass = "pwc-menu-item-mbl menu-item-selected";
        } else {
            menuOptionClass = "pwc-menu-item-mbl menu-item-unselected";
        }
    } else {
        if (page == menuOption.url) {
            menuOptionClass = "pwc-menu-item menu-item-selected";
        } else {
            menuOptionClass = "pwc-menu-item menu-item-unselected";
        }
    }
    
    return (
        <div className={menuOptionClass} component-id={menuOption.id} id={menuOption.id} on-click={() => {
            window.location.href = url;
        }}>
            {isMobile ? (
                <a href={url}>
                    <now-icon icon={menuOption.icon_name} size="md" className="pwc-menu-item-icon"></now-icon>
                    <span className="pwc-tooltip">{menuOption.label}</span>
                </a> 
            ) : (
                <a href={url}>
                    <now-icon icon={menuOption.icon_name} size="md" className="pwc-menu-item-icon"></now-icon>
                    <span className="pwc-menu-item-text">                        
                        {
                            !menuOption.new_items ? (
                                <span>
                                    {menuOption.label}
                                </span>
                            ) : (
                                <span>
                                    {menuOption.label}
                                    <span className="pwc-item-count">
                                        {menuOption.record_count}
                                    </span>

                                    <span className="pwc-new-items">
                                        New {menuOption.id}
                                    </span>
                                </span>
                            )
                        }
                    </span>   
                </a> 
            )
            }            
        </div>
    );    
};

const buildSidebarSection = (
    dispatch,
    updateState,
    collapsed,
    sidebarData,
    page,
    baseUrl
) => {
    return !collapsed ? getOpenedSidebar(dispatch, updateState, sidebarData, page, baseUrl) : getClosedSidebar(dispatch, updateState, sidebarData, page, baseUrl);
};

export default (state, {dispatch, updateState}) => {
	const {isLoading, collapsed, sidebarData, properties} = state;
    const { page } = properties;
    


	return (
		<div className="pwc-container">
			{isLoading ? (
				<now-loader label="Loading..." size="lg"></now-loader>
			) : (
				buildSidebarSection(dispatch, updateState, collapsed, sidebarData, page, BASE_URL)
			)}
		</div>
	);
};
