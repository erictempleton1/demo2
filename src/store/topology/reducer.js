import { ADD_NODE } from './actionTypes';

const initialState = {
    nodes: [],
};

const topologyReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_NODE:
            return { ...state, nodes: [ ...state.nodes, action.node ] };
        default:
            return state;
    }
};

export default topologyReducer;
