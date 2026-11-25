// The 30 projects of the old site's causes page (https://mbsmtrust.org/our-causes), in the same four categories.
// Titles are the old English titles in Marathi. The old one-line English descriptions are not carried over, and
// nothing else (dates, places, figures) is added: the old site gave none.
//
// Each project:
//   id        a short name for the project
//   category  "education" | "food" | "medical" | "events"  (see CATEGORIES)
//   title     the project's name, in Marathi
//   image     (optional) its photo; by default /assets/media/prakalpa/<prefix>-<n>.webp, see PHOTO_PREFIX below
//
// The font stacks न्न, प्त and स्न into shapes that do not read as Marathi: a zero-width joiner (U+200D, unseen here) after
// the first letter's halant keeps the half letter.

// the filter's buttons, in order; `icon` is the Font Awesome icon of the filter and of the round icon on the cards
export const CATEGORIES = [
    { key: "education", label: "बालशिक्षण", icon: "fas fa-book-open" },
    { key: "food", label: "अन्‍नदान", icon: "fas fa-utensils" },
    { key: "medical", label: "आरोग्यसेवा", icon: "fas fa-heartbeat" },
    { key: "events", label: "उत्सव आणि परंपरा", icon: "fas fa-om" },
]

// the photo files are named <prefix>-<n>.webp, n = the project's place within its category (the order below)
const PHOTO_PREFIX = { education: "education", food: "annadan", medical: "wellness", events: "events" }

const PROJECT_LIST = [
    // बालशिक्षण (3)
    { id: "school-kit-distribution", category: "education", title: "शालेय साहित्य वाटप" },
    { id: "parental-support", category: "education", title: "पालक मार्गदर्शन प्रकल्प" },
    { id: "counseling", category: "education", title: "समुपदेशन सेवा" },

    // अन्‍नदान (10)
    { id: "sankashti-khichdi", category: "food", title: "संकष्टी चतुर्थी खिचडी वाटप" },
    { id: "shankar-gita", category: "food", title: "शंकर गीता पठण" },
    { id: "gaushala", category: "food", title: "गोशाळा सहाय्य" },
    { id: "grocery", category: "food", title: "किराणा वाटप" },
    { id: "mahaprasad", category: "food", title: "साप्‍ताहिक महाप्रसाद" },
    { id: "food-donation", category: "food", title: "अन्‍नदान प्रकल्प" },
    { id: "snehalaya", category: "food", title: "स्‍नेहालय सहाय्य" },
    { id: "police", category: "food", title: "पोलीस विभाग सहाय्य" },
    { id: "ganesh-festival", category: "food", title: "गणेशोत्सव सेवा" },
    { id: "kushtdham-sweets", category: "food", title: "कुष्ठधाम गोड भोजन" },

    // आरोग्यसेवा (6)
    { id: "tricycle", category: "medical", title: "तीनचाकी सायकल वाटप" },
    { id: "free-treatment", category: "medical", title: "मोफत वैद्यकीय उपचार" },
    { id: "calamity", category: "medical", title: "नैसर्गिक आपत्ती सहाय्य" },
    { id: "weekly-medical", category: "medical", title: "साप्‍ताहिक वैद्यकीय सेवा" },
    { id: "blood-donation", category: "medical", title: "रक्तदान शिबिर" },
    { id: "medical-guidance", category: "medical", title: "वैद्यकीय मार्गदर्शन" },

    // उत्सव आणि परंपरा (11)
    { id: "rajabhau-janmdin", category: "events", title: "श्री राजाभाऊ कोठारी जन्मदिन" },
    { id: "kavad-yatra", category: "events", title: "महाशिवरात्री कावड यात्रा" },
    { id: "hanuman-chalisa", category: "events", title: "हनुमान चालीसा पठण" },
    { id: "hanuman-jayanti", category: "events", title: "हनुमान जयंती" },
    { id: "samadhi-sohala", category: "events", title: "श्री शंकर महाराज समाधी सोहळा" },
    { id: "guru-purnima", category: "events", title: "गुरुपौर्णिमा" },
    { id: "gauri-ganapati", category: "events", title: "गौरी-गणपती उत्सव" },
    { id: "prakat-din", category: "events", title: "श्री शंकर महाराज प्रकट दिन" },
    { id: "datta-jayanti", category: "events", title: "श्री दत्त जयंती" },
    { id: "dattak-gaav", category: "events", title: "दत्तक गाव योजना" },
    { id: "bhajan-sandhya", category: "events", title: "भजन संध्या" },
]

// Each project gets its photo from public/assets/media/prakalpa. A project with an explicit `image` keeps it.
const placeInCategory = {}
export const PROJECTS = PROJECT_LIST.map((project) => {
    placeInCategory[project.category] = (placeInCategory[project.category] ?? 0) + 1
    const image = `/assets/media/prakalpa/${PHOTO_PREFIX[project.category]}-${placeInCategory[project.category]}.webp`
    return { image, ...project }
})
