import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Input } from 'react-native-elements';


export class BuscarProyectoScreen extends Component {

    state = {
        search : ''
    }

    onChange(e){
        let inputSearch = e.nativeEvent.text
        this.setState({
            search: inputSearch
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Input
                    onChange={text => this.onChange(text)}
                    placeholder='Buscar Proyecto'
                    leftIcon={{ type: 'font-awesome', name: 'search' }}
                />
            </View>
        )
    }
}

export default BuscarProyectoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
