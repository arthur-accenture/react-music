import React from 'react';

import { Monosynth, LFO } from '../../src';

export const Melody = (props) => (
    <Monosynth
        envelope={{
            attack: 3,
            sustain: 5,
            decay: 2,
            release: 0.1,
        }}
        gain={0.3}
        glide={0.05}
        type="triangle"
        steps={[
            // F major
            [3, 4, 'g4'],
            [6, 4, 'e4'],
            // C Major
            [11, 4, 'd4'],
            [14, 4, 'c4'],
            //   // G major
            [19, 4, 'e4'],
            [22, 4, 'g4'],
            //     // A minor
            [27, 4, 'd4'],
            [30, 8, 'a3'],
        ]}
    >
        {/* <LFO type="sine" frequency={0.5} connect={c => c.detune}/> */}
    </Monosynth>
);

export default Melody;