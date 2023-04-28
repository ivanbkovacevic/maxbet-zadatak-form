import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import style from "./Form.module.scss";

interface UserInfo {
  email: string;
  age: number;
  name: string;
  phone: {
    ext: string;
    number: string;
  };
}
interface FormProps {
  initialValues: UserInfo;
  children: React.ReactNode;
}
const Form: React.FC<FormProps> = ({
  initialValues,
  children,
}) => {
  
  const { handleFormSubmited } = useContext(FormContext);

  return (
    <form onSubmit={handleFormSubmited} className={style.wrapper}>
      <h1>Form</h1>
      {children}
    </form>
  );
};

export default Form;
