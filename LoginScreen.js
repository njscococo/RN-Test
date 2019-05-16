import React from 'react';
import {  Button, Text, TextInput, StyleSheet } from 'react-native';

class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = { someKey: 'someValue' };
    }

    componentDidMount() {
        this.setState({ someKey: 'otherValue' });
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text numberOfLines={5}>
                    {this.state.someKey}
                </Text>
            </View>);
    }


}

export default LoginScreen;
const styles = StyleSheet.create({
    
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
