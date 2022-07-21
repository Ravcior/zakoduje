import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './About.module.scss'

const About = () => (
    <div className={styles.wrapper}>
        <div className={styles.content}>
            <div className={styles.thumbnail}>
                <img src="https://picsum.photos/500/500" />
            </div>
            <div className={styles.text}>
                <span className={styles.title}>Cześć, jestem Rafał!</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolor ducimus, hic, distinctio commodi impedit eveniet
                    repellat similique cum dignissimos omnis perspiciatis
                    delectus porro reiciendis vitae quae illum laudantium
                    repudiandae?
                </p>
                <p>
                    <b>E-mail: </b>
                    <a href="mailto:rafal@zakoduje.com">rafal@zakoduje.com</a>
                </p>
                <span className={styles.subtitle}>Linki</span>
                <div className={styles.socials}>
                    <a href="#">
                        <FontAwesomeIcon icon={['fab', 'github']} width="16" />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon
                            icon={['fab', 'linkedin-in']}
                            width="16"
                        />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={['fab', 'twitter']} width="16" />
                    </a>
                </div>
            </div>
        </div>
        <div className={styles.cv}>
            <p className={styles.title}>CV</p>
            <a href="/public/vercel.svg" download>
                Pobierz moje CV
            </a>
            <img src="https://picsum.photos/210/297" />
        </div>
    </div>
)

export default About
