import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const CadastroFornecedores = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [categorias, setCategorias] = useState('');

  const handleCadastro = () => {
    console.log('Nome:', nome);
    console.log('Endereço:', endereco);
    console.log('Contato:', contato);
    console.log('Categorias:', categorias);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Endereço:</Text>
      <TextInput
        style={styles.input}
        value={endereco}
        onChangeText={setEndereco}
      />

      <Text style={styles.label}>Contato:</Text>
      <TextInput
        style={styles.input}
        value={contato}
        onChangeText={setContato}
      />

      <Text style={styles.label}>Categorias:</Text>
      <TextInput
        style={styles.input}
        value={categorias}
        onChangeText={setCategorias}
      />

      <Button title="Cadastrar Fornecedor" onPress={handleCadastro} />

      <Image
        source={require('./caminho/para/sua/imagem.jpg')}
        style={styles.image}
      />

    </View>
  );
};

const AssociacaoImagens = () => {
  const [imagem, setImagem] = useState(null);

  const escolherImagem = () => {
    const options = {
      title: 'Selecionar imagem',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('Seleção de imagem cancelada');
      } else if (response.error) {
        console.log('Erro ao selecionar imagem:', response.error);
      } else {
        const source = { uri: response.uri };
        setImagem(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      {imagem && (
        <Image source={imagem} style={styles.imagem} />
      )}

      <Button title="Escolher Imagem" onPress={escolherImagem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default CadastroFornecedores;
