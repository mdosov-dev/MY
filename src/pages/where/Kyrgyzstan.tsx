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
              Our work in Kyrgyzstan focuses on mentoring leaders, youth and camp ministry,
              evangelistic outreach, discipleship, and supporting local churches as they engage their
              communities.
            </p>
            <p>
              Kyrgyzstan has one of the most open societies in Central Asia, creating unique
              opportunities for ministry. With a relatively young population and a growing
              indigenous church, there is significant potential for leadership development, youth
              ministry, and evangelistic outreach. We walk alongside pastors and emerging leaders,
              providing theological training, mentoring, and encouragement as they faithfully serve
              their churches and share the gospel in their communities.
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
