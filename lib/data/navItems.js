// Header navigation, shared by the desktop menu and the mobile drawer.
// An item with `children` opens a dropdown and has no page of its own;
// a child's `icon` (Font Awesome classes) is shown beside it in the dropdown and the mobile drawer.

export const NAV_ITEMS = [
    { href: "/", label: "मुखपृष्ठ" },
    { href: "/parichaya", label: "परिचय" },
    {
        label: "आमचे कार्य",
        children: [
            { href: "/karyakram", label: "कार्यक्रम", icon: "fas fa-calendar-alt" },
            { href: "/upkram", label: "उपक्रम", icon: "fas fa-hands-helping" },
            { href: "/prakashan", label: "प्रकाशन", icon: "fas fa-book-open" },
            { href: "/pravachan", label: "प्रवचन", icon: "fas fa-microphone-alt" },
            { href: "/chitrasangraha", label: "चित्रसंग्रह", icon: "fas fa-images" },
        ],
    },
    { href: "/denagi", label: "देणगी" },
    { href: "/sampark", label: "संपर्क" },
]

export const isNavActive = (pathname, href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)
