import React from 'react';

import { Monosynth, Sequencer } from '../../src';

export const Melody = (props) => (
    <Sequencer
    resolution={8}
    bars={16}
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
            // A minor
            [56, 4, 'a3'],
            [59, 2, 'g3'],
            [62, 2, 'a3'],

            // F major
            [64, 2, 'c4'],
            [66, 2, 'e4'],
            [70, 4, 'e4'],
            // C major
            [77, 2, 'd4'],
            [78, 4, 'c4'],
            //  G Major
            [80, 2, 'd4'],
            [82, 2, 'e4'],
            [86, 4, 'e4'],
            // A Minor
            [92, 2, 'd4'],
            [94, 4, 'c4'],

            // F major
            [96, 2, 'c4'],
            [99, 2, 'd4'],
            [102, 4, 'e4'],
            // C major
            [104, 2, 'e4'],
            [107, 2, 'd4'],
            [110, 2, 'c4'],
            // G major
            [112, 4, 'b3'],
            // A minor
        ]}
    />
    </Sequencer>
);

export default Melody;