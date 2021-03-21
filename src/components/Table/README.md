# Table

<!-- STORY -->

<hr>

[Material-ui](https://material-ui.com/) Table component that works using [React Grid](https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/getting-started/)

##### Import

```TS
import { Table } from '@rabahzeineddine/Material-ui';
```

##### Usage example

```TSX
<Table
    columns={columns}
    rows={rows}
>
```

##### Required props

| Name      | Type                    | Description |
| --------- | ----------------------- | ----------- |
| `columns` | `Array<TableColumn<T>>` |             |
| `rows`    | `Array<T>`              |             |

##### Optional props

| Name                  | Type                                                                                         | Default | Description |
| --------------------- | -------------------------------------------------------------------------------------------- | ------- | ----------- |
| `loading`             | `boolean`                                                                                    |         |             |
| `grouping`            | `boolean`                                                                                    |         |             |
| `defaultGrouping`     | `Array<Grouping>`                                                                            |         |             |
| `defaultSorting`      | `Array<Sorting>`                                                                             |         |             |
| `onSelectionChange`   | `(selection: Array<any>, setSelection: React.Dispatch<React.SetStateAction<any[]>>) => void` |         |             |
| `showPaging`          | `boolean`                                                                                    |         |             |
| `defaultColumnWidth`  | `number`                                                                                     |         |             |
| `onAdd`               | `() => void`                                                                                 |         |             |
| `onRefresh`           | `() => void`                                                                                 |         |             |
| `highlightRow`        | `boolean`                                                                                    |         |             |
| `showSelectionColumn` | `boolean`                                                                                    |         |             |
| `selectByRowClick`    | `boolean`                                                                                    |         |             |
| `showSelectAll`       | `boolean`                                                                                    |         |             |
| `selectedRows`        | `Array<any>`                                                                                 |         |             |
| `showTableEditColumn` | `boolean`                                                                                    |         |             |
| `showDeleteRow`       | `boolean`                                                                                    |         |             |
| `onRowDelete`         | `(rows: Array<number>) => void`                                                              |         |             |
