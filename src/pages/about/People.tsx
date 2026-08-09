import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import SEO from '../../components/SEO'

interface Leader {
  name: string
  role: string
  bio: string[]
  photo?: string
}

const LEADERSHIP: Leader[] = [
  {
    name: 'Paul Weaver',
    role: 'President & Chairman of the Board',
    photo: '/team/paul-weaver.png',
    bio: [
      'Paul has worked in the corporate world for more than 30 years with a leading aerospace company, serving in leadership roles in Finance and Procurement. Throughout his career, he has remained deeply committed to Christian missions, participating in numerous short-term mission trips to Eastern Europe and serving on various ministry committees. Paul provides strategic oversight and governance for Central Asia Mission as President and Chairman of the Board.',
      'Paul and his wife, Linda, have been married for more than 30 years. They have two children, one granddaughter, and a beloved granddog.',
    ],
  },
  {
    name: 'Mirzabek Dosov',
    role: 'Mission Director',
    photo: '/team/mirzabek-dosov.jpeg',
    bio: [
      'Mirzabek Dosov serves as Mission Director of Central Asia Mission (CAM), providing strategic leadership for ministry initiatives across Central Asia with a focus on leadership development, theological education, church strengthening, and contextual mission.',
      'Born and raised in Uzbekistan, Mirzabek has served in Christian ministry for more than a decade, equipping pastors, church leaders, and emerging leaders throughout Central Asia. He holds a Ph.D. in Contextual Missiology from the Oxford Centre for Mission Studies (OCMS), Oxford, UK. As a Langham Scholar, his doctoral research focused on indigenous Christian witness and contextual theology in the Central Asian context.',
      'Mirzabek also serves as an Adjunct Professor at Divitia Gratiae University (Moldova) and Tashkent Bible Seminary (Uzbekistan). He is a co-founder and Research Fellow of the Central Asian Research Institute (CARI). He has contributed to academic publications on contextual theology, mission studies, Christian-Muslim relations, and indigenous Christian witness, and regularly lectures and mentors leaders in both academic and ministry settings.',
      'Mirzabek and his wife, Zalina, live in Tashkent, Uzbekistan, where they actively serve local churches and communities.',
    ],
  },
  {
    name: 'Salim Dosov',
    role: 'Mission Director',
    bio: [
      'Salim Dosov serves as Mission Director of Central Asia Mission (CAM), providing leadership for ministry initiatives across Central Asia with a focus on evangelism, leadership development, outreach, and camp ministry.',
      'Salim holds a Master\'s degree from TCMI International and has served in Christian ministry for many years, equipping children, youth, and emerging leaders through evangelism, discipleship, and leadership training. He is passionate about developing culturally appropriate approaches to sharing the gospel with Muslims and has led numerous outreach initiatives, leadership programs, and evangelistic camps throughout the region.',
      'Salim previously served as Director of Camp Lake, where he led ministries that impacted hundreds of young people through discipleship, leadership development, and evangelistic outreach.',
      'Salim and his wife, Natalya, live in Tashkent, Uzbekistan, where they continue to serve local churches and strengthen indigenous Christian ministry across Central Asia.',
    ],
  },
]

const BOARD: Leader[] = [
  {
    name: 'Paul Weaver',
    role: 'President & Chairman of the Board',
    photo: '/team/paul-weaver.png',
    bio: [
      'Paul has worked in the corporate world for more than 30 years with a leading aerospace company, serving in leadership roles in Finance and Procurement. His passion for global missions has led him to participate in numerous short-term mission trips to Eastern Europe and serve on various ministry committees. Paul and Linda have been married for over 30 years and have two children, one granddaughter, and a granddog.',
    ],
  },
  {
    name: 'Mike Smith',
    role: 'Board Member',
    photo: '/team/mike-smith.png',
    bio: [
      'Mike Smith brings more than four decades of leadership in missions, pastoral ministry, and international training. He previously served as Executive Director of Missio International Romania and spent 24 years as Pastor of Missions at Highlands Community Church in Renton, Washington. Having ministered in more than 24 countries, Mike provides invaluable global missions experience to the Board. He and his wife, Barbara, have two daughters and one granddaughter.',
    ],
  },
  {
    name: 'Ludmila Viesse',
    role: 'Board Member',
    photo: '/team/ludmila-viesse.png',
    bio: [
      'Originally from Moldova, Ludmila has served in Christian ministry since childhood. A graduate of Northwest University, she combines over 15 years of experience in the technology sector with a lifelong commitment to serving the Church. She is married and has one son.',
    ],
  },
  {
    name: 'Michael Newman',
    role: 'Board Member',
    photo: '/team/michael-newman.png',
    bio: [
      'Michael Newman came to faith in Christ as an adult and has since devoted himself to practical Christian ministry through homeless outreach, soup kitchens, community revitalization, and family shelters. His heart for compassionate service and discipleship strengthens CAM\'s commitment to holistic ministry. Michael and his wife, Elese, have two daughters and two granddaughters.',
    ],
  },
  {
    name: 'Wes Mitchell',
    role: 'Board Member',
    photo: '/team/wes-mitchell.png',
    bio: [
      'Wes Mitchell transitioned from business into full-time ministry in Mexico in 2003. Together with his wife, Barb, he has spent many years equipping churches, leading ministry organizations, and serving local communities. Wes brings extensive experience in organizational leadership and cross-cultural ministry. They have two daughters and four grandchildren.',
    ],
  },
  {
    name: 'Jim Kassebaum',
    role: 'Board Member',
    photo: '/team/jim-kassebaum.png',
    bio: [
      'Jim Kassebaum has been passionate about world missions since his college years. With more than three decades of engineering and leadership experience in the aerospace industry, he now devotes his time to supporting indigenous Christian leaders, theological education, and global evangelism. Jim and his wife, Jennifer, have six children.',
    ],
  },
  {
    name: 'Mirzabek Dosov',
    role: 'Mission Director & Board Member',
    photo: '/team/mirzabek-dosov.jpeg',
    bio: [
      'Mirzabek provides both field leadership and strategic oversight as a member of the Board of Directors. His background in contextual missiology, theological education, and indigenous ministry development helps shape CAM\'s vision for strengthening the Church throughout Central Asia.',
    ],
  },
  {
    name: 'Salim Dosov',
    role: 'Mission Director & Board Member',
    bio: [
      'Salim serves on the Board while also leading CAM\'s mission initiatives. His extensive experience in evangelism, youth outreach, camp ministry, and leadership development contributes to the organization\'s vision of reaching Central Asia with the gospel through culturally relevant and indigenous ministry.',
    ],
  },
]

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <div className="bg-white rounded-2xl border border-sand-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        {leader.photo ? (
          <img
            src={leader.photo}
            alt={`Portrait of ${leader.name}, ${leader.role}`}
            className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover ring-2 ring-sand-200"
            style={leader.photo?.includes('mirzabek') ? { objectPosition: '50% 30%' } : undefined}
            loading="lazy"
          />
        ) : (
          <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-teal-700 text-sand-100 flex items-center justify-center font-serif text-xl font-semibold">
            {leader.name.split(' ').map((n) => n[0]).join('')}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="text-lg sm:text-xl font-serif text-teal-800 leading-tight">{leader.name}</h3>
          <p className="text-rust-500 text-sm font-medium mt-1 leading-snug">{leader.role}</p>
        </div>
      </div>
      <div className="space-y-3">
        {leader.bio.map((para, i) => (
          <p key={i} className="text-teal-600 leading-relaxed text-sm">{para}</p>
        ))}
      </div>
    </div>
  )
}

export default function People() {
  return (
    <div>
      <SEO
        title="Our People — Central Asia Mission"
        description="Central Asia Mission is led by people who live and serve in the region. Meet our leadership team and board of directors."
        path="/about/people"
      />
      <PageHero
        title="Our People"
        subtitle="Local ministry practitioners, church leaders, trainers, mentors, and volunteers committed to serving the peoples of Central Asia."
        image="/samarkand-bukhara/kalyan-16.jpg"
      />
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-page max-w-5xl">
          <div className="space-y-6 text-teal-700 leading-relaxed text-lg mb-16 max-w-3xl">
            <p>
              Central Asia Mission is led by people who live and serve in the region. Our team
              consists of local ministry practitioners, church leaders, trainers, mentors, and
              volunteers who are committed to serving the peoples of Central Asia.
            </p>
            <p>
              Because we live and serve within the region, we understand many of the cultural,
              social, and spiritual realities facing local believers and churches. This local
              presence shapes everything we do — from the way we design ministry programs to the
              way we partner with churches and leaders.
            </p>
          </div>

          {/* Leadership */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-serif text-teal-800 mb-2">Leadership</h2>
            <div className="w-16 h-1 bg-rust-400 rounded-full mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {LEADERSHIP.map((leader) => (
                <LeaderCard key={leader.name} leader={leader} />
              ))}
            </div>
          </div>

          {/* Board of Directors */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-serif text-teal-800 mb-2">Board of Directors</h2>
            <div className="w-16 h-1 bg-rust-400 rounded-full mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {BOARD.map((leader) => (
                <LeaderCard key={`${leader.name}-${leader.role}`} leader={leader} />
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-sand-200 flex flex-wrap gap-4">
            <Link to="/about/history" className="btn-secondary">Our History</Link>
            <Link to="/about/approach" className="btn-primary">Our Approach</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
