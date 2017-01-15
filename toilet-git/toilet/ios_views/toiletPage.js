/**
 * Created by shelley on 2016/12/18.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';
import TwebView from "./twebview";
import Util from "./util";

console.log('size=======',Util.size);
console.log('pixel=======',Util.pixel);
Util.get("http://192.168.1.103:8080?type=it",function(s){
    console.log("=====+===="+s)
},
    function(e){
    console.log("====+===="+e)
        alert(e);
});
class toiletPage extends Component{
    render() {
        return (
            <View style={styles.container}>
                <TwebView url="http://localhost:63342/toilet/toilet/html/nearby.html"/>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1
    }
});

module.exports = toiletPage;