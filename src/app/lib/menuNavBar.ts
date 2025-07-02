import {
    mdiMenu,
    mdiClockOutline,
    mdiCloud,
    mdiCrop,
    mdiAccount,
    mdiCogOutline,
    mdiEmail,
    mdiLogout,
    mdiThemeLightDark,
    mdiGithub,
    mdiVuejs,
} from "@mdi/js";
import { MenuNavBarItem } from "../interfaces";

const menuNavBar: MenuNavBarItem[] = [
    {
        icon: mdiMenu,
        label: "Menu Ejemplo",
        menu: [
            {
                icon: mdiClockOutline,
                label: "Item Uno",
            },
            {
                icon: mdiCloud,
                label: "Item Dos",
            },
            {
                isDivider: true,
            },
            {
                icon: mdiCrop,
                label: "Ultimo Item",
            },
        ],
    },
    {
        isCurrentUser: true,
        menu: [
            {
                icon: mdiAccount,
                label: "Mi Perfil",
                href: "/dashboard/profile",
            },
            {
                icon: mdiCogOutline,
                label: "Configuraciones",
            },
            {
                icon: mdiEmail,
                label: "Mensajes",
            },
            {
                isDivider: true,
            },
            {
                icon: mdiLogout,
                label: "Finalizar sesión",
                isLogout: true,
            },
        ],
    },
    {
        icon: mdiThemeLightDark,
        label: "Light/Dark",
        isDesktopNoLabel: true,
        isToggleLightDark: true,
    },
    {
        icon: mdiGithub,
        label: "GitHub",
        isDesktopNoLabel: true,
        href: "https://github.com/erc83/admin-one-react-tailwind-eric",
        target: "_blank",
    },
    {
        icon: mdiLogout,
        label: "Log out",
        isDesktopNoLabel: true,
        href: "https://eric-espinoza-mansilla.netlify.app",
        isLogout: true,
    },
];

export default menuNavBar;
