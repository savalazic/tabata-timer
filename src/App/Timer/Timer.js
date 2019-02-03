import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import transition from 'styled-transition-group';

import { Text } from '../../components';

const Fade = transition.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);

  &:enter {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.7);
  }
  
  &:enter-active {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  &:exit {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  
  &:exit-active {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.7);
    transition: opacity 300ms, transform 300ms;
  }
`;

const Timer = React.memo(
  ({ work, rest }) => (
    <React.Fragment>
      <TransitionGroup
        style={{
          height: 200,
          width: 200,
          position: 'relative',
        }}
      >
        <Fade key={work} timeout={300}>
          <Text tag="h1" weight="bold" size="180px">
            {work || rest}
          </Text>
        </Fade>
      </TransitionGroup>
      <Text tag="h2" size="30px">
        {work ? 'WORK!' : 'Rest'}
      </Text>
    </React.Fragment>
  ),
  (_, props) => props.work === 0 && props.rest === 0,
);

export { Timer };
