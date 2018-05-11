import React from 'react';

import { Synth, Sequencer } from '../../src';

export const Bass = (props) => (
  <Sequencer
    resolution={1}
    bars={16}
  >
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
        [0, 1, ['f2']],
        // C Major
        [1, 1, ['c2']],
        //   // G major
        [2, 1, ['g2']],
        //     // A minor
        [3, 1, ['a2']],

        // F major
        [4, 1, ['f2']],
        // C Major
        [5, 1, ['c2']],
        //   // G major
        [6, 1, ['g2']],
        //     // A minor
        [7, 1, ['a2']],

        // F major
        [8, 1, ['f2']],
        // C Major
        [9, 1, ['c2']],
        // F major
        [10, 1, ['f2']],
        // C Major
        [11, 1, ['c2']],

        // F major
        [12, 1, ['f2']],
        // C Major
        [13, 1, ['c2']],
        // G major
        [14, 1, ['g2']],

      ]}
    />
  </Sequencer>
);

export default Bass;