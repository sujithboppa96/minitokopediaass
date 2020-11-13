import { FETCH_USERS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      console.log(state,'state')
      return action.payload;
    default:
      return state;
  }
};
