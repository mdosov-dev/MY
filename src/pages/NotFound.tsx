import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <div>
      <SEO
        title="Page Not Found — Central Asia Mission"
        description="The page you are looking for could not be found. Please return to the homepage or contact us."
        path="/404"
      />
      <section className="min-h-[70vh] flex items-center justify-center bg-teal-800 text-sand-50">
        <div className="container-page text-center max-w-xl px-4">
          <p className="text-rust-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">Error 404</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium mb-6">
            Page Not Found
          </h1>
          <p className="text-sand-200/80 text-lg leading-relaxed mb-10">
            The page you are looking for may have been moved, renamed, or is no longer available.
            We apologize for the inconvenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border-2 border-sand-200 text-sand-50 font-medium tracking-wide transition-all duration-300 hover:bg-sand-50 hover:text-teal-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
