import React from "react";
import style from "./FormInput.module.scss";

interface FormInputProps {
  type: string;
  required?: boolean;
  name: string;
  placeHolder?: string;
  value: string | number;
  label: string;
  id: string;
  onChangeHandler: (name: string, value: string | number) => void;
}
const FormInput: React.FC<FormInputProps> = ({
  type,
  required,
  name,
  placeHolder,
  value,
  onChangeHandler,
  label,
  id,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className={style.wrapper}
        type={type}
        required={required}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => onChangeHandler(name, e.target.value)}
      />
    </>
  );
};

export default FormInput;
