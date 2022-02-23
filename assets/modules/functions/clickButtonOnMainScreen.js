import {  Text,  TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
export default function Button1({title, page, }) {
    return (       
        <LinearGradient 
          colors={['#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6','#003153', '#0082e6']}
          start={[0.0,-3]}
          end = {[1.5,3]}
          style={styles.gradient}>
              <Text  style={styles.button} >{title}</Text>
          </LinearGradient>
    )   
}

const styles = StyleSheet.create({  
gradient:{        
   borderRadius: 15,
   elevation: 5,
},
      button:{
        paddingVertical:20,
          alignItems:'center',
          justifyContent:'center',
          textAlign:'center',
          color:'#fff',
          textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: {width: -1, height: 1},
          textShadowRadius: 10
       //   background: #053852 repeating-linear-gradient(135deg, #053852, #053852 10px, #1679ad 10px, #1679ad 20px, #053852 20px);
      }
  })