import React, { Component } from 'react'
import { View, Text, TextInput, Pressable, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import {styles} from './styles';

import api from './src/services/api';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conversao: '',
      valor: '',
      deMoeda: '',
      paraMoeda: '',
      buscarMoeda: '',
      mostrarCon: '',
    }  
     this.mostrarConversao = this.mostrarConversao.bind(this);
  }

    async componentDidUpdate() {
    if (this.state.loading == true) 
      return null 
    else {
      try {
        this.consultarApi()
        const response = await api.get(`/${this.state.buscarMoeda}`)
        const moedas = this.state.buscarMoeda
        this.converter(moedas, response)
        this.setState({ loading: true })
      }   
      catch(erro) {
        console.log(erro)
      }
    }
  }

  consultarApi() {
    const buscarCoin = (n1) => {
      this.setState({ buscarMoeda: n1 })
    }

    let n1 = this.state.deMoeda
    let n2 = this.state.paraMoeda

    if (n1 == 'Real' && n2 == 'Real')
      this.setState({conversao: 'R$' + Number(this.state.valor).toFixed(2)})

    else if (n1 == 'Real' && n2 == 'Dolar') {
      buscarCoin('BRL-USD')
    }

    else if (n1 == 'Real' && n2 == 'Euro') {
      buscarCoin('BRL-EUR')
    }

    else if (n1 == 'Dolar' && n2 == 'Real') {
      buscarCoin('USD-BRL')   
    }

    else if (n1 == 'Dolar' && n2 == 'Dolar')
      this.setState({conversao: '$' + Number(this.state.valor).toFixed(2)})

    else if (n1 == 'Dolar' && n2 == 'Euro') {
      buscarCoin('USD-EUR') 
    }

    else if (n1 == 'Euro' && n2 == 'Real') {
      buscarCoin('EUR-BRL') 
    }

    else if (n1 == 'Euro' && n2 == 'Euro')
      this.setState({conversao: '€' + Number(this.state.valor).toFixed(2)})

    else if (n1 == 'Euro' && n2 == 'Dolar') {
      buscarCoin('EUR-USD') 
    }

    else if (n1 == 'Bitcoin' && n2 == 'Real') {
      buscarCoin('BTC-BRL')   
    }

    else if (n1 == 'Bitcoin' && n2 == 'BTC')
      this.setState({conversao: '₿' + Number(this.state.valor).toFixed(2)})

    else if (n1 == 'Bitcoin' && n2 == 'Dolar') {
      buscarCoin('BTC-USD') 
    }

    else if (n1 == 'Bitcoin' && n2 == 'Euro') {
      buscarCoin('BTC-EUR') 
    }

  }

  converter(moedas, response) {
    if(moedas == 'BRL-USD') {
      this.setState({conversao: '$' + (response.data.BRLUSD.low * Number(this.state.valor)).toFixed(2)})
    }
    else if(moedas == 'BRL-EUR') {
      this.setState({conversao: '€' + (response.data.BRLEUR.low * Number(this.state.valor)).toFixed(2)})
    }
    else if (moedas == 'USD-BRL') {
      this.setState({conversao: 'R$' + (response.data.USDBRL.low * Number(this.state.valor)).toFixed(2)})
    }
    else if (moedas == 'USD-EUR') {
      this.setState({conversao: '€' + (response.data.USDEUR.low * Number(this.state.valor)).toFixed(2)})
    }
    else if (moedas == 'EUR-BRL') {
      this.setState({conversao: 'R$' + (response.data.EURBRL.low * Number(this.state.valor)).toFixed(2)})
    }
    else if (moedas == 'EUR-USD'){
      this.setState({conversao: '$' + (response.data.EURUSD.low * Number(this.state.valor)).toFixed(2)})
    }
    else if (moedas == 'BTC-BRL') {
      this.setState({conversao: 'R$' + (response.data.BTCBRL.low * Number(this.state.valor)).toFixed(3)})
    }
    else if (moedas == 'BTC-USD'){
      this.setState({conversao: '$' + (response.data.BTCUSD.low * Number(this.state.valor)).toFixed(3)})
    }
    else if(moedas == 'BTC-EUR') {
      this.setState({conversao: '€' + (response.data.BTCEUR.low * Number(this.state.valor)).toFixed(3)})
    }
  }

  mostrarConversao(){
    this.setState({mostrarCon: this.state.conversao})
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Conversor de Moedas</Text>
        <Text style={styles.subTitle}> Dólar, Real, Euro e Bitcoin </Text>

        
        <Image style={[styles.image]}
        source={{uri:'https://i.imgur.com/lOYLR6W.png'}}
        />

            <TextInput style={styles.input}
              keyboardType='numeric'
              onChangeText={ (n1) => { 
                this.setState({ valor : n1})
                this.setState({ loading: false }) 
              }}
              placeholder=" Digite o valor para conversão "/>

            <Picker style={styles.input}
              selectedValue={ this.state.deMoeda }
              onValueChange={(valor, itemIndex) => this.setState({ deMoeda: valor})} 
            >
              <Picker.Item key={0} label= "De" />
              <Picker.Item key={1} value= "Real" label="Real" />
              <Picker.Item key={2} value= "Dolar" label="Dolar" />
              <Picker.Item key={3} value= "Euro" label="Euro" />
              <Picker.Item key={4} value= "Bitcoin" label="Bitcoin" />
            </Picker>  
       
            <Picker style={styles.input}
              selectedValue={ this.state.paraMoeda }
              onValueChange={(valor, itemIndex) => this.setState({paraMoeda: valor})}
            >
              <Picker.Item key={0} label="Para" />
              <Picker.Item key={1} value= "Real" label="Real" />
              <Picker.Item key={2} value= "Dolar" label="Dolar" />
              <Picker.Item key={3} value= "Euro" label="Euro" />
            </Picker>

        <Pressable style={styles.button}
          onPress={() => this.mostrarConversao()}>
          <Text style={styles.textButton}> Calcular </Text>
        </Pressable>
      
          <Text style={styles.text}> Valor Convertido: {this.state.conversao} 
          </Text> 
      </View>
    )
  }
}