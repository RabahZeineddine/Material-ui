import React from "react";

import { Story } from "@storybook/react";

import FullScreenDialog from "./index";
import { FullScreenDialogProps } from "../../config/@types/FullScreenDialog";
import { Button } from "@material-ui/core";

const Template: Story<FullScreenDialogProps> = (args) => (
  <React.Fragment>
    <DialogPage {...args} />
  </React.Fragment>
);

export const Default = Template.bind({});

Default.args = {
  title: "Dialog Title",
};

function DialogPage(props: FullScreenDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        open
      </Button>
      {open === true && (
        <FullScreenDialog {...props} closeDialog={handleClose} />
      )}
    </React.Fragment>
  );
}

export default {
  component: FullScreenDialog,
  title: "Full screen dialog",
};
