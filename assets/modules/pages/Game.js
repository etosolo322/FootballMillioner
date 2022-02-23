import { View, StyleSheet, ImageBackground, SafeAreaView, Text, TouchableOpacity, Modal, Button,StatusBar,BackHandler,Alert, Image} from 'react-native';
import React, { useState,useEffect  } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalAuditory from './../functions/ModalAuditory'
let counter = 0;
let rezalt = 0;
let fiftyCount = 0;
const money =  [0, 100, 200,300,500,1000,2000,4000,8000,16000,32000,64000,128000,250000,500000,1000000]

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value)
  } catch (e) {
    // saving error
  }
}

const getData = async () => {
  try {
    let rez = money[counter]
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      if (Number(value)<rez){
        console.log(rez)
        storeData(String(rez))
      }else{
      }
    }
  } catch(e) {
    // error reading value
  }
}

const  Game= ({route, navigation}) => {
    
  const backAction = () => {
    Alert.alert("Выход", "Вы действительно хотите прекратить текущую игру?", [
      {
        text: "Нет",
        onPress: () => null,
        style: "Cancel"
      },
      { text: "Да", onPress: () => {
        navigation.navigate('Main');
        counter = 0;
        rezalt = 0;}  }
    ]);
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  let massivVoprosov = [];
  massivVoprosov.push(route.params[0][counter].trues);
  massivVoprosov.push(route.params[0][counter].vB)   
  massivVoprosov.push(route.params[0][counter].vC)
  massivVoprosov.push(route.params[0][counter].vD)

  massivVoprosov = massivVoprosov.sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5)

  const [showModal, setShowModal] = useState(false);
  const [showModalCall, setShowModalCall] = useState(false);
  const [showModalAuditory, setShowModalAuditory] = useState(false);
  const [pointer,setPointer]= useState('auto')
  
  const [fiftyA,setFiftyA]= useState('flex')
  const [fiftyB,setFiftyB]= useState('flex')
  const [fiftyC,setFiftyC]= useState('flex')
  const [fiftyD,setFiftyD]= useState('flex')

  const [fifty, setFifty] = useState('flex')
  const [callFrend, setCallFrend] = useState('flex')
  const [population, setPopulation] = useState('flex')
  const [textOrImage,setTextOrImage] = typeof(route.params[0][counter].vopros)=='string' ? useState({img:'none',text:'flex'}):useState({img:'flex',text:'none'})

  const [state,setState] = useState({
      question:route.params[0][counter].vopros,
      A:massivVoprosov[0],
      colorA:'rgba(255, 255, 255, 0.25)',
      B:massivVoprosov[1],
      colorB:'rgba(255, 255, 255, 0.25)',
      C:massivVoprosov[2],
      colorC:'rgba(255, 255, 255, 0.25)',
      D:massivVoprosov[3],
      colorD:'rgba(255, 255, 255, 0.25)',
      massiv:massivVoprosov
    })

      const fiftyFifty =()=>{
          if (state.A==route.params[0][counter].vC || state.A==route.params[0][counter].vB){setFiftyA('none')}
          if (state.B==route.params[0][counter].vC  || state.B==route.params[0][counter].vB){setFiftyB('none')}
          if (state.C==route.params[0][counter].vC  || state.C==route.params[0][counter].vB){setFiftyC('none')}
          if (state.D==route.params[0][counter].vC || state.D==route.params[0][counter].vB){setFiftyD('none')}
      }

  const updateQuestion = (counter) => {  
    massivVoprosov=[];
    massivVoprosov.push(route.params[0][counter].vB)   
    massivVoprosov.push(route.params[0][counter].vC)
    massivVoprosov.push(route.params[0][counter].trues);
    massivVoprosov.push(route.params[0][counter].vD)    
    massivVoprosov = massivVoprosov.sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5)
    if (fiftyCount >0) {
      setFiftyA('flex');
      setFiftyB('flex');
      setFiftyC('flex');
      setFiftyD('flex');
      fiftyCount=0;
    }
      
  setState(
  {
    question:route.params[0][counter].vopros,
    A:massivVoprosov[0],
    colorA:'rgba(255, 255, 255, 0.25)',
    B:massivVoprosov[1],
    colorB:'rgba(255, 255, 255, 0.25)',
    C:massivVoprosov[2],
    colorC:'rgba(255, 255, 255, 0.25)',
    D:massivVoprosov[3],
    colorD:'rgba(255, 255, 255, 0.25)',
    massiv:massivVoprosov
  })
    setPointer('auto')
    typeof(route.params[0][counter].vopros)=='string' ? setTextOrImage({img:'none',text:'flex'}):setTextOrImage({img:'flex',text:'none'})
    setProgressBarQuestion((counter+1)/15*100)
  }
 // console.log(route.params[0][counter].vopros)
const otvet = (text)=>{
  setPointer('none') 
    setTimeout(()=>{       
      if (state.A==route.params[0][counter].trues){setState({...state, colorA:'green'})}else
      if (state.B==route.params[0][counter].trues){setState({...state, colorB:'green'})}else
      if (state.C==route.params[0][counter].trues){setState({...state, colorC:'green'})}else
      if (state.D==route.params[0][counter].trues){setState({...state, colorD:'green'})}  

      if (text===route.params[0][counter].trues){
        rezalt++
              setTimeout(()=>{      
                  if (counter<14){  
                    counter++;  
                    updateQuestion(counter)} 
                      else{   
                        setShowModal(!showModal);
                        counter = 0;
                        rezalt = 0;
                      }      
              },1200)
      } else{            
        setTimeout(()=>{
          (async ()=>await getData())()
          setShowModal(!showModal)
          counter = 0;
          rezalt = 0;
        },700)
      } 
    },1300)
} 

const [progressBarQuestion, setProgressBarQuestion] = useState((counter+1)/15*100);

  return (
    <SafeAreaView style = {styles.all}>   
      <ImageBackground source={require('./../../images/background/progress.jpg')}  resizeMode="cover" style={styles.questionText}>
     
      <View style={{width:'90%', height:'12%', flexDirection:'row',justifyContent:'space-around',marginTop:StatusBar.currentHeight}}>
         <TouchableOpacity activeOpacity ={0.7} style={[styles.podskazki, {display:fifty}]}  onPress={()=>{setFifty('none'); fiftyFifty(); fiftyCount++}}>
             <Text style={{alignSelf:'center',color:'white',textAlign:'center'}}>50/50</Text>
         </TouchableOpacity>         
         <TouchableOpacity activeOpacity ={0.7} style={[styles.podskazki, {display:callFrend}]}  onPress={()=>{setCallFrend('none');setShowModalCall(!showModalCall)}}>
             <Text style={{alignSelf:'center',color:'white',textAlign:'center'}} >Звонок другу</Text>
         </TouchableOpacity> 
         <TouchableOpacity activeOpacity ={0.7} style={[styles.podskazki,, {display:population}]}  onPress={()=>{setPopulation('none');setShowModalAuditory(!showModalAuditory)}}>
              <Text style={{alignSelf:'center',color:'white',textAlign:'center'}}>Помощь зала</Text>
         </TouchableOpacity> 
      </View>
      <View style={{width:'90%', height:'5%', flexDirection:'row',justifyContent:'flex-start',bottom:10, backgroundColor:'rgba(1, 1,1, 0.1)'}}>
          <View style={{width:`${progressBarQuestion}%`, height:'100%', backgroundColor:'rgba(1, 1,1, 0.6)'}}>
          </View>
      </View>
      <View style={styles.questionTextForm} >     
          <Image source={state.question} style={[styles.imgQuestion,{display:textOrImage.img}]}  resizeMode='contain'  > 
          </Image>   
          <Text style={[styles.textQuestion,{display:textOrImage.text}]}>
            {state.question}
          </Text>         
      </View>
            <View style={styles.choiseForm} pointerEvents={pointer} >
                  <TouchableOpacity activeOpacity ={0.5}  style={[styles.choise, {backgroundColor:state.colorA},{display:fiftyA}]} onPress={()=>{setState({...state, colorA:'orange'}), otvet(state.A); }}>        
                        <Text style={styles.firstLatter}>A:</Text>    
                        <Text>{state.A}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity ={0.5}   style={[styles.choise, {backgroundColor:state.colorB},{display:fiftyB}]} onPress={()=>{setState({...state, colorB:'orange'}), otvet(state.B); }}> 
                       <Text style={styles.firstLatter}>B:</Text>  
                      <Text >{state.B}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity ={0.5}   style={[styles.choise, {backgroundColor:state.colorC},{display:fiftyC}]} onPress={()=>{setState({...state, colorC:'orange'}), otvet(state.C); }}>  
                      <Text style={styles.firstLatter}>C:</Text>  
                      <Text >{state.C}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity ={0.5}   style={[styles.choise, {backgroundColor:state.colorD},{display:fiftyD}]} onPress={()=>{setState({...state, colorD:'orange'}), otvet(state.D); }}>   
                      <Text style={styles.firstLatter}>D:</Text>  
                      <Text >{state.D}</Text>
                  </TouchableOpacity>
          </View>
    </ImageBackground> 
    <Modal                
          animationType={'fade'}
          transparent={true}
          visible={showModal}
    >
            <View style={styles.modal}>
              <View style={{ backgroundColor: 'rgba(1, 1, 1, 0.6)',padding:'10%',borderColor:'white', borderWidth:0.4, borderStyle:'dashed'}}>
                   <Text style={styles.textModal}>Ваш приз:{money[rezalt]}$</Text>
                  <Button
                    title="Продолжить"
                    onPress={() => {
                    navigation.navigate('Main')}}
                  />
              </View>              
            </View>
    </Modal>   
    <Modal                
          animationType={'fade'}
          transparent={true}
          visible={showModalCall}
    >
            <View style={styles.modal}>
              <View style={{ backgroundColor: 'rgba(1, 1, 1, 0.6)',padding:'10%',borderColor:'white', borderWidth:0.4, borderStyle:'dashed'}}>
                   <Text style={styles.textModal}>Мне почему-то кажется, что правильный ответ:{route.params[0][counter].trues}</Text>
                  <Button
                    title="Спасибо"
                    onPress={()=>{
                      setShowModalCall(!showModalCall);
                    }}
                  />
              </View>              
              
            </View>
    </Modal> 
    <Modal                
          animationType={'fade'}
          transparent={true}
          visible={showModalAuditory}
    >
            <View style={styles.modal}>              
                  <ModalAuditory trues={state.massiv.indexOf(route.params[0][counter].trues)} level={counter} voprosy={state.massiv}/>
                  <Button
                    title="Спасибо"
                    onPress={()=>{
                      setShowModalAuditory(!showModalAuditory);
                    }}
                  />
            </View>
    </Modal>        
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({  
  podskazki:{
    backgroundColor: 'rgba(1, 1,1, 0.6)',
    alignSelf:'center',
    justifyContent:'center',
    height:'50%',
    width:'25%',
    borderColor:'white',
    borderRadius:30,
    borderStyle:'dashed',
    borderWidth:1
  },
  modal: {
    alignItems: 'center',
    backgroundColor: 'rgba(1, 1,1, 0.1)',
    width:'100%',
    height:'100%',
    flexDirection:'column',
    justifyContent:'center',
  },
  textModal:{ 
    color:'white',
    paddingBottom:'3%'
},
all:{
    flex:1,  
},
questionText:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  height:'100%'
},
questionTextForm:{
  width:'100%',
  height:'100%',
  flex:1,
  justifyContent:'flex-start',
  alignItems:'center',
},
textQuestion:{
  paddingHorizontal:5,
  textAlign:'center', 
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  width:'90%', 
  height:'70%', 
  color:'black',
  fontSize:18,
  textAlignVertical:'center',
  borderColor:'black',
  borderStyle:'dashed',
  borderWidth:1.5,  
  borderRadius:20,
  elevation:1
},
imgQuestion:{
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  width:'90%', 
  height:'70%', 
  borderRadius:20,
},
choiseForm:{
  flex:1,
  width:'100%',
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-around',
  alignItems:'center',
  elevation: 1,
  
},
choise:{
  marginVertical:'5%',
  flexDirection:'row',
  padding:10,
  width:'40%',
  height:'20%',
  borderColor:'black',
  borderStyle:'dashed',
  borderWidth:1.5,  
  borderRadius:20,
  justifyContent:'center',
  alignItems:'center'
},
firstLatter:{
  fontSize:20,
  fontWeight:'600',
  
}
})
export default Game;