/**
 * Created by shelley on 2016/12/18.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    NavigatorIOS
} from 'react-native';

import Category from "./read/category";
import List from "./read/list";
import Topic from "./read/topic";
import Recommond from "./read/recommond";
import Search from "./read/search";

import Util from "./util";

//hr组件
class Hr extends Component{
    render(){
        return (
            <View>
                <View style={styles.hr}></View>
            </View>
        )
    }
}

class readView extends Component{
    constructor(){
        super();
        this.state = {
            isShow:false
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Search/>
                <Hr/>
                {
                    this.state.isShow?
                    <ScrollView style={[styles.container,{paddingTop:10}]}>
                        <Topic data = {this.state.recommendTopic} navigator = {this.props.navigator}/>
                        <Hr/>
                        <Recommond name="热门推荐" data = {this.state.hotTopic} navigator={this.props.navigator}/>
                        <Hr/>
                        <Category name="分类" data={this.state.category} navigator={this.props.navigator}/>
                        <Recommond name="清新一刻" data = {this.state.other} navigator={this.props.navigator}/>
                        <View style={{height:55}}></View>
                    </ScrollView>
                        :null
                }
            </View>
        )
    }
    //Todo fetch data
    componentDidMount() {

        Util.get("http://localhost:3000/data/read?type=config",function(data){
            if(data.status===1){
                let obj = data.data;
                let hotTopic = obj.hotTopic;
                let recommendTopic = obj.recommendTopic;
                let other = obj.other;
                let category = obj.category;
                this.setState({
                    isShow: true,
                    recommendTopic:recommendTopic,
                    hotTopic:hotTopic,
                    other:other,
                    category:category
                });
            }else{
                console.log("数据获取失败");
            }
        }.bind(this),function(err){
            console.log(err);
        });
    }
}

class read extends Component{
    render(){
       return (
           <NavigatorIOS
                initialRoute={{
                    component:readView,
                    title:"阅读",
                    navigationBarHidden:true
                }}
                style={{flex:1}}
            />
       );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        fontSize:20
    },
    hr:{
        borderColor:"#F0F0F0",
        borderWidth:Util.pixel,
        marginTop:10
    }
});

module.exports = read;