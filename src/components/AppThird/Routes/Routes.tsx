import {Navigate, Route, Routes} from "react-router-dom";
import {LayoutAppThird} from "../Layout";
import {Home} from "../Home/Home";
import {PageTour} from "../PageTour/PageTour";

export enum PathRoutes {
    Tours = 'tours',
    Tour = 'tours/tour/',
}

export const MyRoutes = () => {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<LayoutAppThird/>}>
                    <Route path={'/'}
                           element={<Navigate to={PathRoutes.Tours}/>}/>
                    <Route path={'tours'} element={<Home/>}/>
                    <Route path={PathRoutes.Tour + ':name'}
                           element={<PageTour/>}/>
                    <Route path={'*'} element={<Home/>}/>
                </Route>
            </Routes>
        </>
    )
}