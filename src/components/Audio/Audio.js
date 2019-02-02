import React from 'react';

const Audio = React.forwardRef(({ src, type }, ref) => (
  <audio ref={ref}>
    <source src={src} type={type} />
    Your browser does not support the audio element.
  </audio>
));

export { Audio };
