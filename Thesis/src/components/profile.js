import React,  {Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import ProfileMain from './profileMain';
import ProfileHeader from './profileHeader';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileHeader />
        <ProfileMain />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
});
