/**
 * Data index — defines the section/subsection hierarchy shown in the sidebar.
 *
 * Structure mirrors the json-data/ folder layout:
 *   json-data/Section_1/overview_telugu.json  →  SECTIONS[0].categories[0]
 *
 * When you add a new JSON file via generate_data.py:
 *   1. Import the generated JS file here
 *   2. Add a category entry inside the relevant section (or create a new section)
 *
 * CATEGORIES (flat list) is derived automatically and used by App.jsx.
 */

// ── Section 1 imports ──────────────────────────────────────────────────────────
import section1OverviewTelugu from "./Section_1/01_Overview_Telugu";
import section1021BasicTeluguPronounsAndSentenceStructure from "./Section_1/02_1_Basic_Telugu_Pronouns_and_Sentence_Structure";
import section1022BasicTeluguPronounsAndSentenceStructure from "./Section_1/02_2_Basic_Telugu_Pronouns_and_Sentence_Structure";
import section1023BasicTeluguPronounsAndSentenceStructure from "./Section_1/02_3_Basic_Telugu_Pronouns_and_Sentence_Structure";

// ── Hierarchical structure ─────────────────────────────────────────────────────
export const SECTIONS = [
    {
        id: "section_1",
        label: "Section 1",
        categories: [
            {
                id: "section1-overview",
                label: "Telugu Overview",
                emoji: "🌿",
                description: "Pronouns, verb order & honorifics",
                data: section1OverviewTelugu,
                color: "#f5a623",
            },
            {
                id: "section_1-02_1_basic_telugu_pronouns_and_sentence_structure",
                label: "1 Basic Telugu Pronouns and Sentence Structure",
                emoji: "📄",
                description: "Auto-generated section",
                data: section1021BasicTeluguPronounsAndSentenceStructure,
                color: "#4a90e2",
            },
            {
                id: "section_1-02_2_basic_telugu_pronouns_and_sentence_structure",
                label: "2 Basic Telugu Pronouns and Sentence Structure",
                emoji: "📄",
                description: "Auto-generated section",
                data: section1022BasicTeluguPronounsAndSentenceStructure,
                color: "#4a90e2",
            },
            {
                id: "section_1-02_3_basic_telugu_pronouns_and_sentence_structure",
                label: "3 Basic Telugu Pronouns and Sentence Structure",
                emoji: "📄",
                description: "Auto-generated section",
                data: section1023BasicTeluguPronounsAndSentenceStructure,
                color: "#4a90e2",
            },
        ],
    },
];

// ── Flat list (used internally by App.jsx category look-ups) ──────────────────
export const CATEGORIES = SECTIONS.flatMap((s) => s.categories);
