import AppointmentsFormBottomBar from 'components/molecules/AppointmentsFormBottomBar/AppointmentsFormBottomBar';
import AppointmentsFormTopBar from 'components/molecules/AppointmentsFormTopBar/AppointmentsFormTopBar';
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
const AppointmentsForm = () => {
  return (
    <Wrapper>
      <AppointmentsFormTopBar />
      <AppointmentsFormBottomBar />
    </Wrapper>
  );
};

export default AppointmentsForm;
