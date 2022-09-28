import { useRouter } from 'next/router'
import Head from 'next/head'

import Giscus from '@giscus/react'

import Layout from '../../../containers/Layout/Layout'
import ErrorPage from '../ErrorPage/ErrorPage'

import styles from './Article.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <title>{post.title}</title>
                <meta property="og:title" content={post.title} />
                <link
                    rel="canonical"
                    href={`https://zakoduje.com/blog/${post.slug}`}
                />
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
    const GISCUS_REPO_ID: string = process.env
        .NEXT_PUBLIC_GISCUS_REPO_ID as string
    const GISCUS_CATEGORY_ID: string = process.env
        .NEXT_PUBLIC_GISCUS_CATEGORY_ID as string

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
        <div className={styles.metadata}>
            <div>
                <FontAwesomeIcon icon={['fas', 'folder-tree']} width="16" />
                <span>{post.category}</span>
            </div>
            <div>
                <FontAwesomeIcon icon={['fas', 'calendar-check']} width="16" />
                <span>{post.date}</span>
            </div>
        </div>
        <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post?.content }}
        />
        <div className={styles.socials}>
            <span>Udostępnij:</span>
            <div className={styles.socialsBox}>
                <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://grywalnia.pl"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.facebook}
                >
                    <FontAwesomeIcon icon={['fab', 'facebook']} width="16" />
                </a>
                <a
                    href={`fb-messenger://share/?link=https://grywalnia.pl/`}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.messenger}
                >
                    <FontAwesomeIcon
                        icon={['fab', 'facebook-messenger']}
                        width="16"
                    />
                </a>
                <a
                    href={`http://twitter.com/share?url=https://grywalnia.pl/&hashtags=Grywalnia`}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.twitter}
                >
                    <FontAwesomeIcon icon={['fab', 'twitter']} width="16" />
                </a>
                <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://grywalnia.pl"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.linkedin}
                >
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} width="16" />
                </a>
            </div>
        </div>
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
                Nazywam się Rafał i jestem programistą. Zajmuje się tworzeniem
                aplikacji internetowych (Full-Stack JS, SQL). Największą
                satysfakcję sprawia mi realizacja własnych pomysłów. Część moich
                projektów możesz obejrzeć w zakładce{' '}
                <Link href="/portfolio">
                    <a>portfolio</a>
                </Link>
                .
            </p>
        </div>
    </div>
)

export default Article
