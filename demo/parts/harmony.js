import React from 'react';

import { Synth, Sequencer } from '../../src';

export const Harmony = (props) => (
    <div>
        <Sequencer
            resolution={1}
            bars={16}
        >
            <Synth
                gain={0.1}
                type="triangle"
                steps={[
                    // F major
                    [0, 1, ['a4', 'c4']],
                    // C Major
                    [1, 1, ['e4', 'g4']],
                    //   // G major
                    [2, 1, ['b4', 'd4']],
                    //     // A minor
                    [3, 1, ['e4', 'a4']],

                    // F major
                    [4, 1, ['a4', 'c4']],
                    // C Major
                    [5, 1, ['e4', 'g4']],
                    //   // G major
                    [6, 1, ['b4', 'd4']],
                    //     // A minor
                    [7, 1, ['e4', 'a4']],

                    // F major
                    [8, 1, ['a4', 'c4']],
                    // C Major
                    [9, 1, ['e4', 'g4']],
                    // F major
                    [10, 1, ['a4', 'c4']],
                    // C Major
                    [11, 1, ['e4', 'g4']],

                    // F major
                    [12, 1, ['a4', 'c4']],
                    // C Major
                    [13, 1, ['e4', 'g4']],
                    // G major
                    [14, 1, ['b4', 'd4']],
                ]}
            />
        </Sequencer>
    </div>
);

export default Harmony;