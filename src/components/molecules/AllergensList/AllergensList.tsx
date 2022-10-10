import AllergensListButton from 'components/atoms/AllergensListButton/AllergensListButton';
import { MdRemoveCircle } from 'react-icons/md';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  ul {
    width: 100%;
  }

  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 8px;
    font-size: 1rem;
  }
`;

export interface AllergensListType {
  allergensList: string[];
  deleteItem: (choosedItem: string) => void;
  color?: string;
}

const AllergensList = ({ allergensList, deleteItem, color }: AllergensListType) => {
  return (
    <Wrapper>
      <ul>
        {allergensList.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <div>
                <AllergensListButton color={color} onClick={() => deleteItem(item)}>
                  <MdRemoveCircle />
                </AllergensListButton>
              </div>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default AllergensList;
