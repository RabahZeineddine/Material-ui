# Table

<!-- STORY -->

<hr>

[Material-ui](https://material-ui.com/) Persistent Drawer component

##### Import

```TSX
import { PersistentDrawer, DrawerPage } from '@rabahzeineddine/Material-ui'
import Component from 'Component' // Your component
import Icon from 'Icon' // Component Icon
```

##### Usage example

```TSX
<PersistentDrawer title={"Drawer"}>
    <DrawerPage component={Component} id="componentId" label="Component" icon={Icon} />
    <DrawerPage component={Component} id="componentId" label="Component" icon={Icon} />
</PersistentDrawer>
```

##### PersistentDrawer Required props

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| `children` | `React.ReactNode` |             |

##### PersistentDrawer Optional props

| Name    | Type     | Default | Description |
| ------- | -------- | ------- | ----------- |
| `title` | `string` |         |             |

##### DrawerPage Required props

| Name        | Type              | Description |
| ----------- | ----------------- | ----------- |
| `component` | `React.ReactNode` |             |
| `id`        | `string`          |             |
| `label`     | `string`          |             |
| `icon`      | `React.ReactNode` |             |
