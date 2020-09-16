// import React from 'react';
// import LoginForm from '../components/LoginForm/LoginForm';
// import { render, fireEvent } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';

// describe("LoginForm", () => {
//   describe("with valid inputs", () => {
//     it('calls the onSubmit function', async () => {
//       const mockOnSubmit = jest.fn()
//       const {getByLabelText, getByRole} = render(<LoginForm onSubmit={mockOnSubmit}/>)

//       await act(async () => {
//         fireEvent.change(getByLabelText("emaiId *"), {target: {value: "email@test.com"}})
//         fireEvent.change(getByLabelText("password *"), {target: {value: "12345678"}})
//       })

//       await act(async () => {
//         fireEvent.click(getByRole("button"))
//       })

//       expect(mockOnSubmit).toHaveBeenCalled()
//     })
//   })
// })

import { render } from 'react-test-render';
import { shallow } from 'enzyme';

describe('Login component tests', ()=> {
    const wrapper = shallow(<LoginForm />);
   
    it('should have a btn component', ()=> {
      //Button should be present
      expect(wrapper.find('button')).toHaveLength(1);
      //Button should have matching text
      expect(wrapper.find('button').text()).toEqual('Submit');
      
    });
    it('btn should be disabled', ()=> {
      expect(wrapper.find('button').is('[disabled]')).toBetruthy;
    });
  });



//   import React from 'react'
// import SignIn from './SignIn'
// import { render, fireEvent } from '@testing-library/react'
// import { act } from 'react-dom/test-utils'

// describe("SignIn", () => {
//   describe("with valid inputs", () => {
//     it('calls the onSubmit function', async () => {
//       const mockOnSubmit = jest.fn()
//       const {getByLabelText, getByRole} = render(<SignIn onSubmit={mockOnSubmit}/>)

//       await act(async () => {
//         fireEvent.change(getByLabelText("Email Address *"), {target: {value: "email@test.com"}})
//         fireEvent.change(getByLabelText("Password *"), {target: {value: "1234567"}})
//       })

//       await act(async () => {
//         fireEvent.click(getByRole("button"))
//       })

//       expect(mockOnSubmit).toHaveBeenCalled()
//     })
//   })

//   describe("with invalid email", () => {
//     it("renders the email validation error", async () => {
//       const {getByLabelText, container} = render(<SignIn />)

//       await act(async () => {
//         const emailInput = getByLabelText("Email Address *")
//         fireEvent.change(emailInput, {target: {value: "invalid email"}})
//         fireEvent.blur(emailInput)
//       })

//       expect(container.innerHTML).toMatch("Enter a valid email")
//     })
//   })

//   describe("with invalid password", () => {
//     it("renders the password validation error", async () => {
//       const {getByLabelText, container} = render(<SignIn />)

//       await act(async () => {
//         const paswordInput = getByLabelText("Password *")
//         fireEvent.change(paswordInput, {target: {value: "123"}})
//         fireEvent.blur(paswordInput)
//       })

//       expect(container.innerHTML).toMatch("Password should be longer than 6 characters")

//     })
//   })
// })