// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  }

  bitrateHandler = () => {
    this.setState({settings:{
      bitrate: 12,
      video: {resolution: this.state.settings.video.resolution}
    }})
  }

  resolutionHandler = () => {
    this.setState({settings:
      {
        bitrate: this.state.settings.bitrate,
        video:
          {resolution: '720p'}
      },
    })
  }

  render(){
    console.log(this.state.settings.bitrate)
    console.log(this.state.settings.video.resolution)
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateHandler}>Bitrate</button>
        <button className="resolution" onClick={this.resolutionHandler}>Resolution</button>
      </div>
    )
  }
}
export default YouTubeDebugger;
