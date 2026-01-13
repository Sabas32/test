import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Users from "./pages/Users.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import Businesses from "./pages/Businesses.jsx";
import BusinessDetails from "./pages/BusinessDetails.jsx";
import Subscriptions from "./pages/Subscriptions.jsx";
import Transactions from "./pages/Transactions.jsx";
import Emails from "./pages/Emails.jsx";
import Analytics from "./pages/Analytics.jsx";
import Roles from "./pages/Roles.jsx";
import Settings from "./pages/Settings.jsx";
import { useAppStore } from "./store/useAppStore";

const App = () => {
  const theme = useAppStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/businesses/:businessId" element={<BusinessDetails />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/emails" element={<Emails />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
