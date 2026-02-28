export default function LevelTabs({ levels, activeLevel, onSelectLevel }) {
    const levelColors = ["#58a6ff", "#3fb950", "#d2a8ff"];

    return (
        <div className="level-tabs" role="tablist" aria-label="Difficulty levels">
            {levels.map((level, i) => (
                <button
                    key={level.level}
                    role="tab"
                    aria-selected={activeLevel === level.level}
                    className={`level-tab ${activeLevel === level.level ? "active" : ""}`}
                    data-level={level.level}
                    onClick={() => onSelectLevel(level.level)}
                >
                    <span className="level-badge">L{level.level}</span>
                    <span>{level.label}</span>
                </button>
            ))}
        </div>
    );
}
