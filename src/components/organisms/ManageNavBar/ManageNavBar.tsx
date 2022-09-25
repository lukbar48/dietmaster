import ManageNavButton from 'components/atoms/ManageNavButton/ManageNavButton';
import { useContext } from 'react';
import styled from 'styled-components';
import { BsFillPersonFill, BsExclamationDiamond } from 'react-icons/bs';
import { ImSpoonKnife } from 'react-icons/im';
import { BiTestTube } from 'react-icons/bi';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { PatientContext } from 'contexts/PatientContext';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  height: 35px;
`;

const ManageNavBar = () => {
  const { patient } = useContext(PatientContext);

  if (!patient) return null;

  return (
    <Wrapper>
      <ManageNavButton to={`/patient/about/${patient._id}`}>
        <BsFillPersonFill />
        About
      </ManageNavButton>
      <ManageNavButton to={`/patient/diet/${patient._id}`}>
        <ImSpoonKnife />
        Diet
      </ManageNavButton>
      <ManageNavButton to={`/patient/allergens/${patient._id}`}>
        <BsExclamationDiamond />
        Allergens
      </ManageNavButton>
      <ManageNavButton to={`/patient/blood-tests/${patient._id}`}>
        <BiTestTube />
        Tests
      </ManageNavButton>
      <ManageNavButton to={`/patient/appointments/${patient._id}`}>
        <AiTwotoneCalendar />
        Appointments
      </ManageNavButton>
    </Wrapper>
  );
};

export default ManageNavBar;
