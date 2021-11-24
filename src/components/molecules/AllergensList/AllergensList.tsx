import AllergensListButton from 'components/atoms/AllergensListButton/AllergensListButton';
import { MdRemoveCircle } from 'react-icons/md';
import styled from 'styled-components';

interface IAllergensList {
  allergensList: string[];
}

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
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const AllergensList = ({ allergensList }: IAllergensList) => {
  return (
    <Wrapper>
      <ul>
        {allergensList.map((item) => {
          return (
            <li key={item}>
              {item}
              <div>
                <AllergensListButton>
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
