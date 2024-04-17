import React, { useState } from 'react';
import { createBoard } from '@wixc3/react-board';
import { CollectionDashboardLayout } from '../../components/collection-dashboard-layout/collection-dashboard-layout';
import { CollectionForms } from '../../components/collection-forms/collection-forms';
import { CommercialForms } from '../../components/commercial-forms/commercial-forms';
import CollectionDashboard1_board_module from './collection-dashboard-1.board.module.scss';

export default createBoard({
    name: 'collection dashboard',
    Board: () => {
        const [showCollectionForms, setShowCollectionForms] = useState(true);

        const handleSidebarItemClick = (item) => {
            // Toggle between showing Collection Forms and Commercial Forms based on the clicked item
            setShowCollectionForms(item === 'collection');
        };

        return (
            <CollectionDashboardLayout className={CollectionDashboard1_board_module['coll-lay']}>
                {showCollectionForms ? <CollectionForms /> : <CommercialForms />}
            </CollectionDashboardLayout>
        );
    },
    isSnippet: true,
    environmentProps: {
        windowWidth: 3356,
        windowHeight: 1571,
    },
});
