import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieItem = styled.li`
    // display: flex;
    list-style: none;
    padding-left: 0px;
`;
export const MovieLink = styled(NavLink)`
    display: inline-flex;
    padding: 7px 15px;
    border-radius: 8px;
    text-decoration: none;
    color: black;
    &:hover {
        color: white;
        background-color: black;
    }
`;