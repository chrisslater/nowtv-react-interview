import React, { PropTypes } from 'react';
import { Messages } from './Messages';

export function Messenger(props) {
  const {
    members,
    messages,
    isMembersLoaded,
    isMessagesLoaded,
  } = props;

  if (!(isMessagesLoaded && isMembersLoaded)) {
    return <div className={'is-loading'}>Is Loading...</div>;
  }

  if (!(
    Array.isArray(members) &&
    members.length > 0 &&
    Array.isArray(messages) &&
    messages.length > 0
  )) {

    return <div className={'no-messages'}>No Messages</div>;
  }

  return <Messages members={members} messages={messages}/>;
}

Messenger.propTypes = {
  members: PropTypes.array,
  messages: PropTypes.array,
  isLoading: PropTypes.bool,
};