import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 15px;
`;
export const Header = styled.header`
    // position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 15px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  box-shadow-bottom: 1px

  > nav {
    display: flex;
  }
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: black;
  }
  &:hover {
    color: white;
    background-color: black;
  }
`;