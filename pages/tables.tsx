import { mdiGithub, mdiMonitorCellphone, mdiTableBorder, mdiTableOff } from '@mdi/js'
import React, { ReactElement } from 'react'
import Head from 'next/head'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import BaseButton from '../components/BaseButton'
import LayoutAuthenticated from '../components/layouts/Authenticated'
import NotificationBar from '../components/NotificationBar'
import CardBox from '../components/CardBox'
import CardBoxComponentEmpty from '../components/CardBoxComponentEmpty'
import { appTitle } from '../src/config'
import TableSampleClients from '../components/TableSampleClients'

const TablesPage = () => {
    return (
        <>
            <Head>
                <title>Table - {appTitle}</title>
            </Head>
            <SectionMain>
                <SectionTitleLineWithButton icon={mdiTableBorder} title="Tables" main>
                    <BaseButton
                        href="https://github.com/justboil/admin-one-react-tailwind"
                        target="_blank"
                        icon={mdiGithub}
                        label="Star on Github"
                        color="contrast"
                        roundedFull
                        small
                    />
                </SectionTitleLineWithButton>

                <NotificationBar color="info" icon={mdiMonitorCellphone}>
                    <b>Responsive table.</b> Collapses on mobile
                </NotificationBar>

                <CardBox className="mb-6" has-table>
                    <TableSampleClients />
                </CardBox>

                <SectionTitleLineWithButton icon={mdiTableOff} title="Empty variation" />    
                <NotificationBar color='danger' icon={mdiTableOff}>
                    <b>Empty card.</b> When there&apos;s nothing to show
                </NotificationBar>


                <CardBox>
                    <CardBoxComponentEmpty /> 
                </CardBox>

            </SectionMain>
        </>    
    )
}

TablesPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default TablesPage;


