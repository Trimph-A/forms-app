import classNames from 'classnames';
import styles from './commercial-collection-sidebar.module.scss';
import Nav from '../nav/nav';
import { Icon } from '../icon/icon';

export interface CommercialCollectionSidebarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CommercialCollectionSidebar = ({ className }: CommercialCollectionSidebarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="/src/assets/cropped-Kedco-Logo-web.png"
                className={styles['logo-commercial-sidebar']}
            />
            <Nav className={styles.nav}>
                <Nav.Item selected>
                    <Icon glyph="insights" aria-hidden />
                    Collection Forms
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="draft" aria-hidden />
                    Commercial Forms
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="settings" aria-hidden />
                    Help
                </Nav.Item>
            </Nav>
            <div className={styles['footer-ccsidebar']}>
                <h1 className={styles['poweredby-ccsidebar']}>powered by</h1>
                <img
                    src="/src/assets/emrc logo black.svg"
                    alt=""
                    className={styles['footer-img-ccsidebar']}
                />
            </div>
        </div>
    );
};
