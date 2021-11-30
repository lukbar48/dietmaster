import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.grey4};
`;

const BloodTestsFormBottomBar = () => {
  return (
    <Wrapper>
      <Button>Add test</Button>
    </Wrapper>
  );
};

export default BloodTestsFormBottomBar;
