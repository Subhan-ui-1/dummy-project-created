"use client";

import { useState } from "react";
import Image from "next/image";

const modules = [
  '1. Introduction to Carbon',
  '2. Scope 1 & 2 Emissions',
  '3. Measurement Tools',
  '4. Scope 3 Emissions',
  '5. Reporting Standards',
  '6. Final Assessment',
];

export default function CourseContentPage() {
  const [activeIdx, setActiveIdx] = useState(3);
  const [language, setLanguage] = useState('English');

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold" style={{ color: 'var(--secondary)' }}>MODULE 5: Course Content — Carbon Accounting Fundamentals</div>
        <div className="flex items-center gap-2 text-xs">
          <select value={language} onChange={(e)=>setLanguage(e.target.value)} className="h-8 rounded-lg border px-2" style={{ borderColor: 'var(--fifth)', color: 'var(--secondary)' }}>
            <option>English</option>
            <option>Arabic</option>
          </select>
          <span className="rounded px-2 py-1" style={{ backgroundColor: '#EEF2FF', color: 'var(--secondary)' }}>Progress: 56%</span>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[280px_1fr_280px]">
        {/* Left - mature, editable list */}
        <aside className="rounded-lg border bg-white p-3 space-y-2 text-sm" style={{ borderColor: 'var(--fifth)', color: 'var(--secondary)' }}>
          {modules.map((l, i) => (
            <button key={l} onClick={()=>setActiveIdx(i)} className={`w-full text-left rounded px-3 py-2 transition-colors ${activeIdx===i? 'bg-[color:var(--primary)]/20' : 'hover:bg-[color:var(--primary)]/10'}`}>
              <div className="flex items-center justify-between">
                <span>{l}</span>
                {i < 2 && <span className="text-[10px]" style={{ color: 'var(--fourth)' }}>✓</span>}
              </div>
              {activeIdx===i && (
                <div className="mt-1 text-[10px]" style={{ color: 'var(--fourth)' }}>Duration: 12:45 • Language: {language}</div>
              )}
            </button>
          ))}
        </aside>

        {/* Main content */}
        <main className="space-y-4">
          <div className="aspect-video w-full rounded-lg bg-black/90 flex items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-white/90 flex items-center justify-center text-2xl" style={{ color: 'var(--secondary)' }}>▶</div>
          </div>
          <div className="space-y-3 text-sm" style={{ color: 'var(--secondary)' }}>
            <div className="font-medium">Module Summary</div>
            <p>
              Scope 3 emissions are indirect emissions occurring across your value chain and are often the largest share of a company&apos;s carbon footprint.
            </p>
            <div className="text-xs" style={{ color: 'var(--fourth)' }}>Key Topics Covered:</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>15 categories of Scope 3 emissions</li>
              <li>Data collection strategies</li>
              <li>Calculation methodologies</li>
              <li>Common challenges and solutions</li>
              <li>Reporting requirements under GRI and ISSB</li>
            </ul>
          </div>
          <div className="rounded-lg border p-3 text-sm" style={{ borderColor: 'var(--fifth)', color: 'var(--secondary)' }}>
            <div className="font-medium mb-2">Supplementary Resources</div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded border px-2 py-1" style={{ borderColor: 'var(--fifth)' }}>Scope 3 Calculation Template (Excel)</span>
              <span className="rounded border px-2 py-1" style={{ borderColor: 'var(--fifth)' }}>Supply Chain Questionnaire</span>
              <span className="rounded border px-2 py-1" style={{ borderColor: 'var(--fifth)' }}>Case Study: Manufacturing</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button className="h-9 px-4 rounded-lg border text-sm" style={{ borderColor: 'var(--fifth)', color: 'var(--fourth)' }}>← Previous</button>
            <div className="flex gap-2">
              <button className="h-9 px-4 rounded-lg text-sm" style={{ backgroundColor: 'var(--primary)', color: '#161326' }}>Mark Complete</button>
              <button className="h-9 px-4 rounded-lg border text-sm" style={{ borderColor: 'var(--primary)', color: 'var(--secondary)' }}>Next →</button>
            </div>
          </div>
        </main>

        {/* Right - course image */}
        <aside className="rounded-lg border bg-white p-4 h-fit" style={{ borderColor: 'var(--fifth)' }}>
          <div className="text-sm font-medium" style={{ color: 'var(--secondary)' }}>Course Visual</div>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Online_learning.jpg/320px-Online_learning.jpg"
            alt="Course illustration"
            width={280}
            height={180}
            className="mt-3 rounded-md border"
            style={{ borderColor: 'var(--fifth)' }}
          />
          <div className="mt-2 text-[11px]" style={{ color: 'var(--fourth)' }}>Illustrative image for learning content (replace with brand asset anytime).</div>
        </aside>
      </div>
    </section>
  );
}


