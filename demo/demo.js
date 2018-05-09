import React, { Component } from 'react';

import {
  Analyser,
  Song,
  Sequencer,
  Sampler,
  Synth,
} from '../src';

import Polysynth from './polysynth';
import Melody from './melody';
import Bass from './bass';
import Harmony from './harmony';
import Visualization from './visualization';

import './index.css';

export default class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: true,
      lightMode: true
    };

    this.handleAudioProcess = this.handleAudioProcess.bind(this);
    this.handlePlayToggle = this.handlePlayToggle.bind(this);
    this.toggleLightMode = this.toggleLightMode.bind(this);
  }
  handleAudioProcess(analyser) {
    this.visualization.audioProcess(analyser);
  }
  handlePlayToggle() {
    this.setState({
      playing: !this.state.playing,
    });
  }
  toggleLightMode() {
    this.setState({ lightMode: !this.state.lightMode });
  }

  render() {
    return (
      <div style={this.state.lightMode ? {
        paddingTop: '30px'
      } : {
          backgroundColor: '#000',
          width: '100%',
          height: '100%',
          paddingTop: '30px'
        }}>
        <Song
          playing={this.state.playing}
          tempo={100}
        >
          <Analyser onAudioProcess={this.handleAudioProcess}>
            <Sequencer
              resolution={16}
              bars={2}
            >
              <Sampler
                sample="samples/kick.wav"
                steps={[0, 2, 8, 10, 16, 18, 24, 26]}
              />
              <Sampler
                sample="samples/snare.wav"
                steps={[4, 12, 20, 28]}
              />
            </Sequencer>
            <Sequencer
              resolution={16}
              bars={2}
            >
            {/* Bass */}
           <Bass/>
              {/* Harmony */}
              <Harmony/>
              {/* Melody */}
              <Melody/>
            </Sequencer>

          </Analyser>
        </Song>

        <div style={{ textAlign: 'center' }}>
          <p style={this.state.lightMode ? { color: 'black' } : { color: 'white' }}>Light Mode</p>
          <label className="switch">
            <input type="checkbox" onChange={this.toggleLightMode} checked={this.state.lightMode} />
            <div className="slider round"></div>
          </label>
        </div>

        <Visualization ref={(c) => { this.visualization = c; }} />

        <button
          className="react-music-button"
          type="button"
          onClick={this.handlePlayToggle}
        >
          {this.state.playing ? 'Stop' : 'Play'}
        </button>
      </div>
    );
  }
}
