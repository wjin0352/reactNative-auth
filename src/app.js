import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) { 
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  handleLogOut() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{flexDirection: 'row'}}>
            <Button onPress={() => this.handleLogOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm/>;
      default: 
        return <View style={{ alignSelf: 'center' }}><Spinner size="large"/></View>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="AUTH"/>
        {this.renderContent()}
      </View>
    );
  }
}

export default App; 