import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Sidebar.module.scss'
import Card from '../../molecules/Card/Card'

const Sidebar = ({ posts, handleModal }: { posts: any; handleModal: any }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.widget}>
                <span className={styles.title}>Popularne posty</span>
                {posts?.map((item: any, index: number) => (
                    <Card type="3" content={item} key={index} />
                ))}
            </div>
            <div className={styles.widget}>
                <span className={styles.title}>Kategorie</span>
                <ul className={styles.categories}>
                    <li
                        onClick={() =>
                            handleModal({ defCategory: 'Web design' })
                        }
                    >
                        <div className={styles.bullet} />
                        <span>Web design</span>
                    </li>
                </ul>
            </div>
            <div className={styles.widget}>
                <span className={styles.title}>Tagi</span>
                <div className={styles.tags}>
                    <div
                        onClick={() => {
                            handleModal({ defTag: 'CSS' })
                        }}
                    >
                        CSS
                    </div>
                </div>
            </div>
            <div className={styles.widget}>
                <span className={styles.title}>Socials</span>
                <div className={styles.socials}>
                    {/* <a href="https://github.com/Ravcior" target={'_blank'}>
                        <FontAwesomeIcon icon={['fab', 'github']} width="16" />
                    </a> */}
                    <a
                        href="https://www.linkedin.com/in/rafa%C5%82-rozkowi%C5%84ski-0ab199245/"
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={['fab', 'linkedin-in']}
                            width="16"
                        />
                    </a>
                    <a
                        href="https://twitter.com/rozkowir"
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={['fab', 'twitter']} width="16" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
