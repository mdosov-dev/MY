import { useState, useEffect } from 'react'
import SEO from '../../components/SEO'
import { MINISTRY_AREAS } from '../../lib/ministryData'

export default function WhatWeDo() {
  const [activeArea, setActiveArea] = useState(0)
  const [activeActivity, setActiveActivity] = useState(0)

  useEffect(() => {
    const slugs: Record<string, number> = {
      'teaching-training': 0,
      'evangelism-outreach': 1,
      'community-development': 2,
      'scripture-literature': 3,
    }
    const applyHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (slugs[hash] !== undefined) {
        setActiveArea(slugs[hash])
        setActiveActivity(0)
      }
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [])

  const area = MINISTRY_AREAS[activeArea]
  const activity = area.activities[activeActivity]

  const selectArea = (i: number) => {
    setActiveArea(i)
    setActiveActivity(0)
  }

  return (
    <div>
      <SEO
        title="What We Do — Central Asia Mission"
        description="Our ministries across Central Asia: teaching and training, evangelism and outreach, community development and humanitarian aid, and scripture and literature provision."
        path="/what-we-do"
      />
      <section className="pt-16 lg:pt-24 pb-16 lg:pb-24 bg-sand-50">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-eyebrow">What We Do</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-teal-800 mb-4">
              Ministry Across Central Asia
            </h1>
          </div>

          {/* Main category tabs */}
          <div
            role="tablist"
            aria-label="Ministry areas"
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6"
          >
            {MINISTRY_AREAS.map((a, i) => {
              const selected = i === activeArea
              return (
                <button
                  key={a.id}
                  role="tab"
                  aria-selected={selected}
                  aria-controls="ministry-panel"
                  id={`tab-${a.id}`}
                  onClick={() => selectArea(i)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50 ${selected ? 'bg-teal-600 text-white shadow' : 'bg-white text-teal-700 border border-teal-200 hover:bg-teal-50'}`}
                >
                  {a.title}
                </button>
              )
            })}
          </div>

          {/* Shared content panel */}
          <div
            id="ministry-panel"
            role="tabpanel"
            aria-labelledby={`tab-${area.id}`}
            className="bg-white rounded-2xl border border-sand-200 shadow-sm p-6 sm:p-8 max-w-3xl mx-auto min-h-[340px] flex flex-col"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-teal-800 text-center mb-4">
              {area.title}
            </h2>
            <p className="text-teal-600 leading-relaxed text-sm sm:text-base text-center mb-6">
              {area.intro}
            </p>

            {/* Activity tabs */}
            <div
              role="tablist"
              aria-label={`${area.title} activities`}
              className="flex flex-wrap justify-center gap-2 mb-6"
            >
              {area.activities.map((act, i) => {
                const selected = i === activeActivity
                return (
                  <button
                    key={act.id}
                    role="tab"
                    aria-selected={selected}
                    aria-controls="activity-panel"
                    id={`activity-tab-${act.id}`}
                    onClick={() => setActiveActivity(i)}
                    className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rust-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${selected ? 'bg-rust-500 text-white shadow-sm' : 'bg-rust-50 text-rust-600 hover:bg-rust-100'}`}
                  >
                    {act.title}
                  </button>
                )
              })}
            </div>

            {/* Activity description */}
            <div
              id="activity-panel"
              role="tabpanel"
              aria-labelledby={`activity-tab-${activity.id}`}
              className="flex-1 flex flex-col items-center justify-start text-center"
            >
              <h3 className="text-base sm:text-lg font-serif text-teal-800 mb-2">
                {activity.title}
              </h3>
              <p className="text-teal-600 leading-relaxed text-sm sm:text-base max-w-2xl">
                {activity.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
