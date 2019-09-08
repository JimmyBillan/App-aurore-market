import React, { useState } from 'react';
import { View, Text, Button, TextInput} from 'react-native';
//import UseBackButton from './UseBackButton';


const DetailsScreen = props => {
     /* UseBackButton(() =>{
        props.navigation.goBack(null);
        return true;
      });*/
      return (
        <View style={{flex: 1}}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Blog</Text>
            <TextInput placeholder="saisie"/>
            <Button title="Vers inscription" onPress={() => {
              console.log(props.navigation);
              props.navigation.push('Inscription')
            }}></Button>
          </View>
          </View>
      );
      
  }

  export default DetailsScreen;