import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from './Container';

import { colors } from '../variables';

const StyledHeader = styled.div`
  background-color: ${colors.darkGray};
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, .05);
  margin-bottom: 40px;
  padding: 80px 0;
  text-align: center;
  width: 100%;
  h3 {
    color: ${colors.white};
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 16px;
  }
  p {
    color: ${colors.white};
    margin: 0 auto;
    max-width: 480px;
    text-align: center;
    width: 90%;
  }
`;

const Header = ({ title, description }) => (
  <Container>
    <StyledHeader>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledHeader>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  description: '',
};

export default Header;