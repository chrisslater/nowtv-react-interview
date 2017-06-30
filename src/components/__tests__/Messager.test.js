import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Messenger } from '../Messenger';
import { Messages } from '../Messages';

it('should show no messages', () => {
  const wrapper = shallow(
    <Messenger
      isMessagesLoaded={true}
      isMembersLoaded={true}
    />
  );
  expect(wrapper.find('.no-messages')).toHaveLength(1);
});

it('should show loading', () => {
  const wrapper = shallow(
    <Messenger
      isMessagesLoaded={true}
      isMembersLoaded={false}
    />
  );
  expect(wrapper.find('.is-loading')).toHaveLength(1);
});

it('should display a list of messages', () => {
  const members = [
    {
      "id": "e837c9f5-247f-445f-bcc3-7d434348336b",
      "firstName": "Martin",
      "lastName": "Bradley",
      "email": "mbradley0@google.it",
      "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
      "ip": "166.124.172.160"
    },
  ];
  const messages = [
    {
      "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
      "userId": "e837c9f5-247f-445f-bcc3-7d434348336b",
      "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "timestamp": "2017-02-09T04:27:38Z"
    },
  ];


  const wrapper = shallow(
    <Messenger
      members={members}
      messages={messages}
      isMessagesLoaded={true}
      isMembersLoaded={true}
    />
  );
  expect(wrapper.find('.no-messages')).toHaveLength(0);
  expect(wrapper.find(Messages)).toHaveLength(1);
});