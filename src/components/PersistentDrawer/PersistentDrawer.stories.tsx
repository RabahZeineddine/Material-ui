import React from "react";

import { Story } from "@storybook/react";

import PersistentDrawer from "./index";

import { PersistentDrawerType } from "../../config/@types/PersistentDrawer";
import { BrowserRouter } from "react-router-dom";
import DrawerPage from "./DrawerPage/index";
import DashIcon from "@material-ui/icons/Dashboard";
import HomeIcon from "@material-ui/icons/Home";

const Template: Story<PersistentDrawerType> = (args) => (
  <BrowserRouter>
    <PersistentDrawer {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  title: "Drawer",
  children: [
    <DrawerPage component={HomePage} id="home" label="Home" icon={HomeIcon} />,
    <DrawerPage
      component={DashPage}
      id="dashboard"
      label="Dashboard"
      icon={DashIcon}
    />,
  ],
};

function HomePage() {
  return <div>Home page</div>;
}
function DashPage() {
  return <div>Dash page</div>;
}

export default {
  component: PersistentDrawer,
  title: "Persistent Drawer",
};
