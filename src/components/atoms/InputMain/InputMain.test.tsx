import React from 'react';
import InputMain from './InputMain';
import { screen, fireEvent, render } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Search input', () => {
  it('Searches patients by name', () => {
    renderWithProviders(<InputMain value='abc' placeholder='Search' onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Search');
    // fireEvent.change(inputxElement, { target: { value: 'def' } });
    // expect(inputxElement.value).toBe('def')
  });
});
