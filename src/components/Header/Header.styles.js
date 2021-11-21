import styled from "styled-components"

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

export const LogoContainer = styled.div`
  text-decoration: none !important;
  text-decoration-color: transparent !important;

  a {
    text-decoration: none !important;
    text-decoration-color: transparent !important;
  }

  a:active {
    background-color: transparent !important;
    text-decoration: none !important;
  }

  a:focus {
    background-color: transparent !important;
    text-decoration: none !important;
  }

  a:hover {
    background-color: transparent !important;
    text-decoration: none !important;
  }
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
`
