"use client"

import { mdiGithub, mdiMonitorCellphone, mdiTableBorder, mdiTableOff } from '@mdi/js'
import React, { ReactElement } from 'react'
//import Head from 'next/head'
import SectionMain from '../../components/Section/SectionMain'
import SectionTitleLineWithButton from '../../components/Section/SectionTitleLineWithButton'
import BaseButton from '../../components/BaseButton'
//import LayoutAuthenticated from '../../layouts/Authenticated'
import NotificationBar from '../../components/NotificationBar'
import CardBox from '../../components/CardBox'
import CardBoxComponentEmpty from '../../components/CardBox/Component/Empty'
import { getPageTitle } from '../../config/config'
import TableSampleClients from '../../components/Table/SampleClients'
import { useSampleClients } from '../../hooks/sampleData'
//import { Metadata } from "next"


const TablesPage = () => {
  const { clients } = useSampleClients()

  return (
    <>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiTableBorder} title="Tablas" main>
          <BaseButton
            href="https://github.com/erc83/admin-one-react-tailwind-eric"
            target="_blank"
            icon={mdiGithub}
            label="Star on Github"
            color="contrast"
            roundedFull
            small
          />
        </SectionTitleLineWithButton>

        <NotificationBar color="info" icon={mdiMonitorCellphone}>
          <b>Tabla Responsiva.</b> Collapse en móvil
        </NotificationBar>

        <CardBox className="mb-6" hasTable>
          <TableSampleClients clients={clients} />
        </CardBox>

        <SectionTitleLineWithButton icon={mdiTableOff} title="Variación vacía" />
        <NotificationBar color="danger" icon={mdiTableOff}>
          <b>Tarjeta vacía.</b> Cuando no hay nada que mostrar.
        </NotificationBar>

        <CardBox>
          <CardBoxComponentEmpty />
        </CardBox>
      </SectionMain>
    </>
  )
}

/* TablesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
} */

export default TablesPage
