import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { SortTermType } from 'pages/Main';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.grey4};
  padding: 0 20px 2px;

  p {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.white};
  }

  .filterSex {
    display: flex;
    flex-direction: column;

    .buttons {
      display: flex;
      gap: 2px;
    }
  }
`;

type MainBottomBarProps = {
  setSortTerm: React.Dispatch<React.SetStateAction<SortTermType>>;
};

const MainBottomBar = ({ setSortTerm }: MainBottomBarProps) => {
  return (
    <Wrapper>
      <div className="filterSex">
        <p>Sort</p>
        <div className="buttons">
          <Button onClick={() => setSortTerm('off')} padding="6px 20px" borderRadius="6px 0 0 6px">
            off
          </Button>
          <Button onClick={() => setSortTerm('female')} padding="6px 20px" borderRadius="0">
            female
          </Button>
          <Button onClick={() => setSortTerm('male')} padding="6px 20px" borderRadius="0">
            male
          </Button>
          <Button onClick={() => setSortTerm('asc')} padding="6px 20px" borderRadius="0">
            a-z
          </Button>
          <Button onClick={() => setSortTerm('desc')} padding="6px 20px" borderRadius="0 6px 6px 0">
            z-a
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainBottomBar;
