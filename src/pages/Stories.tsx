import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import { supabase } from '../lib/supabase'
import { STORY_CATEGORIES, type Story } from '../lib/types'

export default function Stories() {
  const [stories, setStories] = useState<Story[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selected, setSelected] = useState<Story | null>(null)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const { data, error } = await supabase
        .from('stories')
        .select('*')
        .order('published_at', { ascending: false })
      if (error) {
        setError(error.message)
      } else if (data) {
        setStories(data as Story[])
      }
      setLoading(false)
    }
    load()
  }, [])

  const filtered = activeCategory === 'All'
    ? stories
    : stories.filter((s) => s.category === activeCategory)

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div>
      <SEO
        title="Stories from the Field — Central Asia Mission"
        description="Ministry updates, testimonies, prayer requests, and examples of God's work throughout Central Asia."
        path="/stories"
      />
      <PageHero
        title="Stories from the Field"
        subtitle="Ministry updates, testimonies, prayer requests, and examples of God's work throughout Central Asia."
        image="https://images.pexels.com/photos/5964348/pexels-photo-5964348.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-page">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === 'All'
                  ? 'bg-teal-700 text-sand-50'
                  : 'bg-white text-teal-600 border border-sand-200 hover:border-teal-400'
              }`}
            >
              All
            </button>
            {STORY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === cat
                    ? 'bg-teal-700 text-sand-50'
                    : 'bg-white text-teal-600 border border-sand-200 hover:border-teal-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading && (
            <div className="text-center py-20">
              <div className="inline-block w-10 h-10 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin" />
              <p className="text-teal-500 mt-4">Loading stories...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-rust-500">Unable to load stories. Please try again later.</p>
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-teal-500">No stories in this category yet. Check back soon.</p>
            </div>
          )}

          {!loading && !error && filtered.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((story) => (
                <article
                  key={story.id}
                  className="card group cursor-pointer flex flex-col"
                  onClick={() => setSelected(story)}
                >
                  {story.image_url && (
                    <div className="overflow-hidden h-52">
                      <img
                        src={story.image_url}
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs uppercase tracking-wider text-rust-400 font-semibold mb-2">
                      {story.category}
                    </span>
                    <h3 className="text-xl font-serif text-teal-800 mb-2 group-hover:text-rust-500 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-teal-600 text-sm leading-relaxed flex-1">{story.excerpt}</p>
                    <div className="mt-4 pt-4 border-t border-sand-100 flex items-center justify-between text-xs text-teal-400">
                      <span>{formatDate(story.published_at)}</span>
                      {story.location && <span>{story.location}</span>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="text-center mt-14">
            <Link to="/donate" className="btn-primary">Support This Ministry</Link>
          </div>
        </div>
      </section>

      {/* Story modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-teal-900/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-sand-50 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {selected.image_url && (
              <div className="h-56 overflow-hidden rounded-t-2xl">
                <img src={selected.image_url} alt={selected.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-8">
              <span className="text-xs uppercase tracking-wider text-rust-400 font-semibold">
                {selected.category}
              </span>
              <h2 className="text-2xl font-serif text-teal-800 mt-2 mb-3">{selected.title}</h2>
              <div className="flex items-center gap-3 text-xs text-teal-400 mb-5">
                <span>{formatDate(selected.published_at)}</span>
                {selected.author && <span>· {selected.author}</span>}
                {selected.location && <span>· {selected.location}</span>}
              </div>
              <p className="text-teal-700 leading-relaxed whitespace-pre-line">{selected.body}</p>
              <button
                onClick={() => setSelected(null)}
                className="mt-8 btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
