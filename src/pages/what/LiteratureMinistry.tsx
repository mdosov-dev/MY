import MinistryPage from './MinistryPage'

export default function LiteratureMinistry() {
  return (
    <MinistryPage
      title="Literature Ministry"
      subtitle="Developing, translating, and distributing Christian resources that strengthen churches and equip believers."
      image="https://images.pexels.com/photos/19439101/pexels-photo-19439101.jpeg?auto=compress&cs=tinysrgb&w=1200"
      description="Developing, translating, publishing, and distributing Christian resources that strengthen churches and equip believers throughout Central Asia. With very few resources available in local languages, our literature ministry plays a vital role in helping believers grow in their understanding of Scripture and their ability to share the Gospel in their heart language."
      highlights={[
        'Translation of discipleship and theology resources into local languages',
        'Development of contextually relevant materials',
        'Publishing and distribution to partner churches',
        'Resources for new believers facing pressure',
        'Equipping pastors with study materials in their heart language',
      ]}
      next={{ label: 'Next: Church Strengthening', path: '/what-we-do/church-strengthening' }}
      path="/what-we-do/literature-ministry"
    />
  )
}
