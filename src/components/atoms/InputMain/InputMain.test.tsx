import React from 'react';
import InputMain from './InputMain';
// import { screen, fireEvent, render } from '@testing-library/react';

import { render, fireEvent, screen } from '../../../test-utils';

describe('Search input', () => {
  it('Searches patients by name', async () => {
    render(<InputMain value='abc' placeholder='Search' onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Search')  as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'def' } });
    expect(inputElement.value).toEqual('abc')  
  });
});
 
// describe('Input change', () => {
//   it('changes the input', async () => {
//     render(<input placeholder="elo" type="text" value="siemano" onChange={() => {}} />);
//     const inputElement = screen.getByDisplayValue('siemano') as HTMLInputElement;
//     fireEvent.change(inputElement, { target: { value: 'def' } });
//     // expect(inputElement.value).toHaveValue('def')
//     await screen.findByText('def');
//   });
// });

// describe('div', () => {
//   it('div', () => {
//     render(<div role='contentinfo'>siemano</div>);
//     const divElement = screen.getByRole('contentinfo')
//     expect(divElement).toBeInTheDocument();
//     expect(divElement).toHaveAttribute('role')
//     fireEvent.change(divElement, { target: { value: 'def' } });
//     expect(divElement).toHaveAttribute('role')
//   });
// });


// export const ButtonWrapper = ({ title, ...props }: {title: string; onClick: any}) => <button {...props}>{title}</button>;



// test("handles onClick", () => {
//   const onClick = jest.fn();
//   render(<ButtonWrapper onClick={onClick} title="Add Item" />);
//   const buttonElement = screen.getByText("Add Item");
//   fireEvent.click(buttonElement);
//   expect(onClick).toHaveBeenCalledTimes(1);
// });


// export const DivElement = ({numbers}:{numbers: number[]}) => {
//   return (<>
//     <div role="dialog">
//       {numbers}
//     </div>
//     <button onChange={()=>numbers.push(20)}>btn</button>
//     </>
//   )
// }




// test("div", () => {
//   render(<DivElement numbers={[5,10]} />);
//   const divElement = screen.getByRole('dialog') 
//   const buttonElement = screen.getByText("btn") 
//   fireEvent.click(buttonElement)
//   expect(divElement).toContain([5,10,15]) 
  

  // fireEvent.click(buttonElement);
  // expect(onClick).toHaveBeenCalledTimes(1);
// });