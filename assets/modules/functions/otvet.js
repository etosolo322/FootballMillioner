import React, { useState } from 'react'

export default function answer({text}) {
    const[pointer,setPointer]= useState('auto')
    setPointer('none') 
    setTimeout(()=>{ 
      if (text===route.params[0][counter].trues){rezalt++
        if (varA==route.params[0][counter].trues){addcolorsA('green')}else
        if (varB==route.params[0][counter].trues){addcolorsB('green')}else
        if (varC==route.params[0][counter].trues){addcolorsC('green')}else
        if (varD==route.params[0][counter].trues){addcolorsD('green')}
  
              setTimeout(()=>{      
                  if (counter<14){  counter++;  updateQuestion(counter)} 
                    else{   
                      setShowModal(!showModal);
                      counter = 0;
                      rezalt = 0;
                    }      
              },1200)
      } else{
        if (varA==route.params[0][counter].trues){addcolorsA('green')}else
        if (varB==route.params[0][counter].trues){addcolorsB('green')}else
        if (varC==route.params[0][counter].trues){addcolorsC('green')}else
        if (varD==route.params[0][counter].trues){addcolorsD('green')}
        
        setTimeout(()=>{
          setShowModal(!showModal)
          counter = 0;
          rezalt = 0;},700)
      } 
    },1300)
}
