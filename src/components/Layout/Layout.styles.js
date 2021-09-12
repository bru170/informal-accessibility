import styled, {createGlobalStyle} from "styled-components"

export const Primary = styled.main`
  padding: 110px 0 0 0;
  margin: 1rem;

  @media (max-width: 800px) {
    padding: 20px 0 0 0;
  }
`

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: "Fira Sans";
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: "Helvetica";
    margin: 0;
    background-color: #f0f0f0;
    scroll-behavior: smooth;

  }

  .whiteText {
    color: #fff;
  }

  h2,
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  a:active,
  a:hover {
    text-decoration: underline;
    text-decoration-color: #bb3355;
    text-underline-offset: 3px;
    text-decoration-thickness: 3px;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }


  a {
    text-decoration: underline;
    cursor: pointer;
    font-size: 1.2rem;
    color: #bb3355;
    font-weight: bolder;
  }

  p {
    font-family: 'Helvetica Neue';
    font-size: 1.2rem;
    margin-bottom: 1.45rem;
  }

  h1 {
    font-size: 2rem;
    font-family: 'Fira Sans';    
    font-weight: bolder;
    letter-spacing: 1px;
    color: #bb3355;
    margin-top: 10px;
    margin-bottom: 1.45rem;
  }
  
  h2 {
    font-family: 'Fira Sans';
    font-weight: bolder;
    font-size: 2rem;
    margin-bottom: 1.45rem;
    text-rendering: optimizeLegibility;
  }
  h3 {
    font-family: 'Fira Sans';
    font-weight: bolder;
    font-size: 2rem;
    color: inherit;
  }
  h4 {
    font-family: 'Fira Sans';
    font-size: 2rem;
    font-weight: bolder;
  }
  h5 {
    font-family: 'Fira Sans';
    font-size: 2rem;
    font-weight: bolder;
    margin-bottom: 1.45rem;
  }
  h6 {
    font-family: 'Fira Sans';
    font-size: 2rem;
    font-weight: bolder;
    margin-bottom: 1.45rem;
  }
 
`
