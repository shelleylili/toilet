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
    ListView
} from 'react-native';

import Util from "./../util";

class list extends Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        this.state = {
            url:props.url,
            dataSource:ds.cloneWithRows([])
        }
    }
    render() {
        return (
            <ListView
                enableEmptySections={true}
                dataSource = {this.state.dataSource}
                renderRow = {(rowData)=>
                    <View>
                        <View style={styles.item}>
                            <View>
                                <Image style={styles.img} source={{uri:rowData.img}}/>
                            </View>
                            <View style={styles.text_wrapper}>
                                <Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
                                <Text style={styles.time}>{rowData.time}</Text>
                            </View>
                        </View>
                    </View>
                }
            />
        )
    }

    componentDidMount(){
        let url =  this.state.url;
        let that = this;
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        Util.get(url,function(data){
            if(data.status===1){
                let obj = data.data;
               that.setState({
                   dataSource:ds.cloneWithRows(obj)
               });
            }else{
                alert("数据获取失败");
            }
        },function(err){
            alert(err);
        })
    }
}
const styles = StyleSheet.create({
    item:{
        height:78,
        paddingLeft:10,
        paddingRight:10,
        borderColor:"#EDEDED",
        borderBottomWidth:Util.pixel,
        flexDirection:"row"
    },
    img:{
        height:60,
        width:60,
        borderRadius:3,
        marginTop:5
    },
    text_wrapper:{
        flex:1,
        marginLeft:5
    },
    title:{
        fontSize:16,
        marginTop:10
    },
    time:{
        color:"#DDDDDD",
        fontSize:13,
        marginTop:5
    }
});
module.exports = list;