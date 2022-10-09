import { useRef } from 'react';
import { FieldError } from 'react-hook-form';
import styled from 'styled-components';

type CustomInputProps = {
  label?: string;
  handleTextChange?: (value: string) => void;
  isTextArea?: boolean;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

const CustomInput = (props: CustomInputProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    props.handleTextChange?.(e.target.value);
  };

  return (
    <Container>
      <LabelText error={!!props.error}>{props.label}</LabelText>
      {props.isTextArea ? (
        <Textarea ref={textAreaRef} rows={1} className="inputStyles" onChange={handleOnChange} {...props} />
      ) : (
        <Input className="inputStyles" onChange={handleOnChange} {...props} />
      )}
    </Container>
  );
};

export default CustomInput;

const Container = styled.label`
  margin: 8px 0 16px;
  width: 100%;
  position: relative;

  .inputStyles {
    width: 100%;
    border-radius: 24px;
    margin-top: 10px;
    resize: none;
  }
`;
const Input = styled.input<{ error?: FieldError }>`
  overflow-y: hidden;
  padding: 14px 16px 12px;
`;
const Textarea = styled.textarea<{ error?: FieldError }>`
  overflow-y: hidden;
  padding: 14px 16px 16px;
`;
const LabelText = styled.div<{ error: boolean }>`
  margin: 6px 0 0;
`;
