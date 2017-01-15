/**
 * Created by shelley on 2016/12/23.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import  Util from './../util';
import  TWebView from './../twebview';

class topic extends Component{
    constructor(props){
        super();
        this.state = {
            data:props.data
        }
    }
    render() {
        var views = [];
        var data = this.state.data;
        for(var i in data){
            views.push(
                <TouchableOpacity style={styles.img_item} key={i} //因为url是非法的此处用百度的链接代替暂时
                     onPress ={this._showWebPage.bind(this,'https://www.baidu.com',data[i].title)}>
                    <Image resizeMode="cover" style={styles.img} source={{uri:data[i].img}}></Image>
                </TouchableOpacity>
            )
        }
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.text1}>推荐专题</Text>
                </View>
                <View style={styles.img_view}>
                    {views}
                </View>
                <View>
                    <Text>查看更多同期专题</Text>
                </View>
            </View>
        )
    }

    _showWebPage(url,title){
        this.props.navigator.push({
            component:TWebView,
            title:title,
            passProps:{
                url:url
            }
        });
    }
}
const styles = StyleSheet.create({
    container:{
        marginLeft:10,
        marginRight:10
    },
    img:{
        width:160,
        height:120
    },
    img_view:{
        flexDirection:"row",
        marginTop:10,
        marginBottom:10
    },
    img_item:{
        flex:1
    },
    text1:{
        color:"#5E5E5E",
        marginBottom:8,
        fontSize:16
    }
});
module.exports = topic;