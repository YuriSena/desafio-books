import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { BooksContextProvider } from "./contexts/BooksContext";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <BooksContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BooksContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
