import React, { ReactNode } from "react";
import LayoutAuthenticated from "../../layouts/Authenticated";

type Props = {
    children: ReactNode
}


export default function TablesLayout({children}: Props ) {
    return <LayoutAuthenticated>{children}</LayoutAuthenticated>
}

