"use client";

import { useState } from "react";

type Tab = "admins" | "members" | "advisors";

export default function LoginPage() {
  const [tab, setTab] = useState<Tab>("admins");

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div
        className="w-full max-w-[480px] rounded-2xl border shadow-sm bg-white"
        style={{ borderColor: "var(--fifth)" }}
      >
        {/* Header Tabs */}
        <div
          className="flex items-center justify-between p-2 border-b"
          style={{ borderColor: "var(--fifth)" }}
        >
          {(["admins", "members", "advisors"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 rounded-lg px-3 py-2 text-sm capitalize ${
                tab === t
                  ? "bg-[color:var(--primary)] text-[color:var(--secondary)]"
                  : "text-[color:var(--secondary)] hover:bg-[color:var(--primary)]/10"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="mb-5">
            <h1
              className="text-xl font-semibold"
              style={{ color: "var(--secondary)" }}
            >
              {tab === "admins" && "Admin Sign in"}
              {tab === "members" && "Member Sign in"}
              {tab === "advisors" && "Advisor Sign in"}
            </h1>
            <p className="mt-1 text-xs" style={{ color: "var(--fourth)" }}>
              Use your email and password. Text inside inputs is black as
              requested.
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label
                className="block text-sm mb-1"
                style={{ color: "var(--secondary)" }}
              >
                {tab === "members" ? "Email" : "Work Email"}
              </label>
              <input
                type="email"
                className="w-full rounded-lg border px-3 py-2 text-black placeholder:text-gray-500"
                style={{ borderColor: "var(--fifth)" }}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                className="block text-sm mb-1"
                style={{ color: "var(--secondary)" }}
              >
                Password
              </label>
              <input
                type="password"
                className="w-full rounded-lg border px-3 py-2 text-black placeholder:text-gray-500"
                style={{ borderColor: "var(--fifth)" }}
                placeholder="••••••••"
              />
            </div>

            {tab === "admins" && (
              <div
                className="flex items-center justify-between text-xs"
                style={{ color: "var(--fourth)" }}
              >
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-[color:var(--primary)]"
                  />
                  Remember me
                </label>
                <a href="#" className="underline">
                  Forgot password?
                </a>
              </div>
            )}

            {tab === "advisors" && (
              <div className="text-xs" style={{ color: "var(--fourth)" }}>
                New advisor?{" "}
                <a className="underline" href="#">
                  Request onboarding
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full h-10 rounded-lg text-sm shadow-sm"
              style={{ backgroundColor: "var(--primary)", color: "#161326" }}
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
            <button
              className="rounded-lg border px-3 py-2"
              style={{ borderColor: "var(--fifth)", color: "var(--secondary)" }}
            >
              SSO
            </button>
            <button
              className="rounded-lg border px-3 py-2"
              style={{ borderColor: "var(--fifth)", color: "var(--secondary)" }}
            >
              Magic Link
            </button>
            <button
              className="rounded-lg border px-3 py-2"
              style={{ borderColor: "var(--fifth)", color: "var(--secondary)" }}
            >
              OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
