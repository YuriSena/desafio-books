import { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';

export const UseBooks = () => {
  const value = useContext(BooksContext);

  return value;
}