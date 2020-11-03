import React from 'react';
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

const Button = styled.TouchableOpacity`
    align-items:center; justify-content:center;
    width:100%;
    height:50px;
    border-width:1px;
    border-color:#dd9b25;
    background-color:#dd9b25;
`;
const ButtonTxt = styled.Text`
  color:#fff; font-size:24px;
`;

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
const Row = styled.View``;
const Tags = styled.Text`
    font-size:16px;
`;
const Date = styled.Text`
    color: #aaaaaa;
    font-size:14px;
    margin-right: 12px;
`;

function Component(props) {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', e => {
      //e.preventDefault();
      storage.readAll().then(data => setList(data));
    });

    storage.readAll().then(data => setList(data));
    return () => unsubscribe(); //useEffect 가 끝나는 시점에
  }, []);

  return (
    <>
      <Container>
      <Contents>
      {list.map(item => (
        <ListItem key={item.id} onPress={() => {
            props.navigation.navigate('View', { id: item.id});
        }}>
          <Thumbnail source={{ uri: item.url }}/>
          <Row>
            <Tags>{item.hashtags}</Tags>
            {props.context.showDate && (
              <Date>{moment(item.id, 'x').format('YYYY-MM-DD')}</Date>
            )
            //'x'는 밀리초로 파싱하는 것
          }
          </Row>
        </ListItem>
      ))}     
      </Contents>
    
      <Button onPress={() => {
          props.navigation.navigate('Form');
        }}
      >
        <ButtonTxt>사진추가</ButtonTxt>
      </Button>
      <Button onPress={() => {
          props.navigation.navigate('Settings');
        }}
      >
        <ButtonTxt>설정</ButtonTxt>
      </Button>
      </Container>
    </>
  );
}

Component = withContext( Component );

export default Component;



// <Button title="전체 삭제" onPress={() => {
//   try {
//    AsyncStorage.removeItem('photo-logs')
//  } catch(e) {
//    //error
//  }
//  }}/>