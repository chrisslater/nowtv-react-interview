import React, { PropTypes } from 'react';
import { Message } from './Message';
import moment from 'moment';

import './Messages.css';

export function Messages(props) {
  const { members, messages } = props;

  const sortedMessages = messages.sort((a, b) => a.timestamp > b.timestamp);

  return (
    <div>
      {messages.map((message) => {
        const userId = message.userId;
        const member = members.find((member) => userId === member.id);

        if (!member) {
          return null;
        }

        return (
          <div key={message.id} className="messages-profile">
            <div>
              {(member.avatar) ? (
                <div>
                  <img className="avatar" src={member.avatar} alt="Avatar" />
                </div>
              ) : null}
            </div>
            <div>
              {(message.timestamp) ? (
                <div className="date">{moment(message.timestamp).format('DD/MM/YYYY HH:mm')}</div>
              ): null}
              <Message message={message.message}>
                <div className={'email'}>{member.email}</div>
              </Message>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Messages.propTypes = {
  members: PropTypes.array.isRequired,
  messages: PropTypes.array.isRequired,
};