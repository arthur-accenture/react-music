import React from 'react';

import { Synth } from '../../src';

export const Bass = (props) => (
    <Synth
    gain={0.7}
    type="sine"
    steps={[
      // F major
      [0, 8, ['f2']],
      // C Major
      [8, 8, ['c2']],
      //   // G major
        [16, 8, ['g2']],
      //     // A minor
          [24, 8, ['c2']],
          ]}
  />
);

export default Bass;