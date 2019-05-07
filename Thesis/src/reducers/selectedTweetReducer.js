import { SELECT_TWEET, DESELECT_TWEET } from '../actions';

export default (state = {}, action) => {

    switch (action.type) {
      case SELECT_TWEET:
        return action.payload
      case DESELECT_TWEET:
        return {}
      default:
        return state;
    }
}
