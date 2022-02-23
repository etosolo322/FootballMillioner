import {  StyleSheet, SafeAreaView,Text} from 'react-native';
import React, { useState  } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      return value
    }
  } catch(e) {
    // error reading value
  }
}

export default function App() {

  const [record,setrecord]= useState('')

 getData().then(el=>setrecord(el))
  return (

    <SafeAreaView style = {styles.all}>
            <Text> 
                 Ваш личный рекорд {record}$
            </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({  
all:{
    height:'100%',
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
}
})
