import { Route, Routes } from "react-router";
import BookPage from "./Books/BookPage";
import Layout from "./Layout/layout";
import Register from "./Auth/register";
import Login from "./Auth/Login";
import Error404 from "./Error404";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<BookPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
