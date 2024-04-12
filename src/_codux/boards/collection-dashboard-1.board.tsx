import { createBoard } from '@wixc3/react-board';
import { CollectionDashboardLayout } from '../../components/collection-dashboard-layout/collection-dashboard-layout';
import { Breadcrumb, Divider } from 'semantic-ui-react';
import PageHeader from '../../components/page-header/page-header';
import { CollectionForms } from '../../components/collection-forms/collection-forms';
import CollectionDashboard1_board_module from './collection-dashboard-1.board.module.scss';

export default createBoard({
    name: 'collection dashboard',
    Board: () => (
        <div>
            <CollectionDashboardLayout>
                <div>
                    <PageHeader>
                        <div />
                    </PageHeader>
                </div>
                <div style={{ width: '100%' }}>
                    <Divider />
                </div>
                <div className={CollectionDashboard1_board_module['cc-borderlayer']}>
                    <h3 className={CollectionDashboard1_board_module['heade-cc-dashboard']}>
                        Collection Data Entry
                    </h3>
                    <div className={CollectionDashboard1_board_module['cc-layout']}>
                        <CollectionForms />
                    </div>
                </div>
            </CollectionDashboardLayout>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 3356,
        windowHeight: 1571,
    },
});
