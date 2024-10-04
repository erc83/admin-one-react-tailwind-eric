import React, { ReactElement } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import LayoutAuthenticated from '../components/layouts/Authenticated'
import SectionTitle from '../components/SectionTitle'
import { appTitle } from '../src/config'
import SectionMain from '../components/SectionMain'


const ResponsivePage = () => {
    return (
        <>
            <Head>
                <title>Responsive - {appTitle} </title>
            </Head>

            <SectionTitle first>Mobile & Table</SectionTitle>
            <SectionMain>
                <div className="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden">
                    <Image 
                        src="https://static.justboil.me/templates/one/one-tailwind-vue-mobile.png" 
                        width={1920} 
                        height={960} 
                        className="block" 
                        alt= "Image Mobile & Table"
                    />
                </div>
            </SectionMain>

            <SectionTitle>Small laptop 1024px</SectionTitle>
            <SectionMain>
                <div className="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden">
                    <Image 
                        src="https://static.justboil.me/templates/one/one-tailwind-vue-1024.png" 
                        width={1920} 
                        height={960} 
                        className="block" 
                        alt="Image Small laptop 1024px"
                    />
                </div>
            </SectionMain>


        </>
    )
}

ResponsivePage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default ResponsivePage