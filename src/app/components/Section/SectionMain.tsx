import React, { ReactNode } from 'react'
import { containerMaxW } from '../../config/config'

type Props = {
  children: ReactNode
}

export default function SectionMain({ children }: Props) {
  return <section className={`p-6 ${containerMaxW}`}>{children}</section>
}
