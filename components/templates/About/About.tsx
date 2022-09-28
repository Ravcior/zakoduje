import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from './About.module.scss'

const About = () => (
    <div className={styles.wrapper}>
        <div className={styles.content}>
            <div className={styles.thumbnail}>
                <img src="/public/assets/avatar.jpg" />
            </div>
            <div className={styles.text}>
                <span className={styles.title}>Cześć, jestem Rafał!</span>
                <p>
                    Nazywam się Rafał i jestem programistą. Zajmuje się
                    tworzeniem aplikacji internetowych (Full-Stack JS, SQL).
                    Największą satysfakcję sprawia mi realizacja własnych
                    pomysłów. Część moich projektów możesz obejrzeć w zakładce{' '}
                    <Link href="/portfolio">
                        <a>portfolio</a>
                    </Link>
                    .
                </p>
                <p>
                    Jeżeli jesteś zainteresowany(-a) współpracą ze mną
                    skorzystaj z{' '}
                    <Link href="/contact">
                        <a>formularza kontaktowego</a>
                    </Link>{' '}
                    lub po prostu wyślij maila.
                </p>

                <p>
                    <b>E-mail: </b>
                    <a href="mailto:rafal@zakoduje.com">rafal@zakoduje.com</a>
                </p>
                <span className={styles.subtitle}>Linki</span>
                <div className={styles.socials}>
                    <a href="https://github.com/Ravcior">
                        <FontAwesomeIcon icon={['fab', 'github']} width="16" />
                    </a>
                    <a href="https://www.linkedin.com/in/rafa%C5%82-rozkowi%C5%84ski-0ab199245/">
                        <FontAwesomeIcon
                            icon={['fab', 'linkedin-in']}
                            width="16"
                        />
                    </a>
                    <a href="https://twitter.com/rozkowir">
                        <FontAwesomeIcon icon={['fab', 'twitter']} width="16" />
                    </a>
                </div>
            </div>
        </div>
        <div className={styles.cv}>
            <p className={styles.title}>CV</p>
            <a href="/public/assets/rafal_rozkowinski_cv.pdf" download>
                Pobierz moje CV
            </a>
            <img src="/public/assets/rafal_rozkowinski_cv.png" />
        </div>
    </div>
)

export default About
