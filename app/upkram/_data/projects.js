// The 30 projects of the old site's causes page (https://mbsmtrust.org/our-causes), in the same four categories.
// Titles are the old English titles in Marathi. The old one-line English descriptions are not carried over, and
// nothing else (dates, places, figures) is added: the old site gave none.
//
// Each project:
//   id        a short name for the project (also the photo's file name)
//   category  "education" | "food" | "medical" | "events"  (see CATEGORIES)
//   title     the project's name, in Marathi
//   image     its photo, /assets/media/upkram/<id>.webp: only where the photo is the trust's own.
//             Without it the card shows its category's icon instead. The old site's other pictures are stock or
//             web pictures (or an illustration), so they are not used. Add `image` when the trust sends a real photo.

// the filter's buttons, in order; `icon` is the Font Awesome icon a card without a photo shows
export const CATEGORIES = [
    { key: "education", label: "बालशिक्षण", icon: "fas fa-book-open" },
    { key: "food", label: "अन्नदान", icon: "fas fa-utensils" },
    { key: "medical", label: "आरोग्यसेवा", icon: "fas fa-heartbeat" },
    { key: "events", label: "उत्सव आणि परंपरा", icon: "fas fa-om" },
]

const photo = (id) => `/assets/media/upkram/${id}.webp`

const PROJECTS_IN_ORDER = [
    // बालशिक्षण (3)
    { id: "school-kit-distribution", category: "education", title: "शालेय साहित्य वाटप" },
    { id: "parental-support", category: "education", title: "पालक मार्गदर्शन उपक्रम" },
    { id: "counseling", category: "education", title: "समुपदेशन सेवा" },

    // अन्नदान (10)
    { id: "sankashti-khichdi", category: "food", title: "संकष्टी चतुर्थी खिचडी वाटप" },
    { id: "shankar-gita", category: "food", title: "शंकर गीता पठण", image: photo("shankar-gita") },
    { id: "gaushala", category: "food", title: "गोशाळा सहाय्य", image: photo("gaushala") },
    { id: "grocery", category: "food", title: "किराणा वाटप" },
    { id: "mahaprasad", category: "food", title: "साप्ताहिक महाप्रसाद", image: photo("mahaprasad") },
    { id: "food-donation", category: "food", title: "अन्नदान उपक्रम", image: photo("food-donation") },
    { id: "snehalaya", category: "food", title: "स्नेहालय सहाय्य" },
    { id: "police", category: "food", title: "पोलीस विभाग सहाय्य" },
    { id: "ganesh-festival", category: "food", title: "गणेशोत्सव सेवा" },
    { id: "kushtdham-sweets", category: "food", title: "कुष्ठधाम गोड भोजन" },

    // आरोग्यसेवा (6)
    { id: "tricycle", category: "medical", title: "तीनचाकी सायकल वाटप" },
    { id: "free-treatment", category: "medical", title: "मोफत वैद्यकीय उपचार" },
    { id: "calamity", category: "medical", title: "नैसर्गिक आपत्ती सहाय्य" },
    { id: "weekly-medical", category: "medical", title: "साप्ताहिक वैद्यकीय सेवा" },
    { id: "blood-donation", category: "medical", title: "रक्तदान शिबिर" },
    { id: "medical-guidance", category: "medical", title: "वैद्यकीय मार्गदर्शन" },

    // उत्सव आणि परंपरा (11)
    { id: "rajabhau-janmdin", category: "events", title: "श्री राजाभाऊ कोठारी जन्मदिन", image: photo("rajabhau-janmdin") },
    { id: "kavad-yatra", category: "events", title: "महाशिवरात्री कावड यात्रा" },
    { id: "hanuman-chalisa", category: "events", title: "हनुमान चालीसा पठण", image: photo("hanuman-chalisa") },
    { id: "hanuman-jayanti", category: "events", title: "हनुमान जयंती", image: photo("hanuman-jayanti") },
    { id: "samadhi-sohala", category: "events", title: "श्री शंकर महाराज समाधी सोहळा", image: photo("samadhi-sohala") },
    { id: "guru-purnima", category: "events", title: "गुरुपौर्णिमा", image: photo("guru-purnima") },
    { id: "gauri-ganapati", category: "events", title: "गौरी-गणपती उत्सव" },
    { id: "prakat-din", category: "events", title: "श्री शंकर महाराज प्रकट दिन", image: photo("prakat-din") },
    { id: "datta-jayanti", category: "events", title: "श्री दत्त जयंती", image: photo("datta-jayanti") },
    { id: "dattak-gaav", category: "events", title: "दत्तक गाव योजना" },
    { id: "bhajan-sandhya", category: "events", title: "भजन संध्या", image: photo("bhajan-sandhya") },
]

// The page is photo-led: the projects with a photo come first, the others after them (the order of the list above
// is kept inside each group; Array.sort is stable).
export const PROJECTS = [...PROJECTS_IN_ORDER].sort((a, b) => Number(Boolean(b.image)) - Number(Boolean(a.image)))
