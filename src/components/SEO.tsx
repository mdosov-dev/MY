import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  path: string
  image?: string
  type?: string
}

const SITE_URL = 'https://centralasiamission.org'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function SEO({ title, description, path, image, type = 'website' }: SEOProps) {
  useEffect(() => {
    const fullUrl = `${SITE_URL}${path}`
    const ogImage = image || '/samarkand-bukhara/kalyan-15.jpeg'

    document.title = title

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', fullUrl)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:image', ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`)
    setMeta('property', 'og:site_name', 'Central Asia Mission')
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setLink('canonical', fullUrl)
  }, [title, description, path, image, type])

  return null
}
