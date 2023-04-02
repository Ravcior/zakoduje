import styles from './PageTitle.module.scss'

import Logo from '../../atoms/Logo/Logo'
import Link from 'next/link'

const PageTitle = () => (
    <Link href="/" className={styles.wrapper}>
        <>
            <Logo />
            <p className={styles.subtitle}>
                Blog o programowaniu<br></br>i technologiach
            </p>
        </>
    </Link>
)

export default PageTitle
