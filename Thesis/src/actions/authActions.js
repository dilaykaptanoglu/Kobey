import firebase from 'firebase';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import { Scene, Router, Actions } from 'react-native-router-flux';
import React, { Component } from 'react';

export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const PHOTO_CHANGED = 'photo_changed';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN = 'login';
export const LOGIN_USER_FAILED = 'login_user_failed';
export const LOGGED_IN = 'logged_in';
export const NOT_LOGGED_IN = 'not_logged_in';

/*const navigateAction = NavigationActions.navigate({
  routeName: 'Main',

  params: {},

  action: NavigationActions.navigate({ 'Main'}),
});
*/

export const isLoggedIn = () => {

  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        //// TODO:
        Actions.main();
        //NavigationActions.navigate('Main');
        //this.props.navigation.dispatch(navigateAction);
        dispatch({
          type: LOGGED_IN,
          payload: user
        })

      } else {
        dispatch({
          type: NOT_LOGGED_IN
        })
      }
    })
  }
}


export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  }
}

export const photoChanged = (photo) => {
  return {
    type: PHOTO_CHANGED,
    payload: photo
  }
}

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginSuccess(dispatch, user))
          .catch(() => loginUserFailed(dispatch))
      })
  }
}

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })

}

const loginUserFailed = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAILED
  })
}
