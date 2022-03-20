import { SectionProps } from './Section.props';
import styles from './Section.module.css';

export const Section = ({ className ,children, ...props }: SectionProps) => {
    return (
        <section className={`${styles.section}`} {...props}>
            {children}
        </section>
    )
}
