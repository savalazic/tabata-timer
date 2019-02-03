import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  margin: 20px;
  user-select: none;

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
  children, tag = 'p', size, weight, style, key,
}) => (
  <StyledText as={tag} size={size} weight={weight} style={style} key={key}>
    {children}
  </StyledText>
);

export { Text };
