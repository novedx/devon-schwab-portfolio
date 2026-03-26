import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

export const metadata = {
  title: 'Bio — Devon Schwab',
  description: 'ACE Nominee. Emmy Honored. TV Editor with 10+ years at NBC\'s Saturday Night Live and Late Night With Seth Meyers.',
};

export default function BioPage() {
  return (
    <div className="pt-28 pb-24 px-6 md:px-10 max-w-[1100px] mx-auto">

      {/* Page label */}
      <FadeIn delay="1">
        <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-12">
          Bio
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-16 items-start">

        {/* ── Left: Photo ── */}
        <FadeIn delay="2">
          <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden">
            <Image
              src="https://static.wixstatic.com/media/e7518d_22be84f74852432eb263412b65b33972~mv2.png/v1/fill/w_1064,h_1904,al_r,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/e7518d_22be84f74852432eb263412b65b33972~mv2.png"
              alt="Devon Schwab with the Ghostbusters Ecto-1"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </FadeIn>

        {/* ── Right: Text ── */}
        <div className="flex flex-col gap-6">
          <FadeIn delay="1">
            <h2 className="text-xl md:text-2xl font-bold leading-snug tracking-tight text-white/90">
              ACE Nominee. Emmy Honored.<br />10+ Years at SNL.
            </h2>
          </FadeIn>

          <FadeIn delay="2">
            <div className="space-y-4 text-white/60 text-sm md:text-[15px] leading-relaxed">
              <p>
                Devon Schwab is an ACE Award-nominated, Emmy Honored film and television editor,
                producer, and visual artist based in New York City.
              </p>
              <p>
                Over more than a decade at NBC, Devon has been a key collaborator on two of
                television's most beloved late-night programs — <em>Saturday Night Live</em> and
                <em> Late Night With Seth Meyers</em> — cutting sketches, digital shorts, and
                original content that reaches millions of viewers each week.
              </p>
              <p>
                As Lead Editor on <em>The Amber Ruffin Show</em> (Peacock), Devon helmed the edit
                on 50+ episodes across three seasons, bringing a sharp comic sensibility and
                distinct visual voice to every cut.
              </p>
              <p>
                Devon's work spans comedy, narrative film, music video, documentary, and branded
                content. Fluent in Adobe Premiere, After Effects, Photoshop, and AVID Media
                Composer, Devon approaches every project as a storyteller first.
              </p>
              <p>
                Based in New York City.{' '}
                <span className="text-white/40 italic">Occasional Ghostbuster.</span>
              </p>
            </div>
          </FadeIn>

          {/* Credentials */}
          <FadeIn delay="3">
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                'ACE Award Nominee',
                'Emmy Honored',
                'Saturday Night Live',
                'Late Night With Seth Meyers',
                'The Amber Ruffin Show',
              ].map((cred) => (
                <span
                  key={cred}
                  className="text-[10px] tracking-[0.15em] uppercase text-white/40 border border-white/10 px-3 py-1.5"
                >
                  {cred}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* IMDb button */}
          <FadeIn delay="4">
            <div className="pt-2">
              <a
                href="https://www.imdb.com/name/nm1903222/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-white hover:border-white/50 transition-colors"
              >
                <span className="text-[#f5c518] font-black text-xs">IMDb</span>
                View Profile
                <svg
                  className="w-3 h-3 opacity-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
