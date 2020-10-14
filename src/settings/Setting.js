import React, { Component } from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native';


class Setting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>This is Setting Screen  </Text>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default Setting;


