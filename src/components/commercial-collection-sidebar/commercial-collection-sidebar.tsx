import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './commercial-collection-sidebar.module.scss';
import Nav from '../nav/nav';
import { Icon } from '../icon/icon';

export interface CommercialCollectionSidebarProps {
    className?: string;
    onSidebarItemClick: (item: 'collection' | 'commercial') => void;
}

export const CommercialCollectionSidebar = ({ className, onSidebarItemClick }: CommercialCollectionSidebarProps) => {
    const [selectedItem, setSelectedItem] = useState<'collection' | 'commercial'>('collection');

    const handleItemClick = (item: 'collection' | 'commercial') => {
        console.log('Clicked item:', item);
        setSelectedItem(item);
        onSidebarItemClick(item);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="/src/assets/cropped-Kedco-Logo-web.png"
                className={styles['logo-commercial-sidebar']}
            />
            <Nav className={styles.nav}>
                <Nav.Item selected={selectedItem === 'collection'} onClick={() => handleItemClick('collection')}>
                    <Icon glyph="insights" aria-hidden />
                    Collection Forms
                </Nav.Item>

                <Nav.Item selected={selectedItem === 'commercial'} onClick={() => handleItemClick('commercial')}>
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
