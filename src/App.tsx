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
