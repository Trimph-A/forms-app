import classNames from 'classnames';
import Nav from '../nav/nav';
import { Icon } from '../icon/icon';
import styles from './sidebar.module.scss';

export interface SidebarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sidebar = ({ className }: SidebarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src="/src/assets/cropped-Kedco-Logo-web.png" className={styles['logo-sidebar']} />
            <Nav className={styles.nav}>
                <Nav.Item selected>
                    <Icon glyph="draft" aria-hidden />
                    Technical Forms
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="settings" aria-hidden />
                    Help
                </Nav.Item>
            </Nav>
            <div className={styles['footer-sidebar']}>
                <h1 className={styles['powered-by']}>powered by</h1>
                <img
                    src="/src/assets/emrc logo black.svg"
                    alt=""
                    className={styles['footer-img-sidebar']}
                />
            </div>
        </div>
    );
};
