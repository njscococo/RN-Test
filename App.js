import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, Button } from 'react-native';
import { WebView } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webUri: 'https://ebp.tmnewa.com.tw',
      textUri: ''
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.changeUrl = this.changeUrl.bind(this);
    this.showLoadStart = this.showLoadStart.bind(this);
  }

  handleTextChange(e){
    console.log(e);
    this.setState({
      textUri: e
    });
  }

  changeUrl(){
    this.setState({
      webUri: this.state.textUri
    });
  }

  showLoadStart(e){
    console.log('showLoadStart',e);
  }
  render() {
    return (
    
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <TextInput
          style={{ height: 40, marginTop: 20 }}
          placeholder="Type web url here"
          onChangeText={this.handleTextChange}
        />
        <Button 
          onPress={this.changeUrl}
          title="GO！"
        />
        <WebView
          source={{ uri: this.state.webUri }}
          scrollEnabled={true}
          onLoadStart = {this.showLoadStart.bind(this,'test')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
