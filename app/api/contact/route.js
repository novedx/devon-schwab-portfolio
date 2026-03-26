import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  // ── Configure your email provider here ──────────────────────────────────────
  //
  // Option A — Resend (recommended for Vercel):
  //   npm install resend
  //   const { Resend } = require('resend');
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: 'website@devonschwab.com',
  //     to: 'devonschwab@gmail.com',
  //     subject: `Portfolio contact from ${name}`,
  //     text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  //   });
  //
  // Option B — Nodemailer + Gmail:
  //   npm install nodemailer
  //   const nodemailer = require('nodemailer');
  //   const transporter = nodemailer.createTransport({ service: 'gmail',
  //     auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD } });
  //   await transporter.sendMail({ from: email, to: 'devonschwab@gmail.com',
  //     subject: `Portfolio contact from ${name}`, text: message });
  //
  // ────────────────────────────────────────────────────────────────────────────

  // Temporary: log to console until email is configured
  console.log('[Contact form]', { name, email, message });

  return NextResponse.json({ ok: true });
}
