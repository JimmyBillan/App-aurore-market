import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import NavigationService from './../../services/NavigationService';
import { whileStatement } from '@babel/types';
//import UseBackButton from './UseBackButton';

const ProductItem = props => {
     /* UseBackButton(() =>{
        props.navigation.goBack(null);
        return true;
      });*/

      function navToProduct(id){       
          NavigationService.navigateToProduct(id);
      }

    
      return (
        <View style={props.itemProductLarge ? styles.containerLarge : styles.container} >
              <View style={{ height: 183, width: "100%" }}>
                  <TouchableOpacity onPress={() =>{ navToProduct(props.item.id);}}>
                      <Image
                          style={{ height: "100%" }}
                          resizeMode="contain"
                          source={{ uri: props.item.img }}
                      />
                  </TouchableOpacity>
              </View>

              <TouchableOpacity style={{ alignItems: 'center',justifyContent: 'center'}} onPress={() =>{ navToProduct(props.item.id);}}>
                  <Text style={styles.marque}>{props.item.marque}</Text>
                  <Text style={styles.name}>{props.item.name}</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                  <Text>[Ici les etoiles]</Text>
                  <Text> ({props.item.nombreEtoile})</Text>
              </View>
              <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={styles.prix}>{props.item.prix} </Text>
                  <Text style={styles.prixBarre} >{props.item.prixBarre}</Text>
              </View>

              <TouchableOpacity
                  style={styles.button}
                  onPress={() => { }}
                  underlayColor='#fff'>
                  <Text style={styles.buttonText}>Ajouter au panier</Text>
              </TouchableOpacity>
          </View>
      );
      
  } 

  const styles = StyleSheet.create({    
    container: {
        flexDirection: 'column',
        borderColor: "#f1f1f1",
        padding: 10,
        borderWidth: 1,
        width: '80%',
        maxWidth: 250,
        backgroundColor : "white",
        alignItems: 'center', justifyContent: 'center'
    },
    containerLarge: {
        flexDirection: 'column',
        borderColor: "#f1f1f1",
        padding: 10,
        borderWidth: 1,
        width: '90%',
        maxWidth: 450,
        backgroundColor : "white",
        alignItems: 'center', justifyContent: 'center',
        marginBottom : 30
    },
    marque: { fontSize: 13, color: "#a2bbcc" },
    name: { fontWeight: "500" },
    prix: { fontWeight: "bold" },
    prixBarre: { color: "#565151", opacity: 0.4, textDecorationLine: 'line-through' },
    button: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#37c983',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        width: '90%'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    }
})

  export default ProductItem;