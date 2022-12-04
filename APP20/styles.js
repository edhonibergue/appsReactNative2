import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
    justifyContent: 'center',
    alignItems: 'center'
  },

  image:{
    width: 250, 
    height: 100,
    marginTop: 50,
  },

  modalArea: {
    backgroundColor: '#1B1B1B',
    flex: 1,
    shadowRadius: 5,
    alignItems: 'center'
  },

  modalTittle: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#0A0A0A',
    padding: 18,
    fontWeight: '400'
  },

  modalContent: {
    fontSize: 15,
    color: '#FFFFFF',
    padding: 10,
    textAlign: 'justify',
    margin: 10,
  },

  button: {
    backgroundColor: '#FECC00',
    borderRadius: 5,
    opacity: 1,
    width: 100,
    margin: 10,
  },

  textoButton: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '500',
    margin: 8,
  },
  
});

export {styles}
