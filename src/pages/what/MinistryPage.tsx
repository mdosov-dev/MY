import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import SEO from '../../components/SEO'

interface MinistryPageProps {
  title: string
  subtitle: string
  image: string
  description: string | string[]
  gallery?: string[]
  highlights?: string[]
  next?: { label: string; path: string }
  path: string
}

export default function MinistryPage({ title, subtitle, image, description, gallery, highlights, next, path }: MinistryPageProps) {
  const paragraphs = Array.isArray(description) ? description : [description]
  return (
    <div>
      <SEO
        title={`${title} — Central Asia Mission`}
        description={subtitle}
        path={path}
      />
      <PageHero title={title} subtitle={subtitle} image={image} />
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-page max-w-3xl">
          <div className="space-y-6 mb-10">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-teal-700 leading-relaxed text-lg">{p}</p>
            ))}
          </div>

          {gallery && gallery.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {gallery.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-xl border border-sand-200 aspect-square">
                  <img src={src} alt={`${title} photo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              ))}
            </div>
          )}

          {highlights && highlights.length > 0 && (
            <div className="bg-white rounded-2xl border border-sand-200 p-8 mb-10">
              <h3 className="text-xl font-serif text-teal-800 mb-5">Key Focus Areas</h3>
              <ul className="space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-teal-600">
                    <span className="text-rust-400 mt-1">◆</span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-8 border-t border-sand-200 flex flex-wrap gap-4">
            {next ? (
              <Link to={next.path} className="btn-secondary">{next.label}</Link>
            ) : (
              <Link to="/what-we-do/school-of-leadership" className="btn-secondary">All Ministries</Link>
            )}
            <Link to="/donate" className="btn-primary">Support This Ministry</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
