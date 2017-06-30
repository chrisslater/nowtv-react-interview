import React, { Component } from 'react';
import './Message.css';

export class Message extends Component {
  state = {
    isMessageHover: false,
  };

  render() {
    const { message } = this.props;
    const { isMessageHover } = this.state;

    return (
      <div>
        <div
          className="message"
          onMouseOver={this.handleMessageMouseOver.bind(this)}
          onMouseOut={this.handleMessageMouseOut.bind(this)}
        >
          {message}
        </div>
        {(isMessageHover) ? (this.props.children): null}
      </div>
    );
  }

  handleMessageMouseOver() {
    this.setState({ isMessageHover: true });
  }

  handleMessageMouseOut() {
    this.setState({ isMessageHover: false });
  }
}
