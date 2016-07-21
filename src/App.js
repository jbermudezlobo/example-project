import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import ExampleSC from './containers/ExampleSC';

const config = {
  appContainer: 'appContainer',
  appData: 'appData'
};

const appData = document.getElementById(config.appData).innerHTML;

const render = (data) => {
  ReactDOM.render(<ExampleSC data={data} />, document.getElementById(config.appContainer));
};

$(document).ready(
  () => {
    try {
      const parsedData = JSON.parse(appData);
      render(parsedData);
    } catch (error) {
      console.error('ERROR Parsing JSON:', error);
    }
  }
);
