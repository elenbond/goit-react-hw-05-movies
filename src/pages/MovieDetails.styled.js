import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
    display: inline-flex;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    text-decoration: none;
    color: black;
    &:hover {
        color: white;
        background-color: black;
    }
`;
export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    // padding: 0 15px;
`;
export const MovieThumb = styled.div`
    display: flex;
    margin-bottom: 15px;
`;
export const DescrThumb = styled.div`
    display: inline-block;
    padding: 0 30px;
`;
export const InfoThumb = styled.div`
    display: flex;
    flex-direction: column;
`;
export const InfoList = styled.ul`
    display: flex;
    flex-direction: column;
`;
export const InfoItem = styled.li`
    // display: flex;
    list-style: none;
    padding-left: 0px;
`;
export const InfoLink = styled(NavLink)`
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