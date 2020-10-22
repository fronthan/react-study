import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import _ from "lodash";
import AsyncStorage from "@react-native-community/async-storage";
import produce from 'immer';


const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex:1; 
`;

const Container = styled.SafeAreaView`
  flex:1;
  padding-top: ${ Constants.statusBarHeight }px;
`;

const InputContainer = styled.View`
  flex-direction:row;  
  padding:8px;
`;
const Contents = styled.ScrollView`
  flex:1;
  padding:15px 30px;
`;

const TodoItem = styled.View`
  flex-direction:row;
  align-items:center;
`;

const TodoItemText = styled.Text`
  font-size:20px;
  flex:1;
`;
const Input = styled.TextInput`
  border:1px solid #ddd;
  flex:1;
  padding:10px 20px;
`;
const Button = styled.Button`
  color:#000;
`;
const TodoItemButton = styled.Button`
  font-size:20px;
  flex:1;
  background:#fff;
  color:#000;
`;

const Check = styled.TouchableOpacity`
  margin-right:5px
`;
const CheckIcon = styled.Text`
  font-size:20px;
`;


export default function App() {
  const [ list, setList ] = React.useState([]);

  const [ inputTodo, setInputTodo ] = React.useState('');

  React.useEffect( () => {
    AsyncStorage.getItem('list')
    .then( data => {
      if (data !== null) {
        setList ( JSON.parse( data ) );
      } 
    })
    .catch( error => {
      alert( error.message );
    });
  }, []);

  const store = ( newList ) => {
    setList( newList );
    AsyncStorage.setItem( 'list', JSON.stringify( newList ));
  }

  const insertTodo = () => {
    if( inputTodo === '' ) {
        return;
      }
      const newItem = {
        id: new Date().getTime().toString(),
        todo: inputTodo,
        done: false,
      };
      store( [
        ...list, //전개 연산자 '...' spread Operator
        newItem
      ] );
      setInputTodo( '' );
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}      
      >
      <Contents>
        {list.map( item => {
          return (
            <TodoItem key={ item.id }>
              <Check onPress={ () => {                
                store( produce( list, draft => {
                  const index = list.indexOf( item );
                  draft[ index ].done = !list[ index ].done;
                }) );
              }}>
                <CheckIcon>
                  { item.done ? '⭕' : '❕' }
                </CheckIcon>
              </Check>
              <TodoItemText>{ item.todo }</TodoItemText>  
              <TodoItemButton
                title="삭제"
                onPress={
                  () => { 
                    store( _.reject( list, element => element.id === item.id ) );
                   }
                }
              />
            </TodoItem>
          )
        })}        
      </Contents>
      <InputContainer>
        <Input 
          value={inputTodo}
          onChangeText={ value => setInputTodo( value )}
        />
        <Button
          title="전송"          
          onPress={ () => { 
              insertTodo()
          }}/>
     </InputContainer>
     </KeyboardAvoidingView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});