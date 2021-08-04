import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, SafeAreaView, ScrollView, View, ImageBackground} from 'react-native';
import Box from './components/Box'

const img=

import styles from './styles'


export default function App() {
  
  // const boxes = [0,1,2,3,4,5,6,7,8,9]

  const students = [
    {name:'Val', age: 30, city: 'Coconut Creek'},
    {name:'Chris', age: 29, city: 'Delray Beach'},
    {name: 'Matt', age: 19, city: 'Delray Beach'},
    {name: 'Emily', age: 25, city: 'Boca Raton'},
    {name: 'Luis', age: 30, city: 'Coconut Creek'},
    {name: 'Zack', age: 30, city: 'Coconut Creek'},
    {name: 'Dan', age: 30, city: 'Coconut Creek'},
    {name: 'Christian', age: 30, city: 'Coconut Creek'},]
  
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.customText}> Hello!!! </Text>
          <StatusBar style="auto" />

          <ImageBackground
            source={image} 
            resizeMode='cover' 
            style={{...styles.container, flex:1, height:'100%'}}
          >

      {/* <View> */}
      {students.map((student) => {
        return <Box entireStudent={student}/> //passing entire object 
        })}
          </ImageBackground>
        {/* </View> */}
      </SafeAreaView>
    </ScrollView>
  );
}


