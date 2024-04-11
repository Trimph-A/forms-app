import classNames from 'classnames';
import { CommercialCollectionSidebar } from '../commercial-collection-sidebar/commercial-collection-sidebar';
import styles from './dashboard-layout-collection.scss';
import CommercialCollectionSidebar_module from '../commercial-collection-sidebar/commercial-collection-sidebar.module.scss';
import CollectionForms_module from '../collection-forms/collection-forms.module.scss';

interface DashboardLayoutCollectionProps {
    className?: string;
    children: React.ReactNode;
}

export const DashboardLayoutCollection = ({
    children,
    className,
}: DashboardLayoutCollectionProps) => {
    return (
        <div className="root">
            <CommercialCollectionSidebar className="collections-sidebar" />
            <div>{children}</div>
        </div>
    );
};
