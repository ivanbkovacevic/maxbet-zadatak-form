import React  from "react";

interface FormContextState {
  formSubmited: boolean;
  initialData: Object;
}

interface FormContextStateProps {
  state: FormContextState;
  handleFormSubmited: (e:any) => void;
}

const FormContext = React.createContext<FormContextStateProps>({
  state: { formSubmited: false, initialData: {} },
  handleFormSubmited: () => {}
});

function FormContextProvider(props: React.PropsWithChildren<{}>) {
  const [state, setState] = React.useState<FormContextState>({
    formSubmited: false,
    initialData: {}
  });

  const handleFormSubmited =  (e:SubmitEvent) => {
    console.log('ssssss')
    setState((prevState) => ({ ...prevState, formSubmited: true }));
    e.preventDefault();
  };



  return (
    <FormContext.Provider
      value={{
        state,
        handleFormSubmited,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}

export { FormContext, FormContextProvider };
