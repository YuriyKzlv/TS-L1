import { useRef, useState } from 'react';

interface FormProps {
  [key: string]: string
}

interface SetValueForm {
  (key: string, value: string): void;
}

export const useForm = (form: FormProps): [FormProps, SetValueForm] => {
  const [, forceUpdate] = useState<NonNullable<unknown>>();

  const stateRef = useRef(form);

  const setValue: SetValueForm = (key, value) => {
    stateRef.current[key] = value;
    forceUpdate({});
  };

  return [stateRef.current, setValue];
};
