import { MantineProvider } from "@mantine/styles";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colors: {
          brand: [
            "#F2DCFF",
            "#E0B4FC",
            "#D093F6",
            "#C078ED",
            "#B162E3",
            "#A53FE6",
            "#9B1CEC",
            "#8F09E4",
            "#8300D7",
            "#7800CA",
          ],
        },
        primaryColor: "brand",
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
