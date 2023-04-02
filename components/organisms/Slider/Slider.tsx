import Link from 'next/link'
import styles from './Slider.module.scss'

const Slider = ({ article }: { article: any }) => {
    let [content] = article || [{}]
    content ??= {}

    return (
        <Link href={`blog/${content.slug}`} className={styles.wrapper}>
            <img src={content.thumbnail} />
            <div className={styles.content}>
                <div className={styles.tag}>{content.category}</div>
                <h2 className={styles.title}>{content.title}</h2>
            </div>
            <div className={styles.mask}></div>
        </Link>
    )
}

export default Slider
