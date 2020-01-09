// import React from 'react';
// import { mount } from 'enzyme';
// import App from '../App';


// describe('The input field', ()=> {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = mount(< App/>);
//   });

//   it('It is initially empty', () => {
//     const input = wrapper.find('.inputField')
//     expect(input.props().value).toBe('');
//   });

//   describe('it could be populated with a value', () => {
//     const todoValue = 'I need to poo 💩';
//     beforeEach(() => {
//       let input = wrapper.find('.inputField');
//       input.simulate('change', {
//         target: { name: 'searchField' ,value: todoValue }
//       });
//     });

//     it(`the input value changes to ${todoValue}`, () => {
//       const inputValue = wrapper.find('.inputField');
//       expect(inputValue.props().value).toBe(todoValue);
//     });

//     describe('`then` the form can be submitted', () => {
//       beforeEach(() => {
//         const form = wrapper.find('.form');
//         form.simulate('submit', {
//           preventDefault: ()=> {}
//         });
//       });

//       describe('when the form is submitted', () => {
//         it('the input field is cleared', () => {
//           const input = wrapper.find('.inputField');
//           expect(input.props().value).toBe('');
//         });

//         it('the todovalue is added to the todolist', () => {
//           const todoList = wrapper.find('.todos');
//           expect(todoList).toHaveLength(1);
//         });

//         it(`the todovalue is  ${todoValue}`, () => {
//           const todoList = wrapper.find('.todos');
//           expect(todoList.text()).toBe(todoValue);
//         });
//       });
//     });
//   });
// });