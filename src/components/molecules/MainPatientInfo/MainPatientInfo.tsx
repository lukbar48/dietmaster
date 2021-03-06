import { useContext } from 'react';
import Button from 'components/atoms/Button/Button';
import { PatientContext } from 'contexts/PatientContext';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './MainPatientInfo.styles';
import { IPatientInfo } from 'types/interfaces';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';
import DeleteModal from 'components/organisms/Modal/DeleteModal';
import { MdDeleteOutline, MdOutlineModeEditOutline } from 'react-icons/md';

const MainPatientInfo = ({ name, surname, age, id, index }: IPatientInfo) => {
  const { managePatient } = useContext(PatientContext);
  const navigate = useNavigate();
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  const handleManageClick = (id: number) => {
    managePatient(id);
    navigate(`/patient/about/${id}`);
  };
  const handleDeleteClick = () => {
    handleOpenModal();
  };

  return (
    <Wrapper>
      <div>{index + 1}</div>
      <div>{name}</div>
      <div>{surname}</div>
      <div>{age}</div>
      <div className="buttons">
        <Button onClick={() => handleManageClick(id)}>
          <MdOutlineModeEditOutline style={{ fontSize: '1.4rem', margin: '-5px 2px -7px -2px' }} />
          Manage
        </Button>
        <Button backgroundColor="#FF4343" onClick={handleDeleteClick}>
          <MdDeleteOutline style={{ fontSize: '1.4rem', margin: '-5px 2px -7px -2px' }} />
          Delete
        </Button>
      </div>
      <Modal handleCloseModal={handleCloseModal} isOpen={isOpen}>
        <DeleteModal handleCloseModal={handleCloseModal} patientID={id} />
      </Modal>
    </Wrapper>
  );
};

export default MainPatientInfo;
