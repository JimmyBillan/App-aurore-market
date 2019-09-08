// NavigationService.js

import { NavigationActions } from 'react-navigation';
import { Base64 } from 'js-base64';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function navigateToProduct(id) {
  let params= {
    "productId": Base64.encodeURI(id)
  }
  let route = "Product"
  
  navigate(route,params);
}

function navigateToCategorie(id) {
  let params= {
    "catId": Base64.encodeURI(id)
  }
  let route = "Cat"
  
  navigate(route,params);
}


// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  navigateToProduct,
  navigateToCategorie
};