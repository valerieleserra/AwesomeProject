import React, { useState, useEffect } from "react"
import { View, Text, Button, ScrollView, SafeAreaView, StatusBar, ImageBackground, Image } from "react-native"

import Box from './../components/Box'
import styles from './../styles'

const image = {
    uri: 'https://media.istockphoto.com/photos/blurred-blue-sky-and-sea-with-bokeh-light-picture-id1253837586?b=1&k=6&m=1253837586&s=170667a&w=0&h=6K4nC5sNKH7Wv8-KB4bbgl_Zg5x44fyWi6zgmufXWno=',
}

export default function Home({ navigation }) {
    const [restaurants, setRestaurants] = useState([])


    useEffect(() => {
        fetch('https://bocacode-intranet-api.web.app/restaurants')
            .then(response => response.json())
            .then(allRestaurants => setRestaurants(allRestaurants))
            .catch(err => console.log(err))
    }, [])

    // const routeToRestaurant = (item) => {
    //     navigation.navigate
    // }

    return (
        <View>
            <Text> no place like 127.0.0.1 </Text>
            <ScrollView>
                <SafeAreaView>
                    <Text style={styles.customText}> Hello!!! </Text>
                    <StatusBar style="auto" />
                    <ImageBackground
                        source={image}
                        resizeMode='cover'
                        style={styles.container}>
                        {restaurants.map((singleRestaurant, index) => {
                            console.log('here is my item', singleRestaurant, index)
                            return (
                                <>
                                    <Box key={singleRestaurant.id} item={singleRestaurant} />
                                    <Button
                                        title='Details'
                                        color='pink'
                                        onPress={() => {
                                            navigation.navigate('RestaurantDetails', { restaurant: singleRestaurant })
                                        }}
                                    />
                                </>
                            )
                        })}
                    </ImageBackground>
                </SafeAreaView>
            </ScrollView>
            {/* <Button title='take me' onPress={routeToRestaurant} /> */}
        </View>
    )
}