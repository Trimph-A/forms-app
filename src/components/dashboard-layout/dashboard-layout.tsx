import classNames from 'classnames';
import { Sidebar } from '../sidebar/sidebar';
import styles from './dashboard-layout.module.scss';
import PageHeader from '../page-header/page-header';
import { TechnicalForms } from '../technical-forms/technical-forms';

interface DashboardLayoutProps {
    className?: string;
    children: React.ReactNode;
}

export const DashboardLayout = ({ children, className }: DashboardLayoutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Sidebar className={styles.sidebar} />
        </div>
    );
};
