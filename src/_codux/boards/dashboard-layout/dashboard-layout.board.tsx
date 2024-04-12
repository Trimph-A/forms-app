import { createBoard } from '@wixc3/react-board';
import { DashboardLayout } from '../../../components/dashboard-layout/dashboard-layout';
import styles from './dashboard-layout.board.module.scss';
import PageHeader from '../../../components/page-header/page-header';
import { TechnicalForms } from '../../../components/technical-forms/technical-forms';
import { Breadcrumb, Divider } from 'semantic-ui-react';

export default createBoard({
    name: '🧩 Dashboard Layout',
    Board: () => (
        <DashboardLayout className={styles['dashboard-layout']}>
            <div>
                <PageHeader>
                    <div />
                </PageHeader>
            </div>
            <div style={{ width: '100%' }}>
                <Divider className={styles['divider-header']} />
            </div>
            <div className={styles.upperlay}>
                <h3 className={styles.header}>Technical Data Entry</h3>
                <div className={styles.lay}>
                    <TechnicalForms />
                </div>
            </div>
        </DashboardLayout>
    ),
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        },
        canvasWidth: 1920,
        windowWidth: 1920,
        windowHeight: 839,
    },
    isSnippet: true,
});
