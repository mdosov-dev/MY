import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import SEO from '../../components/SEO'

const COUNTRY_LINKS = [
  { name: 'Uzbekistan', path: '/where-we-work/uzbekistan', desc: 'Our primary ministry base.' },
  { name: 'Kazakhstan', path: '/where-we-work/kazakhstan', desc: 'Leadership development and church cooperation.' },
  { name: 'Kyrgyzstan', path: '/where-we-work/kyrgyzstan', desc: 'Mentoring leaders and youth ministry.' },
  { name: 'Tajikistan', path: '/where-we-work/tajikistan', desc: 'Training and encouraging Christian leaders.' },
]

const STAN_MEANINGS = [
  { country: 'Kazakhstan', meaning: 'Land of the Kazakhs' },
  { country: 'Uzbekistan', meaning: 'Land of the Uzbeks' },
  { country: 'Turkmenistan', meaning: 'Land of the Turkmen' },
  { country: 'Kyrgyzstan', meaning: 'Land of the Kyrgyz' },
  { country: 'Tajikistan', meaning: 'Land of the Tajiks' },
]

const FACTS = [
  {
    icon: '🌍',
    label: 'crossroads',
    text: 'Central Asia has long been a crossroads of civilizations, connecting East and West.',
  },
  {
    icon: '🟥',
    label: 'independence',
    text: 'Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan, and Tajikistan were part of the Soviet Union until gaining independence in 1991.',
  },
  {
    icon: '🐫',
    label: 'silk-road',
    text: 'For centuries, traders and travelers crossed the region along the Silk Road, linking East Asia with Europe and the Middle East.',
  },
  {
    icon: '⛪',
    label: 'young-church',
    text: 'Indigenous evangelical Christian communities in Central Asia are among the youngest churches in the global Christian family. Many are only several decades old and continue to grow despite limited resources and significant social challenges.',
  },
]

export default function WhyCentralAsia() {
  return (
    <div>
      <SEO
        title="Why Central Asia? — Central Asia Mission"
        description="Central Asia is one of the least reached, least understood, and most neglected regions of the world. Learn why we serve in Uzbekistan, Kazakhstan, Kyrgyzstan, and Tajikistan."
        path="/where-we-work/why-central-asia"
      />
      <PageHero
        title="Why Central Asia?"
        subtitle="One of the least reached, least understood, and most neglected regions of the world."
        image="https://images.pexels.com/photos/19439132/pexels-photo-19439132.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-page max-w-3xl">
          <div className="space-y-6 text-teal-700 leading-relaxed text-lg">
            <p>
              Central Asia is one of the least reached, least understood, and most neglected regions
              of the world. Home to more than 80 million people, the region is shaped by centuries of
              Islamic tradition, strong family structures, and deeply rooted cultural identities.
              Across the region, the population is overwhelmingly Muslim, while indigenous Christian
              communities remain small and often isolated.
            </p>
            <p>
              For many believers, following Christ comes at a significant personal cost. Christians
              frequently face pressure from family members, relatives, local communities, as well as
              government restrictions and state control over religious activities. New believers may
              experience rejection, social isolation, discrimination, and various forms of opposition
              because of their faith.
            </p>
            <p>
              At the same time, Central Asia is home to one of the youngest indigenous Christian
              movements in the global Church. In each country across the region, indigenous Christian
              communities have emerged only in recent decades, primarily following the collapse of the
              Soviet Union. These young churches are still developing their theological foundations,
              leadership structures, ministry practices, and public witness.
            </p>
            <p>
              Despite the strategic importance of the region, Central Asia has frequently remained on
              the margins of global mission efforts. Because of legal restrictions and the
              complexities of operating within the region, many international organizations have found
              it difficult to establish a sustained local presence. As a result, much of the support
              directed toward Central Asia has been coordinated remotely from Eastern Europe or other
              parts of Eurasia.
            </p>
            <p>
              While these efforts have been valuable, we believe that flourishing indigenous churches
              require more than remote support. They require long-term relationships, contextual
              understanding, theological education, leadership development, discipleship, and ongoing
              encouragement for local Christian leaders as they faithfully serve their churches and
              communities.
            </p>
            <p>
              We believe the future of Christian witness in Central Asia rests primarily in the hands
              of local believers and local churches. Our commitment is to stand alongside them,
              strengthen indigenous churches and leaders, and help reach the peoples of Central Asia
              with the gospel of Jesus Christ for generations to come.
            </p>
          </div>

          <h2 className="text-2xl font-serif text-teal-800 mt-14 mb-6">The Countries We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {COUNTRY_LINKS.map((c) => (
              <Link key={c.name} to={c.path} className="card p-6 group">
                <h3 className="text-xl font-serif text-teal-800 group-hover:text-rust-500 transition-colors">{c.name}</h3>
                <p className="text-teal-500 text-sm mt-1">{c.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-sand-200">
            <Link to="/what-we-do/school-of-leadership" className="btn-primary">What We Do</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-teal-800 text-sand-50">
        <div className="container-page max-w-4xl">
          <p className="section-eyebrow text-rust-300">A Name, A Story</p>
          <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">
            Why Do So Many Countries End in “-Stan”?
          </h2>
          <div className="space-y-5 text-sand-100 leading-relaxed text-lg">
            <p>
              The suffix <span className="font-serif italic text-white">“-stan”</span> comes from
              Persian and means “land of,” “place of,” or “country of.” It has been used for
              centuries across Central and South Asia to describe the homeland of a particular
              people or region.
            </p>
            <p>
              The five Central Asian countries derive their names from the peoples historically
              associated with them:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {STAN_MEANINGS.map((s) => (
              <div
                key={s.country}
                className="rounded-xl bg-teal-700/60 border border-teal-600/60 px-5 py-4 transition-all duration-300 hover:bg-teal-700 hover:border-rust-400/60 hover:-translate-y-1"
              >
                <p className="font-serif text-xl text-white">{s.country}</p>
                <p className="text-sand-200 text-sm mt-1">{s.meaning}</p>
              </div>
            ))}
          </div>

          <p className="text-sand-100 leading-relaxed text-lg mt-8">
            Together, these five nations form the heart of Central Asia—a region shaped by the Silk
            Road and known for its rich diversity of cultures, languages, and traditions. Today,
            more than 80 million people live across the region.
          </p>

          <h3 className="text-2xl font-serif text-white mt-14 mb-6">Interesting Facts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FACTS.map((f) => (
              <div
                key={f.label}
                className="flex gap-4 items-start rounded-2xl bg-teal-700/40 border border-teal-600/50 p-5 transition-all duration-300 hover:bg-teal-700/70 hover:border-rust-400/50"
              >
                <span className="text-2xl leading-none mt-0.5" aria-hidden>{f.icon}</span>
                <p className="text-sand-100 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
