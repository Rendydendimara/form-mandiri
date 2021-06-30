import { getLocal, setLocal } from './localStorage';

export const localSaveToken = (token: string) => {
  setLocal('token', token);
};

export const localLoadToken = () => {
  return getLocal('token');
};

export const localClearToken = () => {
  setLocal('token', '');
};
