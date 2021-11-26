import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1367px) {
    display: inline;
    align-items: unset;
    justify-content: unset;
  }
`

export const Image = styled.img`
  width: auto;
  height: 65px;

  @media (max-width: 1367px) {
    width: 400px;
    height: unset;
    display: inline;
  }

  @media (max-width: 800px) {
    width: 300px;
    height: unset;
    padding: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 600px) {
    width: 200px;
    height: unset;
    display: inline;
  }
`

export const ImageITU = styled.img`
  width: auto;
  height: 40px;

  @media (max-width: 1367px) {
    width: 400px;
    height: unset;
    display: inline;
  }

  @media (max-width: 800px) {
    width: 250px;
    height: unset;
    padding: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 600px) {
    width: 200px;
    height: unset;
    display: inline;
  }
`
