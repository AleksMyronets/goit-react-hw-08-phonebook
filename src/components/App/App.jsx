import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Contacts from '../Contacts/Contacts';
import Login from '../Pages/LoginUser';
import Header from '../Header/Header';
import Register from '../Pages/RegisterUser';
import PrivateRouter from '../PrivateRouter/PrivateRouter';
import PublicRouter from '../PublicRouter/PublicRouter';
// import { ContainerForm } from './App.styled';

export const App = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Routes>
        <Route
          path="/register"
          element={
            <PublicRouter>
              <Register />
            </PublicRouter>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRouter>
              <Login />
            </PublicRouter>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRouter>
              <Contacts />
            </PrivateRouter>
          }
        />
        <Route path="*" element={<Navigate to={'/login'} />} />
      </Routes>
    </>
  );
};
