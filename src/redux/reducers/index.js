import { combineReducers } from "redux";
import { SET_USER } from '../types';

const initialState = {
  data: {
    key: "",
    user: {}
  },
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case SET_USER:
        return {...state, data: action.payload};
      default: 
        return state;
  }
}


export default combineReducers({
  reducer: reducer,
});
