import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#F0F0F5',
  },

  actionText: {
    fontSize: 15
  },

  title: {
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 22,
    fontWeight: 'bold'
  },

  objectLen: {
    color: '#41414D',
    position: 'relative',
    right: 80
  },

  object: {
    backgroundColor: '#FFF',
    marginBottom: 15,
    width: width * 0.8,
    height: height * 0.4,
    borderRadius: 8,
  },
  
  name: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },

  strong: {
    left: 9,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#41414d',
  },

  span: {
    left: 24,
    color: '#737380',
    marginBottom: 10
  },

  diameters: {
    left: 15
  }


});
