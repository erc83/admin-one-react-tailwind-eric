import React, { ReactNode } from 'react'
//import Image from 'next/image'

type Props = {
  username: string
  api?: string
  className?: string 
  children?: ReactNode
}


export default function UserAvatar({ username, api='avataaars', className='', children }: Props) {
  const avatarImage = `https://api.dicebear.com/9.x/${api}/svg?seed=${username.replace(/[^a-z0-9]+/gi, '-')}`

  return (
    <div className={className}>
      <img
        src={avatarImage}
        alt={username}
        width={24}
        height={24}
        className={`rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800`}
      />
      { children }
    </div>
  )
}