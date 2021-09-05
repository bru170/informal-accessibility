import styled from "styled-components"

//todo make sure nav bar sticks to top, can see content through

export const Wrapper = styled.header`
  background: #f0f0f0;
  height: 40px;
  position: fixed;
  width: 100%;
  z-index: 10000;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1180px;
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
`
