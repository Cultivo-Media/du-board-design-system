import styled from 'styled-components';
import { colors } from '../variables';

export const CardTable = styled.div`
  padding: 16px 0;
`;

export const CardTableRow = styled.div`
  display: flex;
  padding: 16px 0;
  &:not(:last-child) {
    border-bottom: solid 1px ${colors.snow};
  }
`;

export const CardTableRowSub = styled.div`
  color: ${colors.gray};
`;

export const CardTableRowHead = styled.div`
  color: ${colors.black};
  text-align: right;
`;
