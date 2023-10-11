import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import{Grid} from "@mui/material";
import * as React from "react";
import {useAppDispatch, useAppSelector} from "../../../../App/hooks.ts";
import {setTabValue} from "../../../../Features/AppBar/appBarSlice.ts";
import TodoList from "../../../../Pages/TodoList";
import SBox from "../../../SBox/Index.tsx";
import {useTheme} from "@mui/material/styles";
import STab from "../../../AppBar";

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <SBox sx={{ p: 3 }}>
                    {children}
                </SBox>
            )}
        </div>
    );
}


const AppNavBar: React.FC = () => {
    const dispatch = useAppDispatch()
    const value = useAppSelector((state) => state.appBar.value)
    console.log(value)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        dispatch(setTabValue(newValue));
    };

    const theme = useTheme()
    console.log(theme)
    return (
       <>
           <AppBar position="static">
               <Tabs
                   value={value}
                   onChange={handleChange}
                   indicatorColor="secondary"
                   textColor="inherit"
                   variant="fullWidth"
                   aria-label="full width tabs example"
               >
                   <STab label="Item One" {...a11yProps(0)} />
                   <Tab label="Item Two" {...a11yProps(1)} />
                   <Tab label="Item Three" {...a11yProps(2)} />
               </Tabs>
           </AppBar>
           <Grid container p={"4rem"} bgcolor={"yellow.main"}>
               <SBox>
                   <TabPanel value={value} index={0} dir={theme.direction}>
                       <TodoList/>
                   </TabPanel>
                   <TabPanel value={value} index={1} dir={theme.direction}>
                       Item Two
                   </TabPanel>
                   <TabPanel value={value} index={2} dir={theme.direction}>
                       Item Three
                   </TabPanel>
               </SBox>
           </Grid>
       </>
    )
}

export default AppNavBar