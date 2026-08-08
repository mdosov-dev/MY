import { useState, useEffect } from 'react'
import SEO from '../../components/SEO'

interface Activity {
  id: string
  title: string
  description: string
}

interface MinistryArea {
  id: string
  title: string
  intro: string
  activities: Activity[]
}

const MINISTRY_AREAS: MinistryArea[] = [
  {
    id: 'teaching-training',
    title: 'Teaching & Training',
    intro:
      'Central Asia Mission strengthens indigenous churches by equipping pastors, church leaders, and believers through biblical education, leadership development, and practical ministry training.',
    activities: [
      {
        id: 'school-of-leadership',
        title: 'School of Leadership',
        description:
          'The School of Leadership is a holistic discipleship and leadership development program designed to equip young Christians and new believers from Muslim backgrounds. Bringing together emerging leaders from across the region, the program combines biblical depth with practical application, preparing participants to become mature disciples of Christ and active agents of transformation within their churches, communities, and wider society.\n\nKey Focus Areas\n◆ Theological education grounded in Scripture\n◆ Discipleship and spiritual formation\n◆ Leadership development and mentoring\n◆ Practical ministry training and application\n◆ Cohort-based learning across churches and cities',
      },
      {
        id: 'pastors-leaders-seminars',
        title: 'Pastors & Leaders Seminars',
        description:
          'Many pastors and church leaders across Central Asia have had little or no access to formal or informal theological training. We provide seminars and workshops that equip church leaders and ministry teams with practical, biblically grounded training. These gatherings root leaders deeply in Scripture, help them understand the Bible, and equip them to teach and preach God\u2019s Word faithfully to their congregations.\n\nWe come alongside pastors and elders through long-term relationships, offering ongoing coaching, encouragement, and practical support. These gatherings also encourage cooperation among local churches and strengthen sustainable ministry across the region. Rooted in Scripture and shaped by the cultural realities of Central Asia, our approach seeks to strengthen church leaders to serve their congregations and communities with wisdom, integrity, and confidence.',
      },
    ],
  },
  {
    id: 'evangelism-outreach',
    title: 'Evangelism & Outreach',
    intro:
      'At Central Asia Mission, we are committed to proclaiming Jesus Christ and the message of salvation throughout Central Asia. We believe that evangelism is at the heart of the Church\u2019s mission and that every believer is called to bear faithful witness to the Gospel. Working alongside indigenous churches and Christian leaders, we seek to share the hope of Christ, make disciples, and strengthen local communities through authentic relationships, compassionate service, and faithful Gospel witness.',
    activities: [
      {
        id: 'camps-ministry',
        title: 'Camps Ministry',
        description:
          'Camp ministry has become one of the most effective avenues through which dozens of people across Central Asia have come to faith in Christ in recent years. We have been actively involved in organizing and leading a variety of camps, from large regional gatherings to smaller evangelistic and discipleship camps throughout the region. Our flagship event, Camp at the Lake, is the largest camp we organize\u2014the only Christian camp in Central Asia that brings together young people from all Central Asian countries. Held on the shores of Issyk-Kul Lake in Kyrgyzstan, it provides a unique opportunity for fellowship, discipleship, worship, and leadership development across national and cultural boundaries. Through evening invitational sermons, Christ-centered teaching, worship, and genuine Christian community, many hear the gospel, place their faith in Christ, and begin their journey of discipleship.',
      },
      {
        id: 'church-planting-support',
        title: 'Church Planting Support',
        description:
          'We come alongside indigenous church planters and local ministries by providing prayer, encouragement, practical assistance, and resources to strengthen their work and help new churches flourish across Central Asia.',
      },
      {
        id: 'community-outreach',
        title: 'Community Outreach',
        description:
          'We serve vulnerable families and individuals through practical assistance, counselling, community engagement, and Gospel-centered ministry. We believe God\u2019s love is demonstrated through both proclamation and compassionate service, and that the church is called to be a visible expression of Christ\u2019s care for the most vulnerable.',
      },
    ],
  },
  {
    id: 'community-development',
    title: 'Community Development & Humanitarian Aid',
    intro:
      'At Central Asia Mission, we believe that the Gospel transforms every area of life. Our ministry is holistic, seeking to care for the spiritual, emotional, psychological, social, and physical needs of individuals, families, and communities. Through Christ-centered service, we desire to reflect God\u2019s love, restore dignity, and participate in His redemptive work across Central Asia.',
    activities: [
      {
        id: 'humanitarian-aid',
        title: 'Humanitarian Aid',
        description:
          'We respond to the physical and material needs of families and communities facing poverty, crisis, and hardship by providing food, clothing, household supplies, medical assistance, and emergency relief. Working hand in hand with local churches, we ensure aid reaches those who need it most as a tangible expression of God\u2019s love.',
      },
      {
        id: 'community-development',
        title: 'Community Development',
        description:
          'We pursue long-term, holistic transformation that cares for the social and physical needs of individuals, families, and communities. Through Christ-centered service, we seek to reflect God\u2019s love, restore dignity, and participate in His redemptive work across Central Asia.',
      },
      {
        id: 'emotional-psychological-support',
        title: 'Emotional & Psychological Support',
        description:
          'We provide counseling and psychological support to individuals and families facing emotional hardship, trauma, and despair. We walk alongside those affected by domestic violence, dysfunctional family environments, and other difficult life circumstances, while also offering care and support to people with disabilities and their families. This ministry reflects the Church\u2019s calling to bear witness to the Kingdom of God in tangible ways, bringing compassion, dignity, hope, and healing to those who are vulnerable and hurting.',
      },
      {
        id: 'compassion-ministries',
        title: 'Compassion Ministries',
        description:
          'We care for widows, people with disabilities, and the most vulnerable through compassionate, Gospel-centered ministry that meets both physical and spiritual needs. This service is a visible expression of Christ\u2019s care for those facing hardship across Central Asia.',
      },
    ],
  },
  {
    id: 'scripture-literature',
    title: 'Scripture & Literature Provision',
    intro:
      'Across much of Central Asia, indigenous churches have limited access to biblically sound Christian literature in their own languages. Central Asia Mission seeks to strengthen indigenous churches by providing faithful biblical resources and by helping the global Church better understand the life, witness, and contribution of the emerging indigenous Church of Central Asia.',
    activities: [
      {
        id: 'translation-resources',
        title: 'Translation of Christian Books & Ministry Resources',
        description:
          'We develop, translate, publish, and distribute Christian books, discipleship materials, theological resources, leadership manuals, and ministry tools in the languages of Central Asia. With very few resources available in local languages, this ministry helps believers grow in their understanding of Scripture and share the Gospel in their heart language.',
      },
      {
        id: 'research-publications',
        title: 'Research & Publications',
        description:
          'We document the history, theology, ministry, and lived experience of the indigenous Church in Central Asia, amplifying its voice within the global Christian community. Through research and publications, we help the global Church better understand and support the emerging Church of the region.',
      },
    ],
  },
]

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
