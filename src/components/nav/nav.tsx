import classNames from 'classnames';
import { NavItem, NavItemProps } from './nav-item/nav-item';
import styles from './nav.module.scss';
import React from 'react';

interface NavSubcomponents {
    Item?: NavItemProps;
}

interface NavProps extends NavSubcomponents {
    className?: string;
    children?: React.ReactNode;
    /**
     * Called on click of the entire Nav component.
     *
     * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} event - The click event.
     * @param {NavItemProps} data - All props.
     */
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, data: NavItemProps) => void;
}

const Nav = ({ className, children, onClick }: NavProps) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (onClick) {
            // Assuming data is the props of NavItem, you can modify it accordingly
            onClick(event, { /* Pass any necessary data here */ });
        }
    };

    return <nav className={classNames(styles.root, className)} onClick={handleClick}>{children}</nav>;
};

const Item = (props: NavItemProps) => <NavItem {...props} />;
Nav.Item = Item;

export default Nav;
