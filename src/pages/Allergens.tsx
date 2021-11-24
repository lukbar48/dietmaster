import ManageNavBar from 'components/organisms/ManageNavBar';
import ManageTop from 'components/organisms/ManageTop';
import DietForm from 'components/organisms/DietForm';
import { Wrapper } from './About.styles';

const Allergens = () => {
  return (
    <Wrapper>
      <ManageTop />
      <ManageNavBar />
      <DietForm />
    </Wrapper>
  );
};

export default Allergens;
