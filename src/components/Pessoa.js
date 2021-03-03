import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class Pessoa extends Component{
    render(){
        return(
            <View style={styles.item}>
                <Text style={styles.title}> {this.props.nome} </Text>
                <Text>Idade: {this.props.idade} </Text>
                <Text>Estado Civil: {this.props.estadoCivil} </Text>
                <Text>Cidade: {this.props.cidade} </Text>
                <Text>Email: {this.props.email} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#97ECE8',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 32
    }
})

export default Pessoa;