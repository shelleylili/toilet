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
class setting extends Component{
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    setting
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

module.exports = setting;