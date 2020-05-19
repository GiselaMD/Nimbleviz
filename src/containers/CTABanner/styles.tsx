import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background-color: white;
  height: 400px;
  width: 600px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  opacity: 0.8;
`;

export const Title = styled.p`
  font-size: 30px;
`;

export const SubTitle = styled.p`
  font-size: 25px;
  margin: 0;
`;

export const Email = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 25px;
  color: #0e4494;
`;

export const Logo = styled.img`
  width: 200px;
`;

export const Desc = styled.div`
  margin: 20px;
  text-align: center;
`;
