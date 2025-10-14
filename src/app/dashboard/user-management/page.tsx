"use client";

import { useState } from "react";

type PermissionKey =
  | "view_esg"
  | "edit_esg"
  | "manage_content"
  | "finance_access"
  | "approve_validation"
  | "view_reports"
  | "admin_settings";

const allPermissions: { key: PermissionKey; label: string }[] = [
  { key: "view_esg", label: "View ESG Data" },
  { key: "edit_esg", label: "Edit ESG Data" },
  { key: "manage_content", label: "Manage Content" },
  { key: "finance_access", label: "Green Finance" },
  { key: "approve_validation", label: "Approve Validation" },
  { key: "view_reports", label: "View Reports" },
  { key: "admin_settings", label: "Admin Settings" },
];

type Role = {
  id: string;
  name: string;
  description?: string;
  permissions: Partial<Record<PermissionKey, boolean>>;
};

export default function UserManagementPage() {
  const [roles, setRoles] = useState<Role[]>([
    {
      id: "owner",
      name: "Owner",
      description: "Full access to all features",
      permissions: Object.fromEntries(allPermissions.map((p) => [p.key, true])) as Role["permissions"],
    },
    {
      id: "manager",
      name: "Manager",
      description: "Manage ESG data and reports",
      permissions: { view_esg: true, edit_esg: true, view_reports: true },
    },
    {
      id: "member",
      name: "Member",
      description: "Read-only access",
      permissions: { view_esg: true },
    },
  ]);

  const [newRole, setNewRole] = useState({ name: "", description: "" });

  const togglePermission = (roleId: string, key: PermissionKey) => {
    setRoles((prev) =>
      prev.map((r) =>
        r.id === roleId
          ? {
              ...r,
              permissions: { ...r.permissions, [key]: !r.permissions[key] },
            }
          : r
      )
    );
  };

  const addRole = () => {
    if (!newRole.name.trim()) return;
    setRoles((prev) => [
      ...prev,
      { id: newRole.name.toLowerCase().replace(/\s+/g, "-"), name: newRole.name, description: newRole.description, permissions: {} },
    ]);
    setNewRole({ name: "", description: "" });
  };

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold" style={{ color: "var(--fourth)" }}>Role-based Access Management</h2>

      {/* Create role */}
      <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: "var(--fifth)" }}>
        <div className="text-sm font-medium mb-3" style={{ color: "var(--secondary)" }}>Create Role</div>
        <div className="grid sm:grid-cols-3 gap-3">
          <input
            value={newRole.name}
            onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
            className="rounded border px-3 py-2"
            style={{ borderColor: "var(--fifth)" }}
            placeholder="Role name (e.g., Auditor)"
          />
          <input
            value={newRole.description}
            onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
            className="rounded border px-3 py-2"
            style={{ borderColor: "var(--fifth)" }}
            placeholder="Description"
          />
          <button onClick={addRole} className="rounded border px-3 py-2" style={{ borderColor: "var(--primary)", color: "var(--secondary)" }}>Add Role</button>
        </div>
      </div>

      {/* Permissions matrix */}
      <div className="rounded-xl border bg-white shadow-sm p-5 overflow-x-auto" style={{ borderColor: "var(--fifth)" }}>
        <div className="text-sm font-medium mb-3" style={{ color: "var(--secondary)" }}>Permissions Matrix</div>
        <table className="w-full text-sm" style={{ color: "var(--secondary)" }}>
          <thead>
            <tr className="text-left">
              <th className="py-2 pr-4">Role</th>
              {allPermissions.map((p) => (
                <th key={p.key} className="py-2 px-2 whitespace-nowrap">{p.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="border-t" style={{ borderColor: "var(--fifth)" }}>
                <td className="py-2 pr-4">
                  <div className="font-medium">{role.name}</div>
                  <div className="text-xs" style={{ color: "var(--fourth)" }}>{role.description}</div>
                </td>
                {allPermissions.map((p) => (
                  <td key={p.key} className="py-2 px-2 text-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[color:var(--primary)]"
                      checked={!!role.permissions[p.key]}
                      onChange={() => togglePermission(role.id, p.key)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User assignments */}
      <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: "var(--fifth)" }}>
        <div className="text-sm font-medium mb-3" style={{ color: "var(--secondary)" }}>User Role Assignments</div>
        <table className="w-full text-sm" style={{ color: "var(--secondary)" }}>
          <thead>
            <tr className="text-left">
              <th className="py-2">User</th>
              <th>Email</th>
              <th>Role</th>
              <th>2FA</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {["Aisha", "Hamad", "Sara"].map((name, idx) => (
              <tr key={name} className="border-t" style={{ borderColor: "var(--fifth)" }}>
                <td className="py-2">{name}</td>
                <td>{name.toLowerCase()}@example.com</td>
                <td>
                  <select className="rounded border px-2 py-1" style={{ borderColor: "var(--fifth)" }}>
                    {roles.map((r) => (
                      <option key={r.id} value={r.id}>{r.name}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <label className="inline-flex items-center gap-2 text-xs">
                    <input type="checkbox" className="h-4 w-4 accent-[color:var(--primary)]" defaultChecked={idx !== 1} />
                    Enabled
                  </label>
                </td>
                <td className="space-x-2">
                  <button className="text-xs rounded border px-2 py-1" style={{ borderColor: "var(--fifth)", color: "var(--fourth)" }}>Reset Password</button>
                  <button className="text-xs rounded border px-2 py-1" style={{ borderColor: "var(--primary)", color: "var(--secondary)" }}>Save</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}


