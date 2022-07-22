import BlogTemplate from '../../components/templates/Blog/Blog'
import Layout from '../../containers/Layout/Layout'
import { getAllPosts } from '../../utils/api'

const Blog = ({ articles, important }: { articles: any; important: any }) => {
    return (
        <Layout data={important}>
            <BlogTemplate pagesNumber={1} page={'1'} articles={articles} />
        </Layout>
    )
}

export async function getServerSideProps() {
    const articles = getAllPosts([
        'title',
        'slug',
        'thumbnail',
        'important',
        'date',
    ])

    const important = articles.filter((item: any) => item.important)

    return {
        props: { articles, important },
    }
}

export default Blog
