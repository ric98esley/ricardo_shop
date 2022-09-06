import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppContext from "../context/AppContext";

import Layout from "../containers/Layout";

import Home from "../templates/Home";
import CreateAccount from "../templates/CreateAccount";
import Login from "../templates/Login";
import MyAccount from "../templates/MyAccount";
import NewPassword from "../templates/NewPassword";
import PasswordRecovery from "../templates/PasswordRecovery";
import NotFound from "../templates/NotFound";

import "@styles/global.css";
import SendEmail from "@pages/SendEmail";
import Checkout from "@pages/Checkout";
import Orders from "@pages/Orders";

import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/signup" element={<CreateAccount />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
