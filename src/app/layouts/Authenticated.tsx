"use client"

import React, { ReactNode, useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { mdiForwardburger, mdiBackburger, mdiMenu } from '@mdi/js'
import menuAside from '../lib/menuAside'
import menuNavBar from '../lib/menuNavBar'
import BaseIcon from '../components/Icon/BaseIcon'
import NavBar from '../components/NavBar'
import NavBarItemPlain from '../components/NavBar/item/Plain'
import AsideMenu from '../components/AsideMenu'
import FormField from '../components/FormField'
import { Field, Form, Formik } from 'formik'

type Props = {
  children?: ReactNode
}

export default function LayoutAuthenticated({ children }: Props) {
  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false)
  const [isAsideLgActive, setIsAsideLgActive] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const handleRouterChangeStart = () => {
      setIsAsideMobileExpanded(false)
      setIsAsideLgActive(false)
    }

    const handlePopState = () => {
      handleRouterChangeStart()
    }

    window.addEventListener('popstate', handlePopState)
    

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const layoutAsidePadding = 'xl:pl-60'

  return (
    <>
      <div className={`overflow-hidden lg:overflow-visible`}>
        <div
          className={`${layoutAsidePadding} ${
            isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''
          } pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`}
        >
          <NavBar
            menu={menuNavBar}
            className={`${layoutAsidePadding} ${isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''}`}
          >
            <NavBarItemPlain
              display="flex lg:hidden"
              onClick={() => setIsAsideMobileExpanded(!isAsideMobileExpanded)}
            >
              <BaseIcon path={isAsideMobileExpanded ? mdiBackburger : mdiForwardburger} size="24" />
            </NavBarItemPlain>
            <NavBarItemPlain display="hidden lg:flex xl:hidden" onClick={() => setIsAsideLgActive}>
              <BaseIcon path={mdiMenu} size="24" />
            </NavBarItemPlain>

            <NavBarItemPlain>
              <Formik
                initialValues={{
                  search: '',
                }}
                onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
              >
                <Form>
                  <FormField isBorderless isTransparent>
                    {({ className }) => (
                      <Field name="search" placeholder="Buscar" className={className} />
                    )}
                  </FormField>
                </Form>
              </Formik>
            </NavBarItemPlain>
          </NavBar>
          <AsideMenu
            isAsideMobileExpanded={isAsideMobileExpanded}
            isAsideLgActive={isAsideLgActive}
            menu={menuAside}
            onAsideLgClose={() => setIsAsideLgActive(false)}
            onRouteChange={() => {}}
          />
          {children}
          
        </div>
      </div>
    </>
  )
}
