import React from 'react';

import { Synth } from '../../src';

export const Melody = (props) => (
    <Synth
        gain={0.3}
        type="triangle"
        steps={[
            // F major
            [3, 4, ['g4']],
            [6, 2, ['e4']],
            // C Major
            [11, 4, ['d4']],
            [14, 2, ['c4']],
            //   // G major
            [19, 4, ['e4']],
            [22, 2, ['g4']],
            //     // A minor
            [27, 4, ['d4']],
            [30, 2, ['a3']],
        ]}
    />
);

export default Melody;