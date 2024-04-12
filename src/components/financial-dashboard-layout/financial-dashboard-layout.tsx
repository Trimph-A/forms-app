import classNames from 'classnames';
import styles from './financial-dashboard-layout.module.scss';
import { FinancialFormsSidebar } from '../financial-forms-sidebar/financial-forms-sidebar';

export interface FinancialDashboardLayoutProps {
    className?: string;
    children: React.ReactNode;
}

export const FinancialDashboardLayout = ({
    className,
    children,
}: FinancialDashboardLayoutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <FinancialFormsSidebar />
            <div className={styles['financial-page-content']}> {children}</div>
        </div>
    );
};
