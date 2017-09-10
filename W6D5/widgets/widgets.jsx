import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Weather from './frontend/weather';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Weather />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  ReactDOM.render(<Root />, main);
});
