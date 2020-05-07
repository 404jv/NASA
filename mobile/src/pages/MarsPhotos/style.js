import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  marsPhoto: {
    backgroundColor: '#FFF',
    marginBottom: 40,
    width: width * 0.9,
    alignItems: 'center',
    borderRadius: 8,
  },

  name: {
    fontSize: 17,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },

  image: {
    left: -5,
    width: width * 0.8,
    height: width * 0.4 * 2,
  },

  date: {
    fontSize: 17,
    textAlign: 'center',
    margin: 10,
    color: '#737380',
    fontWeight: 'bold'
  }
});
