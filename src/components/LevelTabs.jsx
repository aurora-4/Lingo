const TYPE_ICON = {
    vocabulary: "📖",
    fillblank: "✏️",
    tips: "💡",
};

export default function LevelTabs({ levels, activeLevel, onSelectLevel, categoryId, getLevelProgress, getLevelCorrect, progressVersion }) {
    return (
        <div className="level-tabs" role="tablist" aria-label="Section types">
            {levels.map((level) => {
                // Only show progress for fillblank sections
                let badge = null;
                if (level.type === "fillblank" && getLevelProgress && level.items?.length) {
                    const answered = getLevelProgress(categoryId, level.level);
                    const correct = getLevelCorrect ? getLevelCorrect(categoryId, level.level, level.items) : 0;
                    const total = level.items.length;
                    const allDone = answered >= total;
                    badge = (
                        <span
                            className={`level-progress-badge ${allDone ? "done" : ""}`}
                            title={`${correct} correct, ${answered} answered of ${total}`}
                        >
                            {answered >= total ? "✓" : `${answered}/${total}`}
                        </span>
                    );
                }

                return (
                    <button
                        key={level.level}
                        role="tab"
                        aria-selected={activeLevel === level.level}
                        className={`level-tab ${activeLevel === level.level ? "active" : ""}`}
                        data-level={level.level}
                        onClick={() => onSelectLevel(level.level)}
                    >
                        <span className="level-type-icon">{TYPE_ICON[level.type] || "📖"}</span>
                        <span>{level.label}</span>
                        {badge}
                    </button>
                );
            })}
        </div>
    );
}
