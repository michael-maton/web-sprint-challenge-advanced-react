// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (intitialValue) => {
  const [values, setValues] = useState(intitialValue);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleChanges];
};

export default useForm;
