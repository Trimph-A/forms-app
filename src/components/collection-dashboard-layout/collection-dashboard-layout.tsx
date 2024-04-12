import classNames from 'classnames';
import styles from './collection-dashboard-layout.module.scss';
import { CommercialCollectionSidebar } from '../commercial-collection-sidebar/commercial-collection-sidebar';

export interface CollectionDashboardLayoutProps {
    className?: string;
    children: React.ReactNode;
}


export const CollectionDashboardLayout = ({
    className,
    children,
}: CollectionDashboardLayoutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <CommercialCollectionSidebar />
            <div className={styles.collectioncontent}> {children}</div>
        </div>
    );
};
