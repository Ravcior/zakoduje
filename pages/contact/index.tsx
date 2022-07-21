import Layout from '../../containers/Layout/Layout'
import ContactTemplate from '../../components/templates/Contact/Contact'
import { getAllPosts } from '../../utils/api'

const Contact = ({ important }: { important: any }) => (
    <Layout data={important}>
        <ContactTemplate />
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

export default Contact
