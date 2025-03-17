import {
    mdiAccountCircle,
    mdiMonitor,
    mdiGithub,
    mdiLock,
    mdiAlertCircle,
    mdiSquareEditOutline,
    mdiTable,
    mdiViewList,
    mdiTelevisionGuide,
    mdiResponsive,
    mdiPalette,
    mdiVuejs,
} from "@mdi/js";
import { MenuAsideItem } from "../interfaces";

const menuAside: MenuAsideItem[] = [
    {
        href: "/dashboard",
        icon: mdiMonitor,
        label: "Dashboard",
    },
    {
        href: "/dashboard/tables",
        label: "Tables",
        icon: mdiTable,
    },
    {
        href: "/dashboard/forms",
        label: "Forms",
        icon: mdiSquareEditOutline,
    },
    {
        href: "/dashboard/ui",
        label: "UI",
        icon: mdiTelevisionGuide,
    },
    {
        href: "/dashboard/responsive",
        label: "Responsive",
        icon: mdiResponsive,
    },
    {
        href: "/",
        label: "Styles",
        icon: mdiPalette,
    },
    {
        href: "/dashboard/profile",
        label: "Profile",
        icon: mdiAccountCircle,
    },
    {
        href: "/login",
        label: "Login",
        icon: mdiLock,
    },
    {
        href: "/error",
        label: "Error",
        icon: mdiAlertCircle,
    },
    {
        label: "Dropdown",
        icon: mdiViewList,
        menu: [
        {
            label: "Item One",
        },
        {
            label: "Item Two",
        },
        ],
    },
    {
        href: "https://github.com/erc83/admin-one-react-tailwind-eric",
        label: "GitHub",
        icon: mdiGithub,
        target: "_blank",
    },
];

export default menuAside;