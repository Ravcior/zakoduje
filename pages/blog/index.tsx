import BlogTemplate from '../../components/templates/Blog/Blog'
import Layout from '../../containers/Layout/Layout'
import { getAllPosts } from '../../utils/api'

const Blog = ({
    articles,
    important,
    query,
}: {
    articles: any
    important: any
    query: any
}) => {
    const pagesNumber = Math.ceil((articles.length - 10) / 9)

    return (
        <Layout data={important}>
            <BlogTemplate
                pagesNumber={pagesNumber}
                page={query.page}
                articles={articles}
            />
        </Layout>
    )
}

export async function getServerSideProps({ query }: { query: any }) {
    if (!/^\+?([1-9]\d*)$/.test(query?.page)) {
        return {
            redirect: {
                destination: '/blog?page=1',
            },
        }
    }

    const articles = getAllPosts([
        'title',
        'slug',
        'thumbnail',
        'important',
        'date',
    ])

    const important = articles.filter((item: any) => item.important)

    return {
        props: { articles, important, query },
    }
}

export default Blog
