import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F5',
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    marginBottom: 10
  },

  actionText: {
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 12
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8
  },

  info: {
    flex: 1,
    flexDirection: 'row',
  },

  span: {
    color: '#737380',
    margin: 5
  },

  image: {
    width: width * 0.9,
    height: width * 0.4 * 3,
    marginBottom: 20
  },

  video: {
    width: width * 0.9,
    height: width * 0.5,
    marginBottom: 20
  },

  description: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#41414D'
  }

});
