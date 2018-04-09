import { ADD_NODE, GET_NODES } from './actionTypes';

const initialState = {
    nodes: [],
};

// note: as reducers grow, split them into files and use combineReducers via redux
// https://www.valentinog.com/blog/react-redux-tutorial-beginners/

const topologyReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_NODE:
            return { ...state, nodes: [ ...state.nodes, action.payload ] };
        case GET_NODES:
            return state;
        default:
            return state;
    }
};

export default topologyReducer;
