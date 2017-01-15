/**
 * Created by shelley on 2016/12/23.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio
} from 'react-native';
//fetch
//获取屏幕的宽度和高度
//获取最小线宽

module.exports = {
    size:{
        height:Dimensions.get("window").height,
        width:Dimensions.get("window").width

    },
    //10*i/PixelRatio
    pixel:1/PixelRatio.get(),
    get:function(url,successCallback,failCallback){
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                successCallback(responseJson);
            })
            .catch((error) => {
                failCallback(error);
            });
    }
};