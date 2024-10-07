import React, { ReactNode, useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { mdiForwardburger, mdiBackburger, mdiMenu } from '@mdi/js'
import menuAside from '../../src/menuAside'
import menuNavBar from '../../src/menuNavBar'
import BaseIcon from '../BaseIcon'
import NavBar from '../NavBar'
import NavBarItemPlain from '../NavBarItemPlain'
import AsideMenu from '../AsideMenu'
import FooterBar from '../FooterBar'
import { setUser } from '../../src/stores/mainSlice'
/* import GlobalStyle from '../globals/Style'
import GlobalDarkMode from '../globals/DarkMode' */
import { useAppDispatch, useAppSelector } from '../../src/stores/hooks'
import FormField from '../FormField'
import { Field, Form, Formik } from 'formik'

type Props = {
  children?: ReactNode,
}


export default function LayoutAuthenticated({ children }: Props ) {
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(
        setUser({
          name: 'Eric EEMM',
          email: 'eric@example.com',
          avatar:
            'https://res.cloudinary.com/dhavhzmvy/image/upload/v1728053925/template-next-tailwind/avatar_eric_q1rfvc.png',
        })
      )
  })
  
  const darkMode = useAppSelector((state) => state.style.darkMode)

  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false)
  const [isAsideLgActive, setIsAsideLgActive] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const handleRouterChangeStart = () => {
      setIsAsideMobileExpanded(false)
      setIsAsideLgActive(false)
    }

    router.events.on('routeChangeStart', handleRouterChangeStart)

    return () => {
      router.events.off('routeChangeStart', handleRouterChangeStart)
    }

  }, [router.events, dispatch])


  const layoutAsidePadding = 'xl:pl-60'

  return (
    <>
      <div className={`${darkMode ? 'dark' : ''} overflow-hidden lg:overflow-visible`}>
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
              <NavBarItemPlain 
                display="hidden lg:flex xl:hidden"
                onClick={() => setIsAsideLgActive}  
              >
                <BaseIcon path={mdiMenu} size="24" />
              </NavBarItemPlain>

              <NavBarItemPlain>
                <Formik
                  initialValues={{
                    search:'',
                  }}
                  onSubmit={(values) => alert(JSON.stringify( values, null, 2 ))}
                >
                  <Form>
                    <FormField>
                      <Field name="search" placeholder="Search" />
                    </FormField>
                  </Form>
                </Formik>
              </NavBarItemPlain>
            </NavBar>
            <AsideMenu
              isAsideMobileExpanded={isAsideMobileExpanded}
              isAsideLgActive={isAsideLgActive}
              menu={menuAside}
              onAsideLgClose={() => setIsAsideLgActive( false )}
            />
          {children}
          <FooterBar>
            Code on{` `}
            <a
              href="https://github.com/justboil/admin-one-react-tailwind"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              GitHub
            </a>
          </FooterBar>
        </div>
      </div>
    </>
  )
}