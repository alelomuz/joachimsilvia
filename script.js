// Translations object
const translations = {
    en: {
        title0: "Wedding of \nSilvia and Joachim",
        site1: "Location",
        site2: "Accommodations",
        site3: "Plan",
        site4: "Travel Informations",
        site5: "Contacts",
        title1: "Ceremony",
        description1: "The ceremony and reception will take place at the reception hall",
        title2: "Program",
        description2: "Wedding of Silvia and Joachim",
        timeline1: "CEREMONY",
        timeline2: "PHOTOS",
        timeline3: "APERITIF",
        timeline4: "LUNCH",
        timeline5: "WEDDING CAKE AND\nDESSERT BUFFET",
        timeline6: "AFTERPARTY WITH DJ\nAND COCKTAIL BAR",
        title3: "Accommodations",
        subtitle3: "Recommended accommodation for multi-day stays",
        description3: "We are available to indicate where you can stay during your stay. We list some accommodation facilities.\nWe will stay at Porto degli Argonauti (Marina di Pisticci, MT). In the same village there are several accommodation facilities:",
    },
    de: {
        title0: "Hochzeit von \nSilvia und Joachim",
        site1: "Veranstaltungsort",
        site2: "Unterkünfte",
        site3: "Plan",
        site4: "Reiseinformationen",
        site5: "Kontakte",
        title1: "Traungsfeier",
        description1: "Die Trauung und der Empfang finden im Festsaal statt",
        title2: "Programm",
        description2: "Hochzeit von Silvia und Joachim",
        timeline1: "TRAUUNG",
        timeline2: "FOTOS",
        timeline3: "APERITIF",
        timeline4: "MITTAGSESSEN",
        timeline5: "HOCHZEITSTORTE UND\nDESSERTBUFFET",
        timeline6: "AFTERPARTY MIT DJ\nUND COCKTAILBAR",
        title3: "Übernachtungsmöglichkeiten",
        subtitle3: "Empfohlene Übernachtungsmöglichkeit für mehrtägige Aufenthalte",
        description3: "Wir helfen Ihnen gerne bei der Suche nach einer Unterkunft während Ihres Aufenthalts. Im folgenden einige Beispiele.\nWir werden im Porto degli Argonauti (Marina di Pisticci, MT) übernachten. Im selben Dorf gibt es mehrere Unterkunftsmöglichkeiten:",
    },
    it: {
        title0: "Matrimonio di \nSilvia e Joachim",
        site1: "Location",
        site2: "Alloggi",
        site3: "Piano",
        site4: "Informazioni di viaggio",
        site5: "Contatti",
        title1: "Ceremonia e ricevimento",
        description1: "La cerimonia e il ricevimento si svolgeranno presso la sala ricevimenti",
        title2: "Programma",
        description2: "Nozze di Silvia e Joachim",
        timeline1: "CERIMONIA",
        timeline2: "FOTO",
        timeline3: "APERITIVO",
        timeline4: "PRANZO",
        timeline5: "TORTA NUZIALE E\nBUFFET DEI DOLCI",
        timeline6: "AFTERPARTY CON DJ\nE COCKTAILBAR",
        title3: "Pernottamento",
        subtitle3: "Struttura ricettiva consigliata per soggiorni di piú giorni",
        description3: "Siamo disponibili ad indicarvi dove poter alloggiare durante il vostro soggiorno. Riportiamo una lista di strutture ricettive.\nNoi allogeremo presso Porto degli Argonauti (Marina di Pisticci, MT). Nello stesso villaggio sono disponibili più strutture ricettive:",
    }
};

// Function to update content based on language
function updateLanguage(lang) {
    document.getElementById("title0").textContent = translations[lang].title0;
    document.getElementById("site1").textContent = translations[lang].site1;
    document.getElementById("site2").textContent = translations[lang].site2;
    document.getElementById("site3").textContent = translations[lang].site3;
    document.getElementById("site4").textContent = translations[lang].site4;
    document.getElementById("site5").textContent = translations[lang].site5;
    document.getElementById("title1").textContent = translations[lang].title1;
    document.getElementById("description1").textContent = translations[lang].description1;
    document.getElementById("title2").textContent = translations[lang].title2;
    document.getElementById("description2").textContent = translations[lang].description2;
    document.getElementById("timeline1").textContent = translations[lang].timeline1;
    document.getElementById("timeline2").textContent = translations[lang].timeline2;
    document.getElementById("timeline3").textContent = translations[lang].timeline3;
    document.getElementById("timeline4").textContent = translations[lang].timeline4;
    document.getElementById("timeline5").textContent = translations[lang].timeline5;
    document.getElementById("timeline6").textContent = translations[lang].timeline6;
    document.getElementById("title3").textContent = translations[lang].title3;
    document.getElementById("subtitle3").textContent = translations[lang].subtitle3;
    document.getElementById("description3").textContent = translations[lang].description3;
}

// Language switcher event listener
const languageSelect = document.getElementById("language-select");
languageSelect.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    updateLanguage(selectedLanguage);
});

// Initialize the page with default language
updateLanguage("it");