import styled from "styled-components"

//todo make sure nav bar sticks to top, can see content through

export const Wrapper = styled.nav`
  height: 40px;
  width: 100%;
  /* z-index: 10000;
  position: sticky;
  top: 0.5px; */
  padding-top: 20px;
  background-color: #f0f0f0;
`

export const Image = styled.img`
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

  img {
    width: 200px;
    margin: 0;
    padding: 12px 0 0 0;
  }

  @media (max-width: 1220px) {
    padding: 0 20px;
  }

  a {
    text-decoration: none !important;
    font-family: "Fira Sans";
  }
`
