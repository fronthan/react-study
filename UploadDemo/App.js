/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Button, SafeAreaView, Image, StatusBar, ActivityIndicator } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

const options = {//고정된 값일 때 밖에 선언한다.
  title: '이미지를 선택하라능',
  customButtons: [{ name: 'fb', title: '페이스북 사진첩에서 선택하기' }], //커스텀 가능한 걸 알려주는 예제
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const config = {
  headers: {
    Authorization: 'Client-ID cd1a27b0a778fc5'
   }
}

const App: () => React$Node = () => {
  const [ url, setUrl ] = React.useState( null );
  const [ isLoading, setIsLoading ] = React.useState(false);
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title="이미지 선택" onPress={ ()=>{
          setIsLoading(true);

          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              setIsLoading(false);              
              console.warn('사용자가 취소함');
            } else if (response.error) {
              setIsLoading(false);
              console.warn('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              setIsLoading(false);
              console.warn('사용자가 페이스북을 선택함: ', response.customButton);
            } else {
             // const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
             // setUrl( 'data:'+ response.type + ';base64,'+ response.data );
             let params = new FormData();
             params.append( 'image', response.data );
             axios.post( 'https://api.imgur.com/3/image', params, config )
              .then( response => {
                setUrl( response.data.data.link );                
              })
              .catch( error => {
                console.warn(error);
                alert('Error: ' + error.response.data.data.error );
              })
              .finally( () => {
                setIsLoading(false);
              } );
            }
            
          });
        }} /> 

        { isLoading ? (
          <ActivityIndicator size="large" color="ff0"/>
        ) : (
          <>
          { url && ( 
            <Image source={{ uri : url }} style={{ width: 360, height:360 }}/>
          )}
          </>
        )}

      </SafeAreaView>
    </>
  );
};


export default App;
