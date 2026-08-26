import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import ClientLogos from '@/components/ClientLogos';

export const metadata = {
  title: 'Bio — Devon Schwab',
  description: 'ACE Nominee. Emmy Honored. Creative Director and Post-Production Producer with 10+ years at NBC\'s Saturday Night Live and Late Night With Seth Meyers.',
};

export default function BioPage() {
  return (
    <div className="pt-40 pb-24 px-6 md:px-10 max-w-[1100px] mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-16 items-start">

        {/* ── Left: Photo ── */}
        <FadeIn delay="2">
          <div className="relative aspect-[3/4] bg-[#11162a] overflow-hidden">
            <Image
              src="/photos/devon-editbay.jpg"
              alt="Devon Schwab at the edit bay, cutting Late Night with Seth Meyers"
              fill
              className="object-cover object-top grayscale"
              priority
            />
          </div>
        </FadeIn>

        {/* ── Right: Text ── */}
        <div className="flex flex-col gap-6">
          <FadeIn delay="1">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold leading-snug tracking-tight text-white text-center md:text-left">
              ACE Nominee. Emmy Honored.<br />10+ Years at SNL.
            </h2>
          </FadeIn>

          <FadeIn delay="2">
            <div className="space-y-4 text-white/60 text-sm md:text-[15px] leading-relaxed">
              <p>
                Devon Schwab is an ACE Award-nominated, Emmy Honored creative director and
                post-production producer based in New York City.
              </p>
              <p>
                Over more than a decade at NBC, Devon has been a key collaborator on two of
                television's most beloved late-night programs: <em>Saturday Night Live</em> and
                <em> Late Night With Seth Meyers</em>. On most pieces, especially at{' '}
                <em>Late Night</em>, his involvement starts well before the cameras roll, shaping
                structure, selects, and pacing alongside writers and producers. It carries
                through to delivery, often finishing the cut hours, sometimes minutes, before air
                on content that reaches millions of viewers each week.
              </p>
              <p>
                As Post Production Lead on <em>The Amber Ruffin Show</em> (Peacock), Devon led the show's editorial voice across 50+ episodes and three seasons,
                translating a room full of ideas into a sharp, consistent comic sensibility,
                night after night.
              </p>
              <p>
                Devon's work spans comedy, narrative film, music video, documentary, and branded
                content. More recently, he's stepped into producing and creative-direction work,
                leading small cross-functional teams of graphic artists, engineers, and editors
                from concept through delivery. He's now focused on bringing that same sharp
                editorial judgment and creative leadership to producer and creative director
                roles in network television, in-house brand teams, and agencies alike.
              </p>
              <p>
                Based in New York City.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Clients */}
      <div className="pt-20 max-w-[900px] mx-auto text-center">
        <FadeIn delay="3">
          <p className="inline-block font-display text-lg md:text-xl tracking-[0.15em] uppercase text-white/80 font-semibold border border-white/20 px-6 py-2 mb-10">
            Clients
          </p>
        </FadeIn>
        <ClientLogos />
      </div>

      {/* IMDb button */}
      <FadeIn delay="4">
        <div className="pt-12 flex justify-center">
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
  );
}
