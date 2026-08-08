import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import { supabase } from '../lib/supabase'
import type { ContactSubmission } from '../lib/types'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function Contact() {
  const [form, setForm] = useState<ContactSubmission>({
    name: '',
    email: '',
    country: '',
    church_or_organization: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const validate = (): boolean => {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.trim()) {
      e.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) {
      e.message = 'Please enter a message.'
    } else if (form.message.trim().length < 10) {
      e.message = 'Your message should be at least 10 characters.'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    setErrorMsg('')
    const { error } = await supabase.from('contact_submissions').insert({
      name: form.name,
      email: form.email,
      country: form.country || null,
      church_or_organization: form.church_or_organization || null,
      message: form.message,
    })
    if (error) {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or email us directly.')
    } else {
      setStatus('success')
      setForm({ name: '', email: '', country: '', church_or_organization: '', message: '' })
    }
  }

  return (
    <div>
      <SEO
        title="Contact Central Asia Mission"
        description="Get in touch with Central Asia Mission to learn about partnership, prayer, ministry projects, or our work across Central Asia."
        path="/contact"
      />
      <PageHero
        title="Contact"
        subtitle="We would love to hear from you."
        image="/samarkand-bukhara/kalyan-9.jpg"
      />
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-page max-w-2xl">
          <div className="mb-10">
            <p className="text-teal-700 leading-relaxed text-lg">
              Whether you are interested in partnership, prayer, supporting a ministry project, or
              learning more about our work, please get in touch.
            </p>
          </div>

          {status === 'success' && (
            <div
              role="status"
              aria-live="polite"
              className="mb-8 bg-teal-50 border border-teal-200 rounded-xl p-6 text-teal-700"
            >
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold mb-1">Thank you for reaching out!</p>
                  <p className="text-sm">Your message has been received. We will be in touch with you soon.</p>
                </div>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div
              role="alert"
              aria-live="assertive"
              className="mb-8 bg-rust-50 border border-rust-200 rounded-xl p-6 text-rust-700"
            >
              <p className="font-semibold mb-1">Unable to send your message.</p>
              <p className="text-sm">{errorMsg}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl border border-sand-200 p-8 shadow-sm space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-teal-700 mb-1.5">
                Name <span className="text-rust-500" aria-hidden>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className={`input-field ${errors.name ? 'border-rust-400 ring-1 ring-rust-300' : ''}`}
                placeholder="Your full name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-rust-500 text-sm mt-1.5" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-teal-700 mb-1.5">
                Email <span className="text-rust-500" aria-hidden>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={`input-field ${errors.email ? 'border-rust-400 ring-1 ring-rust-300' : ''}`}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-rust-500 text-sm mt-1.5" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-teal-700 mb-1.5">
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                value={form.country}
                onChange={handleChange}
                className="input-field"
                placeholder="Your country"
              />
            </div>

            <div>
              <label htmlFor="church_or_organization" className="block text-sm font-medium text-teal-700 mb-1.5">
                Church / Organization
              </label>
              <input
                id="church_or_organization"
                name="church_or_organization"
                type="text"
                value={form.church_or_organization}
                onChange={handleChange}
                className="input-field"
                placeholder="Your church or organization (optional)"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-teal-700 mb-1.5">
                Message <span className="text-rust-500" aria-hidden>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`input-field resize-none ${errors.message ? 'border-rust-400 ring-1 ring-rust-300' : ''}`}
                placeholder="How can we help you? Share your interest in partnership, prayer, or ministry projects."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-rust-500 text-sm mt-1.5" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

          <p className="mt-6 text-sm text-teal-500 leading-relaxed">
            <svg className="inline w-4 h-4 mr-1 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your privacy matters. The information you submit through this form — including your
            name, email, country, church or organization, and message — is used solely to respond
            to your inquiry. We do not share your contact information with third parties. See our{' '}
            <Link to="/privacy-policy" className="underline hover:text-teal-700">Privacy Policy</Link>{' '}
            for more details.
          </p>
        </div>
      </section>
    </div>
  )
}
