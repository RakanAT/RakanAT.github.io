import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
      en: {
        "title": "Soccer Lovers",
        "subhead1" : "Soccer Club",
        "subhead2" : "For the love of the game!",
        "navbar1" : "Home",
        "navbar2" : "About",
        "navbar3" : "Services",
        "navbar4" : "Sign Up",
    
        "cardsHead" : "Check out some our recent events and honorary players!",
    
        "card1tit" : "Soccer Lovers vs Democratic Soccer Club",
        "card1bod" : "We played against our rival soccer club and had a tie!",
    
        "card2tit" : "MVP of the month",
        "card2bod" : "Rodrigo carried his team, one of the best MVP plays!",
    
        "card3tit" : "Most Goals of then Month",
        "card3bod" : "Abdulrahman has had the highest goals this month, 20 goals!",
    
        "card4tit" : "Youth",
        "card4bod" : "We also have a youth team, all ages are welcome when it comes to soccer!",
    
        "card5tit" : "Women",
        "card5bod" : "Come and join the women's league!",
    
        "footer1" : "Join the Soccer Lover's newsletter to receive invitations to all events planned! Soccer is for everyone.",
        "footer2" : "You can unsubscribe at any time."
    
    
    },

    ar: {
    "title": "عشاق كرة القدم",
    "subhead1" : "نادي كرة القدم",
    "subhead2" : "لحب اللعبة!",
    "navbar1" : "الصفحة الرئيسية",
    "navbar2" : "معلومات عنا",
    "navbar3" : "خدمات",
    "navbar4" : "تسجيل",

    "cardsHead" : "تحقق من بعض الأحداث الأخيرة واللاعبين الفخريين!",

    "card1tit" : "عشاق كرة القدم مقابل نادي كرة القدم الديمقراطي",
    "card1bod" : "لعبنا ضد منافسنا وتعادلنا!",

    "card2tit" : "أفضل لاعب في الشهر",
    "card2bod" : "حمل رودريجو فريقه ، أحد أفضل مسرحيات أفضل لاعب!",

    "card3tit" : "معظم أهداف الشهر",
    "card3bod" : "عبد الرحمن سجل أعلى الأهداف هذا الشهر 20 هدفا!",

    "card4tit" : "شباب",
    "card4bod" : "لدينا أيضًا فريق شباب ، نرحب بجميع الأعمار عندما يتعلق الأمر بكرة القدم!",

    "card5tit" : "نساء",
    "card5bod" : "تعال وانضم إلى الدوري النسائي!",

    "footer1" : "انضم إلى النشرة الإخبارية Soccer Lover لتلقي دعوات لجميع الأحداث المخطط لها! كرة القدم للجميع.",
    "footer2" : "يمكنك إلغاء الاشتراك في أي وقت."


    }
},

fallbackLng: "en",
debug: true,

// have a common namespace used around the full app
ns: ["translations"],
defaultNS: "translations",

keySeparator: false, // we use content as keys

interpolation: {
  escapeValue: false, // not needed for react!!
  formatSeparator: ","
},

react: {
  wait: true
}
});

export default i18n;   