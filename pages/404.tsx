import ErrorPage from '../components/templates/ErrorPage/ErrorPage'
import Layout from '../containers/Layout/Layout'
import { getAllPosts } from '../utils/api'

const NotFound = ({ important }: { important: any }) => (
    <Layout data={important}>
        <ErrorPage />
    </Layout>
)

export const getStaticProps = async () => {
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
        props: { important },
    }
}

export default NotFound
