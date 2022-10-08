import AllergensForm from '../AllergensForm/AllergensForm';
import DiseaseForm from '../DiseaseForm/DiseaseForm';
import PreferencesForm from '../PreferencesForm/PreferencesForm';
import { Wrapper } from './AllergensFormContainer.styles';

const AllergensFormContainer = () => {
  return (
    <Wrapper>
      <AllergensForm />
      <PreferencesForm />
      <DiseaseForm />
    </Wrapper>
  );
};

export default AllergensFormContainer;
