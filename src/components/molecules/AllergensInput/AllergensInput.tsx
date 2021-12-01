import AllergensListButton from 'components/atoms/AllergensListButton/AllergensListButton';
import { MdAddCircle } from 'react-icons/md';
import { IAllergensInput } from 'types/interfaces';
import { Form } from './AllergensInput.styles';

const AllergensInput = ({ placeholder, handleSubmit, setItem, item, color }: IAllergensInput) => {
  return (
    <Form onSubmit={handleSubmit}>
      <input value={item} onChange={(e) => setItem(e.target.value)} maxLength={20} type="text" placeholder={placeholder} />
      <div>
        <AllergensListButton color={color}>
          <MdAddCircle />
        </AllergensListButton>
      </div>
    </Form>
  );
};

export default AllergensInput;
