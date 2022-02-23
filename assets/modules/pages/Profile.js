import {  StyleSheet, SafeAreaView,Text} from 'react-native';
import React, { useState  } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {

  const [record,setrecord]= useState('')

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      //console.log(value)
      if(value !== null) {
        setrecord(value)
      }else{
        setrecord(value)
      }
    } catch(e) {
      // error reading value
    }
  }
  getData()
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
