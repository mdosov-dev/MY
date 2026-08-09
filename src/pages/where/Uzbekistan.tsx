import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import SEO from '../../components/SEO'

const GALLERY = [
  {
    src: '/images/uzbekistan/uzbekistan-banner.jpg',
    alt: 'Uzbekistan landscape banner',
    caption: 'The stunning landscapes of Uzbekistan',
  },
  {
    src: '/images/uzbekistan/154544-scaled.jpg',
    alt: 'Historic Uzbekistan architecture',
    caption: 'Centuries-old architecture along the Silk Road',
  },
  {
    src: '/images/uzbekistan/uzbekistan_tashkent-3.webp',
    alt: 'Tashkent cityscape',
    caption: 'Tashkent, the capital and our primary ministry base',
  },
  {
    src: '/images/uzbekistan/caption.jpg',
    alt: 'Uzbekistan cultural scene',
    caption: 'Rich cultural heritage of the Uzbek people',
  },
  {
    src: '/images/uzbekistan/istockphoto-1195267009-612x612.jpg',
    alt: 'Uzbekistan mosque and madrasa',
    caption: 'Historic mosques and madrasas reflect the spiritual landscape',
  },
  {
    src: '/images/uzbekistan/istockphoto-2160195486-612x612.jpg',
    alt: 'Uzbekistan traditional tiles',
    caption: 'Intricate tilework adorning historic buildings',
  },
]

export default function Uzbekistan() {
  return (
    <div>
      <SEO
        title="Ministry in Uzbekistan — Central Asia Mission"
        description="Our primary ministry base in Uzbekistan, where we serve through leadership training, discipleship, youth outreach, social ministry, and church partnerships."
        path="/where-we-work/uzbekistan"
      />
      <PageHero
        title="Uzbekistan"
        subtitle="Our primary ministry base, where we serve through leadership training, discipleship, youth outreach, social ministry, and church partnerships."
        image="https://images.pexels.com/photos/32037638/pexels-photo-32037638.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-page max-w-3xl">
          <div className="space-y-6 text-teal-700 leading-relaxed text-lg">
            <p>
              Uzbekistan is the most populous country in Central Asia and a nation with a rich history,
              diverse cultural heritage, and a predominantly Muslim population. Christianity represents
              a small minority, and the indigenous evangelical church remains relatively young. For many
              believers, particularly those from Muslim backgrounds, following Christ can bring
              significant pressure from family and local communities.
            </p>
            <p>
              For decades, religious life in Uzbekistan was subject to extensive government control and
              severe restrictions. Although important reforms in recent years have brought greater
              openness, churches and believers continue to operate within a restrictive legal
              environment. Regulations concerning the registration of religious organizations,
              religious education, religious literature, and activities outside officially recognized
              settings continue to create challenges for Christian ministry.
            </p>
            <p>
              Many indigenous Christian communities meet in small fellowships and house churches,
              particularly among believers from Muslim backgrounds. Access to theological education
              and biblical resources also remains limited for many local pastors and church leaders,
              leaving an important need for biblically grounded training, discipleship, and long-term
              support.
            </p>
            <p>
              Despite these challenges, the Church in Uzbekistan continues to grow and develop. Through
              leadership training, discipleship initiatives, youth outreach, social ministry, and
              partnerships with local churches, we seek to strengthen local believers and leaders as
              they faithfully serve their communities and bear witness to the hope of the Gospel
              throughout Uzbekistan.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-serif text-teal-800 mb-2">Gallery</h2>
            <div className="w-16 h-1 bg-rust-400 rounded-full mb-8" />
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

          <div className="mt-12 pt-8 border-t border-sand-200 flex flex-wrap gap-4">
            <Link to="/where-we-work/kazakhstan" className="btn-secondary">Next: Kazakhstan</Link>
            <Link to="/donate" className="btn-primary">Support This Work</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
