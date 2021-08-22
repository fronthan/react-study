import React from 'react';
import styled, { css } from 'styled-components';

const categories = [
    {name: 'all', text:'전체보기'},
    {name:'business', text: '비지니스'},
    {name:'entertainment', text: '엔터테인먼트'},
    {name:'health', text:'건강'},
    {name:'science', text:'과학'},
    {name:'technology', text:'기술'}
];

const CategoriesBlock = styled.div`
    display: flex; padding:1rem;
    width:100%; max-width:768px; margin:0 auto;
    overflow-x: auto;
`;

const Category = styled.div`
    padding-bottom:.25rem;
    font-size: 1.125rem;
    cursor: pointer;
    white-space:pre;
    text-decoration:none;
    color:inherit;

    &:hover {color:#495057}

    ${props =>
    props.active && css`
    border-bottom:2px solid #22b8cf;
    color:#22b8cf;
    font-weight:600;
    &:hover {color:#3bc9db;}
    }`}

    &+& {margin-left:1rem}
`;

const Categories = ({ onSelect, category }) => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category key={c.name}
                    active={category === c.name}
                    onClick={() => onSelect(c.name)}
                >{c.text}</Category>
            ))}            
        </CategoriesBlock>

    );
};


export default Categories;