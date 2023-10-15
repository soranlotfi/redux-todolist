import React from "react";
import {StyledTab, StyledTabs} from "./styles.ts";
import {useAppDispatch, useAppSelector} from "../../../../App/hooks.ts";
import {setTabValue} from "../../../../Features/AppBar/appBarSlice.ts";
import AppRoutes from "../../../../routes.tsx";
import {RoutesInterface} from "../../../../Types/App/routes.type.ts";
import {useNavigate} from "react-router-dom";

const MainNavbar: React.FC = () => {
    const dispatch = useAppDispatch()
    const tabBarValue = useAppSelector(state => state.appBar.value)
    const Navigate = useNavigate()
    function handleChange(event: React.SyntheticEvent, newValue: number) {
        dispatch(setTabValue(newValue))
    }

    return (
        <StyledTabs value={tabBarValue} onChange={handleChange} variant={"scrollable"}>
            {
                AppRoutes.filter(route => route.type === "page").map((route) => (
                    <StyledTab
                        key={route.key}
                        label={route.name}
                        onClick={() => Navigate(route.route, {replace: true})}
                    />
                ))
            }
        </StyledTabs>
    )
}

export default MainNavbar