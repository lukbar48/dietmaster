import AllergensFormContainer from 'components/organisms/AllergensFormContainer/AllergensFormContainer';
import ManageNavBar from 'components/organisms/ManageNavBar/ManageNavBar';
import ManageTop from 'components/organisms/ManageTop/ManageTop';
import { Wrapper } from './About.styles';

const Allergens = () => {
  return (
    <Wrapper>
      <ManageTop />
      <ManageNavBar />
      <AllergensFormContainer />
    </Wrapper>
  );
};

export default Allergens;
