import { FirsOptionProps, SecondOptionProps } from "../utils/types";


type OptionProps = FirsOptionProps | SecondOptionProps;

interface SelectProps<T extends OptionProps> {
  name?: string,
  labelKey?: keyof T,
  valueKey?: keyof T,
  options: T[],
  selected: T | null,
  onChange: (option: T, event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = <T extends OptionProps>(props: SelectProps<T>): JSX.Element => {
  const {
    name = '',
    labelKey = 'name',
    valueKey = 'value',
    options,
    selected,
    onChange,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const option = options.find((item) => item[valueKey] === value) ?? null;
    if (option){
      onChange(option, event);
    }
  };

  return (
    <select name={name} onChange={handleChange}>
      <option defaultValue={selected?.value} value="empty">
        Select option
      </option>
      {options.map((item) => (
        <option
          key={item.id}
          value={item[valueKey] as string}
          defaultValue={selected?.value}
        >
          {item[labelKey as keyof T] as string}
        </option>
      ))}
    </select>
  );
};

export default Select;
