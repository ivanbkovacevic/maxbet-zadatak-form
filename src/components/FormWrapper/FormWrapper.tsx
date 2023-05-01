import React, { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";
import style from "./FormWrapper.module.scss";

const FormWrapper = () => {
  const { state } = useContext(FormContext);
  const [userInfo, setUserInfo] = useState({
    email: "example@alea.com",
    age: 30,
    name: "John Doe",
    phone: {
      ext: "00387",
      number: "65/123-456",
    },
  });

  const handleChange = (fieldName: string, value: string | number) => {
    if (fieldName.includes("phone")) {
      const phoneField = fieldName.split(".");
      const phoneSufix = phoneField[1];
      setUserInfo({
        ...userInfo,
        phone: {
          ...userInfo.phone,
          [phoneSufix]: value,
        },
      });
      return;
    }
    setUserInfo({ ...userInfo, [fieldName]: value });
  };
  return (
    <div className={style.wrapper}>
      <Form initialValues={userInfo}>
        <FormInput
          label="Email"
          id="email"
          type="email"
          required
          name="email"
          placeHolder="your@email.com"
          value={userInfo.email}
          onChangeHandler={handleChange}
        />
        <FormInput
          label="Age"
          id="age"
          onChangeHandler={handleChange}
          type="number"
          name="age"
          value={userInfo.age}
        />
        <FormInput
          label="Name"
          id="name"
          onChangeHandler={handleChange}
          type="text"
          required
          name="name"
          value={userInfo.name}
        />
        <FormInput
          label="Phone ext"
          id="phone.ext"
          onChangeHandler={handleChange}
          type="text"
          name="phone.ext"
          value={userInfo.phone.ext}
        />
        <FormInput
          label="Phone number"
          id="phone.number"
          onChangeHandler={handleChange}
          type="text"
          name="phone.number"
          value={userInfo.phone.number}
        />
        <button type="submit" value="Submit">
          Submit
        </button>
      </Form>
      {state.formSubmited && (
        <div className={style.userInfo}>
          <p>Email: {userInfo.email}</p>
          <p>Age: {userInfo.age}</p>
          <p>Name: {userInfo.name}</p>
          <p>
            Phone: {userInfo.phone.ext} <span>{userInfo.phone.number}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default FormWrapper;
