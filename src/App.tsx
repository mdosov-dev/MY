import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutHistory from './pages/about/History'
import AboutPeople from './pages/about/People'
import AboutApproach from './pages/about/Approach'
import AboutBeliefs from './pages/about/Beliefs'
import WhyCentralAsia from './pages/where/WhyCentralAsia'
import Uzbekistan from './pages/where/Uzbekistan'
import Kazakhstan from './pages/where/Kazakhstan'
import Kyrgyzstan from './pages/where/Kyrgyzstan'
import Tajikistan from './pages/where/Tajikistan'
import WhatWeDo from './pages/what/WhatWeDo'
import SchoolOfLeadership from './pages/what/SchoolOfLeadership'
import CampMinistry from './pages/what/CampMinistry'
import SocialOutreach from './pages/what/SocialOutreach'
import LiteratureMinistry from './pages/what/LiteratureMinistry'
import ChurchStrengthening from './pages/what/ChurchStrengthening'
import HumanitarianAid from './pages/what/HumanitarianAid'
import Stories from './pages/Stories'
import Partner from './pages/Partner'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/history" element={<AboutHistory />} />
          <Route path="/about/people" element={<AboutPeople />} />
          <Route path="/about/approach" element={<AboutApproach />} />
          <Route path="/about/beliefs" element={<AboutBeliefs />} />
          <Route path="/where-we-work/why-central-asia" element={<WhyCentralAsia />} />
          <Route path="/where-we-work/uzbekistan" element={<Uzbekistan />} />
          <Route path="/where-we-work/kazakhstan" element={<Kazakhstan />} />
          <Route path="/where-we-work/kyrgyzstan" element={<Kyrgyzstan />} />
          <Route path="/where-we-work/tajikistan" element={<Tajikistan />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/what-we-do/school-of-leadership" element={<SchoolOfLeadership />} />
          <Route path="/what-we-do/camp-ministry" element={<CampMinistry />} />
          <Route path="/what-we-do/social-outreach" element={<SocialOutreach />} />
          <Route path="/what-we-do/literature-ministry" element={<LiteratureMinistry />} />
          <Route path="/what-we-do/church-strengthening" element={<ChurchStrengthening />} />
          <Route path="/what-we-do/humanitarian-aid" element={<HumanitarianAid />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
