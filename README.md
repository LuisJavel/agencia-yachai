# YachayIA Digital - Agency Platform Documentation

Welcome to the official repository of **YachayIA Digital**. This platform is built with a focus on high performance, premium aesthetics, and seamless AI integration.

## 🚀 Tech Stack

- **Frontend**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS 4.0 (for ultra-fast runtime CSS)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Next.js API Routes (Node.js)
- **AI**: OpenAI GPT-4 Integrated Widget

## 🛠️ Installation & Development

To run the project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The site will be available at `http://localhost:3000`.

## 🤖 Chatbot Manual: "Yachay Assistant"

The chatbot is located in `src/components/Chatbot.tsx`. 

### Key Features:
- **Bilingual Initial Greeting**: "Welcome to YachayIA Digital. Alli shamushca."
- **Quick Actions**: Preset buttons for common services (Web, SEO, Automation, Fintech).
- **Simulated Intelligence**: Currently uses a mock response system that can be easily connected to the `/api/chat` endpoint using the OpenAI SDK.

### Connecting to GPT-4:
To enable real GPT-4 responses, you need to:
1. Create an OpenAI API Key.
2. Setup an environment variable `OPENAI_API_KEY`.
3. Update the `handleSend` function in `Chatbot.tsx` to fetch from an API Route that calls `openai.chat.completions.create`.

## 📈 Scalability & Maintenance

### SEO Strategy:
- **Meta Tags**: Managed in `src/app/page.tsx` via the `metadata` object.
- **Dynamic Sitemap**: Use `next-sitemap` to generate the `sitemap.xml` automatically on every build.
- **Blog Content**: The blog is currently a preview. For scalability, we recommend integrating **Sanity.io** or **Contentful** through the `src/components/BlogPreview.tsx` component.

### Automations (CRM Implementation):
- The contact form is located in `src/components/Footer.tsx`.
- **Zapier/Make Integration**: We recommend creating a webhook URL in Zapier and calling it inside the form's `onSubmit` handler to sync leads to HubSpot or Zoho CRM.

### Fintech API Security:
- Current endpoint: `/api/fintech/v1`.
- For production, implement **NextAuth.js** or **Supabase Auth** to handle OAuth2 flows and protect the financial endpoints.

## 🌍 Cultural Note: "Alli Shamushca"
YachayIA Digital celebrates its Andean heritage. The Kichwa greeting "Alli shamushca" means "Welcome", and "Yachay" stands for "Knowledge/Learning". This identity should be preserved in all future design iterations.

---

*Desarrollado con ❤️ por Antigravity para YachayIA Digital.*
