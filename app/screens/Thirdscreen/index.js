import React from "react";
import { View, ActivityIndicator,Text, TouchableOpacity } from "react-native";
import { rootSwitch } from './../../config/navigator'
import YouTube from 'react-native-youtube';

export default class ThirdScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valuetoshow:'Second Page'
        };
    }
    componentDidMount() {
        const { navigation } = this.props;
    }
    render() {
        const { navigation } = this.props;
        const { valuetoshow } = this.state;
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:10}}>

                <YouTube
                    videoId="H4hz7eCoEao" // The YouTube video ID
                    play // control playback of video with true/false
                    fullscreen // control whether the video should play in fullscreen or inline
                    loop // control whether the video should loop when ended
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}
                    style={{ alignSelf: 'stretch', height: 300 }}
                />

                
                <TouchableOpacity     
                   onPress={()=>{
                    navigation.navigate(rootSwitch.FirstScreen)
                   }}
                   style={{width:'60%',height:50,borderRadius:30,backgroundColor:'black',marginTop:20,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'white'}}>Button 3</Text>
                </TouchableOpacity>
            </View>
        );
    }
}