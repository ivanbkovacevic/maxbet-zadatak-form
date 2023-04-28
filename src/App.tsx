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
import React from "react";
import { FormContextProvider } from "./context/FormContext";

import "./globals.scss";
import FormWrapper from "./components/FormWrapper/FormWrapper";

export const App = () => {
  return (
    <FormContextProvider>
      <FormWrapper />
    </FormContextProvider>
  );
};
