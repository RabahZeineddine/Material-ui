import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import { SubmitButtonProps } from "../../config/@types/SubmitButton";

function SubmitButton(props: SubmitButtonProps) {
  const { label, loading, ...rest } = props;
  return (
    <Button
      style={{
        minWidth: 120,
      }}
      type="submit"
      {...rest}
    >
      {loading ? <CircularProgress size={24} /> : label}
    </Button>
  );
}

export default SubmitButton;
