import styled from 'styled-components';

export const CardDesktop = styled.div`
    height: 390px;
    width: 370px;
    border-radius: 10px;
    overflow: hidden;
    margin: 5px;
    box-shadow: 3px 3px 5px 4px rgba(0, 0, 0, 0.5);
    background-color: green;

    :hover {
        border: 1px solid #d0d0d0;
    }
`;

export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 20px;
    padding-left: 20px;
`;

