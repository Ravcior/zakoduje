import { useState } from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connectStateResults } from 'react-instantsearch-dom'
import Card from '../Card/Card'

import styles from './Hits.module.scss'

type Post = {
    title: string
    slug: string
    excerpt: string
}

function Hits({ _, searchResults }: { _: any; searchResults: any }) {
    const initialPreview = searchResults?.hits[0]
    const [preview, setPreview] = useState<Post>(initialPreview)
    const [previewIndex, setPreviewIndex] = useState(0)

    const handlePreview = (content: any, index: any) => {
        setPreview(content)
        setPreviewIndex(index)
    }

    const setPreviewIfNeeded = (searchResults: any) => {
        const post = searchResults?.hits?.[0]
        !preview && post && handlePreview(post, 0)
    }

    setPreviewIfNeeded(searchResults)

    return (
        <div className={styles.wrapper}>
            <List
                searchResults={searchResults}
                handlePreview={handlePreview}
                previewIndex={previewIndex}
            />
            <Preview content={preview} />
        </div>
    )
}

const Preview = ({ content }: { content: any }) => (
    <div className={styles.preview}>
        {content && (
            <>
                <img src="https://picsum.photos/1280/720" />
                <h4>{content.title}</h4>
                <p>{content.excerpt}</p>
                <Link
                    href={`/blog/${content.slug}`}
                    className={styles.showMore}
                >
                    <>
                        Przejdź do artykułu
                        <FontAwesomeIcon
                            icon={['fas', 'arrow-right']}
                            width="10"
                        />
                    </>
                </Link>
            </>
        )}
    </div>
)

const List = ({
    searchResults,
    handlePreview,
    previewIndex,
}: {
    searchResults: any
    handlePreview: any
    previewIndex: any
}) => (
    <div className={styles.list}>
        {searchResults?.hits?.map((content: any, index: number) => (
            <Hit
                content={content}
                key={index}
                handleHover={() => {
                    handlePreview(content, index)
                }}
                isActive={previewIndex === index && true}
            />
        ))}
    </div>
)

const Hit = ({
    content,
    handleHover,
    isActive,
}: {
    content: any
    handleHover: any
    isActive: any
}) => (
    <div className={isActive ? styles.selected : ''} onMouseEnter={handleHover}>
        <Card type="2" content={content} />
    </div>
)

export default connectStateResults(Hits)
