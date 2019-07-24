import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #222;
`;

export const Content = styled.div``;

export const WindowTitle = styled.p`
  margin-left: 0.5rem;
  
  color: #fff;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;

  background-color: transparent;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${props => props.close ? '#e74c3c' : '#333'};
  }
`