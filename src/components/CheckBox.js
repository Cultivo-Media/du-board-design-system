import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../variables';

export const StyledCheckbox = styled.div`
  align-items: center;
  background-color: ${props => props.active ? colors.blue : colors.gray};
  border-radius: 12px;
  color: ${colors.white};
  display: flex;
  font-size: 12px;
  height: 24px;
  justify-content: center;
  width: 24px;
`;

/**
 * MappedCheckbox
 *
 * component
 *
 * Quickly allows a property to be mapped to a circular checkbox with the content filled or not.
 *  This allows us to conditionally render a check inside of the circle if it is active vs if it is
 *  not active.
 *
 * @param {boolean} isActive - A boolean that determines whether or not the checkbox is currently
 *  checked.
 */
const MappedCheckbox = ({ isActive }) => (
  <StyledCheckbox active={isActive}>
    {isActive && <i className="fa fa-check" />}
  </StyledCheckbox>
);

MappedCheckbox.propTypes = {
  isActive: PropTypes.bool,
};

MappedCheckbox.defaultProps = {
  isActive: false,
};

export default MappedCheckbox;
