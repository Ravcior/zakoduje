import Link from 'next/link'
import Button from '../../atoms/Button/Button'
import Card from '../../molecules/Card/Card'
import styles from './Blog.module.scss'

const Blog = ({
    articles,
    page,
    pagesNumber,
}: {
    articles: any
    page: string
    pagesNumber: number
}) => {
    const posts = articles.slice(
        parseInt(page) * 9 + 1,
        parseInt(page) * 9 + 10
    )

    return (
        <>
            <div className={styles.wrapper}>
                {Array.from({ length: 3 }).map((_, column) => (
                    <Column
                        key={column}
                        posts={posts.slice(column * 3, column * 3 + 3)}
                    />
                ))}
            </div>
            {posts.length > 0 && (
                <Pagination page={page} pagesNumber={pagesNumber} />
            )}
        </>
    )
}

const Column = ({ posts }: { posts: any }) => (
    <div className={styles.column}>
        {posts.map((article: any, index: number) => (
            <Card type="1" key={index} content={article} />
        ))}
    </div>
)

const Pagination = ({
    page,
    pagesNumber,
}: {
    page: string
    pagesNumber: number
}) => (
    <div className={styles.showMore}>
        {page === '0' ? <div /> : <PrevButton page={page} />}
        {page === pagesNumber + '' ? <div /> : <NextButton page={page} />}
    </div>
)

const PrevButton = ({ page }: { page: string }) => (
    <Link href={page === '1' ? '/' : `blog?page=${parseInt(page) - 1}`}>
        <a>
            <Button>Poprzednia strona</Button>
        </a>
    </Link>
)

const NextButton = ({ page }: { page: string }) => (
    <Link href={`blog?page=${parseInt(page) + 1}`}>
        <a>
            <Button>Następna strona</Button>
        </a>
    </Link>
)

export default Blog
