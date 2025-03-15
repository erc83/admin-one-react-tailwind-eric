import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import LayoutGuest from '../layouts/Guest'
import SectionMain from '../components/Section/SectionMain'
//import { StyleKey } from '../interfaces'
import { gradientBgPurplePink } from '../colors'
import { useAppDispatch } from '../stores/hooks'
import { setDarkMode } from '../stores/darkModeSlice'
import { getPageTitle } from '../config'

const StyleSelect = () => {
  const dispatch = useAppDispatch()

  dispatch(setDarkMode(false))

  const styles = ['white', 'basic']

  const router = useRouter()

  const handleStylePick = (e: React.MouseEvent, style: string) => {
    e.preventDefault()

    document.documentElement.classList.forEach((token) => {
      if (token.indexOf('style') === 0) {
        document.documentElement.classList.replace(token, `style-${style}`)
      }
    })

    router.push('/dashboard')
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Pick a Style')}</title>
      </Head>
      <div className={`flex min-h-screen items-center justify-center ${gradientBgPurplePink}`}>
        <SectionMain>
          <h1 className="text-4xl md:text-5xl text-center text-white font-bold mt-12 mb-3 lg:mt-0">
            Pick a style&hellip;
          </h1>
          <h2 className="text-xl md:text-xl text-center text-white mb-12">
            Style switching with a single{' '}
            <code className="px-1.5 py-0.5 rounded bg-white bg-opacity-20">action()</code>
          </h2>
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 px-6 max-w-6xl mx-auto">
            {styles.map((style) => (
              <CardBox key={style} className="cursor-pointer bg-gray-50" isHoverable>
                <div>
                  <Image
                    src={`https://static.justboil.me/templates/one/small/${style}-v3.png`}
                    width={1280}
                    height={720}
                    onClick={(e) => handleStylePick(e, style)}
                    alt={style}
                  />
                </div>
              </CardBox>
            ))}
          </div>
        </SectionMain>
      </div>
    </>
  )
}

StyleSelect.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}

export default StyleSelect
