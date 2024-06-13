import classNames from 'classnames';
import React, { useState } from 'react';
import Nav from '../nav/nav';
import { Icon } from '../icon/icon';
import styles from './sidebar.module.scss';

export interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
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
        </>
    );
};
