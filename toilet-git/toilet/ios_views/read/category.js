/**
 * Created by shelley on 2016/12/23.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Util from "./../util";
import List from "./list";

class category extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:props.data,
            navigator:props.navigator
        }
    }
    render() {
        let data = this.state.data;
        let views1 = [];
        let views2 = [];
        for(var i in data){
            let item = (
                <View style={styles.row_item} key = {i}>
                    <TouchableOpacity style={styles.item} onPress={this._goToList.bind(this,data[i].text)}>
                        <Text style={styles.title}>{data[i].text}</Text>
                    </TouchableOpacity>
                </View>
            );
            if(i<2){
                views1.push(item);
            }else{
                views2.push(item);
            }

        }
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    分类
                </Text>
                <View style={styles.row}>
                    {views1}
                </View>
                <View style={styles.row}>
                    {views2}
                </View>
            </View>
        )
    }
    _goToList(name){
        let type = this._getType(name);
        let url = "http://localhost:3000/data/read?type="+type;
        this.state.navigator.push({
            component:List,
            title:name,
            barTintColor:"#ffffff",
            passProps:{
                url:url
            }
        });
    }

    _getType(name){
        let type = 'it';
        switch(name){
            case "分类管理1":
                type = 'it';
                break;
            case "分类管理2":
                type="cookies";
                break;
            case "分类管理3":
                type="manager";
                break;
            case "分类管理4":
                type="sanwen";
                break;
            default:
                break;
        }
        return type;
    }
}
const styles = StyleSheet.create({
    container:{
        marginLeft:10,
        marginRight:10,
        marginTop:10
    },
    row:{
        flexDirection:"row",
        marginTop:5
    },
    row_item:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    item:{
        height:53,
        width:(Util.size.width-40)/2,
        borderColor:"#F1F1F1",
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    title:{
        color:"#707070",
        fontSize:17,
        fontWeight:"400"
    }
});
module.exports = category;