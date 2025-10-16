import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./Auth/AuthContext.jsx";
import { BrowserRouter } from "react-router";
import ReservationsProvider from "./Reservations/ReservationsContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ReservationsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReservationsProvider>
  </AuthProvider>
);
