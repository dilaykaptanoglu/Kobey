import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { Card } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TweetItem extends Component {

  onPressed(){
    const { tweet, selected } = this.props;
    selected ? this.props.deselectTweet()
             : this.props.selectTweet(tweet);
  }

  render(){
    const { tweet, selected } = this.props;

    const descriptionField = selected ? (
      <View>
        <Text style={styles.descriptionStyle}>
          {tweet.tweet}
        </Text>
        <Text style = {styles.titleStyle}>{tweet.email}</Text>
      </View>
    ) : null;

    return(
          <View>
            <TouchableOpacity onPress={this.onPressed.bind(this)}>
              <Card>
                <Image  style = {styles.imageStyle}
                        source = {require('../images/sarma.jpg')}
                  />
              </Card>
              {descriptionField}
            </TouchableOpacity>
          </View>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle:{
    fontSize: 16,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  authorStyle:{
    fontSize: 13,
    color: 'gray'
  },
  descriptionStyle:{
    marginLeft: 10,
    marginRight: 10,
    fontSize: 13,
    color: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle:{
    height: 240
  }
});

const mapStateToProps = (state, props ) => {
  const selected = state.selectedTweet
                && state.selectedTweet.uid === props.tweet.uid;
  return {
    selected
  };
}

export default connect (mapStateToProps, actions)(TweetItem) ;
