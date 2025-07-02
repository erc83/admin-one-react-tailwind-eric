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
        label: "Tablas",
        icon: mdiTable,
    },
    {
        href: "/dashboard/forms",
        label: "Formularios",
        icon: mdiSquareEditOutline,
    },
    {
        href: "/dashboard/ui",
        label: "UI",
        icon: mdiTelevisionGuide,
    },
    {
        href: "/dashboard/responsive",
        label: "Responsividad",
        icon: mdiResponsive,
    },
    {
        href: "/",
        label: "Estilos",
        icon: mdiPalette,
    },
    {
        href: "/dashboard/profile",
        label: "Perfil",
        icon: mdiAccountCircle,
    },
    {
        href: "/login",
        label: "Login",
        icon: mdiLock,
    },
    {
        href: "/error",
        label: "Pagina Error",
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