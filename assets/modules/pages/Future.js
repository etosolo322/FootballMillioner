import React, { Component } from "react";
import { StyleSheet, View, Text} from "react-native";
const varA=100;
export default function App ({route}) {
 console.log(route.params)
    return (
      <View style={styles.chartContainer}>
        <Text>Это лишь тестовая версия приложения!</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  chartContainer: {
    width:'100%', 
    height:'100%',
    justifyContent:"center",
    alignItems:"center"
  }
});