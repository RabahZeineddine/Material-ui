import {
  AppBar,
  Tabs as MuiTabs,
  Tab as MuiTab,
  useTheme,
} from "@material-ui/core";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import style from "./style";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import { TabsProps } from "../../config/@types/Tabs";

const useStyles = makeStyles(style);

function a11yProps(index: any) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function Tabs(props: TabsProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  if (
    !props.children ||
    React.Children.toArray(props.children).length === 0 ||
    React.Children.toArray(props.children).some(
      (child) => !React.isValidElement(child) || child.type !== Tab
    )
  ) {
    return <div>Invalid Tab Component</div>;
  }

  return (
    <React.Fragment>
      <AppBar position="static" color="default">
        <MuiTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="Tabs"
          variant={props.fullWidth ? "fullWidth" : "standard"}
        >
          {React.Children.map(props.children, (child, index) => {
            if (!React.isValidElement(child)) return child;
            return (
              <MuiTab
                key={index}
                label={child.props.label}
                disabled={child.props.disabled}
                {...a11yProps(index)}
              />
            );
          })}
        </MuiTabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        className={classes.content}
      >
        {React.Children.map(props.children, (child, index) => {
          if (!React.isValidElement(child)) return child;
          const { component: Component } = child.props;
          return (
            <TabPanel
              key={index}
              value={value}
              index={index}
              dir={theme.direction}
              hideOnSwitch={child.props.hideOnSwitch}
            >
              <Component {...child.props.componentProps} />
            </TabPanel>
          );
        })}
      </SwipeableViews>
    </React.Fragment>
  );
}

export default Tabs;
