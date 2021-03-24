import { DrawerPageProps } from "config/@types/PersistentDrawer";
import React from "react";

const DrawerPage = React.forwardRef((props: DrawerPageProps) => {
  return <div>{props}</div>;
});

export default DrawerPage;
