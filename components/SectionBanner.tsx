import React, { ReactNode } from "react";

type Props = {
    className?: string
    children: ReactNode
}

const SectionBanner = ({ className = '', children }) => {
    return(
        <div className={`${className} rounded-2x1 py-12 px-6 lg:px-12 text-center`}>{children}</div>
    )
}

export default SectionBanner