import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class  About extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'About Us',
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
                <View>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Lorem ipsum dolor sit amet consectetur adipiscing. Tristique senectus et netus et malesuada fames ac turpis egestas. Ornare aenean euismod elementum nisi. Blandit cursus risus at ultrices mi. Feugiat in fermentum posuere urna nec.</Text>
                </View>
                
                <View>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Lorem ipsum dolor sit amet consectetur adipiscing. Tristique senectus et netus et malesuada fames ac turpis egestas. Ornare aenean euismod elementum nisi. Blandit cursus risus at ultrices mi. Feugiat in fermentum posuere urna nec.</Text>
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
    }
});
