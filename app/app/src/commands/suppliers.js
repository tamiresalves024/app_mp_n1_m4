import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image } from 'react-native';

const ListaFornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [filtroLocalizacao, setFiltroLocalizacao] = useState('');

  const dadosFornecedores = [
    { id: 1, nome: 'Fornecedor 1', categoria: 'Categoria A', localizacao: 'Cidade A', imagem: require('./imagens/fornecedor1.jpg') },
    { id: 2, nome: 'Fornecedor 2', categoria: 'Categoria B', localizacao: 'Cidade B', imagem: require('./imagens/fornecedor2.jpg') },
    { id: 3, nome: 'Fornecedor 3', categoria: 'Categoria C', localizacao: 'Cidade C', imagem: require('./imagens/fornecedor3.jpg') },
    { id: 4, nome: 'Fornecedor 4', categoria: 'Categoria D', localizacao: 'Cidade D', imagem: require('./imagens/fornecedor4.jpg') },
  ];

  useEffect(() => {
    setFornecedores(dadosFornecedores);
  }, []);

  const filtrarFornecedores = () => {
    let fornecedoresFiltrados = dadosFornecedores;

    if (filtroCategoria) {
      fornecedoresFiltrados = fornecedoresFiltrados.filter(fornecedor => fornecedor.categoria.includes(filtroCategoria));
    }

    if (filtroLocalizacao) {
      fornecedoresFiltrados = fornecedoresFiltrados.filter(fornecedor => fornecedor.localizacao.includes(filtroLocalizacao));
    }

    setFornecedores(fornecedoresFiltrados);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Filtrar por categoria"
        value={filtroCategoria}
        onChangeText={text => setFiltroCategoria(text)}
        onBlur={filtrarFornecedores}
      />

      <TextInput
        style={styles.input}
        placeholder="Filtrar por localização"
        value={filtroLocalizacao}
        onChangeText={text => setFiltroLocalizacao(text)}
        onBlur={filtrarFornecedores}
      />

      <FlatList
        data={fornecedores}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.imagem} style={styles.imagemFornecedor} />
            <View style={styles.textContainer}>
              <Text style={styles.nomeFornecedor}>{item.nome}</Text>
              <Text>{item.categoria}</Text>
              <Text>{item.localizacao}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagemFornecedor: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  nomeFornecedor: {
    fontWeight: 'bold',
  },
});

export default ListaFornecedores;
