import './App.css'
import React, {ReactNode, useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RoutesInterface} from "./Types/App/routes.type.ts";
import {CssBaseline, ThemeProvider} from "@mui/material";
import themeRtl from "./Assets/theme/themeRtl.ts";
import PageLayOut from "./Components/LayOutContainers/PageLayOut";
import AppRoutes from "./routes.tsx";
import MainPage from "./Pages/MainPage";

function App() {
    const pathName = window.location.pathname
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        if (document.scrollingElement) {
            document.scrollingElement.scrollTop = 0;
        }
        document.title = "TodoList"
    }, [pathName])

    const getRoutes = (allroutes: RoutesInterface[]) : React.ReactNode =>
        allroutes.map((route: RoutesInterface) => {
            if (route.route) {
                return (
                    <Route path={route.route} key={route.key} element={route.route}/>
                )

            }
            return null
        })
    return (
        <>
            <ThemeProvider theme={themeRtl}>
                <CssBaseline/>
                <BrowserRouter>
                    <PageLayOut>
                        <Routes>
                            {getRoutes(AppRoutes)}
                            <Route path={"*"} element={<MainPage/>}/>
                        </Routes>
                    </PageLayOut>
                </BrowserRouter>
            </ThemeProvider>
        </>
    )
}

export default App
