import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as service from '../service';

class MembersContainer extends Component {
  componentDidMount() {
    this.props.getMembers();
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      const props = Object.assign({}, this.props);
      delete props.children;
      props.isMembersLoaded = !!props.members;
      return React.cloneElement(child, props);
    });

    return <div>{childrenWithProps}</div>
  }
}

const mapStateToProps = state => {
  const { members } = state;
  return { members };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getMembers: service.getMembersList }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MembersContainer);