import { useEffect, useState } from 'react';
import { getFirstOptions, getSecondOptions } from '../api';
import Button from '../components/Button';
import Select from '../components/Select';
import ShowError from '../components/ShowError';
import { ThemeProvider } from '../context/theme';
import { useForm } from '../hooks';
import { saveSettings } from '../utils';
import { OptionProps, Theme } from '../utils/types';

const HomePage = () => {
  const [theme, setTheme] = useState<Theme>(window.appSettings.theme);

  const [firstOptions, setFirstOptions] = useState<OptionProps[]>([]);
  const [selectedFirstOption, setSelectedFirstOption] = useState<OptionProps | null>(null);

  const [error, setError] = useState('');

  const [secondOptions, setSecondOptions] = useState<OptionProps[]>([]);
  const [selectedSecondOption, setSelectedSecondOption] = useState<OptionProps | null>(null);

  const [nameForm, setName] = useForm({ firstName: '', lastName: '' });

  const getOptions = async () => {
    try {
      const data = await getFirstOptions();
      setFirstOptions(data);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'unknown error');
    }
  };

  useEffect(() => {
    getOptions();
  }, []);

  const onChangeFirstOption = async (value: OptionProps | null) => {
    setSelectedFirstOption(value);
    if (value == null) {
      setSelectedSecondOption(null);
    } else {
    const data = await getSecondOptions({ id: value.id });
    setSecondOptions(data);
    }
  };

  const onChangeSecondOption = (value: OptionProps | null) => {
    setSelectedSecondOption(value);
  };

  const handleChangeNameForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setName(name, value);
  };

  const onHideError = () => {
    setError('');
    getOptions();
  };

  const saveForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const toggleTheme = () => {
    setTheme((prev: string) => {
      const next: Theme = prev === 'light' ? 'dark' : 'light';
      saveSettings('theme', next);
      return next;
    });
  };

  return (
    <ThemeProvider value={[theme, setTheme]}>
      <form>
        <div>
          Select first type:&nbsp;
          <Select
            options={firstOptions}
            selected={selectedFirstOption}
            onChange={onChangeFirstOption}
          />
        </div>
        {selectedFirstOption != null && (
          <div>
            Select second type:&nbsp;
            <Select
              labelKey="label"
              options={secondOptions}
              selected={selectedSecondOption}
              onChange={onChangeSecondOption}
            />
          </div>
        )}
        <br />
        <div>
          <div>
            First Name&nbsp;
            <input
              type="text"
              name="firstName"
              value={nameForm.firstName}
              onChange={handleChangeNameForm}
            />
          </div>
          <br />
          <div>
            Last Name&nbsp;
            <input
              type="text"
              name="lastName"
              value={nameForm.lastName}
              onChange={handleChangeNameForm}
            />
          </div>
        </div>
        <br />
        <Button variant="secondary" onClick={toggleTheme}>
          <span>Toggle them</span>
        </Button>
        &nbsp;
        <Button
          variant="secondary"
          onClick={saveForm}
          type="submit"
          disabled={error !== ''}
        >
          <span>Save form</span>
        </Button>
        <br />
        <ShowError delay={1000} show={error !== ''} onHide={onHideError}>
          <p>{error}</p>
        </ShowError>
      </form>
    </ThemeProvider>
  );
};

export default HomePage;
