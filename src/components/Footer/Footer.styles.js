import styled from "styled-components"

export const Container = styled.footer`
  padding: 80px 60px;
  background: #bb3355;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 100px;
`

export const Column = styled.div`
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`

export const Row = styled.div`
  display: grid;
  max-width: 1000px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`

export const Title = styled.h2`
  color: #fff;
  margin-bottom: 10px;
`

export const Text = styled.p`
  color: white;
`

export const Link = styled.a`
  color: white;

  &:active,
  &:hover {
    color: white;
    outline-width: 0;
    text-decoration: underline;
  }
`
