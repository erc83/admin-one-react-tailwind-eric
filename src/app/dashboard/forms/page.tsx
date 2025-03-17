"use client"

import Head from 'next/head'
import { ReactElement } from 'react'
import LayoutAuthenticated from '../../layouts/Authenticated'
import SectionTitle from '../../components/Section/SectionTitle'
import { getPageTitle } from '../../config/config'
import SectionMain from '../../components/Section/SectionMain'
import SectionTitleLineWithButton from '../../components/Section/SectionTitleLineWithButton'
import BaseButton from '../../components/BaseButton'
import { mdiAccount, mdiBallotOutline, mdiEmail, mdiGithub, mdiUpload } from '@mdi/js'
import CardBox from '../../components/CardBox'
import { Formik, Form, Field } from 'formik'
import FormField from '../../components/FormField'
import BaseButtons from '../../components/BaseButtons'
import BaseDivider from '../../components/BaseDivider'
import FormCheckRadioGroup from '../../components/FormField/CheckRadioGroup'
import FormCheckRadio from '../../components/FormField/CheckRadio'
import FormFilePicker from '../../components/FormField/FilePicker'
import FieldLabel from '../../components/FormField/FieldLabel'

const FormsPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Forms')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton icon={mdiBallotOutline} title="Formik forms example" main>
          <BaseButton
            href="https://github.com/justboil/admin-one-react-tailwind"
            target="_blank"
            icon={mdiGithub}
            label="Start on Github"
            color="contrast"
            roundedFull
            small
          />
        </SectionTitleLineWithButton>

        <CardBox>
          <Formik
            initialValues={{
              fullname: 'John Doe',
              email: 'john.doe@example.com',
              phone: '',
              dropdown: 'green',
              textarea: 'Hello',
            }}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mb-6 last:mb-0">
                <div>
                  <FormField label="Name" labelFor="fullname" icon={mdiAccount}>
                    {({ className }) => (
                      <Field
                        name="fullname"
                        id="fullname"
                        placeholder="Full name"
                        className={className}
                      />
                    )}
                  </FormField>
                </div>
                <div>
                  <FormField label="Email" labelFor="email" icon={mdiEmail}>
                    {({ className }) => (
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className={className}
                      />
                    )}
                  </FormField>
                </div>
              </div>

              <FormField
                label="With help line and labelFor Phone"
                labelFor="phone"
                help="Help line comes here"
              >
                {({ className }) => (
                  <Field name="phone" placeholder="Phone" id="phone" className={className} />
                )}
              </FormField>

              <FormField label="Dropdown Color" labelFor="color">
                {({ className }) => (
                  <Field name="color" id="color" component="select" className={className}>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                  </Field>
                )}
              </FormField>

              <BaseDivider />

              <FormField label="Textarea" labelFor="textarea" hasTextareaHeight>
                {({ className }) => (
                  <Field
                    name="textarea"
                    id="textarea"
                    as="textarea"
                    placeholder="Your text here"
                    className={className}
                  />
                )}
              </FormField>

              <BaseDivider />

              <BaseButtons>
                <BaseButton type="submit" color="info" label="Submit" isGrouped />
                <BaseButton type="reset" color="info" outline label="Reset" isGrouped />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>

      <SectionTitle>Custom elements</SectionTitle>
      <SectionMain>
        <CardBox>
          <Formik
            initialValues={{
              checkboxes: ['lorem'],
              switches: ['lorem'],
              radio: 'lorem',
              outline: false,
              outline1: false,
              outline2: false,
            }}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <FieldLabel>Checkout</FieldLabel>
              <FormCheckRadioGroup>
                <FormCheckRadio type="checkbox" label="Lorem" isGrouped>
                  <Field type="checkbox" name="checkboxes" value="lorem" />
                </FormCheckRadio>
                <FormCheckRadio type="checkbox" label="Ipsum" isGrouped>
                  <Field type="checkbox" name="checkboxes" value="ipsum" />
                </FormCheckRadio>
                <FormCheckRadio type="checkbox" label="Dolore" isGrouped>
                  <Field type="checkbox" name="checkboxes" value="dolore" />
                </FormCheckRadio>
              </FormCheckRadioGroup>

              <BaseDivider />

              <FieldLabel>Radio</FieldLabel>
              <FormCheckRadioGroup>
                <FormCheckRadio type="radio" label="Lorem" isGrouped>
                  <Field type="radio" name="radio" value="lorem" />
                </FormCheckRadio>
                <FormCheckRadio type="radio" label="Ipsum" isGrouped>
                  <Field type="radio" name="radio" value="ipsum" />
                </FormCheckRadio>
              </FormCheckRadioGroup>

              <BaseDivider />
              <FieldLabel>Switch</FieldLabel>
              <FormCheckRadioGroup>
                <FormCheckRadio type="switch" label="Lorem" isGrouped>
                  <Field type="checkbox" name="switches" values="lorem" />
                </FormCheckRadio>
                <FormCheckRadio type="switch" label="Ipsum" isGrouped>
                  <Field type="checkbox" name="switches" values="ipsum" />
                </FormCheckRadio>
              </FormCheckRadioGroup>

              <BaseDivider />

              <BaseButtons>
                <BaseButton type="submit" color="info" label="Submit" isGrouped />
                <BaseButton type="reset" color="info" outline label="Reset" isGrouped />
              </BaseButtons>
            </Form>
          </Formik>

          <BaseDivider />
        </CardBox>
      </SectionMain>

      <SectionMain>
        <CardBox>
          <FormFilePicker label="Upload" color="info" icon={mdiUpload} />
        </CardBox>
      </SectionMain>
    </>
  )
}

FormsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default FormsPage
