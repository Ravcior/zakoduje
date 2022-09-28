import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from './Menu.module.scss'

const Menu = () => (
    <ul className={styles.wrapper}>
        {/* <li>
            <Link href="/">
                <a>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={['fas', 'house-chimney']} />
                    </span>
                    <span className={styles.title}>Home</span>
                </a>
            </Link>
        </li> */}
        <li>
            <Link href="/about">
                <a>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={['fas', 'address-card']} />
                    </span>
                    <span className={styles.title}>O mnie</span>
                </a>
            </Link>
        </li>
        {/* <li>
            <Link href="/portfolio">
                <a>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={['fas', 'code']} />
                    </span>
                    <span className={styles.title}>Portfolio</span>
                </a>
            </Link>
        </li> */}
        {/* <li>
            <Link href="/blog?page=1">
                <a>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={['fas', 'book']} />
                    </span>
                    <span className={styles.title}>Blog</span>
                </a>
            </Link>
        </li> */}
        <li>
            <Link href="/contact">
                <a>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={['fas', 'at']} />
                    </span>
                    <span className={styles.title}>Kontakt</span>
                </a>
            </Link>
        </li>
    </ul>
)

export default Menu
