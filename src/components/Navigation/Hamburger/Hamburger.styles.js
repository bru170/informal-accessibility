import styled from "styled-components"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

export const MenuOpenIcon = styled(AiOutlineMenu)`
  transform: scale(1);
  display: block;
  position: absolute;
  right: 1rem;
  width: 40px;
  padding-top: 20px;
  height: 40px;
  cursor: pointer;

  @media (min-width: 800px) {
    display: none;
  }

  &:hover {
    color: #bb3355;
  }
`

// export const MenuCloseIcon = styled(AiOutlineClose)`
//   transform: scale(0.75);
//   position: fixed;
//   display: block;
//   z-index: 10001;
//   right: 10px;
//   top: 1px;
//   width: 40px;
//   height: 40px;
//   cursor: pointer;

//   @media (min-width: 800px) {
//     display: none;
//   }

//   &:hover {
//     color: #bb3355;
//   }
// `
