import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faLinkedinIn,
    faTwitter,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
    faPaperPlane,
    faXmark,
    faArrowRight,
    faAngleDown,
    faBook,
    faAt,
    faAddressCard,
    faHouseChimney,
    faCode,
    faMagnifyingGlass,
    faBurger,
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faPaperPlane,
    faLinkedinIn,
    faTwitter,
    faGithub,
    faXmark,
    faArrowRight,
    faAngleDown,
    faBook,
    faAt,
    faAddressCard,
    faHouseChimney,
    faCode,
    faMagnifyingGlass,
    faBurger
)

import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Zakoduje.com - programming passion</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
