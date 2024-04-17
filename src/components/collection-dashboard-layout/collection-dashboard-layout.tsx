import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './collection-dashboard-layout.module.scss';
import { CommercialCollectionSidebar as CommercialCollectionSidebar0 } from '../commercial-collection-sidebar/commercial-collection-sidebar';
import { Divider } from 'semantic-ui-react'; // Import Divider from semantic-ui-react
import PageHeader from '../../components/page-header/page-header';
import { CommercialForms } from '../../components/commercial-forms/commercial-forms';
import { CollectionForms } from '../../components/collection-forms/collection-forms';
import CollectionDashboard1_board_module from '../../_codux/boards/collection-dashboard-1.board.module.scss';
export interface CollectionDashboardLayoutProps {
    className?: string;
    children: React.ReactNode;
}

export const CollectionDashboardLayout = ({
    className,
    children,
}: CollectionDashboardLayoutProps) => {
    const [showCollectionForms, setShowCollectionForms] = useState(true);

    const handleSidebarItemClick = (item) => {
        setShowCollectionForms(item === 'collection');
    };

    return (
        <div className={classNames(styles.root, className)}>
            <CommercialCollectionSidebar0 onSidebarItemClick={handleSidebarItemClick} />
            <div
                className={classNames(
                    styles.content,
                    CollectionDashboard1_board_module['coll-lay'],
                )}
            >
                <div className={styles.header}>
                    <PageHeader>
                        <div />
                    </PageHeader>
                </div>
                <Divider /> {/* Divider remains static */}
                <div className={styles.collectioncontent}>
                    {showCollectionForms ? <CollectionForms /> : <CommercialForms />}
                </div>
            </div>
        </div>
    );
};
