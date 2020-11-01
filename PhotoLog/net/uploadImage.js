import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const config = {
  headers: {
    Authorization: 'Client-ID cd1a27b0a778fc5',
  },
};
async function uploadImage() {
  //promisify
  return new Promise((resolve, reject) => {
    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
        //   reject( { message: 'User cancelled image picker' } );
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        reject({message: response.error});
      } else {
        const params = new FormData();
        params.append('image', response.data);

        axios
          .post('https://api.imgur.com/3/image', params, config)
          .then(response => {
            resolve(response.data.data.link);
          })
          .catch(error => {
            reject({message: response.data.error});
          });

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  });
}

export default uploadImage;
