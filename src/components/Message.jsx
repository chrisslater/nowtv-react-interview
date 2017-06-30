import React, { Component } from 'react';

export class Message extends Component {
  state = {
    isMessageHover: false,
  };

  render() {
    const {
      avatar,
      message,
    } = this.props;
    const {
      isMessageHover,
    } = this.state;

    return (
      <div>
        {(avatar) ? (<img className="avatar" src={avatar} />) : null}
        <div
          className="message"
          onMouseOver={this.handleMessageMouseOver.bind(this)}
          onMouseOut={this.handleMessageMouseOut.bind(this)}
        >
          {message}
        </div>
        {(isMessageHover) ? (<div className={'email'}></div>): null}
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