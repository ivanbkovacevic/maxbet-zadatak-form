import React from "react";

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
  onSubmit: () => void;
  children: React.ReactNode;
}
const Form: React.FC<FormProps> = ({ initialValues, onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      Form
   {children}
    </form>
  );
};

export default Form;
