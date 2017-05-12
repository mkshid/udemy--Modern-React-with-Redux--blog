import { FETCH_POSTS, FETCH_POST } from '../actions';
import _ from 'lodash';

export default function(state={}, action){
  switch (action.type){
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
