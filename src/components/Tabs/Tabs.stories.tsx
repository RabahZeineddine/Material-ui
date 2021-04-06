import React from "react";

import { Story } from "@storybook/react";

import Tabs from "./index";
import Tab from "./Tab";
import { TabsProps } from "../../config/@types/Tabs";

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: [
    <Tab
      label="Information"
      component={Information}
      disabled={false}
      hideOnSwitch
    />,
    <Tab label="Addresses" component={Addresses} />,
  ],
  fullWidth: true,
};

function Information() {
  return <div>Information</div>;
}
function Addresses() {
  return <div>Addresses</div>;
}

export default {
  component: Tabs,
  title: "Tabs",
};
