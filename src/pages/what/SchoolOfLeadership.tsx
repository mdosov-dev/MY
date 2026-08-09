import MinistryPage from './MinistryPage'

export default function SchoolOfLeadership() {
  return (
    <MinistryPage
      title="School of Leadership"
      subtitle="Equipping current and emerging Christian leaders for faithful ministry across Central Asia."
      image="https://images.pexels.com/photos/19439144/pexels-photo-19439144.jpeg?auto=compress&cs=tinysrgb&w=1200"
      description="The School of Leadership is a holistic discipleship and leadership development program designed to equip young Christians and new believers from Muslim backgrounds. Through intensive training modules, contextual teaching, mentoring, and practical ministry experience, participants are nurtured in their spiritual growth, grounded in a solid biblical and theological foundation, and equipped with the character, leadership, and ministry skills needed for faithful Christian service. Bringing together emerging leaders from across the region, the program combines biblical depth with practical application, preparing participants to become mature disciples of Christ and active agents of transformation within their churches, communities, and wider society."
      highlights={[
        'Theological education grounded in Scripture',
        'Discipleship and spiritual formation',
        'Leadership development and mentoring',
        'Practical ministry training and application',
        'Cohort-based learning across churches and cities',
      ]}
      next={{ label: 'Next: Camp Ministry', path: '/what-we-do/camp-ministry' }}
      path="/what-we-do/school-of-leadership"
    />
  )
}
