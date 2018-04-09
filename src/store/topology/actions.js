import { ADD_NODE, GET_NODES } from './actionTypes';


export const addNode = node => ({
  type: ADD_NODE,
  payload: node,
});

export const getNodes = () => ({
  type: GET_NODES,
  payload: {},
});
