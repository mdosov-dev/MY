import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import { supabase } from '../lib/supabase'
import type { Story } from '../lib/types'

const MINISTRY_AREAS = [
  {
    title: 'Teaching & Training',
    path: '/what-we-do#teaching-training',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 006.665-2.584 12.083 12.083 0 01.665-6.479L12 14z',
    desc: 'Equipping pastors and leaders through contextual biblical education, seminars, workshops, and practical pastoral training.',
  },
  {
    title: 'Evangelism & Outreach',
    path: '/what-we-do#evangelism-outreach',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 004 0v-1a2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h1.064M18 12h2.25M2.25 12h2.25M6.343 17.657l.707.707M17.657 6.343l-.707-.707M6.343 6.343l-.707.707M17.657 17.657l.707-.707',
    desc: 'Proclaiming the Gospel through camps, church planting support, community outreach, and mission trips.',
  },
  {
    title: 'Community Development & Humanitarian Aid',
    path: '/what-we-do#community-development',
    icon: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
    desc: 'Bringing practical relief, social assistance, educational support, and compassionate care to communities in crisis.',
  },
  {
    title: 'Scripture & Literature Provision',
    path: '/what-we-do#scripture-literature',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    desc: 'Translating and distributing Christian books and resources in local languages, and publishing research on the indigenous Church of Central Asia.',
  },
]

const COUNTRIES = [
  { name: 'Uzbekistan', path: '/where-we-work/uzbekistan', image: '/samarkand-bukhara/kalyan-1.jpg' },
  { name: 'Kazakhstan', path: '/where-we-work/kazakhstan', image: '/countries/kazakhstan/dm9a4572-large.jpeg' },
  { name: 'Kyrgyzstan', path: '/where-we-work/kyrgyzstan', image: '/countries/kyrgyzstan-culture-yurts.jpg' },
  { name: 'Tajikistan', path: '/where-we-work/tajikistan', image: '/images/tajikistan/people/Pamir-people-2.jpg' },
]

export default function Home() {
  const [featuredStories, setFeaturedStories] = useState<Story[]>([])

  useEffect(() => {
    const loadStories = async () => {
      const { data } = await supabase
        .from('stories')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(3)
      if (data) setFeaturedStories(data as Story[])
    }
    loadStories()
  }, [])

  return (
    <div>
      <SEO
        title="Central Asia Mission — Strengthening Local Churches Across Central Asia"
        description="Central Asia Mission is a locally led Christian mission strengthening churches and leaders in Uzbekistan, Kazakhstan, Kyrgyzstan, and Tajikistan through discipleship, leadership development, and compassionate outreach."
        path="/"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(33,73,74,0.65), rgba(33,73,74,0.82)), url('/samarkand-bukhara/kalyan-15.jpeg')`,
          }}
        />
        <div className="relative container-page text-center text-sand-50 px-4 py-32">
          <p className="text-sand-200 uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-6 animate-fade-in">
            Central Asia Mission
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-tight max-w-4xl mx-auto mb-6 animate-fade-up">
            A Flourishing Church in Every Place of Central Asia
          </h1>
          <p className="text-sand-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            We are a locally led Christian mission working through indigenous churches and leaders
            to equip Christian leaders, strengthen local churches, and share the hope of the Gospel
            through word and deed across Central Asia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <Link to="/donate" className="btn-primary">Donate</Link>
            <Link to="/partner" className="btn-secondary border-sand-200 text-sand-50 hover:bg-sand-50 hover:text-teal-800">
              Partner With Us
            </Link>
            <Link to="/about/approach" className="btn-secondary border-sand-200/60 text-sand-50 hover:bg-sand-50/90 hover:text-teal-800">
              Learn Our Approach
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sand-200 animate-bounce" aria-hidden>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-16 lg:py-20 bg-sand-50">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-eyebrow">Locally Led, Indigenous Ministry</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-teal-800 leading-snug mb-6">
              Central Asia Mission is led by people who live and serve in the region, working
              through indigenous churches and leaders who understand their own communities.
            </h2>
            <p className="text-teal-600 leading-relaxed text-lg mb-8">
              We are not a traditional missionary organization. We believe that lasting Gospel
              impact comes through local churches and local leaders. Rather than replacing local
              ministries, we work alongside them to encourage, equip, and strengthen Christian
              witness throughout one of the most challenging regions in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about/people" className="btn-secondary">Meet Our People</Link>
              <Link to="/about/approach" className="btn-primary">Our Approach</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-28 bg-sand-100">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="relative">
            <div className="absolute -top-6 -left-2 w-24 h-24 rounded-full bg-rust-100 opacity-60" aria-hidden />
            <p className="section-eyebrow relative">Our Vision</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-teal-800 leading-snug mb-6 relative">
              A flourishing church in every place of Central Asia, embodying Jesus' love for every Central Asian person.
            </h2>
            <div className="w-16 h-1 bg-rust-400 rounded-full" />
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-2 w-24 h-24 rounded-full bg-teal-100 opacity-60" aria-hidden />
            <p className="section-eyebrow relative">Our Mission</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-teal-800 leading-snug mb-6 relative">
              To strengthen and equip local churches and leaders across Central Asia through discipleship, leadership development, contextual mission, and compassionate service.
            </h2>
            <div className="w-16 h-1 bg-teal-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Intro / approach highlight */}
      <section className="py-20 lg:py-28 bg-teal-800 text-sand-50">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-rust-300 uppercase tracking-[0.2em] text-sm font-semibold mb-4">Our Distinctive</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-6 leading-snug">
              Local believers are God's primary instrument for reaching their own communities.
            </h2>
            <p className="text-sand-200/90 leading-relaxed mb-4">
              We are not a typical missionary organization. We believe that lasting Gospel impact
              comes through local churches and local leaders who understand their own communities,
              cultures, and languages.
            </p>
            <p className="text-sand-200/90 leading-relaxed mb-8">
              Rather than replacing local ministries, we work alongside churches and leaders to
              encourage, equip, and strengthen Christian witness throughout one of the most
              challenging regions in the world.
            </p>
            <Link to="/about/approach" className="inline-flex items-center gap-2 text-sand-200 font-medium border-b-2 border-rust-400 pb-1 hover:text-sand-50 hover:border-sand-50 transition">
              Read more about our approach
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/samarkand-bukhara/kalyan-3.jpg"
                alt="The Kalyan Minaret and blue domes of Bukhara, Uzbekistan at dusk"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-28 bg-sand-50">
        <div className="container-page">
          <div className="text-center mb-14">
            <p className="section-eyebrow">What We Do</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-teal-800 mb-4">
              Ministry Across Central Asia
            </h2>
            <p className="text-teal-600 max-w-2xl mx-auto leading-relaxed">
              We serve through three primary ministry areas, each designed to strengthen the local church
              and equip believers for faithful witness.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MINISTRY_AREAS.map((m) => (
              <Link
                key={m.title}
                to={m.path}
                className="card group p-8 flex flex-col items-start"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-5 group-hover:bg-rust-100 transition-colors duration-300">
                  <svg className="w-7 h-7 text-teal-600 group-hover:text-rust-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d={m.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-teal-800 mb-2 group-hover:text-rust-500 transition-colors">
                  {m.title}
                </h3>
                <p className="text-teal-600 text-sm leading-relaxed mb-4">{m.desc}</p>
                <span className="mt-auto text-sm text-teal-500 group-hover:text-rust-400 transition-colors flex items-center gap-1">
                  Learn more <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-20 lg:py-28 bg-sand-100">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-teal-800">
              The Countries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {COUNTRIES.map((c) => (
              <Link key={c.name} to={c.path} className="group relative rounded-2xl overflow-hidden h-64 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-rust-300">
                <img
                  src={c.image}
                  alt={`Learn about our ministry in ${c.name}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-sand-50 font-serif text-xl font-medium">{c.name}</h3>
                  <span className="text-sand-200/70 text-xs flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/where-we-work/why-central-asia" className="btn-secondary">
              Why Central Asia?
            </Link>
          </div>
        </div>
      </section>

      {/* Featured stories / ministry impact */}
      <section className="py-20 lg:py-28 bg-sand-50">
        <div className="container-page">
          <div className="text-center mb-14">
            <p className="section-eyebrow">Stories from the Field</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-teal-800 mb-4">
              God at Work in Central Asia
            </h2>
            <p className="text-teal-600 max-w-2xl mx-auto leading-relaxed">
              Ministry updates, testimonies, and prayer requests from across the region.
            </p>
          </div>
          {featuredStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredStories.map((story) => (
                <article key={story.id} className="card group flex flex-col">
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
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-teal-500 mb-6">Stories will be shared here soon. Check back for ministry updates and testimonies from the field.</p>
            </div>
          )}
          <div className="text-center mt-10">
            <Link to="/stories" className="btn-secondary">Read All Stories</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-rust-600 via-rust-500 to-rust-700 text-sand-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-sand-50/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-sand-50/10 blur-3xl" />
        </div>
        <div className="container-page text-center max-w-3xl mx-auto relative">
          <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-sand-50/15 text-sand-50 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm ring-1 ring-sand-50/20">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            Your Support Makes This Possible
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium mb-6 leading-tight">
            Together we can cultivate a flourishing church in every place of Central Asia.
          </h2>
          <p className="text-sand-100/90 text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            God's mission is accomplished through His people working together. Whether you are an
            individual, church, ministry, or organization, we invite you to partner with us.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
            <Link to="/contact" className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-sand-50/10 backdrop-blur-sm ring-1 ring-sand-50/20 hover:bg-sand-50/20 hover:-translate-y-1 transition-all duration-300">
              <svg className="w-8 h-8 text-sand-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-7 4h8m-9 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
              </svg>
              <span className="font-serif text-lg font-medium">Pray With Us</span>
              <span className="text-sand-200/70 text-sm">Join us in prayer for Central Asia</span>
            </Link>
            <Link to="/partner" className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-sand-50/10 backdrop-blur-sm ring-1 ring-sand-50/20 hover:bg-sand-50/20 hover:-translate-y-1 transition-all duration-300">
              <svg className="w-8 h-8 text-sand-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4 4 4 0 004 4z" />
              </svg>
              <span className="font-serif text-lg font-medium">Partner With Us</span>
              <span className="text-sand-200/70 text-sm">Explore partnership opportunities</span>
            </Link>
            <Link to="/donate" className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-sand-50/10 backdrop-blur-sm ring-1 ring-sand-50/20 hover:bg-sand-50/20 hover:-translate-y-1 transition-all duration-300">
              <svg className="w-8 h-8 text-sand-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="font-serif text-lg font-medium">Give</span>
              <span className="text-sand-200/70 text-sm">Support ministry across Central Asia</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
