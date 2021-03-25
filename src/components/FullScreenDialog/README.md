# Table

<!-- STORY -->

<hr>

[Material-ui](https://material-ui.com/) Full screen dialog component

##### Import

```TSX
import { FullScreenDialog } from '@rabahzeineddine/Material-ui'
```

##### Usage example

```TSX
<FullScreenDialog title={"Dialog title"} closeDialog={handleClose}>
    <div>Dialog Content</div>
</FullScreenDialog>
```

##### FullScreenDialog Required props

| Name          | Type              | Description |
| ------------- | ----------------- | ----------- |
| `children`    | `React.ReactNode` |             |
| `title`       | `string`          |             |
| `closeDialog` | `() => void`      |             |