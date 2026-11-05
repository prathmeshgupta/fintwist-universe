# 🪙 FinTwist — The Wealth, Investing & Life Odyssey

> **Master Money, Survive Life's Twists, Build Your Empire.**  
> An interactive, catchy, gamified financial planning & investing web game for all age groups, built with an extensible, modular expansion pack architecture.

---

## 🌟 Why FinTwist?

Traditional financial education is often dry, full of jargon, and detached from the emotional reality of day-to-day decisions. **FinTwist** turns personal finance, wealth accumulation, and asset management into an addictive, turn-based life simulation combined with an interactive sandbox laboratory.

Whether you are:
- A **high schooler or college student** learning how credit cards, student loans, and compound interest work;
- A **young professional** navigating salary negotiations, emergency buffers, 401(k) matches, and stock market crashes;
- A **parent or teacher** seeking an engaging, hands-on educational tool that kids and teens actually enjoy playing;
- Or a **finance enthusiast** running "what-if" simulations on early retirement (FIRE), fee drags, and market shocks;

FinTwist gives you the keys to experiment without risking real money.

---

## 🎮 Core Game Modes

### 1. 🧭 Life Odyssey (Story Mode)
- **Starting Origins (Archetypes):**
  - 🎓 **Maya Lin (The College Graduate)**: $28k student debt, entry-level job, high compounding runway.
  - 🎨 **Leo Cruz (The Creative Freelancer)**: Solo budgeting, fluctuating cashflows, no corporate safety net.
  - 💼 **Jordan Hayes (The Corporate Analyst)**: High salary, generous 401(k) match, lifestyle creep & car loans.
  - 🛠️ **Marcus Bell (The Skilled Tradesperson)**: Zero college debt, early income, discovering market investing.
  - ⚡ **Sammy Chen (The Young Hustler)**: High school grad with 45+ years of pure compound growth runway.
- **Turn Pacing (1 Quarter per Turn)**: Advance through your career in 3-month increments. Collect paychecks, pay taxes, cover living expenses, and build wealth.
- **The "Twists"**: High-impact decision cards (Destination weddings, emergency root canals, car breakdowns, market crashes, 401(k) match alerts, whole life insurance pitches, WhatsApp phishing scams). Every choice has real tradeoffs and teaches a core financial principle.
- **Financial Health Grade (A+ to F)**: Live audit tracking emergency fund buffer (months of living burn), debt-to-income ratio (DTI), savings rate, and diversification.

### 2. 🔬 Wealth Lab (Interactive Sandbox Simulator)
- A visual "what-if" testing laboratory for anyone to experiment with compound interest:
  - Sliders for Starting Capital ($0 - $100k), Monthly Savings ($0 - $3k), Annual Returns (3% - 16%), Inflation (1% - 8%), Expense Fee Drag (0.03% - 2.5%), and Time Horizon (5 - 45 years).
  - **Market Crash Shock Tester**: Inject a simulated 2008-style -35% crash at any year and observe how Dollar-Cost Averaging (DCA) behaves during market recovery.
  - **Pre-set Experiments**:
    - *Early Bird (Start at 20)*: The miracle of investing for 10 years and stopping vs starting at 35.
    - *2% Fee Vampire Trap*: Watch how Wall Street management fees quietly eat over $300,000 in compound gains!
    - *Fast Track FIRE*: Aggressive savings rate leading to early financial independence.

### 3. 🎓 FinTwist Academy (Gamified Bite-Sized Learning)
- 6+ interactive lessons with built-in visual calculators and knowledge checks:
  1. **The Magic of Compounding & Rule of 72** (Interactive doubling time slider)
  2. **Debt Annihilation: Avalanche vs. Snowball**
  3. **The Sleep-at-Night Emergency Buffer**
  4. **Warren Buffett's Bet: Low-Cost Index Funds vs. Wall Street Fees**
  5. **Inflation: The Silent Wealth Destroyer** (Purchasing power melting visualizer)
  6. **The FIRE Movement & The 4% Rule (25x Freedom Number)**
- Quizzes award in-game **XP** and unlock celebratory achievements!

### 4. 🧩 Modular Expansion Packs System
- **100% Extensible Plugin Architecture**: Add new assets, career paths, twist events, and trophies without touching core game logic.
- **Built-in Expansion Packs**:
  - 🪙 **Crypto & Web3 Frontier**: Adds Bitcoin, Ethereum, Meme coins, Halving cycle, Hardware wallets, and exchange bankruptcy twists.
  - 🏘️ **Real Estate Mogul**: Adds Vanguard REITs, Suburban Turnkey Duplexes, boiler breakdowns, mortgage refinancing break-even calculations.
  - 🦄 **Silicon Valley & Venture Capital**: Adds Angel syndicates, seed funding, cap table equity, and power-law returns.
  - 🌱 **Green Wealth & ESG Future**: Adds Clean Energy ETFs, Carbon Credit allowances, and residential solar 30% tax credit math.
- **Expansion Pack Studio & JSON Sharing**:
  - Create custom expansion packs directly inside the game UI!
  - Export custom packs to clean JSON.
  - Import community packs created by teachers, parents, or friends with 1 click.

### 5. 📊 Analytics & Trophies
- Historical Net Worth Trajectory chart.
- Visual Asset Allocation pie & progress bars.
- 10+ Unlockable Trophies & Badges with synthesized audio fanfares.

---

## 🛠️ Architecture & Tech Stack

```
fintwist/
├── src/
│   ├── types/
│   │   └── game.ts                # TypeScript domain models (State, Assets, Debts, Twists, Packs)
│   ├── audio/
│   │   └── soundFx.ts             # Synthesized Web Audio API sound engine (zero MP3s, instant response)
│   ├── engine/
│   │   ├── defaultState.ts        # Archetype state initialization & expansion activation
│   │   ├── financialHealth.ts     # A+ to F grading algorithms & personalized coaching
│   │   └── gameEngine.ts          # Turn progression, Brownian motion markets, dividends, interest
│   ├── expansions/
│   │   ├── registry.ts            # ExpansionManager registration, active pack toggle, import/export
│   │   └── packs/                 # Built-in expansion modules (Crypto, Real Estate, Startup, Green)
│   ├── data/
│   │   ├── archetypes.ts          # Starting characters
│   │   ├── baseAssets.ts          # Core index funds, equities, bonds, gold
│   │   ├── baseEvents.ts          # 25+ life twist events with financial lessons
│   │   ├── academyLessons.ts      # Interactive lessons with quizzes & XP
│   │   └── achievements.ts        # Unlockable trophies
│   ├── components/
│   │   ├── Navbar.tsx             # HUD, Net worth counter, Turn trigger, Audio toggle
│   │   ├── EconomicTicker.tsx     # Macro indicators (BULL/BEAR, Inflation, Fed Rate, News)
│   │   ├── Dashboard/             # Net Worth card, Vitals, Activity feed, Turn recap modal
│   │   ├── TwistModal/            # Life event decision modal with consequences
│   │   ├── Market/                # Asset exchange, sparklines, buy/sell sliders
│   │   ├── Banking/               # HYSA transfers, Debt Avalanche/Snowball payoff center, Insurance
│   │   ├── Career/                # Salary bumps, upskilling certifications, side hustles
│   │   ├── Retirement/            # 401(k) match optimizer & FIRE Freedom Number calculator
│   │   ├── Sandbox/               # Interactive Wealth Lab SVG simulator
│   │   ├── Academy/               # Gamified learning curriculum & quizzes
│   │   ├── Expansions/            # Pack manager & Custom Pack Studio
│   │   └── Analytics/             # Net worth charts & trophy showcase
│   ├── App.tsx                    # Main game orchestrator & tab routing
│   └── main.tsx                   # React 19 entrypoint
└── package.json
```

- **Frontend**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 + Glassmorphism aesthetic + JetBrains Mono financial typography
- **Audio**: Web Audio API (real-time synthesized sounds; no missing audio assets)
- **Charts**: Custom responsive SVG vector charts (zero bloated heavy chart libraries)
- **Celebrations**: `canvas-confetti` on milestone and quiz completion

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+) and npm

### Installation & Launch

```bash
# 1. Clone or navigate to the directory
cd fintwist

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser:
# http://localhost:5173
```

To build for production:
```bash
npm run build
npm run preview
```

---

## 🧩 Creating Custom Expansion Packs

Any educator, parent, or developer can create an expansion pack by creating a JSON file matching the `ExpansionPack` schema:

```json
{
  "id": "pack_college_life",
  "name": "College Life & Frugal Hacks",
  "version": "1.0.0",
  "description": "Navigate dorm leases, textbooks, campus meal plans, and student discounts.",
  "author": "Campus Finance Club",
  "icon": "🎓",
  "themeColor": "#3B82F6",
  "assets": [
    {
      "id": "asset_textbook_resale",
      "name": "Campus Textbook Buyback Syndicate",
      "symbol": "BOOK",
      "category": "COMMODITY",
      "description": "Buy used textbooks at semester end, resell at start.",
      "educationalNote": "Short-term arbitrage with inventory depreciation risk.",
      "initialPrice": 45,
      "currentPrice": 45,
      "historicalPrices": [40, 42, 45],
      "dividendYield": 0.05,
      "volatility": 0.3,
      "expectedAnnualReturn": 0.12,
      "minPurchase": 10,
      "icon": "📚",
      "riskRating": 2
    }
  ],
  "events": [
    {
      "id": "event_textbook_pdf",
      "title": "The $300 Textbook Dilemma",
      "category": "LIFESTYLE",
      "icon": "📖",
      "story": "Your economics professor requires the 14th edition textbook with an online code for $320.",
      "explanation": "Textbook publishers exploit captive audiences. Used editions or library reserve copies save thousands.",
      "choices": [
        {
          "text": "Buy the brand new bundle for $320",
          "cashChange": -320,
          "educationalTakeaway": "Always check for library reserves or rental copies first."
        },
        {
          "text": "Rent the digital eBook or buy used for $45",
          "cashChange": -45,
          "happinessChange": 4,
          "educationalTakeaway": "Smart frugality frees up cash for your emergency fund."
        }
      ]
    }
  ]
}
```

Simply paste this JSON in the **Expansions Hub** in the game, and it installs instantly into your game session!
