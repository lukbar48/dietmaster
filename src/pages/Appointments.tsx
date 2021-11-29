import AppointmentsForm from 'components/organisms/AppointmentsForm/AppointmentsForm';
import ManageNavBar from 'components/organisms/ManageNavBar/ManageNavBar';
import ManageTop from 'components/organisms/ManageTop/ManageTop';
import { Wrapper } from './About.styles';

const Appointments = () => {
  return (
    <Wrapper>
      <ManageTop />
      <ManageNavBar />
      <AppointmentsForm />
    </Wrapper>
  );
};

export default Appointments;
