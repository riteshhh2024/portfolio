# Ritesh Prajapati's Portfolio

A modern, responsive portfolio website showcasing my work as a Software Engineer specializing in AI-driven backend platforms. Built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn UI. Features project showcases with architecture diagrams, work experience timeline, open source contributions, and contact form with Telegram integration.

> **Credits:** This portfolio is built on top of the [Sleek Portfolio](https://github.com/ramxcodes/sleek-portfolio) template by [@ramxcodes](https://github.com/ramxcodes), licensed under the MIT License.

## About Me

Software Engineer with 2.6+ years of experience building backend platforms and AI-driven enterprise applications. Specialized in designing and deploying LLM-powered, agentic systems including multi-agent orchestration, RAG pipelines, and tool-calling workflows. Hands-on with Python, .NET, LangChain/LangGraph, vector databases, and cloud-native architectures.

**Tech Stack:**

- **Agentic AI & LLMs:** Multi-Agent Systems, Tool Calling, Planner–Executor Patterns, LangChain, LangGraph, AutoGen, CrewAI
- **RAG & Retrieval:** Vector Databases (FAISS, Chroma, Pinecone), Hybrid Retrieval, Context Grounding
- **Backend & APIs:** ASP.NET, ASP.NET Core, MVC, REST APIs, Python (FastAPI/Flask)
- **Cloud & DevOps:** Azure (Functions, WebJobs, Blob, Table Storage), AWS S3
- **Data & Storage:** Azure Table Storage, SQL Server, Oracle SQL, Indexing, Query Optimization
- **AI Practices:** Prompt Engineering, Evaluation Pipelines, Explainable AI (JSON Outputs), Fine-tuning

## Features

- **Next.js 15** with App Router
- **Tailwind CSS** for styling
- **Shadcn UI** components
- **Dark/Light** mode
- **Responsive** design
- **MDX** for project detail pages with architecture diagrams
- **Contact Form** with Telegram integration
- **SEO** optimized
- **TypeScript** for type safety
- **Umami Analytics** for privacy-focused analytics

## Prerequisites

- Node.js (v18 or higher)
- Bun (preferred) or npm

## Environment Variables

Create a `.env.local` file in the root directory:

```env
TELEGRAM_BOT_TOKEN="your-token"
TELEGRAM_CHAT_ID="your-chat-id"
GEMINI_API_KEY="your-api-key"
NODE_ENV="development"
NEXT_PUBLIC_URL="http://localhost:3000"
NEXT_PUBLIC_UMAMI_SRC="your-umami-script-url"
NEXT_PUBLIC_UMAMI_ID="your-umami-website-id"

# Spotify API
SPOTIFY_CLIENT_ID=""
SPOTIFY_CLIENT_SECRET=""
SPOTIFY_REFRESH_TOKEN=""
```

### Setting up Telegram Integration

1. Create a bot with [@BotFather](https://t.me/botfather) on Telegram
2. Copy the bot token → `TELEGRAM_BOT_TOKEN`
3. Send a message to your bot, then run:
   ```bash
   bun run testTelegram
   ```
4. Copy the Chat ID → `TELEGRAM_CHAT_ID`

### Setting up Umami Analytics

1. Self-host or use [Umami Cloud](https://cloud.umami.is)
2. Set `NEXT_PUBLIC_UMAMI_SRC` and `NEXT_PUBLIC_UMAMI_ID` from your dashboard

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/riteshhh2024/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

3. Run the development server:
   ```bash
   bun dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Configuration

All content lives in `src/config/`:

| File | Controls |
|---|---|
| `Hero.tsx` | Hero section, skills, description |
| `About.tsx` | About section & skill icons |
| `Experience.tsx` | Work experience & technologies |
| `Projects.tsx` | Project cards & tech stack |
| `OpenSource.tsx` | Open source contributions |
| `Navbar.tsx` | Navigation links |
| `Footer.tsx` | Footer links |
| `Meta.tsx` | SEO & metadata |
| `Contact.tsx` | Contact form settings |
| `Cat.ts` | Enable/disable the cursor cat |

## Adding Projects

1. Create a new MDX file in `src/data/projects/`
2. Add the project entry in `src/config/Projects.tsx`
3. Add project thumbnail in `public/project/`

## License

MIT License — see [LICENSE](LICENSE) for details.

**Original Template:** [Sleek Portfolio](https://github.com/ramxcodes/sleek-portfolio) by [@ramxcodes](https://github.com/ramxcodes)

## Contact

- **Email:** riteshhh.p@gmail.com
- **LinkedIn:** [ritesh-prajapati-9bbb78348](https://www.linkedin.com/in/ritesh-prajapati-9bbb78348/)
- **GitHub:** [riteshhh2024](https://github.com/riteshhh2024)

---

Built by Ritesh Prajapati
