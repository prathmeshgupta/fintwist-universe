import React, { useState } from 'react';
import { GameMode, GameState, TwistChoice, TwistEvent } from './types/game';
import { createInitialGameState } from './engine/defaultState';
import { advanceTurn, resolveTwistChoice } from './engine/gameEngine';
import { soundFx } from './audio/soundFx';

// Components
import { Navbar } from './components/Navbar';
import { EconomicTicker } from './components/EconomicTicker';
import { NetWorthCard } from './components/Dashboard/NetWorthCard';
import { VitalsCard } from './components/Dashboard/VitalsCard';
import { ActivityFeed } from './components/Dashboard/ActivityFeed';
import { TurnRecapModal } from './components/Dashboard/TurnRecapModal';
import { TransferModal } from './components/Dashboard/TransferModal';
import { TwistEventModal } from './components/TwistModal/TwistEventModal';
import { MarketHub } from './components/Market/MarketHub';
import { BankingHub } from './components/Banking/BankingHub';
import { CareerHub } from './components/Career/CareerHub';
import { RetirementHub } from './components/Retirement/RetirementHub';
import { WealthLab } from './components/Sandbox/WealthLab';
import { AcademyHub } from './components/Academy/AcademyHub';
import { ExpansionManagerView } from './components/Expansions/ExpansionManager';
import { PortfolioAnalytics } from './components/Analytics/PortfolioAnalytics';
import { ArchetypeSelectorModal } from './components/ArchetypeSelectorModal';
import { GameCanvas } from './game/engine/GameCanvas';

import { 
  Compass, 
  TrendingUp, 
  Wallet, 
  Briefcase, 
  Gift, 
  Play, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

export function App() {
  const [state, setState] = useState<GameState>(() => createInitialGameState('archetype_fresh_grad'));
  const [activeMode, setActiveMode] = useState<GameMode>('rpg'); // Default to 2D City RPG Game!
  const [storySubTab, setStorySubTab] = useState<'overview' | 'market' | 'banking' | 'career' | 'retirement'>('overview');
  
  // Modals
  const [pendingEvent, setPendingEvent] = useState<TwistEvent | null>(null);
  const [turnRecap, setTurnRecap] = useState<ReturnType<typeof advanceTurn> | null>(null);
  const [showTransferModal, setShowTransferModal] = useState<boolean>(false);
  const [showArchetypeModal, setShowArchetypeModal] = useState<boolean>(false);

  // Advance turn handler
  const handleAdvanceTurn = () => {
    const result = advanceTurn(state);
    setState(result.nextState);
    setTurnRecap(result);

    // If there is a pending twist event, trigger it after recap or immediately
    if (result.pendingEvent) {
      setTimeout(() => {
        soundFx.playTwistAlert();
        setPendingEvent(result.pendingEvent);
      }, 500);
    }
  };

  // Resolve Twist Event Choice
  const handleSelectTwistChoice = (choice: TwistChoice) => {
    const updatedState = resolveTwistChoice(state, choice);
    setState(updatedState);
    setPendingEvent(null);
  };

  // Lifestyle update
  const handleUpdateLifestyle = (level: GameState['character']['lifestyleLevel']) => {
    state.character.lifestyleLevel = level;
    setState({ ...state });
  };

  // Character Select
  const handleSelectArchetype = (archId: string) => {
    const fresh = createInitialGameState(archId);
    setState(fresh);
    setShowArchetypeModal(false);
    setActiveMode('story');
    setStorySubTab('overview');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      
      {/* Global Navigation Bar */}
      <Navbar
        state={state}
        activeMode={activeMode}
        onSelectMode={(mode) => setActiveMode(mode)}
        onAdvanceTurn={handleAdvanceTurn}
        onResetGame={() => setShowArchetypeModal(true)}
      />

      {/* Live Economic Ticker */}
      <EconomicTicker state={state} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* MODE 0: PROSPERITY CITY (2D RPG OPEN WORLD) */}
        {activeMode === 'rpg' && (
          <div className="space-y-4">
            <GameCanvas
              state={state}
              onUpdateState={(ns) => setState(ns)}
              onSwitchToExecutiveMode={() => setActiveMode('story')}
            />
          </div>
        )}

        {/* MODE 1: STORY / EXECUTIVE ODYSSEY */}
        {activeMode === 'story' && (
          <div className="space-y-6">
            
            {/* Story Sub-Navigation Bar */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-b border-slate-800/80">
              {[
                { id: 'overview', label: 'Command Center', icon: <Compass className="w-4 h-4" /> },
                { id: 'market', label: 'Markets & Stocks', icon: <TrendingUp className="w-4 h-4" /> },
                { id: 'banking', label: 'Banking & Debts', icon: <Wallet className="w-4 h-4" /> },
                { id: 'career', label: 'Career & Hustles', icon: <Briefcase className="w-4 h-4" /> },
                { id: 'retirement', label: '401(k) & FIRE', icon: <Gift className="w-4 h-4" /> },
              ].map((tab) => {
                const isActive = storySubTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      soundFx.playClick();
                      setStorySubTab(tab.id as typeof storySubTab);
                    }}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-slate-800 text-emerald-400 border border-slate-700 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Sub-tab Views */}
            {storySubTab === 'overview' && (
              <div className="space-y-6">
                
                {/* Net Worth Card */}
                <NetWorthCard
                  state={state}
                  onOpenTransferModal={() => setShowTransferModal(true)}
                />

                {/* Vitals & Character Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8">
                    <VitalsCard
                      state={state}
                      onUpdateLifestyle={handleUpdateLifestyle}
                    />
                  </div>
                  <div className="lg:col-span-4">
                    <ActivityFeed state={state} />
                  </div>
                </div>

                {/* Quick Next Turn Action Banner */}
                <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/30">
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      Ready for the Next Quarter?
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Advance 3 months to collect salary, earn dividends, pay down debt, and face your next life twist.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      soundFx.playClick();
                      handleAdvanceTurn();
                    }}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer font-sans"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Advance Quarter ➔</span>
                  </button>
                </div>

              </div>
            )}

            {storySubTab === 'market' && (
              <MarketHub state={state} onUpdateState={(ns) => setState(ns)} />
            )}

            {storySubTab === 'banking' && (
              <BankingHub state={state} onUpdateState={(ns) => setState(ns)} />
            )}

            {storySubTab === 'career' && (
              <CareerHub state={state} onUpdateState={(ns) => setState(ns)} />
            )}

            {storySubTab === 'retirement' && (
              <RetirementHub state={state} onUpdateState={(ns) => setState(ns)} />
            )}

          </div>
        )}

        {/* MODE 2: WEALTH LAB (SANDBOX SIMULATOR) */}
        {activeMode === 'sandbox' && <WealthLab />}

        {/* MODE 3: FIN-TWIST ACADEMY */}
        {activeMode === 'academy' && (
          <AcademyHub state={state} onUpdateState={(ns) => setState(ns)} />
        )}

        {/* MODE 4: EXPANSION PACKS */}
        {activeMode === 'expansions' && (
          <ExpansionManagerView state={state} onUpdateState={(ns) => setState(ns)} />
        )}

        {/* MODE 5: ANALYTICS */}
        {activeMode === 'analytics' && <PortfolioAnalytics state={state} />}

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-900/80 py-6 text-center text-xs text-slate-500">
        <p>
          FinTwist • Designed for Gamified Financial Planning, Investing & Wealth Mastery • Suitable for All Age Groups
        </p>
      </footer>

      {/* Modals */}
      {turnRecap && (
        <TurnRecapModal
          quarterData={turnRecap.quarterCashflow}
          unlockedAchievements={turnRecap.unlockedAchievements}
          quarterNumber={(((state.month - 1) / 3) % 4) + 1}
          yearNumber={Math.floor((state.month - 1) / 12) + 1}
          age={state.character.age}
          onClose={() => setTurnRecap(null)}
        />
      )}

      {pendingEvent && (
        <TwistEventModal
          event={pendingEvent}
          onSelectChoice={handleSelectTwistChoice}
        />
      )}

      {showTransferModal && (
        <TransferModal
          state={state}
          onClose={() => setShowTransferModal(false)}
          onUpdateState={(ns) => setState(ns)}
        />
      )}

      {showArchetypeModal && (
        <ArchetypeSelectorModal
          onSelectArchetype={handleSelectArchetype}
          onClose={() => setShowArchetypeModal(false)}
        />
      )}

    </div>
  );
}

export default App;
