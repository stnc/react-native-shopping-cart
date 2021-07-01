import AsyncStorage from '@react-native-community/async-storage';


//read 1 
export const _bootstrapAsync_1 = async () => {
  try {
    const retrievedItem = await AsyncStorage.getItem('id_token');
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) {
    console.log(error.message);
  }
  return;
};




//read 2
export const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('id_token');
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value;
    }
  } catch (error) {
    console.log(error);
  }
};

export const deviceStorage = {
  async saveKey(key, valueToSave) {
    try {
      await AsyncStorage.setItem(key, valueToSave);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },




  async loadJWT() {
    try {
      const value = await AsyncStorage.getItem('id_token');
      if (value !== null) {
        this.setState({
          jwt: value,
          loading: false
        });
      } else {
        this.setState({
          loading: false
        });
      }
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  async deleteJWT() {
    try {
      await AsyncStorage.removeItem('id_token')
        .then(
          () => {
            this.setState({
              jwt: ''
            })
          }
        );
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }
};


