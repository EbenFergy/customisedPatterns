import styled from "styled-components";

const HamburgerIconsStyle = styled.div`
  /* border: 2px solid; */

  svg {
    height: 1.2rem;
  }

  .hamburgerIcon {
    ${({ openMenu }) => (openMenu ? `display: none` : `display: block`)};
    /* border: 2px solid; */
  }

  .closeIcon {
    ${({ openMenu }) => (openMenu ? `display: block` : `display: none`)};
  }
`;
export default HamburgerIconsStyle;
