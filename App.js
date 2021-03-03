import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Pessoa from "./src/components/Pessoa";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: "1",
          nome: "Maria",
          idade: 25,
          estadoCivil: "Casada",
          cidade: "Patos de Minas",
          email: "maria@unipam.edu.br",
        },
        {
          id: "2",
          nome: "Joao",
          idade: 11,
          estadoCivil: "Divorciado",
          cidade: "Patos de Minas",
          email: "joao@unipam.edu.br",
        },
        {
          id: "3",
          nome: "Carlos",
          idade: 43,
          estadoCivil: "Casado",
          cidade: "Patos de Minas",
          email: "carlos@unipam.edu.br",
        },
        {
          id: "4",
          nome: "Bruna",
          idade: 33,
          estadoCivil: "Solteira",
          cidade: "Patos de Minas",
          email: "bruna@unipam.edu.br",
        },
        {
          id: "5",
          nome: "Carla",
          idade: 56,
          estadoCivil: "Solteira",
          cidade: "Patos de Minas",
          email: "carla@unipam.edu.br",
        },
        {
          id: "6",
          nome: "Paulo",
          idade: 56,
          estadoCivil: "Solteiro",
          cidade: "Patos de Minas",
          email: "paulo@unipam.edu.br",
        },
        {
          id: "7",
          nome: "Mara",
          idade: 56,
          estadoCivil: "Solteira",
          cidade: "Patos de Minas",
          email: "mara@unipam.edu.br",
        },
        {
          id: "8",
          nome: "Leo",
          idade: 56,
          estadoCivil: "Solteiro",
          cidade: "Patos de Minas",
          email: "leo@unipam.edu.br",
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pessoa nome={item.nome} idade={item.idade} estadoCivil={item.estadoCivil} cidade={item.cidade} email={item.email} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});

export default App;
