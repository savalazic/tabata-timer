import React, { useState, useEffect } from 'react';
import { Container, Center } from '../components';

import { Controls } from './Controls';
import { Rounds } from './Rounds';
import { Timer } from './Timer';

const App = () => {
  const initialTabataState = {
    rounds: 4,
    rest: 6,
    work: 12,
    isStarted: false,
    isFinished: false,
  };

  const [tabata, setTabata] = useState(initialTabataState);

  const startTabata = () => setTabata({
    ...tabata,
    isStarted: true,
  });
  const stopTabata = () => setTabata(initialTabataState);

  useEffect(() => {
    const {
      work, rounds, rest, isStarted, isFinished,
    } = tabata;

    let timer;
    if (isStarted && !isFinished) {
      if (work > 0) {
        timer = setInterval(() => {
          setTabata({
            ...tabata,
            work: work - 1,
          });
        }, 1000);
      }

      if (work === 0) {
        timer = setInterval(() => {
          setTabata({
            ...tabata,
            rest: rest - 1,
          });
        }, 1000);
      }

      if (rest === 0) {
        setTabata({
          ...tabata,
          rounds: rounds - 1,
          work: initialTabataState.work,
          rest: initialTabataState.rest,
        });
      }

      if (rounds === 0 && rest === 0 && work === 0) {
        setTabata(initialTabataState);
      }
    }

    return () => clearTimeout(timer);
  });

  return (
    <Container>
      <Rounds round={tabata.rounds} />
      <Center>
        <Timer work={tabata.work} rest={tabata.rest} />
      </Center>
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
