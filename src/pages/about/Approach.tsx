import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import SEO from '../../components/SEO'

const PILLARS = [
  { title: 'Partnership', desc: 'We work through partnership with local churches and leaders, not over or instead of them.' },
  { title: 'Mentoring', desc: 'We invest in long-term mentoring relationships that build capacity and character.' },
  { title: 'Leadership Development', desc: 'We equip emerging leaders with theological depth and practical ministry skills.' },
  { title: 'Discipleship', desc: 'We prioritize faithful, contextual discipleship that produces mature followers of Jesus.' },
  { title: 'Long-term Relationships', desc: 'We commit to sustained presence and encouragement across generations.' },
  { title: 'Contextual Ministry', desc: 'We encourage ministry faithful to Scripture and meaningful within local realities.' },
]

export default function Approach() {
  return (
    <div>
      <SEO
        title="Our Approach — Central Asia Mission"
        description="We are not a traditional missionary organization. Lasting Gospel impact comes through local churches and local leaders across Central Asia."
        path="/about/approach"
      />
      <PageHero
        title="Our Approach"
        subtitle="We are not a traditional missionary organization. Lasting Gospel impact comes through local churches and local leaders."
        image="https://images.pexels.com/photos/37257318/pexels-photo-37257318.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-page max-w-4xl">
          <div className="space-y-6 text-teal-700 leading-relaxed text-lg mb-14">
            <p>
              We are not a traditional missionary organization. We are an organization that
              prioritizes contextual evangelism, discipleship, and leadership development, believing
              that lasting gospel impact comes through local churches and local leaders. Christian
              leaders from Central Asia are directly involved in the leadership, vision, and direction
              of the organization, ensuring that our ministry remains faithful to Scripture and
              relevant to the realities of the region.
            </p>
            <p>
              Rather than importing ministry models from outside, we seek to strengthen and equip
              indigenous churches through contextual evangelism, discipleship, theological education,
              leadership development, compassionate service, and long-term partnerships that are
              faithful to Scripture and relevant to local realities.
            </p>
            <p>
              Our role is not to replace the local church, but to come alongside it—encouraging,
              equipping, and serving local Christian leaders as they faithfully make disciples and
              proclaim the gospel throughout Central Asia.
            </p>
          </div>

          <h2 className="text-2xl font-serif text-teal-800 mb-6">Our Six Pillars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 border border-sand-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-serif text-rust-500 mb-2">{p.title}</h3>
                <p className="text-teal-600 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-sand-200 flex flex-wrap gap-4">
            <Link to="/about/beliefs" className="btn-secondary">Our Beliefs</Link>
            <Link to="/where-we-work/why-central-asia" className="btn-primary">Where We Work</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
