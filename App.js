import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, SafeAreaView, ScrollView, Button, ImageBackground, Alert} from 'react-native'

import Home from './screens/HomeScreen'
import styles from './styles'
import Box from './components/Box'

const image = {
  uri: 'https://r1.ilikewallpaper.net/iphone-wallpapers/download/19368/Explosion-Of-Colors-iphone-wallpaper-ilikewallpaper_com.jpg,'
}

const Stack = createStackNavigator()


export default function App() {
  const[restaurants, setRestaurants] = useState([])
  
 useEffect(() => {
   fetch('https://bocacode-intranet-api.web.app/restaurants')
   .then(response => response.json())
   .then(allRestaurants => setRestaurants (allRestaurants))
   .catch(err => console.log(err))
 },[])

const handleSingleRoute = () => {
  console.log('im clicked')
}
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          compnonent={HomeScreen}
          options={{title:'Welcome'}}
        />
        <Stack.Screen
          name="RestaurantDetails"
          components={Box}
          options={{title:'Restaurant Details'}}
        
        />
       <ScrollView>
         <SafeAreaView style={styles.container}>
            <Text style={styles.customText}> Hello!!! </Text>
            <StatusBar style="auto" />
            <ImageBackground
            source={image} 
            resizeMode='cover' 
            style={{...styles.container}}
            >

            {/* //restaurants = useeffect */}

      {restaurants.map((singleRestaurant, index) => {
        console.log('here is my item', singleRestaurant, index)
        return (
          <>
        <Box key={singleRestaurant.id}item={singleRestaurant} /> 
        <Button
           title='Details'
           color='pink'
           onPress={handleSingleRoute} />
           </>
        )})}
        
          
          </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  </Stack.Navigator>
</NavigationContainer>
  );
}


