import { SET_ACTIVE_NODE_ICON } from './actionTypes';


const initialState = {
    activeNodeIcon: "ic_videocam_black_48px.svg"
};

const toolbarReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_ACTIVE_NODE_ICON:
            return Object.assign({}, state, {
                activeNodeIcon: action.selectedNodeIcon
            });
        default:
            return state;
    }
};

export default toolbarReducer;
