import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const UseAuth = () => {
  const value = useContext(AuthContext);

  return value;
}