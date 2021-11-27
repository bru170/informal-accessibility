import styled from "styled-components"

export const Wrapper = styled.footer`
  background: #bb3355;
  padding-bottom: 200px;
`

export const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding-top: 50px;

  a {
    color: white !important;
    text-decoration: underline;
  }

  a:active,
  a:hover {
    text-decoration: underline;
    text-decoration-color: white;
    text-underline-offset: 6px;
    text-decoration-thickness: 3px;
  }

  a:focus {
    outline: white solid 3px !important;
    padding: 0px !important;
    border-radius: 8%;
    color: black;
  }

  @media (max-width: 1068px) {
    margin: 2em;
  }

  @media (max-width: 768px) {
    margin: 2em;
  }

  @media (max-width: 568px) {
    margin: 2em;
  }
`

export const StyledH3 = styled.h3`
  color: white;
`

export const Para = styled.p`
  color: white;
`

export const SiteMap = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  list-style-type: none !important;
  margin-left: 0px !important;
  padding-left: 0px !important;

  .categories-active {
    text-decoration: underline;
    background-color: #bb3355;
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    text-decoration-color: white;
    text-underline-offset: 3px;
    text-decoration-thickness: 3px;
  }

  li {
    padding-right: 20px;
  }
`
