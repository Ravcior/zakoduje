import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../../atoms/Button/Button'
import styles from './Contact.module.scss'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
type RequestBody = [string, string, Record<string, unknown>, string]

const GOOGLE_RECAPTCHA_SERVICE_ID: string = process.env
    .NEXT_PUBLIC_GOOGLE_RECAPTCHA_SERVICE_ID as string
const GOOGLE_RECAPTCHA_TEMPLATE_ID: string = process.env
    .NEXT_PUBLIC_GOOGLE_RECAPTCHA_TEMPLATE_ID as string
const GOOGLE_RECAPTCHA_SITE_ID: string = process.env
    .NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_ID as string
const GOOGLE_RECAPTCHA_SITE_KEY: string = process.env
    .NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY as string

const Contact = () => {
    const recaptchaRef = useRef<any>(null)
    const [formData, setFormData] = useState({})

    const handleChange = ({ target }: { target: any }) => {
        const value = target.value
        const name = target.name

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const token = await recaptchaRef.current.executeAsync()

        const params = {
            ...formData,
            'g-recaptcha-response': token,
        }

        const requestBody: RequestBody = [
            GOOGLE_RECAPTCHA_SERVICE_ID,
            GOOGLE_RECAPTCHA_TEMPLATE_ID,
            params,
            GOOGLE_RECAPTCHA_SITE_ID,
        ]

        emailjs
            .send(...requestBody)
            .then((res) => {
                handleSucces()
            })
            .catch((err) => {
                handleError()
            })

        recaptchaRef.current.reset()
    }

    const handleSucces = () => {
        alert('Wiadomość została wysłana')
    }

    const handleError = () => {
        alert(
            'Wystąpił błąd, spróbuj ponownie później lub wyślij wiadomość przez swoją skrzynkę pocztową na adres: rafal@zakoduje.com'
        )
    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.formSection}>
                    <Content />
                    <p className={styles.title}>Send us a message</p>
                    <Form
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        recaptchaRef={recaptchaRef}
                    />
                </div>
            </div>
            <Panels />
        </>
    )
}

const Content = () => (
    <div className={styles.content}>
        <p className={styles.title}>Get in touch</p>
        <p className={styles.text}>
            Liusmod tempor incididunt ut labore et dolore magna aliquaenim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est{' '}
        </p>
    </div>
)

const Form = ({
    handleChange,
    handleSubmit,
    recaptchaRef,
}: {
    handleChange: any
    handleSubmit: any
    recaptchaRef: any
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                required
                name="name"
                placeholder="Name*"
            />
            <input
                onChange={handleChange}
                required
                type="email"
                name="email"
                placeholder="E-mail*"
            />
            <input
                onChange={handleChange}
                name="website"
                placeholder="Company / Website"
            />
            <textarea
                onChange={handleChange}
                required
                placeholder="Message*"
                name="message"
            ></textarea>
            <button type="submit">
                <Button>Wyślij</Button>
            </button>
            <div className={styles.captcha}>
                <ReCAPTCHA
                    size="invisible"
                    ref={recaptchaRef}
                    sitekey={GOOGLE_RECAPTCHA_SITE_KEY}
                />
            </div>
        </form>
    )
}

const Panels = () => (
    <div className={styles.panels}>
        <Panel
            link="mailto:rafal@zakoduje.com"
            title="rafal@zakoduje.com"
            icon="paper-plane"
        />
        <Panel
            link="https://www.linkedin.com/in/rafa%C5%82-rozkowi%C5%84ski-0ab199245/"
            title="LinkedIn"
            icon={['fab', 'linkedin-in']}
        />
        <Panel
            link="https://github.com/Ravcior"
            title="Github"
            icon={['fab', 'github']}
        />
    </div>
)

const Panel = ({
    link,
    title,
    icon,
}: {
    link: string
    title: string
    icon: IconProp
}) => (
    <a href={link} className={styles.panel}>
        <div className={styles.icon}>
            <FontAwesomeIcon icon={icon} width="16" />
        </div>
        <span>{title}</span>
    </a>
)

export default Contact
