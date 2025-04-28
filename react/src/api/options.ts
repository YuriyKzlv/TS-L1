import { OptionProps } from '../utils/types';
import { request } from './request';

export const getFirstOptions = async (): Promise<OptionProps[]> => request('/first');

export const getSecondOptions = async (payload: OptionProps): Promise<OptionProps[]> => request('/second', payload);
