import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

async function fetch( url ) {

    let result = await AsyncStorage.getItem( url );
    let timestamp = await AsyncStorage.getItem( 'T' + url );
    if ( result !== null ) {
        timestamp = Number( timestamp );
        const now = new Date().getTime(); //unix 타임스탬프
        if ( now - timestamp < 86400000 ) {//86,400,000초 (만 하루, 밀리초)
            console.log('캐시 사용됨');
            return JSON.parse( result );
        }
    }

    const response = await axios.get( url );
    result = response.data;
    AsyncStorage.setItem( url, JSON.stringify( result ) );
    AsyncStorage.setItem( 'T' + url, new Date().getTime().toString() );
    console.log('axios 사용됨');
 //   console.log('url', url);
  //  console.log('result', result);
    return result;
}

export default fetch;