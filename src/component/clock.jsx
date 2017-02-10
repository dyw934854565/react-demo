import React from "react"

function FormattedDate(props) {
  return <h2>It's {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.run = true;
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
   clickhandle() {
     if (!this.run) {
       this.timerID = setInterval(
          () => this.tick(),
          1000
        );
        this.run = true;
     } else {
       clearInterval(this.timerID);
       this.run = false;
     }
 }
  render() {
    return (
      <div>
        <h1 onClick={() => {this.clickhandle()}}>Hello, world...</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}
export default Clock