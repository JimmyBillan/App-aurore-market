import React, { useState } from 'react';
import { View, Text, Button, TextInput} from 'react-native';
//import UseBackButton from './UseBackButton';


const InscriptionScreen = props => {
      /*UseBackButton(() =>{
        props.navigation.goBack(null);
        return true;
      });*/
      return (
        <View style={{flex: 1}}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             
            <Text>Inscription</Text>
            
            <Button title="Retour" onPress={() => {
              props.navigation.navigate('Accueil')
            }}></Button>
          </View>
          </View>
      );
      
  }

  export default InscriptionScreen;