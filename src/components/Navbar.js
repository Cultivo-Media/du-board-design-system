import styled from 'styled-components';
import { colors } from '../variables';

/**
 * Navbar
 *
 * Styled Component
 *
 * A component that wraps styles that are used within the navbar to display the header, images, and
 *  search bar correctly.
 */
const Navbar = styled.div`
  padding: 40px 0;
  h4 {
    color: ${({ theme }) => theme.black || colors.black};
    font-size: 20px;
    font-weight: bold;
  }
  img {
    width: 40px;
  }
  input {
    background-color: ${({ theme }) => theme.snow || colors.snow};
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.black || colors.black};
    font-size: 16px;
    padding: 8px;
    width: calc(100% - 16px);
    &:focus {
      outline: none;
    }
  }
  a {
    color: ${({ theme }) => theme.gray || colors.gray};
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.black || colors.black};
    }
  }
`;

export default Navbar;
