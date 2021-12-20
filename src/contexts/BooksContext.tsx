import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { api } from "../services/axios";

type Books = {
  page: number;
  amountOfItemsByPage: number;
  isMobile: boolean;
};

type BooksContextProviderProps = {
  children: ReactNode;
};

export type Book = {
  id: string;
  title: string;
  authors: string[];
  description: string;
  language: string;
  isbn10: string;
  isbn13: string;
  pageCount: number;
  published: number;
  publisher: string;
  imageUrl: string;
};

type BooksContextType = {
  totalPages?: number;
  books?: Books;
  setBooks: Dispatch<SetStateAction<Books | undefined>>;
  getBooks: (data: Books) => Promise<void>;
  bookList?: Book[];
};

export const BooksContext = createContext({} as BooksContextType);

export const BooksContextProvider = (props: BooksContextProviderProps) => {
  const [books, setBooks] = useState<Books>();
  const [bookList, setBookList] = useState<Book[]>();
  const [totalPages, setTotalPages] = useState<number>();

  const getBooks = useCallback(async (data: Books) => {
    const token = sessionStorage.getItem("authorization");
    await api
      .get(
        `/books?page=${data.page}&amount=${data.amountOfItemsByPage}&category=biographies`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        setTotalPages(response.data.totalPages);
        const { page, amountOfItemsByPage, isMobile } = data;
        setBooks({ page, amountOfItemsByPage, isMobile });
        setBookList(response.data.data);
        sessionStorage.setItem("books", JSON.stringify(data));
        sessionStorage.setItem("bookList", JSON.stringify(response.data.data));
      });
  }, []);

  return (
    <BooksContext.Provider
      value={{ setBooks, books, getBooks, bookList, totalPages }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};
