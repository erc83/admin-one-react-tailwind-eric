"use client"

import Head from 'next/head'
import type { ReactElement } from 'react'
import {
  mdiAccount,
  mdiGithub,
  mdiMail,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiUpload,
} from '@mdi/js'
import LayoutAuthenticated from '../../layouts/Authenticated'
import { getPageTitle } from '../../config/config'
import { useAppSelector } from '../../stores/hooks'
import SectionMain from '../../components/Section/SectionMain'
import SectionTitleLineWithButton from '../../components/Section/SectionTitleLineWithButton'
import BaseButton from '../../components/BaseButton'
import UserCard from '../../components/CardBox/User'
import CardBox from '../../components/CardBox'
import { Formik, Form, Field } from 'formik'
import CardBoxComponentBody from '../../components/CardBox/Component/Body'
import FormField from '../../components/FormField/Field'
import CardBoxComponentFooter from '../../components/CardBox/Component/Footer'
import BaseButtons from '../../components/BaseButtons'
import BaseDivider from '../../components/BaseDivider'
import FormFilePicker from '../../components/FormField/FilePicker'
import { UserForm } from '../../interfaces'

const ProfilePage = () => {
  const userName = useAppSelector((state) => state.main.userName)
  const userEmail = useAppSelector((state) => state.main.userEmail)

  const userForm: UserForm = {
    name: userName,
    email: userEmail,
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Profile')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton icon={mdiAccount} title="Profile" main>
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

        <UserCard className="mb-6" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <CardBox className="mb-6">
              <FormField label="Avatar" help="Max 500kb">
                <FormFilePicker label="Upload" color="info" icon={mdiUpload} />
              </FormField>
            </CardBox>

            <CardBox className="flex-1" hasComponentLayout>
              <Formik
                initialValues={userForm}
                onSubmit={(values: UserForm) => alert(JSON.stringify(values, null, 2))}
              >
                <Form>
                  <CardBoxComponentBody>
                    <FormField
                      label="Name"
                      help="Required. Your name"
                      labelFor="name"
                      icons={[mdiAccount]}
                    >
                      <Field name="name" id="name" placeholder="Name" />
                    </FormField>
                    <FormField
                      label="E-mail"
                      help="Required. Your e-mail"
                      labelFor="email"
                      icons={[mdiMail]}
                    >
                      <Field name="email" id="email" placeholder="E-mail" />
                    </FormField>
                  </CardBoxComponentBody>
                  <CardBoxComponentFooter>
                    <BaseButtons>
                      <BaseButton color="info" type="submit" label="Submit" />
                      <BaseButton color="info" label="Options" outline />
                    </BaseButtons>
                  </CardBoxComponentFooter>
                </Form>
              </Formik>
            </CardBox>
          </div>

          <CardBox hasComponentLayout>
            <Formik
              initialValues={{
                currentPassword: '',
                newPassword: '',
                newPasswordConfirmation: '',
              }}
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              <Form>
                <CardBoxComponentBody>
                  <FormField
                    label="Current password"
                    help="Required. Your current password"
                    labelFor="currentPassword"
                    icons={[mdiAsterisk]}
                  >
                    <Field
                      name="currentPassword"
                      id="currentPassword"
                      type="password"
                      autoComplete="current-password"
                    />
                  </FormField>

                  <BaseDivider />

                  <FormField
                    label="New password"
                    help="Required. New password"
                    labelFor="newPassword"
                    icons={[mdiFormTextboxPassword]}
                  >
                    <Field
                      name="newPassword"
                      id="newPassword"
                      type="password"
                      autoComplete="new-password"
                    />
                  </FormField>
                  <FormField
                    label="Confirm password"
                    help="Required. New password one more time"
                    labelFor="newPasswordConfirmation"
                    icons={[mdiFormTextboxPassword]}
                  >
                    <Field
                      name="newPasswordConfirmation"
                      id="newPasswordConfirmation"
                      type="password"
                      autoComplete="new-password"
                    />
                  </FormField>
                </CardBoxComponentBody>

                <CardBoxComponentFooter>
                  <BaseButtons>
                    <BaseButton color="info" type="submit" label="Submit" isGrouped />
                    <BaseButton color="info" label="Options" outline isGrouped />
                  </BaseButtons>
                </CardBoxComponentFooter>
              </Form>
            </Formik>
          </CardBox>
        </div>
      </SectionMain>
    </>
  )
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default ProfilePage
