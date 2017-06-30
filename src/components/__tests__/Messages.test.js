import React from 'react';
import { shallow } from 'enzyme';
import { Messages } from '../Messages';

const members = [
    {
      "id": "123",
      "email": "mbradley0@google.it",
      "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    },
    {
      "id": "456",
      "email": "mbradley0@google.it",
    },
  ];
  const messages = [
    {
      "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
      "userId": "123",
      "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "timestamp": "2017-02-09T04:27:38Z"
    },
    {
      "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
      "userId": "456",
      "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "timestamp": "2017-02-09T04:27:38Z"
    },
  ];

it('should display the correct number of avatars', () => {
  const wrapper = shallow(
    <Messages
      members={members}
      messages={messages}
    />
  );

  expect(wrapper.find('.avatar')).toHaveLength(1);
});

it('should display the correct number of Messages', () => {
  const wrapper = shallow(
    <Messages
      members={members}
      messages={messages}
    />
  );

  expect(wrapper.find('.avatar')).toHaveLength(1);
});
