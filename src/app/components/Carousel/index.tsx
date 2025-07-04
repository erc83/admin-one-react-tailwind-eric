"use client"
import React, { useState } from 'react'
import { mdiArrowCollapseRight, mdiArrowCollapseLeft } from '@mdi/js'
import BaseButton from '../BaseButton'
import Image from 'next/image'

type Props = {
  slides: string[]
}

const Carousel = ({ slides }: Props) => {
  const [current, setCurrent] = useState(0)

  const previousSlice = () => {
    if (current === 0) setCurrent(slides.length - 1)
    else setCurrent(current - 1)
  }

  const nextSlice = () => {
    if (current === slides.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((image, index) => (
          <Image key={index} src={image} alt={'Images Carrousel'} width={1500} height={800} />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-5 text-3xl">
        <BaseButton icon={mdiArrowCollapseLeft} roundedFull onClick={previousSlice} />
        <BaseButton icon={mdiArrowCollapseRight} roundedFull onClick={nextSlice} />
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              key={'circle' + i}
              /* className="rounded-full w-5 h-5 bg-white" */
              className={`rounded-full w-5 h-5 cursor-pointer ${
                i == current ? 'bg-white' : 'bg-gray-500'
              } 
                                `}
              onClick={() => setCurrent(i)}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
