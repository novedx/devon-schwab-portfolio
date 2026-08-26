'use client';

import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

// mode 'white'  -> white/transparent silhouette logo (dims at rest, brightens on hover)
// mode 'color'  -> kept in original color (badges/photos where flattening to white loses detail)
// frame: true   -> wrap in a subtle card, sized to the asset's real aspect ratio
// height        -> optional override of the default row height for this mark
const clients = [
  { name: 'NBC', src: '/logos/nbc-white.png', size: 'w-16', height: 'h-16', mode: 'white' },
  { name: 'Saturday Night Live', src: '/logos/snl-white.png', size: 'w-40', mode: 'white' },
  { name: 'Late Night with Seth Meyers', src: '/logos/late-night-seth-meyers-v2.png', size: 'w-56', mode: 'white' },
  { name: 'Broadway Video', src: '/logos/broadway-video-white.png', size: 'w-24', mode: 'white' },
  { name: 'A&E', src: '/logos/ae-white-clean.png', size: 'w-28', mode: 'white' },
  { name: 'HISTORY', src: '/logos/history-white.png', size: 'w-24', mode: 'white' },
  // { name: 'Comedians in Cars Getting Coffee', src: '/logos/ccc-white.png', size: 'w-36', mode: 'white' },
  { name: 'CBS Sports', src: '/logos/cbs-sports-white.png', size: 'w-48', mode: 'white' },
  { name: 'Framework Productions', src: '/logos/framework-white.png', size: 'w-44', mode: 'white' },
  // { name: 'Sethmaker Shoemeyers Productions', src: '/logos/sethmaker-silhouette.png', size: 'aspect-[680/348]', height: 'h-20', mode: 'white' },
  { name: 'Omnicom Group', src: '/logos/omnicom-white.png', size: 'w-48', mode: 'white' },
];

export default function ClientLogos() {
  return (
    <FadeIn>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10">
        {clients.map(({ name, src, size, mode, frame, height }) => (
          <div
            key={name}
            className={[
              'relative transition-all duration-300 ease-out',
              height || (mode === 'white' ? 'h-12' : 'h-16'),
              mode === 'white' ? 'opacity-60 hover:opacity-100' : 'opacity-70 hover:opacity-100',
              frame ? 'rounded-md border border-white/10 overflow-hidden bg-white/5' : '',
              size,
            ].join(' ')}
          >
            <Image src={src} alt={name} fill className="object-contain" sizes="220px" />
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
