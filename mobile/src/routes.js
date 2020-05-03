import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Menu from './components/Menu';

export default function Routes() {
  return (
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  );
}
