import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.log(error)
  );

  return <h1>Hi There!</h1>
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)