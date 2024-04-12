import { createBoard } from '@wixc3/react-board';
import { FinancialDashboardLayout } from '../../../components/financial-dashboard-layout/financial-dashboard-layout';
import { Breadcrumb, Divider } from 'semantic-ui-react';
import PageHeader from '../../../components/page-header/page-header';
import { FinancialForms } from '../../../components/financial-forms/financial-forms';
import FinancialDashboardLayout_board_module from './financial-dashboard-layout.board.module.scss';
export default createBoard({
    name: 'FinancialDashboardLayout',
    Board: () => (
        <div>
            <FinancialDashboardLayout>
                <div>
                    <PageHeader />
                </div>
                <div style={{ width: '100%' }}>
                    <Divider />
                </div>
                <div className={FinancialDashboardLayout_board_module['fd-form']}>
                    <h3 className={FinancialDashboardLayout_board_module['fd-header']}>
                        Financial Data Entry
                    </h3>
                    <div className={FinancialDashboardLayout_board_module['fd-fields-layout']}>
                        <FinancialForms />
                    </div>
                </div>
            </FinancialDashboardLayout>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowHeight: 1078,
        windowWidth: 1971,
    },
});
