import firebase from 'firebase';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions, Drawer, Tabs} from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import Tweets from './components/tweets';
import NewTweet from './components/newTweet';
import Profile from './components/profile';

export default class RouterDrawer extends Component{
  render(){

    return(
       <View>
            <TouchableOpacity onPress={() => {
                                 firebase.auth().signOut();
                                 Actions.auth();
                               }}>
              <View style={{paddingTop: 25, margin: 25, flex:1, justifyContent:'center'}}>
                <Image  source = {require('./images/logout.png')}
                        style={{  width: 50, height: 50}}
                  />
                <Text> Logout </Text>
              </View>
            </TouchableOpacity>
       </View>

    )

  }
}
