import FadeIn from '@/components/FadeIn';
import WorkGrid from '@/components/WorkGrid';

export default function WorkPage() {
  return (
    <div className="pt-28 pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">

      {/* ── Hero ── */}
      <section className="mb-20 md:mb-28">
        <FadeIn delay="1">
          <h1 className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.9] tracking-[-0.03em] uppercase text-white">
            Devon<br />Schwab
          </h1>
        </FadeIn>

        <FadeIn delay="2">
          <p className="mt-6 text-white/50 text-sm md:text-base tracking-[0.2em] uppercase">
            Editor &nbsp;/&nbsp; Producer &nbsp;/&nbsp; Filmmaker &nbsp;/&nbsp; Visual Artist
          </p>
        </FadeIn>

        <FadeIn delay="3">
          <p className="mt-3 text-white/30 text-xs tracking-[0.15em] uppercase">
            ACE Award Nominee &nbsp;·&nbsp; Emmy Honored
          </p>
        </FadeIn>
      </section>

      {/* ── Work Grid ── */}
      <section>
        <FadeIn>
          <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-8">
            Selected Work
          </p>
        </FadeIn>
        <WorkGrid />
      </section>

    </div>
  );
}
