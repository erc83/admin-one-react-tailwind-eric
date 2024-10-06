import Head from 'next/head'
import { ReactElement } from 'react'
import LayoutAuthenticated from '../components/layouts/Authenticated'
import SectionTitle from '../components/SectionTitle'
import { appTitle } from '../src/config'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import BaseButton from '../components/BaseButton'
import { mdiAccount, mdiBallotOutline, mdiGithub, mdiMail } from '@mdi/js'
import CardBox from '../components/CardBox'
import { Formik, Form, Field } from 'formik'
import FormField from '../components/FormField'
import BaseButtons from '../components/BaseButtons'

const FormsPage = () => {
    return (
        <>
            <Head>
                <title>Forms - {appTitle}</title>
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
                            color: 'green',
                            textarea: 'Hello',
                        }}
                        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
                    >
                        <Form> 
                            <FormField label="Grouped whit icons" icons={[mdiAccount, mdiMail]}>
                                <Field name="fullname" placeholder="Full name" />
                                <Field type="email" name="email" placeholder="Email" />
                            </FormField>



                            <BaseButtons>
                                <BaseButton type="submit" color="info" label="Submit"/>
                                <BaseButton type="reset" color="info"  outline label="Reset"/>
                            </BaseButtons>
                        </Form>
                    </Formik>
                </CardBox>

            </SectionMain>

        </>
    )
}
    
FormsPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default FormsPage