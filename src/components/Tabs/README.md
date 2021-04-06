# Tabs

<!-- STORY -->

<hr>

[Material-ui](https://material-ui.com/) Tabs component

##### Import

```TSX
import { Tabs, Tab } from '@rabahzeineddine/Material-ui'
import Information from 'Information'
import Addresses from 'Addresses'
```

##### Usage example

```TSX
<Tabs fullWidth>
    <Tab label="Information" component={Information} />
    <Tab label="Addresses" component={Addresses} />
</Tabs>
```

##### Tabs Required props

| Name        | Type              | Description |
| ----------- | ----------------- | ----------- |
| `children`  | `React.ReactNode` |             |
| `fullWidth` | `boolean`         |             |

##### Tab Required props

| Name        | Type              | Description |
| ----------- | ----------------- | ----------- |
| `label`     | `string`          |             |
| `component` | `React.ReactNode` |             |

##### Tab Optional props

| Name             | Type                    | Description |
| ---------------- | ----------------------- | ----------- |
| `disabled`       | `boolean`               |             |
| `hideOnSwitch`   | `boolean`               |             |
| `componentProps` | `{ [key: string]: any}` |             |
