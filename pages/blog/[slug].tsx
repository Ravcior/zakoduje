import { getPostBySlug, getAllPosts } from '../../utils/api'
import mdToHtml from '../../utils/mdToHtml'

import Article from '../../components/templates/Article/Article'

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

const ArticlePage = ({
    post,
    important,
}: {
    post: PostType
    important: any
}) => <Article post={post} data={important} />

export default ArticlePage

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])
    const content = await mdToHtml(post.content || '')

    const articles = getAllPosts([
        'title',
        'slug',
        'thumbnail',
        'category',
        'important',
        'date',
    ])

    const important = articles.filter((item: any) => item.important)

    return {
        props: {
            post: {
                ...post,
                content,
            },
            important,
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}
