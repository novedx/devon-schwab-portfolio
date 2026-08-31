import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import WorkGrid from '@/components/WorkGrid';
import { projects } from '@/components/projects';

export default function WorkPage() {
  return (
    <div className="pt-20 md:pt-24 pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">

      {/* ── Hero ── */}
      <section className="mb-6 md:mb-8">
        <FadeIn delay="1">
          <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-extrabold leading-[0.88] tracking-[-0.02em] uppercase text-white">
            Devon<br />Schwab
          </h1>
        </FadeIn>

        <FadeIn delay="2">
          <p className="mt-4 text-white/85 text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
            Creative Director &nbsp;/&nbsp; Post-Production Producer
          </p>
        </FadeIn>

        <FadeIn delay="3">
          <p className="mt-2 text-white/70 text-sm tracking-[0.15em] uppercase font-bold">
            ACE Award Nominee &nbsp;·&nbsp; Emmy Honored
          </p>
        </FadeIn>
      </section>

      {/* ── Capabilities ── */}
      <section className="mb-8 md:mb-10">
        <FadeIn>
          <div className="flex flex-wrap gap-3">
            {[
              'Creative Direction',
              'Post-Production Leadership',
              'Comedy & Narrative',
              'Rapid-Turnaround',
              'Live & Scripted Content',
            ].map((skill) => (
              <span
                key={skill}
                className="text-[10px] tracking-[0.15em] uppercase text-white/75 font-semibold border border-white/20 px-3 py-1.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Work Grid ── */}
      <section>
        <FadeIn>
          <p className="text-xs tracking-[0.25em] uppercase text-white/60 mb-8 font-semibold">
            Selected Work &nbsp;—&nbsp; TV, Brand &amp; Original Content
          </p>
        </FadeIn>
        <WorkGrid items={projects.filter((p) => p.featured)} />

        <FadeIn>
          <div className="mt-12 flex justify-center">
            <Link
              href="/additional-works"
              className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-white hover:border-white/50 transition-colors"
            >
              Additional Works
            </Link>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
