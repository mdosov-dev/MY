import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import SEO from '../../components/SEO'

export default function History() {
  return (
    <div>
      <SEO
        title="Our History — Central Asia Mission"
        description="From years of faithful ministry across Central Asia to a vision for strengthening indigenous Christian witness throughout the region."
        path="/about/history"
      />
      <PageHero
        title="Our History"
        subtitle="From years of faithful ministry across Central Asia to a vision for strengthening indigenous Christian witness."
        image="https://images.pexels.com/photos/19439197/pexels-photo-19439197.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <section className="py-16 lg:py-24 bg-sand-50">
        <div className="container-page max-w-3xl">
          <div className="prose-custom space-y-6 text-teal-700 leading-relaxed text-lg">
            <p>
              Central Asia Mission (CAM) is the natural continuation of a ministry journey that began
              through Partners Global Network (PGN). For many years, PGN, under the leadership of
              Mike Smith, focused on building strategic partnerships with indigenous Christian leaders
              and churches throughout Eastern Europe and the former Soviet Union. Through these
              relationships, God opened doors to encourage, equip, and strengthen local believers in
              regions where the Church often served under challenging circumstances.
            </p>
            <p>
              As these partnerships deepened, an increasing number of ministry opportunities emerged
              throughout Central Asia. Local leaders began expressing the need for long-term
              investment in leadership development, contextual theological education, evangelism,
              and holistic community engagement. Over time, it became clear that God was calling for
              a more focused ministry dedicated specifically to the unique cultural, social, and
              spiritual context of Central Asia.
            </p>
            <p>
              Out of this growing clarity and years of ministry experience, Central Asia Mission was
              established. While continuing the relational values and partnership model that shaped
              Partners Global Network, CAM embraces a distinct calling: to strengthen indigenous
              churches and equip local leaders to proclaim the gospel and serve their communities
              throughout Central Asia.
            </p>
            <p>
              Today, Central Asia Mission partners with churches, pastors, educators, and ministry
              leaders across the region to foster sustainable, locally led ministries that reflect
              the love of Christ and contribute to the flourishing of their communities. We believe
              that the future of the Church in Central Asia is best advanced through indigenous
              leadership, contextual ministry, and long-term partnership.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-sand-200 flex flex-wrap gap-4">
            <Link to="/about/people" className="btn-secondary">Meet Our People</Link>
            <Link to="/about/approach" className="btn-primary">Our Approach</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
