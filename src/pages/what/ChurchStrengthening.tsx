import MinistryPage from './MinistryPage'

export default function ChurchStrengthening() {
  return (
    <MinistryPage
      title="Church Strengthening"
      subtitle="Equipping pastors, leaders, and local churches through contextual theological training, mentoring, and leadership development."
      image="https://images.pexels.com/photos/19439207/pexels-photo-19439207.jpeg?auto=compress&cs=tinysrgb&w=1200"
      description={[
        'Healthy churches require well-equipped leaders. Across Central Asia, many pastors and church leaders serve with limited access to theological education, mentoring, and ministry resources while facing significant spiritual, social, and practical challenges. We come alongside them through long-term relationships that provide encouragement, coaching, and biblical training for faithful and sustainable ministry.',
        'Our approach to theological education is deeply contextual. Rather than importing ministry models from outside, we seek to equip leaders through biblical and mission training that is faithful to Scripture and relevant to the realities of Central Asian cultures, languages, and communities. We believe that theology developed within its own context produces churches that are both biblically faithful and genuinely indigenous.',
        'To support this vision, we are developing the Central Asia Mission and Training Center, which will serve as a regional hub for leadership development, contextual theological education, discipleship, youth ministry, church gatherings, conferences, social outreach, and collaborative ministry initiatives.',
      ]}
      highlights={[
        'Contextual theological and mission training',
        'Leadership development and pastoral mentoring',
        'Coaching for sustainable ministry',
        'Training for church leaders and ministry teams',
        'Discipleship and church strengthening',
        'Church gatherings and ministry conferences',
        'Encouraging cooperation among local churches',
        'A ministry hub for regional outreach and leadership development',
      ]}
      path="/what-we-do/church-strengthening"
    />
  )
}
