import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import NavigationService from './../services/NavigationService';

import ProductItem from './tinyComponent/ProductItem';
let deviceWidth = Dimensions.get('window').width;

const ProductContainerAccueil = props => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Recupere 'produits/cat/biofavorisaccueil' en local
        const _retrieveData = async () => {
            try {
                const value = await AsyncStorage.getItem('produits/cat/biofavorisaccueil');
                if (value !== null) {
                    setProducts(JSON.parse(value));
                }
            } catch (error) {
                // Error retrieving data
            }
        };
        _retrieveData();


        const fetchData = async () => {
           // fetch('http://192.168.0.16/appAuroreMarket/apiAppAuroreMarket/public/produits/cat/biofavorisaccueil')
           fetch('https://www.portfolio.jimmybillan.fr/appAuroreMarket/apiAppAuroreMarket/public/produits/cat/biofavorisaccueil')
            .then((response) => response.json())
                .then((responseJson) => {
                    setProducts(responseJson.products);
                    const _storeData = async () => {
                        try {
                            await AsyncStorage.setItem('produits/cat/biofavorisaccueil', JSON.stringify(responseJson.products));
                        } catch (error) {
                            // Error saving data
                            console.log(error);
                        }
                    };
                    _storeData();
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        fetchData();

        

    }, []);
    function navToProduct(id){       
        NavigationService.navigateToProduct(id);
    }

    return (
        <View style={{}}>            
            <View style={styles.viewTitre}>
                <Text style={styles.titre}>Nos produits bio favoris</Text>
            </View>

            <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                {
                    products.map((item, key) =>
                        <View key={key} style={styles.itemScroll}>
                            <ProductItem item={item}/>
                            
                        </View>
                    )
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    itemScroll: {
        width: deviceWidth,
        alignItems: 'center',
    },
    viewTitre: {
        alignItems: 'center',
        paddingBottom: 30
    },
    viewTitrenotfirst: {
        alignItems: 'center',
        paddingTop:20,
        paddingBottom: 30
    },
    titre: {
        fontSize: 27,
        fontWeight: 'bold'
    },
    container: {
        flexDirection: 'column',
        borderColor: "#f1f1f1",
        padding: 10,
        borderWidth: 1,
        width: '80%',
        maxWidth: 250,
        alignItems: 'center', justifyContent: 'center'
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

export default ProductContainerAccueil;