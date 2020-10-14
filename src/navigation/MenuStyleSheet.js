import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    appMenuTxt: { fontSize: 12, color: 'white', alignSelf: 'center' },
    appMenuHeaderStyle: {
        padding: 15, flexDirection: 'column', alignSelf: 'center', backgroundColor: '#040F4D',
        justifyContent: 'center', width: '100%'
    },
    drawerItemParent: { marginTop: 1, flexDirection: 'row', height: 50, padding: 10, justifyContent: 'flex-start' },
    drawerItemImage: { height: 20, width: 20, alignSelf: 'center', tintColor: 'white' },
    drawerItemText: { fontWeight: 'bold', alignSelf: 'center', marginStart: 10, color: 'white' },
    textInputView: {
        height: 40,
        borderRadius: 5,
        padding: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        margin: 5,
        flexDirection: 'row'
    }
});

export { styles }
