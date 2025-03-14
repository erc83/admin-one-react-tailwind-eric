import React, { useState } from 'react'
import type { ReactElement } from 'react'
import Head from 'next/head'
import {
    mdiAccountMultiple,
    mdiCartOutline,
    mdiChartPie,
    mdiChartTimelineVariant,
    mdiGithub,
    mdiMonitorCellphone,
    mdiReload,
} from '@mdi/js'

import SectionMain from '../components/Section/SectionMain'
import { useSampleClients, useSampleTransactions } from '../hooks/sampleData'
import BaseButton from '../components/BaseButton'
import SectionTitleLineWithButton from '../components/Section/SectionTitleLineWithButton'
import CardBoxWidget from '../components/CardBox/Widget'
import { Transaction, Client } from '../interfaces'
import CardBoxTransaction from '../components/CardBox/Transaction'
import CardBoxClient from '../components/CardBox/Client'
import SectionBannerStarOnGitHub from '../components/Section/Banner/StarOnGitHub'
import { sampleChartData } from '../components/ChartLineSample/config'
import CardBox from '../components/CardBox'
import ChartLineSample from '../components/ChartLineSample'
import NotificationBar from '../components/NotificationBar'
import TableSampleClients from '../components/Table/SampleClients'
import LayoutAuthenticated from '../layouts/Authenticated'
import { getPageTitle } from '../config'
import Carousel from '../components/Carousel'

const Dashboard = () => {
    const { clients } = useSampleClients()
    const { transactions } = useSampleTransactions()

    const clientsListed = clients.slice(0, 4)

    const [chartData, setChartData] = useState(sampleChartData())

    const fillChartData = (e: React.MouseEvent) => {
        e.preventDefault()

        setChartData(sampleChartData())
    }

    const slides = [
        "https://plus.unsplash.com/premium_photo-1682091872078-46c5ed6a006d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1666432045848-3fdbb2c74531?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1635792105843-143927b06230?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]


    return (
        <>
            <Head>
                <title>{getPageTitle('Dashboard')}</title>
            </Head>
            <SectionMain>
                <SectionTitleLineWithButton icon={mdiChartTimelineVariant} title="Overview" main>
                    <BaseButton 
                        href="https://github.com/justboil/admin-one-react-tailwind"
                        target="_blank"
                        icon={mdiGithub}
                        label="Star on GitHub"
                        color="contrast"
                        roundedFull
                        small
                    />
                </SectionTitleLineWithButton>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
                    <CardBoxWidget
                        trendLabel="12%"
                        trendType="up"
                        trendColor="success"
                        icon={mdiAccountMultiple}
                        iconColor="success"
                        number={512}
                        label="Clients"
                    />
                    <CardBoxWidget
                        trendLabel="16%"
                        trendType="down"
                        trendColor="danger"
                        icon={mdiCartOutline}
                        iconColor="info"
                        number={7770}
                        numberPrefix="$"
                        label="Sales"
                    />
                    <CardBoxWidget
                        trendLabel="Overflow"
                        trendType="warning"
                        trendColor="warning"
                        icon={mdiChartTimelineVariant}
                        iconColor="danger"
                        number={256}
                        numberSuffix="%"
                        label="Performance"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div className="flex flex-col justify-between">
                        {
                            transactions.map((transaction: Transaction)=> (
                                <CardBoxTransaction key={transaction.id} transaction={transaction} />
                            ))
                        }
                    </div>
                    <div className="flex flex-col justity-between">
                        {
                            clientsListed.map((client: Client) =>(
                                <CardBoxClient key={client.id} client={client} />
                            ))
                        }
                    </div>        
                </div>

                <div className="my-6">
                    <SectionBannerStarOnGitHub  />
                </div>

                <SectionTitleLineWithButton icon={mdiChartPie} title="Trends overviews">
                    <BaseButton icon={mdiReload} color="whiteDark" onClick={fillChartData} />
                </SectionTitleLineWithButton>

                <CardBox className="mb-6">{chartData && <ChartLineSample data={chartData}  />} </CardBox>
                
                <SectionTitleLineWithButton icon={mdiAccountMultiple} title="Clients" />

                <NotificationBar color='info' icon={mdiMonitorCellphone}>
                    <b>Responsive table.</b> Collapses on mobile
                </NotificationBar>

                <CardBox hasTable>
                    <TableSampleClients clients={clients}/>
                </CardBox>

                
            </SectionMain>
            
            <div className="w-[80%] m-auto pt-6">
                <Carousel slides={slides} />
            </div>

            
        </>
    )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}


export default Dashboard