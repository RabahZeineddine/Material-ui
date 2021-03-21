import React from "react";

import { Story } from "@storybook/react";

import Table from "./index";

import { TablePropsType } from "../../config/@types/Table";
import Helper from "../../utils/Helper";

const Template: Story<TablePropsType> = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
  columns: [
    { name: "column1", title: "Column 1" },
    { name: "withWidth", title: "With Width", width: 200 },
    {
      name: "nestedValue",
      title: "Nested Value",
      getCellValue: (row: any) => row.nested.value,
    },
    {
      name: "dateColumn",
      title: "Date Column",
      format: (value) => Helper.getFormattedDate(value),
    },
  ],
  rows: [],
};

export default {
  component: Table,
  title: "Table",
};
