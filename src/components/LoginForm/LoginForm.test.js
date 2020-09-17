import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('Login component tests', ()=> {
    const wrapper = shallow(<LoginForm />);
   
    it('should have a btn component', ()=> {
      //Button should be present
      expect(wrapper.find('Button')).toHaveLength(1);
      //Button should have matching text
      expect(wrapper.find('Button').text()).toEqual('Submit');
      
    });
    it('btn should be disabled', ()=> {
      expect(wrapper.find('Button').is('[disabled]')).toBetruthy;
    });

    it('should render default', () => {
      expect(wrapper).toMatchSnapshot();
    })
  });

