import { FirsOptionProps, SecondOptionProps } from '../utils/types';
import { request } from './request';

export const getFirstOptions = async (): Promise<FirsOptionProps[]> => request('/first');

export const getSecondOptions = async (payload: SecondOptionProps): Promise<SecondOptionProps[]> => request('/second', payload);
