import { TextField, Stack } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { UseAuth } from "../hooks/useAuth";

import "../styles/auth.scss";
import Logo from "../assets/Logo";

type LoginForm = {
  email: string;
  password: string;
};

export const Login = () => {
  const navigate = useNavigate();
  const { signIn } = UseAuth();
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const form = useFormik<LoginForm>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required(),
    }),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        const data = {
          email: formValues.email,
          password: formValues.password,
        };
        await signIn(data);
        if (!data) {
          return;
        }
        navigate("/home");
      } catch (err: any) {
        if (err) {
          setInvalidCredentials(true);
        }
      }
    },
  });
  return (
    <div id="page-auth">
      <Stack
        className="background-container"
        sx={{
          backgroundPosition: { xs: "45% 100%", md: "left top" },
          justifyContent: "center",
        }}
      >
        <Stack
          className="content-container"
          sx={{
            mx: {
              xs: "16px",
              md: "115px",
            },
            width: { xs: 284, md: 368 },
          }}
        >
          <Stack
            sx={{ alignItems: "center", flexDirection: "row", mb: "50px" }}
          >
            <Logo color="white" />
            <h2>Books</h2>
          </Stack>
          <form onSubmit={form.handleSubmit}>
            <TextField
              value={form.values.email}
              name="email"
              error={!!form.errors.email}
              fullWidth
              autoComplete="off"
              label="Email"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ style: { color: "#fff" } }}
              sx={{
                color: "#fff",
                fontSize: "14px",
                height: 60,
                mb: "16px",
                ".MuiFilledInput-input": { color: "#fff" },
                ".Mui-focused": { color: "#fff" },
              }}
              onChange={form.handleChange}
            />
            <TextField
              type="password"
              value={form.values.password}
              name="password"
              error={!!form.errors.password}
              fullWidth
              autoComplete="off"
              label="Senha"
              variant="filled"
              InputProps={{
                endAdornment: <button type="submit">Entrar</button>,
                disableUnderline: true,
              }}
              InputLabelProps={{ style: { color: "#fff" } }}
              sx={{
                color: "#fff",
                height: 60,
                ".MuiFilledInput-input": { color: "#fff" },
                ".Mui-focused": { color: "#29292e" },
              }}
              onChange={form.handleChange}
            />
          </form>
          {invalidCredentials && (
            <div className="error-message-container">
              <span>Email e/ou senha incorretos.</span>
            </div>
          )}
        </Stack>
      </Stack>
    </div>
  );
};
