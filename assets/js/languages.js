// languages.js - Nyelvi fájlok kezelése
const languages = {
  hu: {
    // Navigation
    nav: {
      home: "Kezdőlap",
      shop: "Shop", 
      register: "Termékregisztráció",
      support: "Támogatás"
    },
    // Main page content
    main: {
      tagline: "A LEGJOBB 2 LENCSÉS MEGOLDÁS<br>OTTHONOD BIZTONSÁGÁÉRT,<br>AKÁR TÁVOLRÓL IS, ÉJJEL-NAPPAL<br>...még a legnagyobb sötétben is...",
      doubleLens: "Dupla lencse. Dupla biztonság.",
      subtitle: "Akár két területet is figyelhetsz egyszerre, követheted a mozgást MI-vel,<br>és azonnal élőképet látsz a telefonodon, bárhol is vagy a világon.",
      features: [
        "Távoli elérés telefonról",
        "2 párhuzamos HD stream",
        "Pan/Tilt/4x Zoom", 
        "Nagy teljesítményű infra ledek",
        "Felhő szolgáltatások**",
        "MI emberfelismerés és követés",
        "Időjárásálló / IP66",
        "2.4Ghz Wifi / Bluetooth / Ethernet",
        "MicroSD kártya akár 128GB-ig",
        "és még sok más funkció..."
      ],
      freeApp: "Ingyenes iCSee app*",
      qrText: "Olvasd be a QR kódot <br>a letöltéshez:",
      onvifText: "Rögzítés helyben:<br>NVR / NAS / PC / MAC",
      advancedImaging: "Fejlett képalkotás:",
      sensorDescription: "Ez már a <b>SmartSENS SC3335AI</b> 3megapixeles szenzora (2312H x 1304V, max30fps) MIPI-vel és párhuzamos adat kimenettel, valamint a SmartSens <b>SmartPixel™</b> technológiájával, ami 42%-kal nagyobb érzékenységet és 16%-kal jobb dinamikatartományt biztosít a BSI (Backside Illumination) érzékelőkhöz képest. Nagyon jó minőségű kép éjszaka is, MI alapú emberfelismeréssel és nagyon alacsony téves riasztási aránnyal.",
      awardWinning: "Díjnyertes technológiák:",
      watchHouse: "Figyeld mi történik a házad körül.<br> Mindig.",
      tested: "Tervezte és tesztelte a Nakatomi technikai csapata, a kategória legjobb alkatrészeiből.",
      specTitle: "Technikai specifikációk:",
      copyrightText: "Copyright © 2025 Nakavision Ltd. Registered in England & Wales <img src=\"images/uk.svg\" alt=\"UK Flag\" width=\"20\" height=\"12\"> Minden jog fenntartva!"
    },
    // Registration page
    register: {
      title: "Termék regisztrálása",
      subtitle: "Köszönjük, hogy Nakavision terméket vásárolt! Kérjük töltse ki az alábbi űrlapot a regisztrációhoz. A regisztráció után alkalmanként termékfrissítéseket és híreket fog kapni.",
      emailLabel: "E-mail cím *",
      emailPlaceholder: "pelda@email.com",
      productLabel: "Válasszon terméket *",
      productPlaceholder: "Válasszon terméket...",
      submitBtn: "Termék regisztrálása",
      benefitsTitle: "Regisztráció előnyei",
      benefits: [
        "<strong>Termékfrissítések:</strong> Értesítést kap új firmware frissítésekről",
        "<strong>Támogatás:</strong> Prioritásos ügyfélszolgálat", 
        "<strong>Garancia:</strong> Egyszerűbb garanciális ügyintézés",
        "<strong>Hírek:</strong> Első kézből értesülhet új termékekről"
      ],
      validation: {
        required: "Kérjük töltse ki az összes kötelező mezőt!",
        invalidEmail: "Kérjük adjon meg egy érvényes e-mail címet!",
        success: "Köszönjük! Termékét sikeresen regisztráltuk. Hamarosan e-mailt fog kapni a megerősítésről."
      }
    },
    // Support page
    support: {
      title: "Ügyfélszolgálat",
      subtitle: "Kérdése van vagy segítségre van szüksége? Töltse ki az alábbi űrlapot és a lehető leghamarabb válaszolunk.",
      nameLabel: "Név *",
      namePlaceholder: "Adja meg a nevét",
      emailLabel: "E-mail cím *", 
      emailPlaceholder: "pelda@email.com",
      subjectLabel: "Tárgy *",
      subjectPlaceholder: "Kérdése vagy problémája rövid leírása",
      messageLabel: "Üzenet *",
      messagePlaceholder: "Fejtse ki részletesen a kérdését vagy problémáját...",
      submitBtn: "Üzenet küldése",
      validation: {
        required: "Kérjük töltse ki az összes kötelező mezőt!",
        invalidEmail: "Kérjük adjon meg egy érvényes e-mail címet!",
        success: "Köszönjük üzenetét! 24-48 órán belül válaszolunk."
      }
    }
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      shop: "Shop",
      register: "Register", 
      support: "Support"
    },
    // Main page content
    main: {
      tagline: "THE BEST 2-LENS SOLUTION<br>FOR YOUR HOME SECURITY,<br>REMOTELY TOO, DAY AND NIGHT<br>...even in complete darkness...",
      doubleLens: "Double lens. Double security.",
      subtitle: "You can monitor two areas at once, track movement with AI,<br>and get instant live view on your phone, anywhere in the world.",
      features: [
        "24/7 remote access",
        "2 simultaneous HD streams", 
        "Pan/Tilt/4x Zoom",
        "High-intensity infrared lights",
        "Cloud services**",
        "AI human detection and tracking",
        "Weatherproof / IP66",
        "2.4Ghz Wifi / Bluetooth / Ethernet", 
        "MicroSD card slot up to 128GB",
        "and many more advanced features..."
      ],
      freeApp: "With free iCSee app*",
      qrText: "Scan the QR code <br>to download:",
      onvifText: "Local recording:<br>NVR / NAS / PC / MAC", 
      advancedImaging: "Advanced Imaging (AI) sensors:",
      sensorDescription: "The new <b>SmartSENS SC3335AI</b>, a 3MP sensor (2312H x 1304V, max30fps) with MIPI and parallel outputs, features SmartSens <b>SmartPixel™</b> technology for reliable, high-quality imaging. It offers richer details and better image quality compared to 2MP sensors. Very good and sharp imaging at night, with AI Human detection and low false alarm rate.",
      awardWinning: "Award winning technologies:",
      watchHouse: "Watch what happens around your house.<br> Always.",
      tested: "Designed, developed and tested by Nakatomi's technical team, with best-in-class components.",
      specTitle: "Technical Specifications:",
      copyrightText: "Copyright © 2025 Nakavision Ltd. Registered in England & Wales <img src=\"images/uk.svg\" alt=\"UK Flag\" width=\"20\" height=\"12\"> All rights reserved!"
    },
    // Registration page
    register: {
      title: "Product Registration",
      subtitle: "Thank you for purchasing a Nakavision product! Please fill out the form below to register your product. After registration, you will occasionally receive product updates and news.",
      emailLabel: "Email Address *",
      emailPlaceholder: "example@email.com",
      productLabel: "Select Product *", 
      productPlaceholder: "Select a product...",
      submitBtn: "Register Product",
      benefitsTitle: "Registration Benefits",
      benefits: [
        "<strong>Product Updates:</strong> Get notified about new firmware updates",
        "<strong>Support:</strong> Priority customer service",
        "<strong>Warranty:</strong> Simplified warranty claims process", 
        "<strong>News:</strong> Be first to know about new products"
      ],
      validation: {
        required: "Please fill in all required fields!",
        invalidEmail: "Please enter a valid email address!",
        success: "Thank you! Your product has been successfully registered. You will receive a confirmation email shortly."
      }
    },
    // Support page  
    support: {
      title: "Customer Support",
      subtitle: "Have a question or need assistance? Fill out the form below and we'll respond as soon as possible.",
      nameLabel: "Name *",
      namePlaceholder: "Enter your name",
      emailLabel: "Email Address *",
      emailPlaceholder: "example@email.com", 
      subjectLabel: "Subject *",
      subjectPlaceholder: "Brief description of your question or issue",
      messageLabel: "Message *",
      messagePlaceholder: "Please describe your question or issue in detail...",
      submitBtn: "Send Message",
      validation: {
        required: "Please fill in all required fields!",
        invalidEmail: "Please enter a valid email address!",
        success: "Thank you for your message! We will respond within 24-48 hours."
      }
    }
  }
};

// Language detection and management
class LanguageManager {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.texts = languages[this.currentLang];
  }

  detectLanguage() {
    // Domain alapú nyelv detektálás
    const hostname = window.location.hostname;
    if (hostname.includes('.hu')) {
      return 'hu';
    } else if (hostname.includes('.com')) {
      return 'en';
    }
    
    // Fallback: browser nyelv vagy URL paraméter
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && languages[langParam]) {
      return langParam;
    }
    
    const browserLang = navigator.language.substr(0, 2);
    return languages[browserLang] ? browserLang : 'en';
  }

  getText(path) {
    return path.split('.').reduce((obj, key) => obj && obj[key], this.texts);
  }

  updateTexts() {
    // Navigation frissítése
    document.querySelectorAll('[data-lang]').forEach(element => {
      const key = element.getAttribute('data-lang');
      const text = this.getText(key);
      if (text) {
        element.innerHTML = text;
      }
    });

    // Placeholder-ek frissítése  
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
      const key = element.getAttribute('data-lang-placeholder');
      const text = this.getText(key);
      if (text) {
        element.placeholder = text;
      }
    });
  }

  switchLanguage(lang) {
    if (languages[lang]) {
      this.currentLang = lang;
      this.texts = languages[lang];
      this.updateTexts();
    }
  }
}

// Inicializálás
document.addEventListener('DOMContentLoaded', function() {
  window.langManager = new LanguageManager();
  window.langManager.updateTexts();
});

// Config objektum domain-specifikus beállításokhoz
const config = {
  hu: {
    domain: 'nakavision.hu',
    assetPath: 'nakavision.hu/',
    shopUrl: 'https://xpro.hu/termekkategoria/okos-kiegeszito/okosotthon/biztonsagi-kamera/'
  },
  en: {
    domain: 'nakavision.com', 
    assetPath: 'nakavision.com/',
    shopUrl: 'https://xpro.hu/termekkategoria/okos-kiegeszito/okosotthon/biztonsagi-kamera/'
  }
};

// Asset path helper
function getAssetPath(filename) {
  const lang = window.langManager ? window.langManager.currentLang : 'en';
  return config[lang].assetPath + filename;
}