import BloodTestsFormBottomBar from 'components/molecules/BloodTestsFormBottomBar/BloodTestsFormBottomBar';
import BloodTestsFormTopBar from 'components/molecules/BloodTestsFormTopBar/BloodTestsFormTopBar';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px;
  width: 100%;
  min-height: calc(100vh - 75px);
  background-color: ${({ theme }) => theme.colors.grey1};
`;

const BloodTestsForm = () => {
  return (
    <Wrapper>
      <BloodTestsFormTopBar />
      <BloodTestsFormBottomBar />
    </Wrapper>
  );
};

export default BloodTestsForm;
