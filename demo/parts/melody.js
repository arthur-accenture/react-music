import React from 'react';

import { Monosynth, LFO } from '../../src';

export const Melody = (props) => (
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
            // F major
            [3, 4, 'g4'],
            [6, 2, 'e4'],
            // C Major
            [11, 4, 'd4'],
            [14, 2, 'c4'],
            //   // G major
            [19, 4, 'e4'],
            [22, 2, 'g4'],
            //     // A minor
            [27, 4, 'd4'],
            [30, 2, 'a3'],
        ]}
    >

    </Monosynth>
);

export default Melody;