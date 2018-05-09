import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(
  <AppContainer>
    <Demo />
  </AppContainer>,
  document.getElementById('root')
);

if(module.hot){
  // This code only runs if hot loading module is present
  // Ideally we should probably exclude this code from production
  module.hot.accept('./demo', () => {
    const NextDemo = require('./demo').default;
    ReactDOM.render(
      <AppContainer>
        <NextDemo />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

