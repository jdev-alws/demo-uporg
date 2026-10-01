/**
 * UTTARPRADESH.ORG - FOXIZ CAPITAL THEME ENGINE
 * High-performance vanilla JavaScript interactive news platform
 */

// Dataset derived from uttarpradesh.org
const NEWS_DATA = [
  {
    id: "sp-mla-sudhakar-singh",
    title: "सपा विधायक सुधाकर सिंह का निधन: लखनऊ मेदांता में ली अंतिम सांस, दारा सिंह को हराकर बने थे MLA",
    category: "ताजा खबरें",
    categoryClass: "red",
    author: "विशेष संवाददाता",
    date: "आज, 10:45 AM",
    readTime: "3 मिनट",
    image: "https://www.uttarpradesh.org/wp-content/uploads/2025/08/mla01.jpeg",
    excerpt: "मऊ के घोसी से समाजवादी पार्टी के कद्दावर विधायक सुधाकर सिंह का लखनऊ के मेदांता अस्पताल में निधन हो गया। उनके निधन से पूरे पूर्वांचल की राजनीति में शोक की लहर दौड़ गई है।",
    content: `
      <p><strong>लखनऊ:</strong> मऊ जिले की घोसी विधानसभा सीट से समाजवादी पार्टी के विधायक सुधाकर सिंह का लखनऊ स्थित मेदांता अस्पताल में लंबी बीमारी के बाद निधन हो गया। वे पिछले कुछ समय से स्वास्थ्य संबंधी जटिलताओं के चलते अस्पताल में भर्ती थे।</p>
      <p>सुधाकर सिंह ने 2023 के ऐतिहासिक घोसी उपचुनाव में भाजपा के कद्दावर नेता दारा सिंह चौहान को भारी मतों से शिकस्त देकर प्रदेश की राजनीति में अपनी मजबूत पकड़ का लोहा मनवाया था।</p>
      <p>सपा के राष्ट्रीय अध्यक्ष अखिलेश यादव ने गहरा दुख व्यक्त करते हुए कहा कि 'सुधाकर सिंह जी का जाना समाजवादी परिवार के लिए अपूरणीय क्षति है। वे जमीन से जुड़े सच्चे जननायक थे जिन्होंने हमेशा जनता के हकों की लड़ाई लड़ी।'</p>
      <p>पार्थिव शरीर को उनके पैतृक आवास मऊ ले जाया जा रहा है जहाँ अंतिम संस्कार में प्रदेश भर के दिग्गज नेता शामिल होंगे।</p>
    `,
    tags: ["घोसी", "मऊ", "सपा", "सुधाकर सिंह", "लखनऊ"]
  },
  {
    id: "jalaun-land-fight",
    title: "जालौन: खेत पैमाइश पर दो पक्षों में मारपीट, युवक गंभीर घायल; पुलिस जांच में जुटी",
    category: "उत्तर प्रदेश",
    categoryClass: "blue",
    author: "जालौन ब्यूरो",
    date: "2 घंटे पहले",
    readTime: "2 मिनट",
    image: "https://www.uttarpradesh.org/wp-content/uploads/2025/08/mla02.jpeg",
    excerpt: "कोंच कोतवाली क्षेत्र के अंतर्गत खेत की पैमाइश को लेकर दो पक्षों में विवाद हो गया, जिसमें लाठी-डंडे चलने से एक युवक गंभीर रूप से घायल हो गया।",
    content: `
      <p><strong>जालौन:</strong> कोंच कोतवाली क्षेत्र के एक गांव में खेत की पैमाइश के दौरान दो पक्षों के बीच कहासुनी खूनी संघर्ष में तब्दील हो गई। दोनों पक्षों की ओर से जमकर लाठी-डंडे चले।</p>
      <p>घटना में 28 वर्षीय युवक गंभीर रूप से घायल हो गया जिसे आनन-फानन में सामुदायिक स्वास्थ्य केंद्र ले जाया गया, जहाँ से नाजुक हालत में जिला अस्पताल रेफर किया गया है।</p>
      <p>कोंच पुलिस क्षेत्राधिकारी ने बताया कि मामले की तहरीर के आधार पर मुकदमा दर्ज कर लिया गया है और आरोपियों की गिरफ्तारी के लिए दबिश दी जा रही है।</p>
    `,
    tags: ["जालौन", "कोंच", "क्राइम", "यूपी पुलिस"]
  },
  {
    id: "jalaun-water-award",
    title: "जालौन को 6वें राष्ट्रीय जल पुरस्कार, DM राजेश कुमार पांडेय को राष्ट्रपति ने किया सम्मानित",
    category: "Special Reports",
    categoryClass: "gold",
    author: "राज्य ब्यूरो",
    date: "4 घंटे पहले",
    readTime: "4 मिनट",
    image: "https://www.uttarpradesh.org/wp-content/uploads/2025/08/mla03.jpeg",
    excerpt: "जल संरक्षण और भूजल संवर्धन के उत्कृष्ट कार्यों के लिए जालौन जनपद को देश भर में सम्मानित किया गया है। राष्ट्रपति द्रौपदी मुर्मू ने यह प्रतिष्ठित सम्मान प्रदान किया।",
    content: `
      <p><strong>नई दिल्ली/जालौन:</strong> नई दिल्ली के विज्ञान भवन में आयोजित भव्य समारोह में जालौन जनपद को जल संरक्षण के क्षेत्र में बेहतरीन कार्य करने हेतु 6वें राष्ट्रीय जल पुरस्कार से नवाजा गया।</p>
      <p>महामहिम राष्ट्रपति द्रौपदी मुर्मू ने जालौन के जिलाधिकारी राजेश कुमार पांडेय को यह राष्ट्रीय पुरस्कार सौंपा। जनपद में अमृत सरोवरों के निर्माण, चेकडैम और वर्षा जल संचयन के आधुनिक मॉडलों को राष्ट्रीय स्तर पर सराहा गया है।</p>
      <p>जिलाधिकारी ने यह सम्मान जिले की पूरी प्रशासनिक टीम और जागरूक जनता को समर्पित किया।</p>
    `,
    tags: ["जालौन", "जल पुरस्कार", "राजेश पांडेय", "द्रौपदी मुर्मू"]
  },
  {
    id: "chitrakoot-health-protest",
    title: "चित्रकूट: बदहाल स्वास्थ्य सेवाओं के खिलाफ सड़क पर उतरा जनमानस, DM को सौंपा 3 सूत्री ज्ञापन",
    category: "उत्तर प्रदेश",
    categoryClass: "blue",
    author: "चित्रकूट संवादाता",
    date: "5 घंटे पहले",
    readTime: "3 मिनट",
    image: "https://www.uttarpradesh.org/wp-content/uploads/2025/08/mla06.jpeg",
    excerpt: "ट्रामा सेंटर में डॉक्टरों की कमी और जीवन रक्षक दवाओं के अभाव को लेकर सामाजिक संगठनों व नागरिकों ने मुख्यालय पर जोरदार प्रदर्शन किया।",
    content: `
      <p><strong>चित्रकूट:</strong> धर्मनगरी चित्रकूट में स्वास्थ्य सेवाओं की बदहाली के खिलाफ नागरिकों का आक्रोश फूट पड़ा। विभिन्न सामाजिक संगठनों, अधिवक्ताओं और व्यापारियों ने कलेक्ट्रेट का घेराव किया।</p>
      <p>प्रदर्शनकारियों ने जिलाधिकारी को ज्ञापन सौंपकर जिला अस्पताल में रिक्त विशेषज्ञ डॉक्टरों के पदों को भरने, 24 घंटे अल्ट्रासाउंड-सीटी स्कैन सुविधा चालू रखने और समुचित दवाओं की उपलब्धता की मांग की।</p>
      <p>मांगें न माने जाने पर नागरिकों ने अनिश्चितकालीन धरने की चेतावनी दी है।</p>
    `,
    tags: ["चित्रकूट", "स्वास्थ्य सेवा", "DM ज्ञापन", "जन आंदोलन"]
  },
  {
    id: "up-panchayat-varanasi",
    title: "वाराणसी में पंचायत चुनाव की अंतिम मतदाता सूची जारी, 17,93,504 वोटर चुनेंगे गांव की सरकार",
    category: "Panchayat",
    categoryClass: "red",
    author: "वाराणसी डेस्क",
    date: "6 घंटे पहले",
    readTime: "3 मिनट",
    image: "https://www.uttarpradesh.org/wp-content/uploads/2018/06/Untitled-5-copy-12.jpg",
    excerpt: "त्रिस्तरीय पंचायत चुनाव 2026 की तैयारियों के क्रम में वाराणसी की फाइनल वोटर लिस्ट का प्रकाशन हो गया है। इस बार 85,000 नए युवा मतदाता जुड़े हैं।",
    content: `
      <p><strong>वाराणसी:</strong> उत्तर प्रदेश राज्य निर्वाचन आयोग के निर्देशों के अनुपालन में वाराणसी जिले की सभी ग्राम पंचायतों के लिए अंतिम मतदाता सूची का विधिवत प्रकाशन कर दिया गया है।</p>
      <p>सहायक जिला निर्वाचन अधिकारी (पंचायत) ने बताया कि जिले में कुल 17 लाख 93 हजार 504 मतदाता अपने मताधिकार का प्रयोग करेंगे। इसमें 9.54 लाख पुरुष और 8.39 लाख महिला मतदाता शामिल हैं।</p>
      <p>सूची का निरीक्षण सभी विकास खंड कार्यालयों एवं ग्राम सचिवालयों में किया जा सकता है।</p>
    `,
    tags: ["वाराणसी", "पंचायत चुनाव 2026", "वोटर लिस्ट", "ग्राम पंचायत"]
  },
  {
    id: "assembly-2027-update",
    title: "UP Assembly Election 2027: जनगणना के बावजूद समय पर होंगे यूपी चुनाव? चुनाव आयोग ने साफ किया रुख",
    category: "Assembly Elections 2027",
    categoryClass: "red",
    author: "राजनीतिक विश्लेषक",
    date: "8 घंटे पहले",
    readTime: "5 मिनट",
    image: "https://s3.ap-south-1.amazonaws.com/uttarpradesh.org/wp-content/uploads/2026/05/02085707/AKHILESH-YADAV.webp",
    excerpt: "2027 के विधानसभा चुनाव को लेकर चल रही तमाम अटकलों पर विराम लगाते हुए चुनाव आयोग ने स्पष्ट किया है कि परिसीमन और जनगणना की प्रक्रिया का निर्धारित चुनावी कैलेंडर पर कोई प्रभाव नहीं पड़ेगा।",
    content: `
      <p><strong>लखनऊ:</strong> उत्तर प्रदेश विधानसभा चुनाव 2027 को लेकर राजनीतिक गलियारों में चल रही विभिन्न चर्चाओं के बीच चुनाव आयोग से जुड़े सूत्रों ने स्पष्ट किया है कि चुनाव तय समय पर ही संपन्न होंगे।</p>
      <p>आगामी चुनाव उत्तर प्रदेश की राजनीति में एक ऐतिहासिक मोड़ साबित होने वाला है, जहाँ भाजपा अपने तीसरे कार्यकाल के लिए पूरी ताकत झोंक रही है, वहीं समाजवादी पार्टी 'पीडीए' फॉर्मूले के साथ सत्ता वापसी की रणनीति पर काम कर रही है।</p>
      <p>विशेषज्ञों के अनुसार 403 विधानसभा क्षेत्रों में सभी प्रमुख दल अभी से बूथ स्तर की कमेटियों को पुनर्गठित करने में जुट गए हैं।</p>
    `,
    tags: ["UP Election 2027", "अखिलेश यादव", "योगी आदित्यनाथ", "विधानसभा चुनाव"]
  },
  {
    id: "dudhwa-tiger-reserve",
    title: "दुधवा टाइगर रिजर्व होगा आज से पर्यटकों के लिए बन्द: मॉनसून सत्र की तैयारी शुरू",
    category: "उत्तर प्रदेश",
    categoryClass: "gold",
    author: "लखीमपुर खीरी ब्यूरो",
    date: "10 घंटे पहले",
    readTime: "2 मिनट",
    image: "https://www.uttarpradesh.org/wp-content/uploads/2018/06/Untitled-7-copy-3.jpg",
    excerpt: "तराई के जंगलों में मॉनसून की आहट के साथ ही विश्व प्रसिद्ध दुधवा राष्ट्रीय उद्यान को सैलानियों के लिए आगामी 15 नवंबर तक बंद कर दिया गया है।",
    content: `
      <p><strong>लखीमपुर खीरी:</strong> उत्तर प्रदेश का गौरव माना जाने वाला दुधवा टाइगर रिजर्व वार्षिक वर्षा ऋतु के आगमन के चलते आज से पर्यटकों के भ्रमण के लिए बंद कर दिया गया है।</p>
      <p>पार्क के फील्ड डायरेक्टर ने जानकारी दी कि बारिश के दिनों में वन क्षेत्रों में जलभराव और कच्ची सड़कों के कटने के कारण वन्यजीवों की सुरक्षा और पर्यटकों की सुविधा को ध्यान में रखते हुए यह फैसला प्रतिवर्ष लिया जाता है।</p>
      <p>इस सत्र में रिकॉर्ड संख्या में देशी व विदेशी पर्यटकों ने दुधवा में बाघ, एक सींग वाले गैंडे और हाथियों के झुंड का दीदार किया।</p>
    `,
    tags: ["दुधवा", "टाइगर रिजर्व", "लखीमपुर", "पर्यटन", "वाइल्डलाइफ"]
  },
  {
    id: "rajya-sabha-election-up",
    title: "UP Rajya Sabha Election 2026: यूपी की 10 सीटों पर BJP-SP में बड़ा मुकाबला, 2027 से पहले सेमीफाइनल",
    category: "Assembly Elections 2027",
    categoryClass: "red",
    author: "संजय सिंह, वरिष्ठ संपादक",
    date: "12 घंटे पहले",
    readTime: "4 मिनट",
    image: "https://s3.ap-south-1.amazonaws.com/uttarpradesh.org/wp-content/uploads/2026/04/01191919/akshay_yadav.jpg",
    excerpt: "उत्तर प्रदेश में खाली हो रही 10 राज्य सभा सीटों पर सियासी गणित गरमा गया है। दोनों ही खेमे छोटे दलों और निर्दलीय विधायकों को साधने की जुगत में लग गए हैं।",
    content: `
      <p><strong>लखनऊ:</strong> संसद के उच्च सदन राज्यसभा में उत्तर प्रदेश की 10 सीटें खाली हो रही हैं। विधायकों की संख्या बल के आधार पर भारतीय जनता पार्टी 7 और समाजवादी पार्टी 3 सीटें आसानी से जीत सकती हैं, लेकिन 10वीं सीट पर क्रॉस वोटिंग का खतरा बना हुआ है।</p>
      <p>यह मुकाबला 2027 के महासमर से पहले दोनों गठबंधनों के आपसी तालमेल और रणनीतिक सूझबूझ की बड़ी अग्निपरीक्षा माना जा रहा है।</p>
    `,
    tags: ["राज्यसभा", "विधानसभा", "भाजपा", "सपा", "राज्यसभा चुनाव"]
  },
  {
    id: "political-families-75-districts",
    title: "उत्तर प्रदेश के राजनीतिक परिवार: 75 जिलों में सियासी विरासत की बड़ी पड़ताल",
    category: "Special Reports",
    categoryClass: "blue",
    author: "रिसर्च टीम, UP Org",
    date: "1 दिन पहले",
    readTime: "7 मिनट",
    image: "https://www.uttarpradesh.org/wp-content/uploads/2025/10/UP-ORG-LOGO.jpeg",
    excerpt: "पूरब से पश्चिम और अवध से बुंदेलखंड तक, उत्तर प्रदेश के 75 जनपदों में किन-किन राजनीतिक घरानों का वर्चस्व आज भी कायम है? एक विस्तृत खोजी रिपोर्ट।",
    content: `
      <p><strong>विशेष विश्लेषण:</strong> उत्तर प्रदेश की राजनीति में लोकतंत्र के साथ-साथ परिवारवाद और सियासी विरासत का एक अनूठा सम्मिश्रण देखने को मिलता है।</p>
      <p>हमारी विशेष जांच पड़ताल में सामने आया कि राज्य की 403 विधानसभाओं में से 90 से अधिक सीटों पर ऐसे जनप्रतिनिधि चुनकर आते हैं जिनकी कम से कम दो पीढ़ियां सक्रिय राजनीति में रही हैं।</p>
      <p>इस रिपोर्ट में इटावा का यादव परिवार, कैराना का हसन परिवार, कुंडा का भदरी घराना, सुल्तानपुर का राजघराना और लखीमपुर का गिरि परिवार सहित कई रसूखदार सियासी परिवारों का ब्योरा शामिल है।</p>
    `,
    tags: ["सियासी विरासत", "उत्तर प्रदेश राजनीति", "परिवारवाद", "विश्लेषण"]
  }
];

// MLAs & MPs dataset from full_data.json
const POLITICIANS_DATA = [
  {
    name: "अखिलेश यादव (Akhilesh Yadav)",
    role: "लोकसभा सांसद 2024 (सांसद)",
    party: "समाजवादी पार्टी",
    partyKey: "sp",
    constituency: "कन्नौज लोकसभा क्षेत्र",
    photo: "https://s3.ap-south-1.amazonaws.com/uttarpradesh.org/wp-content/uploads/2026/05/02085707/AKHILESH-YADAV.webp",
    bio: "उत्तर प्रदेश के पूर्व मुख्यमंत्री एवं वर्तमान में कन्नौज से लोकसभा सांसद। समाजवादी पार्टी के राष्ट्रीय अध्यक्ष के रूप में 'पीडीए' अभियान का नेतृत्व कर रहे हैं।"
  },
  {
    name: "अंकित भारती (Ankit Bharti)",
    role: "वर्तमान विधायक (MLA)",
    party: "समाजवादी पार्टी",
    partyKey: "sp",
    constituency: "सैदपुर विधानसभा (गाजीपुर)",
    photo: "https://www.uttarpradesh.org/wp-content/uploads/2025/09/MLA-%E0%A4%85%E0%A4%82%E0%A4%95%E0%A4%BF%E0%A4%A4-%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4%E0%A5%80-Ankit-Bharti-Samajwadi-Party-Saidpur.webp",
    bio: "उत्तर प्रदेश की 18वीं विधानसभा के सबसे युवा विधायकों में से एक। गाजीपुर जनपद के सैदपुर सुरक्षित क्षेत्र से भारी मतों से निर्वाचित हुए।"
  },
  {
    name: "अंकुर राज तिवारी (Ankur Raj Tiwari)",
    role: "वर्तमान विधायक (MLA)",
    party: "भारतीय जनता पार्टी",
    partyKey: "bjp",
    constituency: "खलीलाबाद विधानसभा (संत कबीर नगर)",
    photo: "https://www.uttarpradesh.org/wp-content/uploads/2025/09/MLA-%E0%A4%85%E0%A4%82%E0%A4%95%E0%A5%81%E0%A4%B0-%E0%A4%B0%E0%A4%BE%E0%A4%9C-%E0%A4%A4%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%80-BJP-%E0%A4%96%E0%A4%B2%E0%A5%80%E0%A4%B2%E0%A4%BE%E0%A4%AC%E0%A4%BE%E0%A4%A6-%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%95%E0%A4%BE-%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A4%A8%E0%A5%80%E0%A4%A4%E0%A4%BF%E0%A4%95-%E0%A4%B8%E0%A4%AB%E0%A4%B0.webp",
    bio: "संत कबीर नगर जनपद के खलीलाबाद विधानसभा क्षेत्र से भाजपा के विधायक। युवा नेतृत्व और जमीनी जनसंपर्क के लिए जाने जाते हैं।"
  },
  {
    name: "अजय सिंह (Ajay Singh)",
    role: "वर्तमान विधायक (MLA)",
    party: "भारतीय जनता पार्टी",
    partyKey: "bjp",
    constituency: "हर्रैया विधानसभा (बस्ती)",
    photo: "https://s3.ap-south-1.amazonaws.com/uttarpradesh.org/wp-content/uploads/2026/02/04130934/Biography-Political-Journey-of-UP-MLA-Ajay-Singh-Basti.webp",
    bio: "बस्ती जनपद के हर्रैया विधानसभा क्षेत्र से प्रतिनिधित्व करते हैं। लगातार दो बार से भाजपा के टिकट पर क्षेत्र का विकास कर रहे हैं।"
  },
  {
    name: "अक्षय यादव (Akshay Yadav)",
    role: "लोकसभा सांसद 2024 (सांसद)",
    party: "समाजवादी पार्टी",
    partyKey: "sp",
    constituency: "फिरोजाबाद लोकसभा",
    photo: "https://s3.ap-south-1.amazonaws.com/uttarpradesh.org/wp-content/uploads/2026/04/01191919/akshay_yadav.jpg",
    bio: "फिरोजाबाद संसदीय सीट से 2024 के लोकसभा चुनाव में विजय हासिल की। प्रोफेसर रामगोपाल यादव के सुपुत्र एवं युवा सांसद।"
  },
  {
    name: "अजेंद्र सिंह लोधी (Ajendra Singh Lodhi)",
    role: "लोकसभा सांसद 2024 (सांसद)",
    party: "समाजवादी पार्टी",
    partyKey: "sp",
    constituency: "हमीरपुर लोकसभा क्षेत्र",
    photo: "https://s3.ap-south-1.amazonaws.com/uttarpradesh.org/wp-content/uploads/2026/05/02154456/AJENDRA-SINGH-LODHI.jpg",
    bio: "बुंदेलखंड के हमीरपुर-महोबा संसदीय क्षेत्र से नवनिर्वाचित सांसद। पिछड़े वर्ग के सशक्त प्रतिनिधि के रूप में जाने जाते हैं।"
  },
  {
    name: "अतुल गर्ग (Atul Garg)",
    role: "लोकसभा सांसद 2024 (सांसद)",
    party: "भारतीय जनता पार्टी",
    partyKey: "bjp",
    constituency: "गाज़ियाबाद लोकसभा",
    photo: "https://s3.ap-south-1.amazonaws.com/uttarpradesh.org/wp-content/uploads/2026/05/07095947/atul-garg-gaziyabad.jpg",
    bio: "उत्तर प्रदेश सरकार में पूर्व राज्यमंत्री एवं गाजियाबाद से 2024 में भारी मतों से चुने गए भाजपा सांसद।"
  },
  {
    name: "अनुप्रिया पटेल (Anupriya Patel)",
    role: "केंद्रीय मंत्री एवं सांसद (सांसद)",
    party: "अपना दल (सोनेलाल)",
    partyKey: "bjp",
    constituency: "मिर्जापुर लोकसभा क्षेत्र",
    photo: "https://www.uttarpradesh.org/wp-content/uploads/2025/08/MP07.jpg",
    bio: "अपना दल (एस) की राष्ट्रीय अध्यक्ष और मिर्जापुर से तीसरी बार सांसद। केंद्र सरकार में स्वास्थ्य एवं परिवार कल्याण राज्य मंत्री।"
  },
  {
    name: "अखिलेश (Akhilesh)",
    role: "वर्तमान विधायक (MLA)",
    party: "समाजवादी पार्टी",
    partyKey: "sp",
    constituency: "मुबारकपुर विधानसभा (आजमगढ़)",
    photo: "https://www.uttarpradesh.org/wp-content/uploads/2022/06/%E0%A4%86%E0%A4%9C%E0%A4%AE%E0%A4%97%E0%A4%A2%E0%A4%BC-%E0%A4%95%E0%A5%87-%E0%A4%AE%E0%A5%81%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A4%95%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%B8%E0%A5%87-%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A5%80-%E0%A4%AA%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A5%80-MLA-Akhilesh-%E0%A4%95%E0%A4%BE-%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A4%A8%E0%A5%80%E0%A4%A4%E0%A4%BF%E0%A4%95-%E0%A4%B8%E0%A4%AB%E0%A4%B0.webp",
    bio: "आजमगढ़ जनपद की मुबारकपुर विधानसभा सीट से समाजवादी पार्टी के विधायक। बुनकरों, किसानों व क्षेत्रीय विकास के लिए समर्पित जननेता।"
  }
];

// Video section stories
const VIDEOS_DATA = [
  {
    id: "video-1",
    title: "Manish Paul Airport Look: मुंबई एयरपोर्ट पर स्पॉट हुए मनीष पॉल",
    meta: "मनोरंजन • 4:12 मिनट",
    duration: "04:12",
    thumb: "https://www.uttarpradesh.org/wp-content/uploads/2025/08/mla02.jpeg",
    desc: "टेलीविजन होस्ट और अभिनेता मनीष पॉल अपने खास अंदाज़ में एयरपोर्ट पर नजर आए। पैपराजी के साथ उनकी बातचीत का यह मजेदार वीडियो वायरल हो रहा है।"
  },
  {
    id: "video-2",
    title: "सतीश शाह का पुराना वीडियो वायरल: सोशल मीडिया पर फिर छाया कॉमेडी लीजेंड",
    meta: "वायरल वीडियो • 3:25 मिनट",
    duration: "03:25",
    thumb: "https://www.uttarpradesh.org/wp-content/uploads/2025/08/mla06.jpeg",
    desc: "मशहूर अभिनेता सतीश शाह का एक पुराना टीवी कॉमेडी सीन इंटरनेट पर फिर से धूम मचा रहा है। फैंस उनके कॉमिक टाइमिंग की तारीफ करते नहीं थक रहे।"
  },
  {
    id: "video-3",
    title: "हमीरपुर की भौली गौशाला में सुधार की मांग: संत सेवकनाथ का आमरण अनशन",
    meta: "ग्राउंड रिपोर्ट • 6:40 मिनट",
    duration: "06:40",
    thumb: "https://www.uttarpradesh.org/wp-content/uploads/2018/06/Untitled-5-copy-12.jpg",
    desc: "हमीरपुर जिले की भौली गौशाला में अव्यवस्थाओं और चारे की कमी को लेकर संत सेवकनाथ धरने पर बैठ गए हैं। स्थानीय प्रशासन से तुरंत कार्रवाई की मांग।"
  },
  {
    id: "video-4",
    title: "Salman Khan poses with soldiers in Ladakh as he shoots for Battle of Galwan",
    meta: "बॉलीवुड रिपोर्ट • 5:10 मिनट",
    duration: "05:10",
    thumb: "https://www.uttarpradesh.org/wp-content/uploads/2025/08/mla01.jpeg",
    desc: "सुपरस्टार सलमान खान ने लद्दाख में अपनी आगामी फिल्म की शूटिंग के दौरान भारतीय सेना के जवानों के साथ यादगार पल बिताए।"
  }
];

// Panchayat elections summary stats
const PANCHAYAT_STATS = [
  { district: "वाराणसी", voters: "17,93,504", blocks: "8 ब्लॉक", panchayats: "694 ग्राम पंचायत" },
  { district: "उन्नाव", voters: "21,03,279", blocks: "16 ब्लॉक", panchayats: "1,040 ग्राम पंचायत" },
  { district: "सुल्तानपुर", voters: "20,00,048", blocks: "14 ब्लॉक", panchayats: "979 ग्राम पंचायत" },
  { district: "सोनभद्र", voters: "12,77,263", blocks: "10 ब्लॉक", panchayats: "629 ग्राम पंचायत" },
  { district: "सीतापुर", voters: "31,18,029", blocks: "19 ब्लॉक", panchayats: "1,329 ग्राम पंचायत" }
];

// App State Management
class AppState {
  constructor() {
    this.theme = localStorage.getItem('up_org_theme') || 'default';
    this.bookmarks = JSON.parse(localStorage.getItem('up_org_bookmarks') || '[]');
    this.activeFilter = 'all';
    this.fontSizeDelta = 0;
  }

  setTheme(theme) {
    this.theme = theme;
    localStorage.setItem('up_org_theme', theme);
    document.body.setAttribute('data-theme', theme);
    this.updateThemeIcons();
  }

  toggleTheme() {
    this.setTheme(this.theme === 'dark' ? 'default' : 'dark');
  }

  updateThemeIcons() {
    const isDark = this.theme === 'dark';
    const darkToggle = document.getElementById('theme-toggle-btn');
    if (darkToggle) {
      darkToggle.setAttribute('title', isDark ? 'लाइट मोड में बदलें' : 'डार्क मोड में बदलें');
    }
  }

  isBookmarked(id) {
    return this.bookmarks.includes(id);
  }

  toggleBookmark(id) {
    const idx = this.bookmarks.indexOf(id);
    if (idx > -1) {
      this.bookmarks.splice(idx, 1);
      showToast('बुकमार्क हटा दिया गया');
    } else {
      this.bookmarks.push(id);
      showToast('लेख बुकमार्क में सहेजा गया');
    }
    localStorage.setItem('up_org_bookmarks', JSON.stringify(this.bookmarks));
    this.updateBookmarkBadge();
    this.renderBookmarksDrawer();
  }

  updateBookmarkBadge() {
    const countBadge = document.getElementById('bookmark-count-badge');
    if (countBadge) {
      countBadge.textContent = this.bookmarks.length;
      countBadge.style.display = this.bookmarks.length > 0 ? 'flex' : 'none';
    }
  }

  renderBookmarksDrawer() {
    const container = document.getElementById('saved-articles-container');
    if (!container) return;

    if (this.bookmarks.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-light);">
          <svg style="width: 48px; height: 48px; margin-bottom: 12px; opacity: 0.4;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
          <p style="font-weight: 600; color: var(--text-muted);">कोई सहेजा हुआ लेख नहीं है</p>
          <p style="font-size: 0.8125rem; margin-top: 4px;">किसी भी समाचार पर बुकमार्क आइकन दबाकर उसे यहाँ सहेजें।</p>
        </div>
      `;
      return;
    }

    const savedArticles = NEWS_DATA.filter(art => this.bookmarks.includes(art.id));
    container.innerHTML = savedArticles.map(art => `
      <div class="search-result-item" style="align-items: center; justify-content: space-between;">
        <div style="flex: 1; cursor: pointer;" onclick="openArticleModal('${art.id}')">
          <span class="category-tag ${art.categoryClass}" style="margin-bottom: 4px;">${art.category}</span>
          <h4 style="font-size: 0.9rem; line-height: 1.35; color: var(--text-main);">${art.title}</h4>
          <span style="font-size: 0.75rem; color: var(--text-light);">${art.date}</span>
        </div>
        <button class="bookmark-btn saved" onclick="appState.toggleBookmark('${art.id}'); event.stopPropagation();" title="हटाएं">
          <svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
        </button>
      </div>
    `).join('');
  }
}

const appState = new AppState();

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme
  appState.setTheme(appState.theme);
  appState.updateBookmarkBadge();

  // 2. Render Components
  renderBreakingTicker();
  renderHeroSection();
  renderPoliticians();
  renderUPGroundReports();
  renderVideoLounge();
  renderPanchayatSection();
  initRotatingBanner();

  // 3. Setup Listeners
  setupNavigationEvents();
  setupSearchEvents();
  setupNewsletter();
  setupBackToTop();
});

// Toast notification helper
function showToast(msg) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✓</span> <span>${msg}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// 1. Breaking News Ticker
function renderBreakingTicker() {
  const tickerContainer = document.getElementById('ticker-content-track');
  if (!tickerContainer) return;

  const tickerHtml = NEWS_DATA.map(item => `
    <a href="javascript:void(0)" class="ticker-item" onclick="openArticleModal('${item.id}')">
      <span class="ticker-sep">●</span>
      <span>${item.title}</span>
    </a>
  `).join('');

  // Duplicate for seamless loop
  tickerContainer.innerHTML = tickerHtml + tickerHtml;
}

// 2. Hero Section 3-Column Grid
function renderHeroSection() {
  const mainCol = document.getElementById('hero-main-column');
  const centerCol = document.getElementById('hero-center-column');
  const trendingCol = document.getElementById('hero-trending-column');

  if (!mainCol || !centerCol || !trendingCol) return;

  const leadStory = NEWS_DATA[0];
  const subStories = NEWS_DATA.slice(1, 3);
  const centerStories = NEWS_DATA.slice(3, 5);
  const trendingStories = NEWS_DATA.slice(5, 9);

  // Render Left Column
  mainCol.innerHTML = `
    <article class="hero-primary-card">
      <div class="hero-thumb-wrap" onclick="openArticleModal('${leadStory.id}')" style="cursor: pointer;">
        <img src="${leadStory.image}" alt="${leadStory.title}" loading="eager" decoding="async" onerror="this.src='https://www.uttarpradesh.org/wp-content/uploads/2025/10/UP-ORG-LOGO.jpeg'">
        <span class="category-tag ${leadStory.categoryClass}" style="position: absolute; top: 12px; left: 12px;">${leadStory.category}</span>
      </div>
      <div class="hero-content-wrap">
        <div class="post-meta">
          <span class="author"><span>द्वारा:</span> ${leadStory.author}</span>
          <span class="dot-sep"></span>
          <span>${leadStory.date}</span>
          <span class="dot-sep"></span>
          <span>${leadStory.readTime}</span>
          <button class="bookmark-btn ${appState.isBookmarked(leadStory.id) ? 'saved' : ''}" onclick="appState.toggleBookmark('${leadStory.id}')" title="सहेजें" style="margin-left: auto;">
            <svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          </button>
        </div>
        <h1 class="hero-headline serif-heading" onclick="openArticleModal('${leadStory.id}')" style="cursor: pointer;">
          ${leadStory.title}
        </h1>
        <p class="hero-excerpt">${leadStory.excerpt}</p>
      </div>
    </article>

    <div class="hero-subcards-row">
      ${subStories.map(sub => `
        <div class="horizontal-subcard" onclick="openArticleModal('${sub.id}')" style="cursor: pointer;">
          <div class="subcard-thumb">
            <img src="${sub.image}" alt="${sub.title}" loading="lazy" decoding="async" onerror="this.src='https://www.uttarpradesh.org/wp-content/uploads/2025/10/UP-ORG-LOGO.jpeg'">
          </div>
          <div class="subcard-info">
            <div>
              <span class="category-tag ${sub.categoryClass}" style="font-size: 0.68rem; padding: 1px 6px;">${sub.category}</span>
              <h3 class="subcard-title" style="margin-top: 5px;">${sub.title}</h3>
            </div>
            <div class="post-meta" style="font-size: 0.72rem; margin-top: 4px;">
              <span>${sub.date}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Render Center Column
  centerCol.innerHTML = `
    <div class="block-heading" style="margin-bottom: 16px;">
      <h3 class="block-title" style="font-size: 1.15rem;"><span class="indicator"></span>ग्राउंड रिपोर्ट्स</h3>
    </div>
    ${centerStories.map(cs => `
      <article class="vertical-story-card">
        <div class="vcard-thumb" onclick="openArticleModal('${cs.id}')" style="cursor: pointer;">
          <img src="${cs.image}" alt="${cs.title}" loading="lazy" decoding="async" onerror="this.src='https://www.uttarpradesh.org/wp-content/uploads/2025/10/UP-ORG-LOGO.jpeg'">
          <span class="category-tag ${cs.categoryClass}" style="position: absolute; top: 10px; left: 10px;">${cs.category}</span>
        </div>
        <div class="post-meta">
          <span>${cs.author}</span>
          <span class="dot-sep"></span>
          <span>${cs.date}</span>
        </div>
        <h2 class="vcard-title" onclick="openArticleModal('${cs.id}')" style="cursor: pointer;">
          ${cs.title}
        </h2>
        <p class="vcard-summary">${cs.excerpt}</p>
      </article>
    `).join('')}
  `;

  // Render Right Column (Trending List)
  trendingCol.innerHTML = `
    <div class="block-heading" style="margin-bottom: 16px;">
      <h3 class="block-title" style="font-size: 1.15rem;"><span class="indicator"></span>रुझान / Most Popular</h3>
    </div>
    <div class="trending-list">
      ${trendingStories.map((tr, index) => `
        <div class="trending-item" onclick="openArticleModal('${tr.id}')" style="cursor: pointer;">
          <span class="trending-number">0${index + 1}</span>
          <div class="trending-body">
            <span class="category-tag ${tr.categoryClass}" style="font-size: 0.65rem; width: fit-content; padding: 1px 6px;">${tr.category}</span>
            <h4 class="trending-title">${tr.title}</h4>
            <div class="post-meta" style="font-size: 0.72rem; margin-top: 2px;">
              <span>${tr.date}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// 3. Politicians Showcase
function renderPoliticians(filter = 'all') {
  const container = document.getElementById('politicians-grid-container');
  if (!container) return;

  let filtered = POLITICIANS_DATA;
  if (filter === 'sp') {
    filtered = POLITICIANS_DATA.filter(p => p.partyKey === 'sp');
  } else if (filter === 'bjp') {
    filtered = POLITICIANS_DATA.filter(p => p.partyKey === 'bjp');
  } else if (filter === 'mla') {
    filtered = POLITICIANS_DATA.filter(p => p.role.includes('विधायक'));
  } else if (filter === 'mp') {
    filtered = POLITICIANS_DATA.filter(p => p.role.includes('सांसद'));
  }

  container.innerHTML = filtered.map(pol => `
    <div class="politician-card">
      <div class="politician-img-box">
        <img src="${pol.photo}" alt="${pol.name}" loading="lazy" decoding="async" class="politician-avatar-img" onerror="this.src='https://www.uttarpradesh.org/wp-content/uploads/2025/10/UP-ORG-LOGO.jpeg'">
        <span class="party-badge-floating party-${pol.partyKey}">${pol.party}</span>
      </div>
      <div class="politician-info">
        <div>
          <h3 class="politician-name">${pol.name}</h3>
          <div class="politician-role">${pol.role}</div>
          <div class="politician-constituency">क्षेत्र: ${pol.constituency}</div>
        </div>
        <div class="politician-action">
          <button class="profile-link-btn" onclick="openPoliticianModal('${pol.name}')">
            राजनीतिक सफर देखें →
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// 4. UP Ground Reports Quad Grid
function renderUPGroundReports() {
  const container = document.getElementById('up-ground-reports-grid');
  if (!container) return;

  const articles = NEWS_DATA.slice(2, 6);
  container.innerHTML = articles.map(art => `
    <article class="quad-card">
      <div class="quad-thumb" onclick="openArticleModal('${art.id}')" style="cursor: pointer;">
        <img src="${art.image}" alt="${art.title}" loading="lazy" decoding="async" onerror="this.src='https://www.uttarpradesh.org/wp-content/uploads/2025/10/UP-ORG-LOGO.jpeg'">
        <span class="category-tag ${art.categoryClass}" style="position: absolute; top: 8px; left: 8px;">${art.category}</span>
      </div>
      <div class="post-meta">
        <span>${art.date}</span>
        <span class="dot-sep"></span>
        <span>${art.readTime}</span>
      </div>
      <h3 class="quad-title" onclick="openArticleModal('${art.id}')" style="cursor: pointer;">
        ${art.title}
      </h3>
      <p class="hero-excerpt" style="font-size: 0.8125rem; -webkit-line-clamp: 2;">${art.excerpt}</p>
    </article>
  `).join('');
}

// 5. Video Lounge
function renderVideoLounge() {
  const mainVideoContainer = document.getElementById('main-video-slot');
  const playlistContainer = document.getElementById('video-playlist-slot');
  if (!mainVideoContainer || !playlistContainer) return;

  const leadVideo = VIDEOS_DATA[0];
  const sideVideos = VIDEOS_DATA.slice(1);

  mainVideoContainer.innerHTML = `
    <div class="featured-video-player-card" onclick="openVideoPlayer('${leadVideo.id}')">
      <img src="${leadVideo.thumb}" alt="${leadVideo.title}" loading="lazy" decoding="async">
      <div class="play-overlay-btn">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
      </div>
      <div class="video-card-overlay-info">
        <span class="category-tag red" style="background: rgba(195, 27, 38, 0.85); color: #fff;">मुख्य बुलेटिन</span>
        <h3>${leadVideo.title}</h3>
        <p style="color: #ccc; font-size: 0.875rem; margin-top: 4px;">${leadVideo.meta}</p>
      </div>
    </div>
  `;

  playlistContainer.innerHTML = sideVideos.map(vid => `
    <div class="playlist-card" onclick="openVideoPlayer('${vid.id}')">
      <div class="playlist-thumb">
        <img src="${vid.thumb}" alt="${vid.title}" loading="lazy" decoding="async">
        <span class="playlist-duration">${vid.duration}</span>
      </div>
      <div style="flex: 1;">
        <h4 class="playlist-title">${vid.title}</h4>
        <div class="playlist-meta">${vid.meta}</div>
      </div>
    </div>
  `).join('');
}

// 6. Panchayat Section
function renderPanchayatSection() {
  const listContainer = document.getElementById('panchayat-voter-data');
  if (!listContainer) return;

  listContainer.innerHTML = PANCHAYAT_STATS.map(stat => `
    <div class="voter-stat-row">
      <div class="voter-district">
        <span class="district-badge">${stat.district}</span>
        <div>
          <div class="voter-title-text">${stat.district} जनपद मतदाता सूची</div>
          <span style="font-size: 0.78rem; color: var(--text-light);">${stat.blocks} • ${stat.panchayats}</span>
        </div>
      </div>
      <div class="voter-count-badge">
        <span class="count-number">${stat.voters}</span>
        <span class="count-label">कुल मतदाता</span>
      </div>
    </div>
  `).join('');
}

// 7. Rotating Words Banner
function initRotatingBanner() {
  const words = ["निष्पक्ष समाचार", "सटीक विश्लेषण", "ग्राउंड रिपोर्ट", "चुनावी कवरेज"];
  let index = 0;
  const target = document.getElementById('rotating-keyword');
  if (!target) return;

  setInterval(() => {
    index = (index + 1) % words.length;
    target.style.opacity = '0';
    target.style.transform = 'translateY(8px)';
    setTimeout(() => {
      target.textContent = words[index];
      target.style.opacity = '1';
      target.style.transform = 'translateY(0)';
    }, 250);
  }, 2400);
}

// 8. Navigation & Drawer Events
function setupNavigationEvents() {
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle-btn');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      appState.toggleTheme();
    });
  }

  // Hamburger Drawer Trigger
  const menuBtn = document.getElementById('hamburger-menu-btn');
  const offcanvasMenu = document.getElementById('offcanvas-menu-drawer');
  const closeMenuBtn = document.getElementById('close-menu-drawer');
  const overlay = document.getElementById('drawer-backdrop-overlay');

  if (menuBtn && offcanvasMenu && overlay) {
    menuBtn.addEventListener('click', () => {
      offcanvasMenu.classList.add('active');
      overlay.classList.add('active');
    });

    closeMenuBtn.addEventListener('click', () => {
      offcanvasMenu.classList.remove('active');
      overlay.classList.remove('active');
    });
  }

  // Saved Bookmarks Drawer Trigger
  const bookmarkTrigger = document.getElementById('saved-articles-trigger');
  const bookmarksDrawer = document.getElementById('bookmarks-drawer');
  const closeBookmarksBtn = document.getElementById('close-bookmarks-drawer');

  if (bookmarkTrigger && bookmarksDrawer && overlay) {
    bookmarkTrigger.addEventListener('click', () => {
      appState.renderBookmarksDrawer();
      bookmarksDrawer.classList.add('active');
      overlay.classList.add('active');
    });

    closeBookmarksBtn.addEventListener('click', () => {
      bookmarksDrawer.classList.remove('active');
      overlay.classList.remove('active');
    });
  }

  // Close when clicking overlay
  if (overlay) {
    overlay.addEventListener('click', () => {
      document.querySelectorAll('.offcanvas-drawer').forEach(d => d.classList.remove('active'));
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
      overlay.classList.remove('active');
    });
  }

  // Politician Filter Tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      const filter = e.target.getAttribute('data-filter');
      renderPoliticians(filter);
    });
  });
}

// 9. Search Modal & Real-Time Filtering
function setupSearchEvents() {
  const searchTrigger = document.getElementById('search-modal-trigger');
  const searchModal = document.getElementById('search-modal');
  const closeSearchBtn = document.getElementById('close-search-modal');
  const searchInput = document.getElementById('main-search-input');
  const resultsContainer = document.getElementById('search-results-list');

  if (!searchModal) return;

  const openSearch = () => {
    searchModal.classList.add('active');
    setTimeout(() => searchInput && searchInput.focus(), 100);
  };

  const closeSearch = () => {
    searchModal.classList.remove('active');
    if (searchInput) searchInput.value = '';
    if (resultsContainer) resultsContainer.innerHTML = '';
  };

  if (searchTrigger) searchTrigger.addEventListener('click', openSearch);
  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);

  // Close on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearch();
      closeArticleModal();
      closeVideoModal();
    }
  });

  // Filter articles on input
  if (searchInput && resultsContainer) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        resultsContainer.innerHTML = `<div style="text-align: center; color: var(--text-light); padding: 20px;">खबरें, राजनेता या जनपद खोजें...</div>`;
        return;
      }

      const matched = NEWS_DATA.filter(art => 
        art.title.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q) ||
        art.tags.some(t => t.toLowerCase().includes(q))
      );

      if (matched.length === 0) {
        resultsContainer.innerHTML = `<div style="text-align: center; color: var(--text-light); padding: 20px;">कोई परिणाम नहीं मिला। कृपया अन्य शब्द का प्रयास करें।</div>`;
        return;
      }

      resultsContainer.innerHTML = matched.map(m => `
        <div class="search-result-item" onclick="openArticleModal('${m.id}'); document.getElementById('search-modal').classList.remove('active');">
          <img src="${m.image}" style="width: 60px; height: 50px; border-radius: 4px; object-fit: cover;" onerror="this.src='https://www.uttarpradesh.org/wp-content/uploads/2025/10/UP-ORG-LOGO.jpeg'">
          <div>
            <span class="category-tag ${m.categoryClass}" style="font-size: 0.65rem; padding: 1px 6px;">${m.category}</span>
            <h4 style="font-size: 0.9rem; line-height: 1.3; color: var(--text-main); margin-top: 2px;">${m.title}</h4>
            <span style="font-size: 0.72rem; color: var(--text-light);">${m.date}</span>
          </div>
        </div>
      `).join('');
    });
  }
}

// 10. Open Article Modal
window.openArticleModal = function(id) {
  const article = NEWS_DATA.find(a => a.id === id);
  if (!article) return;

  const modal = document.getElementById('article-reader-modal');
  const titleEl = document.getElementById('modal-article-title');
  const catEl = document.getElementById('modal-article-category');
  const metaEl = document.getElementById('modal-article-meta');
  const imgEl = document.getElementById('modal-article-img');
  const contentEl = document.getElementById('modal-article-content');
  const tagsEl = document.getElementById('modal-article-tags');
  const bookmarkBtn = document.getElementById('modal-bookmark-toggle');

  if (!modal) return;

  titleEl.textContent = article.title;
  catEl.textContent = article.category;
  catEl.className = `category-tag ${article.categoryClass}`;

  metaEl.innerHTML = `
    <span><strong>रिपोर्ट:</strong> ${article.author}</span>
    <span class="dot-sep"></span>
    <span>${article.date}</span>
    <span class="dot-sep"></span>
    <span>${article.readTime} पठन</span>
  `;

  imgEl.src = article.image;
  contentEl.innerHTML = article.content;

  if (tagsEl) {
    tagsEl.innerHTML = article.tags.map(t => `<span class="category-tag" style="background: var(--bg-tertiary); color: var(--text-muted);">#${t}</span>`).join(' ');
  }

  if (bookmarkBtn) {
    bookmarkBtn.className = `bookmark-btn ${appState.isBookmarked(article.id) ? 'saved' : ''}`;
    bookmarkBtn.onclick = () => {
      appState.toggleBookmark(article.id);
      bookmarkBtn.className = `bookmark-btn ${appState.isBookmarked(article.id) ? 'saved' : ''}`;
    };
  }

  modal.classList.add('active');
};

window.closeArticleModal = function() {
  const modal = document.getElementById('article-reader-modal');
  if (modal) modal.classList.remove('active');
};

// Font size adjuster in modal
window.adjustReaderFontSize = function(delta) {
  const content = document.getElementById('modal-article-content');
  if (!content) return;
  const currentSize = parseFloat(window.getComputedStyle(content).fontSize);
  const newSize = Math.max(14, Math.min(24, currentSize + delta));
  content.style.fontSize = `${newSize}px`;
};

// Politician Modal
window.openPoliticianModal = function(name) {
  const pol = POLITICIANS_DATA.find(p => p.name === name);
  if (!pol) return;

  const modal = document.getElementById('article-reader-modal');
  const titleEl = document.getElementById('modal-article-title');
  const catEl = document.getElementById('modal-article-category');
  const metaEl = document.getElementById('modal-article-meta');
  const imgEl = document.getElementById('modal-article-img');
  const contentEl = document.getElementById('modal-article-content');
  const tagsEl = document.getElementById('modal-article-tags');

  if (!modal) return;

  titleEl.textContent = pol.name;
  catEl.textContent = pol.party;
  catEl.className = `category-tag red`;

  metaEl.innerHTML = `
    <span><strong>पद:</strong> ${pol.role}</span>
    <span class="dot-sep"></span>
    <span><strong>क्षेत्र:</strong> ${pol.constituency}</span>
  `;

  imgEl.src = pol.photo;
  contentEl.innerHTML = `
    <p><strong>राजनीतिक जीवन और परिचय:</strong></p>
    <p>${pol.bio}</p>
    <p>उत्तर प्रदेश की राजनीति में ${pol.name} अपने क्षेत्र और पार्टी संगठन में सक्रिय भूमिका निभाते हैं। जनसमस्याओं के निवारण और विधानसभा/संसद में जनहित के मुद्दों को उठाने के लिए वे विशेष रूप से सक्रिय रहे हैं।</p>
    <div style="background: var(--bg-secondary); padding: 16px; border-radius: 8px; margin-top: 16px; border-left: 4px solid var(--accent-red);">
      <h4>प्रमुख उपलब्धियां व राजनीतिक सफर:</h4>
      <ul style="margin-left: 20px; margin-top: 8px; color: var(--text-muted);">
        <li>विधानसभा / संसदीय क्षेत्र के विकास कार्यों में अग्रणी योगदान</li>
        <li>कृषि, ग्रामीण सड़कों एवं स्वास्थ्य सुविधाओं के विस्तार के लिए योजनाएं</li>
        <li>युवाओं और स्थानीय रोजगार के अवसरों के सृजन हेतु सतत प्रयास</li>
      </ul>
    </div>
  `;

  if (tagsEl) {
    tagsEl.innerHTML = `<span class="category-tag">${pol.party}</span> <span class="category-tag">${pol.constituency}</span>`;
  }

  modal.classList.add('active');
};

// Video Modal
window.openVideoPlayer = function(id) {
  const vid = VIDEOS_DATA.find(v => v.id === id);
  if (!vid) return;

  const modal = document.getElementById('video-modal');
  const titleEl = document.getElementById('video-modal-title');
  const descEl = document.getElementById('video-modal-desc');
  const placeholderImg = document.getElementById('video-player-img');

  if (!modal) return;

  titleEl.textContent = vid.title;
  descEl.textContent = vid.desc;
  placeholderImg.src = vid.thumb;

  modal.classList.add('active');
};

window.closeVideoModal = function() {
  const modal = document.getElementById('video-modal');
  if (modal) modal.classList.remove('active');
};

// Social Share Handler
window.shareStory = function(platform) {
  const url = window.location.href;
  const text = document.getElementById('modal-article-title').textContent || 'UttarPradesh.org News';
  
  if (platform === 'whatsapp') {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
  } else if (platform === 'twitter') {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  } else if (platform === 'copy') {
    navigator.clipboard.writeText(url).then(() => {
      showToast('लिंक कॉपी कर लिया गया है!');
    });
  }
};

// 11. Newsletter Form
function setupNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('newsletter-email-input');
    if (input && input.value) {
      showToast('धन्यवाद! आपका ईमेल न्यूज़लेटर हेतु पंजीकृत हो गया है।');
      input.value = '';
    }
  });
}

// 12. Back to Top Button
function setupBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
