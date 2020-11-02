import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import storage from '../net/storage';
import { withContext } from 'context-q';
import moment from 'moment';

const Title = styled.Text`
  font-size: 30px;
`;
const Container = styled.SafeAreaView`
  flex:1;
`;
const Contents = styled.ScrollView`
  flex:1;
  padding:15px;
`;
const Button = styled.Button``;
const ListItem = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    padding:5px 0;
    border-bottom-width:1px;
    border-bottom-color:#e5e5e5;
`;
const Thumbnail = styled.Image`
    width:80px; height:80px;
    margin-right:10px;
`;
const Tags = styled.Text`
    font-size:14px;
`;
const Date = styled.Text`
    color: #aaaaaa;
    margin-right: 12px;
`;

function Component(props) {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', e => {
      //e.preventDefault();
      storage.readAll().then((data) => setList(data));
    });

    storage.readAll().then((data) => setList(data));
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Container>
      <Contents>
      {list.map(item => (
        <ListItem key={item.id} onPress={() => {
            props.navigation.navigate('View', { id: item.id});
        }}>
          <Row>
            <Thumbnail source={{ uri: item.url }}/>
            <Tags>
                {item.hashtags}               
            </Tags>
          </Row>
          {props.context.showDate && (
            <Date>{moment(item.id, 'x').format('YYYY-MM-DD')}</Date>
          )}
        </ListItem>
      ))}     
      </Contents>
    
      <Button
        title="사진추가"
        onPress={() => {
          props.navigation.navigate('Form');
        }}
      />
      <Button
        title="설정"
        onPress={() => {
          props.navigation.navigate('Settings');
        }}
      />
      </Container>
    </>
  );
}

Component = widthContext( Component );

export default Component;



// <Button title="전체 삭제" onPress={() => {
//   try {
//    AsyncStorage.removeItem('photo-logs')
//  } catch(e) {
//    //error
//  }
//  }}/>