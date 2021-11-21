import styled from "styled-components"

//todo make sure nav bar sticks to top, can see content through

export const Wrapper = styled.nav`
  height: 40px;
  width: 100%;
  padding-top: 20px;
  background-color: #f0f0f0;
`

export const Image = styled.img`
  margin-top: 60px;
  width: 320px;
  height: auto;
`

export const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 5px;

  @media (max-width: 1220px) {
    padding: 0 20px;
  }

  a {
    text-decoration: none !important;
    font-family: "Fira Sans";
  }
`
