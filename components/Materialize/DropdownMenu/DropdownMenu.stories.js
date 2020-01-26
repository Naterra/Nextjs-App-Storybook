import React from 'react';
import DropdownMenu   from "./DropdownMenu";
import Link from "next/link";

export default {
    title: 'Materialize',
    component: DropdownMenu,
};

const triggerIcon = (
    <div className="nav-avatar-dropdown-trigger">
        <i className="material-icons">arrow_drop_down</i>
    </div>
);

export const _DropdownMenu = () => (
    <DropdownMenu id="menu" activeComponent={triggerIcon} icon="" >
        <li>
            <Link href="/link1">
                <a className="dropdown-item">
                    <span className="icon ion-md-person mr-1" /> Link 1
                </a>
            </Link>
        </li>
        <li>
            <Link href="/link2">
                <a className="dropdown-item">
                    <span className="icon ion-md-person mr-1" /> Link 2
                </a>
            </Link>
        </li>
    </DropdownMenu>
);