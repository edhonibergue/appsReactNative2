import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
    image:{
    width: 126, 
    height: 76,
    margin: 20,
  },
  
    input:{
    width: 250,
    height: 42,
    borderWidth: 1,
    borderColor: '#00416b',
    fontSize: 16,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    margin: 10,
  },
  
  text:{
    textAlign: 'center',
    fontSize: 20,
    color: '#000000',
    fontWeight: '600',
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    color: '#00416b',
  },

  subTitle: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: '200',
  },

  button: {
   width: 250,
    height: 36,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#0071AD',
    margin: 10,
  },

  textButton: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export {styles}
 