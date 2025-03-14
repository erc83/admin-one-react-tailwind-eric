import {
    mdiAlert,
    mdiAlertCircle,
    mdiCheckCircle,
    mdiContrastCircle,
    mdiClose,
    mdiInformation,
    mdiOpenInNew,
    mdiReload,
    mdiTrendingUp,
} from '@mdi/js'
import Head from 'next/head'
import { useState } from 'react'
import type { ReactElement } from 'react'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionTitle from '../components/Section/SectionTitle'
import { getPageTitle } from '../config'
import { useAppDispatch } from '../stores/hooks'
import BaseButton from '../components/BaseButton'
import BaseButtons from '../components/BaseButtons'
import SectionMain from '../components/Section/SectionMain'
import NotificationBar from '../components/NotificationBar'
import CardBox from '../components/CardBox'
import { setDarkMode } from '../stores/darkModeSlice'
import BaseDivider from '../components/BaseDivider'
import PillTag from '../components/PillTag'
import CardBoxComponentTitle from '../components/CardBox/Component/Title'
import SectionTitleLineWithButton from '../components/Section/SectionTitleLineWithButton'
import CardBoxComponentEmpty from '../components/CardBox/Component/Empty'
import { Field, Formik } from 'formik'
import FormCheckRadio from '../components/Form/CheckRadio'
import FormCheckRadioGroup from '../components/Form/CheckRadioGroup'
import CardBoxModal from '../components/CardBox/Modal'

const UiPage = () => {
    
    const dispatch = useAppDispatch()
    
    const [isModalInfoActive, setIsModalInfoActive] = useState(false)
    const [isModalDangerActive, setIsModalDangerActive] = useState(false)
    const [isModalSuccessActive, setIsModalSuccessActive] = useState(false)

    const CardSamplesFooter = (
        <BaseButtons>
            <BaseButton label="Confirm" color="info"  isGrouped/>
            <BaseButton label="Cancel" color="info" outline isGrouped/>
        </BaseButtons>
    )

    const modalSampleCardClassName = 'cursor-pointer md:w-7/12 lg:w5/12 shadow-2xl md:mx-auto'

    const modalSampleContents = (
        <>
            <p>Lorem ipsum dolor sit amet consectetur</p> <b>adipisicing elit.</b>
            <p>This is sample modal in Ui Page</p>
        </>
    )

    const modalFooterInfo = (
        <BaseButtons>
            <BaseButton label="Confirm" color="info" isGrouped />
            <BaseButton label="Cancel" color="info" outline isGrouped />
        </BaseButtons>
    )

    const modalFooterDanger = (
        <BaseButtons>
            <BaseButton label="Done" color="danger" isGrouped />
        </BaseButtons>
    )

    const modalFooterSuccess = (
        <BaseButtons>
            <BaseButton label="Done" color="success" isGrouped />
        </BaseButtons>
    )

    const handleModalAction = () => {
        setIsModalInfoActive(false)
        setIsModalDangerActive(false)
        setIsModalSuccessActive(false)
    }

    return (
        <>
            <Head>
                <title>{getPageTitle('Ui')}</title>
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

            <SectionTitle>Modal examples</SectionTitle>

            <SectionMain>
                <div className="space-y-12">
                    <CardBox
                        className={modalSampleCardClassName}
                        footer={modalFooterInfo}
                        onClick={() => setIsModalInfoActive(true)}
                        isHoverable
                    >
                        <CardBoxComponentTitle title="Please confirm action">
                            <BaseButton icon={mdiClose} color="whiteDark" small roundedFull />
                        </CardBoxComponentTitle>
                        
                        <div className="space-y-3">
                            <p>Click to see in action</p>
                        </div>
                    </CardBox>

                    <CardBox
                        className={modalSampleCardClassName}
                        footer={modalFooterDanger}
                        onClick={() => setIsModalDangerActive(true)}
                        isHoverable
                    >
                        <CardBoxComponentTitle title="Unhandled exception" />
                            <div className="space-y-3">
                        <p>Click to see in action</p>
                        </div>
                    </CardBox>

                    <CardBox
                        className={modalSampleCardClassName}
                        footer={modalFooterSuccess}
                        onClick={() => setIsModalSuccessActive(true)}
                        isHoverable
                    >
                        <CardBoxComponentTitle title="Success" />
                        <div className="space-y-3">
                        <p>Click to see in action</p>
                        </div>
                    </CardBox>
                </div>
            </SectionMain>

            {/* Window modal */}
            <CardBoxModal
                title="Please confirm action"
                buttonColor="info"
                buttonLabel="Confirm"
                isActive={isModalInfoActive}
                onConfirm={handleModalAction}
                onCancel={handleModalAction}
            >
                {modalSampleContents}
            </CardBoxModal>

            <CardBoxModal
                title="Unhandled exception"
                buttonColor="danger"
                buttonLabel="error"
                isActive={isModalDangerActive}
                onConfirm={handleModalAction}
                onCancel={handleModalAction}
            >
                {modalSampleContents}
            </CardBoxModal>

            <CardBoxModal
                title="Success"
                buttonColor="success"
                buttonLabel="Done"
                isActive={isModalSuccessActive}
                onConfirm={handleModalAction}
                onCancel={handleModalAction}
            >
                {modalSampleContents}
            </CardBoxModal>

            <Formik initialValues={{ outline: false}} onSubmit={() => null}>
                {
                    ({ values }) => (
                        <>
                            <SectionTitle custom>
                                <h1 className="text-2xl text-gray-500 dark:text-slate-400">Notifications</h1>
                                <div className="flex items-center justify-center mt-6">
                                    <FormCheckRadio type="switch" label="Outline">
                                        <Field type="checkbox" name="outline"/>
                                    </FormCheckRadio>
                                </div>
                            </SectionTitle>
                            <SectionMain>
                                <NotificationBar color="info" icon={mdiInformation} 
                                    button={
                                        <BaseButton 
                                            color={values.outline ? 'info' : 'white'}
                                            label="Button"
                                            roundedFull
                                            small
                                            outline={values.outline}
                                        />
                                    }
                                    outline={values.outline}
                                >
                                    <b>Info State</b>. NotificationBar
                                </NotificationBar>

                                <NotificationBar color="success" icon={mdiCheckCircle} 
                                    button={
                                        <BaseButton 
                                            color={values.outline ? 'success' : 'white'}
                                            label="Button"
                                            roundedFull
                                            small
                                            outline={values.outline}
                                        />
                                    }
                                    outline={values.outline}
                                >
                                    <b>Success State</b>. NotificationBar
                                </NotificationBar>

                                <NotificationBar color="warning" icon={mdiAlert} 
                                    button={
                                        <BaseButton
                                            color={values.outline ? 'warning' : 'white'}
                                            label="Button"
                                            roundedFull
                                            small
                                            outline={values.outline}
                                        />
                                    } 
                                    outline={values.outline}
                                >
                                    <b>Warning State</b>. NotificationBar
                                </NotificationBar>
                                
                                <NotificationBar color="danger" icon={mdiAlertCircle} 
                                    button={
                                        <BaseButton
                                            color={values.outline ? 'danger' : 'white'}
                                            label="Button"
                                            roundedFull
                                            small
                                            outline={values.outline}
                                        />
                                    } 
                                    outline={values.outline}
                                >
                                    <b>Danger State</b>. NotificationBar
                                </NotificationBar>
                                
                                <NotificationBar color="contrast" icon={mdiContrastCircle} outline={values.outline}>
                                    <b>Contrast</b>. NotificationBar
                                </NotificationBar>
                            </SectionMain>
                        </>
                    )
                }


                
            </Formik>

                <SectionTitle>Buttons</SectionTitle>
                <SectionMain>
                    <CardBox>
                        <Formik 
                            initialValues={{ outline: false, small: false, rounded: false, disabled: false}}
                            onSubmit={() => null}
                        >
                            {
                                (({ values }) => (
                                    <>

                                        <FormCheckRadioGroup>
                                            <FormCheckRadio type="switch" label="Outline" isGrouped>
                                                <Field type="checkbox" name="outline" />
                                            </FormCheckRadio>
                                            <FormCheckRadio type="switch" label="Small" isGrouped>
                                                <Field type="checkbox" name="small" />
                                            </FormCheckRadio>
                                            <FormCheckRadio type="switch" label="Rounded" isGrouped>
                                                <Field type="checkbox" name="rounded" />
                                            </FormCheckRadio>
                                            <FormCheckRadio type="switch" label="Disabled" isGrouped>
                                                <Field type="checkbox" name="disabled" />
                                            </FormCheckRadio>
                                        </FormCheckRadioGroup>

                                        <BaseDivider />

                                        <BaseButtons>
                                            <BaseButton color="lightDark" label="Button" 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                            <BaseButton color="contrast" label="Button" 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                            <BaseButton color="info" label="Button" 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                            <BaseButton color="success" label="Button" 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                            <BaseButton color="warning" label="Button" 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                            <BaseButton color="danger" label="Button" 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                        </BaseButtons>

                                        <BaseDivider />

                                        <BaseButtons>
                                            <BaseButton color="lightDark" label="Button" icon={mdiOpenInNew} 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                            <BaseButton color="contrast" label="Button" icon={mdiOpenInNew} 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                            <BaseButton color="info" label="Button" icon={mdiOpenInNew} 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                            <BaseButton color="success" label="Button" icon={mdiOpenInNew} 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                            <BaseButton color="warning" label="Button" icon={mdiOpenInNew} 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                            <BaseButton color="danger" label="Button" icon={mdiOpenInNew} 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                        </BaseButtons>

                                        <BaseDivider />

                                        <BaseButtons>
                                            <BaseButton color="lightDark" icon={mdiOpenInNew} 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                            <BaseButton color="contrast" icon={mdiOpenInNew} 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                            <BaseButton color="info" icon={mdiOpenInNew} 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                            <BaseButton color="success" icon={mdiOpenInNew} 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                            <BaseButton color="warning" icon={mdiOpenInNew} 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                            <BaseButton color="danger" icon={mdiOpenInNew} 
                                                outline={values.outline}
                                                small={values.small}
                                                roundedFull={values.rounded}
                                                disabled={values.disabled}
                                                isGrouped
                                            />
                                        </BaseButtons>
                                    </>
                                ))
                            }
                        </Formik>
                    </CardBox>
                </SectionMain>

                <SectionTitle>Pills</SectionTitle>

                <SectionMain>
                    <CardBox>
                        <Formik
                            initialValues={{ outline: false, small: false, icon: true}}
                            onSubmit={() => null}
                        >
                            {
                                ({ values }) => (
                                    <>
                                        <FormCheckRadioGroup>
                                            <FormCheckRadio type="switch" label="Outline" isGrouped>
                                                <Field type="checkbox" name="outline" />
                                            </FormCheckRadio>
                                            <FormCheckRadio type="switch" label="Small" isGrouped>
                                                <Field type="checkbox" name="small" />
                                            </FormCheckRadio>
                                            <FormCheckRadio type="switch" label="Icon" isGrouped>
                                                <Field type="checkbox" name="icon" />
                                            </FormCheckRadio>
                                        </FormCheckRadioGroup>

                                        <BaseDivider/>

                                        <BaseButtons>
                                            <PillTag  color="contrast" label="Contrast" 
                                                icon={values.icon ? mdiTrendingUp : null}
                                                outline={values.outline}
                                                small={values.small}
                                                isGrouped 
                                            />
                                            <PillTag  color="info" label="Info" 
                                                icon={values.icon ? mdiTrendingUp : null}
                                                outline={values.outline}
                                                small={values.small} 
                                                isGrouped
                                            />
                                            <PillTag  color="success" label="Success" 
                                                icon={values.icon ? mdiTrendingUp : null}
                                                outline={values.outline}
                                                small={values.small}
                                                isGrouped
                                            />
                                            <PillTag  color="warning" label="Warning" 
                                                icon={values.icon ? mdiTrendingUp : null}
                                                outline={values.outline}
                                                small={values.small}
                                                isGrouped
                                            />
                                            <PillTag  color="danger" label="Danger" 
                                                icon={values.icon ? mdiTrendingUp : null}
                                                outline={values.outline}
                                                small={values.small}
                                                isGrouped
                                            />
                                        </BaseButtons>
                                    </>
                                )
                            }
                        </Formik>
                    </CardBox>
                </SectionMain>


                <SectionTitle>Cards</SectionTitle>

                <SectionMain>
                    <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
                        <CardBox footer={CardSamplesFooter}>
                            
                            <CardBoxComponentTitle title="With title & icon">
                                <BaseButton icon={mdiReload} color="whiteDark" roundedFull  />
                            </CardBoxComponentTitle>
                            
                            <div className="space-y-3">
                                <p>Card with title, icon & footer</p>
                            </div>

                            <CardBox footer={CardSamplesFooter}>Just body & Footer </CardBox>
                        </CardBox>
                    </div>
                </SectionMain>

                <SectionTitleLineWithButton icon={mdiAlertCircle} title="Empty variation" />
                <SectionMain>
                    <CardBox>
                        <CardBoxComponentEmpty />
                    </CardBox>
                </SectionMain>
        </>
    )
}

UiPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default UiPage