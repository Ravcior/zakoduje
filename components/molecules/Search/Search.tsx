import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import algoliasearch from 'algoliasearch/lite'
import {
    InstantSearch,
    PoweredBy,
    connectRefinementList,
} from 'react-instantsearch-dom'

import SearchInput from '../../atoms/Search/Search'
import Hits from '../Hits/Hits'

import styles from './Search.module.scss'

// TODO
// Check: react-instantsearch-hooks-web
// Source: https://discourse.algolia.com/t/react-instantsearch-not-working/15053/4

const ALGOLIA_APP_ID: string = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string
const ALGOLIA_SEARCH_API_KEY: string = process.env
    .NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY as string

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_API_KEY)

const Search = ({
    closeModal,
    defaultRefinement,
}: {
    closeModal: any
    defaultRefinement: any
}) => {
    const checkRefinement = (refinement: any) => {
        return refinement?.length ? [refinement] : []
    }

    const defaultCategory = checkRefinement(defaultRefinement.defCategory)
    const defaultTag = checkRefinement(defaultRefinement.defTag)

    return (
        <InstantSearch searchClient={searchClient} indexName="zakoduje_pl">
            <div className={styles.wrapper}>
                <div className={styles.searchBar}>
                    <SearchInput />
                    <CustomRefinementList
                        label="Kategoria"
                        attribute="category"
                        defaultRefinement={defaultCategory}
                    />
                    <CustomRefinementList
                        label="Tagi"
                        attribute="tags"
                        defaultRefinement={defaultTag}
                    />
                    <Close handleClose={closeModal} />
                </div>
                <Hits _={undefined} />
                <MobileClose handleClose={closeModal} />
            </div>
            <div className={styles.poweredBy}>
                <PoweredBy />
            </div>
        </InstantSearch>
    )
}

const Close = ({ handleClose }: { handleClose: any }) => (
    <div onClick={() => handleClose({})} className={styles.closeModal}>
        <FontAwesomeIcon icon={['fas', 'xmark']} />
    </div>
)

const MobileClose = ({ handleClose }: { handleClose: any }) => (
    <div onClick={() => handleClose({})} className={styles.closeModalMobile}>
        Zamknij
    </div>
)

const RefinementList = ({
    items,
    currentRefinement,
    refine,
    label,
}: {
    items: any
    currentRefinement: any
    refine: any
    label: any
}) => {
    const [isExpanded, setExpand] = useState(false)
    const currentRefinementList = currentRefinement.join(', ') || label

    return (
        <div className={styles.optionWrapper}>
            <div
                className={
                    isExpanded
                        ? styles.expandedCurrentOption
                        : styles.currentOption
                }
                onClick={() => setExpand(!isExpanded)}
            >
                <span>{currentRefinementList}</span>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={['fas', 'angle-down']} />
                </div>
            </div>
            {isExpanded && (
                <AvailableRefinementList refine={refine} items={items} />
            )}
        </div>
    )
}

const AvailableRefinementList = ({
    items,
    refine,
}: {
    items: any
    refine: any
}) => {
    const sortedItems = items?.sort((a: any, b: any) =>
        a.label.localeCompare(b.label)
    )

    return (
        <ul className={styles.optionList}>
            {items.length === 0 ? (
                <li>Brak wyników</li>
            ) : (
                sortedItems.map((item: any, index: number) => (
                    <RefinementItem key={index} refine={refine} item={item} />
                ))
            )}
        </ul>
    )
}

const RefinementItem = ({ item, refine }: { item: any; refine: any }) => (
    <li
        className={item.isRefined ? styles.selected : ''}
        onClick={() => {
            refine(item.value)
        }}
    >
        {item.label}
    </li>
)

const CustomRefinementList = connectRefinementList(RefinementList)

export default Search
