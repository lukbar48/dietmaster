import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { IoMdAdd } from "react-icons/io";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.grey4};
`;

const BloodTestsFormBottomBar = ({ handleOpenModal }: { handleOpenModal: () => void }) => {
  return (
    <Wrapper>
      <Button onClick={handleOpenModal}>
        <IoMdAdd style={{ fontSize: '1.4rem', margin: '0px 3px 0px -5px' }} />
        Add test
      </Button>
    </Wrapper>
  );
};

export default BloodTestsFormBottomBar;
