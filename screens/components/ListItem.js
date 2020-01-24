import React from 'react'
import {  Text, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        height: 60,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    text: {
        fontSize: 18,
    },
})

export default ({ name , iconName, onPress }) => {

    return (

        <ListItem
        // key={i}
        onPress={onPress}
        title="test"       
        leftIcon={{name:iconName}}
        bottomDivider
        chevron
      />
       
    )
}