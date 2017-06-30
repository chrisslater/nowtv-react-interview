import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getChatLog from '../service';

class MessagesContainer extends Component {
  componentDidMount() {
    this.props.getChatLog();
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      const props = Object.assign({}, this.props);
      delete props.children;
      props.isMessagesLoaded = !!props.messages;
      return React.cloneElement(child, props);
    });

    return <div>{childrenWithProps}</div>
  }
}

const mapStateToProps = state => {
  const { messages } = state;
  return { messages };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesContainer);