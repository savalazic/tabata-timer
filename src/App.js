import React, { useState, useEffect } from 'react';
import {
  Button, Container, Center, Text,
} from './components';

const App = () => {
  const [time, setTime] = useState(0);
  const [btnType, setBtnType] = useState('success');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Container>
      <Text tag="h2" size="30px">
        Round 1
      </Text>
      <Center>
        <Text tag="h1" weight="bold" size="100px">
          {time}
        </Text>
        <Text tag="h2" size="30px">
          WORK!
        </Text>
      </Center>
      <Center>
        <Button type={btnType} onClick={() => setBtnType('danger')}>
          {btnType === 'success' ? 'Start' : 'Stop'}
        </Button>
        <Text size="14px">Press space to start/stop timer</Text>
      </Center>
    </Container>
  );
};

export default App;
