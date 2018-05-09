import React from 'react';

import { Synth } from '../../src';

export const Harmony = (props) => (
    <Synth
                gain={0.2}
                type="triangle"
                steps={[
                  // F major
                  [0, 8, ['a4', 'c4']],
                  // C Major
                  [8, 8, ['e4', 'g4']],
                  //   // G major
                      [16, 8, ['b4', 'd4']],
                  //     // A minor
                        [24, 8, ['e4', 'a4']],
                      ]}
              />
);

export default Harmony;