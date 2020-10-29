import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
    width:100%; height:50px;
    background:#000;    
`;

const Label = styled.Text`
    font-size:16px;
    font-weight:bold;
    color:#fff;
`;

function Button(props) {
    return (
        <Container onPress={ props.onPress }>
            <Label>{props.children}</Label>
        </Container>
    )
}

export default Button;