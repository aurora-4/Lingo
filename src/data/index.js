import greetings from "../data/greetings";
import food from "../data/food";
import travel from "../data/travel";
import verbs from "../data/verbs";

export const CATEGORIES = [
    {
        id: "greetings",
        label: "Greetings",
        emoji: "🙏",
        description: "Hellos, goodbyes & polite expressions",
        data: greetings,
        color: "#f5a623",
    },
    {
        id: "food",
        label: "Food & Dining",
        emoji: "🍛",
        description: "Ordering food & describing tastes",
        data: food,
        color: "#e8813a",
    },
    {
        id: "travel",
        label: "Travel",
        emoji: "🚌",
        description: "Directions, transport & locations",
        data: travel,
        color: "#58a6ff",
    },
    {
        id: "verbs",
        label: "Common Verbs",
        emoji: "💬",
        description: "Everyday action words",
        data: verbs,
        color: "#3fb950",
    },
];
