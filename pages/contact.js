import { Fragment } from "react"
import ContactForm from "../components/contact/contact-form"
import Head from "next/head"

function Contactpage (){

    return <Fragment>
        <Head>
            <title>Contact Me</title>
            <meta name="description" content="Contact Us"/>
        </Head>
            <ContactForm />
        </Fragment>
}

export default Contactpage