import React, { useState } from 'react';
import { View, Text, Button, TextInput} from 'react-native';
import TopBarLogoAurore from './TopBarLogoAurore';
//import UseBackButton from './UseBackButton';


const PanierScreen = props => {
      /*UseBackButton(() =>{
        props.navigation.goBack(null);
        return true;
      });*/
      return (
        <View style={{flex: 1}}>
            <TopBarLogoAurore navigation={props.navigation} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             
            <Text>Panier</Text>
            
            <Button title="Retour" onPress={() => {
              props.navigation.navigate('Accueil')
            }}></Button>
          </View>
          </View>
      );
      
  }

  export default PanierScreen;