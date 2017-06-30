import React from 'react';
import { shallow } from 'enzyme';
import { Message } from '../Message';

it('should display the message property', () => {
  const message = 'Testing message one';
  expect(shallow(<Message message={message}/>).find('.message').text()).toBe(message);
});

it('should not display children when you haven\'t hovered over message', () => {
  const child = <div className="child">Child</div>;
  const wrapper = shallow(
    <Message
      message={'This is a test message'}
    >
      {child}
    </Message>
  );

  expect(wrapper.find(".child")).toHaveLength(0);
});

 it('should display children when you hover over message', () => {
  const child = <div className="child">Child</div>;
  const wrapper = shallow(
    <Message
      message={'This is a test message'}
    >
      {child}
    </Message>
  );

  wrapper.find('.message').simulate('mouseOver');
  expect(wrapper.find(".child")).toHaveLength(1);
  wrapper.find('.message').simulate('mouseOut');
  expect(wrapper.find(".child")).toHaveLength(0);
});
