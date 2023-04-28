/*
	Napraviti mini-library za form submission.
	Implementacija u pozadini treba da koristi context API i da se ne oslanja na postojece npm pakete za forme.
	Sva logika (input[value], input[onChange], form[onSumbit]) treba da se nalazi u Form i FormInput
	komponentama tako da nije izlozena korisniku library-a.

	Ispod je primjer komponente koja bi koristila library na zeljeni nacin. Ukoliko ovakva struktura
	bude u browseru rezultovala renderovanju forme koja na submit loguje userInfo objekat sa izmjenjenim vrijednostima,
	zadatak se smatra uspjesno zavrsenim.
	
	Za zadatak kreirati poseban projekat gdje ce sadrzaj App.tsx fajla biti ovaj fajl.

	Koristiti React i TypeScript.

	Puno srece ;-)
*/
import React, { useState } from "react";
import Form from "./components/Form/Form";
import FormInput from "./components/FormInput/FormInput";
import style from "./App.module.scss";
import "./globals.scss";

export const App = () => {
  // Example
  const [formSubmited, setFormSubmited] = useState<boolean>(false);

  const [userInfo, setUserInfo] = useState({
    email: "example@alea.com",
    age: 30,
    name: "John Doe",
    phone: {
      ext: "00387",
      number: "65/123-456",
    },
  });

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    setFormSubmited(true);
  };

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
      <Form initialValues={userInfo} handleSubmit={handleSubmit}>
        <FormInput
          type="email"
          required
          name="email"
          placeHolder="your@email.com"
          value={userInfo.email}
          onChangeHandler={handleChange}
        />
        <FormInput
          onChangeHandler={handleChange}
          type="number"
          name="age"
          value={userInfo.age}
        />
        <FormInput
          onChangeHandler={handleChange}
          type="text"
          required
          name="name"
          value={userInfo.name}
        />
        <FormInput
          onChangeHandler={handleChange}
          type="text"
          name="phone.ext"
          value={userInfo.phone.ext}
        />
        <FormInput
          onChangeHandler={handleChange}
          type="text"
          name="phone.number"
          value={userInfo.phone.number}
        />
        <button type="submit" value="Submit">
          Submit
        </button>
      </Form>
      {formSubmited && (
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
