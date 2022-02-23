import {  StyleSheet, SafeAreaView,Text } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView style = {styles.all}>
            <Text> 
                    PROFILE
            </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({  
all:{
    height:'100%',
    backgroundColor:'red'
}
})
