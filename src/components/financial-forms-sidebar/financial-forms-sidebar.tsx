import classNames from 'classnames';
import styles from './financial-forms-sidebar.module.scss';
import Nav from '../nav/nav';
import { Icon } from '../icon/icon';

export interface FinancialFormsSidebarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FinancialFormsSidebar = ({ className }: FinancialFormsSidebarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src="/src/assets/cropped-Kedco-Logo-web.png" className={styles['logo-fsidebar']} />
            <Nav className={styles.nav}>
                <Nav.Item selected>
                    <Icon glyph="draft" aria-hidden />
                    Financial Forms
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="settings" aria-hidden />
                    Help
                </Nav.Item>
            </Nav>
            <div className={styles['footer-fsidebar']}>
                <h1 className={styles['powered-by-fsidebar']}>powered by</h1>
                <img
                    src="/src/assets/emrc logo black.svg"
                    alt=""
                    className={styles['footer-img-fsidebar']}
                />
            </div>
        </div>
    );
};
