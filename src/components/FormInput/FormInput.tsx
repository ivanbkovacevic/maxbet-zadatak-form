import React from "react";

interface FormInputProps {
  type: string;
  required?: boolean;
  name?: string;
  placeHolder?: string;
  value?: string | number
}
const FormInput: React.FC<FormInputProps> = ({
  type,
  required,
  name,
  placeHolder,
}) => {
  return <div>FormInput</div>;
};

export default FormInput;
