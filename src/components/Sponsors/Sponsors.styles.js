import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  background: #bb3355;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const Image = styled.img`
  width: auto;
  height: 80px;

  @media (max-width: 1000px) {
    width: auto;
    height: auto;
  }
`

export const ImageITU = styled.img`
  width: auto;
  height: 40px;

  @media (max-width: 1000px) {
    width: auto;
    height: auto;
  }
`
