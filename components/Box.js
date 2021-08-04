import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles'

export default function Box({entireStudent}){
    const {name, city, age} = entireStudent //destructuring name city and age from entirestudent
    return(
        <View style={styles.box}>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{city}</Text>
        </View>
    )

}