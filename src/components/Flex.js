import styled from 'styled-components';

/**
 * Grow
 *
 * Styled Component
 *
 * A flex grow utility. Useful if you need to push items to a certain side of a flex box for
 *  alignment.
 */
export const Grow = styled.div`
  flex-grow: 1;
`;

/**
 * Flex
 *
 * Styled Component
 *
 * A static flexbox that allows content to be aligned to the center with a "center" prop.
 */
export const Flex = styled.div`
  display: flex;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
`;
