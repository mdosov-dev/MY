import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import SEO from '../../components/SEO'

const BELIEFS = [
  'There is one, eternal God, Creator and Lord of the universe who, in the unity of the Father, the Son and the Holy Spirit, both governs all things according to God\u2019s will and is accomplishing God\u2019s purpose in the world and in the church.',
  'The Holy Scripture in its entirety is inspired by God\u2019s Spirit through human authors and constitutes the revelation of God\u2019s truth to humanity. It is wholly true and trustworthy in all that it affirms. Whatever the Bible, rightly interpreted, is found to teach, we are bound to believe and obey. It is our supreme authority in every matter of belief and conduct.',
  'All human beings are created in God\u2019s own likeness and therefore have inherent value and equality before God. Human sin and guilt since the fall have rendered us subject to God\u2019s wrath and condemnation and have resulted in our alienation from God\u2019s life, suppression of God\u2019s truth and hostility to God\u2019s law. God\u2019s love desires all to come to repentance and to be reconciled rather than condemned.',
  'Salvation from the guilt, penalty and all other consequences of sin has been achieved solely through the work of Jesus Christ \u2013 his perfect obedience, substitutionary death, bodily resurrection and exaltation as Lord. Jesus alone is truly God and truly human, the only mediator between God and humanity. There is salvation through no other person, creed, process or power. Each sinner is justified before God and reconciled to God only by divine grace appropriated by faith alone.',
  'The work of the Holy Spirit is necessary for the individual\u2019s new birth and growth to maturity. The Holy Spirit empowers and indwells the church, enabling its constant renewal in truth, wisdom, faith, holiness, love, ministry, power and mission.',
  'There is one, holy, universal and apostolic church, which is the Body of Christ, and to which all true believers belong. The church\u2019s calling is to worship God forever and to serve God in the world.',
  'As the Father sent the Son into the world, so the Lord Jesus Christ sends his church to participate in God\u2019s mission by words and works. The church is called: to make Christ known; to proclaim God\u2019s truth and the gospel of God\u2019s grace; to make disciples among all nations; to exhibit God\u2019s character through compassionate care for the needy; to demonstrate the reality of God\u2019s kingdom through creative and sacrificial living, the community of love, the quest for righteousness, justice and peace, and the care of God\u2019s creation.',
  'As the Lord Jesus ascended to his Father, so he will return personally, visibly and in glory. He will raise the dead and bring salvation and judgment to final completion. God will then fully establish his Kingdom and finish the new creation \u2013 a new heaven and a new earth from which all evil and evildoers, all suffering and death, will be excluded and in which God will be glorified forever.',
]

export default function Beliefs() {
  return (
    <div>
      <SEO
        title="Our Beliefs — Central Asia Mission"
        description="The biblical convictions that shape our ministry and guide our service across Central Asia."
        path="/about/beliefs"
      />
      <PageHero
        title="Our Beliefs"
        subtitle="The convictions that shape our ministry and guide our service across Central Asia."
        image="https://images.pexels.com/photos/35275538/pexels-photo-35275538.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-page max-w-3xl">
          <div className="space-y-5">
            {BELIEFS.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-white rounded-xl p-6 border border-sand-200 shadow-sm"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-700 text-sand-100 flex items-center justify-center font-serif text-lg font-semibold">
                  {i + 1}
                </span>
                <p className="text-teal-700 leading-relaxed text-lg pt-1">{b}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-sand-200 flex flex-wrap gap-4">
            <Link to="/about/approach" className="btn-secondary">Our Approach</Link>
            <Link to="/partner" className="btn-primary">Partner With Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
