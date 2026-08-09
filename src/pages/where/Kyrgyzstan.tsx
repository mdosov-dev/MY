import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import SEO from '../../components/SEO'

const GALLERY = [
  {
    src: '/countries/kyrgyzstan-33620059.jpg',
    alt: 'Kyrgyzstan mountain landscape',
    caption: 'The breathtaking mountain scenery of Kyrgyzstan',
  },
  {
    src: '/countries/kyrgyzstan-issyk.jpg',
    alt: 'Issyk-Kul Lake in Kyrgyzstan',
    caption: 'Issyk-Kul, one of the largest alpine lakes in the world',
  },
  {
    src: '/countries/Altyn-Arashan-gorge-21.jpg',
    alt: 'Altyn-Arashan gorge in Kyrgyzstan',
    caption: 'The picturesque Altyn-Arashan gorge',
  },
  {
    src: '/countries/Kyrgyz-yurts.jpg',
    alt: 'Traditional Kyrgyz yurts',
    caption: 'Traditional nomadic yurts in the high pastures',
  },
  {
    src: '/countries/kyrgyz-traditions-2.jpg',
    alt: 'Kyrgyz traditions and culture',
    caption: 'Rich nomadic traditions passed down through generations',
  },
  {
    src: '/countries/kyrgyzstan-culture-yurts.jpg',
    alt: 'Kyrgyz culture and yurts',
    caption: 'Yurts remain central to Kyrgyz cultural identity',
  },
  {
    src: '/countries/kyrgyzstan-culture-horses.jpg',
    alt: 'Horses in Kyrgyz culture',
    caption: 'Horses play a vital role in Kyrgyz nomadic life',
  },
  {
    src: '/countries/kyrgyzstan-culture-music.jpg',
    alt: 'Traditional Kyrgyz music',
    caption: 'Traditional music echoing across the mountains',
  },
]

export default function Kyrgyzstan() {
  return (
    <div>
      <SEO
        title="Ministry in Kyrgyzstan — Central Asia Mission"
        description="Mentoring leaders, youth ministry, camp ministry, evangelistic outreach, and discipleship in Kyrgyzstan."
        path="/where-we-work/kyrgyzstan"
      />
      <PageHero
        title="Kyrgyzstan"
        subtitle="Mentoring leaders, youth ministry, camp ministry, evangelistic outreach, discipleship, and supporting local churches as they engage their communities."
        image="/countries/kyrgyzstan-issyk.jpg"
      />
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-page max-w-3xl">
          <div className="space-y-6 text-teal-700 leading-relaxed text-lg">
            <p>
              Kyrgyzstan is a mountainous and culturally diverse country with a relatively young
              population and a small but developing indigenous Christian community. Historically, it
              has provided comparatively greater space for religious life than several other countries
              in Central Asia, creating important opportunities for local churches to serve their
              communities, disciple believers, and share the Gospel.
            </p>
            <p>
              The Church continues to face important challenges, particularly in developing mature
              Christian leaders, discipling the next generation, and strengthening congregations for
              long-term ministry. Youth ministry is especially significant, while camps provide
              valuable opportunities to build relationships, deepen discipleship, and introduce young
              people to the Christian faith.
            </p>
            <p>
              We work alongside local pastors, churches, and emerging leaders through mentoring,
              leadership development, youth and camp ministry, discipleship, and evangelistic
              outreach. Through long-term relationships and cooperation with local churches, we seek
              to strengthen indigenous Christian communities and help them faithfully share the hope
              of the Gospel throughout Kyrgyzstan.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-sand-200 flex flex-wrap gap-4">
            <Link to="/where-we-work/tajikistan" className="btn-secondary">Next: Tajikistan</Link>
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
