import React, { useState } from 'react';
import { StyleSheet, View, Image,Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NavigationService from './../services/NavigationService';

const BottomBar = props => {

    const[menus, setMenus] = useState([
        {  title : "Catégories",    icon : 'bars',      screenTarget : ''},
        {  title : "blog",          icon : 'feather',   screenTarget : 'Blog'},
        {  title : "Recherche",     icon : 'search',    screenTarget : ''},
        {  title : "Compte",        icon : 'user',      screenTarget : 'Inscription'},
        {  title : "panier",        icon : 'box',       screenTarget : ''}
    ])

    return (
        <View style={styles.bar}>              
            {
                menus.map((item, key) =>
                <View key={key} style={styles.item}>
                    <TouchableOpacity onPress={() =>{
                        NavigationService.navigate(item.screenTarget);
                    }}>
                        <View style={styles.button}>
                            <Icon  name={item.icon} style={styles.icon}>                                
                            </Icon>
                            <Text style={styles.text}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                )
            }

            </View>
        
    );

}

const styles = StyleSheet.create({
    bar: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 70,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    item: {
        flex: 1
    },
    button: { flexDirection:'column',  alignItems: 'center', justifyContent: 'center'},
    icon : {color:'black', fontSize:25},
    text : {fontSize:12, paddingTop :8, paddingBottom:2}
  });

export default BottomBar;