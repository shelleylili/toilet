/**
 * Created by shelley on 2016/12/18.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
class weather extends Component{
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    weather
                </Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    text:{
        fontSize:60
    }
});

module.exports = weather;