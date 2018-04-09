import { ADD_NODE } from './actionTypes';

const initialState = {
    nodes: [],
};

// note: as reducers grow, split them into files and use combineReducers via redux
// https://www.valentinog.com/blog/react-redux-tutorial-beginners/

const topologyReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_NODE:
            return { ...state, nodes: [ ...state.nodes, action.node ] };
        default:
            return state;
    }
};

export default topologyReducer;
