import firebase from 'firebase';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Scene, Router, Actions, Drawer, Tabs} from 'react-native-router-flux';
import RouterDrawer from './routerDrawer';
import LoginForm from './components/loginForm';
import Tweets from './components/tweets';
import NewTweet from './components/newTweet';
import Profile from './components/profile';
import Map from './components/map';

const RouterComp = () => {
  return (
    <Router titleStyle={{color: '#E87B79'}}>
      <Scene key='root' hideNavBar={true}>
        <Scene key='auth'>
          <Scene key='login'
                 component={LoginForm}
                 title='Login'
                 hideNavBar={true}
                 />
        </Scene>

          <Drawer key='drawer'
                  contentComponent={RouterDrawer}>

              <Scene key='main' hideNavBar={true}>

                  <Tabs  key='tabbar'
                         hideNavBar={true}
                         tabs
                         tabStyle={{fontSize:100}}
                         >

                        <Scene key='tweets'
                                 component={Tweets}
                                 title='Tweets'
                                 />
                        <Scene key='newTweet'
                                component={NewTweet}
                                title='New Tweet'
                                />
                        <Scene key='profile'
                                component={Profile}
                                title='Profile'
                                />
                        <Scene key='map'
                                component={Map}
                                title='Map'
                                />

                  </Tabs>

              </Scene>

          </Drawer>

      </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({
  tabStyle: {
    color: '#AD0906',
    fontSize: 18,
    paddingTop: 5
  },

});

export default RouterComp;
