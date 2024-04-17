import { createBoard } from '@wixc3/react-board';
import { Commercialdashboardlayout } from '../../../components/commercialdashboardlayout/commercialdashboardlayout';
import PageHeader from '../../../components/page-header/page-header';
import { Breadcrumb, Divider } from 'semantic-ui-react';
import { CommercialForms } from '../../../components/commercial-forms/commercial-forms';
import Commercialdashboardlayout_board_module from './commercialdashboardlayout.board.module.scss';

export default createBoard({
    name: 'Commercialdashboardlayout',
    Board: () => (
        <Commercialdashboardlayout>
            <div>
                <PageHeader>
                    <div />
                </PageHeader>
            </div>
            <div style={{ width: '100%' }}>
                <Divider />
            </div>
            <div className={Commercialdashboardlayout_board_module['formupperlay-commercial']}>
                <h3 className={Commercialdashboardlayout_board_module['commercial-h3']}>
                    Commercial Data Entry
                </h3>
                <div className={Commercialdashboardlayout_board_module['forms-commercial']}>
                    <CommercialForms />
                </div>
            </div>
        </Commercialdashboardlayout>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
