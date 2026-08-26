import ContactForm from '@/components/ContactForm';
import FadeIn from '@/components/FadeIn';

export const metadata = {
  title: 'Contact — Devon Schwab',
  description: 'Get in touch with Devon Schwab — creative director and post-production producer based in NYC.',
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 px-6 md:px-10 max-w-[680px] mx-auto">

      <FadeIn delay="1">
        <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-12">
          Contact
        </p>
      </FadeIn>

      <FadeIn delay="2">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Let's work together.
        </h2>
      </FadeIn>

      <FadeIn delay="3">
        <p className="text-white/40 text-sm mb-2">
          Or reach out directly at{' '}
          <a
            href="mailto:devonschwab@gmail.com"
            className="text-white/70 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-colors"
          >
            devonschwab@gmail.com
          </a>
        </p>
      </FadeIn>

      <FadeIn delay="4">
        <div className="mt-12">
          <ContactForm />
        </div>
      </FadeIn>

    </div>
  );
}
