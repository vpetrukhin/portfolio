import { ButtonProps } from './Button.props';

import styles from './Button.module.css';

export const Button = ({ className, children, ...props }: ButtonProps) => (
    <button className={`${styles.button} ${className}`} {...props}>
        {children}
    </button>
)
