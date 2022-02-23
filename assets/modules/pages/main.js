import { View, StyleSheet, ImageBackground, SafeAreaView,  TouchableOpacity} from 'react-native';
import React from 'react';
import Button1 from '../functions/clickButtonOnMainScreen';
import {easy} from '../functions/base/question1'
import {medium} from '../functions/base/question2'
import {hard} from '../functions/base/question3'

let level;

export default function Main({navigation}) {

  const questionsToGame = () =>{
    let questions =[];
    let num = [];
    questions.push(easy.find(item=>item.picture==='true'))
    for (let i=1;i<5;i++){
      let count = Math.floor(Math.random()*easy.length); 
      //сделать уникальный поиск
      questions.push(easy[count])
    }
    for (let i=0;i<5;i++){
      let count = Math.floor(Math.random()*medium.length); 
      //сделать уникальный поиск
      questions.push(medium[count])
    }
    for (let i=0;i<5;i++){
      let count = Math.floor(Math.random()*hard.length); 
      //сделать уникальный поиск
      questions.push(hard[count])
    }
    return questions
  }

    const profiles = () =>navigation.navigate('Profile')
    const future = () =>navigation.navigate('Future')
    const game = () =>navigation.navigate('Game',[questionsToGame(),level]);

  return (
    <ImageBackground source={require('./../../images/background/mainFormPortrait.jpg')} resizeMode="cover" style={{}}>  
    <SafeAreaView style={styles.allForm}> 
      
        <View style={styles.header}>
        </View>
        <View style={styles.central}>
        <TouchableOpacity activeOpacity ={0.6}  onPress={game} style={styles.Buttons}>
            <Button1 title={'Начать игру'} page={'Начать игру'} >
            </Button1>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity ={0.6}  onPress={future}  style={styles.Buttons}>
            <Button1 title={'В будущем'} page={'будущем'} >
            </Button1>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity ={0.6}  onPress={profiles} style={styles.Buttons}> 
            <Button1 title={'Профиль'} page='Профиль'>
            </Button1>  
        </TouchableOpacity>     
        </View>
        <View style={styles.footer}>
        </View>
    
    </SafeAreaView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({  
  Buttons:{
    width:'70%'
  },
  allForm:{
    height:"100%"
  },
  all:{
    flex:1,
    flexDirection:'column'
},
header:{
  flex:3,
},
central:{
    flex:3.5,
    alignItems:'center',
    justifyContent:'space-around',
  },
  footer:{
    flex:0.7,
  }
})
