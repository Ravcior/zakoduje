import styles from './PageTitle.module.scss'

import Logo from '../../atoms/Logo/Logo'

const PageTitle = () => (
    <div className={styles.wrapper}>
        <Logo />
        <p className={styles.subtitle}>
            Creative Personal Blog<br></br>PSD template
        </p>
    </div>
)

export default PageTitle
