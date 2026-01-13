import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import Toasts from "./Toasts.jsx";

const Layout = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  if (isLogin) {
    return <Outlet />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topbar />
        <main id="dashboard-content" className="flex-1 px-6 pb-10 pt-6 lg:px-10">
          <Outlet />
        </main>
      </div>
      <Toasts />
    </div>
  );
};

export default Layout;
