import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'

const SUPPORT_AREAS = [
  'School of Leadership',
  'Camp Ministry',
  'Social Outreach',
  'Literature Projects',
  'Church Strengthening',
  'Leadership Development',
  'Central Asia Mission and Training Center',
]

const SUGGESTED_AMOUNTS = [25, 50, 100, 250]

export default function Donate() {
  return (
    <div>
      <SEO
        title="Donate to Central Asia Mission"
        description="Your gift helps strengthen local churches and leaders across Central Asia through leadership training, discipleship, church strengthening, youth ministry, and compassionate outreach."
        path="/donate"
      />
      <PageHero
        title="Donate"
        subtitle="Your generosity helps strengthen local churches and leaders across Central Asia."
        image="/samarkand-bukhara/kalyan-3.jpg"
      />
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-page max-w-4xl">
          {/* Notice banner */}
          <div className="mb-10 bg-teal-50 border border-teal-200 rounded-xl p-5 flex items-start gap-3">
            <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-teal-700 text-sm leading-relaxed">
              <span className="font-semibold">Online giving will be available soon.</span>{' '}
              Donations are not currently processed through this website. To give today or learn
              about other ways to support this ministry, please{' '}
              <Link to="/contact" className="underline font-medium hover:text-teal-900">
                contact us about giving
              </Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left column: impact */}
            <div>
              <p className="section-eyebrow">Your Impact</p>
              <h2 className="text-2xl sm:text-3xl font-serif text-teal-800 mb-6 leading-snug">
                Together we can help cultivate a flourishing church in every place of Central Asia.
              </h2>
              <p className="text-teal-600 leading-relaxed mb-8">
                Your gift can help support leadership training, discipleship resources, church
                strengthening, youth ministry, compassionate outreach, and ministry travel.
                Every gift strengthens the indigenous Christian witness that is faithfully
                advancing the Gospel throughout Central Asia.
              </p>

              <div className="bg-white rounded-2xl border border-sand-200 p-7">
                <h3 className="text-lg font-serif text-teal-800 mb-4">Your generosity helps support</h3>
                <ul className="space-y-3">
                  {SUPPORT_AREAS.map((area) => (
                    <li key={area} className="flex items-start gap-3 text-teal-600">
                      <span className="text-rust-400 mt-0.5" aria-hidden>✦</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column: donation form (visual only) */}
            <div className="bg-teal-800 rounded-2xl p-8 sm:p-10 text-sand-50 lg:sticky lg:top-28">
              <h3 className="text-2xl font-serif font-medium mb-2">Give Today</h3>
              <p className="text-sand-200/80 text-sm mb-6">
                Choose a giving option and amount. This form is for preview only — online giving
                will be available soon.
              </p>

              {/* One-time / Monthly toggle (visual only) */}
              <div
                role="radiogroup"
                aria-label="Giving frequency"
                className="grid grid-cols-2 gap-2 mb-6 p-1 bg-teal-900/50 rounded-full"
              >
                <button
                  type="button"
                  role="radio"
                  aria-checked="true"
                  className="py-2.5 rounded-full bg-rust-500 text-white text-sm font-medium transition"
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked="false"
                  className="py-2.5 rounded-full text-sand-200 text-sm font-medium hover:bg-teal-700/60 transition"
                >
                  Monthly Partner
                </button>
              </div>

              {/* Suggested amounts (visual only) */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {SUGGESTED_AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className="bg-teal-700/60 hover:bg-rust-500 rounded-xl p-4 text-left transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span className="block font-serif text-2xl font-medium">${amount}</span>
                  </button>
                ))}
              </div>

              {/* Custom amount (visual only) */}
              <div className="mb-6">
                <label htmlFor="custom-amount" className="block text-sm text-sand-200/80 mb-2">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-200/60">$</span>
                  <input
                    id="custom-amount"
                    type="number"
                    min={1}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 rounded-lg bg-teal-900/40 border border-teal-600/50 text-sand-50 placeholder-sand-200/40 focus:outline-none focus:ring-2 focus:ring-rust-400 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Disabled payment button */}
              <button
                type="button"
                disabled
                className="w-full py-3.5 rounded-full bg-teal-600/50 text-sand-200/70 font-medium tracking-wide cursor-not-allowed"
              >
                Online Giving Coming Soon
              </button>
              <p className="text-sand-200/50 text-xs text-center mt-3">
                Donations are not yet processed through this website.
              </p>

              <div className="mt-8 pt-6 border-t border-teal-600/50">
                <p className="text-sand-200/80 text-sm mb-3">Prefer to give another way?</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sand-200 font-medium border-2 border-rust-400/60 rounded-full px-5 py-2.5 hover:bg-rust-500 hover:border-rust-500 hover:text-white transition text-sm"
                >
                  Contact Us About Giving
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Transparency section */}
          <div className="mt-12 bg-white rounded-2xl border border-sand-200 p-8">
            <h3 className="text-xl font-serif text-teal-800 mb-4">Our Commitment to Stewardship</h3>
            <p className="text-teal-600 leading-relaxed mb-4">
              Central Asia Mission seeks to use every gift responsibly and faithfully. We are
              committed to directing resources toward ministry activities that strengthen local
              churches and equip leaders across Central Asia. We also seek to communicate
              transparently about how gifts are used and the impact they have on the ground.
            </p>
            <p className="text-teal-600 leading-relaxed">
              If you have questions about how your gift may be used, or if you would like to
              designate your gift for a specific ministry area, please{' '}
              <Link to="/contact" className="text-rust-500 font-medium hover:text-rust-600 underline">
                contact us
              </Link>{' '}
              — we would be glad to talk with you.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
