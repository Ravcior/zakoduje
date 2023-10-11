import { remark } from 'remark'
import html from 'remark-html'
import remarkIframes from 'remark-iframes'

export default async function mdToHtml(markdown) {
    const result = await remark()
        .use(html, { allowDangerousHtml: true })
        .use(remarkIframes)
        .process(markdown)
    console.log(result)
    return result.toString()
}
