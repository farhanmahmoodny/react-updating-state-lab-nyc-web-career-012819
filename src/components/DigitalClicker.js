// Code DigitalClicker Component Here
import React from "react";

class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0
  }

  clicked = () => {
    let clicks = this.state.timesClicked + 1
    return this.setState({timesClicked: clicks})
  }

  render () {
    return <button onClick={this.clicked}>{this.state.timesClicked}</button>
  }

}

export default DigitalClicker;
