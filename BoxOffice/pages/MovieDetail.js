import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import moment from 'moment';
import Title from '../components/Title';
import fetch from '../net/Fetch';

const Container = styled.SafeAreaView`
    flex:1;
`;

const Contents = styled.ScrollView`
    flex:1;
`;

const Description = styled.Text`
    padding:10px;  
    font-size:18px;
    color:#4d4d4d;
`;

const Header = styled.View`
    position:relative;
    align-items:center;
    justify-content:center;
    margin-bottom:15px;
    height:50px;
    background:#fff;
    border-bottom-color:#e5e5e5;
    border-bottom-width:1px;
`;

const HeaderTitle = styled.Text`
    font-size:20px; font-weight:bold;
`;

const Back = styled.TouchableOpacity`
    width:50px; height:50px;
    padding:12px;
    position:absolute;
    left:0; top:0;
    color:#bbb;
`;

const BackLabel = styled.Text`
    justify-content:center;    
    font-size:18px;
    color:#00c;
`;

function MovieDetail(props) {
    const [ info, setInfo ] = React.useState(null);
    React.useEffect( () => {
        let url = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f06efedb84caf485be5fd596903e480f';
        url += '&movieCd='+ props.route.params.movieCd;

        fetch( url )
            .then( data => {
                setInfo( data.movieInfoResult.movieInfo );
            })
            .catch( error => {
                alert( error.message );
            })
    })

    return (
        <Container>
            <Header>
                <Back onPress={ ()=> { props.navigation.goBack() }}>
                    <BackLabel>◀</BackLabel>
                </Back>
                <HeaderTitle>영화 정보 조회</HeaderTitle>
            </Header>
            <Contents>
                { info === null ? (
                    <ActivityIndicator size={ 'large' }/>
                ) : (
                    <>
                    <Title>{ info.movieNm }</Title>
                    <Description>제작년도 : { info.prdtYear }년</Description>
                    <Description>개봉일: { moment(info.openDt, 'YYYYMMDD').format('YYYY년 MM월 DD일') }</Description>
                    <Description>상영 시간: { info.showTm }분</Description>
                    <Description>국가: { info.nations.map(item=>item.nationNm).join(', ')}</Description>
                    <Description>감독: {info.directors.map(item=>item.peopleNm).join(',')}</Description>
                    <Description>배우들: {info.actors.map(item=>item.peopleNm).join(',')}</Description>
                    <Description>관람제한: {info.audits.map(item=>item.watchGradeNm).join(',')}</Description>                    
                    </>
                ) }
            </Contents>
        </Container>
    );
};

export default MovieDetail;