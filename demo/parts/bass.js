import React from 'react';

import { Synth } from '../../src';

export const Bass = (props) => (
    <Synth
    envelope={{
      attack: 0.2,
      decay: 0.05,
      sustain: 0.05,
      release: 0.05,
  }}
    gain={0.9}
    type="sine"
    steps={[
      // F major
      [0, 8, ['f2']],
      // C Major
      [8, 8, ['c2']],
      //   // G major
        [16, 8, ['g2']],
      //     // A minor
          [24, 8, ['a2']],
          ]}
  />
);

export default Bass;