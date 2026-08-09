import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-sand-100 pt-16 pb-8 mt-20">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-14 h-14 rounded-lg bg-teal-800 flex items-center justify-center shadow-sm"
                aria-hidden
              >
                <span className="font-serif text-lg font-bold tracking-wider text-sand-50">CAM</span>
              </div>
              <span className="font-serif text-xl font-semibold text-sand-50">Central Asia Mission</span>
            </div>
            <p className="text-sand-200/80 text-sm leading-relaxed max-w-md">
              Strengthening and equipping local churches and leaders across Central Asia through
              discipleship, leadership development, contextual mission, and compassionate service.
            </p>
            <p className="mt-4 font-serif text-lg text-sand-200 italic">
              "A flourishing church in every place of Central Asia, embodying Jesus' love for every Central Asian person."
            </p>
          </div>

          <div>
            <h4 className="text-sand-50 font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about/history" className="text-sand-200/80 hover:text-sand-50 transition">About Us</Link></li>
              <li><Link to="/where-we-work/why-central-asia" className="text-sand-200/80 hover:text-sand-50 transition">Where We Work</Link></li>
              <li><Link to="/what-we-do/school-of-leadership" className="text-sand-200/80 hover:text-sand-50 transition">What We Do</Link></li>
              <li><Link to="/stories" className="text-sand-200/80 hover:text-sand-50 transition">Stories</Link></li>
              <li><Link to="/about/people" className="text-sand-200/80 hover:text-sand-50 transition">Our People</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sand-50 font-semibold mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/partner" className="text-sand-200/80 hover:text-sand-50 transition">Partner With Us</Link></li>
              <li><Link to="/donate" className="text-sand-200/80 hover:text-sand-50 transition">Donate</Link></li>
              <li><Link to="/contact" className="text-sand-200/80 hover:text-sand-50 transition">Contact</Link></li>
            </ul>
            <h4 className="text-sand-50 font-semibold mb-4 mt-6 text-sm uppercase tracking-wider">Where We Work</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/where-we-work/uzbekistan" className="text-sand-200/80 hover:text-sand-50 transition">Uzbekistan</Link></li>
              <li><Link to="/where-we-work/kazakhstan" className="text-sand-200/80 hover:text-sand-50 transition">Kazakhstan</Link></li>
              <li><Link to="/where-we-work/kyrgyzstan" className="text-sand-200/80 hover:text-sand-50 transition">Kyrgyzstan</Link></li>
              <li><Link to="/where-we-work/tajikistan" className="text-sand-200/80 hover:text-sand-50 transition">Tajikistan</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-700/50 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sand-200/60 text-xs">
            © {new Date().getFullYear()} Central Asia Mission. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <Link to="/privacy-policy" className="text-sand-200/60 hover:text-sand-50 transition">Privacy Policy</Link>
            <Link to="/terms-of-use" className="text-sand-200/60 hover:text-sand-50 transition">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
