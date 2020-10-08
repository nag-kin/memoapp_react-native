import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Appbar extends React.Component {
    render() {
        return (
            <View style={styles.appbar}>
                <View>
                    <Text style={styles.appbarTitle}>MEMO</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    appbar: {
        position: 'absolute', //強制的にポジションを決めてしまう
        top: 0,
        left: 0,
        right: 0,
        height: 78,
        paddingTop: 30,
        backgroundColor: '#265366',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
        zIndex: 10,
    },
    appbarTitle: {
        color: '#fff',
        fontSize: 18,
    },


});
export default Appbar;