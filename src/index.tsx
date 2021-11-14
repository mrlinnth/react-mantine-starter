import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/styles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider theme={{
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
      primaryColor: 'brand',
    }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
