import { useState, useEffect } from 'react';

const defaultTabata = {
  rounds: 8,
  work: 20,
  rest: 10,
  isStarted: false,
  isFinished: false,
};

const useTabataHook = (initialTabataState = defaultTabata) => {
  const [initialTabata, setInitialTabata] = useState(initialTabataState);
  const [tabata, setTabata] = useState(initialTabata);

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

      if (rest === 0 && work === 0) {
        setTabata({
          ...tabata,
          rounds: rounds - 1,
          work: initialTabata.work,
          rest: initialTabata.rest,
        });
      }

      if (rounds === 1 && rest === 0 && work === 0) {
        setTabata({ ...initialTabata, isFinished: true });
      }
    } else {
      clearTimeout(timer);
    }

    if (isFinished) {
      setInitialTabata(initialTabataState);
      setTabata(initialTabataState);
    }

    return () => clearTimeout(timer);
  });

  const handleTabataChange = ({ value, name }) => {
    setInitialTabata({
      ...initialTabata,
      [name]: Number(value),
    });
    setTabata({
      ...tabata,
      [name]: Number(value),
    });
  };

  return {
    tabata,
    startTabata,
    stopTabata,
    handleTabataChange,
  };
};

export { useTabataHook };
