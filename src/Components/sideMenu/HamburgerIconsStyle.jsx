import styled from "styled-components";

const HamburgerIconsStyle = styled.div`
  position: absolute;
  right: 0;
  border: 2px solid;
  padding: 0.5rem;

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
