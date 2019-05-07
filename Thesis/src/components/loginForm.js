import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Input, MyButton, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser, isLoggedIn } from '../actions';


class LoginForm extends Component {

  componentDidMount() {
    if (this.props.fullLoading) {
      this.props.isLoggedIn();
    }
  }

  onButtonClickedOne() {
    const { email, password } = this.props;
    this.props.loginUser(email, password);
  }

  onButtonClickedTwo() {
    this.props.navigation.navigate('Main');
  }

  onButtonClickedFunctionCombined() {
    this.onButtonClickedOne();
    this.onButtonClickedTwo();
}

  onEmailChanged(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  render() {
    const { error, loading, fullLoading } = this.props;


console.log('aaaaaa');

    if (fullLoading) {
      return (
        <Spinner />
      )
    }

console.log('bbbbb');


    const errorMsg = error ? (
      <Text style={styles.errorText}>
        {error}
      </Text>
    ) : null;

    return (
      <ImageBackground source ={{uri: 'https://im.haberturk.com/2017/07/22/ver1500709542/1571940_1920x1080.jpg'}} style={{flex:1}} >
            <View style={styles.loginContainer}>
                <View>
                  <Input text='Email' inputPlaceHolder='Enter Email'
                         onChangeText={this.onEmailChanged.bind(this)}
                         value={this.props.email}/>
                </View>
                <View>
                  <Input text='Password' inputPlaceHolder='Enter Password'
                         onChangeText={this.onPasswordChanged.bind(this)}
                         secureTextEntry
                         value={this.props.password}/>
                </View>
                {errorMsg}
                <MyButton spinner={loading}
                          title='Login'
                          onPress={this.onButtonClickedFunctionCombined.bind(this)}
                          color='#AD0906' />
            </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  errorText: {
    color: 'red',
    fontSize: 20,
    paddingTop: 5,
    alignSelf: 'center'
  }
});

const mapStateToProps = state => {
  const { email, password, loading, error, fullLoading } = state.auth;
  return {
    email, password, loading, error, fullLoading
  }
}

export default connect(mapStateToProps,
    { emailChanged, passwordChanged, loginUser, isLoggedIn })(LoginForm);
