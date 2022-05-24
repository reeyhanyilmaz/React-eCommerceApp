import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./reset.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

//contexts
import { AuthProvider } from "./contexts/AuthContext";
import { BasketProvider } from "./contexts/BasketContext";

//ant design
import "antd/dist/antd.min.css";

//sayfalar arası gezinirken prodocts'ı tekrar tekrar fecth etmesin diye yazdık.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <AuthProvider>
            <BasketProvider>
              <App />
            </BasketProvider>
          </AuthProvider>
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
