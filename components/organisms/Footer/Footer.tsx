import Card from '../../molecules/Card/Card'
import styles from './Footer.module.scss'

const Footer = ({ posts, handleModal }: { posts: any; handleModal: any }) => (
    <div className={styles.wrapper}>
        <div className={styles.widgets}>
            <div className={styles.widget}>
                <span className={styles.widgetTitle}>O stronie</span>
                <p className={styles.about}>
                    Zakoduje to blog o programowaniu. Pojawiać będzie się tutaj
                    content związany głównie z JavaScriptem. Nie zabraknie
                    jednak tematów dookoła programowania tj. SEO, Freelancing,
                    Kryptowaluty.
                </p>
            </div>
            <div className={styles.widget}>
                <span className={styles.widgetTitle}>Tagi</span>
                <div className={styles.tagsBox}>
                    <div
                        onClick={() => {
                            handleModal({ defTag: '1' })
                        }}
                    >
                        CSS
                    </div>
                </div>
            </div>
            <div className={styles.widget}>
                <span className={styles.widgetTitle}>Projekty</span>
                <div className={styles.cardsWrapper}>
                    {posts?.map((item: any, index: number) => (
                        <Card type="2" key={index} content={item} />
                    ))}
                </div>
            </div>
        </div>
        <div className={styles.bottombar}>
            <span className={styles.copyright}>© 2022 Zakoduje.com</span>
            <div className={styles.up}></div>
        </div>
    </div>
)

export default Footer
