import React, { useEffect } from "react";
import { withNavigation } from "react-navigation";
import { BackHandler } from "react-native";

function UseBackButton(handler) {
    // Frustration isolated! Yay! 🎉
    useEffect(() => {
      BackHandler.addEventListener("hardwareBackPress", handler);
  
      return () => {
        BackHandler.removeEventListener(
          "hardwareBackPress",
          handler
        );
      };
    }, []);
  }

export default UseBackButton;