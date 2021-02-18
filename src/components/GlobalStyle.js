import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width:100%;
    }
    h2{
        font-family: 'Abril Fatface', cursive;
        font-size:2rem;
        font-weight:lighter;
        color: #333;
  @media (max-width: 420px) {
    font-size:1.5rem;

  }
    }
    h3{
        font-size: 1rem;
        color: #333;
        padding:1.5rem 0rem;
    }
    p{
        font-size:0.9rem;
        line-height:200%;
        color:#696969;
    }
    a{
        text-decoration:none;
        color: #333;
    }
    img{
        display:block;
    }
    input{
        font-weight:lighter;
        font-family: 'Montserrat', sans-serif;
    }
`;

export default GlobalStyles;
