import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function(state={}, action){
  switch (action.type){
  case DELETE_POST:
    return _.omit(state, action.payload);
    // In case of array use the one down here.
    // return _.reject(state, post => post.id === action.payload);
  case FETCH_POST:
    // const post = action.payload.data;
    // const newState = { ...state  };
    // newState[post.id] = post;
    // return newState;
    const { data } = action.payload;
    return { ...state, [data.id]: data};

  case FETCH_POSTS:
    return  _.mapKeys(action.payload.data, 'id');
  default:
    return state;
  }
  
}
