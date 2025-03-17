import React from 'react'
import { MenuNavBarItem } from '../../interfaces'
import NavBarItem from './item'

type Props = {
  menu: MenuNavBarItem[]
  onRouteChange: () => void
}

export default function NavBarMenuList({ menu, ...props }: Props) {
  return (
    <>
      {menu.map((item, index) => (
        <NavBarItem key={index} item={item}  onRouteChange={props.onRouteChange}/>
      ))}
    </>
  )
}
