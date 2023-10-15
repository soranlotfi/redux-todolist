import {styled} from "@mui/system";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

export const StyledTab = styled(Tab)`
  font-weight: bold;
  text-transform: capitalize;
  font-size: 1.2rem;


  &.MuiTab-root {
    color: ;
    z-index: 1;
    padding: 1rem 1.5rem;
  }

  &.Mui-selected {
    color: #ffff;
  }
`;

export const StyledTabs = styled(Tabs)`
  width: 100%;

  & .MuiTabs-indicator {
    background-color: purple;
    height: 100%;
  }
`;