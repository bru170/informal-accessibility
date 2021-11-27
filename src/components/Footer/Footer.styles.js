import styled from "styled-components"

export const Wrapper = styled.div`
  background: #bb3355;
  padding-bottom: 200px;
`

export const Container = styled.footer`
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 50px;
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

  a {
    color: white !important;
    text-decoration: underline;
  }

  a:hover {
    text-decoration: underline;
  }

  li {
    padding-right: 20px;
  }
`
