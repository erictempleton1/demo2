import { ADD_NODE, GET_TOPOLOGY } from './actionTypes';


export const addNode = node => ({
  type: ADD_NODE,
  payload: node,
});

export const loadTopology = () => ({
  type: GET_TOPOLOGY,
  payload: {},
});
