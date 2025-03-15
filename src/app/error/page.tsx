import React from "react"
import BaseButton from '../components/BaseButton'
import CardBox from '../components/CardBox'
import SectionFullScreen from '../components/Section/SectionFullScreen'
import { getPageTitle } from '../config'
import { Metadata } from 'next'

//import type { ReactElement } from 'react'
//import Head from 'next/head'
//import LayoutGuest from '../layouts/Guest'

export const metadata: Metadata = {
  title: getPageTitle("Error"),
}

export default function ErrorPage() {
  return (
      <SectionFullScreen bg="pinkRed">
        <CardBox
          className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"
          footer={<BaseButton href="/dashboard" label="Done" color="danger" />}
        >
          <div className="space-y-3">
            <h1 className="text-2xl">Unhandled exception</h1>

            <p>An Error Occurred</p>
          </div>
        </CardBox>
      </SectionFullScreen>
  )
}
