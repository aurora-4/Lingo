import { useState } from "react";
import { useSpeech } from "../hooks/useSpeech";

export default function PhraseCard({ item, index }) {
    const { speak, speaking } = useSpeech();
    const [activeSpeakId, setActiveSpeakId] = useState(null);

    const itemKey = item.id ?? `vocab-${index}`;
    const isThisSpeaking = speaking && activeSpeakId === itemKey;

    const handleSpeak = () => {
        setActiveSpeakId(itemKey);
        speak(item.telugu, { rate: 0.75, lang: "en-IN" });
        setTimeout(() => setActiveSpeakId(null), 4000);
    };

    return (
        <div
            className="phrase-card"
            style={{ animationDelay: `${index * 60}ms` }}
        >
            <div className="card-top">
                <div className="card-english">{item.english}</div>
                <button
                    className={`speak-btn ${isThisSpeaking ? "speaking" : ""}`}
                    onClick={handleSpeak}
                    title="Listen to pronunciation"
                    aria-label={`Speak: ${item.telugu}`}
                >
                    {isThisSpeaking ? "⏹" : "🔊"}
                </button>
            </div>

            {/* Phonetic is the primary visual element */}
            <div className="card-phonetic-primary">{item.phonetic}</div>

            {/* Telugu script is NOT rendered — used only for TTS in speak() above */}

            {(item.usage || item.tip) && <div className="card-divider" />}

            <div className="card-footer">
                {item.usage && (
                    <div className="card-usage">
                        <span className="card-usage-icon">💬</span>
                        <span>{item.usage}</span>
                    </div>
                )}
                {item.tip && (
                    <div className="card-tip">
                        <span className="card-tip-icon">💡</span>
                        <span>{item.tip}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
