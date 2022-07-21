import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import algoliasearch from 'algoliasearch/lite.js'
import dotenv from 'dotenv'
dotenv.config()

const postsDirectory = join(process.cwd(), 'content/_articles')

function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

function getPostBySlug(slug, fields) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items = {}

    fields?.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field]
        }
    })

    return items
}

function getAllPosts(fields) {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}

;(async () => {
    const posts = getAllPosts(['slug', 'title', 'excerpt'])

    const transformed = posts.map(({ slug, title, excerpt }) => ({
        objectID: slug,
        slug,
        title,
        excerpt,
    }))

    const client = algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
        process.env.ALGOLIA_SEARCH_ADMIN_KEY
    )

    try {
        const index = client.initIndex('zakoduje_pl')
        const algoliaResponse = await index.saveObjects(transformed)

        console.log(algoliaResponse)
    } catch (error) {
        console.log(error)
    }
})()
