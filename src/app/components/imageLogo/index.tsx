import React from 'react'
// import justboilLogoPath from './logoPath'
import Image from 'next/image'

type Props = {
    className?: string
}

export default function ImageLogo({ className }: Props) {
    return (
        <Image
            src="/images/logo-portafolio.png"    
            alt="Logo Portafolio"
            width={250}
            height={100}
            className={className}
        />
    )
}
