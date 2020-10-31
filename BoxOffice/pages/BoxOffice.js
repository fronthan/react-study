import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import Title from '../components/Title';
import ListItem from '../components/ListItem';
import MovieName from '../components/MovieName';
import fetch from '../net/Fetch';

const Container = styled.SafeAreaView`
    flex:1;
    padding:20px;
`;

const Contents = styled.ScrollView`
    flex:1;
`;

const Rank = styled.Text`
    margin-right:10px;
    font-size:16px;
`;

function BoxOffice(props) {
    const [ list, setList ] = React.useState([]);

    React.useEffect( () => {
        //ajax 비동기 자바스크립트 xml
        fetch('https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f06efedb84caf485be5fd596903e480f&targetDt=20200701')
            .then( data => {
                setList( data.boxOfficeResult.dailyBoxOfficeList );
            })
            .catch( error => {
                alert( error.message );
            })
    }, []);


    return (
        <Container>
            <Contents>
            <Title>박스 오피스</Title>
            { list.length === 0 && (
                <ActivityIndicator color="#00f" size="large"/>
            ) }
            { list.map( item => (
                <ListItem key={ item.movieCd } onPress={ () => {
                    props.navigation.navigate( 'MovieDetail', {
                        movieCd: item.movieCd
                    });
                }}>
                    <Rank>{ item.rank }</Rank>
                    <MovieName>{ item.movieNm }</MovieName>
                </ListItem>
                )
            ) }           
            </Contents>
        </Container>
    );
}

export default BoxOffice;
