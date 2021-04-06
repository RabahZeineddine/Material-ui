import React from "react";
import Box from "@material-ui/core/Box";
import { TabPanelProps } from "../../../config/@types/Tabs";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, hideOnSwitch, ...rest } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...rest}
    >
      {(value === index || hideOnSwitch) && <Box p={3}>{children}</Box>}
    </div>
  );
}
export default TabPanel;
