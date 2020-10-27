import React from "react";
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Text = styled.Text`
    font-size:20px;
    line-height:28px;
`;


function Detail ( { navigation, route } ) {
    navigation.setOptions( { title: route.params.date });

    const [text,setText] = React.useState('');
    React.useEffect( () => {//페이지에 새로 접근할 때마다
        AsyncStorage.getItem('list')
        .then( data => {
            const list = JSON.parse(data);
            const diary = list.find( element => element.date === route.params.date );
            setText( diary.text );
        })
    }, []);

    return (
        <Container>
            <Contents>
                <Text>{ text }</Text>
            </Contents>
            <Button
                title="목록으로"
                onPress={ () => navigation.goBack() }
            />             
        </Container>
    )
}

export default Detail;