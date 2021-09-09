import styled from "styled-components"

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.isFirst ? "row-reverse" : "row")};
  font-size: 1rem;
`
