import About from '../../components/templates/About/About'
import Layout from '../../containers/Layout/Layout'
import { getAllPosts } from '../../utils/api'

const AboutPage = ({ important }: { important: any }) => (
    <Layout data={important}>
        <About />
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

export default AboutPage
