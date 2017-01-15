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

import Util from "./../util";
import TWebView from './../twebview';

class recommond extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:props.name,
            data:props.data
        }
    }
    render() {
        var data = this.state.data;
        var view1 = [];
        var view2 = [];
        for(var i in data){
            let page = data[i];
            let item = (
                <TouchableOpacity style={styles.img_item} key={i}//url也是不合规格式，所以用126代替
                    onPress={this._showWebPage.bind(this,'http://www.126.com',page.title)}>
                    <Image style={[styles.img,styles.shadow]} source={{uri:page.img}}/>
                    <Text style={styles.title} numberOfLines={1}>标题标题标题标题标题标题标题标题</Text>
                </TouchableOpacity>
            );
            if(i<4){
                view1.push(item);
            }else{
                view2.push(item);
            }
        }
        return (
            <View style={styles.container}>
                <View>
                    <Text style={[styles.text1,styles.title_top]}>热门推荐</Text>
                </View>
                <View style={styles.img_view}>
                    {view1}
                </View>
                <View style={styles.img_view}>
                    {view2}
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
    img_view:{
        flexDirection:"row",
        paddingTop:10
    },
    img_item:{
        flex:1,
        height:140
    },
    shadow:{
        shadowOpacity:1,
        shadowColor:"#ccc",
        shadowOffset:{width:1*Util.pixel,height:Util.pixel}
    },
    img:{
        width:(Util.size.width-40)/4,
        height:120,
    },
    text1:{
        color:"#5E5E5E",
        marginBottom:8,
        fontSize:16
    },
    title_top:{
        marginTop:10
    },
    title:{
        marginTop:4,
        fontSize:14,
        color:"#818181"
    }
});
module.exports = recommond;