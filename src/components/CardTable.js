import styled from 'styled-components';
import { colors } from '../variables';

/**
 * CardTable
 *
 * Styled Component
 *
 * A wrapper component for a table that adds additional padding for its children.
 */
export const CardTable = styled.div`
  padding: 16px 0;
`;

/**
 * CardTableRow
 *
 * Styled Component
 *
 * An individual row inside of the card table that contains children elements to be rendered.
 */
export const CardTableRow = styled.div`
  display: flex;
  padding: 16px 0;
  &:not(:last-child) {
    border-bottom: solid 1px ${({ theme }) => theme.snow || colors.snow};
  }
`;

/**
 * CardTableRowSub
 *
 * Styled Component
 *
 * A subtitle for the card table row that is displayed with a lighter font color.
 */
export const CardTableRowSub = styled.div`
  color: ${({ theme }) => theme.gray || colors.gray};
`;

/**
 * CardTableRowHeader
 *
 * Styled Component
 *
 * A main title for the card table row that is displayed with a darker font color and has its text
 *  aligned to the right to match the indentation.
 */
export const CardTableRowHead = styled.div`
  color: ${({ theme }) => theme.black || colors.black};
  text-align: right;
`;
