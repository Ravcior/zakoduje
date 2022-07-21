import Blog from '../../organisms/Blog/Blog'

const BlogTemplate = ({
    articles,
    page,
    pagesNumber,
}: {
    articles: any
    page: string
    pagesNumber: number
}) => <Blog pagesNumber={pagesNumber} page={page} articles={articles} />

export default BlogTemplate
