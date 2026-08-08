import MinistryPage from './MinistryPage'

export default function SocialOutreach() {
  return (
    <MinistryPage
      title="Social Outreach"
      subtitle="Serving vulnerable families and individuals through practical assistance and Gospel-centered ministry."
      image="https://images.pexels.com/photos/32037581/pexels-photo-32037581.jpeg?auto=compress&cs=tinysrgb&w=1200"
      description="Serving vulnerable families, people with disabilities, widows, and those facing hardship through practical assistance, counselling, community engagement, and Gospel-centered ministry. We believe God's love is demonstrated through both proclamation and compassionate service, and that the church is called to be a visible expression of Christ's care for the most vulnerable."
      highlights={[
        'Practical assistance for vulnerable families',
        'Support for widows and people with disabilities',
        'Counselling and pastoral care',
        'Community engagement and relationship building',
        'Gospel-centered ministry that meets both physical and spiritual needs',
      ]}
      next={{ label: 'Next: Literature Ministry', path: '/what-we-do/literature-ministry' }}
      path="/what-we-do/social-outreach"
    />
  )
}
