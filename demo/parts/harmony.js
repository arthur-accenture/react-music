import React from 'react';

import { Synth, Sequencer } from '../../src';

export const Harmony = (props) => (
    <Sequencer
        resolution={4}
        bars={4}
    >
        <Synth
            gain={0.2}
            type="triangle"
            steps={[
                // F major
                [0, 4, ['a4', 'c4']],
                // C Major
                [4, 4, ['e4', 'g4']],
                //   // G major
                [8, 4, ['b4', 'd4']],
                //     // A minor
                [12, 4, ['e4', 'a4']],
            ]}
        />
    </Sequencer>
);

export default Harmony;