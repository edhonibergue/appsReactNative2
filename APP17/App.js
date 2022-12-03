import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';
import {styles} from './styles';

class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      endereco: [],
      cep: '',
      buscador: '',
    };
  }

  buscarCep = () => {
    fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({endereco: data});
        this.setState({buscador: 'CEP: ' + this.state.cep + '\n' + 
        'Logradouro: ' +this.state.endereco.logradouro+ '\n' +
        'Bairro: ' +this.state.endereco.bairro+ '\n' +
        'Cidade: ' +this.state.endereco.localidade+ '\n' +
        'Estado: ' +this.state.endereco.uf
        });
        
      })
      .catch((erro) => {
        alert('CEP não encontrado');
      });
  };
      
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.title}>Busca CEP</Text>

        <View>
        <Image style={[styles.image]}
        source={{uri:'https://logospng.org/download/correios/logo-correios-2048.png'}}
        />
        </View>

        <View>
          <TextInput style={styles.input}
            defaultValue={this.state.cep} placeholder="Digite o CEP" keyboardType="numeric" onChangeText={(cep) => {this.setState({cep});}}
          />
          </View>

        <View>
          <Pressable style={styles.button} onPress={() => this.buscarCep()}>
            <Text style={styles.textButton}> Buscar </Text>
          </Pressable>
        </View>

        <View style={styles.box}>
          <Text style={styles.result}>{this.state.buscador} </Text>
        </View>
        
      </View>
    );
  }
}
export default App;
