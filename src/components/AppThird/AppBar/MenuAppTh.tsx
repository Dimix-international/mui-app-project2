import React from "react";
import {Drawer} from "@mui/material";
import {TrackerProvider} from "../../../providers/TrackerProvider";
import {Tracker} from "../../Tracker/Tracker";

type MenuAppThType = {
    isOpenedMenu: boolean,
    closeMenu: () => void
}
export const MenuAppTh: React.FC<MenuAppThType> = React.memo(props => {
    const {isOpenedMenu, closeMenu} = props;

    return (
        <Drawer
            anchor={'left'}
            open={isOpenedMenu}
            onClose={closeMenu}
            sx={{
                paddingY: '15px',
                width: '400px',
            }}
        >
            <TrackerProvider>
                <Tracker/>
            </TrackerProvider>
        </Drawer>
    )
})