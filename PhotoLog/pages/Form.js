import React from 'react';
import styled from 'styled-components/native';
import uploadImage from '../net/uploadImage';
import storage from '../net/storage';

const Title = styled.Text`
  font-size: 30px;
`;

const Button = styled.Button``;
const Image = styled.Image`
  width: 100%;
  height: 360px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: 1px solid #e5e5e5;
  font-size: 16px;
`;

function Component(props) {
  const [url, setUrl] = React.useState(null);
  const [hashtags, setHashtags] = React.useState('');

  const selectImage = function () {
    uploadImage()
      .then(url => {
        setUrl(url);
      })
      .catch(error => {
        alert(error.message);
      });
  }
  
  return (
    <>
      <Title>Write</Title>
      <Button title="이미지 선택" onPress={selectImage} />
      {url && (
          <Image source={{uri: url}} />
      ) }
      <Input
        placeholder="#해시태그"
        value={hashtags}
        onChangeText={value => setHashtags(value)}
      />
      <Button
        title="저장"
        onPress={ ()=> {
            storage.append({
              url,
              hashtags,
            })
            .then(() => {
              props.navigation.goBack();
            })
        }}/>
    </>
  )
}

export default Component;
