// Header navigation, shared by the desktop menu and the mobile drawer.
// An item with `children` opens a dropdown and has no page of its own;
// `icon` (Font Awesome classes) shows beside the item in the mobile drawer; a page link's icon also
// shows in the desktop header and a child's in the desktop dropdown (the group's is drawer-only).

export const NAV_ITEMS = [
    { href: "/", label: "मुखपृष्ठ", icon: "fas fa-home" },
    { href: "/parichaya", label: "परिचय", icon: "fas fa-om" },
    {
        label: "आमचे कार्य",
        icon: "fas fa-praying-hands",
        children: [
            { href: "/karyakram", label: "कार्यक्रम", icon: "fas fa-calendar-alt" },
            { href: "/upkram", label: "उपक्रम", icon: "fas fa-hands-helping" },
            { href: "/prakashan", label: "प्रकाशन", icon: "fas fa-book-open" },
            { href: "/pravachan", label: "प्रवचन", icon: "fas fa-microphone-alt" },
            { href: "/chitrasangraha", label: "चित्रसंग्रह", icon: "fas fa-images" },
        ],
    },
    { href: "/denagi", label: "देणगी", icon: "fas fa-hand-holding-heart" },
    { href: "/sampark", label: "संपर्क", icon: "fas fa-phone-alt" },
]

export const isNavActive = (pathname, href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)
