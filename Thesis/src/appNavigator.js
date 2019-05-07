import firebase from 'firebase';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer,  createDrawerNavigator, } from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import LoginForm from './components/loginForm';
import Tweets from './components/tweets';
import NewTweet from './components/newTweet';
import Profile from './components/profile';


class NavigationDrawerStructure extends Component {

  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>

          <Image
            source={require('./images/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />

        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Main: {
    screen: Tweets,
    navigationOptions: ({ navigation }) => ({
      title: 'Ana Sayfa',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#AD0906',
    }),
  },
});

const Profile_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#AD0906',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  New: {
    screen: NewTweet,
    navigationOptions: ({ navigation }) => ({
      title: 'Yeni',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#AD0906',
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator({

  Profile: {
    screen: Profile_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Profile',
    },
  },
  NewTweet: {
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Yeni',
    },
  },

  Tweets: {
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Ana Sayfa',
    },
  },

  LoginForm: {
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Logout',
    },
  },


});

export default createAppContainer(DrawerNavigatorExample);
