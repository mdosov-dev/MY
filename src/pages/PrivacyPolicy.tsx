import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'

export default function PrivacyPolicy() {
  return (
    <div>
      <SEO
        title="Privacy Policy — Central Asia Mission"
        description="How Central Asia Mission collects, uses, and protects information submitted through our website."
        path="/privacy-policy"
      />
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
        image="/samarkand-bukhara/kalyan-16.jpg"
      />
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-page max-w-3xl">
          <div className="space-y-6 text-teal-700 leading-relaxed">
            <p className="text-sm text-teal-500">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">Overview</h2>
            <p>
              Central Asia Mission (&ldquo;CAM,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your
              privacy and is committed to protecting the personal information you share with us
              through this website. This Privacy Policy explains what information we collect, how
              we use it, and the choices you have.
            </p>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">Information We Collect</h2>
            <h3 className="text-lg font-serif text-teal-700 mt-4">Contact Form Submissions</h3>
            <p>
              When you submit our contact form, we collect the following information you provide
              directly to us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your country (if provided)</li>
              <li>Your church or organization (if provided)</li>
              <li>Your message</li>
            </ul>
            <p>
              This information is submitted voluntarily and is used solely to respond to your
              inquiry, prayer request, partnership interest, or other communication.
            </p>

            <h3 className="text-lg font-serif text-teal-700 mt-4">Automatically Collected Information</h3>
            <p>
              Like most websites, our site may collect basic technical information such as browser
              type, device type, and pages visited. We do not use this information to identify
              individual users.
            </p>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">How We Use Your Information</h2>
            <p>We use the information collected to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiry or message</li>
              <li>Provide information about partnership, prayer, or ministry opportunities</li>
              <li>Communicate with you about matters related to your submission</li>
              <li>Improve our website and ministry resources</li>
            </ul>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">How We Protect Your Information</h2>
            <p>
              We take reasonable measures to protect the information you submit. Contact form
              submissions are stored securely and accessible only to authorized members of our
              team. We do not sell, rent, or share your contact information with third parties for
              marketing purposes.
            </p>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">Cookies and Analytics</h2>
            <p>
              Our website does not use advertising cookies or third-party tracking cookies. We may
              use basic analytics to understand how visitors use our site, but we do not use this
              information to identify individuals.
            </p>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">Your Choices</h2>
            <p>
              You are not required to provide any information through our website. If you submit
              our contact form, you provide your information voluntarily. If you wish to update or
              remove your submitted information, please{' '}
              <Link to="/contact" className="text-rust-500 underline hover:text-rust-600">contact us</Link>.
            </p>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">Children's Privacy</h2>
            <p>
              Our website is not directed toward children, and we do not knowingly collect personal
              information from children under the age of 13.
            </p>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with an updated revision date.
            </p>

            <h2 className="text-2xl font-serif text-teal-800 mt-8">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how your information is handled,
              please{' '}
              <Link to="/contact" className="text-rust-500 underline hover:text-rust-600">contact us</Link>{' '}
              — we would be glad to help.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-sand-200 flex flex-wrap gap-4">
            <Link to="/" className="btn-secondary">Return Home</Link>
            <Link to="/terms-of-use" className="btn-primary">Terms of Use</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
