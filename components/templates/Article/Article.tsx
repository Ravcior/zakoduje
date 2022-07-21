import { useRouter } from 'next/router'
import Head from 'next/head'

import Giscus from '@giscus/react'

import Layout from '../../../containers/Layout/Layout'
import ErrorPage from '../ErrorPage/ErrorPage'

import styles from './Article.module.scss'

type Author = {
    name: string
    picture: string
}

type PostType = {
    slug: string
    title: string
    date: string
    coverImage: string
    author: Author
    excerpt: string
    ogImage: {
        url: string
    }
    content: string
}

const Article = ({ post, data }: { post: PostType; data: any }) => {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage />
    }

    if (router.isFallback) {
        return <p>Loading…</p>
    }

    return (
        <>
            <Head>
                <title>My page title</title>
                <meta property="og:title" content="My page title" />
            </Head>
            <Layout data={data}>
                <div className={styles.wrapper}>
                    <div className={styles.thumbnail}>
                        <img src="https://picsum.photos/1280/720" />
                    </div>
                    <Content post={post} />
                    <Author />
                    <Comments />
                    <div className={styles.clear} />
                </div>
            </Layout>
        </>
    )
}

const Comments = () => {
    const GISCUS_REPO_ID: string = process.env.GISCUS_REPO_ID as string
    const GISCUS_CATEGORY_ID: string = process.env.GISCUS_CATEGORY_ID as string

    return (
        <div className={styles.comments}>
            <Giscus
                repo="Ravcior/zakoduje"
                repoId={GISCUS_REPO_ID}
                category="General"
                categoryId={GISCUS_CATEGORY_ID}
                mapping="og:title"
                reactionsEnabled="1"
                emitMetadata="0"
                theme="light"
                loading="lazy"
            />
        </div>
    )
}

const Content = ({ post }: { post: any }) => (
    <div className={styles.contentWrapper}>
        <div className={styles.metadata}></div>
        <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post?.content }}
        ></div>
    </div>
)

const Author = () => (
    <div className={styles.author}>
        <div className={styles.authorAvatar}>
            <img src="https://picsum.photos/250/250" />
        </div>
        <div>
            <p className={styles.authorName}>Rafał Rozkowiński</p>
            <p className={styles.authorText}>
                Eiusmod tempor incididunt ut labore et dolore magna aliquaenim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem.
            </p>
        </div>
    </div>
)

export default Article
