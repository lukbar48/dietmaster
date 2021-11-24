import ManageNavBar from 'components/organisms/ManageNavBar/ManageNavBar';
import ManageTop from 'components/organisms/ManageTop/ManageTop';
import { Wrapper } from './About.styles';
import DietForm from 'components/organisms/DietForm/DietForm';

const Diet = () => {
  return (
    <Wrapper>
      <ManageTop />
      <ManageNavBar />
      <DietForm />
    </Wrapper>
  );
};

export default Diet;
