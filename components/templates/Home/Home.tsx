import Layout from '../../../containers/Layout/Layout'
import Blog from '../../organisms/Blog/Blog'
import Slider from '../../organisms/Slider/Slider'

const Home = ({ articles, layout }: { articles: any; layout: any }) => (
    <Layout data={layout}>
        <>
            <Slider article={articles.slice(0, 1)} />
            <Blog pagesNumber={2} page={'0'} articles={articles} />
        </>
    </Layout>
)

export default Home
