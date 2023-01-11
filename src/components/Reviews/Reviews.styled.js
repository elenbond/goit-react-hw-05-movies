import styled from 'styled-components';

export const ReviewItem = styled.li`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid transparent;
    :hover {
        border: 1px solid rgba(0, 0, 0, .2);
        box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, .2);
    }
`;
export const ReviewTitle = styled.p`
    font-weight: 700;
`;