import React from 'react';

import { Sampler, Sequencer } from '../../src';

export const Beats = (props) => (
  <Sequencer
    resolution={4}
    bars={1}
  >
    <Sampler
      sample="../samples/kick.wav"
      steps={[0, 2]}
      detune={-1000}
    />
    {/* <Sampler
      sample="../samples/cowbell.wav"
      steps={[2]}
      detune={5000}
    /> */}
  </Sequencer>
)

export default Beats;