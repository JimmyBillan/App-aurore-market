import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import {AsyncStorage} from '@react-native-community/async-storage';



const ProductScreen = props => {

    const { navigation } = props;
    const productId = navigation.getParam('productId', 'NO-ID');

    const [product, setProduct] = useState({});

    useEffect(() => {
        const _retrieveData = async () => {
            try {
                const value = await AsyncStorage.getItem('product/' + productId);
                if (value !== null) {
                    setProduct(JSON.parse(value));
                }
            } catch (error) {
                console.log(error);
                // Error retrieving data
            }
        };
        _retrieveData();


        const fetchData = async () => {
            console.log('http://192.168.0.12/appAuroreMarket/apiAppAuroreMarket/public/product/' + productId);
            fetch('http://192.168.0.12/appAuroreMarket/apiAppAuroreMarket/public/product/' + productId)
            //fetch('https://www.portfolio.jimmybillan.fr/appAuroreMarket/apiAppAuroreMarket/public/product/' + productId)
                .then((response) => response.json())
                .then((responseJson) => {
                    setProduct(responseJson.product);
                    const _storeData = async () => {
                        try {
                            await AsyncStorage.setItem('product/' + productId, JSON.stringify(responseJson.product));
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
        <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flex : 1, height: 280, width: "100%"}}>
                        <TouchableOpacity onPress={() => {  }}>
                            <Image
                                style={{ height: "100%" }}
                                resizeMode="contain"
                                source={{ uri: product.img }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerContent}>
                   
                        <View><Text style={styles.marque}>{product.marque}</Text></View>
                        <View><Text style={styles.name}>{product.name}</Text></View>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <Text>[Ici les etoiles]</Text>
                            <Text> ({product.nombreEtoile})</Text>
                        </View>
                        <View><Text style={styles.description}>{product.description}</Text></View>
                        <View><Text style={styles.available}>{product.available}</Text></View>
                        
                        <View style={{ flexDirection: 'row', width: '100%', marginBottom : 10 }}>
                            <Text style={styles.prix}>Prix adhérent : </Text>
                            <Text style={styles.prixAdherent}>{product.prixAdherent}</Text>
                            <Text style={styles.reduction}> {product.reduction}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                        <Text style={styles.prix}>Prix standard : </Text>
                            <Text style={styles.prixStandard}>{product.prixStandard}</Text>
                        </View>
                        <View><Text style={styles.prixVolume}>{product.prixVolume}</Text></View>
                    </View>
                    
                </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    containerContent : {
        width : '80%',
        marginLeft : '10%',
        marginTop : 20,
        marginBottom : 20
    },
    marque : {color: "#c59802"},
    name : {fontSize: 33,  fontWeight : 'bold', paddingBottom : 5},
    description : {fontSize : 13, color :"#555", fontStyle : 'italic', paddingBottom : 20, paddingTop : 10},
    available : {fontSize : 13, color : "#091e42", opacity : 0.6, paddingBottom : 15},
    prix : {fontSize:18, color : "#091e42",paddingTop:6},
    prixAdherent : {fontSize:24, color:"#42af7b"},
    reduction : {fontSize : 18, color :"#c59802",paddingTop:6},    
    prixStandard : {fontSize:24},
    prixVolume : {color:"#091d42", paddingTop:5}



})

export default ProductScreen;