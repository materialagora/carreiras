/* eslint-disable import/order */
import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Routes from "./routes";
import { RouterProvider } from "react-router-dom";
import { AppTemplate } from "components/templates";
import { Provider } from "react-redux";
import { store } from "redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTemplate>
        <RouterProvider router={Routes} />
      </AppTemplate>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
