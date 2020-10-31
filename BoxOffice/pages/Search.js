import React from 'react';
import styled from 'styled-components/native';
import Title from '../components/Title';
import Row from '../components/Row';
import ListItem from '../components/ListItem';
import MovieName from '../components/MovieName';
import Axios from 'axios';
import { ActivityIndicator } from 'react-native';

const Container = styled.SafeAreaView`
    flex:1;
`;

const Button = styled.Button`
    margin-right:15px;
`;

const Input = styled.TextInput`
    flex:1;
    margin-left:15px;
    margin-right:5px;
    padding:10px;
    border:1px solid #ddd;
    background:#fff;
`;

function Search(props) {
    const [ keyword, setKeyword ] = React.useState('');
    const [ list, setList ] = React.useState([]);
    const [ isLoading, setIsLoading ] = React.useState(false);
    const search = React.useCallback( () => {
        let url = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f06efedb84caf485be5fd596903e480f';
        url += '&movieNm=' + keyword;

        setIsLoading( true );

        Axios.get( url )
            .then( response => {
                setIsLoading( false );
                setList( response.data.movieListResult.movieList );
            } )
            .catch( error => { alert(error.message); })
    }, [ keyword ])

    return (
        <Container>
            <Title>영화 검색</Title>
            <Row>
                <Input value={ keyword } onChangeText={ value => setKeyword( value )}/>
                <Button title="검색" onPress={ search } style={{background:'#4d4d4d', color:'#fff'}} />
            </Row>

            {isLoading ? (
                    <ActivityIndicator size={ 'large' } />
            ) : (
                list.map( item => ( 
                    <ListItem key={ item.movieCd } onPress={ () => {
                        props.navigation.navigate( 'MovieDetail', { movieCd: item.movieCd });
                    }}>
                        <MovieName>{ item.movieNm }</MovieName>
                    </ListItem>
                ))
            )}
        </Container>
    );
}

export default Search;