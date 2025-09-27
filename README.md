# AI Automation & Engineering Solutions Website

This static website acts as a modern landing page for an AI automation and engineering consulting business. It showcases services, featured projects, information about the team, and a contact form. The site has been designed with a mobile‑first approach, fluid layouts and accessible color contrasts as recommended by contemporary responsive design guidelines.

The design is intentionally futuristic: headings use the **Orbitron** typeface and the palette blends deep blues with neon teal and golden accents. Cards and buttons have soft glows and subtle animations to give the interface a sleek, high‑tech feel.

## Structure

The site consists of several HTML pages, a shared stylesheet and scripts:

- `index.html` – Home page with hero section and a **Solutions** overview highlighting specific outcomes such as lead capture & nurturing, AI chatbots and predictive analytics.
- `services.html` – Detailed descriptions of available services (n8n automations, AI engineering, consulting & integration).
- `projects.html` – Examples of previous work to demonstrate capabilities.
- `about.html` – Mission statement and background information about the business.
    - `contact.html` – Contact information page. Includes buttons to email directly and schedule a call via Cal.com; no form is submitted on the page.
- `style.css` – Global styles with responsive breakpoints, accessible color palette and futuristic design touches.
- `script.js` – Script to toggle the mobile navigation menu.
- `translations.js` – Client‑side internationalisation system supporting English, German and Turkish.
- `images/hero.png` – Hero image generated specifically for this site.

## Viewing locally

To view the site locally, open `index.html` in a web browser. No build step is necessary because all files are static.

## Deployment

Deploying the site is straightforward. Here are two common methods:

### 1. GitHub Pages

1. Create a new GitHub repository (e.g., `ai-automation-site`).
2. Copy the contents of `ai_automation_site` into the root of the repository and commit the changes.
3. In the repository settings, scroll to **Pages**. Select the `main` branch as the source and choose the root folder (`/`).
4. Save the settings. GitHub will build and host the site at `https://<your-username>.github.io/<repository-name>/` within a few minutes.

### 2. Static hosting services (Netlify, Vercel, etc.)

Below are steps for Vercel, which offers a generous free tier and seamless integration with GitHub.

1. **Create a GitHub repository.** Push the contents of `ai_automation_site` to the root of the repository (e.g., `ai-automation-site`).
2. **Create a Vercel account.** Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.
3. **Import the repository.** From the Vercel dashboard, click **“Add New…” → “Project”**, select your repository and accept the defaults. Vercel will detect that it’s a static project and will deploy it automatically.
4. **Set a custom domain (optional).** In the project settings, you can add a custom domain (e.g., `yourdomain.com`). Vercel provides DNS instructions.

Alternatively, you can deploy directly from your machine using the Vercel CLI:

```bash
npm install -g vercel
cd path/to/ai_automation_site
vercel
```

The CLI will prompt you for configuration options (project name, root directory). Accept the defaults to deploy the current folder. Future updates can be published with `vercel --prod`.

### 3. Self‑hosting

Because the site is static, you can host it on any web server (e.g., Nginx, Apache). Simply copy the files to the server’s document root and configure your domain to point to the server.

## Customization

You can customize the content by editing the HTML files. To change colors or typography, update the CSS variables in `style.css`. The hero image (`images/hero.png`) can be replaced with another image; ensure it has an appropriate aspect ratio and update the `<img>` tag in `index.html` accordingly.

### Scheduling appointments with Cal.com

The site encourages visitors to schedule a 30‑minute call via your Cal.com booking page. You can update your booking link in multiple places:

1. **Hero & CTA buttons:** The hero section and call‑to‑action section on the home page link directly to your Cal.com booking page. If you change your Cal.com URL, update the `href` attributes in `index.html` accordingly.
2. **Contact page:** The contact page includes a prominent “Schedule a Call” button and a separate email button. Edit the `href` values in `contact.html` to point to your Cal.com event and update the translation strings in `translations.js` if needed.

There is no longer a traditional contact form on the site. Instead, the contact page provides clear options to email you directly via `mailto:` or schedule a call via Cal.com. If you later decide to automate form submissions, you can reintroduce a form and configure a webhook or serverless function to handle the data securely.

## License

This project is provided as a starting point for your own website. Feel free to modify and adapt it to your needs.