import React from 'react';
import {  Button, Text, TextInput, StyleSheet } from 'react-native';

class WebViewScreen extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return <Text>{this.state.someKey}</Text>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default WebViewScreen;
