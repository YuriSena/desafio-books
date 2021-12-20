import { IconButton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseBooks } from "../hooks/useBooks";

import background from "../assets/HomeBackground.png";

import { Book } from "../contexts/BooksContext";
import { BookList } from "../components/BookList";
import LogoutIcon from "../assets/LogoutIcon";
import CloseIcon from "../assets/CloseIcon";
import Logo from "../assets/Logo";
import ArrowRight from "../assets/ArrowRight";
import ArrowLeft from "../assets/ArrowLeft";

import "../styles/home.scss";
import { BookDetails } from "../components/BookDetails";

export const Home = () => {
  const { totalPages, getBooks, bookList } = UseBooks();
  const userName = sessionStorage.getItem("userName");
  const [page, setPage] = useState(1);
  const [bookDetails, setBookDetails] = useState<Book>({
    id: "",
    title: "",
    authors: [""],
    description: "",
    language: "",
    isbn10: "",
    isbn13: "",
    pageCount: 0,
    published: 0,
    publisher: "",
    imageUrl: "",
  });
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const handleModal = (book: Book) => {
    setBookDetails(book);
    setOpenModal(!openModal);
  };

  useEffect(() => {
    getBooks({
      page,
      amountOfItemsByPage: 12,
      isMobile: false,
    });
  }, [getBooks, page]);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <Stack
      id="homepage"
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {openModal && (
        <div className="modal-container">
          <IconButton
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={() => setOpenModal(false)}
          >
            <CloseIcon />
          </IconButton>
          <div className="modal-content">
            <BookDetails
              title={bookDetails.title}
              description={bookDetails.description}
              authors={bookDetails.authors}
              imageUrl={bookDetails.imageUrl}
              pageCount={bookDetails.pageCount}
              language={bookDetails.language}
              publisher={bookDetails.publisher}
              published={bookDetails.published}
              isbn10={bookDetails.isbn10}
              isbn13={bookDetails.isbn13}
            />
          </div>
        </div>
      )}
      <Stack
        className="header-container"
        sx={{
          alignItems: "space-between",
          flexDirection: "row",
          mt: "40px",
          mx: { xs: "16px", md: "115px" },
          position: "relative",
          height: "40px",
          maxWidth: "100%",
        }}
      >
        <Logo color="#333333" className="logo-ioasys" />
        <h2>Books</h2>
        <Stack
          className="logout-container"
          alignItems="center"
          flexDirection="row"
        >
          <Typography
            sx={{
              display: { xs: "none", md: "block" },
              fontSize: 12,
              fontWeight: 400,
              mr: "16px",
            }}
          >
            Bem vindo, <b>{userName}</b>
          </Typography>
          <IconButton sx={{ position: "relative" }} onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Stack
        className="content-container"
        sx={{
          overflowY: openModal ? "hidden" : { xs: "scroll", md: "hidden" },
          flexDirection: { xs: "column", md: "row" },
          flexWrap: { xs: "nowrap", md: "wrap" },
          mt: "42px",
          mx: { xs: "16px", md: "115px" },
        }}
      >
        {!!bookList &&
          bookList.map((book) => (
            <Stack
              key={book.id}
              className="card-container"
              sx={{
                borderRadius: "4px",
                boxShadow: "0px 6px 24px rgba(84, 16, 95, 0.13)",
                cursor: "pointer",
                flexDirection: "row",
                width: "288px",
                mb: "16px",
                mr: { xs: 0, md: "16px" },
                p: "16px",
              }}
              onClick={() => handleModal(book)}
            >
              <BookList
                id={book.id}
                title={book.title}
                authors={book.authors}
                description={book.description}
                language={book.language}
                isbn10={book.isbn10}
                isbn13={book.isbn13}
                pageCount={book.pageCount}
                published={book.published}
                publisher={book.publisher}
                imageUrl={book.imageUrl}
              />
            </Stack>
          ))}
      </Stack>
      <Stack
        className="paginator-container"
        sx={{
          alignItems: { xs: "center", md: "flex-end" },
          background: "transparent",
          pr: { xs: 0, md: "250px" },
          my: "10px",
          width: "100%",
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            width: 175,
            minHeight: 32,
          }}
        >
          <IconButton
            sx={{ bgcolor: "transparent" }}
            onClick={() => setPage(page > 1 ? page - 1 : page)}
          >
            <ArrowLeft disable={page === 1} />
          </IconButton>
          <Stack sx={{ justifyContent: "center" }}>
            <Typography
              sx={{
                width: "100px",
              }}
            >
              Página {page} de {Math.ceil(totalPages!)}
            </Typography>
          </Stack>
          <IconButton
            onClick={() => setPage(page < totalPages! ? page + 1 : page)}
          >
            <ArrowRight disable={page === Math.ceil(totalPages!)} />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};
