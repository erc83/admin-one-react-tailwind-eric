import React, { ReactNode } from 'react'
import { containerMaxW } from '../config/config'
//import JustboilLogo from './justboilLogo'
import ImageLogo from './imageLogo'

type Props = {
  children: ReactNode
}

export default function FooterBar({ children }: Props) {
  const year = new Date().getFullYear()

  return (
    <footer className={`py-2 px-6 ${containerMaxW}`}>
      <div className="block md:flex items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <b>
            &copy;{year},{` `}
            <a href="http://localhost:3000" rel="noreferrer" target="_blank">
              Eric Espinoza
            </a>
            .
          </b>
          {` `}
          {children}
        </div>
        <div className="md:py-2">
          <a href="http://localhost:3000" rel="noreferrer" target="_blank">
            <ImageLogo className="w-auto h-8 md:h-6 mx-auto" />
          </a>
        </div>
      </div>
    </footer>
  )
}
