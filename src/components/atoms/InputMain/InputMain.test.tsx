import React from 'react';
import InputMain from './InputMain';
// import { screen, fireEvent, render } from '@testing-library/react';
import { render, fireEvent, screen } from '../../../test-utils';
import { getByDisplayValue, waitFor } from '@testing-library/react';

describe('Input', () => {
  it('Changes input', async () => {
    const onChange = jest.fn(); 
    const {debug} = render(<InputMain value="abc" placeholder="Search" onChange={onChange} />);
    const inputElement = screen.getByPlaceholderText('Search') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'def' } });
    expect(inputElement.value).toEqual('def');
  }); 
});
