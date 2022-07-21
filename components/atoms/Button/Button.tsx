import styles from './Button.module.scss'

const Button = ({ children }: { children: string }) => (
    <div className={styles.wrapper}>{children}</div>
)

export default Button
