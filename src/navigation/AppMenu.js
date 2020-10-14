import React, { Component } from 'react'
import {
    View, Text, SafeAreaView,
} from 'react-native';
import { styles } from './MenuStyleSheet'


class AppMenu extends Component {
    constructor() {
        super();
    }


    render() {
        return (

            <SafeAreaView style={{ flex: 1 }}>

                <View style={styles.appMenuHeaderStyle}>

                    <Text style={[styles.appMenuTxt, { fontSize: 18, fontWeight: 'bold' }]}>App Header</Text>

                </View>

            </SafeAreaView>
        );
    }
}


export default AppMenu;


