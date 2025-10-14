"use client";

import { useMemo, useState } from "react";

type Advisor = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  languages: string[];
  specialties: string[];
  rating: number;
  sessions: number;
  status: "active" | "pending" | "rejected";
  bio?: string;
  documents?: { type: string; url: string }[];
};

const seedAdvisors: Advisor[] = [
  {
    id: "a1",
    name: "Ahmad Al-Mansoori",
    email: "ahmad@example.com",
    phone: "+971 50 111 2222",
    languages: ["Arabic", "English"],
    specialties: ["Manufacturing", "Energy"],
    rating: 4.9,
    sessions: 28,
    status: "active",
    bio: "15+ years advising SMEs on decarbonization and ESG reporting.",
  },
  {
    id: "a2",
    name: "Fatima Hassan",
    email: "fatima@example.com",
    phone: "+971 55 333 4444",
    languages: ["Arabic", "English"],
    specialties: ["Supply Chain", "Logistics"],
    rating: 4.8,
    sessions: 24,
    status: "active",
    bio: "Expert in Scope 3 measurement and supplier engagement.",
  },
  {
    id: "p3",
    name: "Khalid Ibrahim",
    email: "khalid@example.com",
    languages: ["English"],
    specialties: ["Retail"],
    rating: 0,
    sessions: 0,
    status: "pending",
    bio: "Retail sustainability and ESG disclosures consultant.",
    documents: [
      { type: "CV", url: "#" },
      { type: "Certification", url: "#" },
    ],
  },
];

export default function AdvisorManagementPage() {
  const [advisors, setAdvisors] = useState<Advisor[]>(seedAdvisors);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "pending" | "rejected">("all");
  const [editing, setEditing] = useState<Advisor | null>(null);

  const filtered = useMemo(() => {
    return advisors.filter((a) =>
      (filter === "all" || a.status === filter) &&
      (a.name.toLowerCase().includes(query.toLowerCase()) || a.specialties.join(",").toLowerCase().includes(query.toLowerCase()))
    );
  }, [advisors, query, filter]);

  const approve = (id: string) => setAdvisors((prev) => prev.map((a) => (a.id === id ? { ...a, status: "active" } : a)));
  const reject = (id: string) => setAdvisors((prev) => prev.map((a) => (a.id === id ? { ...a, status: "rejected" } : a)));

  const saveProfile = () => {
    if (!editing) return;
    setAdvisors((prev) => prev.map((a) => (a.id === editing.id ? editing : a)));
    setEditing(null);
  };

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold" style={{ color: "var(--fourth)" }}>Advisor Management</h2>

      {/* Controls */}
      <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: "var(--fifth)" }}>
        <div className="grid md:grid-cols-3 gap-3">
          <input value={query} onChange={(e) => setQuery(e.target.value)} className="rounded border px-3 py-2" style={{ borderColor: "var(--fifth)" }} placeholder="Search name or specialty" />
          <select value={filter} onChange={(e) => setFilter(e.target.value as any)} className="rounded border px-3 py-2" style={{ borderColor: "var(--fifth)" }}>
            <option value="all">All statuses</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
          <button onClick={() => setEditing({ id: `new-${Date.now()}`, name: "", email: "", languages: [], specialties: [], rating: 0, sessions: 0, status: "active" })} className="rounded border px-3 py-2" style={{ borderColor: 'var(--primary)', color: 'var(--secondary)' }}>Add Advisor</button>
        </div>
      </div>

      {/* List */}
      <div className="rounded-xl border bg-white shadow-sm p-5 overflow-x-auto" style={{ borderColor: "var(--fifth)" }}>
        <table className="w-full text-sm" style={{ color: "var(--secondary)" }}>
          <thead>
            <tr className="text-left">
              <th className="py-2">Name</th>
              <th>Email</th>
              <th>Languages</th>
              <th>Specialties</th>
              <th>Rating</th>
              <th>Sessions</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.id} className="border-t" style={{ borderColor: "var(--fifth)" }}>
                <td className="py-2">{a.name}</td>
                <td>{a.email}</td>
                <td>{a.languages.join(", ")}</td>
                <td>{a.specialties.join(", ")}</td>
                <td>{a.rating ? a.rating.toFixed(1) : "-"}</td>
                <td>{a.sessions}</td>
                <td className="capitalize">{a.status}</td>
                <td className="space-x-2">
                  <button className="text-xs underline" onClick={() => setEditing(a)}>Edit</button>
                  {a.status === "pending" && (
                    <>
                      <button className="text-xs rounded border px-2 py-1" style={{ borderColor: 'var(--primary)', color: 'var(--secondary)' }} onClick={() => approve(a.id)}>Approve</button>
                      <button className="text-xs rounded border px-2 py-1" style={{ borderColor: 'var(--fifth)', color: 'var(--fourth)' }} onClick={() => reject(a.id)}>Reject</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit drawer */}
      {editing && (
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: "var(--fifth)" }}>
          <div className="text-sm font-medium mb-3" style={{ color: "var(--secondary)" }}>Advisor Profile</div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} className="w-full rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} placeholder="Full name" />
              <input value={editing.email} onChange={(e) => setEditing({ ...editing, email: e.target.value })} className="w-full rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} placeholder="Email" />
              <input value={editing.phone || ''} onChange={(e) => setEditing({ ...editing, phone: e.target.value })} className="w-full rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} placeholder="Phone" />
              <textarea value={editing.bio || ''} onChange={(e) => setEditing({ ...editing, bio: e.target.value })} className="w-full rounded border px-3 py-2" rows={4} style={{ borderColor: 'var(--fifth)' }} placeholder="Short bio" />
            </div>
            <div className="space-y-3">
              <input value={editing.languages.join(', ')} onChange={(e) => setEditing({ ...editing, languages: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })} className="w-full rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} placeholder="Languages (comma separated)" />
              <input value={editing.specialties.join(', ')} onChange={(e) => setEditing({ ...editing, specialties: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })} className="w-full rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} placeholder="Specialties (comma separated)" />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1" style={{ color: 'var(--fourth)' }}>Rating</label>
                  <input type="number" value={editing.rating} onChange={(e) => setEditing({ ...editing, rating: Number(e.target.value) })} className="w-full rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} />
                </div>
                <div>
                  <label className="block text-xs mb-1" style={{ color: 'var(--fourth)' }}>Sessions</label>
                  <input type="number" value={editing.sessions} onChange={(e) => setEditing({ ...editing, sessions: Number(e.target.value) })} className="w-full rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} />
                </div>
              </div>
              <select value={editing.status} onChange={(e) => setEditing({ ...editing, status: e.target.value as Advisor['status'] })} className="w-full rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }}>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button onClick={saveProfile} className="h-10 px-4 rounded text-sm" style={{ backgroundColor: 'var(--primary)', color: '#161326' }}>Save Profile</button>
            <button onClick={() => setEditing(null)} className="h-10 px-4 rounded border text-sm" style={{ borderColor: 'var(--fifth)', color: 'var(--fourth)' }}>Cancel</button>
          </div>
        </div>
      )}
    </section>
  );
}


