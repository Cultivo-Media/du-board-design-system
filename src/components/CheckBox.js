import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Check } from 'styled-icons/fa-solid';

import { colors } from '../variables';

/**
 * WhiteCheckbox
 *
 * Styled Component
 *
 * A checkbox that is white to match the style defined below. It extends the font awesome checkbox.
 */
const WhiteCheckbox = Check.extend`
  color: ${colors.white};
`;

/**
 * StyledCheckbox
 *
 * Styled Component
 *
 * A div that looks like a checked (or unchecked) checkbox to show an truthy and falsey state.
 */
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
  svg {
    width: 12px;
    height: 12px;
  }
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
 * @param {boolean} active - A boolean that determines whether or not the checkbox is currently
 *  checked.
 */
const MappedCheckbox = ({ active }) => (
  <StyledCheckbox active={active}>
    {active && <WhiteCheckbox />}
  </StyledCheckbox>
);

// Config propTypes
MappedCheckbox.propTypes = {
  active: PropTypes.bool,
};

// Config defaultProps
MappedCheckbox.defaultProps = {
  active: false,
};

export default MappedCheckbox;
