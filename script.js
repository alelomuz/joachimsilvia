// Translations object
const translations = {
    en: {
        title0: "Wedding of Silvia and Joachim",
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
        subtitle1: "Recommended accommodation for multi-day stays",
        description3: "We are available to indicate where you can stay during your stay. We list some accommodation facilities.\nWe will stay at Porto degli Argonauti (Marina di Pisticci, MT). In the same village there are several accommodation facilities:",
        subtitle2: "Recommended accommodations in Metaponto",
        description4: "Accommodation facilities are located near the reception hall in Metaonto, MT",
        title5: "Activities during the wedding week",
        description5: "During the wedding week, from 16 to 19 September 2025, various activities will be suggested. More details will follow in the coming months.",
        title6: "Wedding list",
        description6: "More information will follow in the coming months.",
        title7: "Participation confirmation",
        description7: "Don't want to miss this great unforgettable event? Then confirm your participation! Register each participant by 15.03.2025 with first and last name. Food is one of the most important elements of a great party, so that everything is to your liking, please fill out the following form:",
        title8: "Contacts",
    },
    de: {
        title0: "Hochzeit von Silvia und Joachim",
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
        subtitle1: "Empfohlene Übernachtungsmöglichkeit für mehrtägige Aufenthalte",
        description3: "Wir helfen Ihnen gerne bei der Suche nach einer Unterkunft während Ihres Aufenthalts. Im folgenden einige Beispiele.\nWir werden im Porto degli Argonauti (Marina di Pisticci, MT) übernachten. Im selben Dorf gibt es mehrere Unterkunftsmöglichkeiten:",
        subtitle2: "Empfohlene Übernachtungsöglichkeiten in Metaponto",
        description4: "In Metaponto gibt es Übernachtungsmöglichkeiten direkt in der Nähe der Hochzeitslocation",
        title5: "Aktivitäten während der Hochzeitswoche",
        description5: "Während der Hochzeitswoche, also vom 16. bis 19. September 2025, werden verschiedene Aktivitäten vorgeschlagen. Weitere Details folgen in den kommenden Monaten.",
        title6: "Hochzeitstisch",
        description6: "Weitere Informationen dazu folgen in den kommenden Monaten.",
        title7: "Teilnahme bestätigung",
        description7: "Du willst dieses tolle Event nicht verpassen? Dann bestätige deine Teilnahme! Registriere bitte jeden Teilnehmer bis zum 15.03.2025 mit Vor- und Nachnamen. Das Essen ist eines der wichtigsten Elemente eines großen Festes. Damit alles deinen Vorlieben entspricht, fülle bitte das folgende Formular aus.",
        title8: "Kontakte",
    },
    it: {
        title0: "Matrimonio di Silvia e Joachim",
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
        subtitle1: "Struttura ricettiva consigliata per soggiorni di piú giorni",
        description3: "Siamo disponibili ad indicarvi dove poter alloggiare durante il vostro soggiorno. Riportiamo una lista di strutture ricettive.\nNoi allogeremo presso Porto degli Argonauti (Marina di Pisticci, MT). Nello stesso villaggio sono disponibili più strutture ricettive:",
        subtitle2: "Strutture ricettive consigliate a Metaponto",
        description4: "Strutture ricettive sono situate nelle vicinanze della sala ricevimenti a Metaponto, MT",
        title5: "Attivitá proposte durante la settimana del Matrimonio",
        description5: "Durante la settimana del matrimonio sono previste diverse attivitá per gli ospiti. Qui di seguito alcune proposte:",
        title6: "Lista di nozze",
        description6: "Maggiori informazioni seguiranno nei prossimi mesi.",
        title7: "Conferma partecipazione",
        description7: "Non vorrai perderti questo grande evento indimenticabile? Allora conferma la partecipazione! Registra ogni singolo partecipante entro il 15.03.2025., indicando nome e cognome. Il cibo è uno degli elementi più importanti di una grande festa, affinché tutto sia di tuo gradimento, compila il seguente formulario:",
        title8: "Contatti",
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
    document.getElementById("subtitle1").textContent = translations[lang].subtitle1;
    document.getElementById("description3").textContent = translations[lang].description3;
    document.getElementById("subtitle2").textContent = translations[lang].subtitle2;
    document.getElementById("description4").textContent = translations[lang].description4;
    document.getElementById("title5").textContent = translations[lang].title5;
    document.getElementById("description5").textContent = translations[lang].description5;
    document.getElementById("title6").textContent = translations[lang].title6;
    document.getElementById("description6").textContent = translations[lang].description6;
    document.getElementById("title7").textContent = translations[lang].title7;
    document.getElementById("description7").textContent = translations[lang].description7;
    document.getElementById("button7").textContent = translations[lang].title7;
    document.getElementById("title8").textContent = translations[lang].title8;
    
    const phoneElement = document.getElementById("giusyphone");
    if (lang === "it") {
        phoneElement.style.display = "block";
    } else {
        phoneElement.style.display = "none";
    }
}

// Language switcher event listener
const languageSelect = document.getElementById("language-select");
languageSelect.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    updateLanguage(selectedLanguage);
});

// Initialize the page with default language
updateLanguage("it");