import MinistryPage from './MinistryPage'

export default function HumanitarianAid() {
  return (
    <MinistryPage
      title="Humanitarian Aid"
      subtitle="Bringing practical relief and the hope of Christ to communities in crisis across Central Asia."
      image="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1200"
      description="Through humanitarian aid, we respond to the physical and material needs of families and communities facing poverty, crisis, and hardship across Central Asia. We provide food, clothing, household supplies, medical assistance, and emergency relief, working hand in hand with local churches to ensure that aid reaches those who need it most. We believe that compassionate service is a tangible expression of God's love and a powerful witness to the transforming grace of the gospel."
      highlights={[
        'Food, clothing, and household supplies for families in need',
        'Emergency relief for communities affected by crisis',
        'Medical assistance and basic healthcare support',
        'Winter aid for vulnerable families during harsh Central Asian winters',
        'Aid distributed in partnership with local churches',
      ]}
      next={{ label: 'Next: Social Outreach', path: '/what-we-do/social-outreach' }}
      path="/what-we-do/humanitarian-aid"
    />
  )
}
