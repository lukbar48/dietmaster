import ManageNavButton from 'components/atoms/ManageNavButton/ManageNavButton';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { BiTestTube } from 'react-icons/bi';
import { BsExclamationDiamond, BsFillPersonFill } from 'react-icons/bs';
import { ImSpoonKnife } from 'react-icons/im';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  height: 35px;
`;

const ManageNavBar = () => {
  const patient = useSelector((state: any) => state.patient);

  console.log('aaaa', patient._id);

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
