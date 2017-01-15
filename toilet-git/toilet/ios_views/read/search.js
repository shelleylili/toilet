/**
 * Created by shelley on 2016/12/23.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

import Util from "./../util";


class search extends Component{
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.search_input} placeholder="搜索" placeholderTextColor="#222222"/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        paddingLeft:10,
        paddingRight:10,
        marginTop:20
    },
    search_input:{
        height:35,
        paddingLeft:5,
        // borderWidth:Util.pixel,
        borderWidth:1,
        borderColor:'#dddddd',
        borderRadius:3,
        fontSize:15
    }
});
module.exports = search;