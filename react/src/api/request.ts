import { delay } from '../utils';
import { FirsOptionProps, SecondOptionProps } from '../utils/types';
import { MOCK_FIST_OPTIONS, MOCK_SECOND_OPTIONS } from './mock';

type OverloadedFn = {
  (path: '/first', data?: never): Promise<FirsOptionProps[]>;
  (path: '/second', data: SecondOptionProps): Promise<SecondOptionProps[]>;
};

export const request: OverloadedFn = async (path, data?) => {
  await delay(window.appSettings.requestDelay);
  const chanceToSuccess = Math.random();
  if (
    path === '/first' &&
    chanceToSuccess > window.appSettings.requestChanceToSuccess
  ) {
    return Promise.resolve(MOCK_FIST_OPTIONS);
  }
  if (path === '/second' && data) {
    return Promise.resolve(MOCK_SECOND_OPTIONS[data.id]);
  }
  return Promise.reject('Something went wrong...');
};
