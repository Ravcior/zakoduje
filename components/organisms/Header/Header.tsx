import styles from './Header.module.scss'

import PageTitle from '../../molecules/PageTitle/PageTitle'
import Menu from '../../molecules/Menu/Menu'
// import InstagramWidget from '../../molecules/InstagramWidget/InstagramWidget'
import Socials from '../../molecules/Socials/Socials'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const Header = ({ handleModal }: { handleModal: any }) => {
    const [isVisible, setVisible] = useState(false)

    return (
        <>
            <div className={styles.wrapper}>
                <PageTitle />
                <div className={isVisible ? styles.mobileMenu : styles.none}>
                    <Menu />
                    <div className={styles.widgets}>
                        <div className={styles.input} onClick={handleModal}>
                            <span>Szukaj...</span>
                            <span>ctrl+k</span>
                        </div>
                        <div className={styles.icon} onClick={handleModal}>
                            <FontAwesomeIcon
                                icon={['fas', 'magnifying-glass']}
                            />
                        </div>
                        <Socials />
                    </div>
                </div>
                <div
                    className={styles.mobileTogler}
                    onClick={() => setVisible(!isVisible)}
                >
                    {isVisible ? (
                        <FontAwesomeIcon icon={['fas', 'xmark']} />
                    ) : (
                        <FontAwesomeIcon icon={['fas', 'burger']} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Header
