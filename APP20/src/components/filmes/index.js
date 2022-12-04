import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function Filmes(props) {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>{props.data.nome}</Text>
        <Image source={{uri: props.data.foto}} style={styles.frontCover} />

        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              props.mostrarSinopse(props.data.nome, props.data.sinopse)
            }>
            <Text style={styles.textButton}>Leia mais</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    backgroundColor: '#1B1B1B',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
    width: 300,
  },

  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 0.5,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 18,
  },

  frontCover: {
    width: 300,
    height: 200,
    alignSelf: 'center',
  },

  buttonArea: {
    alignItems: 'flex-end',
    marginTop: -40,
  },

  button: {
    width: 100,
    backgroundColor: '#FECC00',
    opacity: 1,
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
  },
  
  textButton: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
});

export default Filmes;