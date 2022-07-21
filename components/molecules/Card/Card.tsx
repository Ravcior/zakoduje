import styles from './Card.module.scss'

import Link from 'next/link'

const Card = ({ content, type = '1' }: { content: any; type: string }) => {
    switch (type) {
        case '1':
            return <MdCard content={content} />
        case '2':
            return <SmCard item={content} />
        case '3':
            return <RoundedSmCard item={content} />
        default:
            return <MdCard content={content} />
    }
}

const MdCard = ({ content }: { content: any }) => (
    <Link href={`blog/${content.slug}`}>
        <a className={styles.wrapper}>
            <div className={styles.image}>
                <img src={content.thumbnail} />
            </div>
            <div className={styles.title}>
                <h4>{content.title}</h4>
            </div>
        </a>
    </Link>
)

const SmCard = ({ item }: { item: any }) => (
    <Link href={`/blog/${item.slug}`}>
        <a className={styles.card}>
            <div className={styles.cardThumbnail}>
                <img src="https://picsum.photos/100/70" />
            </div>
            <h4>{item.title}</h4>
        </a>
    </Link>
)

const RoundedSmCard = ({ item }: { item: any }) => {
    return (
        <Link href={`/blog/${item.slug}`}>
            <a className={styles.roundedCard}>
                <div className={styles.image}>
                    <img src="https://picsum.photos/200/300" />
                </div>
                <div className={styles.content}>
                    <h5 className={styles.cardTitle}>{item.title}</h5>
                    <div className={styles.date}>{item.date}</div>
                </div>
            </a>
        </Link>
    )
}

export default Card
