import React, { useState } from 'react';
import { View, Text, Button, TextInput} from 'react-native';

const SearchScreen = props => {
      return (
        <View style={{flex: 1}}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             
            <Text>Rechercher</Text>
            
            <Button title="Retour" onPress={() => {
              props.navigation.navigate('Accueil')
            }}></Button>
          </View>
          </View>
      );
      
  }

  export default SearchScreen;