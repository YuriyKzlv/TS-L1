import { useRef, useState } from 'react';

interface ISetValueForm {
  (key: string, value: string): void;
}

export const useForm = (form: Record<string, string>): [Record<string, string>, ISetValueForm] => {
  const [, forceUpdate] = useState<NonNullable<unknown>>();

  const stateRef = useRef(form);

  const setValue: ISetValueForm = (key, value) => {
    stateRef.current[key] = value;
    forceUpdate({});
  };

  return [stateRef.current, setValue];
};
