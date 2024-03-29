import Button from 'components/atoms/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './MainPatientInfo.styles';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';
import DeleteModal from 'components/organisms/Modal/DeleteModal';
import { MdDeleteOutline, MdOutlineModeEditOutline } from 'react-icons/md';
import { fetchPatient } from 'redux/patientSlice';
import { useAppDispatch } from 'redux/hooks';

export interface PatientInfoType {
  name: string;
  surname: string;
  age: string;
  _id: string;
  index: number;
}

const MainPatientInfo = ({ name, surname, age, _id, index }: PatientInfoType) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  const handleManageClick = (id: string) => {
    dispatch(fetchPatient(_id));
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
        <Button onClick={() => handleManageClick(_id)}>
          <MdOutlineModeEditOutline style={{ fontSize: '1.4rem', margin: '-5px 2px -7px -2px' }} />
          Manage
        </Button>
        <Button backgroundColor="#FF4343" onClick={handleDeleteClick}>
          <MdDeleteOutline style={{ fontSize: '1.4rem', margin: '-5px 2px -7px -2px' }} />
          Delete
        </Button>
      </div>
      <Modal handleCloseModal={handleCloseModal} isOpen={isOpen}>
        <DeleteModal handleCloseModal={handleCloseModal} patientID={_id} />
      </Modal>
    </Wrapper>
  );
};

export default MainPatientInfo;
