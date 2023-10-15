import './App.css'
import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RoutesInterface} from "./Types/App/routes.type.ts";
import {CssBaseline, ThemeProvider} from "@mui/material";
import themeRtl from "./Assets/theme/themeRtl.ts";
import AppRoutes from "./routes.tsx";
import HomePage from "./Pages/MainPage";
import HighLayout from "./Components/LayOutContainers/HighestLayOut";
import {setTabValue} from "./Features/AppBar/appBarSlice.ts";
import {useAppDispatch} from "./App/hooks.ts";

function App() {
    const dispatch = useAppDispatch()
    const pathName = window.location.pathname
    useEffect(() => {
        const tabValue: number | undefined = AppRoutes.find(route => route.route === pathName)?.TabId
        dispatch(setTabValue(tabValue ?? 0))
        document.documentElement.scrollTop = 0;
        if (document.scrollingElement) {
            document.scrollingElement.scrollTop = 0;
        }
        document.title = "TodoList"
    }, [pathName])

    const getRoutes = (allroutes: RoutesInterface[]): React.ReactNode =>
        allroutes.map((route: RoutesInterface) => {
            if (route.route) {
                return (
                    <Route path={route.route} key={route.key} element={route.component}/>
                )

            }
            return null
        })
    return (
        <>
            <ThemeProvider theme={themeRtl}>
                <CssBaseline/>
                <BrowserRouter>
                    <HighLayout>
                        <Routes>
                            {getRoutes(AppRoutes)}
                            <Route path={"*"} element={<HomePage/>}/>
                        </Routes>
                    </HighLayout>
                </BrowserRouter>
            </ThemeProvider>
        </>
    )
}

export default App
