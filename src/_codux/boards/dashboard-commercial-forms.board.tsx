import { createBoard } from '@wixc3/react-board';
import { DashboardLayoutCollection } from '../../components/dashboard-layout-collection/dashboard-layout-collection';
import PageHeader from '../../components/page-header/page-header';
import { Breadcrumb, Divider } from 'semantic-ui-react';
import { CollectionForms } from '../../components/collection-forms/collection-forms';
import DashboardCommercialForms_board_module from './dashboard-commercial-forms.board.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'DashboardCommercialForms',
    Board: () => (
        <DashboardLayoutCollection>
            <div>
                <PageHeader />
            </div>
            <div style={{ width: '100%' }}>
                <Divider />
            </div>
            <div className={DashboardCommercialForms_board_module['upperlay-ccDashboard']}>
                <h3 className={DashboardCommercialForms_board_module['header-ccDashboardlay']}>
                    Collection Data Input{' '}
                </h3>
                <div className={DashboardCommercialForms_board_module['lowerlayer-ccDashboard']}>
                    <CollectionForms />
                </div>
            </div>
        </DashboardLayoutCollection>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1958,
        windowHeight: 738,
    },
});
