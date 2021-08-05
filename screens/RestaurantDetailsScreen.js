import React from 'react'
import { View, Text, Image, Button } from 'react-native'

export default function RestaurantDetails({ route, navigation }) {
    const { address, id, name, photoUrl } = route.params.restaurant

    return (
        <View>
            <Image source={{ uri: photoUrl }} style={{ width: '100%', height: 200 }} />
            <Text> this is restaurant details {name}</Text>
            <Text> this is restaurant details </Text>
            <Text> {address} </Text>
            <Button title='Add New Restaurant' onPress={() => navigation.navigate('AddNewRestaurant')} />
        </View>
    )
}