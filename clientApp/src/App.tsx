import "./App.css";
import React, {Suspense, useEffect, useState} from "react";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {RoutesInterface} from "./Types/App/routes.type.ts";
import {CssBaseline, ThemeProvider} from "@mui/material";
import themeRtl from "./Assets/theme/themeRtl.ts";
import AppRoutes from "./routes.tsx";
import HomePage from "./Pages/MainPage";
import HighLayout from "./Components/LayOutContainers/HighestLayOut";
import {setTabValue} from "./Features/AppBar/appBarSlice.ts";
import {useAppDispatch, useAppSelector} from "./App/hooks.ts";
import createCache from "@emotion/cache";
import stylisRTLPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import {setLanguage} from "./Features/language/setLanguageSlice.ts";
import {useTranslation} from "react-i18next";

const rtlCache = createCache({
    key: "rtl",
    stylisPlugins: [stylisRTLPlugin],
});

const ltrCache = createCache({
    key: "ltr"
})

function App() {
    const dispatch = useAppDispatch()
    const {language} = useAppSelector(state => state)
    const pathName = window.location.pathname;
    const {i18n} = useTranslation()
    useEffect(() => {
        const tabValue: number | undefined = AppRoutes.find((route) => route.route === pathName)?.TabId;
        dispatch(setTabValue(tabValue ?? 0));
        document.documentElement.scrollTop = 0;
        if (document.scrollingElement) {
            document.scrollingElement.scrollTop = 0;
        }
        document.title = "TodoList";
    }, [pathName]);

    useEffect(() =>{
        if(language.value==='fa'){
            document.dir='rtl'
            i18n.changeLanguage('fa')
        }else {
            document.dir='ltr'
            i18n.changeLanguage('en')
        }
    },[language])
    const getRoutes = (allRoutes: RoutesInterface[]): React.ReactNode =>
        allRoutes.map((route: RoutesInterface) => {
            if (route.route) {
                return <Route path={route.route} key={route.key} element={route.component}/>;
            }
            return null;
        });

    return (
        <>
            <CacheProvider value={language.value === 'fa' ? rtlCache : ltrCache}>
                <ThemeProvider theme={themeRtl}>
                    <Suspense fallback="loading">
                        <CssBaseline/>
                        <BrowserRouter>
                            <HighLayout>
                                <Routes>
                                    {getRoutes(AppRoutes)}
                                    <Route path={"*"} element={<HomePage/>}/>
                                </Routes>
                            </HighLayout>
                        </BrowserRouter>
                    </Suspense>
                </ThemeProvider>
            </CacheProvider>
        </>
    );
}

export default App;