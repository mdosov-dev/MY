import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'

export default function TermsOfUse() {
  return (
    <div>
      <SEO
        title="Terms of Use — Central Asia Mission"
        description="The terms and conditions governing the use of the Central Asia Mission website."
        path="/terms-of-use"
      />
      <PageHero
        title="Terms of Use"
        subtitle="The terms governing the use of this website."
        image="/samarkand-bukhara/kalyan-1.jpg"
      />
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-page max-w-3xl">
          <div className="space-y-6 text-teal-700 leading-relaxed">
            <p className="text-sm text-teal-500">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">Acceptance of Terms</h2>
            <p>
              By accessing and using the Central Asia Mission website, you agree to these Terms of
              Use. If you do not agree with any part of these terms, please discontinue use of this
              website.
            </p>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">Use of Content</h2>
            <p>
              All content on this website — including text, images, graphics, logos, and ministry
              materials — is the property of Central Asia Mission unless otherwise noted. You may
              view and download content for personal, non-commercial use. You may not reproduce,
              distribute, or use any content from this website for commercial purposes without
              prior written permission.
            </p>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">Contact Form</h2>
            <p>
              When you submit our contact form, you agree to provide accurate and truthful
              information. You are responsible for the content of your message. We reserve the
              right to respond to inquiries at our discretion and timeframe.
            </p>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">Donations</h2>
            <p>
              Online donations are not currently processed through this website. Any donation
              controls or suggested amounts displayed on this site are for informational purposes
              only. When online giving becomes available, additional terms and policies will be
              provided.
            </p>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">External Links</h2>
            <p>
              This website may contain links to external websites. We are not responsible for the
              content, privacy policies, or practices of any third-party websites.
            </p>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">Limitation of Liability</h2>
            <p>
              Central Asia Mission provides this website and its content on an &ldquo;as is&rdquo; basis.
              We make no warranties or representations about the accuracy, completeness, or
              reliability of any information on this site. To the fullest extent permitted by law,
              Central Asia Mission shall not be liable for any damages arising from the use of this
              website.
            </p>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">Changes to These Terms</h2>
            <p>
              We may update these Terms of Use from time to time. Any changes will be posted on
              this page with an updated revision date.
            </p>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">Contact Us</h2>
            <p>
              If you have questions about these Terms of Use, please{' '}
              <Link to="/contact" className="text-rust-500 underline hover:text-rust-600">contact us</Link>.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-sand-200 flex flex-wrap gap-4">
            <Link to="/" className="btn-secondary">Return Home</Link>
            <Link to="/privacy-policy" className="btn-primary">Privacy Policy</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
