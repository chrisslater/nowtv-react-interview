import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Message } from '../Message';

it('should display the message property', () => {
  const message = 'Testing message one';
  expect(shallow(<Message message={message}/>).find('.message').text()).toBe(message);
});

describe('Avatar', () => {
  it('should not display image if avatar is not available', () => {
    expect(shallow(<Message />).find('.avatar')).toHaveLength(0);
  });

  it('should display an avatar image if avatar property is available', () => {
    expect(shallow(
      <Message avatar={'http://dummyimage.com/100x100.jpg/dddddd/000000'} />
    )
      .find('.avatar'))
      .toHaveLength(1);
  });
});

describe('Email', () => {
  it('should not be displayed by default', () => {
    const email = 'test@test.com';
    expect(shallow(
      <Message
        message={'This is a test message'}
        email={email}
      />
    ).find('.email')
    ).toHaveLength(0);
  });

  it('should display when you hover over message', () => {
    const email = 'test@test.com';
    const wrapper = shallow(
      <Message
        message={'This is a test message'}
        email={email}
      />
    );

    wrapper.find('.message').simulate('mouseOver');
    expect(wrapper.find('.email')).toHaveLength(1);
  });
});
