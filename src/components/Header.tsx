import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { MINISTRY_AREAS } from '../lib/ministryData'

interface NavChild {
  label: string
  path: string
}
interface NavItem {
  label: string
  path?: string
  children?: NavChild[]
}

const NAV: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    children: [
      { label: 'Our History', path: '/about/history' },
      { label: 'Our People', path: '/about/people' },
      { label: 'Our Approach', path: '/about/approach' },
      { label: 'Our Beliefs', path: '/about/beliefs' },
    ],
  },
  {
    label: 'Where We Work',
    children: [
      { label: 'Why Central Asia?', path: '/where-we-work/why-central-asia' },
      { label: 'Uzbekistan', path: '/where-we-work/uzbekistan' },
      { label: 'Kazakhstan', path: '/where-we-work/kazakhstan' },
      { label: 'Kyrgyzstan', path: '/where-we-work/kyrgyzstan' },
      { label: 'Tajikistan', path: '/where-we-work/tajikistan' },
    ],
  },
  {
    label: 'What We Do',
    path: '/what-we-do',
    children: [
      { label: 'Teaching & Training', path: '/what-we-do#teaching-training' },
      { label: 'Evangelism & Outreach', path: '/what-we-do#evangelism-outreach' },
      { label: 'Community Development & Humanitarian Aid', path: '/what-we-do#community-development' },
      { label: 'Scripture & Literature Provision', path: '/what-we-do#scripture-literature' },
    ],
  },
  { label: 'Stories', path: '/stories' },
  { label: 'Partner With Us', path: '/partner' },
  { label: 'Donate', path: '/donate' },
  { label: 'Contact', path: '/contact' },
]

function isPathActive(pathname: string, itemPath: string): boolean {
  if (itemPath === '/') return pathname === '/'
  return pathname.startsWith(itemPath)
}

function isDropdownActive(pathname: string, children?: NavChild[]): boolean {
  if (!children) return false
  return children.some((c) => pathname.startsWith(c.path))
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [selectedMinistry, setSelectedMinistry] = useState(0)
  const [mobileMinistry, setMobileMinistry] = useState<string | null>(null)
  const location = useLocation()
  const closeTimer = useRef<number | null>(null)
  const dropdownRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setMobileExpanded(null)
    setMobileMinistry(null)
  }, [location.pathname])

  const handleEnter = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    setOpenDropdown(label)
    if (label === 'What We Do') setSelectedMinistry(0)
  }
  const handleLeave = () => {
    closeTimer.current = window.setTimeout(() => setOpenDropdown(null), 150)
  }

  const handleDropdownKey = (e: React.KeyboardEvent, label: string) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault()
      setOpenDropdown(openDropdown === label ? null : label)
      if (label === 'What We Do') setSelectedMinistry(0)
    } else if (e.key === 'Escape') {
      setOpenDropdown(null)
      dropdownRefs.current[label]?.focus()
    }
  }

  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome

  const activeMinistry = MINISTRY_AREAS[selectedMinistry]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-sand-50/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-page flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Central Asia Mission home">
          <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-teal-700 text-sand-200 font-serif text-xl font-bold transition-transform group-hover:scale-105">
            CAM
          </span>
          <span
            className={`font-serif text-lg sm:text-xl font-semibold tracking-wide transition-colors ${
              solid ? 'text-teal-800' : 'text-sand-50'
            }`}
          >
            Central Asia Mission
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleEnter(item.label)}
                onMouseLeave={handleLeave}
              >
                <button
                  ref={(el) => { dropdownRefs.current[item.label] = el }}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-rust-300 ${
                    solid ? 'text-teal-800 hover:text-rust-500' : 'text-sand-50 hover:text-sand-200'
                  } ${openDropdown === item.label ? 'text-rust-500' : ''} ${
                    isDropdownActive(location.pathname, item.children) && solid ? 'text-rust-500' : ''
                  } ${isDropdownActive(location.pathname, item.children) && !solid ? 'text-sand-200' : ''}`}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                  onKeyDown={(e) => handleDropdownKey(e, item.label)}
                >
                  {item.label}
                  <span className="ml-1 text-[0.7em]" aria-hidden>▾</span>
                </button>
                {openDropdown === item.label && item.label === 'What We Do' ? (
                  <div className="absolute left-0 top-full pt-2" onMouseEnter={() => handleEnter('What We Do')} onMouseLeave={handleLeave}>
                    <div className="bg-white rounded-xl shadow-xl border border-sand-200 animate-fade-in w-[680px] flex">
                      {/* Initiative list */}
                      <div className="w-[260px] border-r border-sand-200 py-3">
                        {MINISTRY_AREAS.map((area, idx) => (
                          <button
                            key={area.id}
                            onClick={() => setSelectedMinistry(idx)}
                            onMouseEnter={() => setSelectedMinistry(idx)}
                            className={`block w-full text-left px-5 py-3 text-sm font-medium transition-colors ${
                              selectedMinistry === idx
                                ? 'text-rust-500 bg-rust-50'
                                : 'text-teal-700 hover:bg-sand-100 hover:text-rust-500'
                            }`}
                          >
                            {area.title}
                          </button>
                        ))}
                        <Link
                          to="/what-we-do"
                          className="block px-5 py-3 text-xs font-semibold text-teal-600 hover:text-rust-500 transition-colors border-t border-sand-200 mt-2"
                        >
                          View all ministries →
                        </Link>
                      </div>
                      {/* Content panel */}
                      <div className="flex-1 p-6 max-h-[420px] overflow-y-auto">
                        <h3 className="font-serif text-lg font-semibold text-teal-800 mb-2">{activeMinistry.title}</h3>
                        <p className="text-sm text-teal-600 leading-relaxed mb-4">{activeMinistry.intro}</p>
                        <div className="space-y-3">
                          {activeMinistry.activities.map((act) => (
                            <div key={act.id}>
                              <h4 className="text-sm font-semibold text-teal-800">{act.title}</h4>
                              <p className="text-xs text-teal-600 leading-relaxed mt-0.5 whitespace-pre-line">{act.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : openDropdown === item.label ? (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="bg-white rounded-xl shadow-xl border border-sand-200 py-2 min-w-[240px] animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-5 py-2.5 text-sm transition-colors focus:outline-none focus-visible:bg-sand-100 ${
                            isPathActive(location.pathname, child.path)
                              ? 'text-rust-500 font-medium bg-rust-50'
                              : 'text-teal-700 hover:bg-sand-100 hover:text-rust-500'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : item.label === 'Donate' ? (
              <NavLink
                key={item.label}
                to={item.path!}
                className={({ isActive }) =>
                  `ml-2 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rust-300 ${
                    isActive
                      ? 'bg-rust-700 text-sand-50'
                      : 'bg-rust-500 text-sand-50 hover:bg-rust-600 hover:shadow-lg hover:-translate-y-0.5'
                  }`
                }
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                {item.label}
              </NavLink>
            ) : (
              <NavLink
                key={item.label}
                to={item.path!}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-rust-300 ${
                    solid ? 'text-teal-800 hover:text-rust-500' : 'text-sand-50 hover:text-sand-200'
                  } ${isActive ? 'text-rust-500' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-rust-300 ${solid ? 'text-teal-800' : 'text-sand-50'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-sand-50 border-t border-sand-200 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="container-page py-4 flex flex-col gap-1">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-sand-200 pb-2 mb-1">
                  <button
                    className="px-2 py-2 text-teal-900 font-semibold text-sm w-full text-left flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-rust-300 rounded"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    aria-expanded={mobileExpanded === item.label}
                  >
                    {item.label}
                    <span className="text-xs" aria-hidden>{mobileExpanded === item.label ? '−' : '+'}</span>
                  </button>
                  {mobileExpanded === item.label && item.label === 'What We Do' ? (
                    <div className="flex flex-col gap-1 pl-4 mt-1">
                      {MINISTRY_AREAS.map((area) => (
                        <div key={area.id}>
                          <button
                            onClick={() => setMobileMinistry(mobileMinistry === area.id ? null : area.id)}
                            className="px-2 py-2 text-sm font-medium text-teal-700 w-full text-left flex items-center justify-between"
                          >
                            {area.title}
                            <span className="text-xs" aria-hidden>{mobileMinistry === area.id ? '−' : '+'}</span>
                          </button>
                          {mobileMinistry === area.id && (
                            <div className="pl-3 pb-2">
                              <p className="text-xs text-teal-600 leading-relaxed mb-2">{area.intro}</p>
                              <div className="space-y-2">
                                {area.activities.map((act) => (
                                  <div key={act.id}>
                                    <h4 className="text-xs font-semibold text-teal-800">{act.title}</h4>
                                    <p className="text-xs text-teal-600 leading-relaxed mt-0.5 whitespace-pre-line">{act.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      <Link
                        to="/what-we-do"
                        className="px-2 py-2 text-sm font-semibold text-teal-600 hover:text-rust-500"
                      >
                        View all ministries →
                      </Link>
                    </div>
                  ) : mobileExpanded === item.label ? (
                    <div className="flex flex-col gap-1 pl-4 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`px-2 py-2 text-sm rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-rust-300 ${
                            isPathActive(location.pathname, child.path)
                              ? 'text-rust-500 font-medium'
                              : 'text-teal-600 hover:text-rust-500'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : item.label === 'Donate' ? (
                <Link
                  key={item.label}
                  to={item.path!}
                  className="px-2 py-3 text-sand-50 font-bold text-sm bg-rust-500 rounded-lg mt-1 text-center hover:bg-rust-600 transition"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.label}
                  to={item.path!}
                  className={`px-2 py-3 font-medium text-sm border-b border-sand-200 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-rust-300 ${
                    isPathActive(location.pathname, item.path!) && item.path !== '/'
                      ? 'text-rust-500'
                      : 'text-teal-900'
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  )
}
