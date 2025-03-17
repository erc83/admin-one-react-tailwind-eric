"use client";

import Head from 'next/head'
import { ReactElement } from 'react'
// import LayoutAuthenticated from '../layouts/Authenticated'
import { getPageTitle } from '../config/config'
import SectionFullScreen from '../components/Section/SectionFullScreen'
import CardBox from '../components/CardBox'
import { Formik, Form, Field } from 'formik'
import { useRouter } from 'next/navigation'
import FormField from '../components/FormField/Field'
import FormCheckRadio from '../components/FormField/CheckRadio'
import BaseDivider from '../components/BaseDivider'
import BaseButtons from '../components/BaseButtons'
import BaseButton from '../components/BaseButton'
import LayoutGuest from '../layouts/Guest'

type LoginForm = {
  login: string
  password: string
  remember: boolean
}

const LoginPage = () => {
  const router = useRouter()

  const handleSubmit = (formValues: LoginForm) => {
    router.push('/dashboard')
    console.log('Form values:', formValues)
  }

  const initialValues: LoginForm = {
    login: 'john.doe',
    password: 'bG1sL9eQ1uD2sK3b',
    remember: true,
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Login')}</title>
      </Head>
      <SectionFullScreen bg="purplePink">
        <CardBox className="w-11/12 md:w-7/12 lg:6/12 xl:w-4/12 shadow-2xl">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <FormField>
                <Field name="login" />
              </FormField>

              <FormField label="Password" help="Please enter your password">
                <Field name="password" type="password" />
              </FormField>

              <FormCheckRadio type="checkbox" label="Remember">
                <Field type="checkbox" name="remember" />
              </FormCheckRadio>

              <BaseDivider />

              <BaseButtons>
                <BaseButton type="submit" label="Login" color="info" isGrouped />
                <BaseButton href="/dashboard" label="Home" color="info" outline isGrouped />
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
