import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router/routes'
import About from "../pages/About"
import NotFound from '../pages/NotFound'
import Login from "../pages/Login"
import { useContext } from 'react'
import { AuthContext } from '../context'

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)
    return (
        isAuth 
            ?
            <Routes>
                {privateRoutes.map(route => 
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                    />
                )}
                <Route path='/login' element={<About />} exact={true}/>
                <Route path='*' element={<NotFound />} exact={true}/>
                <Route path='/' element={<About />} exact={true}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => 
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                    />
                )}
                <Route key='*' path='*' element={<Login/>} exact={true}/>
            </Routes>
    )
}

export default AppRouter