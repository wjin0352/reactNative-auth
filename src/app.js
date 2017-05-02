import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyAvaP4OHb1MIHbi8p7y5OKLlfa9bTOsf0E',
      authDomain: 'auth-react-native-e4bb6.firebaseapp.com',
      databaseURL: 'https://auth-react-native-e4bb6.firebaseio.com',
      projectId: 'auth-react-native-e4bb6',
      storageBucket: 'auth-react-native-e4bb6.appspot.com',
      messagingSenderId: '381131968229'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="AUTH"/>
        <LoginForm/>
      </View>
    );
  }
}

export default App; 