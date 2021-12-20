import { Box, Stack, Typography } from "@mui/material";

import quotationMarks from '../assets/quotationMarks.svg';

type BookDetailsProps = {
  title: string, 
  description: string,
  authors: string[],
  imageUrl: string,
  pageCount: number,
  language: string,
  publisher: string,
  published: number,
  isbn10: string,
  isbn13: string,
}

export const BookDetails = (props: BookDetailsProps) => {
  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "flex-start", md: "space-between" },
      }}
    >
      <Stack
        sx={{
          backgroundImage: `url(${props.imageUrl})`,
          backgroundSize: "contain",
          width: { xs: "100%", md: "45%" },
          height: { xs: "351px", md: "512px" },
        }}
      />
      <Stack
        sx={{
          width: { xs: "100%", md: "45%" },
          height: { xs: "auto", md: "512px" },
          mt: { xs: "24px", md: 0 },
        }}
      >
        <Typography sx={{ color: "#333333", fontSize: 28, fontWeight: 500 }}>
          {props.title}
        </Typography>
        <Stack flexDirection="row">
          {props.authors.map((author: string, index) => (
            <Typography
              sx={{ color: "#AB2680", fontSize: 12, fontWeight: 500 }}
            >
              {index < props.authors.length - 1
                ? `${author},\u00A0`
                : author}
            </Typography>
          ))}
        </Stack>
        <Typography
          sx={{
            color: "#333333",
            fontSize: 12,
            fontWeight: 500,
            mb: "10px",
            mt: "32px",
          }}
        >
          INFORMAÇÕES
        </Typography>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          sx={{ mb: "32px", width: "100%" }}
        >
          <Stack>
            <Typography
              sx={{ color: "#333333", fontSize: 12, fontWeight: 500 }}
            >
              Páginas
            </Typography>
            <Typography
              sx={{ color: "#333333", fontSize: 12, fontWeight: 500 }}
            >
              Editora
            </Typography>
            <Typography
              sx={{ color: "#333333", fontSize: 12, fontWeight: 500 }}
            >
              Publicação
            </Typography>
            <Typography
              sx={{ color: "#333333", fontSize: 12, fontWeight: 500 }}
            >
              Idioma
            </Typography>
            <Typography
              sx={{ color: "#333333", fontSize: 12, fontWeight: 500 }}
            >
              Título Original
            </Typography>
            <Typography
              sx={{ color: "#333333", fontSize: 12, fontWeight: 500 }}
            >
              ISBN-10
            </Typography>
            <Typography
              sx={{ color: "#333333", fontSize: 12, fontWeight: 500 }}
            >
              ISBN-13
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{
                color: "#999999",
                fontSize: 12,
                fontWeight: 400,
                textAlign: "right",
              }}
            >
              {props.pageCount}
            </Typography>
            <Typography
              sx={{
                color: "#999999",
                fontSize: 12,
                fontWeight: 400,
                textAlign: "right",
              }}
            >
              {props.publisher}
            </Typography>
            <Typography
              sx={{
                color: "#999999",
                fontSize: 12,
                fontWeight: 400,
                textAlign: "right",
              }}
            >
              {props.published}
            </Typography>
            <Typography
              sx={{
                color: "#999999",
                fontSize: 12,
                fontWeight: 400,
                textAlign: "right",
              }}
            >
              {props.language}
            </Typography>
            <Typography
              sx={{
                color: "#999999",
                fontSize: 12,
                fontWeight: 400,
                textAlign: "right",
              }}
            >
              {props.title}
            </Typography>
            <Typography
              sx={{
                color: "#999999",
                fontSize: 12,
                fontWeight: 400,
                textAlign: "right",
              }}
            >
              {props.isbn10}
            </Typography>
            <Typography
              sx={{
                color: "#999999",
                fontSize: 12,
                fontWeight: 400,
                textAlign: "right",
              }}
            >
              {props.isbn13}
            </Typography>
          </Stack>
        </Stack>
        <Typography sx={{ fontSize: 12, fontWeight: 500, mb: "24px" }}>
          RESENHA DA EDITORA
        </Typography>
        <Stack
          alignItems="flex-start"
          justifyContent="flex-start"
          sx={{ width: "100%" }}
        >
          <Box
            sx={{
              backgroundImage: `url(${quotationMarks})`,
              height: 14,
              width: 17,
            }}
          />
          <Typography
            sx={{
              color: "#333333",
              fontSize: 12,
              fontWeight: 400,
              mt: "5px",
            }}
          >
            {props.description}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
