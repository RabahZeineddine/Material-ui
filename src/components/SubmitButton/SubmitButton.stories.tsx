import React from "react";

import { Story } from "@storybook/react";

import SubmitButton from "./index";
import { SubmitButtonProps } from "../../config/@types/SubmitButton";

const Template: Story<SubmitButtonProps> = (args) => <SubmitButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Submit",
  loading: false,
  disabled: false,
  color: "primary",
  variant: "outlined",
};

export default {
  component: SubmitButton,
  title: "SubmitButton",
};
