# Material-ui custom components

This project offers some custom components of [Material-ui](https://material-ui.com/)

## Why a package was created

As I use [Material-ui](https://material-ui.com/) in my projects, I decided to create this package that offers Material-ui custom components

## What problem the package solves

Reuse custom components

## How the package solves the problem

It handles some components of Material-ui and customize it making it easer to use

## All valid configurations/props of the package

### Components

#### Table

This table component is based on [React Grid](https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/getting-started/)

```TSX
import { Table } from '@rabahzeineddine/Material-ui'

<Table 
    columns={columns}
    rows={rows}
/>
```

> For more information check the [Table Documentation](src/components/Table/README.md)

#### PersistentDrawer

```TSX
import { PersistentDrawer, DrawerPage } from '@rabahzeineddine/Material-ui'
import Component from 'Component' // Your component
import Icon from 'Icon' // Component Icon

<PersistentDrawer title={"Drawer"}>
    <DrawerPage component={Component} id="componentId" label="Component" icon={Icon} />
    <DrawerPage component={Component} id="componentId" label="Component" icon={Icon} />
</PersistentDrawer>
```

> For more information check the [Persistent Drawer Documentation](src/components/PersistentDrawer/README.md)

#### FullScreenDialog

```TSX
import { FullScreenDialog } from '@rabahzeineddine/Material-ui'

<FullScreenDialog title={"Dialog title"} closeDialog={handleClose}>
    <div>Dialog Content</div>
</FullScreenDialog>
```

> For more information check the [Full screen dialog Documentation](src/components/FullScreenDialog/README.md)

#### SubmitButton

```TSX
import { SubmitButton } from '@rabahzeineddine/Material-ui'

<SubmitButton label="Submit" loading={loading}>
```

> For more information check the [Full screen dialog Documentation](src/components/SubmitButton/README.md)

#### Tabs

```TSX
import { Tabs, Tab } from '@rabahzeineddine/Material-ui'
import Information from 'Information'
import Addresses from 'Addresses'

<Tabs fullWidth>
    <Tab label="Information" component={Information} />
    <Tab label="Addresses" component={Addresses} />
</Tabs>
```

> For more information check the [Full screen dialog Documentation](src/components/Tabs/README.md)

## Demos of the package in action

Check the [Storybook page](https://rabahzeineddine.github.io/Material-ui/)

<!-- ## Instructions for contributors -->
