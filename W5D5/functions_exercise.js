class Clock {
  constructor() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    setInterval(this._tick.bind(this),1000);
    this.printTime();
    console.log(this);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    this.seconds += 1;
    if (this.seconds > 59) {
      this.seconds = 0;
      this.minutes += 1;

      if (this.minutes > 59) {
        this.minutes = 0;
        this.hours += 1;
      }
        if (this.hours > 23) {
          this.hours = 0;
        }
      }
      // 1. Increment the time by one second.
      // 2. Call printTime.
      // console.log(this.printTime());
}
}


const clock = new Clock();
