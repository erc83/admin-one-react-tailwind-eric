import React, { ReactElement } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionTitle from '../components/Section/SectionTitle'
import { getPageTitle } from '../config'
import SectionMain from '../components/Section/SectionMain'


const ResponsivePage = () => {
    return (
        <>
            <Head>
                <title>{getPageTitle('Responsive')}</title>
            </Head>

            <SectionTitle first>Mobile & Table</SectionTitle>
            <SectionMain>
                <div className="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden">
                    <Image 
                        src="https://static.justboil.me/templates/one/one-tailwind-vue-mobile.png" 
                        width={1920} 
                        height={960} 
                        className="block" 
                        alt= {`Image Mobile & Table - ${getPageTitle('Responsive')}`}
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
                        alt={`Image Small laptop 1024px - ${getPageTitle('Responsive')}`}
                    />
                </div>
            </SectionMain>
            
            <SectionTitle>Laptop & desktop</SectionTitle>
            <SectionMain>
                <div className="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden">
                    <Image 
                        src="https://static.justboil.me/templates/one/one-tailwind-vue-widescreen.png" 
                        width={1920} 
                        height={960} 
                        className="block" 
                        alt={`Image Laptop & Desktop - ${getPageTitle('Responsive')}`}
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