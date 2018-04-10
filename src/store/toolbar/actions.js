import { SET_ACTIVE_NODE_ICON } from './actionTypes';


export const setActiveNodeIcon = selectedNodeIcon => ({
    type: SET_ACTIVE_NODE_ICON,
    selectedNodeIcon: selectedNodeIcon,
});
