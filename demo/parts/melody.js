import React from 'react';

import { Monosynth, Sequencer } from '../../src';

export const Melody = (props) => (
    <Sequencer
    resolution={8}
    bars={8}
  >
    <Monosynth
        envelope={{
            attack: 0.01,
            decay: 0.1,
            sustain: 0.1,
            release: 0.1,
        }}
        gain={0.6}
        glide={0.01}
        type="sine"
        steps={[
            // 8 steps a bar
            // F major
            [0, 2, 'a4'],
            [3, 4, 'g4'],
            [6, 2, 'e4'],
            // C Major
            [8, 4, 'g4'],
            [11, 4, 'c4'],
            // G major
            [20, 4, 'e4'],
            [24, 4, 'a3'],
            // A minor           
            [27, 4, 'g3'],
            [30, 2, 'a3'],
            // F major
            [32, 2, 'c4'],
            [36, 2, 'd4'],
            // C major
            [40, 4, 'e4'],
            [44, 4, 'g3'],
            // G Major
            [48, 4, 'e4'],
            [52, 4, 'd4'],
            // A major
            [56, 4, 'a3'],
        ]}
    />
    </Sequencer>
);

export default Melody;