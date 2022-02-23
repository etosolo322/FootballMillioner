import {React, componentDidMount} from 'react';
import MainStack from './assets/modules/functions/navigation';
import {getData, storeData} from './assets/modules/functions/base/storageLVL'

//getData().then(item => console.log(item))
storeData('1')
export default function App() {
  return (
    <MainStack/>
  );
}
