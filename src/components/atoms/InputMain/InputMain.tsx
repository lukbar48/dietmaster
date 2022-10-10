import { IInput } from 'types/types';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const Input = styled.input`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSizes.l};
  background-color: ${({ theme }) => theme.colors.grey4};
  color: ${({ theme }) => theme.colors.white};
  width: 300px;
  padding-right: 50px;
`;
const InputWrapper = styled.div`
  position: relative;
`;
const BiSearchIcon = styled(BiSearch)`
  color: white;
  font-size: 48px;
  position: absolute;
  right: 0px;
  top: -3px;
  cursor: pointer;
  padding: 10px;
`;

const InputMain = ({ ...props }: IInput) => (
  <InputWrapper>
    <Input {...props} />
    <BiSearchIcon onClick={props.handleOnSearchPress} />
  </InputWrapper>
);

export default InputMain;
