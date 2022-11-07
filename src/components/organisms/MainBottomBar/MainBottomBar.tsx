import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { SortTermType } from 'pages/Main';
import { useAuthContext } from 'contexts/AuthContext';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  p {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.white};
  }

  .filterSex {
    display: flex;
    flex-direction: column;
  }
  .buttons {
    display: flex;
    gap: 2px;
  }
`;
const Text = styled.div`
  color: white;
`;
const TopSection = styled.div`
  height: 70px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const BottomSection = styled.div`
  padding: 0 20px 2px;
  height: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey4};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Page = styled.div<{ active: boolean }>`
  height: 45px;
  width: 30px;
  border-radius: 6px;
  background-color: ${({ theme, active }) => theme.colors[active ? 'blue1' : 'grey1']};
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

type MainBottomBarProps = {
  setSortTerm: React.Dispatch<React.SetStateAction<SortTermType>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const MainBottomBar = ({ setSortTerm, setPage }: MainBottomBarProps) => {
  const { user } = useAuthContext();

  return (
    <Wrapper>
      {/* <TopSection>
        {pagesCount &&
          [...Array(pagesCount)].map((_, i) => (
            <Page onClick={() => setPage(i + 1)} key={i} active={i + 1 === page}>
              {i + 1}
            </Page>
          ))}
      </TopSection> */}
      <BottomSection>
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
        <Text>{user?.email}</Text>
      </BottomSection>
    </Wrapper>
  );
};

export default MainBottomBar;
