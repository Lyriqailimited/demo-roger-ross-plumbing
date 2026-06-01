import VoiceWidget from "@/components/VoiceWidget";

const SERVICES = [
  {
    title: "Emergency Plumbing",
    desc: "Burst pipes, water heater failures, sewage backup. Roger picks up and gets there fast — not next week, not tomorrow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Cast Iron & Copper Pipe",
    desc: "Roxborough houses were built with cast iron and copper. We know what we are looking at because we have been inside hundreds of them.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M6 3v18M18 3v18M6 8h12M6 16h12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Drain Stack Cleaning",
    desc: "Slow drains, backups, sewer smells. We clean and inspect the full stack — not just snake it and hope.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M12 2v6m0 0a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-6a4 4 0 0 1 4-4Z" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Water Heater Service",
    desc: "Repair or full replacement. No hot water at 6 AM? We make same-day water heater calls a priority.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M12 2C8 6 4 9.5 4 13a8 8 0 0 0 16 0c0-3.5-4-7-8-11Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18a4 4 0 0 0 4-4c0-2-2-4-4-6-2 2-4 4-4 6a4 4 0 0 0 4 4Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Bathroom Renovations",
    desc: "Gut jobs and fixture upgrades. We handle the plumbing right so nothing leaks six months from now.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M3 12h18M3 12v4a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-4M12 3v9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Heating & Boilers",
    desc: "Boiler repair, furnace work, radiator fixes. Philly winters do not wait, and neither do we.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M12 2l2 7h-4l2-7Zm0 0v3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="15" r="5" />
        <path d="M12 12v3l2 1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const TRUST_ITEMS = [
  { label: "Google Reviews", value: "463" },
  { label: "Star Rating", value: "5.0" },
  { label: "Years in Roxborough", value: "20" },
  { label: "PA Licenses", value: "2" },
];

const TESTIMONIALS = [
  {
    name: "Manayunk Homeowner",
    text: "Roger came out the same day. Found the issue in our 100-year-old cast iron stack that two other plumbers could not figure out. Fixed it right the first time.",
  },
  {
    name: "Roxborough Family",
    text: "We have used Roger for everything — hot water heater, bathroom reno, emergency pipe burst at 2 AM. He answers his phone. He shows up. He does not gouge you.",
  },
  {
    name: "East Falls Landlord",
    text: "Roger handles all the plumbing in my 30-unit building. Reliable, fair pricing, and his crew actually cleans up after themselves. Hard to find that.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ── Hero ── */}
      <section className="color-bends-bg relative flex min-h-[92vh] flex-col items-center justify-center px-6 text-center">
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-copper-400/20 bg-copper-400/5 px-4 py-1.5 text-sm text-copper-300 opacity-0 animate-fade-up">
            <span className="inline-block h-2 w-2 rounded-full bg-copper-400 pulse-dot" />
            Roxborough &middot; Manayunk &middot; NW Philadelphia
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-white opacity-0 animate-fade-up-delay-1 sm:text-7xl lg:text-8xl">
            Your Neighbor.{" "}
            <span className="copper-text">Your Plumber.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream-300/50 opacity-0 animate-fade-up-delay-2 sm:text-xl">
            Roger grew up on Lauriston Street. He has been fixing the pipes in
            these old Roxborough and Manayunk houses for nearly 20 years. 463 of
            your neighbors gave him 5 stars.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 opacity-0 animate-fade-up-delay-3 sm:flex-row sm:justify-center">
            <a
              href="tel:2154822969"
              className="group inline-flex items-center gap-3 rounded-full bg-copper-500 px-8 py-4 font-semibold text-white transition-all hover:bg-copper-400 hover:shadow-lg hover:shadow-copper-500/30"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (215) 482-2969
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 font-medium text-white/70 transition-all hover:border-white/25 hover:text-white"
            >
              What We Fix
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M12 5v14m0 0l-6-6m6 6l6-6" />
              </svg>
            </a>
          </div>

          <div className="mt-14 flex items-center justify-center gap-1 opacity-0 animate-fade-up-delay-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-copper-400">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-white/40">5.0 from 463 reviews on Google</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ross-950 to-transparent" />
      </section>

      {/* ── Trust Bar ── */}
      <section className="relative z-10 -mt-16 px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="card-glass flex flex-col items-center px-4 py-6 text-center"
            >
              <span className="font-display text-3xl font-bold text-copper-400">
                {item.value}
              </span>
              <span className="mt-1 text-xs uppercase tracking-widest text-white/40">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="relative z-10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-copper-400">
              What We Fix
            </p>
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
              We know these houses. We built careers inside them.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/40">
              Cast iron, copper, old stacks, radiator pipes — the homes in Roxborough
              and Manayunk were not built for generic plumbers. Roger has been doing
              this since before the neighborhood was trendy.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="card-glass group px-6 py-7 transition-all hover:border-copper-400/20 hover:bg-ross-800/60"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-copper-400/10 text-copper-400 transition-colors group-hover:bg-copper-400/20">
                  {service.icon}
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/40">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* ── Trust / Proof ── */}
      <section className="relative z-10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-copper-400">
              Why NW Philly Trusts Roger
            </p>
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
              463 neighbors. Perfect score. Zero excuses.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card-glass px-7 py-8">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-copper-400">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-5 text-sm leading-relaxed text-white/60 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/30">Google Review</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Licensed: PA #37351 & #4735",
              "Roger answers personally",
              "Mon-Fri 8am-4pm, Sat 8am-Noon",
              "Free estimates for NW Philly",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-ross-900/40 px-5 py-4"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 shrink-0 text-copper-400">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-white/60">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* ── AI Receptionist ── */}
      <section className="relative z-10 px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="card-glass overflow-hidden lg:grid lg:grid-cols-5 lg:gap-0">
            <div className="flex flex-col justify-center px-8 py-10 lg:col-span-3 lg:px-12 lg:py-14">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-copper-400">
                New: AI Voice Receptionist
              </p>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Pipe burst at midnight?{" "}
                <span className="copper-text">We still answer.</span>
              </h2>
              <p className="mt-4 text-white/50 leading-relaxed">
                Our AI receptionist picks up 24/7 — no hold music, no call center,
                no phone tag. Describe your problem, and it books Roger for the next
                available slot or escalates emergencies directly to his cell.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Answers in seconds, any hour",
                  "Detects emergencies and calls Roger directly",
                  "Books your appointment on the spot",
                  "Knows Roxborough plumbing inside and out",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-copper-400">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center bg-ross-800/40 px-8 py-10 lg:col-span-2">
              <div className="animate-breathe rounded-2xl border border-copper-400/20 bg-ross-950/60 p-8 text-center ross-glow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-copper-400/10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-copper-400">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" strokeLinecap="round" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" strokeLinecap="round" />
                    <line x1="12" x2="12" y1="19" y2="22" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="font-display text-lg font-semibold text-white">Try it now</p>
                <p className="mt-1 text-xs text-white/40">
                  Tap the blue button in the corner
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* ── CTA / Booking ── */}
      <section className="color-bends-bg relative z-10 px-6 py-28">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            You are not calling a call center.{" "}
            <span className="copper-text">Roger picks up.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/50">
            Nearly 20 years in Roxborough. 463 five-star reviews. Two state licenses.
            One guy who actually answers his phone.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:2154822969"
              className="inline-flex items-center gap-3 rounded-full bg-copper-500 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-copper-400 hover:shadow-lg hover:shadow-copper-500/30"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call (215) 482-2969
            </a>
          </div>

          <p className="mt-6 text-sm text-white/30">
            4260 Manayunk Ave, Philadelphia PA 19128 &middot; Mon-Fri 8am-4pm &middot; Sat 8am-Noon
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/5 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-lg font-semibold text-white">
              Roger Ross Plumbing &amp; Heating, Inc.
            </p>
            <p className="mt-1 text-sm text-white/30">
              4260 Manayunk Ave, Philadelphia PA 19128 &middot; Roxborough since day one
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 sm:items-end">
            <a
              href="tel:2154822969"
              className="text-sm font-medium text-copper-400 transition-colors hover:text-copper-300"
            >
              (215) 482-2969
            </a>
            <a
              href="mailto:plumbing.ross@gmail.com"
              className="text-sm text-white/30 transition-colors hover:text-white/50"
            >
              plumbing.ross@gmail.com
            </a>
            <p className="text-xs text-white/20">
              PA License #37351 &middot; PA License #4735 &middot; Licensed &middot; Insured
            </p>
          </div>
        </div>
      </footer>

      <VoiceWidget />
    </main>
  );
}
