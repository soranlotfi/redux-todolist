import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {store} from "./App/store.ts";
import {Provider} from "react-redux";
import i18n from "./i18n/i18n.ts";
import {I18nextProvider} from "react-i18next";
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </I18nextProvider>
    </Provider>
)
