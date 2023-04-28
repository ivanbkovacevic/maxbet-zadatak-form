import React from "react";
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
  handleSubmit: (e:any) => void;
  children: React.ReactNode;
}
const Form: React.FC<FormProps> = ({ initialValues, handleSubmit, children }) => {
  return (
    <form onSubmit={handleSubmit} className={style.wrapper}>
    <h1>Form</h1>
      {children}
    </form>
  );
};

export default Form;
