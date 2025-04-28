import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import { loadSettings } from './utils';

export const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    loadSettings();
    setIsLoading(false);
  }, []);
  
  return <div>{isLoading ? <p>Loading....</p> : <HomePage />}</div>;
};
