import { useState, useCallback } from "react";
import { useSpeech } from "./hooks/useSpeech";
import { useProgress } from "./hooks/useProgress";
import Sidebar from "./components/Sidebar";
import LevelTabs from "./components/LevelTabs";
import PhraseCard from "./components/PhraseCard";
import FillBlankCard from "./components/FillBlankCard";
import TipCard from "./components/TipCard";
import { CATEGORIES } from "./data/index";

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeLevel, setActiveLevel] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [progressVersion, setProgressVersion] = useState(0); // bump to force re-reads
  const { getLevelProgress, getLevelCorrect, resetAll, resetCategory } = useProgress();

  const handleResetAll = useCallback(() => {
    resetAll();
    setProgressVersion(v => v + 1);
  }, [resetAll]);

  const handleResetCategory = useCallback((catId) => {
    resetCategory(catId);
    setProgressVersion(v => v + 1);
  }, [resetCategory]);
  const { supported } = useSpeech();

  const category = CATEGORIES.find((c) => c.id === activeCategory);
  const levelData = category
    ? category.data.find((l) => l.level === activeLevel) || category.data[0]
    : null;

  const handleSelectCategory = (id) => {
    if (id !== activeCategory) {
      setActiveCategory(id);
      setActiveLevel(1);
    }
  };

  return (
    <div className="app-layout">
      <Sidebar
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        mobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onResetAll={handleResetAll}
        onResetCategory={handleResetCategory}
      />

      <div className="main-content">
        {/* Top Header */}
        <header className="top-header">
          <button
            className="hamburger-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
          <div className="header-section-info">
            {category ? (
              <>
                <div className="header-section-title">
                  <span>{category.emoji}</span> {category.label}
                </div>
                <div className="header-section-subtitle">{category.description}</div>
              </>
            ) : (
              <div className="header-section-title">
                🌿 TeluguLingo — Pronunciation-First Learning
              </div>
            )}
          </div>
          {levelData && (
            <div style={{
              fontSize: "13px", color: "var(--color-text-secondary)",
              fontWeight: 500, textAlign: "right"
            }}>
              {levelData.items.length} items
            </div>
          )}
        </header>

        {/* Page Content */}
        <main className="page-content">
          {!activeCategory ? (
            /* Welcome Screen */
            <div className="welcome-screen">
              <div className="welcome-emoji">🙏</div>
              <h1 className="welcome-title">Namaskaram!</h1>
              <p className="welcome-subtitle">
                Welcome to <strong>TeluguLingo</strong> — your guide to <em>spoken</em> Telugu.
                No script, no memorisation of characters. Just pronunciation, transliteration,
                and conversation.
              </p>
              <p style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
                Choose a section below to get started:
              </p>
              <div className="welcome-categories">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    className="welcome-category-chip"
                    onClick={() => handleSelectCategory(cat.id)}
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
              {!supported && (
                <div className="tts-banner" style={{ maxWidth: 480 }}>
                  ℹ️ Text-to-speech is not supported in your current browser. For audio, please use Chrome or Edge.
                </div>
              )}
            </div>
          ) : (
            /* Category Content */
            <>
              {!supported && (
                <div className="tts-banner">
                  ℹ️ Text-to-speech is not supported here. Use Chrome or Edge for audio playback.
                </div>
              )}

              {/* Level Tabs */}
              <LevelTabs
                levels={category.data}
                activeLevel={activeLevel}
                onSelectLevel={setActiveLevel}
                categoryId={activeCategory}
                getLevelProgress={getLevelProgress}
                getLevelCorrect={getLevelCorrect}
                progressVersion={progressVersion}
              />

              {/* Level Header */}
              {levelData && (
                <div className="level-header">
                  <h2>
                    Level {levelData.level}: {levelData.label}
                  </h2>
                  <p>{levelData.description}</p>
                </div>
              )}

              {/* Progress Bar */}
              {levelData && (
                <div className="progress-container">
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${(activeLevel / category.data.length) * 100}%` }}
                    />
                  </div>
                  <div className="progress-label">
                    Level {activeLevel} of {category.data.length}
                  </div>
                </div>
              )}

              {/* Section Content — rendered by type */}
              {levelData && (
                <div key={`${activeCategory}-${activeLevel}`}>
                  {levelData.type === "vocabulary" && (
                    <div className="phrases-grid">
                      {levelData.items.map((item, index) => (
                        <PhraseCard key={item.id} item={item} index={index} />
                      ))}
                    </div>
                  )}

                  {levelData.type === "fillblank" && (
                    <div className="fillblank-list">
                      {levelData.items.map((item, index) => (
                        <FillBlankCard
                          key={item.id}
                          item={item}
                          index={index}
                          categoryId={activeCategory}
                          level={activeLevel}
                          onAnswer={() => setProgressVersion(v => v + 1)}
                        />
                      ))}
                    </div>
                  )}

                  {levelData.type === "tips" && (
                    <div className="tips-list">
                      {levelData.items.map((item, index) => (
                        <TipCard key={item.id} item={item} index={index} />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Navigate to next level */}
              {levelData && activeLevel < category.data.length && (
                <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
                  <button
                    onClick={() => setActiveLevel((l) => l + 1)}
                    style={{
                      padding: "12px 32px",
                      background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))",
                      border: "none", borderRadius: "var(--radius-lg)",
                      color: "#0d1117", fontWeight: 700, fontSize: "15px",
                      cursor: "pointer", fontFamily: "Outfit, sans-serif",
                      transition: "all 0.2s ease", letterSpacing: "0.3px"
                    }}
                    onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
                    onMouseLeave={e => e.target.style.transform = "translateY(0)"}
                  >
                    Next Level →
                  </button>
                </div>
              )}

              {levelData && activeLevel === category.data.length && (
                <div style={{
                  marginTop: 32, textAlign: "center",
                  padding: "24px", background: "rgba(245,166,35,0.06)",
                  border: "1px solid rgba(245,166,35,0.2)", borderRadius: "var(--radius-xl)"
                }}>
                  <div style={{ fontSize: 36, marginBottom: 8 }}>🎉</div>
                  <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
                    Section Complete!
                  </div>
                  <div style={{ fontSize: 14, color: "var(--color-text-secondary)", marginBottom: 16 }}>
                    You've finished all levels in <strong>{category.label}</strong>. Try another section!
                  </div>
                  <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                    {CATEGORIES.filter(c => c.id !== activeCategory).map(cat => (
                      <button
                        key={cat.id}
                        className="welcome-category-chip"
                        onClick={() => handleSelectCategory(cat.id)}
                      >
                        <span>{cat.emoji}</span> {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
