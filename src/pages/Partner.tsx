import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'

const WAYS = [
  { title: 'Prayer', desc: 'Pray faithfully for local believers, churches, and leaders across Central Asia as they advance the Gospel in challenging contexts.' },
  { title: 'Financial Support', desc: 'Give generously to sustain leadership training, camps, social outreach, literature, and church strengthening.' },
  { title: 'Ministry Collaboration', desc: 'Partner with us in training, resource development, and shared initiatives that strengthen the local church.' },
  { title: 'Training Opportunities', desc: 'Contribute your expertise through teaching, mentoring, and equipping leaders within the region.' },
  { title: 'Strategic Partnerships', desc: 'Explore long-term partnerships between your church or organization and Central Asian ministries.' },
]

export default function Partner() {
  return (
    <div>
      <SEO
        title="Partner With Us — Central Asia Mission"
        description="Partner with Central Asia Mission through prayer, financial support, ministry collaboration, training opportunities, and strategic partnerships."
        path="/partner"
      />
      <PageHero
        title="Partner With Us"
        subtitle="God's mission is accomplished through His people working together."
        image="https://images.pexels.com/photos/30989205/pexels-photo-30989205.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-page max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-teal-700 leading-relaxed text-lg max-w-2xl mx-auto">
              Whether you are an individual, church, ministry, or organization, we invite you to
              partner with us in strengthening local churches and leaders throughout Central Asia.
              You can partner through prayer, financial support, ministry collaboration, training
              opportunities, and strategic partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WAYS.map((w) => (
              <div key={w.title} className="card p-7">
                <h3 className="text-xl font-serif text-teal-800 mb-2">{w.title}</h3>
                <p className="text-teal-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-teal-800 text-sand-50 rounded-2xl p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-medium mb-4">
              Ready to partner with us?
            </h2>
            <p className="text-sand-200/90 mb-8 max-w-xl mx-auto leading-relaxed">
              Together we can help cultivate a flourishing church in every place of Central Asia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-rust-500 text-white font-medium tracking-wide hover:bg-rust-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Donate Now
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border-2 border-sand-200 text-sand-50 font-medium tracking-wide hover:bg-sand-50 hover:text-teal-800 transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
