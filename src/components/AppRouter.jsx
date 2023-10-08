
import Posts from "../pages/Posts";
import { Route, Routes } from "react-router-dom";
import { privatePoures, publicPoures } from "../router";
import Login from "../pages/Login";
import { useContext } from "react";
import { AuthContext } from "../context";

const AppRouter = () => {
    const { isAuth } = useContext(AuthContext)

    console.log(isAuth)

    return (
        isAuth
            ?
            <Routes>
                {privatePoures.map(({ path, element: Component }) =>
                    <Route
                        key={path}
                        element={<Component />}
                        path={path}
                    />
                )}
                <Route path='*' element={<Posts />} />
            </Routes>
            :
            <Routes>
                {publicPoures.map(({ path, element: Component }) =>
                    <Route
                        key={path}
                        element={<Component />}
                        path={path}
                    />
                )}
                <Route path='*' element={<Login />} />
            </Routes>
    );
};

export default AppRouter;