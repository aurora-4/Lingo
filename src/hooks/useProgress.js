import { useCallback } from "react";

const STORAGE_KEY = "lingo_progress";

// ── Low-level helpers ──────────────────────────────────────────────────────────

function load() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

function save(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
        // localStorage blocked (private browsing quota) — fail silently
    }
}

// ── Public hook ────────────────────────────────────────────────────────────────

/**
 * useProgress()
 *
 * Progress shape stored in localStorage:
 * {
 *   "<categoryId>": {
 *     "<level>": {
 *       "<itemId>": "<selectedAnswer>"
 *     }
 *   }
 * }
 *
 * Returns stable function references (useCallback) so consumers don't
 * need to add them to effect dependency arrays.
 */
export function useProgress() {

    /** Return the saved answer for one item, or null if not yet answered. */
    const getAnswer = useCallback((categoryId, level, itemId) => {
        const data = load();
        return data?.[categoryId]?.[String(level)]?.[itemId] ?? null;
    }, []);

    /** Persist the selected answer for one item. */
    const saveAnswer = useCallback((categoryId, level, itemId, answer) => {
        const data = load();
        if (!data[categoryId]) data[categoryId] = {};
        if (!data[categoryId][String(level)]) data[categoryId][String(level)] = {};
        data[categoryId][String(level)][itemId] = answer;
        save(data);
    }, []);

    /**
     * Count answered questions for a category + level.
     * Returns { answered, total } where total must be passed by the caller
     * (we don't store it — it comes from the data array length).
     */
    const getLevelProgress = useCallback((categoryId, level) => {
        const data = load();
        const levelData = data?.[categoryId]?.[String(level)] ?? {};
        return Object.keys(levelData).length;
    }, []);

    /**
     * Count correctly answered questions for a category + level.
     * Requires the items array to compare against correct answers.
     */
    const getLevelCorrect = useCallback((categoryId, level, items) => {
        const data = load();
        const levelData = data?.[categoryId]?.[String(level)] ?? {};
        return items.filter(item => levelData[item.id] === item.blank).length;
    }, []);

    /** Wipe all progress. */
    const resetAll = useCallback(() => {
        try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
    }, []);

    /** Wipe progress for a single category. */
    const resetCategory = useCallback((categoryId) => {
        const data = load();
        delete data[categoryId];
        save(data);
    }, []);

    return { getAnswer, saveAnswer, getLevelProgress, getLevelCorrect, resetAll, resetCategory };
}
