'use client'
import { forwardRef, lazy, Suspense, useEffect, useRef, useState } from "react"

const HTMLFlipBook = lazy(() => import("react-pageflip"))

// Each chapter becomes a spread: its photo on one page, its text on the next.
const CHAPTERS = [
    {
        image: "assets/images/about/about-1.png",
        name: "दैवी निवड आणि बालपण",
        title: "१",
        text: "श्री शंकर महाराज हे अलौकिक व प्रभावी सिद्धपुरुष आहेत. आजही ते भक्तांना दृष्टांत देऊन सत्कार्याची प्रेरणा देतात. जात, धर्म, देश वा काळ यांचे बंधन न मानता ते योग्य व्यक्तीची निवड करतात आणि तिच्याकडून समाजसेवा घडवून घेतात. श्री विश्वेश्वर स्वामी महाराज हे असेच भाग्यवान. जैन-मारवाडी समाजातील हा तरुण औषधनिर्माता शंकर महाराजांना ओळखतही नव्हता आणि देव-धर्मावर त्याचा विश्वासही नव्हता; तरीही महाराजांनी त्यांची निवड केली आणि त्यांच्या माध्यमातून आजही अखंड चालू असलेले महान समाजकार्य उभे केले. स्वामी महाराजांचे पूर्ण नाव राजेश हिरालाल कोठारी. त्यांचा जन्म ६ फेब्रुवारी १९६८ रोजी नगर (अहमदनगर) येथे झाला. बालपणी ते अतिशय खेळकर व खोडकर होते; पुढे ते एवढे मोठे कार्य करतील, असे कोणालाही वाटले नव्हते. नगर व चांदवड येथे शिक्षण घेऊन विज्ञान शाखेतून शालान्त परीक्षा उत्तीर्ण केल्यानंतर त्यांनी फार्मसीचे शिक्षण घेतले आणि कुटुंबाच्या औषध व्यवसायात प्रवेश केला.",
    },
    {
        image: "assets/images/about/about-2.png",
        name: "कोठारी कुटुंब आणि संस्कारांचा वारसा",
        title: "२",
        text: "कोठारी कुटुंब मूळचे राजस्थानातील जोधपूरजवळील सोजत तालुक्यातील बुरुंडा गावचे; सिंधू मोरखाना देवी ही त्यांची कुलदेवता. सुमारे ११० वर्षांपूर्वी पणजोबा कालूरामजी कोठारी नगरला आले आणि त्यांनी आयुर्वेदिक औषधांचा व्यवसाय सुरू केला. आजोबा मंगलचंद आणि वडील हिरालाल हे नाडीपरीक्षेत निष्णात असे नामवंत वैद्य होते; गंजबाजारातील त्यांचे औषधालय शंभराहून अधिक वर्षे सुरू आहे. वडील हिरालाल सत्यनिष्ठ व तत्त्वनिष्ठ होते आणि औषधोपचार ही त्यांनी लोकसेवा मानली; ८ डिसेंबर २०१० रोजी त्यांचे निधन झाले, तरी आजही शेकडो रुग्ण त्यांची आठवण आदराने काढतात. फार्मसीची पदवी घेतलेले स्वामी महाराज स्वतः औषधे तयार करतात, तर त्यांचे दोन्ही भाऊ दुकान व हिशोब सांभाळतात. विज्ञानाचे विद्यार्थी असल्याने ते प्रत्येक गोष्ट तर्काच्या कसोटीवर पारखत आणि पुराव्याशिवाय कशावरही विश्वास ठेवत नसत. 'आपले काम नीट करावे, सत्कर्म करावे आणि व्यवसाय प्रामाणिकपणे चालवावा' हीच त्यांची श्रद्धा होती. तीन पिढ्यांच्या सत्कार्याचे पुण्य त्यांच्या पाठीशी उभे राहिले.",
    },
    {
        image: "assets/images/about/about-3.png",
        name: "दत्ताचे शिंगवे येथील दत्तकृपा",
        title: "३",
        text: "स्वामी महाराजांचे व्यक्तिमत्त्व आकर्षक व तेजस्वी आहे. स्वभावाने खेळकर असले, तरी त्यांनी कधी कोणाला दुखावले नाही. लहानपणापासूनच अन्यायाविरुद्ध लढण्याची त्यांना तीव्र इच्छा होती. देवावर विश्वास नसला, तरी लोकांना मदत करण्यावर त्यांची श्रद्धा होती. कधीही मंदिरात न गेलेल्या स्वामी महाराजांना एके दिवशी अचानक मंदिरात जावेसे वाटले. २९ मार्च १९८३ रोजी ते मित्रासोबत सायकलवरून नगर-औरंगाबाद मार्गावरील पांढरी पुलाजवळच्या दत्ताचे शिंगवे या प्राचीन व जागृत दत्तस्थानी पोहोचले. नेमकी संध्याकाळच्या आरतीची वेळ होती. आरती सुरू असताना त्यांना शरीरात बदल होत असल्याचे जाणवले. मन अपार आनंदाने भरून आले आणि संपूर्ण देह तेजस्वी व नव्या ऊर्जेने भारल्यासारखा वाटू लागला. नगरला परतल्यावरही ही अनुभूती कायम राहिली, पण त्यांनी तिच्याकडे फारसे लक्ष दिले नाही. हेच त्यांचे अध्यात्ममार्गावरील पहिले पाऊल ठरले.",
    },
    {
        image: "assets/images/about/about-4.png",
        name: "पाचोरा येथे दत्त व शिवदर्शन",
        title: "४",
        text: "एप्रिल १९८३ मध्ये नातेवाइकाच्या लग्नासाठी स्वामी महाराज पाचोऱ्याला गेले होते. पहाटे जाग आली तेव्हा सर्वत्र सुगंध दरवळत होता आणि देह हलका वाटत होता. मानेखाली हात घालून कोणीतरी उठवत असल्याचे त्यांना जाणवले. डोळे उघडताच शुभ्र प्रकाशात प्रथम एकमुखी दत्त, मग क्षणात लोपणारे त्रिमुखी दत्त आणि त्यानंतर तेजःपुंज श्यामवर्णी शिवशंकर यांचे दर्शन झाले. दत्तात्रेयांनी त्यांच्या दोन्ही कानांत फुंकर घालून आशीर्वाद दिला, मंत्र दिला आणि तात्काळ पाचोरा सोडण्यास सांगितले — 'तू जिथे जाशील तिथे मी सदैव तुझ्यासोबत आहे.' या दर्शनाने त्यांच्या वृत्तीत हळूहळू बदल होऊ लागला. तरीही 'पुरावा दाखवा, तरच विश्वास ठेवीन' या वृत्तीने त्यांनी याकडे दुर्लक्ष केले. कारखान्यात दत्तगुरू दर्शन देऊ लागले, तेव्हा ते त्यांच्याशी वाद घालत — 'तुमचे धार्मिक रीतिरिवाज मला झेपणार नाहीत, माझ्या मागे लागू नका.' पण गुरूंनी त्यांची साथ सोडली नाही.",
    },
    {
        image: "assets/images/about/about-5.png",
        name: "एमआयडीसीतील दत्तस्थान",
        title: "५",
        text: "१९७७ मध्ये नगरच्या एमआयडीसी परिसरात अकरा हजार चौरस फुटांच्या भूखंडावर औषधनिर्मितीचा कारखाना उभारला गेला. तेथे एक औदुंबर आपोआप उगवला होता आणि त्याच्या खोडातून कडुलिंब व पिंपळही फुटले होते. कारखान्याचा धार्मिक वृत्तीचा पहारेकरी औदुंबराखाली रोज दिवा लावू लागला. त्याने स्वामी महाराजांनाही तसे करण्यास सांगितले, पण ते म्हणाले, 'हे मला जमणार नाही; तुझी श्रद्धा असेल तर तू कर.' पुढे दत्तात्रेयांचा तेथे कायमचा निवास असून ते आपल्यावर सतत लक्ष ठेवून आहेत, याची त्यांना जाणीव झाली. दत्तगुरूंनीच जुन्नरच्या मुलीची त्यांच्यासाठी निवड केली आणि १९९३ मध्ये, वयाच्या पंचविसाव्या वर्षी त्यांचा विवाह झाला. १९८३ ते १९९३ या दहा वर्षांत गुरूंनी त्यांची परीक्षा घेत त्यांना घडवले. स्वामी महाराजांनी पावलोपावली त्यांना नाकारले, अपमानही केला; पण 'हे लेकरू एक दिवस आपल्याला स्वीकारेलच' या विश्वासाने दत्तगुरू सावलीसारखे दिवस-रात्र त्यांच्यासोबत राहिले.",
    },
    {
        image: "assets/images/about/about-6.png",
        name: "ज्ञानदीप प्रज्वलित झाला",
        title: "६ — सत्याची प्रचिती",
        text: "कारखान्याच्या प्रवेशद्वाराजवळील औदुंबराला सहा खोडे होती. स्वामी महाराजांनी दत्तगुरूंना आव्हान दिले — 'तुम्ही देव असाल तर सिद्ध करा! याचे एक खोड नाहीसे करून त्याला पंचखोडी करा, तरच मी विश्वास ठेवीन.' दुसऱ्याच दिवशी एक खोड जमिनीतून नाहीसे झाले. त्यानंतर पावलोपावली प्रचिती येऊ लागली. प्रथमच स्वतः दिवा लावायला गेले असता, काडी पेटवण्याआधीच वात आपोआप प्रज्वलित झाली आणि त्यांच्या सर्व शंका दूर झाल्या. लोक आशेने त्यांच्याकडे येऊ लागले; उपचारांनी त्यांचे त्रास दूर होऊ लागले, भरकटलेले तरुण सन्मार्गाला लागले, कोणाला नोकरी मिळाली तर कोणाचे लग्न जमले. गिरिजा बालाजी, गाणगापूर व तुळजापूर येथेही त्यांची नितांत श्रद्धा आहे. कारखाना, व्यवसाय व संसार सांभाळत ते आदरणीय आध्यात्मिक मार्गदर्शक बनले. दत्तकृपेने त्यांना क्षणात स्थलांतर, परकायाप्रवेश आणि त्रिकालज्ञान यांसारख्या सिद्धी प्राप्त झाल्या आणि दत्तगुरूंनी त्यांना भक्तिमार्गाच्या अग्रभागी आणले.",
    },
    {
        image: "assets/images/about/about-7.png",
        name: "योगिराज शंकर महाराजांचे दर्शन",
        title: "७",
        text: "नगरचा एमआयडीसी परिसर पूर्वी निंबळक गावची शेतजमीन होता. त्याच्या पूर्वेला वृद्धेश्वर, कानिफनाथ व मच्छिंद्रनाथ, तर उत्तरेला गोरक्षनाथ आहेत. नगरमधील सतरा-अठरा वर्षांच्या वास्तव्यात शंकर महाराज अनेकदा निंबळकला येत. १९९९ मध्ये स्वामी महाराजांना शंकर महाराजांचा अनुग्रह लाभला. आज जेथे त्यांचे कार्यालय आहे, त्याच जागी तेजस्वी रूप, आजानुबाहू आणि किंचित वाकलेली देहयष्टी असलेले महाराज त्यांच्यासमोर उभे राहिले आणि आज्ञा दिली — 'गरिबांना औषध देऊन त्यांची सेवा कर, भूमीची सेवा कर आणि माणसाला माणूस बनवण्याचे काम कर.' यापूर्वी त्यांना दत्तात्रेय, कालीमाता व श्री स्वामी समर्थ यांचे दर्शन झाले होते; पण शंकर महाराजांच्या आशीर्वादाने त्यांचा आध्यात्मिक प्रवास परमोच्च बिंदूला पोहोचला. तेव्हापासून महाराज कधी साध्या वेशात, कधी राजवेशात, तर कधी दत्त वा स्वामी रूपात त्यांच्या पाठीशी आहेत आणि त्यांच्या माध्यमातून अशक्य कामेही शक्य करतात.",
    },
    {
        image: "assets/images/about/about-8.png",
        name: "मंगल उत्पादने आणि लोकसेवा",
        title: "८",
        text: "स्वामी महाराजांच्या कारखान्यात 'मंगल प्रॉडक्ट्स' अंतर्गत 'दुःख भगाओ लेप', 'शिंकणी' आणि मधुमेहावरील प्रभावी औषध तयार होते; या उत्पादनांना मोठी मागणी आहे. मारवाडी समाजातील व्यावसायिक असूनही ते लोभी नसून उदार व मोकळ्या मनाचे आहेत. धार्मिक व सामाजिक कार्यासाठी ते सढळ हाताने खर्च करतात आणि दानातील धान्य, दूध, तूप, तेल शुद्ध व उत्तम दर्जाचेच असेल याची काळजी घेतात. नगरमध्ये हनुमान जयंतीपूर्वी चाळीस दिवस रोज रात्री ८ ते १० हनुमान चालीसा पठण त्यांनी सुरू केले, ज्याला उदंड प्रतिसाद मिळाला. पुढे रक्तदान शिबिरे भरवली. नगरपासून २८ किमीवरील आगडगाव येथे १२ वर्षे मोफत दवाखाना चालवला; त्यातून उपेक्षित कालभैरव मंदिराला नवसंजीवनी मिळाली आणि दर रविवारी महाप्रसाद वाटला गेला. सारोळा गावात मोठी पाण्याची टाकी बांधून पाणीप्रश्न सोडवला आणि तेथील दोनशे बेरोजगार तरुणांना मार्गदर्शन देऊन साधनेत गुंतवले.",
    },
    {
        image: "assets/images/about/about-9.png",
        name: "निःस्वार्थ लोकसेवा",
        title: "९ — लोककल्याणकारी उपक्रम",
        text: "या केंद्रात देणगी, पावती पुस्तक वा कोणताही आर्थिक व्यवहार नाही; दिखावा नाही, कर्मकांडांचे कठोर नियम नाहीत. मार्गदर्शन व अन्नदान पूर्णतः विनामूल्य आहे. स्वामी महाराजांच्या माध्यमातून शंकर महाराज सांगतात — 'मी घेण्यासाठी नव्हे, तर देण्यासाठी आलो आहे.' कसायांकडून गायी विकत घेऊन, त्यांचे उत्तम पालनपोषण करून त्या गरजूंना दान केल्या जातात. संत गाडगेबाबा आश्रमशाळेला बॉयलर, दिव्यांगांना तीनचाकी सायकली, गरीब कुटुंबांना किराणा, मूकबधिर मुलांना श्रवणयंत्रे आणि अनाथाश्रमांना जीवनावश्यक वस्तू दिल्या जातात. रुग्णांना ते शंकर महाराजांचा अंगारा देतात; 'शुद्ध रूपातील भस्म हे प्रतिजैविकच आहे,' असे विज्ञाननिष्ठ स्वामी महाराज सांगतात. त्यांना 'विश्वेश्वर स्वामीनाथ' व 'श्री स्वयंसिद्धनाथ महाराज' ही नावे प्राप्त झाली. अनेक पुरस्कार मिळूनही त्यांच्यात गर्वाचा लवलेश नाही. धन्वंतरीची उपासना करत औषधातून आरोग्यसेवा व मार्गदर्शनातून मानवसेवा हे त्यांचे व्रत अखंड सुरू आहे.",
    },
    {
        image: "assets/images/about/about-10.png",
        name: "कृपेच्या कथा आणि पुढील वाटचाल",
        title: "१०",
        text: "अजमेर येथील ख्वाजा मोईनुद्दीन चिश्ती यांच्या दर्ग्याकडून स्वामी महाराजांना विशेष निमंत्रण आले. प्रचंड गर्दीमुळे दर्शनाला सहा-सात तास लागले असते; मात्र पहाटेच दर्ग्याचे एक विश्वस्त, मिळालेल्या दृष्टांतानुसार, त्यांचा शोध घेत आले आणि त्यांना सन्मानाने दर्शन घडवून शाल देऊन त्यांचा सत्कार केला. अशा कृपेच्या असंख्य कथा आहेत. काही कठीण प्रसंगही आले; त्रास सहन करावा लागला, खोटे आरोपही झाले. पण शंकर महाराजांचे पाठबळ आणि दत्तगुरूंचा आशीर्वाद लाभलेले स्वामी महाराज या सर्वांपासून अलिप्त राहिले. त्यांचे कार्य आज मंगल भक्त सेवा मंडळाच्या माध्यमातून अखंड सुरू आहे. शंकर महाराज म्हणत — 'मी जे बोलतो ती प्रार्थना, मी जे चालतो ती प्रदक्षिणा, आणि निष्काम कर्म हीच माझी पूजा.' स्वामी महाराजांचे कार्य नेमके असेच आहे; भक्तांच्या श्रद्धेनुसार ते त्यांना मदत करतात आणि साधकांना शांती व आनंदाची अनुभूती देतात.",
    },
]

const PAGES = CHAPTERS.flatMap(({ image, name, title, text }) => [
    { image, name },
    { image: null, name, title, text },
])

const CoverPage = forwardRef(({ onOpen }, ref) => (
    <div className="legacy-book-page legacy-book-page--cover" ref={ref}>
        <div className="legacy-book-page__cover-inner">
            <span className="legacy-book-page__cover-symbol" aria-hidden="true">
                <img src="assets/images/about/about.png" alt="" />
            </span>

            <h3 className="legacy-book-page__cover-title">
                <span className="legacy-book-page__cover-title-bar" aria-hidden="true">||</span>
                दिव्य जीवनगाथा
                <span className="legacy-book-page__cover-title-bar" aria-hidden="true">||</span>
            </h3>
            <span className="legacy-book-page__cover-subtitle">दत्तकृपा, शंकर महाराजांचा अनुग्रह आणि निःस्वार्थ लोकसेवेची कहाणी</span>

            <button
                type="button"
                className="legacy-book-page__cta"
                aria-label="गाथा वाचा — स्वामी महाराजांची जीवनगाथा वाचायला सुरुवात करा"
                onPointerDown={(e) => {
                    // react-pageflip listens on pointer/mouse-down and, in Chrome,
                    // starts a flip-drag gesture that can swallow the button's
                    // click. Stop it here so our own handler always runs.
                    e.stopPropagation()
                }}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    onOpen?.()
                }}
            >
                <span className="legacy-book-page__cta-label">गाथा वाचा</span>
                <span className="legacy-book-page__cta-icon" aria-hidden="true">
                    <i className="icon-arrow-right"></i>
                </span>
            </button>
        </div>
    </div>
))
CoverPage.displayName = "CoverPage"

const PortraitPage = forwardRef(({ page, index }, ref) => (
    <div className="legacy-book-page legacy-book-page--portrait" ref={ref}>
        <div className="legacy-book-page__photo legacy-book-page__photo--full">
            {page.mobileImage ? (
                <>
                    <img className="legacy-book-page__photo-img--desktop" src={page.image} alt={page.name} />
                    <img className="legacy-book-page__photo-img--mobile" src={page.mobileImage} alt={page.name} />
                </>
            ) : (
                <img src={page.image} alt={page.name} />
            )}
            <span className="legacy-book-page__photo-frame" aria-hidden="true"></span>
        </div>
        <span className="legacy-book-page__number">{index}</span>
    </div>
))
PortraitPage.displayName = "PortraitPage"

const TextPage = forwardRef(({ page }, ref) => (
    <div className="legacy-book-page" ref={ref}>
        <div className="legacy-book-page__body">
            {page.title && (
                <>
                    <span className="legacy-book-page__name">{page.name}</span>
                    <span className="legacy-book-page__role">{page.title}</span>
                </>
            )}
            <p className="legacy-book-page__text">{page.text}</p>
        </div>
    </div>
))
TextPage.displayName = "TextPage"

const ContentPage = forwardRef(({ person, index }, ref) => (
    person.image
        ? <PortraitPage page={person} index={index} ref={ref} />
        : <TextPage page={person} index={index} ref={ref} />
))
ContentPage.displayName = "ContentPage"

const BackCoverPage = forwardRef((props, ref) => (
    <div className="legacy-book-page legacy-book-page--cover" ref={ref}>
        <div className="legacy-book-page__cover-inner">
            <span className="legacy-book-page__cover-symbol" aria-hidden="true">
                <img src="assets/images/about/about.png" alt="" />
            </span>
            <span className="legacy-book-page__cover-subtitle legacy-book-page__cover-subtitle--back">मंगल भक्त सेवा मंडळ, अहिल्यानगर</span>
        </div>
    </div>
))
BackCoverPage.displayName = "BackCoverPage"

const TABLET_MIN_WIDTH = 768
const TABLET_MAX_WIDTH = 991
const MOBILE_MAX_WIDTH = 767

export default function Legacy() {
    const bookRef = useRef(null)
    const [pageIndex, setPageIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [closedSide, setClosedSide] = useState("front") // "front" | "back" | null
    const [isTablet, setIsTablet] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const totalPages = PAGES.length + 2

    useEffect(() => {
        const tabletMql = window.matchMedia(`(min-width: ${TABLET_MIN_WIDTH}px) and (max-width: ${TABLET_MAX_WIDTH}px)`)
        const updateTablet = () => setIsTablet(tabletMql.matches)
        updateTablet()
        tabletMql.addEventListener("change", updateTablet)

        const mobileMql = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`)
        const updateMobile = () => setIsMobile(mobileMql.matches)
        updateMobile()
        mobileMql.addEventListener("change", updateMobile)

        return () => {
            tabletMql.removeEventListener("change", updateTablet)
            mobileMql.removeEventListener("change", updateMobile)
        }
    }, [])

    const goPrev = () => bookRef.current?.pageFlip()?.flipPrev()
    const goNext = () => bookRef.current?.pageFlip()?.flipNext()

    // "गाथा वाचा" — open the closed book to its first content page.
    // flipNext() is the reliable call here; flip(n) is blocked by page-flip's
    // own click guard when the book is in its single-page closed state.
    // Defer a tick so react-pageflip's own pointer handlers finish first —
    // calling synchronously from the click races them on Chrome and no-ops.
    const openBook = () => {
        requestAnimationFrame(() => {
            bookRef.current?.pageFlip()?.flipNext("bottom")
        })
    }

    const handleFlip = (e) => {
        setPageIndex(e.data)
        // "Open" = showing an interior spread; first page (front cover) and last
        // page (back cover) are single closed pages sitting on opposite halves.
        const open = e.data > 0 && e.data < totalPages - 1
        setIsOpen(open)
        setClosedSide(e.data === 0 ? "front" : e.data === totalPages - 1 ? "back" : null)
    }

    return (
        <section className={`legacy-One${isOpen ? " legacy-One--book-open" : " legacy-One--book-closed"}`}>
            <div className="divine-border--legacy divine-border--legacy-top" role="presentation"></div>
            <div className="divine-border--legacy-vertical divine-border--legacy-left" role="presentation"></div>
            <div className="divine-border--legacy-vertical divine-border--legacy-right" role="presentation"></div>
            <span className="legacy-One__corner legacy-One__corner--tl" aria-hidden="true"></span>
            <span className="legacy-One__corner legacy-One__corner--tr" aria-hidden="true"></span>
            <span className="legacy-One__corner legacy-One__corner--bl" aria-hidden="true"></span>
            <span className="legacy-One__corner legacy-One__corner--br" aria-hidden="true"></span>

            <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                    <span className="section-title__tagline">प्रेरणादायी जीवनगाथा</span>
                </div>
                <h2 className="section-title__title title-animation">श्रद्धेपासून सेवेपर्यंतचा <br className="legacy-One__title-break" /> दिव्य प्रवास</h2>
            </div>

            <div className={`legacy-book-stage${isOpen ? " legacy-book-stage--opened" : ` legacy-book-stage--closed legacy-book-stage--closed-${closedSide || "front"}`}`}>
                <button
                    type="button"
                    className="legacy-book-arrow legacy-book-arrow--prev"
                    onClick={goPrev}
                    disabled={pageIndex === 0}
                    aria-label="मागील पान"
                >
                    <svg className="legacy-book-arrow__icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Desktop diya-pillars hugging the book's left/right edges —
                    they rise in when the book is closed, recede when it opens */}
                {["left", "right"].map((side) => (
                    <video
                        key={side}
                        src="assets/images/resources/diya-pillar.mov"
                        aria-hidden="true"
                        className={`legacy-One__aside legacy-One__aside--${side}`}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                ))}

                <div className="legacy-book-wrap wow fadeIn" data-wow-delay="100ms">
                    <Suspense fallback={<div className="legacy-book-loading" aria-hidden="true"></div>}>
                        <HTMLFlipBook
                            key={isTablet ? "tablet" : isMobile ? "mobile" : "default"}
                            ref={bookRef}
                            width={isMobile ? 460 : 620}
                            height={isMobile ? 720 : 720}
                            size="stretch"
                            minWidth={isTablet ? 400 : isMobile ? 340 : 220}
                            maxWidth={isTablet ? 560 : isMobile ? 460 : 900}
                            minHeight={256}
                            maxHeight={isTablet ? 820 : isMobile ? 720 : 880}
                            showCover={true}
                            maxShadowOpacity={0.65}
                            flippingTime={800}
                            drawShadow={true}
                            useMouseEvents={true}
                            className={`legacy-book${isOpen ? " legacy-book--opened" : " legacy-book--closed"}`}
                            onFlip={handleFlip}
                        >
                            <CoverPage onOpen={openBook} />
                            {PAGES.map((person, i) => (
                                <ContentPage key={i} person={person} index={i + 1} />
                            ))}
                            <BackCoverPage />
                        </HTMLFlipBook>
                    </Suspense>
                </div>

                <button
                    type="button"
                    className="legacy-book-arrow legacy-book-arrow--next"
                    onClick={goNext}
                    disabled={pageIndex === totalPages - 1}
                    aria-label="पुढील पान"
                >
                    <svg className="legacy-book-arrow__icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div className="legacy-book-arrow-row">
                    <button
                        type="button"
                        className="legacy-book-arrow legacy-book-arrow--prev legacy-book-arrow--stacked"
                        onClick={goPrev}
                        disabled={pageIndex === 0}
                        aria-label="मागील पान"
                    >
                        <svg className="legacy-book-arrow__icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="legacy-book-arrow legacy-book-arrow--next legacy-book-arrow--stacked"
                        onClick={goNext}
                        disabled={pageIndex === totalPages - 1}
                        aria-label="पुढील पान"
                    >
                        <svg className="legacy-book-arrow__icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="divine-border--legacy divine-border--legacy-bottom" role="presentation"></div>
        </section>
    )
}
