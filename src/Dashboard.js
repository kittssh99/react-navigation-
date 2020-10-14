import React, { Component } from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>This is Dashboard Screen  </Text>
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


export default Dashboard;


