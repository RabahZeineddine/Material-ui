import React, { useEffect } from "react";
import clsx from "clsx";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useHistory, useParams } from "react-router-dom";
import style from "./style";
import { PersistentDrawerType } from "config/@types/PersistentDrawer";
import DrawerPage from "./DrawerPage";

const useStyles = makeStyles(style);

export function PersistentDrawer(props: PersistentDrawerType) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const params: any = useParams();

  const history = useHistory();

  const handlePageChange = (val: string) => {
    history.push(`/${val}`);
    setPage(val);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [page, setPage] = React.useState(params.page);

  useEffect(() => {
    const pages = React.Children.toArray(props.children);
    if (pages.length > 0) {
      const firstPage = pages[0];
      if (React.isValidElement(firstPage)) {
        setPage(firstPage.props.id);
      }
      const selectedPage = pages.find((page) => {
        if (React.isValidElement(page)) {
          return page.props.selected;
        }
        return null;
      });
      if (selectedPage && React.isValidElement(selectedPage))
        setPage(selectedPage?.props?.id || "");
    }
  }, []);

  if (
    !props.children ||
    React.Children.toArray(props.children).length === 0 ||
    React.Children.toArray(props.children).some(
      (child) => !React.isValidElement(child) || child.type !== DrawerPage
    )
  ) {
    return <div>Invalid Pages Components</div>;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {props.title || page}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {React.Children.map(props.children, (child, index) => {
            if (!React.isValidElement(child)) return child;
            const { id, icon: Icon, label } = child.props;
            return (
              <ListItem
                key={index}
                button
                onClick={() => handlePageChange(id)}
                selected={page === id}
              >
                <ListItemIcon>{Icon ? <Icon /> : ""}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container>
          {React.Children.map(props.children, (child, index) => {
            if (React.isValidElement(child)) {
              const { id, component: Component } = child.props;
              if (page === id) return <Component key={index} />;
              return null;
            }
          })}
        </Grid>
      </main>
    </div>
  );
}

export default PersistentDrawer;
