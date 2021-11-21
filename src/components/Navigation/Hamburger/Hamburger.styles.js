import styled from "styled-components"
import {AiOutlineMenu} from "react-icons/ai"

export const MenuOpenIcon = styled(AiOutlineMenu)`
  transform: scale(1);
  display: block;
  position: absolute;
  right: 1rem;
  width: 40px;
  padding-top: 20px;
  height: 40px;
  color: #bb3355;
  cursor: pointer;

  @media (min-width: 800px) {
    display: none;
  }

  &:hover {
    color: #bb3355;
    border: 2px solid #bb3355;
  }

  &:focus {
    border: 2px solid #bb3355;
  }

  &:active {
    border: 2px solid #bb3355;
  }
`
