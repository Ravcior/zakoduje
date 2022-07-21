import Card from '../../molecules/Card/Card'
import styles from './Footer.module.scss'

const Footer = ({ posts, handleModal }: { posts: any; handleModal: any }) => (
    <div className={styles.wrapper}>
        <div className={styles.widgets}>
            <div className={styles.widget}>
                <span className={styles.widgetTitle}>About</span>
                <p className={styles.about}>
                    Vertic is a creative and unique design made for bloggers
                    Lorem Ipsum proin gravida nibh vel velit auctor aliquet
                    aenean sollicitudin
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
                        React.js
                    </div>
                    <div
                        onClick={() => {
                            handleModal({ defTag: '1' })
                        }}
                    >
                        Next.js
                    </div>
                    <div
                        onClick={() => {
                            handleModal({ defTag: '1' })
                        }}
                    >
                        Gatsby.js
                    </div>
                    <div
                        onClick={() => {
                            handleModal({ defTag: '1' })
                        }}
                    >
                        Sass
                    </div>
                    <div
                        onClick={() => {
                            handleModal({ defTag: '1' })
                        }}
                    >
                        Tailwind
                    </div>
                    <div
                        onClick={() => {
                            handleModal({ defTag: '1' })
                        }}
                    >
                        Design
                    </div>
                    <div
                        onClick={() => {
                            handleModal({ defTag: '1' })
                        }}
                    >
                        Typography
                    </div>
                </div>
            </div>
            <div className={styles.widget}>
                <span className={styles.widgetTitle}>Popularne posty</span>
                <div className={styles.cardsWrapper}>
                    {posts?.map((item: any, index: number) => (
                        <Card type="2" key={index} content={item} />
                    ))}
                </div>
            </div>
        </div>
        <div className={styles.bottombar}>
            <span className={styles.copyright}>© 2022 Zakoduje.pl</span>
            <div className={styles.up}></div>
        </div>
    </div>
)

export default Footer
