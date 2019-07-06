import styled, { css } from 'styled-components';
import headerBackGround
  from '../imgs/electrical-electrician-electricity-1435183.jpg';

export const EESections = styled.section`
  padding-top: 8rem;
  padding-bottom: 8rem;
  
  ${props => props.header && css`
    min-height: 30rem;
    position: relative;
    display: table;
    width: 100%;
    height: auto;
    background: linear-gradient(90deg, hsla(0,0%,100%,.1), hsla(0,0%,100%,.1)), url(${headerBackGround});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    
    @media (min-width: 992px) {
      height: 100vh;
    }
    
    h1 {
      font-size: 4rem;
      margin: 0;
      padding: 0;
      
      @media (min-width: 992px) {
        font-size: 5.5rem;
      }
    }    
`}
  
  ${props => props.content && css`
    h2 {
      font-size: 3rem;
    }
    h3 {
      font-size: 1.5rem;
      text-transform: uppercase;
    }
`}
`;
