import { useState, useEffect } from "react";
import { useSpeech } from "../hooks/useSpeech";
import { useProgress } from "../hooks/useProgress";

export default function FillBlankCard({ item, index, categoryId, level, onAnswer }) {
    const { speak } = useSpeech();
    const { getAnswer, saveAnswer } = useProgress();

    // Restore saved answer from localStorage on first render
    const [selected, setSelected] = useState(() => getAnswer(categoryId, level, item.id));

    // Keep in sync if the category/level changes (key-based reset in parent handles
    // most cases, but this covers edge cases like the hook returning stale data)
    useEffect(() => {
        setSelected(getAnswer(categoryId, level, item.id));
    }, [categoryId, level, item.id, getAnswer]);

    const isAnswered = selected !== null;
    const isCorrect = (opt) => opt === item.blank;

    const handleSelect = (opt) => {
        if (isAnswered) return;
        setSelected(opt);
        saveAnswer(categoryId, level, item.id, opt);
        onAnswer?.();          // bump progressVersion in App so tab badges refresh
        if (isCorrect(opt)) {
            speak(item.blank, { rate: 0.75, lang: "en-IN" });
        }
    };

    const getOptionClass = (opt) => {
        if (!isAnswered) return "option-btn";
        if (isCorrect(opt)) return "option-btn correct";
        if (opt === selected) return "option-btn wrong";
        return "option-btn dimmed";
    };

    return (
        <div className="fillblank-card" style={{ animationDelay: `${index * 70}ms` }}>
            <div className="fillblank-number">Q{index + 1}</div>

            <div className="fillblank-prompt">{item.prompt}</div>

            <div className="options-grid">
                {item.options.map((opt) => (
                    <button
                        key={opt}
                        className={getOptionClass(opt)}
                        onClick={() => handleSelect(opt)}
                        disabled={isAnswered}
                    >
                        {opt}
                    </button>
                ))}
            </div>

            {isAnswered && (
                <div className="fillblank-reveal">
                    <div className="reveal-answer">
                        <span className="reveal-icon">{isCorrect(selected) ? "✅" : "💡"}</span>
                        <div>
                            <div className="reveal-telugu">{item.blank}</div>
                            <div className="reveal-phonetic">/{item.phonetic}/</div>
                        </div>
                    </div>
                    <div className="reveal-explanation">{item.explanation}</div>
                </div>
            )}
        </div>
    );
}
