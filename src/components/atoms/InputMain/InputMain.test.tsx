import React from 'react';
import InputMain from './InputMain';
// import { screen, fireEvent, render } from '@testing-library/react';
import { render, fireEvent, screen } from '../../../test-utils';

describe('Input', () => {
  it('Changes input', () => {
        const onChange = jest.fn();
    render(<InputMain value="abc" placeholder="Search" onChange={onChange} />);
    //     const inputElement = screen.getByPlaceholderText('Search') as HTMLInputElement;
    //     fireEvent.change(inputElement, { target: { value: 'def' } });
    //     expect(inputElement.value).toEqual('def');
  });
}); 
