const verbs = [
    {
        level: 1,
        label: "Basic Vocabulary",
        description: "High-frequency Telugu action words",
        items: [
            { id: "v1_01", english: "To eat", telugu: "Tindam", phonetic: "TIN-dum", usage: "Discussing eating", tip: "'Nenu tintanu' = I am eating" },
            { id: "v1_02", english: "To drink", telugu: "Taadam", phonetic: "TAH-dum", usage: "Discussing drinking", tip: "'Neellu taadam' = to drink water" },
            { id: "v1_03", english: "To go", telugu: "Velladam", phonetic: "VEL-lah-dum", usage: "Talking about going somewhere", tip: "'Nenu vellatanu' = I am going" },
            { id: "v1_04", english: "To come", telugu: "Raavadam", phonetic: "RAH-vah-dum", usage: "Talking about coming", tip: "'Nenu vastanu' = I will come" },
            { id: "v1_05", english: "To see / look", telugu: "Choosukodam", phonetic: "CHOO-soo-koh-dum", usage: "Referring to viewing/watching", tip: "'Choosu' is the root — add endings for tense" },
            { id: "v1_06", english: "To speak / talk", telugu: "Matlaadadam", phonetic: "MAT-lah-dah-dum", usage: "Talking about speaking", tip: "'Telugu matlaadadam' = to speak Telugu" },
            { id: "v1_07", english: "To understand", telugu: "Artham cheskovadam", phonetic: "AR-thum CHES-koh-vah-dum", usage: "Expressing comprehension", tip: "'Artham kaaledu' = I didn't understand" },
            { id: "v1_08", english: "To buy", telugu: "Konugovadam", phonetic: "KOH-noo-goh-vah-dum", usage: "Shopping", tip: "'Nenu dee konuguntanu' = I am buying this" },
            { id: "v1_09", english: "To want / need", telugu: "Kaavadam", phonetic: "KAH-vah-dum", usage: "Expressing desire or need", tip: "'Naaku kaavali' = I want/need" },
            { id: "v1_10", english: "To know", telugu: "Telusukovadam", phonetic: "TEH-loo-soo-koh-vah-dum", usage: "Expressing knowledge", tip: "'Naaku Telugu telusu' = I know Telugu" },
        ],
    },
    {
        level: 2,
        label: "Simple Phrases",
        description: "Verb-driven phrases for daily use",
        items: [
            { id: "v2_01", english: "I don't understand", telugu: "Naaku artham kaaledu", phonetic: "NAH-koo AR-thum KAH-leh-doo", usage: "When you don't get something", tip: "One of the most important phrases for a learner!" },
            { id: "v2_02", english: "Can you speak slowly?", telugu: "Meeru manda ga matladaagalaraa?", phonetic: "MEH-roo MUN-dah gah MAT-lah-dah-gah-LAH-rah?", usage: "Asking someone to slow down", tip: "'Manda ga' = slowly; add to almost any request" },
            { id: "v2_03", english: "I want to learn Telugu", telugu: "Nenu Telugu nerchukovadam kaavali", phonetic: "NEH-noo TEH-loo-goo NER-choo-koh-vah-dum KAH-vah-lee", usage: "Expressing your goal", tip: "People will love you for saying this!" },
            { id: "v2_04", english: "I know a little Telugu", telugu: "Naaku konchum Telugu telusu", phonetic: "NAH-koo KON-chum TEH-loo-goo TEH-loo-soo", usage: "Humble introduction", tip: "'Konchum' = a little — a great conversation starter" },
            { id: "v2_05", english: "Please say it again", telugu: "Meeru meeru cheppagalaraa?", phonetic: "MEH-roo MEH-roo CHEP-pah-gah-LAH-rah?", usage: "Asking for repetition", tip: "Repeat 'Meeru meeru' — it flows naturally" },
            { id: "v2_06", english: "I am trying to speak Telugu", telugu: "Nenu Telugu matladadam try chestunna", phonetic: "NEH-noo TEH-loo-goo MAT-lah-dah-dum TRY ches-TOON-nah", usage: "Expressing effort", tip: "Mixing 'try' (English loanword) is perfectly natural here" },
        ],
    },
    {
        level: 3,
        label: "Conversational Sentences",
        description: "Verb-rich complete sentences for real conversations",
        items: [
            { id: "v3_01", english: "I have been learning Telugu for three months. I can understand some things but speaking is still difficult.", telugu: "Nenu moodu nelalu nundi Telugu nerchukunnatanu. Konni vishayaalu artham avatunnayi kaani matladadam inka kashtanga undi.", phonetic: "NEH-noo MOO-doo NEH-lah-loo NOON-dee TEH-loo-goo NER-choo-koon-nah-tah-noo. KON-nee vish-AY-ah-loo AR-thum uh-VUH-toon-nah-yee KAH-nee MAT-lah-dah-dum IN-kah KASH-tun-gah OON-dee.", usage: "Describing your language learning journey", tip: "'Moodu nelalu' = three months; 'kashtanga' = difficult" },
            { id: "v3_02", english: "Can you write that down for me? I want to practice reading it later.", telugu: "Meeru adi naaku raayaagalaraa? Nenu taravata choodadam practice cheyyaniki.", phonetic: "MEH-roo UH-dee NAH-koo RAH-yah-gah-LAH-rah? NEH-noo TAH-rah-VAH-tah CHOO-dah-dum PRACTICE chey-yah-NEE-kee.", usage: "Asking someone to help you with a phrase", tip: "'Raayaagalara' = can you write; 'taravata' = later" },
            { id: "v3_03", english: "I heard that Telugu is one of the oldest classical languages. I want to learn more about it.", telugu: "Telugu prachina classical bhaashallo okati ani vinaanu. Daani gurinchi ekkuva nerchukovalani undi.", phonetic: "TEH-loo-goo PRAH-chee-nah CLASSICAL BHAH-shah-lo OH-kah-tee UH-nee VEE-nah-noo. DAH-nee goo-RIN-chee EK-koo-vah NER-choo-koh-vah-LAH-nee OON-dee.", usage: "Showing cultural interest in Telugu", tip: "'Prachina' = ancient; a great phrase to impress native speakers!" },
        ],
    },
];

export default verbs;
