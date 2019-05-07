import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import TweetFormReducer from './tweetFormReducer';
import TweetListReducer from './tweetListReducer';
import SelectedTweetReducer from './selectedTweetReducer';

export default combineReducers({
  auth: AuthReducer,
  tweetForm: TweetFormReducer,
  tweetList: TweetListReducer,
  selectedTweet: SelectedTweetReducer
});
