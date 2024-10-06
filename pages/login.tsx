import Head from 'next/head'
import { ReactElement } from 'react'
import LayoutAuthenticated from '../components/layouts/Authenticated'
import SectionTitle from '../components/SectionTitle'
import { appTitle } from '../src/config'
import SectionFullScreen from '../components/SectionFullScreen'
import CardBox from '../components/CardBox'
import {Formik, Form, Field} from 'formik'
import { useRouter } from 'next/router'
import FormField from '../components/FormField'
import FormCheckRadio from '../components/FormCheckRadio'
import BaseDivider from '../components/BaseDivider'
import BaseButtons from '../components/BaseButtons'
import BaseButton from '../components/BaseButton'
import LayoutGuest from '../components/layouts/Guest'

const LoginPage = () => {

    const router = useRouter()

    const handleSubmit = () => {
        router.push('dashboard')
    }

    return (
        <>
            <Head>
                <title>Login - {appTitle}</title>
            </Head>
            <SectionFullScreen bg="purplePink">
                <CardBox className="w-11/12 md:w-7/12 lg:6/12 xl:w-4/12 shadow-2xl">
                    <Formik
                        initialValues={{ login: 'john.doe', password: 'bG1sL9eQ1uD2sK3b', remember: true }}
                        onSubmit={() => handleSubmit()}
                    >
                        <Form>
                            <FormField>
                                <Field name="login"/>
                            </FormField>

                            <FormField label="Password" help="Please enter your password">
                                <Field name="password" type="password" />
                            </FormField>
                        
                            <FormCheckRadio type="checkbox" label="Remember">
                                <Field type="checkbox" name="remember" />
                            </FormCheckRadio>

                            <BaseDivider />

                            <BaseButtons>
                                <BaseButton type="submit" label="Login" color="info" />
                                <BaseButton href="/dashboard" label="Home" color="info" outline />
                            </BaseButtons>

                        </Form>
                    </Formik>
                </CardBox>
            </SectionFullScreen>

        </>
    )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutGuest>{page}</LayoutGuest>
}

export default LoginPage