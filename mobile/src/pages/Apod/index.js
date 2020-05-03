import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

import api from '../../services/api';

import styles from './style';

export default function Apod() {
  const [apod, setApod] = useState({});

  useEffect(() => {
    api.get('/apod')
      .then(res => {
        setApod(res.data);
      });
  }, []);


  return (
    <ScrollView>
      <View style={styles.container}>
        
        <Text style={styles.actionText}>APOD (astronomy picture of the day). Uma foto astronômica do dia</Text>
        <Text style={styles.title}>{apod.title}</Text>

          <View style={styles.section}>
            <View style={styles.info}>
              <Text style={styles.span}>{apod.date}</Text>
              <Text style={styles.span}>&copy;{apod.copyright}</Text>
            </View>
            { apod.media_type === 'image' ? 
              <Image
                style={styles.image}
                source={{uri: apod.hdurl}}
                resizeMode = 'center'
              /> :
              <WebView
                style={styles.video}
                source={{uri: apod.hdurl}}
              />
            }
              <View>
                <Text style={styles.description}>{apod.explanation}</Text>
              </View>
          </View>
      </View>
    </ScrollView>
  );
}