import styled from 'styled-components';
import { colors, fontSizes } from './tokens';

export const Container = styled.div`
  background: ${colors.secondary};
`;

export const Text = styled.h1`
  color: ${colors.primary};
  font-size: ${fontSizes.huge}px;
`;
