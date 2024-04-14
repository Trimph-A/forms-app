import styles from './App.module.scss';
import { DashboardLayout } from './components/dashboard-layout/dashboard-layout';
import { TechnicalForms } from './components/technical-forms/technical-forms';
import { Breadcrumb, Divider } from 'semantic-ui-react';
import PageHeader from './components/page-header/page-header';
import Icon_module from './components/icon/icon.module.scss';
import Classnames from 'classnames';

function App() {
    return (
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
                <h3 className={styles.lay}>Technical Data Entry</h3>
                <div className={styles['lower-lay']}>
                    <TechnicalForms />
                </div>
            </div>
        </DashboardLayout>
    );
}

export default App;
