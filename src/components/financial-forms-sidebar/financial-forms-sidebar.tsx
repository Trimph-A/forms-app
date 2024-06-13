import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './financial-forms-sidebar.module.scss';
import Nav from '../nav/nav';
import { Icon } from '../icon/icon';

export interface FinancialFormsSidebarProps {
    className?: string;
}

export const FinancialFormsSidebar = ({ className }: FinancialFormsSidebarProps) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <>
            <div className={styles.hamburger} onClick={toggleSidebar}>
                <div className={styles['hamburger-icon']}></div>
                <div className={styles['hamburger-icon']}></div>
                <div className={styles['hamburger-icon']}></div>
            </div>
            <div className={classNames(styles.root, className, { [styles.show]: isSidebarVisible })}>
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
        </>
    );
};
