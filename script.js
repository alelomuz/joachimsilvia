// Translations object
const translations = {
    en: {
        title: "Wedding of Silvia and Joachim",
        site1: "Location",
        site2: "Accommodations",
        site3: "Plan",
        site4: "Travel Informations",
        site5: "Contacts",
    },
    de: {
        title: "Hochzeit von Silvia und Joachim",
        site1: "Veranstaltungsort",
        site2: "Unterkünfte",
        site3: "Plan",
        site4: "Reiseinformationen",
        site5: "Kontakte",
    },
    it: {
        title: "Matrimonio di Silvia e Joachim",
        site1: "Location",
        site2: "Alloggi",
        site3: "Piano",
        site4: "Informazioni di viaggio",
        site5: "Contatti",
    }
};

// Function to update content based on language
function updateLanguage(lang) {
    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("site1").textContent = translations[lang].site1;
    document.getElementById("site2").textContent = translations[lang].site2;
    document.getElementById("site3").textContent = translations[lang].site3;
    document.getElementById("site4").textContent = translations[lang].site4;
    document.getElementById("site5").textContent = translations[lang].site5;
}

// Language switcher event listener
const languageSelect = document.getElementById("language-select");
languageSelect.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    updateLanguage(selectedLanguage);
});

// Initialize the page with default language (English)
updateLanguage("en");