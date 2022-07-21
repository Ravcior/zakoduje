import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Modal.module.scss'

const Modal = ({
    children,
    closeModal,
}: {
    children: any
    closeModal: any
}) => (
    <>
        <div className={styles.wrapper}>
            <div className={styles.body}>{children}</div>
        </div>
        <div className={styles.mask} onClick={closeModal} />
    </>
)

export default Modal
