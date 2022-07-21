import styles from './InstagramWidget.module.scss'

const InstagramWidget = () => (
    <div className={styles.wrapper}>
        <span className={styles.title}>Instagram</span>
        <div className={styles.box}>
            <div className={styles.item}>
                <img src="https://picsum.photos/70/70" />
            </div>
            <div className={styles.item}>
                <img src="https://picsum.photos/70/70" />
            </div>
            <div className={styles.item}>
                <img src="https://picsum.photos/70/70" />
            </div>
            <div className={styles.item}>
                <img src="https://picsum.photos/70/70" />
            </div>
            <div className={styles.item}>
                <img src="https://picsum.photos/70/70" />
            </div>
            <div className={styles.item}>
                <img src="https://picsum.photos/70/70" />
            </div>
            <div className={styles.item}>
                <img src="https://picsum.photos/70/70" />
            </div>
            <div className={styles.item}>
                <img src="https://picsum.photos/70/70" />
            </div>
        </div>
    </div>
)

export default InstagramWidget
