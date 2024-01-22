import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { customTheme } from "./styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/custom.css";
import Cursor from "./components/common/Cursor";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <Cursor />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
