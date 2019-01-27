import React, { useState, useEffect } from 'react';
import { Container, Center } from '../components';

import { Controls } from './Controls';
import { Rounds } from './Rounds';
import { Timer } from './Timer';
import { Setup } from './Setup';

const App = () => {
  const initialTabataState = {
    rounds: 8,
    work: 20,
    rest: 10,
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

    console.log('rerere');

    let timer;
    if (isStarted && !isFinished) {
      if (work > 0) {
        timer = setInterval(() => {
          setTabata({
            ...tabata,
            work: work - 1,
          });
        }, 200);
      }

      if (work === 0 && !isFinished) {
        timer = setInterval(() => {
          setTabata({
            ...tabata,
            rest: rest - 1,
          });
        }, 200);
      }

      if (rest === 0 && work === 0 && !isFinished) {
        console.log('problem here');
        setTabata({
          ...tabata,
          rounds: rounds - 1,
          work: initialTabataState.work,
          rest: initialTabataState.rest,
        });
      }

      if (rounds === 0 && rest === 0 && work === 0) {
        setTabata({ ...initialTabataState, isFinished: true });
      }
    } else {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  });

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
        <Setup
          onChange={(e) => {
            const { value, name } = e.target;
            setTabata({
              ...tabata,
              [name]: Number(value),
            });
          }}
        />
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
