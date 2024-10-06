import {
    mdiAlert,
    mdiAlertCircle,
    mdiCheckCircle,
    mdiContrastCircle,
    mdiInformation,
    mdiOpenInNew,
    mdiReload,
    mdiTrendingUp,
} from '@mdi/js'
import Head from 'next/head'
import { ReactElement } from 'react'
import LayoutAuthenticated from '../components/layouts/Authenticated'
import SectionTitle from '../components/SectionTitle'
import { appTitle } from '../src/config'
import { useAppDispatch } from '../src/stores/hooks'
import BaseButton from '../components/BaseButton'
import BaseButtons from '../components/BaseButtons'
import SectionMain from '../components/SectionMain'
import NotificationBar from '../components/NotificationBar'
import CardBox from '../components/CardBox'
import { setDarkMode } from '../src/stores/styleSlice'
import BaseDivider from '../components/BaseDivider'
import PillTag from '../components/PillTag'

const UiPage = () => {
    
    const dispatch = useAppDispatch()

    const NotificationSampleButton = <BaseButton color="white" label="Button" roundedFull small />

    const CardSamplesFooter = (
        <BaseButtons>
            <BaseButton label="Confirm" color="info" isGrouped />
            <BaseButton label="Cancel" color="info" isGrouped outline/>
        </BaseButtons>
    )


    return (
        <>
            <Head>
                <title>UI - {appTitle}</title>
            </Head>

            <SectionTitle first>Dark mode</SectionTitle>

            <SectionMain>
                <CardBox className="md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto">
                    <div className="text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400">
                        <BaseButton 
                            label="toggle"
                            color="contrast"
                            onClick={() => dispatch(setDarkMode(null))}
                        />
                    </div>
                </CardBox>
            </SectionMain>

            <SectionTitle first>Notifications</SectionTitle>
            <SectionMain>
                <NotificationBar color="info" icon={mdiInformation} button={NotificationSampleButton}>
                    <b>Info State</b>. NotificationBar
                </NotificationBar>

                <NotificationBar color="success" icon={mdiCheckCircle} button={NotificationSampleButton}>
                    <b>Success State</b>. NotificationBar
                </NotificationBar>

                <NotificationBar color="warning" icon={mdiAlert} button={NotificationSampleButton} >
                    <b>Warning State</b>. NotificationBar
                </NotificationBar>
                
                <NotificationBar color="danger" icon={mdiAlertCircle} button={NotificationSampleButton} >
                    <b>Danger State</b>. NotificationBar
                </NotificationBar>
                
                <NotificationBar color="contrast" icon={mdiContrastCircle} >
                    <b>Contrast</b>. NotificationBar
                </NotificationBar>

                <SectionTitle>Buttons</SectionTitle>
                <SectionMain>
                    <CardBox>
                        <BaseButtons>
                            <BaseButton color="lightDark" label="Button" isGrouped/>
                            <BaseButton color="contrast" label="Button" isGrouped/>
                            <BaseButton color="info" label="Button" isGrouped/>
                            <BaseButton color="success" label="Button" isGrouped/>
                            <BaseButton color="warning" label="Button" isGrouped/>
                            <BaseButton color="danger" label="Button" isGrouped/>
                        </BaseButtons>

                        <BaseDivider />

                        <BaseButtons>
                            <BaseButton color="lightDark" label="Button" icon={mdiOpenInNew} isGrouped/>
                            <BaseButton color="contrast" label="Button" icon={mdiOpenInNew} isGrouped/>
                            <BaseButton color="info" label="Button" icon={mdiOpenInNew} isGrouped/>
                            <BaseButton color="success" label="Button" icon={mdiOpenInNew} isGrouped/>
                            <BaseButton color="warning" label="Button" icon={mdiOpenInNew} isGrouped/>
                            <BaseButton color="danger" label="Button" icon={mdiOpenInNew} isGrouped/>
                        </BaseButtons>

                        <BaseDivider />

                        <BaseButtons>
                            <BaseButton color="lightDark" icon={mdiOpenInNew} isGrouped/>
                            <BaseButton color="contrast" icon={mdiOpenInNew} isGrouped/>
                            <BaseButton color="info" icon={mdiOpenInNew} isGrouped/>
                            <BaseButton color="success" icon={mdiOpenInNew} isGrouped/>
                            <BaseButton color="warning" icon={mdiOpenInNew} isGrouped/>
                            <BaseButton color="danger" icon={mdiOpenInNew} isGrouped/>
                        </BaseButtons>

                    </CardBox>
                </SectionMain>

                <SectionTitle>Pills</SectionTitle>

                <SectionMain>
                    <CardBox>
                        <PillTag  color="contrast" label="Contrast" icon={mdiTrendingUp} />
                        <PillTag  color="info" label="Info" icon={mdiTrendingUp} />
                        <PillTag  color="success" label="Success" icon={mdiTrendingUp} />
                        <PillTag  color="warning" label="Warning" icon={mdiTrendingUp} />
                        <PillTag  color="danger" label="Danger" icon={mdiTrendingUp} />
                    </CardBox>
                </SectionMain>

            </SectionMain>
        </>
    )
}

UiPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default UiPage