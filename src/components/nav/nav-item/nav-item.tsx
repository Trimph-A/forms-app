import React from 'react';
import classNames from 'classnames';
import styles from './nav-item.module.scss';

export interface NavItemProps {
    className?: string;
    children?: React.ReactNode;
    selected?: boolean;
    /**
     * Called on click.
     *
     * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} event - The click event.
     * @param {NavItemProps} data - All props.
     */
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, data: NavItemProps) => void;
}

export const NavItem = ({ className, children, selected, onClick }: NavItemProps) => {
    return (
        <div
            tabIndex={selected ? -1 : undefined}
            aria-current={selected ? true : undefined}
            className={classNames(
                styles.root,
                { [styles.selected]: selected },
                className
            )}
            onClick={(event) => onClick?.(event, { className, children, selected })}
        >
            {children}
        </div>
    );
};
