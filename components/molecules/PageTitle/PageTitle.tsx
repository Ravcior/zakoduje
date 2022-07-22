import styles from './PageTitle.module.scss'

import Logo from '../../atoms/Logo/Logo'

const PageTitle = () => (
    <div className={styles.wrapper}>
        <Logo />
        <p className={styles.subtitle}>
            Blog o programowaniu<br></br>i technologiach
        </p>
    </div>
)

export default PageTitle
