import AllergensListButton from 'components/atoms/AllergensListButton/AllergensListButton';
import { MdAddCircle } from 'react-icons/md';
import { Form } from './AllergensInput.styles';
import React from 'react';

export interface AllergensInputType {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  placeholder: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
  item: string;
  color?: string;
}

const AllergensInput = ({ placeholder, handleSubmit, setItem, item, color }: AllergensInputType) => {
  return (
    <Form onSubmit={handleSubmit}>
      <input
        value={item}
        data-testid="allergens-input"
        onChange={(e) => setItem(e.target.value)}
        maxLength={20}
        type="text"
        placeholder={placeholder}
      />
      <div>
        <AllergensListButton data-testid="allergens-btn" color={color}>
          <MdAddCircle />
        </AllergensListButton>
      </div>
    </Form>
  );
};

export default AllergensInput;
