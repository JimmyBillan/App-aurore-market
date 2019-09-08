import React, { useState } from 'react';
import { View,  ScrollView} from 'react-native';

import ProductContainerAccueil from './ProductContainerAccueil';
import CategorieContainerAccueil from './CategorieContainerAccueil';
const AccueilScreen = props => {
  
    /*UseBackButton(() =>{
      props.navigation.goBack(null);
      return true;
    });*/
    return (
    <View style={{flex: 1}}>
        <ScrollView >
          <ProductContainerAccueil navigation={props.navigation}/>
          <CategorieContainerAccueil navigation={props.navigation}/>
          
        </ScrollView>
      </View>
    )
} 


export default AccueilScreen;