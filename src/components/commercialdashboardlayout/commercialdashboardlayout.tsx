import classNames from 'classnames';
import styles from './commercialdashboardlayout.module.scss';

export interface CommercialdashboardlayoutProps {
    className?: string;
    children?: React.ReactNode;
}

export const Commercialdashboardlayout = ({
    className,
    children,
}: CommercialdashboardlayoutProps) => {

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['pagelayout-commercial']}> {children}</div>
        </div>
    );
};
