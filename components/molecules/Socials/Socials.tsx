import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Socials.module.scss'

const Socials = () => (
    <div className={styles.wrapper}>
        <span className={styles.title}>Socials</span>
        <div className={styles.box}>
            {/* <a
                href="https://github.com/Ravcior"
                target={'_blank'}
                className={styles.item}
            >
                <FontAwesomeIcon icon={['fab', 'github']} width="16" />
            </a> */}
            <a
                href="https://www.linkedin.com/in/rafa%C5%82-rozkowi%C5%84ski-0ab199245/"
                target={'_blank'}
                className={styles.item}
            >
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} width="16" />
            </a>
            <a
                href="https://twitter.com/rozkowir"
                target={'_blank'}
                className={styles.item}
            >
                <FontAwesomeIcon icon={['fab', 'twitter']} width="16" />
            </a>
        </div>
    </div>
)

export default Socials
