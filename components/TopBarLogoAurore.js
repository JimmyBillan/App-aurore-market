import React, { useState } from 'react';
import { View, Image, TouchableOpacity} from 'react-native';
import NavigationService from './../services/NavigationService';

const TopBarLogoAurore = props => {
      return (
        <View >
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding:10,
            width : '100%',
            backgroundColor : 'white',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            marginBottom : 10
           
           
           }}>
               <TouchableOpacity onPress={() => {
                 NavigationService.navigate('Accueil');
               }}>
                <Image
                    style={{height: 46}}
                    resizeMode="contain"
                    source={require('./../assets/aurorelogo.png')}
                />
            </TouchableOpacity>
          </View>
        </View>
      );
      
  }

  export default TopBarLogoAurore;