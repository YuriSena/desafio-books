import { Box, Stack, Typography } from "@mui/material";

import { Book } from "../contexts/BooksContext";

export const BookList = (props: Book) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${props.imageUrl})`,
          backgroundSize: "contain",
          height: { xs: 122 },
          width: { xs: 81 },
        }}
      />
      <Stack sx={{ ml: "16px" }}>
        <Typography sx={{ color: "#333333", fontSize: 14 }}>
          {props.title}
        </Typography>
        {props.authors.map((author) => (
          <Typography sx={{ color: "#AB2680", fontSize: 12 }}>
            {author}
          </Typography>
        ))}
        <Typography
          sx={{
            color: "#999999",
            fontSize: 12,
            mt: props.authors.length === 1 ? "25px" : "0",
          }}
        >
          {props.pageCount} páginas
        </Typography>
        <Typography sx={{ color: "#999999", fontSize: 12 }}>
          {props.publisher}
        </Typography>
        <Typography sx={{ color: "#999999", fontSize: 12 }}>
          Publicado em {props.published}
        </Typography>
      </Stack>
    </>
  );
};
