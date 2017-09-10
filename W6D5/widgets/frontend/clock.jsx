import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {date: new Date()};
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick,1000);
  }

  componentWillUnmount() {
    this.intervalId.clearInterval();
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    const hours = this.state.date.getHours();
    const minutes = this.state.date.getMinutes();
    const seconds = this.state.date.getSeconds();
    return (
      <div>
        <h1>Widget Clock Thing</h1>
        <div className="clock">
          <h2>Current Time:</h2>
          <h2>{hours}:{minutes}:{seconds}</h2>
        </div>
      </div>
    );
  }
}

export default Clock;
