import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH, routes} from "./router.data";

export const Router: FC = () => {
    return <Routes>
        {routes.map(r => <Route key={r.path} path={r.path} element={<r.element/>}/>)}
        <Route path={'*'} element={<Navigate to={PATH.HOME}/>}/>
    </Routes>
}