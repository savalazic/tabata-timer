import React from 'react';
import { Container, Center } from '../components';

import { Controls } from './Controls';
import { Rounds } from './Rounds';
import { Timer } from './Timer';
import { Setup } from './Setup';

import { useTabataHook } from './useTabataHook';

const App = () => {
  const initialTabataState = {
    rounds: 8,
    work: 20,
    rest: 10,
    isStarted: false,
    isFinished: false,
  };

  const {
    tabata, startTabata, stopTabata, handleTabataChange,
  } = useTabataHook(initialTabataState);

  return (
    <Container>
      {tabata.isStarted ? (
        <React.Fragment>
          <Rounds round={tabata.rounds} />
          <Center>
            <Timer work={tabata.work} rest={tabata.rest} />
          </Center>
        </React.Fragment>
      ) : (
        <Setup onChange={({ target }) => handleTabataChange(target)} />
      )}
      <Center>
        <Controls
          onToggle={() => {
            if (!tabata.isStarted) {
              startTabata();
            } else {
              stopTabata();
            }
          }}
          isStarted={tabata.isStarted}
        />
      </Center>
    </Container>
  );
};

export { App };
