import React from "react";
import { View, ActivityIndicator,Text, TouchableOpacity } from "react-native";
import { rootSwitch } from './../../config/navigator'

export default class SecondScreen extends React.Component {
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
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                
                <TouchableOpacity     
                   onPress={()=>{
                     navigation.navigate(rootSwitch.ThirdScreen)
                   }}
                   style={{width:'60%',height:50,borderRadius:30,backgroundColor:'black',marginTop:20,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'white'}}>Button 2</Text>
                </TouchableOpacity>
            </View>
        );
    }
}