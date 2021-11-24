import AllergensFormContainer from 'components/organisms/AllergensFormContainer';
import ManageNavBar from 'components/organisms/ManageNavBar';
import ManageTop from 'components/organisms/ManageTop';

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
