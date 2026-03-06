import SEO from '../components/SEO'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Briefcase, GitBranch, MessageSquare, FileCode2, Bot, Cloud, ArrowRight, Check } from 'lucide-react'

const CAL = 'https://cal.com/hasan-at%C4%B1c%C4%B1-ari3do/30min'
const S = {
  page: { background: '#0a0a0f', color: 'white', fontFamily: 'Inter, system-ui, sans-serif' } as React.CSSProperties,
  maxW: { maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' } as React.CSSProperties,
  card: { background: 'rgba(15,15,26,0.8)', border: '1px solid rgba(30,30,53,0.9)', borderRadius: '1rem' } as React.CSSProperties,
}

const services = [
  { id: 'ai-counseling', Icon: Briefcase, title: 'AI Counseling & Strategy', tagline: 'Clarity before code. Strategy before spend.', price: 'From €500', ctaLabel: 'Book an AI Audit', ctaHref: CAL, external: true,
    bullets: ['AI readiness audit of your workflows & data','Ranked automation wins by ROI','Tool recommendations — n8n, Salesforce, LLMs','3–12 month roadmap with budgets & timelines','Monthly advisory to keep your plan on track'] },
  { id: 'n8n', Icon: GitBranch, title: 'n8n Workflow Automation', tagline: '400+ integrations. Zero boilerplate.', price: 'From €1,200', ctaLabel: 'Discuss Your Workflow', ctaHref: '/contact', external: false,
    bullets: ['Visual workflow design — see results instantly','400+ built-in connectors + any REST API','Custom JS/Python code nodes for complex logic','Cron jobs, webhooks, FTP watchers, event streams','AI nodes for LLM tasks built into workflows'] },
  { id: 'chatbots', Icon: MessageSquare, title: 'AI Chatbots & RAG Systems', tagline: 'Your knowledge base — made conversational.', price: 'From €2,500', ctaLabel: 'Build Your Chatbot', ctaHref: '/contact', external: false,
    bullets: ['Ingest PDFs, Word docs, URLs, databases','Semantic search with embeddings + vector DB','GPT-4o, Claude, Mistral or self-hosted LLMs','Deploy to website, Slack, Teams, WhatsApp','Auto-escalation to human agent when unsure'] },
  { id: 'xml-edi', Icon: FileCode2, title: 'XML / EDI & FTP Integration', tagline: 'Bridge your legacy to the modern world.', price: 'From €1,800', ctaLabel: 'Modernise Your Pipeline', ctaHref: '/contact', external: false,
    bullets: ['SFTP/FTP polling — scheduled or event-driven','EDIFACT, X12, UBL, custom XML schemas','Transform & push to SAP, Salesforce, any API','Slack/email alerts on any parse failure','AI anomaly detection for duplicate orders'] },
  { id: 'ai-engineering', Icon: Bot, title: 'AI Engineering & MLOps', tagline: 'From data to deployed model — end to end.', price: 'Custom quote', ctaLabel: 'Discuss Your ML Project', ctaHref: '/contact', external: false,
    bullets: ['Problem exploration & data assessment','Data pipelines from heterogeneous sources','Model training, testing & iterative tuning','FastAPI deployment in Docker or serverless','MLOps monitoring, drift detection, retraining'] },
  { id: 'salesforce', Icon: Cloud, title: 'Salesforce Development & CRM', tagline: 'Your CRM, built around how you actually sell.', price: 'From €1,200', ctaLabel: 'Discuss Your CRM Needs', ctaHref: '/contact', external: false,
    bullets: ['Custom objects, fields & Apex programming','Lightning Web Components & Flow automations','REST/SOAP integrations with any external system','Two-way n8n ↔ Salesforce real-time sync','Team training & full documentation included'] },
]

const packages = [
  { title: 'AI Readiness Audit', sub: 'Clarity. Direction. Confidence.', price: '€500', desc: 'Know exactly what to automate and which tools to use.' },
  { title: 'Salesforce Reset', sub: 'Structure. Clarity. Control.', price: '€1,200', desc: 'Rebuild your CRM into a system your team trusts.' },
  { title: 'AI Inbox Automation', sub: 'Routing. Understanding. Relief.', price: '€1,500', desc: 'AI reads, classifies and routes every message automatically.' },
  { title: 'XML/EDI Pipeline', sub: 'Reliable. Monitored. Error-free.', price: '€1,800', desc: 'FTP watcher + XML/EDI parser + ERP push + real-time alerts.' },
  { title: 'AI Sales Assistant', sub: 'Follow-ups. Notes. Momentum.', price: '€2,000', desc: 'Reminders, notes and CRM updates — fully automated.' },
  { title: 'RAG Chatbot', sub: 'Your knowledge. Conversational.', price: '€2,500', desc: 'AI chatbot trained on your docs, embedded everywhere.' },
  { title: 'Ongoing Partnership', sub: 'Optimise. Tune. Govern.', price: '€500/mo', desc: 'We maintain and evolve everything we build month after month.' },
]


const SCHEMA_SVC = [
  {
    '@type': 'ItemList',
    'name': 'AI Automation Services',
    'itemListElement': [
      {'@type':'ListItem','position':1,'item':{'@type':'Service','name':'AI Counseling & Strategy','description':'AI readiness audit, adoption roadmap and ROI analysis for DACH SMBs.','areaServed':'EU','offers':{'@type':'Offer','price':'500','priceCurrency':'EUR'}}},
      {'@type':'ListItem','position':2,'item':{'@type':'Service','name':'n8n Workflow Automation','description':'No-code workflow automation with 400+ integrations.','areaServed':'EU','offers':{'@type':'Offer','price':'1200','priceCurrency':'EUR'}}},
      {'@type':'ListItem','position':3,'item':{'@type':'Service','name':'AI Chatbots & RAG Systems','description':'Custom conversational AI using your private knowledge base.','areaServed':'EU','offers':{'@type':'Offer','price':'2500','priceCurrency':'EUR'}}},
      {'@type':'ListItem','position':4,'item':{'@type':'Service','name':'XML / EDI & FTP Integration','description':'Legacy file exchange automation and B2B data pipelines.','areaServed':'EU','offers':{'@type':'Offer','price':'1800','priceCurrency':'EUR'}}},
      {'@type':'ListItem','position':5,'item':{'@type':'Service','name':'AI Engineering & MLOps','description':'Custom ML models, data pipelines and production API deployment.','areaServed':'EU'}},
      {'@type':'ListItem','position':6,'item':{'@type':'Service','name':'Salesforce Development','description':'Custom Salesforce apps, Apex, Lightning components and CRM integrations.','areaServed':'EU','offers':{'@type':'Offer','price':'1200','priceCurrency':'EUR'}}},
    ],
  },
  {
    '@type': 'FAQPage',
    'mainEntity': [
      {'@type':'Question','name':'What does an AI counseling session include?','acceptedAnswer':{'@type':'Answer','text':'A structured audit of your workflows, identification of automation opportunities, tool recommendations, a realistic ROI estimate and a prioritised 3–6 month adoption roadmap.'}},
      {'@type':'Question','name':'How long does it take to build an n8n automation?','acceptedAnswer':{'@type':'Answer','text':'Most standard automations are built and tested within 1–2 weeks. Complex multi-system integrations may take 3–4 weeks.'}},
      {'@type':'Question','name':'What is the minimum budget to get started?','acceptedAnswer':{'@type':'Answer','text':'An AI Readiness Audit starts from €500. Workflow automation packages start from €1,200. The free 30-minute consultation scopes what you need.'}},
      {'@type':'Question','name':'Can you integrate legacy FTP-based XML/EDI systems?','acceptedAnswer':{'@type':'Answer','text':'Yes. We specialise in bridging FTP/SFTP servers and XML/EDI file exchange with modern APIs and automation platforms like n8n.'}},
      {'@type':'Question','name':'Do I need technical knowledge to use the automations you build?','acceptedAnswer':{'@type':'Answer','text':'No. We document every workflow and provide hands-on training so your team can manage automations without coding.'}},
      {'@type':'Question','name':'Do you work with businesses outside Germany?','acceptedAnswer':{'@type':'Answer','text':'Yes. We work remotely across the DACH region and broader Europe in English, German and Turkish.'}},
    ],
  },
]

export default function Services() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150)
    }
  }, [hash])

  return (
    <>
      <SEO
        title="Services: n8n Automation, AI Chatbots, XML/EDI, Salesforce"
        description="Custom n8n workflows, RAG chatbots, XML/EDI FTP pipelines, AI engineering and Salesforce development for DACH SMBs. Fixed-price packages from €500."
        canonical="/services"
        schema={SCHEMA_SVC}
      />
      <div style={S.page}>
      {/* Hero */}
      <section style={{ padding: '6rem 0 3rem', textAlign: 'center', background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 70%)' }}>
        <div style={S.maxW}>
          <h1 style={{ fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Our Services</h1>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>From strategy to shipping — everything you need to run on AI.</p>
        </div>
      </section>

      {/* Quick nav */}
      <nav style={{ position: 'sticky', top: '64px', zIndex: 40, background: 'rgba(10,10,15,0.95)', borderBottom: '1px solid rgba(30,30,53,0.8)', backdropFilter: 'blur(12px)', padding: '0.75rem 0', overflowX: 'auto' }}>
        <div style={{ ...S.maxW, display: 'flex', gap: '0.5rem', width: 'max-content', minWidth: '100%' }}>
          {services.map(s => (
            <a key={s.id} href={`#${s.id}`} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', padding: '0.375rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 500, color: '#94a3b8', border: '1px solid rgba(30,30,53,0.8)', background: 'rgba(15,15,26,0.6)', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#c084fc'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.4)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#94a3b8'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,30,53,0.8)' }}
            >
              <s.Icon size={11} /> {s.title.split(' ')[0]}
            </a>
          ))}
        </div>
      </nav>

      {/* Service sections */}
      {services.map((svc, i) => (
        <section key={svc.id} id={svc.id} style={{ padding: '4rem 0', scrollMarginTop: '120px', background: i % 2 === 1 ? 'rgba(15,15,26,0.4)' : 'transparent' }}>
          <div style={S.maxW}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
              {/* Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svc.Icon size={22} color="#c084fc" />
                  </div>
                  <div>
                    <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.25rem, 3vw, 1.625rem)', letterSpacing: '-0.02em', color: 'white', lineHeight: 1.2 }}>{svc.title}</h2>
                    <p style={{ color: '#a78bfa', fontSize: '0.875rem', marginTop: '0.25rem' }}>{svc.tagline}</p>
                  </div>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {svc.bullets.map(b => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <Check size={15} color="#a78bfa" style={{ marginTop: '0.125rem', flexShrink: 0 }} />
                      <span style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.5 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price card */}
              <div style={{ ...S.card, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', borderColor: 'rgba(139,92,246,0.2)' }}>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.375rem' }}>Starting from</p>
                  <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, background: 'linear-gradient(135deg, #c084fc, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{svc.price}</p>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Fixed scope · Fixed price · Clear timeline — no surprises.</p>
                {svc.external ? (
                  <a href={svc.ctaHref} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.9rem' }}>
                    {svc.ctaLabel} <ArrowRight size={15} />
                  </a>
                ) : (
                  <a href={svc.ctaHref} className="btn-secondary" style={{ fontSize: '0.9rem' }}>
                    {svc.ctaLabel} <ArrowRight size={15} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing packages */}
      <section id="packages" style={{ padding: '4rem 0', background: 'rgba(15,15,26,0.4)' }}>
        <div style={S.maxW}>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 2rem)', textAlign: 'center', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Fixed-Price Packages</h2>
          <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '2.5rem' }}>Transparent pricing. Scoped before we start.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {packages.map(pkg => (
              <div key={pkg.title} style={{ ...S.card, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <h3 style={{ fontWeight: 600, color: 'white', fontSize: '0.9375rem' }}>{pkg.title}</h3>
                  <p style={{ color: '#a78bfa', fontSize: '0.75rem', marginTop: '0.125rem' }}>{pkg.sub}</p>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.8125rem', flex: 1 }}>{pkg.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                  <span style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 700, fontSize: '1.125rem', background: 'linear-gradient(135deg, #c084fc, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{pkg.price}</span>
                  <a href={CAL} target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem 1rem', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', borderRadius: '0.5rem', color: 'white', fontSize: '0.8125rem', fontWeight: 700, textDecoration: 'none', boxShadow: '0 0 15px rgba(124,58,237,0.35)' }}>
                    Book a Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
