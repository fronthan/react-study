import React from 'react';
import styled from 'styled-components/native';
import storage from '../net/storage';
import moment from 'moment';

const Title = styled.Text`
  font-size: 30px;
`;

const Button = styled.Button``;
const ListItem = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    border-bottom-width:1px;
    border-bottom-color:#e5e5e5;
`;
const Thumbnail = styled.Image`
    width:80px; height:80px;
`;
const Tags = styled.Text`
    font-size:14px;
`;

function Component(props) {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    storage.readAll().then((data) => setList(data));
  }, []);

  return (
    <>
      <Title>목록</Title>
      {list.map(item => (
        <ListItem key={item.id} onPress={() => {
            props.navigation.navigate('View', { id: item.id});
        }}>
            <Thumbnail source={{ uri: item.url }}/>
            <Tags>
                {item.hashtags}
            </Tags>
        </ListItem>
      ))}     
      <Button
        title="사진 추가"
        onPress={() => {
          props.navigation.navigate('Form');
        }}
      />
    </>
  );
}

export default Component;
