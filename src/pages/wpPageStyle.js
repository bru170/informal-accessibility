import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: left;
`

export const Content = styled.div`
  padding-bottom: 100px;
  .wp-block-columns {
    padding-top: 70px;
    padding-bottom: 100px;
    width: 100%;

    @media (max-width: 800px) {
      width: 100%;
      margin-top: 0;
      padding-top: 20px;
      padding-bottom: 20px;
      margin-bottom: 0;
    }
  }

  .wp-block-image {
    padding-top: 70px;
    padding-bottom: 100px;
    float: left;
    width: 25%;

    @media (max-width: 800px) {
      width: 100%;
      margin-top: 0;
      padding-top: 0;
      padding-bottom: 20px;
      margin-bottom: 0;
    }
  }

  img {
    @media (max-width: 800px) {
      margin-top: 0;
      padding-top: 10px;
      padding-bottom: 30px;
      margin-bottom: 0;
    }
  }

  p {
    @media (max-width: 800px) {
      margin-top: 0;
      padding-top: 10px;
      padding-bottom: 10px;
      margin-bottom: 0;
    }
  }

  a {
    padding-bottom: 0px;
  }

  h2 {
    padding-top: 40px;
    padding-bottom: 40px;

    @media (max-width: 800px) {
      margin-top: 0;
      padding-top: 20px;
      padding-bottom: 10px;
      margin-bottom: 0;
    }
  }

  h3 {
    padding-bottom: 0px;
    margin-bottom: 0px;
  }

  h4 {
    padding-bottom: 0px;
    margin-bottom: 0px;

    @media (max-width: 800px) {
      margin-top: 0;
      padding-top: 10px;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
`
