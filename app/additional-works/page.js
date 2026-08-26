import FadeIn from '@/components/FadeIn';
import WorkGrid from '@/components/WorkGrid';
import { projects } from '@/components/projects';

export const metadata = {
  title: 'Additional Works — Devon Schwab',
  description: 'More editing and post-production work from Devon Schwab.',
};

export default function AdditionalWorksPage() {
  const archive = projects.filter((p) => !p.featured);

  return (
    <div className="pt-28 pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">

      <FadeIn delay="1">
        <h1 className="font-display text-3xl md:text-5xl font-extrabold uppercase text-white mb-2">
          Additional Works
        </h1>
        <p className="text-white/40 text-sm mb-10 max-w-xl">
          A few more selects from Devon's post-production work at NBC and beyond.
        </p>
      </FadeIn>

      <FadeIn delay="2">
        <WorkGrid items={archive} />
      </FadeIn>

    </div>
  );
}
