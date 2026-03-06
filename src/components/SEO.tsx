import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://alp-ai.com'
const DEFAULT_IMAGE = `${SITE_URL}/images/hero.png`

interface SEOProps {
  title: string
  description: string
  canonical: string
  schema?: object | object[]
}

export default function SEO({ title, description, canonical, schema }: SEOProps) {
  const fullTitle = `${title} | AI Automation & Engineering — Köln`
  const url = `${SITE_URL}${canonical}`
  const schemaJson = schema
    ? JSON.stringify(Array.isArray(schema) ? { '@context': 'https://schema.org', '@graph': schema } : schema)
    : null

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="de" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AI Automation & Engineering Solutions" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:locale" content="en_GB" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
      {schemaJson && (
        <script type="application/ld+json">{schemaJson}</script>
      )}
    </Helmet>
  )
}
