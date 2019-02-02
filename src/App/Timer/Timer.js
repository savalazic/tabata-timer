import React from 'react';

import { Text } from '../../components';

const Timer = React.memo(
  ({ work, rest }) => (
    <React.Fragment>
      <Text tag="h1" weight="bold" size="160px">
        {work || rest}
      </Text>
      <Text tag="h2" size="30px">
        {work ? 'WORK!' : 'Rest'}
      </Text>
    </React.Fragment>
  ),
  (_, props) => props.work === 0 && props.rest === 0,
);

export { Timer };
