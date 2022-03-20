import { Section } from '../../components/interface/Section/Section';
import ava from '../../assets/img/ava.jpg';
import styles from './MainSection.module.css';

interface MainSectionProps {}

export const MainSection = (props: MainSectionProps) => {
    return (
        <Section className={styles.mainSection}>
            <img className={styles.img} src={ava} />
            <div className={styles.offer}>
                <h1 className={styles.title}> Петрухин Василий - Фронтенд разработчик</h1>
                <div className={styles.buttons}>
                    
                </div>
            </div>
        </Section>
    )
}
