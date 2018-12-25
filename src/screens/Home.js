import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Switch
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Client, Message } from 'react-native-paho-mqtt';

const myStorage = {
    setItem: (key, item) => {
      myStorage[key] = item;
    },
    getItem: (key) => myStorage[key],
    removeItem: (key) => {
      delete myStorage[key];
    },
};

export default class  Home extends Component {

    state = {
        switch1:false,
        switch2:false,
        switch3:false,
        switch4:false,
    }

    static navigationOptions = ({navigation}) => ({
        title: 'Home',
        headerStyle: {
            backgroundColor: '#6495ed'
        },
        headerLeft: (
            <MaterialIcons 
                name='menu'
                size={24}
                style={{color:'black', marginLeft:10}}
                onPress={()=>navigation.toggleDrawer()}
            />
        )
    })
    componentDidMount(){
        const client = new Client({ uri: 'ws://iot.eclipse.org:80/ws', clientId: 'clientId', storage: myStorage });
        client.connect()
            .then(() => {
                // alert('mqtt connected')
                return client.subscribe('status');
            })
            .catch((responseObject) => {
                if (responseObject.errorCode !== 0) {
                    console.log('onConnectionLost:' + responseObject.errorMessage);
                }
            });

        client.on('messageReceived', (message) => {
            console.log(message.payloadString);
        });

        this.client = client;
    }

    switch1 = (value) => {
        let message;
        if(value){
            message = new Message('1')
        }else{
            message = new Message('0')
        }
        message.destinationName = 'switch1';
        this.client.send(message);
        this.setState({switch1:value})
    }
    switch2 = (value) => {
        let message;
        if(value){
            message = new Message('1')
        }else{
            message = new Message('0')
        }
        message.destinationName = 'switch2';
        this.client.send(message);
        this.setState({switch2:value})
    }
    switch3 = (value) => {
        let message;
        if(value){
            message = new Message('1')
        }else{
            message = new Message('0')
        }
        message.destinationName = 'switch3';
        this.client.send(message);
        this.setState({switch3:value})
    }
    switch4 = (value) => {
        let message;
        if(value){
            message = new Message('1')
        }else{
            message = new Message('0')
        }
        message.destinationName = 'switch4';
        this.client.send(message);
        this.setState({switch4:value})
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.switchContainer}>
                    <Text>{`Switch 1`}</Text> 
                    <Switch 
                        value={this.state.switch1} 
                        onValueChange={this.switch1}
                    />
                </View>
                <View style={styles.switchContainer}>
                    <Text>{`Switch 2`}</Text> 
                    <Switch 
                        value={this.state.switch2}
                        onValueChange={this.switch2}
                    />
                </View>
                <View style={styles.switchContainer}>
                    <Text>{`Switch 3`}</Text> 
                    <Switch 
                        value={this.state.switch3}
                        onValueChange={this.switch3}
                    />
                </View>
                <View style={styles.switchContainer}>
                    <Text>{`Switch 4`}</Text> 
                    <Switch 
                        value={this.state.switch4}
                        onValueChange={this.switch4}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#6495ed',
        justifyContent:'space-around',
        alignItems:'center'
    },
    switchContainer:{
        height:40,
        width:150,
        backgroundColor:'#ffdab9',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    }
});
