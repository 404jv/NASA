import React from 'react';
import { View, Text } from 'react-native'

import styles from './style';

export default function InputDate() {
  return (
    <View style={styles.container}>
      <Text style={styles.actionText}>
        Digite a data do inicio e fim, para ver os objetos registrados pela Nasa
      </Text>
    </View>
  );
}