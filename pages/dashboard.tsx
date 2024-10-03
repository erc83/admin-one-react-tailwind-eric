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

const Dashboard = () => {

    const { clients } = useSampleClients()
    const { transactions } = useSampleTransactions()

    const clientsListed = clients.slice(0, 4)



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
            </SectionMain>
        </>
    )


}






export default Dashboard