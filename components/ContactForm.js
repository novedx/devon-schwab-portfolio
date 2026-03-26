'use client';

import { useState } from 'react';

const FIELD_BASE =
  'w-full bg-transparent border-b border-white/15 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/50 transition-colors';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus('success');
      e.target.reset();
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="py-12 text-center">
        <p className="text-2xl mb-3">✓</p>
        <p className="text-white/80 text-sm">Message sent. I'll be in touch soon.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-white/60 transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div>
        <label htmlFor="name" className="block text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className={FIELD_BASE}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          className={FIELD_BASE}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project..."
          className={`${FIELD_BASE} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-accent text-xs">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-white/70 hover:text-white transition-colors disabled:opacity-40"
      >
        <span>{status === 'sending' ? 'Sending…' : 'Send Message'}</span>
        <span className="block w-8 h-px bg-white/30 group-hover:w-14 group-hover:bg-white transition-all duration-300" />
      </button>
    </form>
  );
}
