import AllergensForm from '../AllergensForm/AllergensForm';
import DiseasesForm from '../DiseasesForm/DiseasesForm';
import PreferencesForm from '../PreferencesForm/PreferencesForm';
import { Wrapper } from './AllergensFormContainer.styles';

const AllergensFormContainer = () => {
  return (
    <Wrapper>
      <AllergensForm />
      <PreferencesForm />
      <DiseasesForm />
    </Wrapper>
  );
};

export default AllergensFormContainer;
