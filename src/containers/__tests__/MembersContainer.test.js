import React from 'react';
import { mount } from 'enzyme';
import { MembersContainer } from '../MembersContainer';

describe('Mounting Component', () => {
  it('getMembers to be called once', () => {
    const mock = jest.fn();
    mount(<MembersContainer getMembers={mock}></MembersContainer>);
    expect(mock.mock.calls.length).toBe(1);
  });
});



it('prop isMembersLoaded to be false', () => {
  const mock = jest.fn();
  function MockComponent (props) {
    expect(props.isMembersLoaded).toBe(false);
    return <div>MockComponent</div>;
  }
  mount(<MembersContainer getMembers={mock}><MockComponent /></MembersContainer>);
  expect(mock.mock.calls.length).toBe(1);
});

it('prop isMembersLoaded to be true', () => {
  const mock = jest.fn();
  function MockComponent (props) {
    expect(props.isMembersLoaded).toBe(true);
    return <div>MockComponent</div>;
  }
  mount(<MembersContainer getMembers={mock} members={['members']}><MockComponent /></MembersContainer>);
});

it('prop members to be passed to children', () => {
  const mock = jest.fn();
  const mockMembers = ['members'];
  function MockComponent (props) {
    expect(props.members).toBe(mockMembers);
    return <div>MockComponent</div>;
  }
  mount(<MembersContainer getMembers={mock} members={mockMembers}><MockComponent /></MembersContainer>);
});