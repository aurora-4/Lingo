import { useSpeech } from "../hooks/useSpeech";

// Maps any category string (case-insensitive) to an icon + colour.
// Falls back gracefully for new/unknown categories.
const CATEGORY_META = {
    grammar: { icon: "🔤", color: "var(--color-level-3)" },
    pronunciation: { icon: "🗣️", color: "var(--color-level-1)" },
    phonetics: { icon: "🗣️", color: "var(--color-level-1)" },
    culture: { icon: "🌏", color: "var(--color-accent)" },
    sociolinguistics: { icon: "🌏", color: "var(--color-accent)" },
    morphology: { icon: "🔤", color: "var(--color-level-3)" },
    syntax: { icon: "🔤", color: "var(--color-level-3)" },
};

const DEFAULT_META = { icon: "💡", color: "var(--color-accent)" };

export default function TipCard({ item, index }) {
    const { speak } = useSpeech();
    const key = (item.category ?? "").toLowerCase().trim();
    const meta = CATEGORY_META[key] ?? DEFAULT_META;
    const categoryLabel = item.category ?? "Tip";

    return (
        <div
            className="tip-card"
            style={{
                animationDelay: `${index * 70}ms`,
                borderLeftColor: meta.color,
            }}
        >
            <div className="tip-card-header">
                <span className="tip-category-badge" style={{ color: meta.color, borderColor: meta.color }}>
                    {meta.icon} {categoryLabel}
                </span>
            </div>

            <div className="tip-title">{item.title}</div>
            <div className="tip-body">{item.body}</div>

            {item.example && (
                <div className="tip-example">
                    <div className="tip-example-english">{item.example.english}</div>
                    <button
                        className="tip-example-row"
                        onClick={() => speak(item.example.telugu, { rate: 0.75, lang: "en-IN" })}
                        title="Listen to pronunciation"
                    >
                        <span className="tip-example-telugu">{item.example.telugu}</span>
                        <span className="tip-example-speak">🔊</span>
                    </button>
                    <div className="tip-example-phonetic">/{item.example.phonetic}/</div>
                </div>
            )}
        </div>
    );
}
