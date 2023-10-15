import './App.css'
import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RoutesInterface} from "./Types/App/routes.type.ts";
import {CssBaseline, ThemeProvider} from "@mui/material";
import themeRtl from "./Assets/theme/themeRtl.ts";
import PageLayOut from "./Components/LayOutContainers/PageLayOut";
import AppRoutes from "./routes.tsx";
import HomePage from "./Pages/MainPage";
import HighestLayOut from "./Components/LayOutContainers/HighestLayOut";
import HighLayout from "./Components/LayOutContainers/HighestLayOut";

function App() {
    const pathName = window.location.pathname
    useEffect(() => {
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
