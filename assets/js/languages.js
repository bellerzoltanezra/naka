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
      advancedImaging: "Fejlett képalkotás (MI) szenzorok:",
      sensorDescription: "Az új <b>SmartSENS SC3335AI</b>, egy 3MP szenzor (2312H x 1304V, max30fps) MIPI és párhuzamos kimenettel, SmartSens <b>SmartPixel™</b> technológiával a megbízható, kiváló minőségű képalkotásért. Gazdagabb részleteket és jobb képminőséget kínál a 2MP szenzorokhoz képest. Nagyon jó és éles képalkotás éjszaka is, MI emberfelismeréssel és alacsony téves riasztási aránnyal.",
      awardWinning: "Díjnyertes technológiák:",
      technologies: {
        sfcpixel: {
          title: "SFCPixel®",
          description: "A SmartSens egyedülálló SFCPixel® technológiája nagyobb feszültségeket ér el azáltal, hogy lerövidíti a távolságot a Source Follower (SF) és a PhotoDiode (PD) között, így nagyobb érzékenységet és jobb éjjellátó képalkotást érve el."
        },
        pixgain: {
          title: "PixGain™",
          description: "A nagy és alacsony erősítés kombinálásával a PixGain technológiák kivételes képalkotást érnek el éjszaka és gyenge fényviszonyok között, miközben finom részleteket rögzítenek nappal és vakító fényben."
        },
        lightbox: {
          title: "Lightbox IR®",
          description: "NIR fejlesztési technológia: 2x hatékonyság az infravörös fénytartományban 850 és 940 nm között."
        }
      },
      sensorAward: "A SmartSENS elnyerte az 'Év Szenzora' díjat a 2023-as World Electronics Achievement Awards-on.",
      watchHouse: "Figyeld mi történik a házad körül.<br> Mindig.",
      tested: "Tervezte, fejlesztette és tesztelte a Nakatomi technikai csapata, a kategória legjobb alkatrészeiből.",
      specTitle: "Technikai specifikációk:",
      specifications: {
        model: "Nakavision C1 - Dual lens, 3+3 Megapixel beltéri/kültéri Pan/Tilt IP kamera",
        system: "Dual-core 32-bit DSP (XM535x), Pure Hard Compression, Watchdog",
        sensor: "2x3MP, összesen 6,000,000 pixel 1/3\" SmartSens SC3335AI (Advanced Imaging™) nagy teljesítményű CMOS",
        illumination: "Színes üzemmód 0.01 Lux @(F1.2, AGC BE), 0 Lux IR-rel / Fekete-fehér üzemmód 0.001 Lux @(F1.2, AGC BE), 0 Lux IR-rel",
        video: "H.265AI kódolás SD-re, dual-stream, AVI formátum; bitráta: 0.1M~10Mbps; képkocka: 1~30 fps; Streamek: H264 - Fő stream: 2560x1440@12fps; Sub-stream: 800x448@12fps",
        led: "12 nagy teljesítményű LED (8 infravörös + 4+4 fehér fény), éjszakai színes felvétel támogatott",
        dayNight: "Támogatott, állítható érzékenységű IR-CUT szűrő",
        noiseReduction: "Hardware támogatott, 2D/3D",
        wdr: "Hardware támogatott (optimális képalkotás nagyon világos/sötét környezetben)",
        soundSystem: "G.711A codec, 2-irányú intercom, audio-video szinkronizáció",
        soundPower: "Bemeneti szint 2Vp-p 1kΩ, kimeneti szint 30mW 16Ω",
        wiredNetwork: "1x RJ45 Ethernet interfész, 10/100M, PoE injector kompatibilis (árnyékolt Cat5e kábel ajánlott)",
        wirelessNetwork: "1x WiFi antenna, Bluetooth",
        motionSystem: "Gimbal, önkalibráló, 1 vízszintes és 1 függőleges motor",
        hardReset: "Támogatott, 1-gombos reset (az SD kártya slot mellett, 10 mp nyomva tartás)",
        supportedOS: "Android, iOS, iPadOS, Windows, MacOS (bizonyos esetekben harmadik féltől származó szoftverrel)",
        supportedSoftware: "iCSee, XMeye és ONVIF kompatibilis szoftverek (Win: BlueIris, Mac: SecuritySpy)"
      },
      footerText1: "*Az iCSee alkalmazást a Hangzhou Jftech Co., Ltd. fejlesztette, támogatásért forduljon a fejlesztőhöz. <br>APP Store az Apple Inc. szolgáltatása, a Google Play és Google Assistant a Google LLC szolgáltatása és védjegye. Az Alexa az Amazon.com Inc. védjegye és szolgáltatása. A támogatás az adott szolgáltatás weboldalán érhető el.<br>A Nakavision fenntartja a jogot a hardver és szoftver előzetes értesítés nélküli megváltoztatására, ha az jobb teljesítményt biztosít.<br><br><b>Copyright © 2025 Nakavision Ltd. Registered in England & Wales <img src=\"assets/images/uk.svg\" alt=\"UK Flag\" width=\"20\" height=\"12\"> Minden jog fenntartva!</b><br>London HQ: Unit 9a Wick Road Business Park, Wick Road, Burnham-On-Crouch, England, CM0 8FA",
      footerText2: "**A Nakavision™ mint a termék forgalmazója, elhárít minden felelősséget az iCSee alkalmazással kapcsolatban az alkalmazás fejlesztő adathozzáférésből vagy a kamerafelvételekkel kapcsolatos bármilyen intézkedésből eredő adatfeldolgozásért. Az iCSee alkalmazást független harmadik fél fejleszti és üzemelteti. A Nakavision™ nem felelős az iCSee alkalmazás elérhetőségéért, működéséért és díjszabásáért, vagy az alkalmazással kapcsolatos problémákért. Az iCSee alkalmazással kapcsolatos bármilyen kérdésért forduljon az alkalmazás fejlesztőjéhez."
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
      technologies: {
        sfcpixel: {
          title: "SFCPixel®",
          description: "SmartSens unique SFCPixel® technology obtains higher voltages by shortening the distance between the Source Follower (SF) and the PhotoDiode (PD), achieving higher sensitivity and better night vision imaging."
        },
        pixgain: {
          title: "PixGain™",
          description: "Combining High Gain and Low Gain, PixGain Technologies achieve exceptional imaging at night and in low-light conditions while capturing fine details during daytime and in glaring light."
        },
        lightbox: {
          title: "Lightbox IR®",
          description: "NIR Enhancement Technology: 2x efficiency in the infrared light range between 850 and 940 nm."
        }
      },
      sensorAward: "The SmartSENS Won the 'Sensor of the Year' at the 2023 World Electronics Achievement Awards.",
      watchHouse: "Watch what happens around your house.<br> Always.",
      tested: "Designed, developed and tested by Nakatomi's technical team, with best-in-class components.",
      specTitle: "Technical Specifications:",
      specifications: {
        model: "Nakavision C1 - Dual lens, 3+3 Megapixel indoor/outdoor Pan/Tilt IP camera",
        system: "Dual-core 32-bit DSP (XM535x), Pure Hard Compression, Watchdog",
        sensor: "2x3MP, total 6,000,000 pixels 1/3\" SmartSens SC3335AI (Advanced Imaging™) high-performance CMOS",
        illumination: "Color mode 0.01 Lux @(F1.2, AGC ON), 0 Lux with IR / B&W mode 0.001 Lux @(F1.2, AGC ON), 0 Lux with IR",
        video: "H.265AI encoding to SD, dual-stream, AVI format; bitrate: 0.1M~10Mbps; framerate 1~30 fps; Streams: H264 - Main stream: 2560x1440@12fps; Sub-stream: 800x448@12fps",
        led: "12 high-power LEDs (8 infrared + 4+4 white light), night color recording supported",
        dayNight: "Supported, adjustable sensitivity IR-CUT filter",
        noiseReduction: "Hardware supported, 2D/3D",
        wdr: "Hardware supported (optimal imaging in very bright/dark environments)",
        soundSystem: "G.711A codec, 2-way intercom, audio-video synchronization",
        soundPower: "Input level 2Vp-p 1kΩ, output level 30mW 16Ω",
        wiredNetwork: "1x RJ45 Ethernet interface, 10/100M, PoE injector compatible (shielded Cat5e cable recommended)",
        wirelessNetwork: "1x WiFi antenna, Bluetooth",
        motionSystem: "Gimbal, self-calibrating, 1 horizontal and 1 vertical motor",
        hardReset: "Supported, 1-button reset (next to SD card slot, 10 sec hold)",
        supportedOS: "Android, iOS, iPadOS, Windows, MacOS (in some cases with third-party software)",
        supportedSoftware: "iCSee, XMeye and ONVIF compatible software (Win: BlueIris, Mac: SecuritySpy)"
      },
      footerText1: "*The iCSee application is developed by Hangzhou Jftech Co., Ltd., please contact the developer for support. <br>APP Store is a service of Apple Inc., Google Play and Google Assistant are a service and trademark of Google LLC. Alexa is a trademark and service of Amazon.com Inc. Support is available on the respective service's website.<br>Nakavision reserves the right to change hardware and software without notice if it provides improved performance.<br><br><b>Copyright © 2025 Nakavision Ltd. Registered in England & Wales <img src=\"assets/images/uk.svg\" alt=\"UK Flag\" width=\"20\" height=\"12\"> All rights reserved!</b><br>London HQ: Unit 9a Wick Road Business Park, Wick Road, Burnham-On-Crouch, England, CM0 8FA",
      footerText2: "**Nakavision™ as the distributor of the product, disclaims any liability in relation to the iCSee application for any data processing resulting from the app developer's access or to any action taken on the camera footage. The iCSee application is developed and operated by an independent third party. Nakavision™ is not responsible for the availability, operation and pricing of the iCSee application, or for any problems incurring with the application. For any reason related to the iCSee application, please contact the application developer."
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
    // Domain alapú nyelv detektálás - JAVÍTVA
    const hostname = window.location.hostname.toLowerCase();
    
    // Explicit domain ellenőrzés
    if (hostname === 'nakavision.hu' || hostname === 'www.nakavision.hu') {
      return 'hu';
    } else if (hostname === 'nakavision.com' || hostname === 'www.nakavision.com') {
      return 'en';
    }
    
    // TLD alapú detektálás fallback-ként
    if (hostname.endsWith('.hu')) {
      return 'hu';
    } else if (hostname.endsWith('.com')) {
      return 'en';
    }
    
    // URL paraméter ellenőrzés
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && languages[langParam]) {
      return langParam;
    }
    
    // Browser nyelv fallback
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

    // Shop linkek kezelése - JAVÍTVA
    this.updateShopLinks();
    this.updateTechnologies();
    this.updateSpecifications();
  }

  updateShopLinks() {
    const shopLinks = document.querySelectorAll('#shop-link, #shop-button');
    shopLinks.forEach(link => {
      if (this.currentLang === 'hu') {
        link.href = 'https://xpro.hu/termekkategoria/okos-kiegeszito/okosotthon/biztonsagi-kamera/';
      } else {
        // Angol verzión egyelőre ne mutasson sehova
        link.href = '#';
        link.onclick = (e) => {
          e.preventDefault();
          return false;
        };
      }
    });
  }

  updateTechnologies() {
    const technologies = this.getText('main.technologies');
    if (technologies) {
      const techList = document.querySelector('.technologies');
      if (techList) {
        techList.innerHTML = `
          <li>
            <div class="title">${technologies.sfcpixel.title}</div>
            <div class="szov">${technologies.sfcpixel.description}</div>
          </li>
          <li>
            <div class="title">${technologies.pixgain.title}</div>
            <div class="szov">${technologies.pixgain.description}</div>
          </li>
          <li>
            <div class="title">${technologies.lightbox.title}</div>
            <div class="szov">${technologies.lightbox.description}</div>
          </li>
        `;
      }
    }

    const sensorAward = this.getText('main.sensorAward');
    const sensorAwardEl = document.querySelector('.smsense');
    if (sensorAwardEl && sensorAward) {
      sensorAwardEl.innerHTML = sensorAward;
    }
  }

  updateSpecifications() {
    const specs = this.getText('main.specifications');
    if (specs) {
      const specList = document.querySelector('.specification ul');
      if (specList) {
        specList.innerHTML = `
          <li style="color:#444;"><span style="font-weight:bold; color:black;">Model:</span> ${specs.model}</li>
          <li style="color:#444;"><span style="font-weight:bold; color:black;">System:</span> ${specs.system}</li>
          <li style="color:#444;"><span style="font-weight:bold; color:black;">Sensor:</span> ${specs.sensor}</li>
          <li style="color:#444;"><span style="font-weight:bold; color:black;">Minimum illumination:</span> ${specs.illumination}</li>
          <li style="color:#444;"><span style="font-weight:bold; color:black;">Video:</span> ${specs.video}</li>
          <li style="color:#444;"><span style="font-weight:bold; color:black;">LED:</span> ${specs.led}</li>
          <li style="color:#444;"><span style="font-weight:bold; color:black;">Day/Night Switching:</span> ${specs.dayNight}</li>
          <li style="color:#444;"><span style="font-weight:bold; color:black;">Noise Reduction:</span> ${specs.noiseReduction}</li>
          <li style="color:#444;"><span style="font-weight:bold; color:black;">WDR (Wide Dynamic Range Mode):</span> ${specs.wdr}</li>
          <li style="color:#444;"><span style="font-weight:bold; color:black;">Sound System:</span> ${specs.soundSystem}</li>
          <li style="color:#444;"><span style="font-weight:bold; color:black;">Sound Power:</span> ${specs.soundPower}</li>
          <li style="color:#444;"><span style="font-weight:bold; color:black;">Wired network:</span> ${specs.wiredNetwork}</li>
          <li style="color:#444;"><span style="font-weight:bold; color:black;">Wireless network:</span> ${specs.wirelessNetwork}</li>
          <li style="color:#444;"><span style="font-weight:bold; color:black;">Motion System:</span> ${specs.motionSystem}</li>
          <li style="color:#444;"><span style="font-weight:bold; color:black;">Hard Reset:</span> ${specs.hardReset}</li>
          <li style="color:#444;"><span style="font-weight:bold; color:black;">Supported OS:</span> ${specs.supportedOS}</li>
          <li style="color:#444;"><span style="font-weight:bold; color:black;">Supported Software:</span> ${specs.supportedSoftware}</li>
        `;
      }
    }

    // Footer texts update
    const footerText1 = this.getText('main.footerText1');
    const footerText2 = this.getText('main.footerText2');
    
    if (footerText1) {
      const footer1El = document.querySelector('.footertext1');
      if (footer1El) footer1El.innerHTML = footerText1;
    }
    
    if (footerText2) {
      const footer2El = document.querySelector('.footertext2');
      if (footer2El) footer2El.innerHTML = footerText2;
    }
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
  
  // Debug info konzolba
  console.log('Current domain:', window.location.hostname);
  console.log('Detected language:', window.langManager.currentLang);
});

// Config objektum domain-specifikus beállításokhoz
const config = {
  hu: {
    domain: 'nakavision.hu',
    assetPath: 'assets/',
    shopUrl: 'https://xpro.hu/termekkategoria/okos-kiegeszito/okosotthon/biztonsagi-kamera/'
  },
  en: {
    domain: 'nakavision.com', 
    assetPath: 'assets/',
    shopUrl: '#' // Egyelőre üres
  }
};

// Asset path helper
function getAssetPath(filename) {
  const lang = window.langManager ? window.langManager.currentLang : 'en';
  return config[lang].assetPath + filename;
}