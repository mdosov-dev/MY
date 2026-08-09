import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import SEO from '../../components/SEO'

const GALLERY = [
  {
    src: '/countries/tajikistan-iskanderkul.jpg',
    alt: 'Iskanderkul Lake in Tajikistan',
    caption: 'Iskanderkul, a stunning alpine lake in the Fann Mountains',
  },
  {
    src: '/countries/tajikistan-seven-lakes.jpg',
    alt: 'Seven Lakes of Tajikistan',
    caption: 'The famous Seven Lakes cascading through the mountains',
  },
  {
    src: '/countries/tajikistan-yamchun.jpg',
    alt: 'Yamchun Fortress in Tajikistan',
    caption: 'Ancient Yamchun Fortress overlooking the Wakhan Valley',
  },
  {
    src: '/countries/tajikistan-hissar.jpg',
    alt: 'Hissar Fortress and complex in Tajikistan',
    caption: 'Historic Hissar Fortress near Dushanbe',
  },
  {
    src: '/countries/countries-tajikistan.jpg',
    alt: 'Tajikistan mountain landscape',
    caption: 'Majestic mountain scenery across Tajikistan',
  },
  {
    src: '/images/tajikistan/919_1700_2726.png',
    alt: 'Ismail Somoni statue in Dushanbe',
    caption: 'Ismail Somoni statue in the capital, Dushanbe',
  },
  {
    src: '/images/tajikistan/919_1702_2940.png',
    alt: 'Pamir Highway stretching across the Pamir Plateau',
    caption: 'The Pamir Highway, the Roof of the World',
  },
  {
    src: '/images/tajikistan/culture/Tajik-clothing-4-1024x683.jpg',
    alt: 'Traditional Tajik clothing',
    caption: 'Traditional Tajik clothing reflecting rich cultural heritage',
  },
  {
    src: '/images/tajikistan/people/Pamir-people-1024x683.jpg',
    alt: 'Pamir people in the remote mountains of Tajikistan',
    caption: 'The Pamiri people of the remote eastern mountains',
  },
  {
    src: '/images/tajikistan/people/Pamir-people-2.jpg',
    alt: 'Pamir people in Tajikistan',
    caption: 'Daily life in the high Pamir mountains',
  },
]

export default function Tajikistan() {
  return (
    <div>
      <SEO
        title="Ministry in Tajikistan — Central Asia Mission"
        description="Encouraging Christian leaders and strengthening local believers through training, mentoring, evangelism, outreach, and ministry partnerships in Tajikistan."
        path="/where-we-work/tajikistan"
      />
      <PageHero
        title="Tajikistan"
        subtitle="Encouraging Christian leaders and strengthening local believers through training, mentoring, evangelism, outreach, and ministry partnerships."
        image="/images/tajikistan/919_1702_2940.png"
      />
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-page max-w-3xl">
          <div className="space-y-6 text-teal-700 leading-relaxed text-lg">
            <p>
              Tajikistan is one of the most economically vulnerable countries in Central Asia and
              remains a particularly challenging environment for Christian ministry. The country
              continues to experience the long-term social and economic consequences of civil war,
              poverty, and large-scale labor migration. Many families are separated for extended
              periods as men travel abroad, particularly to Russia, in search of employment, creating
              additional pressures on families and local communities.
            </p>
            <p>
              The indigenous Church remains small, and Christians, particularly those from Muslim
              backgrounds, face significant pressure from their families and local communities, as
              well as restrictions and pressure from government authorities. For some believers,
              following Christ can lead to rejection, strained family relationships, social isolation,
              and difficulties openly practicing their faith. Access to biblical and theological
              resources, discipleship opportunities, and leadership development is also limited,
              making the strengthening of local believers and Christian leaders especially
              important. In this context, ministry requires patience, trust, long-term relationships,
              and a faithful local presence.
            </p>
            <p>
              We seek to encourage Christian leaders and strengthen local believers through
              theological training, discipleship, mentoring, evangelistic outreach, and ministry
              partnerships. By walking alongside local Christians and churches over the long term,
              we seek to equip believers to remain rooted in Scripture, serve their communities, and
              faithfully live out and share the hope of the Gospel throughout Tajikistan.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-sand-200 flex flex-wrap gap-4">
            <Link to="/where-we-work/why-central-asia" className="btn-secondary">Why Central Asia?</Link>
            <Link to="/donate" className="btn-primary">Support This Work</Link>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-page">
          <h2 className="font-serif text-3xl lg:text-4xl text-teal-800 mb-10 text-center">
            The Land and Its People
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {GALLERY.map((img, i) => (
              <figure
                key={img.src}
                className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ${
                  i === 0 ? 'col-span-2 lg:col-span-2 lg:row-span-2 aspect-[16/10] lg:aspect-auto' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                  <p className="text-white text-xs sm:text-sm font-medium leading-snug">
                    {img.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
