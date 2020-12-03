import styled from 'styled-components';

const Nav = styled.nav`
    background: #d5e099;
    margin: 0px;
    padding: 17px;
`;

const Li = styled.li`
    list-style: none;
    margin-left: 14px;
    display: inline-block;
`
const A = styled.a`
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #6f6056
    }
`;


export  { Nav, Li, A };