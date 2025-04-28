import { OptionProps } from "../utils/types";

interface SelectProps<T extends OptionProps> {
  name?: string,
  labelKey?: keyof T,
  valueKey?: keyof T,
  options: T[],
  selected: T | null,
  onChange: (option: T | null, event: React.ChangeEvent<HTMLSelectElement>) => void;
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
      onChange(option, event);
  };

  return (
    <select name={name} onChange={handleChange}>
      <option defaultValue={selected?.value} value="empty">
        Select option
      </option>
      {options.map((item) => (
        <option
          key={item.id}
          value={item[valueKey]}
          defaultValue={selected?.value}
        >
          {item[labelKey]}
        </option>
      ))}
    </select>
  );
};

export default Select;
