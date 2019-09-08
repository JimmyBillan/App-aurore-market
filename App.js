/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import { View} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createAppContainer  } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack'
import BottomBar from './components/BottomBar';
import GeneralStatusBarColor from './components/GeneralStatusBarColor';
import NavigationService from './services/NavigationService';

import AccueilScreen from './components/AccueilScreen';
import BlogScreen from './components/BlogScreen';
import InscriptionScreen from './components/InscriptionScreen';
import PanierScreen from './components/PanierScreen';
import SearchScreen from './components/SearchScreen';
import ProductScreen from './components/ProductScreen';
import CatScreen from './components/CatScreen';

import TopBarLogoAurore from './components/TopBarLogoAurore';

 

export default function App() {

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
    Cat: {
      screen: CatScreen,
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
          let IconComponent = FontAwesome5;
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
  

  const [statusBarColor, setStatusBarColor] = useState("#3dc27f");
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


const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
*/