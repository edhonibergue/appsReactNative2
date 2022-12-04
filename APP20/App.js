import React from 'react';
import {StyleSheet,View,Text,FlatList,ActivityIndicator,Pressable, Modal, Image} from 'react-native';
import API from './src/services/api';
import {styles} from './styles';

import Filmes from './src/components/filmes';
const App: () => React$Node = () => {
 
  const [filmes, setFilmes] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalTitulo, setModalTitulo] = React.useState('');
  const [modalConteudo, setModalConteudo] = React.useState('');

  React.useEffect(() => {
    (async () => {
      const response = await API.get('/r-api/?api=filmes');
      setFilmes(response.data);
      setLoading(false);
    })();
  }, []);

  const mostrarSinopse = (titulo, conteudo) => {
    setModalTitulo(titulo);
    setModalConteudo(conteudo);
    setModalOpen(true);
  };

  return (
    <View style={styles.container}>

    <Image style={[styles.image]}
        source={{uri:'https://prodview.com.br/wp-content/uploads/2020/03/AdoroCinema-1-e1585269662171.png'}}
        />

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Filmes data={item} mostrarSinopse={mostrarSinopse} />
        )}
      />

      <Modal animationType="slide" visible={modalOpen}>
          <Text style={styles.modalTittle}>{modalTitulo}</Text>
          <View style={styles.modalArea}>
          <Text style={styles.modalContent}>{modalConteudo}</Text>
          <Pressable style={styles.button} onPress={() => setModalOpen(false)}>
          <Text style={styles.textoButton}>Voltar</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default App;