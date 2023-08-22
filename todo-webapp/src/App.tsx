import React from "react";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import ProtectedRoute from "./router/ProtectedRoute";

export const history = createBrowserHistory() as any;

/* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" Component={Login} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
