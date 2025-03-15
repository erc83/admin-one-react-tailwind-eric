"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Props = {
    onRouteChange: () => void
}


export function NavigationEvents({ onRouteChange }: Props ) {
    const pathname = usePathname();

    useEffect(() => {
        console.log(pathname);

    }, [onRouteChange, pathname]);

    return "...";
}