const food = [
    {
        level: 1,
        label: "Basic Vocabulary",
        description: "Essential food and dining words",
        items: [
            { id: "f1_01", english: "Water", telugu: "Neellu", phonetic: "NEH-loo", usage: "Asking for water", tip: "Double 'l' makes a soft retroflex sound" },
            { id: "f1_02", english: "Food / Rice", telugu: "Annam", phonetic: "UN-num", usage: "Referring to a meal or cooked rice", tip: "Rice is the staple — 'annam' often means a full meal" },
            { id: "f1_03", english: "Curry / Side dish", telugu: "Koora", phonetic: "KOO-rah", usage: "Asking for a vegetable dish", tip: "Very commonly used; 'koora' = any cooked vegetable side" },
            { id: "f1_04", english: "Spicy", telugu: "Kaaramu", phonetic: "KAH-rah-moo", usage: "Describing spice level", tip: "'Chala kaaramu' = very spicy" },
            { id: "f1_05", english: "Sweet", telugu: "Teeyagaa", phonetic: "TEE-yah-gah", usage: "Describing sweet food", tip: "The 'ee' is a long vowel — stretch it out" },
            { id: "f1_06", english: "Delicious", telugu: "Ruchigaraa", phonetic: "ROO-chee-gah-rah", usage: "Complimenting food", tip: "'Ruchi' = taste; adding '-gaara' makes it descriptive" },
            { id: "f1_07", english: "Restaurant", telugu: "Hotel", phonetic: "HOH-tel", usage: "Asking for a restaurant", tip: "Interestingly, locals say 'hotel' to mean restaurant/eatery" },
            { id: "f1_08", english: "Tea", telugu: "Chaaya", phonetic: "CHAH-yah", usage: "Ordering tea", tip: "Identical to Hindi 'chai' — very recognizable" },
            { id: "f1_09", english: "Hungry", telugu: "Aakali", phonetic: "AH-kah-lee", usage: "Saying you're hungry", tip: "'Naaku aakali ga undi' = I am feeling hungry" },
            { id: "f1_10", english: "Full / Satisfied", telugu: "Vayasu nindi", phonetic: "VYE-yuh-soo NIN-dee", usage: "After a meal", tip: "Literally 'belly is full' — a natural expression" },
        ],
    },
    {
        level: 2,
        label: "Simple Phrases",
        description: "Short phrases for ordering and dining out",
        items: [
            { id: "f2_01", english: "I am hungry", telugu: "Naaku aakali ga undi", phonetic: "NAH-koo AH-kah-lee gah OON-dee", usage: "Expressing hunger", tip: "'Naaku' = to me; 'ga undi' = feels like" },
            { id: "f2_02", english: "What do you have?", telugu: "Meeru emmi ivvagalaru?", phonetic: "MEH-roo EM-mee iv-vah-gah-LAH-roo?", usage: "Asking what's available", tip: "Great for local eateries where there's no menu" },
            { id: "f2_03", english: "One plate rice, please", telugu: "Oka plate annam ivvandi", phonetic: "OH-kah PLATE UN-num iv-VUN-dee", usage: "Ordering rice", tip: "'Ivvandi' is polite for 'please give'" },
            { id: "f2_04", english: "Less spicy please", telugu: "Kaaramuu takkuva ga cheyyandi", phonetic: "KAH-rah-moo TUK-koo-vah gah chey-YUN-dee", usage: "Requesting mild food", tip: "'Takkuva' = less; 'cheyyandi' = please do/make" },
            { id: "f2_05", english: "How much is this?", telugu: "Idi entha?", phonetic: "IH-dee EN-thah?", usage: "Asking the price", tip: "Short and useful in any market or dhaba" },
            { id: "f2_06", english: "Very tasty!", telugu: "Chala ruchigaraa undi!", phonetic: "CHAH-lah ROO-chee-gah-rah OON-dee!", usage: "Complimenting the cook", tip: "A sure way to make any cook smile!" },
        ],
    },
    {
        level: 3,
        label: "Conversational Sentences",
        description: "Full restaurant and food conversations",
        items: [
            { id: "f3_01", english: "A table for two, please.", telugu: "Iddari ki oka table ivvandi.", phonetic: "ID-dah-ree kee OH-kah TABLE iv-VUN-dee.", usage: "Requesting a table", tip: "'Iddari' = for two people; 'oka' = one" },
            { id: "f3_02", english: "I would like to order. What do you recommend?", telugu: "Nenu order cheyyaali. Meeru emmi suggest chestaru?", phonetic: "NEH-noo ORDER chey-YAH-lee. MEH-roo EM-mee suggest CHES-tah-roo?", usage: "Starting to order at a restaurant", tip: "Using 'suggest' (English loanword) is very natural in spoken Telugu" },
            { id: "f3_03", english: "Can I get the bill, please?", telugu: "Bill ivvagalaraa?", phonetic: "BILL iv-vah-gah-LAH-rah?", usage: "Asking for the check", tip: "Raise your hand and say this — you'll be understood immediately" },
            { id: "f3_04", english: "This food is very spicy but delicious!", telugu: "Ee food chala kaaramu ga undi kaani chala ruchigaraa undi!", phonetic: "EE food CHAH-lah KAH-rah-moo gah OON-dee KAH-nee CHAH-lah ROO-chee-gah-rah OON-dee!", usage: "Expressing mixed feelings about a dish", tip: "'Kaani' = but/however — links two contrasting ideas" },
        ],
    },
];

export default food;
