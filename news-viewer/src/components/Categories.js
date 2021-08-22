import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const Category = styled(NavLink)`
    padding-bottom:.25rem;
    font-size: 1.125rem;
    cursor: pointer;
    white-space:pre;
    text-decoration:none;
    color:inherit;

    &:hover {color:#495057}

    &.active {
        border-bottom:2px solid #22b8cf;
        color:#22b8cf;
        font-weight:600;
        &:hover {color:#3bc9db;}
    }
    /* ${props =>
    props.active && css`
    border-bottom:2px solid #22b8cf;
    color:#22b8cf;
    font-weight:600;
    &:hover {color:#3bc9db;}
    }`} */

    &+& {margin-left:1rem}
`;

const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category key={c.name}
                    activeClassName="active"
                    exact={c.name === 'all'}
                    to={c.name === 'all' ? '/' : `/${c.name}`}
                >{c.text}
            {/* NavLink 적용 이전 코드
                <Category key={c.name}
                active={category === c.name}
                onClick={() => onSelect(c.name)}
            >{c.text}</Category> */}
                </Category>
            ))}            
        </CategoriesBlock>

    );
};


export default Categories;