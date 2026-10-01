# Aakkam Corporate Solutions

> Premier Financial Consulting & Advisory Services — Chennai, India.

A modern, fast, and SEO-optimized corporate advisory website built with **Astro 5** and **Tailwind CSS**, designed for both mobile and desktop screens using a refined light-mode aesthetic inspired by the Krasis Technologies visual design language.

---

## 🏛️ About Aakkam Corporate Solutions

Aakkam Corporate Solutions is a specialized corporate finance and advisory firm founded to deliver transparent, need-based, and value-maximizing capital solutions. We partner with corporate boards, institutional investors, commercial lenders, and founders across India.

### Core Advisory Practices

1. **Fund Raising Solutions** (`/resource`): Term loans, equity private placements, hybrid FCCBs, and future receivables securitization.
2. **Sick Industries Revival** (`/sick`): One Time Settlement (OTS) negotiations, IBC/turnaround packages, and debt-to-equity restructuring.
3. **Project Preparation & Appraisal** (`/project`): Detailed Project Reports (DPR), discounted cash flow (DCF) models, and bank appraisal dossiers.
4. **Due Diligence** (`/due`): Forensic business and legal due diligence verifying corporate reality, IP integrity, and contingent liabilities.
5. **M & A Advisory Solutions** (`/advisory`): Corporate takeover strategies, target valuation, tax-efficient structuring, and transaction closing.
6. **IPO Advisory Services** (`/ipo`): Public readiness audits, merchant banker selection, DRHP/MD&A drafting, and post-listing governance.
7. **Venture Capital Funding** (`/venture`): Growth-stage capital mobilization, financial modeling, valuation benchmarking, and term sheet covenants.
8. **Corporate Tax Planning** (`/tax`): Direct and indirect tax structuring for M&A, cross-border transfer pricing, and statutory dispute resolution.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / SSG)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with custom Krasis-inspired light-mode theme
- **Content**: Markdown / MDX for client case studies (`@astrojs/mdx`)
- **Hosting & CDN**: [Cloudflare Pages / Workers](https://pages.cloudflare.com/) via `@cloudflare/wrangler`
- **Typography & Icons**: Custom SVG vector icons, system sans-serif font stack
- **Communication Channels**: Direct phone call (`tel:+917010311971`), WhatsApp click-to-chat (`+91 70103 11971`), and executive email (`ceo@aakkamcorp.com`)

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start local development server with Wi-Fi network broadcasting
npm run dev -- --host

# Build production bundle for static hosting
npm run build

# Preview production build locally
npm run preview
```

---

## ☁️ Cloudflare Deployment

The static output is generated into the `./dist` directory. Wrangler configuration is managed in `wrangler.json`:

```json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "corp-aakkam",
  "compatibility_date": "2024-09-23",
  "build": {
    "command": "npm run build"
  },
  "assets": {
    "directory": "./dist"
  }
}
```

---

## 📍 Contact Information

- **Corporate Office**: No:3, 2nd Floor, Swaminathan Street, West Mambalam, Chennai - 600 033, Tamil Nadu, India
- **Direct Phone Hotline**: [+91 70103 11971](tel:+917010311971)
- **WhatsApp Direct**: [+91 70103 11971](https://wa.me/917010311971)
- **Executive Email**: [ceo@aakkamcorp.com](mailto:ceo@aakkamcorp.com)
