import React, {Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

export default class ProfileMain extends Component {
  render() {
    return (

      <ScrollView>
        <View style={styles.photoGrid}>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../images/sarma.jpg')} />
          </View>
          <Text>3 Yumurta</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  photoWrap: {
    margin: 2,
    height: 140,
    width: (Dimensions.get('window').width) -4,

  },
  photo: {
    flex: 1,
    width: null,
    alignItems: 'center'
  }
});
