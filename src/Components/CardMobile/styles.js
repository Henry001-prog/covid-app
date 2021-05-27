import styled from 'styled-components';

export const CardMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 410px;
    width: 280px;
    border-radius: 5px;
    overflow: hidden;
    padding-right: 13px;
    margin-top: 5px;
    background-color: green;
    box-shadow: 3px 3px 5px 4px rgba(0, 0, 0, 0.5);

    :hover {
        border: 1px solid #d0d0d0;
    }
`;