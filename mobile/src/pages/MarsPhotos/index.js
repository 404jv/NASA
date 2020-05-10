import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, TextInput, Button } from 'react-native';

import styles from './style';

import api from '../../services/api';

export default function MarsPhotos() {
  const [marsPhotos, setMarsPhotos] = useState([]);
  const [dateSol, setDateSol] = useState('');

  useEffect(() => {
    api.post('/mars', {
      sol: 2742
    }).then(res => {
      setMarsPhotos(res.data);
    });
  }, []);

  function handleMarsPhotos() {
    api.post('/mars', {
      sol: dateSol
    }).then(res => {
      setMarsPhotos(res.data);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.actionText}>
        A data marciana é contada por sol (rotação marciana ou dia) 
        desde a chegada do veículo espacial da NASA. Abaixo digite a data em sol, 
        para ver as fotos tiradas
      </Text>
      
      <TextInput
        style={styles.input}
        placeholder='ex 1000'
        onChangeText={date => setDateSol(date)}
      />
      
      <View style={styles.button}>
        <Button 
          title='Ver'
          onPress={handleMarsPhotos}
        />
      </View>

      <FlatList 
        data={marsPhotos}
        style={styles.marsPhotosList}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        keyExtractor={marsPhoto => String(marsPhoto.id)}

        renderItem={({ item: marsPhoto }) => (
          <View style={styles.marsPhoto}>
            <Text style={styles.name}>{marsPhoto.nameCamera}</Text>

            <Image
              source={{uri: marsPhoto.img_src}}
              style={styles.image}
            />

            <Text style={styles.date}>{marsPhoto.earth_date}</Text>
          </View>
        )}
      />
    </View>
  );
}
