import styled from "styled-components"

export const AboutWrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: 40px;
  text-align: left;
`

export const AboutImage = styled.div`
  background-image: ${({image}) => `url(${image})`};
  background-size: cover;
  background-position: center;
  min-height: 300px;
`
