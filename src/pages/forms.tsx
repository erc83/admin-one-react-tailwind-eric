import Head from 'next/head'
import { ReactElement } from 'react'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionTitle from '../components/Section/SectionTitle'
import { getPageTitle } from '../config'
import SectionMain from '../components/Section/SectionMain'
import SectionTitleLineWithButton from '../components/Section/SectionTitleLineWithButton'
import BaseButton from '../components/BaseButton'
import { mdiAccount, mdiBallotOutline, mdiGithub, mdiMail, mdiUpload } from '@mdi/js'
import CardBox from '../components/CardBox'
import { Formik, Form, Field } from 'formik'
import FormField from '../components/Form/Field'
import BaseButtons from '../components/BaseButtons'
import BaseDivider from '../components/BaseDivider'
import FormCheckRadioGroup from '../components/Form/CheckRadioGroup'
import FormCheckRadio from '../components/Form/CheckRadio'
import FormFilePicker from '../components/Form/FilePicker'

const FormsPage = () => {
    return (
        <>
            <Head>
                <title>{getPageTitle('Forms')}</title>
            </Head>

            <SectionMain>
                <SectionTitleLineWithButton icon={mdiBallotOutline} title= "Formik forms example" main>
                    <BaseButton 
                        href='https://github.com/justboil/admin-one-react-tailwind'
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
                            <FormField label="Grouped whit icons Name and Email" icons={[mdiAccount, mdiMail]}>
                                <Field name="fullname" placeholder="Full name" />
                                <Field type="email" name="email" placeholder="Email" />
                            </FormField>

                            <FormField
                                label="With help line and labelFor Phone"
                                labelFor="phone"
                                help="Help line comes here"
                            >
                                <Field name="phone" placeholder="Phone" id="phone" />
                            </FormField>

                            <FormField label="Dropdown Color" labelFor="color">
                                {/* debe coincidir name con initial values de Formik */}
                                <Field name="dropdown" id="color" component="select">
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </Field>
                            </FormField>

                            <BaseDivider />

                            <FormField label="Textarea" hasTextareaHeight>
                                <Field name="textarea" as="textarea" placeholder="Your text here" />
                            </FormField>
                            
                            <BaseDivider />

                            <BaseButtons>
                                <BaseButton type="submit" color="info" label="Submit"/>
                                <BaseButton type="reset" color="info"  outline label="Reset"/>
                            </BaseButtons>
                        </Form>
                    </Formik>
                </CardBox>

            </SectionMain>

            <SectionTitle>Custom elements</SectionTitle>
            <SectionMain>
                <CardBox>
                    <Formik
                        initialValues={{ checkboxes: ['lorem'], switches: ['lorem'], radio: 'lorem', outline: false, outline1:false, outline2: false }}
                        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
                    >
                        <Form>
                            <FormField label="Checkbox">
                                <FormCheckRadioGroup>
                                    <FormCheckRadio type="checkbox" label="Lorem">
                                        <Field type="checkbox" name="checkboxes" value="lorem" />
                                    </FormCheckRadio>
                                    <FormCheckRadio type="checkbox" label="Ipsum">
                                        <Field type="checkbox" name="checkboxes" value="ipsum" />
                                    </FormCheckRadio>
                                    <FormCheckRadio type="checkbox" label="Dolore">
                                        <Field type="checkbox" name="checkboxes" value="dolore" />
                                    </FormCheckRadio>
                                </FormCheckRadioGroup>
                            </FormField>

                            <BaseDivider />
                            <FormField label="Radio">
                                <FormCheckRadioGroup>
                                    <FormCheckRadio type="radio" label="Lorem">
                                        <Field type="checkbox" name="radio" value="lorem" />
                                    </FormCheckRadio>
                                    <FormCheckRadio type="radio" label="Ipsum">
                                        <Field type="checkbox" name="checkboxes" value="ipsum" />
                                    </FormCheckRadio>
                                </FormCheckRadioGroup>
                            </FormField>

                            <BaseDivider />

                            <FormField label="Switch">
                                <FormCheckRadioGroup>
                                    <FormCheckRadio type="switch" label="Lorem">
                                        <Field type="checkbox" name="outline" values="lorem" />
                                    </FormCheckRadio>
                                    <FormCheckRadio type="switch" label="Ipsum">
                                        <Field type="checkbox" name="outline1" values="ipsum" />
                                    </FormCheckRadio>
                                    <FormCheckRadio type="switch" label="switch1">
                                        <Field type="checkbox" name="outline2" values="doloressss" />
                                    </FormCheckRadio>
                                </FormCheckRadioGroup>
                            </FormField>   
                            <BaseDivider />

                            <BaseButtons>
                                <BaseButton type="submit" color="info" label="Submit"/>
                                <BaseButton type="reset" color="info"  outline label="Reset"/>
                            </BaseButtons>

                        </Form>
                    </Formik>
                    
                    <BaseDivider />
                    <FormField>
                        <FormFilePicker label="upload" color="info" icon={mdiUpload}/>
                    </FormField>
                </CardBox>
            </SectionMain>
        </>
    )
}
    
FormsPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default FormsPage