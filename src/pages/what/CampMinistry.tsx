import MinistryPage from './MinistryPage'

export default function CampMinistry() {
  return (
    <MinistryPage
      title="Camp Ministry"
      subtitle="Youth camps and leadership retreats where young people gather for spiritual growth and fellowship."
      image="/images/camp-ministry/photo_5411445015717812433_y.jpg"
      description={[
        'Camp ministry has become one of the most effective avenues through which dozens of people across Central Asia have come to faith in Christ in recent years. We have been actively involved in organizing and leading a variety of camps, from large regional gatherings to smaller evangelistic and discipleship camps throughout the region.',
        'Our flagship event, Camp at the Lake, is the largest camp we organize. It is unique because it is the only Christian camp in Central Asia that brings together young people from all Central Asian countries. Held on the shores of Issyk-Kul Lake in Kyrgyzstan, the camp provides a unique opportunity for fellowship, discipleship, worship, and leadership development across national and cultural boundaries.',
        'Camp at the Lake is intentionally evangelistic. Young Christians are encouraged to invite their non-Christian friends and peers to attend. Through evening invitational sermons, Christ-centered teaching, worship, and genuine Christian community, many hear the gospel, place their faith in Christ, and begin their journey of discipleship.',
      ]}
      gallery={[
        '/images/camp-ministry/photo_5411445015717812433_y.jpg',
        '/images/camp-ministry/photo_5411445015717812434_y.jpg',
        '/images/camp-ministry/photo_5411445015717812437_y.jpg',
        '/images/camp-ministry/photo_5431736721851749088_y.jpg',
        '/images/camp-ministry/photo_5431736721851749090_y.jpg',
        '/images/camp-ministry/photo_5431736721851749091_y.jpg',
        '/images/camp-ministry/photo_5431736721851749093_y.jpg',
      ]}
      highlights={[
        'Youth camps for spiritual growth and discipleship',
        'Leadership retreats for emerging leaders',
        'Fellowship and community building',
        'Safe spaces for young believers to explore faith',
        'Equipping the next generation of Central Asian leaders',
      ]}
      next={{ label: 'Next: Social Outreach', path: '/what-we-do/social-outreach' }}
      path="/what-we-do/camp-ministry"
    />
  )
}
