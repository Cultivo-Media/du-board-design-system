import styled from 'styled-components';
import { colors } from '../variables';

/**
 * SectionHeader
 *
 * Styled Component
 *
 * Header text used for the top of a section for the sidebar select tool.
 */
export const SectionHeader = styled.h5`
  color: ${colors.gray};
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

/**
 * DefaultLabel
 *
 * Styled Component
 *
 * A label that is used next to the checkboxes inside of modals.
 */
export const DefaultLabel = styled.span`
  color: ${colors.darkGray} !important;
  font-size: 16px !important;
  margin-left: 8px;
`;
