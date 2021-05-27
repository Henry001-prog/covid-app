import styled from 'styled-components';


export const Div = styled.div`
    
  justify-content: center;
  align-items: flex-start;
  text-align: center;
`;

export const DivLoading = styled.div`
    height: 100vh; 
    width: 100%; 
    display: flex; 
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: column;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
`;

export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
    padding-top: 20px;
    padding-left: 20px;
`;