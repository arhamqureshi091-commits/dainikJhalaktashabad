/* ============================================================
   दैनिक झलकते शब्द — data.js
   Saari demo news data ek jagah (script.js, article.js,
   category.js isi se use karte hain).
   ============================================================ */

window.NEWS = {

  /* ---------- BREAKING TICKER ---------- */
  tickerItems: [
    "विधानसभा में डिजिटल अर्थव्यवस्था विधेयक पारित",
    "सेंसेक्स पहली बार 80,000 के पार",
    "शीतलहर चेतावनी: 15 शहरों के लिए अलर्ट जारी",
    "बैडमिंटन में किशोर सेंसेशन की बड़ी जीत",
    "जलवायु सम्मेलन में नई वित्तीय घोषणाएँ",
  ],

  /* ---------- ताज़ा खबरें (homepage "Load More") ---------- */
  latestNews: [
    { tag: "म.प्र.",  title: "मुख्यमंत्री की बैठक में नई औद्योगिक नीति पर 5 बड़े फैसले", time: "5 मिनट पहले",  img: "https://picsum.photos/seed/meeting-room/120/100" },
    { tag: "देश",      title: "पड़ोसी राज्य में 5.4 तीव्रता के भूकंप के झटके, नुकसान की खबर नहीं", time: "18 मिनट पहले", img: "https://picsum.photos/seed/earthquake-map/120/100" },
    { tag: "कारोबार",  title: "खुदरा महंगाई में राहत — सब्ज़ियों के दाम घटे, रुपया 15 पैसे मजबूत", time: "26 मिनट पहले", img: "images/rupee.jpg" },
    { tag: "खेल",      title: "महिला क्रिकेट टीम टी-20 त्रिकोणीय सीरीज़ के लिए रवाना हुई", time: "42 मिनट पहले", img: "images/cricket.jpg" },
    { tag: "टेक",      title: "केंद्र सरकार ने राष्ट्रीय एआई नीति पर जनता के सुझाव बुलाए", time: "1 घंटा पहले", img: "https://picsum.photos/seed/ai-policy/120/100" },
    { tag: "मनोरंजन",  title: "दीपावली पर धमाकेदार कमाई — नई फिल्में पहले हफ्ते में हिट", time: "डेढ़ घंटा पहले", img: "https://picsum.photos/seed/festival-lights/120/100" },
    { tag: "म.प्र.",   title: "भोपाल–ग्वालियर वंदे भारत रूट से सफर हुआ आसान", time: "दो घंटे पहले", img: "https://picsum.photos/seed/metro-bus/120/100" },
    { tag: "देश",      title: "क्षेत्रीय शिखर बैठक के बाद संयुक्त शांति घोषणापत्र", time: "ढाई घंटा पहले", img: "https://picsum.photos/seed/peace-talks/120/100" },
    { tag: "कारोबार",  title: "चंदेरी–महेश्वरी साड़ियों के निर्यात में 14% का उछाल", time: "तीन घंटे पहले", img: "https://picsum.photos/seed/textile-factory/120/100" },
    { tag: "टेक",      title: "भोपाल में ई-स्कूटर शेयरिंग का पायलट प्रोजेक्ट शुरू", time: "तीन घंटे पहले", img: "https://picsum.photos/seed/e-scooter/120/100" },
    { tag: "स्वास्थ्य", title: "सरकारी अस्पतालों में फ्लू टीकाकरण शिविर, दवाओं की कोई कमी नहीं", time: "चार घंटे पहले", img: "https://picsum.photos/seed/vaccine-drive/120/100" },
    { tag: "खेल",      title: "मप्र के युवा मुक्केबाज़ ने जीता स्वर्ण पदक", time: "पाँच घंटे पहले", img: "https://picsum.photos/seed/boxing-ring/120/100" },
  ],

  /* ---------- केटेगरी पेज (category.html?cat=...) ---------- */
  categories: {
    mp: {
      label: "म.प्र.",
      items: [
        { title: "विधानसभा में 'डिजिटल अर्थव्यवस्था विधेयक' पारित — रात 2 बजे तक चली बहस, ऑनलाइन पेमेंट और फ्रीलांसर पंजीकरण की नई व्यवस्था", time: "1 घंटा पहले", img: "images/vidhan-sabha.jpg" },
        { title: "शीतलहर चेतावनी — भोपाल-ग्वालियर समेत 15 शहरों के लिए अलर्ट जारी", time: "2 घंटे पहले", img: "images/monsoon.jpg" },
        { title: "मुख्यमंत्री की बैठक में नई औद्योगिक नीति पर 5 बड़े फैसले", time: "3 घंटे पहले", img: "https://picsum.photos/seed/meeting-room/600/400" },
        { title: "भोपाल–ग्वालियर वंदे भारत रूट से सफर हुआ आसान", time: "4 घंटे पहले", img: "https://picsum.photos/seed/metro-bus/600/400" },
        { title: "मध्य प्रदेश के जिलों में ड्रोन डिलीवरी का प्रायोगिक दौर", time: "5 घंटे पहले", img: "https://picsum.photos/seed/drone-sky/600/400" },
        { title: "हाईकोर्ट में नगर निगम सफाई मामले का फैसला सुरक्षित", time: "6 घंटे पहले", img: "https://picsum.photos/seed/court-gavel/600/400" },
        { title: "मप्र के युवा मुक्केबाज़ ने जीता स्वर्ण पदक", time: "7 घंटे पहले", img: "https://picsum.photos/seed/boxing-ring/600/400" },
        { title: "भोपाल में ई-स्कूटर शेयरिंग का पायलट प्रोजेक्ट शुरू", time: "8 घंटे पहले", img: "https://picsum.photos/seed/e-scooter/600/400" },
        { title: "पतझर में सतपुड़ा — सुनहरी घाटियों में पर्यटकों की भीड़", time: "9 घंटे पहले", img: "https://picsum.photos/seed/mountain-hike/600/400" },
        { title: "सरकारी अस्पतालों में फ्लू टीकाकरण शिविर, दवाओं की कोई कमी नहीं", time: "10 घंटे पहले", img: "https://picsum.photos/seed/vaccine-drive/600/400" },
      ],
    },
    world: {
      label: "देश-दुनिया",
      items: [
        { title: "संसद में दिखा दुर्लभ सर्वसम्मति — जलवायु सम्मेलन से पहले राज्यों के लिए नई वित्तीय सहायता योजनाएँ घोषित", time: "1 घंटा पहले", img: "https://picsum.photos/seed/city-traffic/600/400" },
        { title: "पड़ोसी राज्य में 5.4 तीव्रता के भूकंप के झटके, नुकसान की खबर नहीं", time: "2 घंटे पहले", img: "https://picsum.photos/seed/earthquake-map/600/400" },
        { title: "क्षेत्रीय शिखर बैठक के बाद संयुक्त शांति घोषणापत्र", time: "3 घंटे पहले", img: "https://picsum.photos/seed/peace-talks/600/400" },
        { title: "जलवायु सम्मेलन में नई वित्तीय प्रतिबद्धताएँ घोषित", time: "4 घंटे पहले", img: "https://picsum.photos/seed/climate-summit/600/400" },
        { title: "दुनिया भर में एआई की नई कंपनियाँ, निवेश के बड़े दावे", time: "5 घंटे पहले", img: "https://picsum.photos/seed/global-tech/600/400" },
        { title: "हवाई भाड़ा औसत दर्जे से कम, त्योहारों में राहत", time: "6 घंटे पहले", img: "https://picsum.photos/seed/airport-flights/600/400" },
        { title: "अंतरराष्ट्रीय क्रिकेट परिषद में मैच सम्मान के नए नियम", time: "7 घंटे पहले", img: "images/cricket.jpg" },
        { title: "वैश्विक बाज़ारों में मिश्रित कारोबार, निवेशक असमंजस में", time: "8 घंटे पहले", img: "https://picsum.photos/seed/market-screens/600/400" },
      ],
    },
    business: {
      label: "कारोबार",
      items: [
        { title: "सेंसेक्स 80,000 के पार — तेजी जारी, निवेशकों में खुशी", time: "43 मिनट पहले", img: "https://picsum.photos/seed/market-screens/600/400" },
        { title: "खुदरा महंगाई में राहत — सब्ज़ियों के दाम घटे, रुपया 15 पैसे मजबूत", time: "1 घंटा पहले", img: "images/rupee.jpg" },
        { title: "चंदेरी–महेश्वरी साड़ियों के निर्यात में 14% का उछाल", time: "2 घंटे पहले", img: "https://picsum.photos/seed/textile-factory/600/400" },
        { title: "त्योहारों में फोल्डेबल फोन की बिक्री रिकॉर्ड स्तर पर", time: "3 घंटे पहले", img: "https://picsum.photos/seed/smartphone/600/400" },
        { title: "केंद्र सरकार ने राष्ट्रीय एआई नीति पर जनता के सुझाव बुलाए", time: "4 घंटे पहले", img: "https://picsum.photos/seed/ai-policy/600/400" },
        { title: "इंदौर के एआई स्टार्टअप को 100 करोड़ रुपये का फंड मिला", time: "5 घंटे पहले", img: "https://picsum.photos/seed/tech-lab/600/400" },
        { title: "बैंकों ने डिजिटल KYC में आसानी लाई, नए ग्राहकों को राहत", time: "6 घंटे पहले", img: "https://picsum.photos/seed/bank-counter/600/400" },
        { title: "पेट्रोल-डीजल कीमतें बरकरार, कच्चे तेल में हल्की गिरावट", time: "7 घंटे पहले", img: "https://picsum.photos/seed/petrol-pump/600/400" },
      ],
    },
    sports: {
      label: "खेल",
      items: [
        { title: "आखिरी ओवर में जबरदस्त पलटगार, सीरीज़ 3-2 से भारत की", time: "1 घंटा पहले", img: "images/cricket.jpg" },
        { title: "किशोर सितारे ने विश्व नं. 2 को सीधे सेटों में हराया", time: "2 घंटे पहले", img: "https://picsum.photos/seed/tennis-court/600/400" },
        { title: "स्वर्ण युग की ओर — हॉकी टीम विश्व कप के लिए क्वालीफाई", time: "3 घंटे पहले", img: "https://picsum.photos/seed/hockey-field/600/400" },
        { title: "महिला क्रिकेट टीम टी-20 त्रिकोणीय सीरीज़ के लिए रवाना हुई", time: "4 घंटे पहले", img: "images/cricket.jpg" },
        { title: "मप्र के युवा मुक्केबाज़ ने जीता स्वर्ण पदक", time: "5 घंटे पहले", img: "https://picsum.photos/seed/boxing-ring/600/400" },
        { title: "आख़िरी ओवर के नाटक में टीम इंडिया ने सीरीज़ जीती", time: "6 घंटे पहले", img: "https://picsum.photos/seed/cricket-stadium/600/400" },
        { title: "राष्ट्रीय कबड्डी चैम्पियनशिप की तैयारी तेज, बड़े शहरों में हर्ष", time: "7 घंटे पहले", img: "https://picsum.photos/seed/kabaddi-ground/600/400" },
        { title: "फुटबॉल क्लब ने नए कोच का एलान किया, फैंस में हर्ष", time: "8 घंटे पहले", img: "https://picsum.photos/seed/football-match/600/400" },
      ],
    },
    tech: {
      label: "टेक्नोलॉजी",
      items: [
        { title: "नवाचार: नए एआई चिप में बिजली 40% तक कम खर्च", time: "1 घंटा पहले", img: "https://picsum.photos/seed/ai-chip/600/400" },
        { title: "त्योहारों में फोल्डेबल फोन की बिक्री रिकॉर्ड स्तर पर", time: "2 घंटे पहले", img: "https://picsum.photos/seed/smartphone/600/400" },
        { title: "मध्य प्रदेश के जिलों में ड्रोन डिलीवरी का प्रायोगिक दौर", time: "3 घंटे पहले", img: "https://picsum.photos/seed/drone-sky/600/400" },
        { title: "केंद्र सरकार ने राष्ट्रीय एआई नीति पर जनता के सुझाव बुलाए", time: "4 घंटे पहले", img: "https://picsum.photos/seed/ai-policy/600/400" },
        { title: "इंदौर के एआई स्टार्टअप को 100 करोड़ रुपये का फंड मिला", time: "5 घंटे पहले", img: "https://picsum.photos/seed/tech-lab/600/400" },
        { title: "भोपाल में ई-स्कूटर शेयरिंग का पायलट प्रोजेक्ट शुरू", time: "6 घंटे पहले", img: "https://picsum.photos/seed/e-scooter/600/400" },
      ],
    },
    entertainment: {
      label: "मनोरंजन",
      items: [
        { title: "बॉक्स ऑफिस: कमबैक फिल्म ने ₹100 करोड़ पार किए", time: "1 घंटा पहले", img: "https://picsum.photos/seed/cinema-street/600/400" },
        { title: "वर्ल्ड टूर का ऐलान — टिकट इस शनिवार ऑनलाइन बिकेंगी", time: "2 घंटे पहले", img: "https://picsum.photos/seed/concert-lights/600/400" },
        { title: "नया वेब सीरीज़ पहली रात ही रिकॉर्ड तोड़ दिया", time: "3 घंटे पहले", img: "https://picsum.photos/seed/tv-studio/600/400" },
        { title: "दीपावली पर धमाकेदार कमाई — नई फिल्में पहले हफ्ते में हिट", time: "4 घंटे पहले", img: "https://picsum.photos/seed/festival-lights/600/400" },
        { title: "सूफ़ी महोत्सव का फुल लाइनअप जारी — भोपाल से शुरुआत", time: "5 घंटे पहले", img: "https://picsum.photos/seed/sufi-night/600/400" },
        { title: "सिनेमा हॉलों ने बढ़ाई क्षमता, नए रिलीज़ को मिली राहत", time: "6 घंटे पहले", img: "https://picsum.photos/seed/theatre-hall/600/400" },
      ],
    },
    health: {
      label: "स्वास्थ्य",
      items: [
        { title: "सरकारी अस्पतालों में फ्लू टीकाकरण शिविर, दवाओं की कोई कमी नहीं", time: "1 घंटा पहले", img: "https://picsum.photos/seed/vaccine-drive/600/400" },
        { title: "शीतलहर से बचाव — वरिष्ठ नागरिकों के लिए विशेष वार्ड", time: "2 घंटे पहले", img: "https://picsum.photos/seed/hospital-ward/600/400" },
        { title: "मिशन पोषण: आंगनवाड़ी केंद्रों पर जांच अभियान शुरू", time: "3 घंटे पहले", img: "https://picsum.photos/seed/nutrition-day/600/400" },
        { title: "डेंगू नियंत्रण के नए दिशानिर्देश जारी", time: "4 घंटे पहले", img: "https://picsum.photos/seed/dengu-lab/600/400" },
        { title: "हर शनिवार निःशुल्क योग शिविर — नागरिकों के लिए खुला", time: "5 घंटे पहले", img: "https://picsum.photos/seed/yoga-park/600/400" },
        { title: "महिलाओं के लिए निःशुल्क हेल्थ स्क्रीनिंग सुविधा", time: "6 घंटे पहले", img: "https://picsum.photos/seed/women-health/600/400" },
      ],
    },
  },

  /* ---------- आज का राशिफल ---------- */
  rashifal: [
    { r: "मेष",     sym: "♈",  t: "नई शुरुआत फ़ायदा देगी — सुबह के महत्वपूर्ण काम पूरे होंगे।" },
    { r: "वृषभ",   sym: "♉",  t: "पैसों से जुड़े टाले काम आज आसानी से पूरे होंगे।" },
    { r: "मिथुन",   sym: "♊",  t: "बात-चीत शुभ — मीटिंग/इंटरव्यू के लिए बेहतरीन दिन।" },
    { r: "कर्क",    sym: "♋",  t: "परिवार का समय बनेगा, घर में खुशी नई आभा में।" },
    { r: "सिंह",    sym: "♌",  t: "आत्मविश्वास की ऊँचाई — नेतृत्व का दिन शुभ।" },
    { r: "कन्या",   sym: "♍",  t: "विवरण ध्यान से देखें, छोटी लापरवाही महंगी पड़ेगी।" },
    { r: "तुला",    sym: "♎",  t: "संतुलन भरा निर्णय सफलता दिलाएगा — कड़वी बात छोड़ें।" },
    { r: "वृश्चिक", sym: "♏",  t: "गहरी रिसर्च से फ़ायदा, रात को जल्दी सोएँ।" },
    { r: "धनु",     sym: "♐",  t: "यात्रा हेतु शुभ दिन — दूर से शुभ समाचार आएगा।" },
    { r: "मकर",     sym: "♑",  t: "अनुशासन में सफलता — मेहनत का फल मिलेगा।" },
    { r: "कुम्भ",   sym: "♒",  t: "नए आइडिया रचनात्मक — टेक्नोलॉजी का काम शुभ।" },
    { r: "मीन",     sym: "♓",  t: "कला और लेखन में सफलता — रचनात्मकता का दिन।" },
  ],

  /* ---------- आर्टिकल पेज की "जुड़ी खबरें" ---------- */
  related: [
    { title: "चंदेरी–महेश्वरी साड़ियों के निर्यात में 14% का उछाल", tag: "कारोबार", time: "3 घंटे पहले", img: "https://picsum.photos/seed/textile-factory/600/400" },
    { title: "सेंसेक्स 80,000 के पार — तेजी जारी", tag: "कारोबार", time: "43 मिनट पहले", img: "https://picsum.photos/seed/market-screens/600/400" },
    { title: "मुख्यमंत्री की बैठक में नई औद्योगिक नीति पर 5 बड़े फैसले", tag: "म.प्र.", time: "5 घंटे पहले", img: "https://picsum.photos/seed/meeting-room/600/400" },
    { title: "मध्य प्रदेश के जिलों में ड्रोन डिलीवरी का प्रायोगिक दौर", tag: "टेक", time: "6 घंटे पहले", img: "https://picsum.photos/seed/drone-sky/600/400" },
  ],
};
