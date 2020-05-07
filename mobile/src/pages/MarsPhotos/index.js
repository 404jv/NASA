import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Image } from 'react-native';

import styles from './style';

import api from '../../services/api';

export default function MarsPhotos() {
  const [marsPhotos, setMarsPhotos] = useState([]);

useEffect(() => {``
    api.post('/mars', {
      sol: 2742
    }).then(res => {
      setMarsPhotos(res.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
        data={marsPhotos}
        style={styles.marsPhotosList}
        showsVerticalScrollIndicator={false}
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
