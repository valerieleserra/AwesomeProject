import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles'

export default function Box({item}){
    const {name, photoUrl, rating, address,} = item
    console.log('THISISPROPSX==>' , address)
    // const {name, city, age} = entireStudent //destructuring name city and age from entirestudent
    return(
        <View style={styles.box}>
             <Text>{name}</Text>
            <Text>{address}</Text>
            <Text>{rating}</Text>
        </View>
    )

}