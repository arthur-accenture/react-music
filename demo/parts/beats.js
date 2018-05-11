import React from 'react';

import { Sampler, Sequencer } from '../../src';

export const Beats = (props) => (
<Sequencer
              resolution={8}
              bars={2}
            >
              <Sampler
                sample="../samples/kick.wav"
                steps={[0, 2, 8, 10]}
                detune={600}
              />
              <Sampler
                sample="../samples/snare.wav"
                steps={[4, 12]}
                detune={440}
              />
            </Sequencer>
)

export default Beats;