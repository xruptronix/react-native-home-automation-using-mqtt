import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default class  Contact extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'Contact Us',
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

    }

    render(){
        return (
            <View style={styles.container}>
                <View style={{marginBottom:30,marginTop:20}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Jhilko Innovations Pvt. Ltd.</Text>
                </View>
                <View style={styles.contactItemContainer}>
                    <MaterialIcons 
                        name='location-on' 
                        size={24} 
                        style={{color:'black',marginRight:10}}
                    />
                    <Text>Shinchahity, Lalitpur</Text>
                </View>
                <View style={styles.contactItemContainer}>
                    <MaterialIcons 
                        name='phone' 
                        size={24} 
                        style={{color:'black',marginRight:10}}
                    />
                    <Text>{`+977-9803425068`}</Text>
                </View>
                <View style={styles.contactItemContainer}>
                    <MaterialIcons 
                        name='email' 
                        size={24} 
                        style={{color:'black',marginRight:10}}
                    />
                    <Text>{`rupesh@jhilkoinc.com`}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#6495ed',
        alignItems:'center'
    },
    contactItemContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:40
    }
});
