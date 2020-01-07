import React from 'react';
import { shallow } from 'enzyme';
import { Input } from '../components/Input';

describe('<Input />', ()=> {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< Input/>);
  });

  it('It has an input field', () => {
    const input = wrapper.find('.inputField')
    expect(input.props().value).toBe(undefined)
  });
  
  it('contains a button', () => {
    const button = <button> submit todo </button>
    expect(wrapper.containsMatchingElement(button)).toBe(true);
  });

  it('There is a text on the button', () => {
    const button = wrapper.find('.button');
    expect(button.text()).toEqual('submit todo');
  });
});