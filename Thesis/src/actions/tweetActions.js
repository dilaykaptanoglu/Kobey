import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const TWEET_CHANGED = 'tweet_changed';
export const SEND_TWEET = 'send_tweet';
export const FETCH_TWEET = 'fetch_tweet';
export const SELECT_TWEET = 'select_tweet';
export const DESELECT_TWEET = 'deselect_tweet';

const REF_DATABASE = '/tweets';

export const selectTweet = (tweet) => {
  return{
    type: SELECT_TWEET,
    payload: tweet
  }
}

export const deselectTweet = () => {
  return {
    type: DESELECT_TWEET,
    payload: {}
  }
}

export const changeTweet = (tweet) => {
  return {
    type: TWEET_CHANGED,
    payload: tweet
  }
}

export const sendTweet = (tweet) => {
  const currentUser = firebase.auth().currentUser;

  const email = currentUser.email;

  return (dispatch) => {
    firebase.database().ref(REF_DATABASE)
      .push({ email, tweet})
      .then(() => {
        Actions.main();
        dispatch({
          type: SEND_TWEET
        })
      })
  }
}

export const fetchTweet = () => {
  return (dispatch) => {
    firebase.database().ref(REF_DATABASE)
      .on('value', (snapshot) => {
        dispatch({
          type: FETCH_TWEET,
          payload: snapshot.val()
        })
      })
  }
}
