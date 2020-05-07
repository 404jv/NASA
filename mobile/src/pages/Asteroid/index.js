import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { View, Text, FlatList, ScrollView, SafeAreaView } from 'react-native';

import api from '../../services/api';

import styles from './style';

export default function Asteroid() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const dateNow = format(new Date, 'yyyy-MM-dd');
    
    api.post('/', {
      dateStart: dateNow,
      dateEnd: dateNow
    }).then(res => {
      setObjects(res.data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Objetos próximos a terra</Text>
      <Text style={styles.objectLen}>Total de objetos: {objects.length}</Text>
      <FlatList 
        data={objects}
        style={styles.objectsList}
        showsVerticalScrollIndicator={false}
        keyExtractor={object => String(object.id)}

        renderItem={({item: object}) => (
          <View style={styles.object}>
            <Text style={styles.name}>{object.name}</Text>

            <Text style={styles.strong}>Magnitude</Text>
            <Text style={styles.span}>{object.absolute_magnitude_h}</Text>

            <Text style={styles.strong}>É uma ameaça</Text>
            <Text style={styles.span}>{object.is_potentially_hazardous_asteroid ? 'Sim' : 'Não'}</Text>
          
            <Text style={styles.strong}>Diametro: </Text>
            <View style={styles.diameters}>
              <Text style={styles.strong}>KM: </Text>
              
              <Text 
                style={styles.span}
              > {object.estimated_diameter_kilometers.estimated_diameter_max.toFixed(5)}
              -{object.estimated_diameter_kilometers.estimated_diameter_min.toFixed(5)}
              </Text>

              <Text style={styles.strong}>M: </Text>
              <Text
                style={styles.span}
              >{object.estimated_diameter_meters.estimated_diameter_max.toFixed(5)}
              -{object.estimated_diameter_meters.estimated_diameter_min.toFixed(5)}
              </Text>
            
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
