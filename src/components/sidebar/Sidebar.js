import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import {
    FaList,
    FaRegHeart,
    FiHome,
    FiLogOut,
    FiArrowRightCircle,
    RiPencilLine,
    BiCog,
    FiArrowLeftCircle
} from "react-icons/all";
import styles from './sidebar.module.css';
import Triangle from "../decoration/triangle/Triangle";


function Sidebar() {
    const [menuCollapse, setMenuCollapse] = useState(false);

    const menuIconClicked = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div className={styles.sidebar}>
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className={styles.logo}>
                            <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
                        </div>
                        <div className={styles.closemenu} onClick={menuIconClicked}>
                            {menuCollapse ? (
                                <FiArrowRightCircle/>
                            ) : (<FiArrowLeftCircle/>
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome/>}>
                                Home
                            </MenuItem>
                            <MenuItem icon={<FaList/>}>Category</MenuItem>
                            <MenuItem icon={<FaRegHeart/>}>Favorite</MenuItem>
                            <MenuItem icon={<RiPencilLine/>}>Author</MenuItem>
                            <MenuItem icon={<BiCog/>}>Settings</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconshape="square">
                            <MenuItem icon={<FiLogOut/>}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
}

export default Sidebar;