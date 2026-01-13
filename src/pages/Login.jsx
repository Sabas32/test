import React from "react";
import { useNavigate } from "react-router-dom";
import { adminAccounts } from "../data/mockData";
import { useAppStore } from "../store/useAppStore";

const Login = () => {
  const navigate = useNavigate();
  const { loginAs } = useAppStore();

  const handleLogin = (id) => {
    loginAs(id);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-300">Tak Business</p>
            <h1 className="mt-6 text-4xl font-semibold">Admin Dashboard</h1>
            <p className="mt-4 text-sm text-indigo-100/80">
              Sign in to access business performance, analytics, and automation controls for Tak Business.
            </p>
            <div className="mt-10 grid gap-4">
              {adminAccounts.map((account) => (
                <button
                  key={account.id}
                  onClick={() => handleLogin(account.id)}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left text-sm text-indigo-50 transition hover:-translate-y-0.5 hover:border-indigo-400/60 hover:bg-white/10"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">{account.role}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{account.name}</p>
                  <p className="text-xs text-indigo-200">{account.email}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {account.permissions.map((permission) => (
                      <span key={permission} className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold text-indigo-100">
                        {permission}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <h2 className="text-2xl font-semibold">Sign in</h2>
            <p className="mt-2 text-sm text-indigo-100/70">
              Use one of the demo admin accounts to preview role-based access restrictions.
            </p>
            <form className="mt-8 space-y-4">
              <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
                Email
                <input
                  type="email"
                  placeholder="admin@takbusiness.com"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-indigo-200"
                />
              </label>
              <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
                Password
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-indigo-200"
                />
              </label>
              <button
                type="button"
                onClick={() => handleLogin(adminAccounts[0].id)}
                className="w-full rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:bg-indigo-400"
              >
                Continue as Super Admin
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
