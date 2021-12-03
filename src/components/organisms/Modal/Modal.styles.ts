import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Wrapper = styled<any>(ReactModal)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  min-height: 150px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid grey;
`;
