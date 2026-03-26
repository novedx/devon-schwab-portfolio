'use client';

import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

// YouTube thumbnail helper — hqdefault always exists (letterboxed; object-cover crops bars)
const yt = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

// NOTE: The Vimeo URL (310215939) is titled "Bang.Bang" on Vimeo,
// but it was scraped as "White Savior" on the current site. If the hover
// titles look wrong, swap the `url` values for White Savior and Bang.Bang below.
const projects = [
  {
    title: 'Seth and Sabrina Carpenter Go Day Drinking',
    role: 'Editor',
    url: 'https://www.youtube.com/watch?v=GLq-fAxFUfQ',
    thumb: yt('GLq-fAxFUfQ'),
  },
  {
    title: 'Backstage Pitch',
    role: 'Editor',
    url: 'https://youtu.be/b-ovnCo4DUw',
    thumb: yt('b-ovnCo4DUw'),
  },
  {
    title: 'Sarah News',
    role: 'Animator — Opening Graphics Package',
    url: 'https://youtu.be/dxgQ5FXqEps',
    thumb: yt('dxgQ5FXqEps'),
  },
  {
    title: 'Larry David Joins the Late Night Writing Staff',
    role: 'Editor',
    url: 'https://www.youtube.com/watch?v=CW8z0jeCoJo',
    thumb: yt('CW8z0jeCoJo'),
  },
  {
    title: 'Jon Snow Attends A Dinner Party',
    role: 'Editor',
    url: 'https://youtu.be/BabsgCQhpu4',
    thumb: yt('BabsgCQhpu4'),
  },
  {
    title: 'SNL The Kids feat. Jim Carrey',
    role: 'Editor',
    url: 'https://youtu.be/f3R_elqYq-0',
    thumb: yt('f3R_elqYq-0'),
  },
  {
    title: 'White Savior',
    role: 'Editor',
    url: 'https://youtu.be/T_RTnuJvg6U',
    thumb: yt('T_RTnuJvg6U'),
  },
  {
    title: 'Anne Hathaway: The Last Scene of the Romantic Comedy',
    role: 'Editor',
    url: 'https://youtu.be/diD68gEntPI',
    thumb: yt('diD68gEntPI'),
  },
  {
    title: 'Office Lightsaber feat. Andy Samberg',
    role: 'Editor',
    url: 'https://youtu.be/pJzutGCEr3g',
    thumb: yt('pJzutGCEr3g'),
  },
  {
    title: 'Newspaper Movie',
    role: 'Editor',
    url: 'https://www.youtube.com/watch?v=A3SyKtmr7bs',
    thumb: yt('A3SyKtmr7bs'),
  },
  {
    title: 'How Do We Talk About Mass Shootings if They Always Happen?: Decade Edition',
    role: 'Editor / Post Production Lead',
    url: 'https://www.youtube.com/watch?v=dCWTFAIN-O0',
    thumb: yt('dCWTFAIN-O0'),
  },
  {
    title: 'Bang.Bang',
    role: 'Editor',
    url: 'https://vimeo.com/310215939',
    thumb: 'https://i.vimeocdn.com/video/757832937-22dcc6a53ef6fe4a13d5bca3396808010f7d8b34bbf8d6898d11a35123b44215-d_640?region=us',
  },
];

export default function WorkGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
      {projects.map((project, i) => (
        <FadeIn key={project.title} delay={String((i % 4) + 1)}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden bg-zinc-900 aspect-video"
            aria-label={`${project.title} — ${project.role}`}
          >
            {/* Thumbnail */}
            <Image
              src={project.thumb}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/75 transition-all duration-300 ease-out" />

            {/* Title + Role — revealed on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <p className="text-white text-sm md:text-base font-semibold text-center leading-snug tracking-tight">
                {project.title}
              </p>
              <p className="mt-2 text-white/50 text-[11px] tracking-[0.15em] uppercase text-center">
                {project.role}
              </p>
            </div>

          </a>
        </FadeIn>
      ))}
    </div>
  );
}
