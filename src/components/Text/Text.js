import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  margin: 20px;

  ${({ as }) => {
    if (as.startsWith('h')) {
      return `
        letter-spacing: 5px;
      `;
    }
    return null;
  }}
`;

const Text = ({
  children, tag = 'p', size, weight,
}) => (
  <StyledText as={tag} size={size} weight={weight}>
    {children}
  </StyledText>
);

export { Text };
