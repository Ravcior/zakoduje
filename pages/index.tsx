import type { NextPage } from 'next'

import HomePage from '../components/templates/Home/Home'
import { getAllPosts } from '../utils/api'

const Home: NextPage<any, any> = ({
    articles,
    important,
}: {
    articles: any
    important: any
}) => <HomePage layout={important} articles={articles} />

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
        props: { articles, important },
    }
}

export default Home
