import React from 'react'
import * as HeroIcons from "react-icons/hi";


export const SidebarData = [
    {
        title : "Home",
        path : "/",
        icon : <HeroIcons.HiLibrary />,
        cName : "nav-text"
    },
    {
        title : "Product",
        path : "/",
        icon : <HeroIcons.HiShoppingCart />,
        cName : "nav-text"
    },
    {
        title : "Report",
        path : "/report",
        icon : <HeroIcons.HiDocumentText />,
        cName : "nav-text"
    },
    {
        title : "Notification",
        path : "/",
        icon : <HeroIcons.HiBell />,
        cName : "nav-text"
    },
    {
        title : "Account",
        path : "/",
        icon : <HeroIcons.HiUser />,
        cName : "nav-text"
    },
    {
        title : "Support",
        path : "/",
        icon : <HeroIcons.HiMailOpen />,
        cName : "nav-text"
    },
]