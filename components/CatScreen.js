import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ProductItem from './tinyComponent/ProductItem';




const ProductScreen = props => {

    const { navigation } = props;
    const catId = navigation.getParam('catId', 'NO-ID');

    const [catName, setCatName] = useState("Chargement en cours");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const _retrieveData = async () => {
            try {
                const value = await AsyncStorage.getItem('products/cat/' + catId);
                if (value !== null) {
                    const valJ = JSON.parse(value);
                    setCatName(JSON.parse(valJ.titre));
                    setProducts(JSON.parse(valJ.products));
                }
            } catch (error) {
                console.log(error);
                // Error retrieving data
            }
        };
        _retrieveData();


        const fetchData = async () => {
            
            fetch('http://192.168.0.12/appAuroreMarket/apiAppAuroreMarket/public/products/cat/' + catId)
            //fetch('https://www.portfolio.jimmybillan.fr/appAuroreMarket/apiAppAuroreMarket/public/products/cat/' + productId)
                .then((response) => response.json())
                .then((responseJson) => {
                    setCatName(responseJson.titre);
                    setProducts(responseJson.products);
                    const _storeData = async () => {
                        try {
                            await AsyncStorage.setItem('products/cat/' + catId, JSON.stringify(responseJson));
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

    return (
        <View style={{ flex: 1,width:'100%', backgroundColor : "#f3f7f9" }}>
           <ScrollView style={{width:'100%'}}>
            <View style={styles.viewTitre}>
                <Text style={styles.titre}>{catName}</Text>
            </View>

            
                {
                    products.map((item, key) =>
                        <View key={key} style={styles.itemScroll}>
                            <ProductItem item={item}  itemProductLarge={true}/>
                            
                        </View>
                    )
                }
            </ScrollView>

        </View>
    );

}

const styles = StyleSheet.create({    
    viewTitre: {
        alignItems: 'center',
        paddingBottom: 30
    },
    titre: {
        fontSize: 27,
        fontWeight: 'bold'
    },
    itemScroll: {
        alignItems: 'center',
    }


})

export default ProductScreen;