import React from "react";
import { View, ActivityIndicator, Text, TouchableOpacity, Image } from "react-native";
import { rootSwitch } from './../../config/navigator'
import Loader from './../../Loader/index'
import axios from 'axios'
export default class FirstScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valuetoshow: 'First Page',
            imageToshow: '',
            loading: false
        };
    }
    componentDidMount() {
        const { navigation } = this.props;
        const { loading } = this.state
    }
    render() {
        const { navigation } = this.props;
        const { valuetoshow, imageToshow,loading } = this.state;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Loader modalVisible={loading}></Loader>
                <Text style={{ fontSize: 25, marginTop: 10 }}>{valuetoshow}</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(rootSwitch.SecondScreen)
                    }}
                    style={{ width: '60%', height: 50, borderRadius: 30, backgroundColor: 'black', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>Button 1</Text>
                </TouchableOpacity>
            </View>
        );
    }
}