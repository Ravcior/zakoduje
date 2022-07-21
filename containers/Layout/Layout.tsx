import { useState } from 'react'

import useEventListener from '../../hooks/useEventListener'

import Footer from '../../components/organisms/Footer/Footer'
import Header from '../../components/organisms/Header/Header'
import Sidebar from '../../components/organisms/Sidebar/Sidebar'

import Modal from '../../components/molecules/Modal/Modal'
import Search from '../../components/molecules/Search/Search'

import styles from './Layout.module.scss'

const Layout = ({ children, data }: { children: JSX.Element; data: any }) => {
    const [isVisible, setVisible] = useState(false)
    const [defaultRefinement, setDefaultRefinement] = useState({})

    const handleSearchModal = (refinements?: {
        defCategory?: any
        defTag?: any
    }) => {
        setVisible(!isVisible)

        setDefaultRefinement(() => ({ ...refinements }))
    }

    const handleSearchShorthand = ({
        key,
        metaKey,
        ctrlKey,
    }: {
        key: any
        metaKey: any
        ctrlKey: any
    }) => {
        if ((metaKey || ctrlKey) && key === 'k') handleSearchModal()
    }

    if (typeof window !== 'undefined') {
        useEventListener('keydown', handleSearchShorthand, window)
    }

    return (
        <>
            <div className={styles.pageWrapper}>
                <Header handleModal={handleSearchModal} />
                <div className={styles.contentWrapper}>
                    <main className={styles.main}>{children}</main>
                    <Sidebar
                        handleModal={handleSearchModal}
                        posts={data.slice(0, 3)}
                    />
                    <Footer
                        handleModal={handleSearchModal}
                        posts={data.slice(3, 5)}
                    />
                </div>
            </div>
            {isVisible && (
                <Modal closeModal={handleSearchModal}>
                    <Search
                        defaultRefinement={defaultRefinement}
                        closeModal={handleSearchModal}
                    />
                </Modal>
            )}
        </>
    )
}

export default Layout
