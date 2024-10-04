import React, { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import Head from 'next/head'
import {
    mdiAccountMultiple,
    mdiCartOutline,
    mdiChartPie,
    mdiChartTimelineVariant,
    mdiGithub,
    mdiMonitorCellphone,
    mdiRead,
    mdiReload,
} from '@mdi/js'

import SectionMain from '../components/SectionMain'
import { useSampleClients, useSampleTransactions } from '../hooks/sampleData'
import BaseButton from '../components/BaseButton'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import CardBoxWidget from '../components/CardBoxWIdget'
import { Transaction, Client } from '../interfaces'
import CardBoxTransaction from '../components/CardBoxTransaction'
import CardBoxClient from '../components/CardBoxClient'
import SectionBannerStarOnGitHub from '../components/SectionBannerStarOnGitHub'
import { sampleChartData } from '../components/charts/config'

const Dashboard = () => {
    const { clients } = useSampleClients()
    const { transactions } = useSampleTransactions()

    const clientsListed = clients.slice(0, 4)

    const [charData, setChartData] = useState(sampleChartData())

    const fillChartData = (e: React.MouseEvent) => {
        e.preventDefault()

        setChartData(sampleChartData())
    }


    return (
        <>
            <Head>
                <title>DashBoard</title>
            </Head>
            <SectionMain>
                <SectionTitleLineWithButton icon={mdiChartTimelineVariant} title="Overview" main>
                    <BaseButton 
                        href="https://github.com/justboil/admin-one-vue-tailwind"
                        target="_blank"
                        icon={mdiGithub}
                        label="Start on GitHub"
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

            </SectionMain>
        </>
    )
}

export default Dashboard