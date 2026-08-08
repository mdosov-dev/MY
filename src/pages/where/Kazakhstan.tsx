import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import SEO from '../../components/SEO'

const GALLERY = [
  {
    src: '/countries/kazakhstan/dm9a4572-large.jpeg',
    alt: 'Kazakhstan mountain landscape',
    caption: 'The dramatic mountain scenery of Kazakhstan',
  },
  {
    src: '/countries/kazakhstan/dm9a4332-large.jpeg',
    alt: 'Kazakhstan steppe and scenery',
    caption: 'Vast open steppes stretching across the country',
  },
  {
    src: '/countries/kazakhstan/DJI_0431.webp',
    alt: 'Aerial view of Kazakhstan',
    caption: 'Aerial view of the diverse Kazakh terrain',
  },
  {
    src: '/countries/kazakhstan/750-1000055566-01-large.jpeg',
    alt: 'Kazakhstan natural landscape',
    caption: 'Pristine natural beauty of the region',
  },
  {
    src: '/countries/kazakhstan/w1500_37910821.jpg',
    alt: 'Kazakhstan canyon',
    caption: 'Spectacular canyons carved over millennia',
  },
  {
    src: '/countries/kazakhstan/NAU(1280x720).webp',
    alt: 'Breathtaking Kazakhstan landscape',
    caption: 'Breathtaking landscapes at every turn',
  },
]

export default function Kazakhstan() {
  return (
    <div>
      <SEO
        title="Ministry in Kazakhstan — Central Asia Mission"
        description="Partnering with church leaders in Kazakhstan to support leadership development, discipleship, and cooperation among churches."
        path="/where-we-work/kazakhstan"
      />
      <PageHero
        title="Kazakhstan"
        subtitle="Partnering with church leaders and ministries to support leadership development, discipleship, and cooperation among churches."
        image="https://media.cntraveller.com/photos/637e00eece1c9bd657a981ea/16:9/w_1280,c_limit/NAU(1280x720).jpg"
      />
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-page max-w-3xl">
          <div className="space-y-6 text-teal-700 leading-relaxed text-lg">
            <p>
              In Kazakhstan we partner with church leaders and ministries to support leadership
              development, discipleship, camp ministry, evangelistic outreach, and cooperation
              among churches.
            </p>
            <p>
              As the largest country in Central Asia by territory, Kazakhstan presents unique
              opportunities and challenges for ministry. We work alongside local churches to
              encourage unity, strengthen leadership, and build a faithful Christian witness in
              both urban and rural communities.
            </p>
            <p>
              Although Kazakhstan enjoys greater economic prosperity than much of Central Asia and
              provides comparatively greater religious freedom, there remains a deep spiritual
              hunger. Many people continue searching for hope, purpose, and truth, creating
              significant opportunities for the gospel and the growth of the local Church.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-sand-200 flex flex-wrap gap-4">
            <Link to="/where-we-work/kyrgyzstan" className="btn-secondary">Next: Kyrgyzstan</Link>
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
