import React from 'react';

import { Text } from '../../components';

const Timer = ({ work, rest }) => (
  <React.Fragment>
    <Text tag="h1" weight="bold" size="100px">
      {work || rest}
    </Text>
    <Text tag="h2" size="30px">
      {work ? 'WORK!' : 'Rest'}
    </Text>
  </React.Fragment>
);

export { Timer };
