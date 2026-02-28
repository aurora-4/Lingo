import { useState, useEffect, useRef } from "react";

export function useSpeech() {
    const [speaking, setSpeaking] = useState(false);
    const [supported, setSupported] = useState(false);
    const utteranceRef = useRef(null);

    useEffect(() => {
        setSupported("speechSynthesis" in window);
        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    const speak = (text, options = {}) => {
        if (!supported) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = options.rate || 0.75;
        utterance.pitch = options.pitch || 1.0;
        utterance.volume = options.volume || 1.0;
        utterance.lang = options.lang || "en-IN";

        utterance.onstart = () => setSpeaking(true);
        utterance.onend = () => setSpeaking(false);
        utterance.onerror = () => setSpeaking(false);

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    };

    const stop = () => {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
            setSpeaking(false);
        }
    };

    return { speak, stop, speaking, supported };
}
