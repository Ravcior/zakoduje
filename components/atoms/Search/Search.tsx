import { connectSearchBox, PoweredBy } from 'react-instantsearch-dom'

import styles from './Search.module.scss'

const Search = ({ refine }: { refine: any }) => {
    return (
        <input
            id="algolia_search"
            type="search"
            className={styles.input}
            placeholder="Szukaj..."
            autoFocus
            onChange={(e) => {
                refine(e.currentTarget.value)
            }}
        />
    )
}

export default connectSearchBox(Search)
