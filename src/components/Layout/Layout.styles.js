import styled, {createGlobalStyle} from "styled-components"

export const Primary = styled.main`
  padding: 110px 0 0 0;
  margin: 2rem;

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
    font-family: "Fira Sans";
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

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }


  a {
    text-decoration: underline;
    text-decoration-color: #bb3355;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
    cursor: pointer;
    font-size: 1.25rem;
    color: #bb3355;
    font-weight: bolder;
  }

  a:active,
  a:hover {
    text-decoration: underline;
    text-decoration-color: #bb3355;
    text-underline-offset: 3px;
    text-decoration-thickness: 3px;
  }

  a:focus {
      outline: #bb3355 solid 3px;
      padding: 0px !important;
      border-radius: 8%;
      background-color: #bb3355 !important;
      color: white !important;
  }  


  p {
    font-family: 'Fira Sans';
    font-size: 1.25rem;
    margin-bottom: 1.45rem;
    overflow-wrap: break-word; 
  }

  h1 {
    font-size: 1.5rem;
    font-family: 'Fira Sans';    
    font-weight: bolder;
    letter-spacing: 1px;
    color: #bb3355;
    margin-top: 10px;
    margin-bottom: 1.45rem;
  }
  
  h2 {
    font-family: 'Fira Sans';
    font-size: 1.5rem;
    margin-bottom: 1.45rem;
    text-rendering: optimizeLegibility;
  }
  h3 {
    font-family: 'Fira Sans';
    font-weight: bolder;
    font-size: 1.5rem;
    color: inherit;
  }
  h4 {
    font-family: 'Fira Sans';
    font-size: 1.5rem;
    font-weight: bolder;
  }
  h5 {
    font-family: 'Fira Sans';
    font-size: 1.5rem;
    font-weight: bolder;
    margin-bottom: 1.45rem;
  }
  h6 {
    font-family: 'Fira Sans';
    font-size: 1.5rem;
    font-weight: bolder;
    margin-bottom: 1.45rem;
  }
 
`
