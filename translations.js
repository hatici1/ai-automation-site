/*
 * translations.js
 *
 * This script defines a simple client‑side internationalization (i18n) system
 * for the AI Automation & Engineering Solutions website. It provides a
 * dictionary of translation strings for three languages – English (en),
 * German (de) and Turkish (tr) – and hooks into the DOM to replace the
 * contents of elements marked with a `data‑i18n` attribute. The language
 * selector in the navigation bar triggers updates and the selected
 * language is stored in localStorage so it persists across pages. The
 * translation widget follows best practices for language selectors by
 * limiting the number of languages displayed and integrating cleanly with
 * the site’s design【731447738744592†L69-L100】.
 */

// Translation dictionary
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero (index)
    'hero.title': 'AI Automation & Engineering',
    'hero.subtitle': 'Automate. Innovate. Accelerate. Harness AI and engineering to build the future of your business.',
    'hero.cta': 'Book a Call',

    // Services overview (index)
    'service.sectionTitle': 'What We Offer',
    'service.n8n.title': 'n8n Automations',
    'service.n8n.desc': 'Build powerful workflows that automate repetitive tasks, connect APIs and streamline your business processes using n8n.',
    'service.n8n.button': 'Learn More',
    'service.ai.title': 'AI Engineering',
    'service.ai.desc': 'Design and deploy custom machine learning models, from data preparation to serving via APIs or in your own infrastructure.',
    'service.ai.button': 'Learn More',
    'service.consult.title': 'Consulting & Integration',
    'service.consult.desc': 'Receive expert guidance on architecture, scalability, and best practices for integrating AI and automation into your existing systems.',
    'service.consult.button': 'Learn More',

    // Call‑to‑action (index)
    'cta.heading': 'Ready to transform your workflow?',
    'cta.text': 'Contact us to discover how automation and AI can unlock new opportunities for your business.',
    'cta.button': 'Book a Call',

    // Footer
    'footer.rights': '© 2025 AI Automation & Engineering Solutions. All rights reserved.',

    // About page
    'about.pageHeading': 'About Us',
    'about.pageSubtitle': 'Learn about our mission and the people behind AI Automation & Engineering Solutions.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'We believe that small and medium‑sized businesses should have access to the same sophisticated automation and AI tools as large enterprises. Our mission is to democratise technology by building workflows and intelligent systems that are affordable, transparent and easy to use. Through a combination of visual automation tools like n8n and modern machine learning techniques, we help organisations streamline operations, gain insights and create new value.',
    'about.who.title': 'Who We Are',
    'about.who.text': 'Founded by <strong>Hasan Atici</strong>, an automation enthusiast and AI engineer, AI Solutions grew out of a passion for connecting systems and making technology work for people. With a background in software development, data science and business process optimisation, Hasan has spent years helping clients across industries automate repetitive tasks and build intelligent products. As part of an ongoing journey to master n8n and AI engineering, he documents his learning, shares knowledge and builds a portfolio of open‑source projects. We take pride in being transparent about our methods and delivering solutions that fit your needs.',
    'about.approach.title': 'Our Approach',
    'about.approach.text': 'We follow best practices in responsive design, accessibility and user experience. By taking a mobile‑first approach, using fluid grids and flexible images, and ensuring adequate contrast and keyboard navigation, we build web interfaces that are friendly on any device. In our AI projects we adhere to a structured machine learning process involving problem exploration, data engineering, model engineering and ML Ops. This helps us deliver reliable, maintainable solutions.',
    'about.contact.title': 'Get In Touch',
    'about.contact.text': 'If our values resonate with you and you’re looking for a partner to bring automation and AI into your business, <a href="contact.html">contact us</a>. We’d love to collaborate.',

    // Contact page
    'contact.pageHeading': 'Contact Us',
    'contact.pageSubtitle': 'Let’s discuss how automation and AI can benefit your business. Reach out via email or schedule a call.',
    // Contact page (updated)
    'contact.description': 'We’d love to hear from you. Get in touch via email or schedule a call.',
    'contact.emailButton': 'Email Us',
    'contact.scheduleButton': 'Schedule a Call',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.details.heading': 'Contact Information',
    'contact.details.location': 'Köln, Germany (Europe/Berlin)',
    'contact.details.email': 'Email',

    // Scheduling section
    'schedule.heading': 'Schedule a Call',
    'schedule.text': 'Book a free 30‑minute consultation via our calendar. We’ll discuss your needs and outline a plan tailored for you.',
    'schedule.button': 'Book Now',

    // Solutions overview (index)
    'solutions.sectionTitle': 'Solutions for Your Business',
    'solutions.lead.title': 'Lead Capture & Nurturing',
    'solutions.lead.desc': 'Automate the capture and qualification of leads from your website, send personalised follow‑ups and grow your pipeline.',
    'solutions.lead.button': 'Learn More',
    'solutions.chatbot.title': 'AI Chatbots',
    'solutions.chatbot.desc': 'Deploy chatbots with knowledge bases that answer customer questions 24/7 and free up your team for complex tasks.',
    'solutions.chatbot.button': 'Learn More',
    'solutions.analytics.title': 'Predictive Analytics',
    'solutions.analytics.desc': 'Forecast trends and customer behaviour with custom machine learning models to make data‑driven decisions.',
    'solutions.analytics.button': 'Learn More',

    // Services page
    'services.pageHeading': 'Our Services',
    'services.pageSubtitle': 'Explore the range of solutions we offer to help automate and transform your business.',
    // n8n service
    'services.n8n.title': 'n8n Automations',
    'services.n8n.text1': 'n8n is a flexible automation platform that lets you build sophisticated workflows without limits on logic. It provides a visual editor for fast iteration where you see results instantly. The platform comes with over 400 pre‑configured integrations, so you can automate tasks across your favourite apps without writing boilerplate code. You can also fall back to custom code when you need full control and easily merge, loop or filter your data. Triggers range from scheduled cron jobs to webhooks, enabling nested workflows and flexible orchestration. Built‑in AI nodes allow workflows to summarise documents or answer questions by connecting with large language models.',
    'services.n8n.text2': 'We design and build n8n workflows tailored to your business. Whether you\'re capturing leads, synchronising data between systems, or building complex AI agent pipelines, we\'ll create reliable automation that scales as your needs grow. Our team can host workflows in the cloud or on‑premises, and we use robust debugging and monitoring features to ensure everything runs smoothly.',
    'services.n8n.feature1': '<strong>Visual workflow design:</strong><span> Build and iterate quickly using n8n’s visual editor.</span>',
    'services.n8n.feature2': '<strong>Rich integrations:</strong><span> Access 400+ built‑in connectors or use HTTP requests to connect any API.</span>',
    'services.n8n.feature3': '<strong>Custom logic:</strong><span> Add JavaScript or Python code nodes for bespoke transformations.</span>',
    'services.n8n.feature4': '<strong>Diverse triggers:</strong><span> Cron jobs, webhooks and event streams kick‑off your workflows.</span>',
    'services.n8n.feature5': '<strong>AI nodes:</strong><span> Incorporate language models and summarisation tasks directly into workflows.</span>',
    // AI Engineering service
    'services.ai.title': 'AI Engineering',
    'services.ai.text1': 'Building successful machine learning products requires more than just training a model. Our AI engineering service follows a structured lifecycle: we start with problem exploration to understand your objectives, data sources and success metrics. Next we perform data engineering, designing pipelines to collect, clean and merge data from multiple sources. During model engineering, we select appropriate algorithms, train and evaluate them using held‑out data, then tune parameters for optimal performance. Finally, we handle ML Ops: deploying the model, monitoring its performance and retraining when needed.',
    'services.ai.text2': 'Our team has experience with Python, scikit‑learn, PyTorch, and modern deep learning frameworks. We build scalable APIs around your models using FastAPI and deploy them in Docker containers or serverless environments. We can also integrate your models into n8n workflows to automate predictions and decision making.',
    'services.ai.feature1': '<strong>Problem exploration:</strong><span> Define the business problem and evaluate available data.</span>',
    'services.ai.feature2': '<strong>Data pipelines:</strong><span> Collect, clean and merge data from heterogeneous sources.</span>',
    'services.ai.feature3': '<strong>Model development:</strong><span> Train, test and tune models iteratively.</span>',
    'services.ai.feature4': '<strong>ML Ops:</strong><span> Deploy models, monitor performance and manage retraining.</span>',
    'services.ai.feature5': '<strong>Integration:</strong><span> Expose models via APIs or embed them into automated workflows.</span>',
    // Consulting service
    'services.consult.title': 'Consulting & Integration',
    'services.consult.text1': 'Not sure where to begin? Our consulting service helps you identify high‑impact automation and AI opportunities. We advise on system architecture, data strategy and integration patterns so that your solutions are robust and maintainable. Leveraging responsive design best practices such as mobile‑first layout, fluid grids and flexible images, we create user‑friendly web interfaces for your automation dashboards. We also implement accessibility guidelines — including adequate contrast ratios and keyboard navigation — to ensure your tools are usable by everyone.',
    'services.consult.text2': 'From bridging legacy systems with modern APIs to setting up scalable cloud infrastructure, we integrate your automation and AI workflows seamlessly into your existing stack. We can help you self‑host n8n, configure secure deployments and manage environment promotions, or deploy your AI models with Docker and Kubernetes. Together we’ll build a future‑proof platform that grows with your business.',
    'services.consult.feature1': '<strong>Strategic planning:</strong><span> Identify opportunities for automation and AI adoption.</span>',
    'services.consult.feature2': '<strong>Architecture & integration:</strong><span> Design scalable solutions that connect your systems.</span>',
    'services.consult.feature3': '<strong>User experience:</strong><span> Build responsive, accessible interfaces using mobile‑first and fluid design principles.</span>',
    'services.consult.feature4': '<strong>Deployment:</strong><span> Assist with self‑hosting, cloud deployments and CI/CD pipelines.</span>',

    // Projects page
    'projects.pageHeading': 'Featured Projects',
    'projects.pageSubtitle': 'Examples of how automation and AI can transform your business processes.',
    // Lead Capture project
    'projects.lead.title': 'Lead Capture & Nurturing Automation',
    'projects.lead.desc': 'We built a custom workflow that automatically captures leads from multiple marketing channels, enriches their data using API integrations, and sends personalised follow‑up emails via an AI‑powered email generator. The workflow triggers on new form submissions, performs deduplication and data validation, and pushes qualified leads into the client’s CRM.',
    'projects.lead.feature1': 'Multi‑channel lead capture & enrichment.',
    'projects.lead.feature2': 'Automated email generation using language models.',
    'projects.lead.feature3': 'CRM integration and contact scoring.',
    // AI Chatbot project
    'projects.chatbot.title': 'AI Chatbot with Knowledge Base',
    'projects.chatbot.desc': 'An AI agent built with n8n’s AI nodes that answers customer questions by searching a private knowledge base. The bot uses embeddings and semantic search to find relevant documents, summarises the content and replies conversationally. A fallback integration with human support ensures unresolved queries are escalated.',
    'projects.chatbot.feature1': 'Integrates LLMs via n8n AI nodes.',
    'projects.chatbot.feature2': 'Semantic search on custom document collections.',
    'projects.chatbot.feature3': 'Human‑in‑the‑loop escalation when necessary.',
    // Predictive Analytics project
    'projects.analytics.title': 'Predictive Analytics Platform',
    'projects.analytics.desc': 'A bespoke machine learning model that forecasts customer churn for a subscription business. We engineered data pipelines to combine transactional, behavioural and demographic data. After training and tuning the model, we exposed it as a REST API using FastAPI and integrated it into the client’s dashboard.',
    'projects.analytics.feature1': 'End‑to‑end ML workflow from data engineering to deployment.',
    'projects.analytics.feature2': 'API built with FastAPI and Dockerised for scalability.',
    'projects.analytics.feature3': 'Dashboard integration for real‑time predictions.'
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.projects': 'Projekte',
    'nav.about': 'Über Uns',
    'nav.contact': 'Kontakt',

    // Hero (index)
    'hero.title': 'KI‑Automatisierung & Engineering',
    'hero.subtitle': 'Automatisieren. Innovieren. Beschleunigen. Nutzen Sie KI und Technik, um die Zukunft Ihres Unternehmens zu gestalten.',
    'hero.cta': 'Termin vereinbaren',

    // Services overview (index)
    'service.sectionTitle': 'Was wir anbieten',
    'service.n8n.title': 'n8n‑Automatisierungen',
    'service.n8n.desc': 'Erstellen Sie leistungsstarke Workflows, die wiederkehrende Aufgaben automatisieren, APIs verbinden und Ihre Geschäftsprozesse mit n8n optimieren.',
    'service.n8n.button': 'Mehr erfahren',
    'service.ai.title': 'KI‑Engineering',
    'service.ai.desc': 'Entwerfen und implementieren Sie maßgeschneiderte Machine‑Learning‑Modelle – von der Datenaufbereitung bis zur Bereitstellung über APIs oder Ihre eigene Infrastruktur.',
    'service.ai.button': 'Mehr erfahren',
    'service.consult.title': 'Beratung & Integration',
    'service.consult.desc': 'Erhalten Sie fachkundige Beratung zu Architektur, Skalierbarkeit und Best Practices zur Integration von KI und Automatisierung in Ihre bestehenden Systeme.',
    'service.consult.button': 'Mehr erfahren',

    // Call‑to‑action
    'cta.heading': 'Bereit, Ihre Abläufe zu transformieren?',
    'cta.text': 'Kontaktieren Sie uns, um zu erfahren, wie Automatisierung und KI neue Möglichkeiten für Ihr Unternehmen eröffnen können.',
    'cta.button': 'Termin vereinbaren',

    // Footer
    'footer.rights': '© 2025 AI Automatisierung & Engineering Solutions. Alle Rechte vorbehalten.',

    // About page
    'about.pageHeading': 'Über Uns',
    'about.pageSubtitle': 'Erfahren Sie mehr über unsere Mission und die Menschen hinter AI Automation & Engineering Solutions.',
    'about.mission.title': 'Unsere Mission',
    'about.mission.text': 'Wir sind der Überzeugung, dass kleine und mittelständische Unternehmen Zugang zu denselben hochentwickelten Automatisierungs‑ und KI‑Werkzeugen wie große Konzerne haben sollten. Unsere Mission ist es, Technologie zu demokratisieren, indem wir Workflows und intelligente Systeme entwickeln, die erschwinglich, transparent und einfach zu bedienen sind. Durch eine Kombination aus visuellen Automatisierungstools wie n8n und modernen Machine‑Learning‑Techniken helfen wir Organisationen, Abläufe zu optimieren, Erkenntnisse zu gewinnen und neuen Mehrwert zu schaffen.',
    'about.who.title': 'Wer wir sind',
    'about.who.text': 'AI Solutions wurde von <strong>Hasan Atici</strong>, einem Automatisierungsenthusiasten und KI‑Ingenieur, gegründet und entstand aus einer Leidenschaft dafür, Systeme zu verbinden und Technologie für Menschen nutzbar zu machen. Mit einem Hintergrund in Softwareentwicklung, Data Science und Geschäftsprozessoptimierung hat Hasan jahrelang Kunden in verschiedensten Branchen dabei geholfen, repetitive Aufgaben zu automatisieren und intelligente Produkte zu entwickeln. Als Teil seiner fortlaufenden Reise zur Beherrschung von n8n und KI‑Engineering dokumentiert er seine Lernfortschritte, teilt Wissen und baut ein Portfolio an Open‑Source‑Projekten auf. Wir legen Wert auf Transparenz bei unseren Methoden und liefern Lösungen, die Ihren Bedürfnissen entsprechen.',
    'about.approach.title': 'Unser Ansatz',
    'about.approach.text': 'Wir folgen Best Practices in Bezug auf responsives Design, Barrierefreiheit und Benutzererlebnis. Durch einen Mobile‑First‑Ansatz, flüssige Raster und flexible Bilder sowie ausreichende Kontrastverhältnisse und Tastaturnavigation bauen wir Weboberflächen, die auf jedem Gerät nutzerfreundlich sind. In unseren KI‑Projekten halten wir uns an einen strukturierten Machine‑Learning‑Prozess bestehend aus Problemanalyse, Datenengineering, Modellentwicklung und ML‑Ops. So liefern wir zuverlässige und wartbare Lösungen.',
    'about.contact.title': 'Kontakt aufnehmen',
    'about.contact.text': 'Wenn unsere Werte Sie ansprechen und Sie einen Partner suchen, um Automatisierung und KI in Ihr Unternehmen zu integrieren, <a href="contact.html">kontaktieren Sie uns</a>. Wir würden uns freuen, zusammenzuarbeiten.',

    // Contact page
    'contact.pageHeading': 'Kontakt',
    'contact.pageSubtitle': 'Lassen Sie uns besprechen, wie Automatisierung und KI Ihrem Unternehmen zugute kommen können. Kontaktieren Sie uns per E‑Mail oder vereinbaren Sie einen Termin.',
    'contact.description': 'Wir freuen uns auf Ihre Nachricht. Kontaktieren Sie uns per E‑Mail oder vereinbaren Sie einen Termin.',
    'contact.emailButton': 'E‑Mail senden',
    'contact.scheduleButton': 'Termin vereinbaren',
    'contact.form.name': 'Name',
    'contact.form.email': 'E‑Mail',
    'contact.form.subject': 'Betreff',
    'contact.form.message': 'Nachricht',
    'contact.form.submit': 'Nachricht senden',
    'contact.details.heading': 'Kontaktinformationen',
    'contact.details.location': 'Köln, Deutschland (Europa/Berlin)',
    'contact.details.email': 'E‑Mail',

    // Scheduling section
    'schedule.heading': 'Termin vereinbaren',
    'schedule.text': 'Buchen Sie eine kostenlose 30‑minütige Beratung über unseren Kalender. Wir besprechen Ihre Anforderungen und erarbeiten einen individuellen Plan.',
    'schedule.button': 'Jetzt buchen',

    // Solutions overview (index)
    'solutions.sectionTitle': 'Lösungen für Ihr Unternehmen',
    'solutions.lead.title': 'Lead‑Erfassung & Pflege',
    'solutions.lead.desc': 'Automatisieren Sie die Erfassung und Qualifizierung von Leads von Ihrer Website, senden Sie personalisierte Follow‑ups und erweitern Sie Ihren Vertriebstrichter.',
    'solutions.lead.button': 'Mehr erfahren',
    'solutions.chatbot.title': 'KI‑Chatbots',
    'solutions.chatbot.desc': 'Setzen Sie Chatbots mit Wissensbasen ein, die 24/7 Kundenfragen beantworten und Ihr Team für komplexe Aufgaben entlasten.',
    'solutions.chatbot.button': 'Mehr erfahren',
    'solutions.analytics.title': 'Prädiktive Analytik',
    'solutions.analytics.desc': 'Prognostizieren Sie Trends und Kundenverhalten mit maßgeschneiderten Machine‑Learning‑Modellen, um datenbasierte Entscheidungen zu treffen.',
    'solutions.analytics.button': 'Mehr erfahren',

    // Services page
    'services.pageHeading': 'Unsere Dienstleistungen',
    'services.pageSubtitle': 'Entdecken Sie das Spektrum der Lösungen, die wir anbieten, um Ihr Unternehmen zu automatisieren und zu transformieren.',
    'services.n8n.title': 'n8n‑Automatisierungen',
    'services.n8n.text1': 'n8n ist eine flexible Automatisierungsplattform, mit der Sie anspruchsvolle Workflows ohne logische Einschränkungen erstellen können. Sie bietet einen visuellen Editor für schnelle Iterationen, bei denen Sie sofort Ergebnisse sehen. Die Plattform enthält über 400 vorgefertigte Integrationen, sodass Sie Aufgaben über Ihre Lieblings‑Apps automatisieren können, ohne Boilerplate‑Code zu schreiben. Sie können auch auf eigenen Code zurückgreifen, wenn Sie volle Kontrolle benötigen, und Daten einfach zusammenführen, schleifen oder filtern. Auslöser reichen von geplanten Cron‑Jobs bis zu Webhooks, was verschachtelte Workflows und flexible Orchestrierung ermöglicht. Eingebaute KI‑Knoten erlauben es Workflows, Dokumente zu zusammenfassen oder Fragen zu beantworten, indem sie eine Verbindung zu großen Sprachmodellen herstellen.',
    'services.n8n.text2': 'Wir entwerfen und bauen n8n‑Workflows, die auf Ihr Unternehmen zugeschnitten sind. Ob Sie Leads erfassen, Daten zwischen Systemen synchronisieren oder komplexe KI‑Agenten‑Pipelines aufbauen – wir schaffen zuverlässige Automatisierung, die mit Ihren Anforderungen skaliert. Unser Team kann Workflows in der Cloud oder lokal hosten und nutzt robuste Debugging‑ und Monitoring‑Funktionen, um einen reibungslosen Betrieb zu gewährleisten.',
    'services.n8n.feature1': '<strong>Visuelles Workflow‑Design:</strong><span> Erstellen und iterieren Sie schnell mit n8n’s visuellem Editor.</span>',
    'services.n8n.feature2': '<strong>Umfangreiche Integrationen:</strong><span> Nutzen Sie über 400 integrierte Konnektoren oder verbinden Sie jede API über HTTP‑Requests.</span>',
    'services.n8n.feature3': '<strong>Benutzerdefinierte Logik:</strong><span> Fügen Sie JavaScript‑ oder Python‑Code‑Knoten für individuelle Transformationen hinzu.</span>',
    'services.n8n.feature4': '<strong>Vielfältige Trigger:</strong><span> Cron‑Jobs, Webhooks und Ereignisströme starten Ihre Workflows.</span>',
    'services.n8n.feature5': '<strong>KI‑Knoten:</strong><span> Integrieren Sie Sprachmodelle und Zusammenfassungsaufgaben direkt in Workflows.</span>',
    'services.ai.title': 'KI‑Engineering',
    'services.ai.text1': 'Erfolgreiche Machine‑Learning‑Produkte zu entwickeln erfordert mehr als nur das Trainieren eines Modells. Unser KI‑Engineering‑Service folgt einem strukturierten Lebenszyklus: Wir beginnen mit der Problemanalyse, um Ihre Ziele, Datenquellen und Erfolgskennzahlen zu verstehen. Anschließend führen wir Data Engineering durch und entwerfen Pipelines, um Daten aus verschiedenen Quellen zu sammeln, zu bereinigen und zusammenzuführen. Während der Modellentwicklung wählen wir geeignete Algorithmen aus, trainieren und evaluieren sie mit Testdaten und optimieren Parameter für maximale Leistung. Abschließend kümmern wir uns um ML‑Ops: Wir deployen das Modell, überwachen seine Leistung und führen bei Bedarf erneute Trainings durch.',
    'services.ai.text2': 'Unser Team verfügt über Erfahrung mit Python, scikit‑learn, PyTorch und modernen Deep‑Learning‑Frameworks. Wir bauen skalierbare APIs rund um Ihre Modelle mit FastAPI und deployen sie in Docker‑Containern oder Serverless‑Umgebungen. Wir können Ihre Modelle auch in n8n‑Workflows integrieren, um Vorhersagen und Entscheidungsprozesse zu automatisieren.',
    'services.ai.feature1': '<strong>Problemanalyse:</strong><span> Definieren Sie das Geschäftsproblem und bewerten Sie verfügbare Daten.</span>',
    'services.ai.feature2': '<strong>Datenpipelines:</strong><span> Sammeln, bereinigen und kombinieren Sie Daten aus heterogenen Quellen.</span>',
    'services.ai.feature3': '<strong>Modellentwicklung:</strong><span> Trainieren, testen und optimieren Sie Modelle iterativ.</span>',
    'services.ai.feature4': '<strong>ML‑Ops:</strong><span> Deployen Sie Modelle, überwachen Sie die Leistung und verwalten Sie erneute Trainings.</span>',
    'services.ai.feature5': '<strong>Integration:</strong><span> Stellen Sie Modelle über APIs bereit oder betten Sie sie in automatisierte Workflows ein.</span>',
    'services.consult.title': 'Beratung & Integration',
    'services.consult.text1': 'Sie wissen nicht, wo Sie anfangen sollen? Unser Beratungsservice hilft Ihnen, Automatisierungs- und KI‑Möglichkeiten mit großer Wirkung zu identifizieren. Wir beraten zu Systemarchitektur, Datenstrategie und Integrationsmustern, damit Ihre Lösungen robust und wartbar sind. Basierend auf Best Practices für responsives Design wie Mobile‑First‑Layout, fluiden Rastern und flexiblen Bildern erstellen wir benutzerfreundliche Weboberflächen für Ihre Automations‑Dashboards. Zudem setzen wir Barrierefreiheitsrichtlinien um – einschließlich ausreichender Kontrastverhältnisse und Tastaturnavigation – damit Ihre Werkzeuge von allen genutzt werden können.',
    'services.consult.text2': 'Von der Anbindung von Altsystemen über moderne APIs bis zum Aufbau skalierbarer Cloud‑Infrastrukturen integrieren wir Ihre Automations- und KI‑Workflows nahtlos in Ihren bestehenden Stack. Wir unterstützen Sie beim Self‑Hosting von n8n, konfigurieren sichere Deployments und verwalten Umgebungs‑Promotions oder deployen Ihre KI‑Modelle mit Docker und Kubernetes. Gemeinsam bauen wir eine zukunftssichere Plattform, die mit Ihrem Unternehmen wächst.',
    'services.consult.feature1': '<strong>Strategische Planung:</strong><span> Identifizieren Sie Möglichkeiten für Automatisierung und KI‑Adoption.</span>',
    'services.consult.feature2': '<strong>Architektur & Integration:</strong><span> Entwerfen Sie skalierbare Lösungen, die Ihre Systeme verbinden.</span>',
    'services.consult.feature3': '<strong>Benutzererlebnis:</strong><span> Erstellen Sie responsive, barrierefreie Oberflächen unter Verwendung von Mobile‑First‑ und fluiden Designprinzipien.</span>',
    'services.consult.feature4': '<strong>Deployment:</strong><span> Unterstützung beim Self‑Hosting, Cloud‑Deployments und CI/CD‑Pipelines.</span>',

    // Projects page
    'projects.pageHeading': 'Ausgewählte Projekte',
    'projects.pageSubtitle': 'Beispiele dafür, wie Automatisierung und KI Ihre Geschäftsprozesse transformieren können.',
    'projects.lead.title': 'Lead‑Erfassung & Nurturing‑Automatisierung',
    'projects.lead.desc': 'Wir haben einen benutzerdefinierten Workflow erstellt, der Leads aus mehreren Marketingkanälen automatisch erfasst, ihre Daten über API‑Integrationen anreichert und personalisierte Follow‑up‑E‑Mails über einen KI‑gesteuerten E‑Mail‑Generator sendet. Der Workflow wird bei neuen Formularübermittlungen ausgelöst, führt Duplikatprüfung und Datenvalidierung durch und übergibt qualifizierte Leads an das CRM des Kunden.',
    'projects.lead.feature1': 'Mehrkanalige Lead‑Erfassung & Anreicherung.',
    'projects.lead.feature2': 'Automatisierte E‑Mail‑Erstellung mit Sprachmodellen.',
    'projects.lead.feature3': 'CRM‑Integration und Kontaktbewertung.',
    'projects.chatbot.title': 'KI‑Chatbot mit Wissensdatenbank',
    'projects.chatbot.desc': 'Ein KI‑Agent, der mit n8n’s KI‑Knoten erstellt wurde und Kundenfragen beantwortet, indem er eine private Wissensdatenbank durchsucht. Der Bot verwendet Embeddings und semantische Suche, um relevante Dokumente zu finden, fasst den Inhalt zusammen und antwortet konversationsfähig. Eine Fallback‑Integration mit dem menschlichen Support stellt sicher, dass ungelöste Anfragen eskaliert werden.',
    'projects.chatbot.feature1': 'Integration von LLMs über n8n‑KI‑Knoten.',
    'projects.chatbot.feature2': 'Semantische Suche in benutzerdefinierten Dokumentensammlungen.',
    'projects.chatbot.feature3': 'Eskalation an den Menschen, wenn nötig.',
    'projects.analytics.title': 'Vorhersageanalyse‑Plattform',
    'projects.analytics.desc': 'Ein maßgeschneidertes Machine‑Learning‑Modell, das Kundenabwanderung für ein Abonnementgeschäft vorhersagt. Wir haben Datenpipelines erstellt, um Transaktions-, Verhaltens- und demografische Daten zu kombinieren. Nach dem Training und Tuning haben wir es als REST‑API mit FastAPI bereitgestellt und in das Dashboard des Kunden integriert.',
    'projects.analytics.feature1': 'End‑to‑End‑ML‑Workflow von Datenengineering bis Deployment.',
    'projects.analytics.feature2': 'API mit FastAPI, in Docker für Skalierbarkeit containerisiert.',
    'projects.analytics.feature3': 'Dashboard‑Integration für Echtzeit‑Vorhersagen.'
  },
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.services': 'Hizmetler',
    'nav.projects': 'Projeler',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',

    // Hero (index)
    'hero.title': 'Yapay Zeka Otomasyonu ve Mühendislik',
    'hero.subtitle': 'Otomatize Edin. Yenilik Yapın. Hızlanın. İşinizin geleceğini inşa etmek için Yapay Zeka ve mühendisliği kullanın.',
    'hero.cta': 'Görüşme Planlayın',

    // Services overview (index)
    'service.sectionTitle': 'Ne Sunuyoruz',
    'service.n8n.title': 'n8n Otomasyonları',
    'service.n8n.desc': 'Yinelenen görevleri otomatikleştiren, API\'leri bağlayan ve iş süreçlerinizi n8n kullanarak kolaylaştıran güçlü iş akışları oluşturun.',
    'service.n8n.button': 'Daha Fazla',
    'service.ai.title': 'Yapay Zeka Mühendisliği',
    'service.ai.desc': 'Veri hazırlığından API\'ler veya kendi altyapınız üzerinden sunum yapmaya kadar özel makine öğrenimi modelleri tasarlayın ve dağıtın.',
    'service.ai.button': 'Daha Fazla',
    'service.consult.title': 'Danışmanlık ve Entegrasyon',
    'service.consult.desc': 'Mevcut sistemlerinize AI ve otomasyonu entegre etmek için mimari, ölçeklenebilirlik ve en iyi uygulamalar hakkında uzman rehberlik alın.',
    'service.consult.button': 'Daha Fazla',

    // Call‑to‑action
    'cta.heading': 'İş akışınızı dönüştürmeye hazır mısınız?',
    'cta.text': 'Otomasyon ve yapay zekanın işletmenizde nasıl yeni fırsatlar yaratabileceğini keşfetmek için bizimle iletişime geçin.',
    'cta.button': 'Görüşme Planlayın',

    // Footer
    'footer.rights': '© 2025 AI Otomasyon & Mühendislik Çözümleri. Tüm hakları saklıdır.',

    // About page
    'about.pageHeading': 'Hakkımızda',
    'about.pageSubtitle': 'Görevimiz ve AI Automation & Engineering Solutions ekibinin arkasındaki insanlar hakkında daha fazla bilgi edinin.',
    'about.mission.title': 'Misyonumuz',
    'about.mission.text': 'Biz küçük ve orta ölçekli işletmelerin de büyük şirketler kadar gelişmiş otomasyon ve yapay zeka araçlarına erişebilmesi gerektiğine inanıyoruz. Misyonumuz, n8n gibi görsel otomasyon araçları ve modern makine öğrenimi teknikleri ile uygun maliyetli, şeffaf ve kullanımı kolay iş akışları ve akıllı sistemler oluşturarak teknolojiyi demokratikleştirmektir. Bu sayede organizasyonların operasyonları kolaylaştırmasına, içgörüler elde etmesine ve yeni değerler yaratmasına yardımcı oluyoruz.',
    'about.who.title': 'Biz Kimiz',
    'about.who.text': 'AI Solutions, sistemleri birbirine bağlama ve teknolojiyi insanlar için çalıştırma tutkusundan doğan otomasyon meraklısı ve yapay zeka mühendisi <strong>Hasan Atici</strong> tarafından kuruldu. Yazılım geliştirme, veri bilimi ve iş süreci optimizasyonu geçmişine sahip olan Hasan, yıllar boyunca farklı sektörlerdeki müşterilerin tekrar eden görevleri otomatikleştirmelerine ve akıllı ürünler geliştirmelerine yardımcı oldu. n8n ve AI mühendisliğini ustalıkla öğrenme yolculuğunun bir parçası olarak öğrenimlerini belgeliyor, bilgiyi paylaşıyor ve açık kaynak projelerden oluşan bir portföy oluşturuyor. Yöntemlerimizde şeffaflıkla gurur duyuyor ve ihtiyaçlarınıza uygun çözümler sunuyoruz.',
    'about.approach.title': 'Yaklaşımımız',
    'about.approach.text': 'Mobil öncelikli yaklaşım, akıcı ızgaralar ve esnek görseller kullanarak, yeterli kontrast ve klavye navigasyonu sağlayarak, tüm cihazlarda kullanıcı dostu web arayüzleri oluşturmak için duyarlı tasarım, erişilebilirlik ve kullanıcı deneyiminde en iyi uygulamaları takip ediyoruz. AI projelerimizde, problem keşfi, veri mühendisliği, model mühendisliği ve ML Ops’tan oluşan yapılandırılmış bir makine öğrenimi sürecine bağlı kalıyoruz. Bu, güvenilir ve sürdürülebilir çözümler sunmamıza yardımcı olur.',
    'about.contact.title': 'Bizimle İletişime Geçin',
    'about.contact.text': 'Değerlerimiz size hitap ediyorsa ve işletmenize otomasyon ve yapay zekayı getirecek bir ortak arıyorsanız, <a href="contact.html">bizimle iletişime geçin</a>. Birlikte çalışmaktan mutluluk duyarız.',

    // Contact page
    'contact.pageHeading': 'İletişim',
    'contact.pageSubtitle': 'Otomasyon ve yapay zekanın işletmenize nasıl fayda sağlayacağını konuşalım. Bize e‑posta gönderin veya bir görüşme ayarlayın.',
    'contact.description': 'Sizinle iletişime geçmek isteriz. Bize e‑posta gönderin veya bir görüşme planlayın.',
    'contact.emailButton': 'E‑posta Gönder',
    'contact.scheduleButton': 'Görüşme Planla',
    'contact.form.name': 'Ad',
    'contact.form.email': 'E‑posta',
    'contact.form.subject': 'Konu',
    'contact.form.message': 'Mesaj',
    'contact.form.submit': 'Mesaj Gönder',
    'contact.details.heading': 'İletişim Bilgileri',
    'contact.details.location': 'Köln, Almanya (Avrupa/Berlin)',
    'contact.details.email': 'E‑posta',

    // Scheduling section
    'schedule.heading': 'Görüşme Planlayın',
    'schedule.text': 'Takvimimiz üzerinden ücretsiz 30 dakikalık bir danışma randevusu alın. İhtiyaçlarınızı konuşup size özel bir plan hazırlayalım.',
    'schedule.button': 'Şimdi Randevu Alın',

    // Solutions overview (index)
    'solutions.sectionTitle': 'İşiniz İçin Çözümler',
    'solutions.lead.title': 'Lead Toplama & Yetiştirme',
    'solutions.lead.desc': 'Web sitenizden lead toplama ve nitelendirme süreçlerini otomatikleştirin, kişiselleştirilmiş takipler gönderin ve satış huninizi büyütün.',
    'solutions.lead.button': 'Daha Fazla Bilgi',
    'solutions.chatbot.title': 'Yapay Zeka Sohbet Botları',
    'solutions.chatbot.desc': 'Bilgi tabanlı sohbet botlarıyla müşterilerinize 7/24 hizmet verin, ekibinizin daha karmaşık görevlere odaklanmasını sağlayın.',
    'solutions.chatbot.button': 'Daha Fazla Bilgi',
    'solutions.analytics.title': 'Öngörüsel Analitik',
    'solutions.analytics.desc': 'Özelleştirilmiş makine öğrenmesi modelleriyle trendleri ve müşteri davranışlarını tahmin edin, veri odaklı kararlar alın.',
    'solutions.analytics.button': 'Daha Fazla Bilgi',

    // Services page
    'services.pageHeading': 'Hizmetlerimiz',
    'services.pageSubtitle': 'İşletmenizi otomatikleştirmek ve dönüştürmek için sunduğumuz çözüm yelpazesini keşfedin.',
    'services.n8n.title': 'n8n Otomasyonları',
    'services.n8n.text1': 'n8n, mantık sınırı olmaksızın karmaşık iş akışları oluşturmanıza olanak tanıyan esnek bir otomasyon platformudur. Hızlı yineleme için görsel bir düzenleyici sağlar ve sonuçları anında görürsünüz. Platform, 400’den fazla önceden yapılandırılmış entegrasyonla birlikte gelir, böylece favori uygulamalarınızdaki görevleri şablon kod yazmadan otomatikleştirebilirsiniz. Tam kontrol gerektiğinde kendi kodunuza başvurabilir ve verilerinizi kolayca birleştirebilir, döngüye sokabilir veya filtreleyebilirsiniz. Tetikleyiciler, zamanlanmış cron işleri ile webhook’lar arasında değişir ve iç içe geçmiş iş akışları ve esnek orkestrasyon sağlar. Dahili AI düğümleri, iş akışlarının belgeleri özetlemesine veya büyük dil modellerine bağlanarak soruları yanıtlamasına olanak tanır.',
    'services.n8n.text2': 'İşletmenize özel n8n iş akışları tasarlıyor ve inşa ediyoruz. İster potansiyel müşteri yakalıyor, ister sistemler arasında veri senkronize ediyor, ister karmaşık AI ajan hatları oluşturuyor olun – ihtiyaçlarınız arttıkça ölçeklenen güvenilir otomasyonlar yaratıyoruz. Ekibimiz iş akışlarını bulutta veya şirket içinde barındırabilir ve her şeyin sorunsuz çalışmasını sağlamak için sağlam hata ayıklama ve izleme özellikleri kullanır.',
    'services.n8n.feature1': '<strong>Görsel iş akışı tasarımı:</strong><span> n8n’nin görsel düzenleyicisini kullanarak hızlıca oluşturun ve yineleyin.</span>',
    'services.n8n.feature2': '<strong>Zengin entegrasyonlar:</strong><span> 400’den fazla yerleşik konektöre erişin veya herhangi bir API’yi bağlamak için HTTP istekleri kullanın.</span>',
    'services.n8n.feature3': '<strong>Özel mantık:</strong><span> Özel dönüşümler için JavaScript veya Python kod düğümleri ekleyin.</span>',
    'services.n8n.feature4': '<strong>Çeşitli tetikleyiciler:</strong><span> İş akışlarınızı başlatan cron görevleri, webhook’lar ve olay akışları.</span>',
    'services.n8n.feature5': '<strong>AI düğümleri:</strong><span> Dil modellerini ve özetleme görevlerini doğrudan iş akışlarına entegre edin.</span>',
    'services.ai.title': 'Yapay Zeka Mühendisliği',
    'services.ai.text1': 'Başarılı makine öğrenimi ürünleri geliştirmek sadece bir model eğitmekten fazlasını gerektirir. AI mühendisliği hizmetimiz yapılandırılmış bir yaşam döngüsünü takip eder: Önce hedeflerinizi, veri kaynaklarınızı ve başarı ölçütlerinizi anlamak için problem keşfi yaparız. Ardından, birden fazla kaynaktan veri toplamak, temizlemek ve birleştirmek için veri mühendisliği yaparız. Model mühendisliği sırasında uygun algoritmalar seçer, bunları ayrılmış verilerle eğitir ve değerlendirir, ardından optimum performans için parametreleri ayarlarız. Son olarak ML Ops’u ele alırız: modeli dağıtır, performansını izler ve gerektiğinde yeniden eğitiriz.',
    'services.ai.text2': 'Ekibimiz Python, scikit‑learn, PyTorch ve modern derin öğrenme çerçeveleri konusunda deneyimlidir. Modelleriniz etrafında FastAPI kullanarak ölçeklenebilir API’ler oluşturur ve bunları Docker konteynerlerinde veya sunucusuz ortamlarda dağıtırız. Modellerinizi, tahminleri ve karar verme süreçlerini otomatikleştirmek için n8n iş akışlarına da entegre edebiliriz.',
    'services.ai.feature1': '<strong>Problem keşfi:</strong><span> İş sorununu tanımlayın ve mevcut verileri değerlendirin.</span>',
    'services.ai.feature2': '<strong>Veri hatları:</strong><span> Heterojen kaynaklardan veri toplayın, temizleyin ve birleştirin.</span>',
    'services.ai.feature3': '<strong>Model geliştirme:</strong><span> Modelleri yinelemeli olarak eğitin, test edin ve ayarlayın.</span>',
    'services.ai.feature4': '<strong>ML Ops:</strong><span> Modelleri dağıtın, performansı izleyin ve yeniden eğitimi yönetin.</span>',
    'services.ai.feature5': '<strong>Entegrasyon:</strong><span> Modelleri API’ler aracılığıyla ortaya çıkarın veya otomatik iş akışlarına gömün.</span>',
    'services.consult.title': 'Danışmanlık ve Entegrasyon',
    'services.consult.text1': 'Nereden başlayacağınızı bilmiyor musunuz? Danışmanlık hizmetimiz, yüksek etkili otomasyon ve AI fırsatlarını belirlemenize yardımcı olur. Sistem mimarisi, veri stratejisi ve entegrasyon kalıpları konusunda tavsiye vererek çözümlerinizin sağlam ve sürdürülebilir olmasını sağlarız. Mobil öncelikli düzen, akışkan ızgaralar ve esnek görseller gibi duyarlı tasarımın en iyi uygulamalarından yararlanarak, otomasyon panolarınız için kullanıcı dostu web arayüzleri oluşturuyoruz. Ayrıca, herkesin araçlarınızı kullanabilmesini sağlamak için yeterli kontrast oranları ve klavye navigasyonu gibi erişilebilirlik yönergelerini uyguluyoruz.',
    'services.consult.text2': 'Miras sistemleri modern API’lerle köprülemekten ölçeklenebilir bulut altyapıları kurmaya kadar, otomasyon ve AI iş akışlarınızı mevcut yığınına sorunsuz bir şekilde entegre ediyoruz. n8n’yi kendi kendine barındırmanızda, güvenli dağıtımlar yapılandırmanızda ve ortam yükseltmelerini yönetmenizde veya AI modellerinizi Docker ve Kubernetes ile dağıtmanızda size yardımcı olabiliriz. Birlikte, işletmenizle birlikte büyüyen geleceğe hazır bir platform inşa edeceğiz.',
    'services.consult.feature1': '<strong>Stratejik planlama:</strong><span> Otomasyon ve AI benimseme fırsatlarını belirleyin.</span>',
    'services.consult.feature2': '<strong>Mimari ve entegrasyon:</strong><span> Sistemlerinizi birbirine bağlayan ölçeklenebilir çözümler tasarlayın.</span>',
    'services.consult.feature3': '<strong>Kullanıcı deneyimi:</strong><span> Mobil öncelikli ve akışkan tasarım ilkelerini kullanarak duyarlı, erişilebilir arayüzler oluşturun.</span>',
    'services.consult.feature4': '<strong>Dağıtım:</strong><span> Kendi kendine barındırma, bulut dağıtımları ve CI/CD hatlarında yardımcı olur.</span>',

    // Projects page
    'projects.pageHeading': 'Öne Çıkan Projeler',
    'projects.pageSubtitle': 'Otomasyon ve yapay zekanın iş süreçlerinizi nasıl dönüştürebileceğine dair örnekler.',
    'projects.lead.title': 'Potansiyel Müşteri Yakalama ve Besleme Otomasyonu',
    'projects.lead.desc': 'Birden fazla pazarlama kanalından potansiyel müşterileri otomatik olarak yakalayan, API entegrasyonlarıyla verilerini zenginleştiren ve AI destekli bir e‑posta oluşturucu aracılığıyla kişiselleştirilmiş takip e‑postaları gönderen özel bir iş akışı oluşturduk. İş akışı yeni form gönderimlerinde tetiklenir, çift kontrol ve veri doğrulaması yapar ve nitelikli potansiyel müşterileri müşterinin CRM\'ine aktarır.',
    'projects.lead.feature1': 'Çok kanallı potansiyel müşteri yakalama ve zenginleştirme.',
    'projects.lead.feature2': 'Dil modelleri kullanarak otomatik e‑posta oluşturma.',
    'projects.lead.feature3': 'CRM entegrasyonu ve kişi skorlama.',
    'projects.chatbot.title': 'Bilgi Tabanlı AI Sohbet Botu',
    'projects.chatbot.desc': 'n8n\'nin AI düğümleri ile oluşturulan ve özel bir bilgi tabanını arayarak müşteri sorularını yanıtlayan bir AI ajanı. Bot, ilgili belgeleri bulmak için gömüler ve anlamsal arama kullanır, içeriği özetler ve sohbet tarzında yanıt verir. Çözülemeyen soruların yükseltilmesini sağlayan insan destek entegrasyonu vardır.',
    'projects.chatbot.feature1': 'n8n AI düğümleri aracılığıyla LLM entegrasyonu.',
    'projects.chatbot.feature2': 'Özel belge koleksiyonlarında anlamsal arama.',
    'projects.chatbot.feature3': 'Gerekli olduğunda insan döngüsüne eskalasyon.',
    'projects.analytics.title': 'Tahmine Dayalı Analitik Platformu',
    'projects.analytics.desc': 'Abonelik işinde müşteri kaybını tahmin eden özel bir makine öğrenimi modeli. İşlem, davranış ve demografik verileri birleştirmek için veri hatları tasarladık. Modeli eğittikten ve ayarladıktan sonra FastAPI kullanarak bir REST API olarak sunduk ve müşterinin panosuna entegre ettik.',
    'projects.analytics.feature1': 'Veri mühendisliğinden dağıtıma kadar uçtan uca ML iş akışı.',
    'projects.analytics.feature2': 'FastAPI ile oluşturulmuş API, ölçeklenebilirlik için Docker ile konteynerleştirildi.',
    'projects.analytics.feature3': 'Gerçek zamanlı tahminler için pano entegrasyonu.'
  }
};

/**
 * Update all elements with a data‑i18n attribute based on the current
 * language stored in localStorage. Uses innerHTML to allow rich text such
 * as embedded links. When no translation is available for a key, the
 * original English text remains.
 */
function updateContent() {
  const lang = localStorage.getItem('lang') || 'en';
  document.documentElement.setAttribute('lang', lang);
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const translated = translations[lang] && translations[lang][key];
    if (translated) {
      el.innerHTML = translated;
    }
  });
}

/**
 * Set the current language, persist to localStorage, and refresh content.
 * @param {string} lang
 */
function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  updateContent();
}

// Initialise translations when the document is ready and attach event
// listeners to the language selector. This ensures the selector reflects
// the saved language and updates content immediately after page load.
document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('language-selector');
  const savedLang = localStorage.getItem('lang') || 'en';
  if (selector) {
    selector.value = savedLang;
    selector.addEventListener('change', (event) => {
      setLanguage(event.target.value);
    });
  }
  updateContent();
});