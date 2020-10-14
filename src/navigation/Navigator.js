import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { ReactElement, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './MenuStyleSheet'
import AppMenu from '../navigation/AppMenu'
import Setting from '../settings/Setting'
import Dashboard from '../Dashboard'
import Profile from '../profile/Profile'

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {



    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: "#040F4D" }}
        >
            <AppMenu />

            <View style={{ width: '100%', height: 0.5, backgroundColor: '#08176C' }} />

            <TouchableOpacity
                style={styles.drawerItemParent}
                onPress={() => {
                    navigation.navigate('dashboard');

                }}>

                <Text style={styles.drawerItemText}>Dashboard</Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.drawerItemParent}
                onPress={() => {
                    navigation.navigate('profile');

                }}>

                <Text style={styles.drawerItemText}>Profile</Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.drawerItemParent}
                onPress={() => {
                    navigation.navigate('setting');

                }}>

                <Text style={styles.drawerItemText}>Setting</Text>

            </TouchableOpacity>

            <View style={{ width: '100%', height: 0.5, backgroundColor: '#08176C' }} />
            <TouchableOpacity
                style={styles.drawerItemParent}
                onPress={() => {
                }}>
                <Text style={styles.drawerItemText}>Logout</Text>

            </TouchableOpacity>

        </ScrollView>
    );
}

function Navigator() {
    return (
        <Drawer.Navigator
            drawerStyle={{ width: 200 }}
            drawerContent={(props) => (
                <CustomDrawerContent {...props} />
            )}
        >
            <Drawer.Screen
                name="dashboard"
                component={Dashboard} />

            <Drawer.Screen
                name="setting"
                component={Setting} />

            <Drawer.Screen
                name="profile"
                component={Profile} />



        </Drawer.Navigator>
    );
}
export default Navigator;
