import React from 'react'
import { mdiLogout, mdiClose } from '@mdi/js'
import BaseIcon from '../Icon/BaseIcon'
import AsideMenuItem from './Item'
import AsideMenuList from './List'
import { MenuAsideItem } from '../../interfaces'
import { useAppSelector } from '../../stores/hooks'

type Props = {
  menu: MenuAsideItem[]
  className?: string
  onAsideLgCloseClick: () => void
  onRouteChange: () => void
}

export default function AsideMenuLayer({ menu, className = '', ...props }: Props) {
  const darkMode = useAppSelector((state) => state.darkMode.isEnable)

  const logoutItem: MenuAsideItem = {
    label: 'Logout',
    icon: mdiLogout,
    color: 'info',
    isLogout: true,
    href: 'https://eric-espinoza-mansilla.netlify.app'
  }

  const handleAsideLgCloseClick = (e: React.MouseEvent) => {
    e.preventDefault()
    props.onAsideLgCloseClick()
  }

  return (
    <aside
      className={`${className} zzz lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden`}
    >
      <div
        className={`aside lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900`}
      >
        <div
          className={`aside-brand flex flex-row h-14 items-center justify-between dark:bg-slate-900`}
        >
          <div className="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
            <b className="font-black">One</b>
          </div>
          <button
            className="hidden lg:inline-block xl:hidden p-3"
            onClick={handleAsideLgCloseClick}
          >
            <BaseIcon path={mdiClose} />
          </button>
        </div>
        <div
          className={`flex-1 overflow-y-auto overflow-x-hidden ${
            darkMode ? 'aside-scrollbars-[slate]' : 'aside-scrollbars'
          }`}
        >
          <AsideMenuList menu={menu} onRouteChange={props.onRouteChange} />
        </div>
        <ul>
          <AsideMenuItem item={logoutItem} onRouteChange={props.onRouteChange}/>
        </ul>
      </div>
    </aside>
  )
}
