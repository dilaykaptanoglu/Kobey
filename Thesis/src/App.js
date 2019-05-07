import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './router';
import DrawerNavigatorExample from './appNavigator';
import { createAppContainer } from 'react-navigation';

const AppContainerDrawer = createAppContainer(DrawerNavigatorExample);

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBExUBmyOfmdd786Y9eVlezLTvPechQ-Z4",
      authDomain: "twitterklon-d85b3.firebaseapp.com",
      databaseURL: "https://twitterklon-d85b3.firebaseio.com",
      projectId: "twitterklon-d85b3",
      storageBucket: "twitterklon-d85b3.appspot.com",
      messagingSenderId: "1059362783343"
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>

          <Router />

      </Provider>
    );
  }
}
