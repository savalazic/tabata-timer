import React from 'react';
import { Text } from '../../components';

const Rounds = ({ round }) => (
  <Text tag="h2" size="30px">
    Round
    {' '}
    {round}
  </Text>
);

export { Rounds };
