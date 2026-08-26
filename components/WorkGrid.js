'use client';

import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import { projects } from '@/components/projects';

export default function WorkGrid({ items }) {
  const list = items || projects;
  const isOdd = list.length % 2 === 1;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-8 md:gap-x-4 md:gap-y-10">
      {list.map((project, i) => {
        const isLastOdd = isOdd && i === list.length - 1;
        return (
          <FadeIn
            key={project.title}
            delay={String((i % 4) + 1)}
            className={isLastOdd ? 'sm:col-span-2' : ''}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                'group block',
                isLastOdd ? 'sm:mx-auto sm:max-w-[calc(50%-0.375rem)] md:max-w-[calc(50%-0.5rem)]' : '',
              ].join(' ')}
              aria-label={`${project.title} — ${project.role}`}
            >
              <div className="relative overflow-hidden bg-[#11162a] aspect-video">
                <Image
                  src={project.thumb}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300 ease-out" />
              </div>

              {/* Title + role — always visible */}
              <div className="pt-3">
                <p className="text-white/90 text-sm md:text-[15px] font-semibold leading-snug tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                </p>
                <p className="mt-1 text-white/40 text-[11px] tracking-[0.15em] uppercase">
                  {project.role}
                </p>
              </div>
            </a>
          </FadeIn>
        );
      })}
    </div>
  );
}
