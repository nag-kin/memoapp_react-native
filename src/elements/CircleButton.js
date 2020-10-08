import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

var c = [1, 2];

class CircleButton extends React.Component {
    render() {
        const { style, color } = this.props; // const style = this.props.style; と同じ意味。書き方が違うだけ

        let bgColor = '#E31676';
        let textColor = '#fff';

        if (color === 'white') {
            bgColor = '#fff';
            textColor = '#E31676';
        }

        return (
            <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
                <Text style={[styles.circleButtonTitle, { color: textColor }]}>
                    {this.props.children}
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    circleButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        zIndex: 10,
    },
    circleButtonTitle: {
        fontSize: 32,
        lineHeight: 32,
        color: '#fff',

    },
});


export default CircleButton;