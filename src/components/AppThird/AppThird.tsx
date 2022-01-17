import {AppThBar} from "./AppBar/AppThBar";
import {MyRoutes} from "./Routes/Routes";
import {MenuAppTh} from "./AppBar/MenuAppTh";
import {useState} from "react";


export const AppThird = () => {
    const [isOpenedMenu, setOpenedMenu] = useState(false)

    return (
        <>
            <AppThBar
                isOpenedMenu={isOpenedMenu}
                toggleMenu={() => setOpenedMenu(!isOpenedMenu)}
            />
            <MyRoutes/>
            <MenuAppTh
                isOpenedMenu={isOpenedMenu}
                closeMenu={() => setOpenedMenu(false)}
            />
        </>
    )
}