import React, { useState } from 'react';
import { StyleSheet, Text, StatusBar, TextInput, View, Button } from 'react-native';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5';
import {createAppContainer, createStackNavigator  } from 'react-navigation'; // Version can be specified in package.json
import BottomBar from './components/BottomBar';
import GeneralStatusBarColor from './components/GeneralStatusBarColor';
import NavigationService from './services/NavigationService';

import AccueilScreen from './components/AccueilScreen';
import BlogScreen from './components/BlogScreen';
import InscriptionScreen from './components/InscriptionScreen';
import PanierScreen from './components/PanierScreen';
import SearchScreen from './components/SearchScreen';
import ProductScreen from './components/ProductScreen';

import TopBarLogoAurore from './components/TopBarLogoAurore';

const AppStack = createStackNavigator({ Accueil: AccueilScreen, Blog: BlogScreen });
const AuthStack = createStackNavigator({ Search: SearchScreen });


const AppNavigator = createStackNavigator({
  Categorie: {
    screen: () => null,
    navigationOptions: ({ navigation }) => ({
      title: `Catégories`,
      tabBarOnPress: () => {
        // do something custom here
      },
    }),
  },
  Accueil: {
    screen: AccueilScreen,
    navigationOptions: () => ({title: `Accueil`}),
  },
  Blog: {
    screen: BlogScreen,
  },  
  Search: {
    screen: SearchScreen,
  },
  Inscription: {
    screen: InscriptionScreen,
    navigationOptions: () => ({title: `Compte`}),
  },
  Panier: {
    screen: PanierScreen,
  },
  Product: {
    screen: ProductScreen,
    navigationOptions: () => ({title: `Accueil`}),
  },
}, {
  initialRouteName: 'Accueil',
   // initialRouteName: 'Product',
   // initialRouteParams : {'productId': "aHR0cHM6Ly9hdXJvcmVtYXJrZXQuZnIvcGF0ZS1hLXRhcnRpbmVyL3BhdGUtYS10YXJ0aW5lci1jYWNhby1ub2lzZXR0ZS03NTBnLmh0bWw"},
    backBehavior: 'history',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = FontAwesome5Pro;
        let iconName;
        if (routeName === 'Accueil') {
          iconName = `bars`;
        }else
        if (routeName === 'Blog'){
          iconName = `feather`;
        }else
        if (routeName === 'Inscription'){
          iconName = `user`;
        } 
        else if (routeName === 'Panier') {
          iconName = `box`;
        } 
        else if (routeName === 'Search') {
          iconName = `search`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#c59802',
      inactiveTintColor: 'gray',
    },
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {

  const [statusBarColor, setStatusBarColor] = useState("yellow");
  return ( 
    <View style={{flex: 1}}>
      <GeneralStatusBarColor backgroundColor={statusBarColor}/> 
      
      <TopBarLogoAurore />          
      <AppContainer style={{flex: 1}}
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
      <BottomBar/>
    </View>
  );
  
}

/*

{
  Categorie: {
    screen: () => null,
    navigationOptions: ({ navigation }) => ({
      title: `Catégories`,
      tabBarOnPress: () => {
        // do something custom here
      },
    }),
  },
  Accueil: {
    screen: AccueilScreen,
    navigationOptions: () => ({title: `Accueil`}),
  },
  Blog: {
    screen: BlogScreen,
  },  
  Search: {
    screen: SearchScreen,
  },
  Inscription: {
    screen: InscriptionScreen,
    navigationOptions: () => ({title: `Compte`}),
  },
  Panier: {
    screen: PanierScreen,
  }
}*/