import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class ProfileHeader extends Component {
  render() {
    return(
      <View style={styles.header}>
          <View style={styles.profilepicWrap}>
            <Image style={styles.profilepic} source={require('../images/pp.jpg')} />
          </View>
          <Text style={styles.name}>Yunus DAĞ</Text>
          <Text style={styles.pos}> - Software Developer - </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  profilepicWrap: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 16,
  },
  profilepic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 4
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  pos: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    fontStyle: 'italic'
  }

});
export default ProfileHeader;
